/// <reference path="node_modules/@nativescript/types/index.d.ts" />
import { Color } from '@nativescript/core/color';
import { Device } from '@nativescript/core/platform';
import { Frame } from '@nativescript/core/ui/frame';

import { AnonUserIdentity, HelpCenterOptions, InitConfig, IosThemeSimple, RequestConfig } from './zendesk-sdk';
import { ZendeskSdk as ZendeskSdkDefinition } from './zendesk-sdk';

export * from './zendesk-sdk.common';

export class ZendeskSdk implements ZendeskSdkDefinition {

    private constructor() { }

    public static initialize(config: InitConfig): typeof ZendeskSdk {

        ZDKConfig.instance().initializeWithAppIdZendeskUrlClientId(
            config.applicationId, config.zendeskUrl, config.clientId,
        );

        if ( config.userLocale ) {
            ZendeskSdk.setUserLocale(config.userLocale);
        }

        if ( config.identity === null ) {
            ZendeskSdk.setAnonymousIdentity();
        } else if ( typeof config.identity === 'object' ) {
            ZendeskSdk.setAnonymousIdentity(config.identity);
        } else if ( typeof config.identity === 'string' ) {
            ZendeskSdk.setJwtIdentity(config.identity);
        }

        return ZendeskSdk;
    }

    public static setUserLocale(locale: string): typeof ZendeskSdk {

        ZDKConfig.instance().userLocale = locale;

        return ZendeskSdk;
    }

    public static setAnonymousIdentity(anonUserIdentity: AnonUserIdentity = {}): typeof ZendeskSdk {

        const identity: ZDKAnonymousIdentity = ZDKAnonymousIdentity.new();

        if ( anonUserIdentity.name ) { identity.name = anonUserIdentity.name; }

        if ( anonUserIdentity.email ) { identity.email = anonUserIdentity.email; }

        ZDKConfig.instance().userIdentity = identity;

        return ZendeskSdk;
    }

    public static setJwtIdentity(jwtUserIdentifier: string): typeof ZendeskSdk {

        ZDKConfig.instance().userIdentity = ZDKJwtIdentity.alloc().initWithJwtUserIdentifier(jwtUserIdentifier);

        return ZendeskSdk;
    }

    public static configureRequests(config: RequestConfig): typeof ZendeskSdk {

        config.addDeviceInfo = config.addDeviceInfo != null ? config.addDeviceInfo : true;
        let tagsNSArray: NSMutableArray<any> = null;
        if ( config.tags ) {
            tagsNSArray = NSMutableArray.alloc().initWithCapacity(config.tags.length);
            config.tags.forEach((value: string) => {
                tagsNSArray.addObject(value);
            });
        }

        const deviceInfo: string = config.addDeviceInfo
            ? '\n\n' + Device.language + '-' + Device.region + '\n'
              + Device.manufacturer + ' ' + Device.model + '\n' + Device.os + ' '
              + Device.osVersion + '(' + Device.sdkVersion + ')'
            : '';
        ZDKRequests.configure(
            (account: ZDKAccount,
             requestCreationConfig: ZDKRequestCreationConfig) => {
                requestCreationConfig.subject = config.requestSubject;
                requestCreationConfig.additionalRequestInfo = !!config.additionalInfo || config.addDeviceInfo
                    ? '\n\n------------------------------' // added to make the output the same as Android SDK
                      + (!!config.additionalInfo
                            ? '\n\n' + config.additionalInfo
                            : ''
                      ) + deviceInfo
                    : '';

                requestCreationConfig.tags = tagsNSArray;
            },
        );

        return ZendeskSdk;
    }

    public static showHelpCenter(options: HelpCenterOptions = {}): void {
        const contentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        ZendeskSdk._initHelpCenter(options, contentModel);
    }

    public static showHelpCenterForCategoryIds(categoryIds: Array<number>,
                                               options: HelpCenterOptions = {}): void {
        const contentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        contentModel.groupType = ZDKHelpCenterOverviewGroupType.Category;
        ZendeskSdk._initHelpCenter(options, contentModel);
    }

