# nativescript-zendesk-sdk
[![npm](https://img.shields.io/npm/v/nativescript-zendesk-sdk.svg)](https://www.npmjs.com/package/nativescript-localize)
[![npm](https://img.shields.io/npm/dt/nativescript-zendesk-sdk.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-localize)

A NativeScript plugin implementing the basic Zendesk SDK in TypeScript.
It is inspired from [nativescript-zendesk](https://github.com/sitefinitysteve/nativescript-zendesk)

## Install
```shell
tns plugin add nativescript-zendesk-sdk
```

## Usage

Following [Zendesk Embeddables Documentation](https://developer.zendesk.com/embeddables):

### [Must do] Configure an app in Zendesk Support
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/configure_an_app) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/configure_an_app)_

### [Must do] Initialize the SDK
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/initialize_sdk) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/initialize_sdk)_
```typescript
import { ZendeskSdk } from "nativescript-zendesk-sdk";
...
ZendeskSdk.initialize("zendeskUrl", "applicationId", "clientId");
```
### [Must do] Set an identity (authentication)
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/set_an_identity) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/set_an_identity)_

#### Authenticate using an anonymous identity
```typescript
ZendeskSdk.setAnonymousIdentity(null, null);
```

#### Authenticate using an anonymous identity (with COPPA compliance)
```typescript
ZendeskSdk.setCoppaEnabled(true);

ZendeskSdk.setAnonymousIdentity(null, null);
```

#### Authenticate using an anonymous identity (with details)
```typescript
ZendeskSdk.setAnonymousIdentity("name", "email");
```

#### Authenticate using your JWT endpoint
```typescript
ZendeskSdk.setJwtIdentity("jwtUserIdentifier");
```

### Show the Help Center
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/show_help_center) / [iOS](https://developer.zendesk.com/embeddables/docs/ios/show_help_center)_

#### Default Usage
```typescript
ZendeskSdk.showHelpCenter();
```

#### Optional Parameters
```typescript
showHelpCenter(
    showConversationsMenuButtonForAndroid: boolean = true,
    showConversationsMenuButtonForIos: boolean = true,
    withCategoriesCollapsedForAndroid: boolean = false,
    showContactUsButtonForAndroid: boolean = false,
    showAsModalForIos: boolean = false,);
```

_Note:  The SDKs for Android and iOS diverge quite a bit for this section, so some options are only applicable to iOS or Android._

##### Both

###### showConversationMenuButtonFor(Android/Ios) [_default = true_]
Enables a button in the navigation bar that enables users to view their active requests/converations or start a new one.

##### Android only

###### showContactUsButtonForAndroid [_default = false_]
This displays an additional `(+)` button in the lower-right corner, similar to the button in the Android templates.

While it is enabled by default in the SDK, it has been disabled by default here since:
1. It is not available on iOS
2. It is not necessary, since it is also available in the conversations menu
3. It's usage is ambiguous to begin with and just clutters the screen. (It was likely only added since the SDK developer used the default Android template to start with and just left it in.)

###### withCategoriesCollapsedForAndroid [_default = false_]
This collapses the categories into their headers. The default behaviour on both Android and iOS is to show the first 5 of a category, and then has the option to expand further if more are available.

##### iOS only

###### showAsModalForIos [_default = false_]
This displays the helpcenter as a modal action sheet.

### Filter the Help Center
_Support SDK for [Android](https://developer.zendesk.com/embeddables/docs/android/filter_help_center) / [iOS](https://developer.zendesk.com/embeddables/docs/iOS/filter_help_center)_

Per original SDKs, only one filter can be used at a time.

#### Filter by category
```typescript
showHelpCenterForCategoryIds(
    categoryIds: number[],
    /*same optional parameters as unfiltered*/);
```

#### Filter by section
```typescript
showHelpCenterForLabelNames(
    categoryIds: string[],
    /*same optional parameters as unfiltered*/);
```

#### Filter by article label
```typescript
showHelpCenterForSectionIds(
    categoryIds: number[],
    /*same optional parameters as unfiltered*/);
```

### Create a request
```typescript
createRequest(
    requestSubject?: string,
    additionalInfo?: string,
    addDeviceInfo: boolean = true,
    ...tags: string[]);
```

## Styling

### Android

### iOS

## Contributions
Typings and iOS metadata have been included in the project to allow for easier usage.  
Typings were autogenerated using:  
https://github.com/NativeScript/android-dts-generator  
https://docs.nativescript.org/runtimes/ios/how-to/Use-Native-Libraries  
Although some manual changes had to be made by commenting-out types and setting to `any` that NativeScript handles the conversions for, such as NSArray and `java.util.List`.  
Current typings/metadata were generated using version `1.9.0.1` of the Zendesk and Zendesk Provider SDKs.