    public static showHelpCenterForLabelNames(labelNames: Array<string>,
                                              options: HelpCenterOptions = {}): void {
        const contentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        const nsArray = NSMutableArray.alloc().initWithCapacity(labelNames.length);
        labelNames.forEach((value: string) => {
            nsArray.addObject(value);
        });
        contentModel.labels = nsArray;
        ZendeskSdk._initHelpCenter(options, contentModel);
    }

    public static showHelpCenterForSectionIds(sectionIds: Array<number>,
                                              options: HelpCenterOptions = {}): void {
        const contentModel: ZDKHelpCenterOverviewContentModel = ZDKHelpCenterOverviewContentModel.defaultContent();
        contentModel.groupType = ZDKHelpCenterOverviewGroupType.Section;
        ZendeskSdk._initHelpCenter(options, contentModel);
    }

    public static showArticle(articleId: string): void {
        const provider: ZDKHelpCenterProvider = ZDKHelpCenterProvider.alloc()
            .initWithLocale(ZDKConfig.instance().userLocale);
        provider.getArticleByIdWithCallback(
            articleId, (items: NSArray<any>,
                        error: NSError) => {
                if ( items.count > 0 ) {
                    const vc: ZDKArticleViewController = ZDKArticleViewController.alloc()
                        .initWithArticle(items.firstObject);
                    Frame.topmost()
                        .ios
                        .controller
                        .pushViewControllerAnimated(vc, true);
                }
            },
        );
    }

    public static createRequest(): void {
        ZDKRequests.presentRequestCreationWithViewController(Frame.topmost().ios.controller);
    }

    public static setIosTheme(theme: IosThemeSimple): void {
        const baseTheme: ZDKTheme = ZDKTheme.baseTheme();

        if ( theme.primaryTextColor ) {
            baseTheme.primaryTextColor = new Color(theme.primaryTextColor).ios;
        }
        if ( theme.secondaryTextColor ) {
            baseTheme.secondaryTextColor = new Color(theme.secondaryTextColor).ios;
        }
        if ( theme.primaryBackgroundColor ) {
            baseTheme.primaryBackgroundColor = new Color(theme.primaryBackgroundColor).ios;
        }
        if ( theme.secondaryBackgroundColor ) {
            baseTheme.secondaryBackgroundColor = new Color(theme.secondaryBackgroundColor).ios;
        }
        if ( theme.emptyBackgroundColor ) {
            baseTheme.emptyBackgroundColor = new Color(theme.emptyBackgroundColor).ios;
        }
        if ( theme.metaTextColor ) {
            baseTheme.metaTextColor = new Color(theme.metaTextColor).ios;
        }
        if ( theme.separatorColor ) {
            baseTheme.separatorColor = new Color(theme.separatorColor).ios;
        }
        if ( theme.inputFieldTextColor ) {
            baseTheme.inputFieldTextColor = new Color(theme.inputFieldTextColor).ios;
        }
        if ( theme.inputFieldBackgroundColor ) {
            baseTheme.inputFieldBackgroundColor = new Color(theme.inputFieldBackgroundColor).ios;
        }
        if ( theme.fontName ) { baseTheme.fontName = theme.fontName; }
        if ( theme.boldFontName ) { baseTheme.boldFontName = theme.boldFontName; }

        baseTheme.apply();
    }

    private static _initHelpCenter(options: HelpCenterOptions,
                                   helpCenterContentModel: ZDKHelpCenterOverviewContentModel): void {
        if ( options.conversationsMenuIos != null ? !options.conversationsMenuIos : false ) {
            ZDKHelpCenter.setNavBarConversationsUIType(ZDKNavBarConversationsUIType.None);
        }
        if ( options.showAsModalForIos != null ? options.showAsModalForIos : false ) {
            Frame.topmost().ios.controller.modalPresentationStyle = UIModalPresentationStyle.FormSheet;
            ZDKHelpCenter.presentHelpCenterOverviewWithContentModel(Frame.topmost().ios.controller, helpCenterContentModel);
        } else {
            ZDKHelpCenter.pushHelpCenterOverviewWithContentModel(Frame.topmost().ios.controller, helpCenterContentModel);
        }
    }
}
