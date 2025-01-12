
declare class ZDKAgentCommentTableCell extends ZDKRequestCommentTableCell {

	static alloc(): ZDKAgentCommentTableCell; // inherited from NSObject

	static appearance(): ZDKAgentCommentTableCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKAgentCommentTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKAgentCommentTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKAgentCommentTableCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKAgentCommentTableCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKAgentCommentTableCell; // inherited from UIAppearance

	static cellHeightForCommentWithUserInWidth(commentWithUser: ZDKCommentWithUser, width: number): number;

	static new(): ZDKAgentCommentTableCell; // inherited from NSObject

	author: UILabel;

	avatar: UIImageView;

	avatarCache: NSMutableDictionary<any, any>;
}

declare class ZDKArticleView extends UIView implements UIAppearanceContainer {

	static alloc(): ZDKArticleView; // inherited from NSObject

	static appearance(): ZDKArticleView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKArticleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKArticleView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKArticleView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKArticleView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKArticleView; // inherited from UIAppearance

	static loadingArticle(): ZDKArticleView;

	static new(): ZDKArticleView; // inherited from NSObject

	article: UIScrollView;

	articleWebView: UIWebView;

	attachments: UITableView;

	deeplinkingSpinner: UIActivityIndicatorView;

	delegate: ZDKHelpCentreArticleViewProtocol;

	readonly loading: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { article: ZDKHelpCenterArticle; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithArticle(article: ZDKHelpCenterArticle): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadArticleForRotation(): void;

	renderArticle(article: ZDKHelpCenterArticle): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDKArticleViewController extends ZDKUIViewController implements MFMailComposeViewControllerDelegate, ZDKHelpCentreArticleViewProtocol {

	static alloc(): ZDKArticleViewController; // inherited from NSObject

	static new(): ZDKArticleViewController; // inherited from NSObject

	articleView: ZDKArticleView;

	uiDelegate: ZDKHelpCenterConversationsUIDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { article: ZDKHelpCenterArticle; });

	constructor(o: { articleViewModel: ZDKHelpCenterArticleViewModel; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithArticle(article: ZDKHelpCenterArticle): this;

	initWithArticleViewModel(articleViewModel: ZDKHelpCenterArticleViewModel): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	mailComposeControllerDidFinishWithResultError(controller: MFMailComposeViewController, result: MFMailComposeResult, error: NSError): void;

	openLinkToNewArticle(articleId: string): void;

	openMailWithReciever(reciever: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDKAttachmentCollectionViewCell extends UICollectionViewCell {

	static alloc(): ZDKAttachmentCollectionViewCell; // inherited from NSObject

	static appearance(): ZDKAttachmentCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKAttachmentCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKAttachmentCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKAttachmentCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKAttachmentCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKAttachmentCollectionViewCell; // inherited from UIAppearance

	static new(): ZDKAttachmentCollectionViewCell; // inherited from NSObject

	static preferedSize(): CGSize;

	static reuseIdentifier(): string;

	prepareWithImage(image: UIImage): void;
}

declare class ZDKAttachmentView extends UIView {

	static alloc(): ZDKAttachmentView; // inherited from NSObject

	static appearance(): ZDKAttachmentView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKAttachmentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKAttachmentView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKAttachmentView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKAttachmentView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKAttachmentView; // inherited from UIAppearance

	static new(): ZDKAttachmentView; // inherited from NSObject

	readonly attachmentsCollectionView: UICollectionView;

	addTargetForCloseAction(target: any, action: string): void;
}

declare class ZDKAttachmentViewDataSource extends NSObject implements UICollectionViewDataSource {

	static alloc(): ZDKAttachmentViewDataSource; // inherited from NSObject

	static new(): ZDKAttachmentViewDataSource; // inherited from NSObject

	data: NSMutableArray<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanMoveItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCellForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): UICollectionViewCell;

	collectionViewIndexPathForIndexTitleAtIndex(collectionView: UICollectionView, title: string, index: number): NSIndexPath;

	collectionViewMoveItemAtIndexPathToIndexPath(collectionView: UICollectionView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexTitlesForCollectionView(collectionView: UICollectionView): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInCollectionView(collectionView: UICollectionView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDKCommentInputView extends UIView {

	static alloc(): ZDKCommentInputView; // inherited from NSObject

	static appearance(): ZDKCommentInputView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKCommentInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKCommentInputView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKCommentInputView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKCommentInputView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKCommentInputView; // inherited from UIAppearance

	static new(): ZDKCommentInputView; // inherited from NSObject

	readonly sendButton: UIButton;

	constructor(o: { attachemntEnabled: boolean; });

	initWithAttachemntEnabled(attachmentEnabled: boolean): this;

	preferredHeight(): number;
}

declare class ZDKCommentInputViewController extends UIViewController {

	static alloc(): ZDKCommentInputViewController; // inherited from NSObject

	static new(): ZDKCommentInputViewController; // inherited from NSObject

	commentInputView: ZDKCommentInputView;

	constructor(o: { request: ZDKRequest; isAttachmentEnabled: boolean; });

	initWithRequestIsAttachmentEnabled(request: ZDKRequest, isAttachmentEnabled: boolean): this;

	preferredHeight(): number;
}

interface ZDKCommentInputViewDelegate extends NSObjectProtocol {

	didSelectAttachment?(): void;

	didSelectSend?(commentBody: string): void;

	shouldSelectAttachment?(): boolean;

	shouldSelectSend?(): boolean;
}
declare var ZDKCommentInputViewDelegate: {

	prototype: ZDKCommentInputViewDelegate;
};

interface ZDKCommentListRetryDelegate extends NSObjectProtocol {

	refresh(): void;
}
declare var ZDKCommentListRetryDelegate: {

	prototype: ZDKCommentListRetryDelegate;
};

declare class ZDKCommentsListLoadingTableCell extends UITableViewCell {

	static alloc(): ZDKCommentsListLoadingTableCell; // inherited from NSObject

	static appearance(): ZDKCommentsListLoadingTableCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKCommentsListLoadingTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKCommentsListLoadingTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKCommentsListLoadingTableCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKCommentsListLoadingTableCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKCommentsListLoadingTableCell; // inherited from UIAppearance

	static new(): ZDKCommentsListLoadingTableCell; // inherited from NSObject
}

declare class ZDKCommentsTableViewController extends UIViewController implements ZDKRotationForwarding {

	static alloc(): ZDKCommentsTableViewController; // inherited from NSObject

	static new(): ZDKCommentsTableViewController; // inherited from NSObject

	readonly commentsView: UITableView;

	readonly datasource: ZDKCommentsTableViewDataSource;

	rotationEventDelegate: ZDKRotationForwarding;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { request: ZDKRequest; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithRequest(request: ZDKRequest): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	orientationWillChange(toInterfaceOrientation: UIInterfaceOrientation): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDKCommentsTableViewDataSource extends NSObject implements UITableViewDataSource {

	static alloc(): ZDKCommentsTableViewDataSource; // inherited from NSObject

	static new(): ZDKCommentsTableViewDataSource; // inherited from NSObject

	readonly items: NSArray<any>;

	readonly loadingInProgress: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { request: ZDKRequest; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithRequest(request: ZDKRequest): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	itemAtIndexPath(indexPath: NSIndexPath): any;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadData(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;
}

declare class ZDKCommentsTableViewDelegate extends NSObject implements UITableViewDelegate, ZDKRotationForwarding {

	static alloc(): ZDKCommentsTableViewDelegate; // inherited from NSObject

	static new(): ZDKCommentsTableViewDelegate; // inherited from NSObject

	rotationEventDelegate: ZDKRotationForwarding;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	orientationWillChange(toInterfaceOrientation: UIInterfaceOrientation): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class ZDKCommentsViewController extends ZDKUIViewController implements ZDKRotationForwarding {

	static alloc(): ZDKCommentsViewController; // inherited from NSObject

	static new(): ZDKCommentsViewController; // inherited from NSObject

	readonly request: ZDKRequest;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { request: ZDKRequest; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismiss(): void;

	initWithRequest(aRequest: ZDKRequest): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	orientationWillChange(toInterfaceOrientation: UIInterfaceOrientation): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface ZDKCreateRequestUIDelegate extends NSObjectProtocol {

	createRequestBarButtonImage(): UIImage;

	createRequestBarButtonLocalizedLabel(): string;

	navBarCreateRequestUIType(): ZDKNavBarCreateRequestUIType;
}
declare var ZDKCreateRequestUIDelegate: {

	prototype: ZDKCreateRequestUIDelegate;
};

declare class ZDKCreateRequestView extends UIView implements UIAppearanceContainer {

	static alloc(): ZDKCreateRequestView; // inherited from NSObject

	static appearance(): ZDKCreateRequestView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKCreateRequestView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKCreateRequestView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKCreateRequestView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKCreateRequestView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKCreateRequestView; // inherited from UIAppearance

	static new(): ZDKCreateRequestView; // inherited from NSObject

	attachImageButton: UIButton;

	emailField: UITextField;

	readonly textViewHeight: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDKCreateRequestViewController extends UIViewController {

	static alloc(): ZDKCreateRequestViewController; // inherited from NSObject

	static new(): ZDKCreateRequestViewController; // inherited from NSObject

	delegate: ZDKCreateRequestViewControllerDelegate;
}

interface ZDKCreateRequestViewControllerDelegate extends NSObjectProtocol {

	createRequestViewControllerDidCreateTicketWithSuccess?(viewController: ZDKCreateRequestViewController, result: any): void;

	createRequestViewControllerDidFailCreateTicketWithError?(viewController: ZDKCreateRequestViewController, error: NSError): void;

	createRequestViewControllerDidFinish?(viewController: ZDKCreateRequestViewController): void;

	dismiss?(): void;
}
declare var ZDKCreateRequestViewControllerDelegate: {

	prototype: ZDKCreateRequestViewControllerDelegate;
};

declare class ZDKEndUserCommentTableCell extends ZDKRequestCommentTableCell {

	static alloc(): ZDKEndUserCommentTableCell; // inherited from NSObject

	static appearance(): ZDKEndUserCommentTableCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKEndUserCommentTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKEndUserCommentTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKEndUserCommentTableCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKEndUserCommentTableCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKEndUserCommentTableCell; // inherited from UIAppearance

	static cellHeightForCommentWithUserInWidth(commentWithUser: ZDKCommentWithUser, width: number): number;

	static new(): ZDKEndUserCommentTableCell; // inherited from NSObject
}

declare class ZDKHelpCenter extends NSObject implements ZDKHelpCenterConversationsUIDelegate {

	static alloc(): ZDKHelpCenter; // inherited from NSObject

	static new(): ZDKHelpCenter; // inherited from NSObject

	static presentHelpCenterOverviewWithContentModel(viewController: UIViewController, helpCenterContentModel: ZDKHelpCenterOverviewContentModel): void;

	static pushHelpCenterOverviewWithContentModel(navController: UINavigationController, helpCenterContentModel: ZDKHelpCenterOverviewContentModel): void;

	static setConversationsBarButtonImage(name: string): void;

	static setNavBarConversationsUIType(uiType: ZDKNavBarConversationsUIType): void;

	static setUIDelegate(delegate: ZDKHelpCenterConversationsUIDelegate): void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	active(): ZDKContactUsVisibility;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	conversationsBarButtonImage(): UIImage;

	conversationsBarButtonLocalizedLabel(): string;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navBarConversationsUIType(): ZDKNavBarConversationsUIType;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDKHelpCenterAttachmentsDataSource extends ZDKHelpCenterDataSource {

	static alloc(): ZDKHelpCenterAttachmentsDataSource; // inherited from NSObject

	static new(): ZDKHelpCenterAttachmentsDataSource; // inherited from NSObject

	constructor(o: { articleId: string; });

	initWithArticleId(articleId: string): this;
}

declare class ZDKHelpCenterDataSource extends NSObject implements UITableViewDataSource {

	static alloc(): ZDKHelpCenterDataSource; // inherited from NSObject

	static cellIdentifierForDataSource(): string;

	static new(): ZDKHelpCenterDataSource; // inherited from NSObject

	readonly hasItems: boolean;

	readonly items: NSArray<any>;

	readonly provider: ZDKHelpCenterProvider;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	itemAtIndexPath(indexPath: NSIndexPath): any;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadData(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;
}

declare var ZDKHelpCenterEmptyHelpCenterDescription: string;

declare const enum ZDKHelpCenterError {

	InvalidCategoryIds = 100,

	InvalidSectionIds = 101,

	NoArticlesForLabels = 102,

	EmptyHelpCenter = 103
}

declare var ZDKHelpCenterErrorDomain: string;

declare var ZDKHelpCenterNoArticlesForLabelsDescription: string;

declare var ZDKHelpCenterNoCategoriesLocalisedDescription: string;

declare var ZDKHelpCenterNoSectionsLocalisedDescription: string;

declare class ZDKHelpCenterOverviewController extends UIViewController {

	static alloc(): ZDKHelpCenterOverviewController; // inherited from NSObject

	static new(): ZDKHelpCenterOverviewController; // inherited from NSObject

	uiDelegate: ZDKHelpCenterConversationsUIDelegate;

	constructor(o: { helpCenterOverviewModel: ZDKHelpCenterOverviewContentModel; });

	initWithHelpCenterOverviewModel(helpCenterContentModel: ZDKHelpCenterOverviewContentModel): this;
}

interface ZDKHelpCentreArticleViewProtocol extends NSObjectProtocol {

	openLinkToNewArticle?(articleId: string): void;

	openMailWithReciever?(reciever: string): void;
}
declare var ZDKHelpCentreArticleViewProtocol: {

	prototype: ZDKHelpCentreArticleViewProtocol;
};

declare class ZDKImageViewerViewController extends ZDKUIViewController implements UIScrollViewDelegate {

	static alloc(): ZDKImageViewerViewController; // inherited from NSObject

	static new(): ZDKImageViewerViewController; // inherited from NSObject

	rotationEventDelegate: ZDKRotationForwarding;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { image: UIImage; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismiss(): void;

	initWithImage(image: UIImage): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface ZDKLayoutGuide {
	layoutTopGuide: boolean;
	layoutBottomGuide: boolean;
}
declare var ZDKLayoutGuide: interop.StructType<ZDKLayoutGuide>;

declare var ZDKLayoutRespectAll: ZDKLayoutGuide;

declare var ZDKLayoutRespectBottom: ZDKLayoutGuide;

declare var ZDKLayoutRespectNone: ZDKLayoutGuide;

declare var ZDKLayoutRespectTop: ZDKLayoutGuide;

declare const enum ZDKNavBarCreateRequestUIType {

	LocalizedLabel = 0,

	Image = 1
}

declare class ZDKPushUtil extends NSObject {

	static alloc(): ZDKPushUtil; // inherited from NSObject

	static handlePushForApplicationPresentationStyleLayoutGuideWithAppIdZendeskUrlClientId(pushInfo: NSDictionary<any, any>, application: UIApplication, presentationStyle: UIModalPresentationStyle, guide: ZDKLayoutGuide, applicationId: string, zendeskUrl: string, oAuthClientId: string): void;

	static handlePushForApplicationPresentationStyleLayoutGuideWithAppIdZendeskUrlClientIdFetchCompletionHandler(pushInfo: NSDictionary<any, any>, application: UIApplication, presentationStyle: UIModalPresentationStyle, guide: ZDKLayoutGuide, applicationId: string, zendeskUrl: string, oAuthClientId: string, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	static new(): ZDKPushUtil; // inherited from NSObject
}

declare class ZDKRequestCommentAttachmentLoadingTableCell extends ZDKRequestCommentTableCell {

	static alloc(): ZDKRequestCommentAttachmentLoadingTableCell; // inherited from NSObject

	static appearance(): ZDKRequestCommentAttachmentLoadingTableCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKRequestCommentAttachmentLoadingTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKRequestCommentAttachmentLoadingTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKRequestCommentAttachmentLoadingTableCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKRequestCommentAttachmentLoadingTableCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKRequestCommentAttachmentLoadingTableCell; // inherited from UIAppearance

	static cellHeightForCommentWithAttachment(width: number): number;

	static new(): ZDKRequestCommentAttachmentLoadingTableCell; // inherited from NSObject
}

declare class ZDKRequestCommentTableCell extends UITableViewCell {

	static alloc(): ZDKRequestCommentTableCell; // inherited from NSObject

	static appearance(): ZDKRequestCommentTableCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKRequestCommentTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKRequestCommentTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKRequestCommentTableCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKRequestCommentTableCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKRequestCommentTableCell; // inherited from UIAppearance

	static new(): ZDKRequestCommentTableCell; // inherited from NSObject

	static reuseId(): string;

	body: UILabel;

	timestamp: UILabel;

	prepareUsingCommentWithUser(commentWithUser: ZDKCommentWithUser): void;
}

declare class ZDKRequestCreationConfig extends NSObject {

	static alloc(): ZDKRequestCreationConfig; // inherited from NSObject

	static new(): ZDKRequestCreationConfig; // inherited from NSObject

	additionalRequestInfo: string;

	subject: string;

	tags: NSArray<any>;

	contentSeperator(): string;
}

declare class ZDKRequestListTable extends UITableView implements UITableViewDataSource, UITableViewDelegate {

	static alloc(): ZDKRequestListTable; // inherited from NSObject

	static appearance(): ZDKRequestListTable; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKRequestListTable; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKRequestListTable; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKRequestListTable; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKRequestListTable; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKRequestListTable; // inherited from UIAppearance

	static new(): ZDKRequestListTable; // inherited from NSObject

	errorString: string;

	loadingInProgress: boolean;

	refreshError: boolean;

	requests: NSArray<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { requestStorage: ZDKRequestStorage; });

	cellHeight(): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	initWithRequestStorage(requestStorage: ZDKRequestStorage): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerForEventsWithSelector(observer: any, selector: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableHeight(): number;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	unregisterForEvents(observer: any): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class ZDKRequestListTableCell extends UITableViewCell {

	static alloc(): ZDKRequestListTableCell; // inherited from NSObject

	static appearance(): ZDKRequestListTableCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKRequestListTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKRequestListTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKRequestListTableCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKRequestListTableCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKRequestListTableCell; // inherited from UIAppearance

	static new(): ZDKRequestListTableCell; // inherited from NSObject

	requestDescription: UILabel;

	unreadColor: UIColor;

	unreadView: UIView;

	updatedAt: UILabel;

	prepareWithRequestIsUnread(request: ZDKRequest, isUnread: boolean): void;
}

declare class ZDKRequestListViewController extends ZDKUIViewController {

	static alloc(): ZDKRequestListViewController; // inherited from NSObject

	static new(): ZDKRequestListViewController; // inherited from NSObject

	delegate: ZDKCreateRequestUIDelegate;

	requestList: ZDKRequestListTable;

	requestListContainer: UIScrollView;

	dismiss(): void;
}

declare class ZDKRequests extends NSObject implements ZDKCreateRequestUIDelegate {

	static alloc(): ZDKRequests; // inherited from NSObject

	static configure(config: (p1: ZDKAccount, p2: ZDKRequestCreationConfig) => void): void;

	static instance(): ZDKRequests;

	static new(): ZDKRequests; // inherited from NSObject

	static presentRequestCreationWithViewController(viewController: UIViewController): void;

	static presentRequestListWithViewController(viewController: UIViewController): void;

	static pushRequestListWithNavigationController(navController: UINavigationController): void;

	static pushRequestListWithNavigationControllerLayoutGuide(navController: UINavigationController, aGuide: ZDKLayoutGuide): void;

	static setNavBarCreateRequestUIType(uiType: ZDKNavBarCreateRequestUIType): void;

	static setNewRequestBarButtonImage(name: string): void;

	requestCreationConfig: ZDKRequestCreationConfig;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createRequestBarButtonImage(): UIImage;

	createRequestBarButtonLocalizedLabel(): string;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navBarCreateRequestUIType(): ZDKNavBarCreateRequestUIType;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface ZDKRotationForwarding extends NSObjectProtocol {

	orientationWillChange(toInterfaceOrientation: UIInterfaceOrientation): void;
}
declare var ZDKRotationForwarding: {

	prototype: ZDKRotationForwarding;
};

interface ZDKSpinnerDelegate extends NSObjectProtocol {

	center: CGPoint;

	frame: CGRect;

	hidden: boolean;

	startAnimating(): void;

	stopAnimating(): void;
}
declare var ZDKSpinnerDelegate: {

	prototype: ZDKSpinnerDelegate;
};

declare class ZDKSupportAttachmentCell extends UITableViewCell implements UIAppearanceContainer {

	static alloc(): ZDKSupportAttachmentCell; // inherited from NSObject

	static appearance(): ZDKSupportAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKSupportAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKSupportAttachmentCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKSupportAttachmentCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKSupportAttachmentCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKSupportAttachmentCell; // inherited from UIAppearance

	static cellIdentifier(): string;

	static new(): ZDKSupportAttachmentCell; // inherited from NSObject

	readonly fileSize: UILabel;

	readonly title: UILabel;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class ZDKTheme extends NSObject {

	static alloc(): ZDKTheme; // inherited from NSObject

	static baseTheme(): ZDKTheme;

	static currentAppliedTheme(): ZDKTheme;

	static new(): ZDKTheme; // inherited from NSObject

	boldFontName: string;

	emptyBackgroundColor: UIColor;

	fontName: string;

	inputFieldBackgroundColor: UIColor;

	inputFieldTextColor: UIColor;

	metaTextColor: UIColor;

	primaryBackgroundColor: UIColor;

	primaryTextColor: UIColor;

	secondaryBackgroundColor: UIColor;

	secondaryTextColor: UIColor;

	separatorColor: UIColor;

	apply(): void;
}

declare class ZDKToast extends NSObject {

	static alloc(): ZDKToast; // inherited from NSObject

	static dismissForViewAnimate(view: UIView, animate: boolean): void;

	static dismissForViewControllerAnimate(viewController: UIViewController, animate: boolean): void;

	static new(): ZDKToast; // inherited from NSObject

	static setAnimationDuration(durationInSeconds: number): void;

	static showMessageOfTypeInViewControllerWithButtonTextButtonActionAndAnimationAnimated(message: string, type: ZDKToastUIType, viewController: UIViewController, buttonText: string, buttonActionBlock: () => void, animationBlock: (p1: boolean, p2: number) => void, animated: boolean): void;

	static showMessageOfTypeInViewControllerWithDurationAndAnimationAnimated(message: string, type: ZDKToastUIType, viewController: UIViewController, durationInSeconds: number, animationBlock: (p1: boolean, p2: number) => void, animated: boolean): void;

	static showMessageOfTypeInViewInViewControllerWithDurationAndAnimationAnimated(message: string, type: ZDKToastUIType, view: UIView, viewController: UIViewController, durationInSeconds: number, animationBlock: (p1: boolean, p2: number) => void, animated: boolean): void;

	static showMessageOfTypeInViewStartingAtWithButtonTextButtonActionAndAnimationAnimated(message: string, type: ZDKToastUIType, view: UIView, initialYPosisition: number, buttonText: string, buttonActionBlock: () => void, animationBlock: (p1: boolean, p2: number) => void, animated: boolean): void;

	static showMessageOfTypeInViewStartingAtWithDurationAndAnimationAnimated(message: string, type: ZDKToastUIType, view: UIView, initialYPosisition: number, durationInSeconds: number, animationBlock: (p1: boolean, p2: number) => void, animated: boolean): void;
}

declare class ZDKToastStyle extends NSObject {

	static alloc(): ZDKToastStyle; // inherited from NSObject

	static getValueForTypeAndStyle(type: ZDKToastUIType, style: ZDKToastUIStyle): any;

	static new(): ZDKToastStyle; // inherited from NSObject

	static setValueForTypeAndStyle(value: any, type: ZDKToastUIType, style: ZDKToastUIStyle): void;
}

declare const enum ZDKToastUIStyle {

	BackgroundColor = 0,

	BorderColor = 1,

	FontColor = 2,

	ButtonBorderColor = 3,

	ButtonBackgroundColor = 4,

	ButtonFontColor = 5,

	ButtonFontName = 6,

	ButtonFontSize = 7,

	FontName = 8,

	FontSize = 9,

	IconName = 10,

	_count = 11
}

declare const enum ZDKToastUIType {

	Info = 0,

	OK = 1,

	Warning = 2,

	Error = 3,

	_count = 4
}

declare class ZDKToastView extends UIView {

	static alloc(): ZDKToastView; // inherited from NSObject

	static appearance(): ZDKToastView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKToastView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKToastView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKToastView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKToastView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKToastView; // inherited from UIAppearance

	static new(): ZDKToastView; // inherited from NSObject

	animationBlock: (p1: boolean, p2: number) => void;

	buttonBlock: () => void;

	timePresented: Date;

	viewController: UIViewController;

	constructor(o: { inView: UIView; forViewController: UIViewController; atY: number; withMessage: string; buttonText: string; buttonAction: () => void; andType: ZDKToastUIType; duration: number; animationTime: number; animation: (p1: boolean, p2: number) => void; animateIn: boolean; });

	dismiss(animate: boolean): void;

	dismissComepletion(animate: boolean, completion: () => void): void;

	initInViewForViewControllerAtYWithMessageButtonTextButtonActionAndTypeDurationAnimationTimeAnimationAnimateIn(view: UIView, viewController: UIViewController, initialYPosisition: number, message: string, buttonText: string, buttonActionBlock: () => void, type: ZDKToastUIType, durationInSeconds: number, animationTime: number, animationBlock: (p1: boolean, p2: number) => void, animateIn: boolean): this;

	present(animate: boolean): void;
}

declare class ZDKUIActivityView extends UIImageView implements ZDKSpinnerDelegate {

	static alloc(): ZDKUIActivityView; // inherited from NSObject

	static appearance(): ZDKUIActivityView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKUIActivityView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKUIActivityView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKUIActivityView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKUIActivityView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKUIActivityView; // inherited from UIAppearance

	static new(): ZDKUIActivityView; // inherited from NSObject

	center: CGPoint; // inherited from ZDKSpinnerDelegate

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	frame: CGRect; // inherited from ZDKSpinnerDelegate

	readonly hash: number; // inherited from NSObjectProtocol

	hidden: boolean; // inherited from ZDKSpinnerDelegate

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startAnimating(): void;

	stopAnimating(): void;
}

declare class ZDKUIImageScrollView extends UIScrollView {

	static alloc(): ZDKUIImageScrollView; // inherited from NSObject

	static appearance(): ZDKUIImageScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKUIImageScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKUIImageScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKUIImageScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKUIImageScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKUIImageScrollView; // inherited from UIAppearance

	static new(): ZDKUIImageScrollView; // inherited from NSObject

	imageView: UIImageView;

	constructor(o: { image: UIImage; });

	initWithImage(image: UIImage): this;
}

declare class ZDKUILoadingView extends UIView {

	static alloc(): ZDKUILoadingView; // inherited from NSObject

	static appearance(): ZDKUILoadingView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDKUILoadingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDKUILoadingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDKUILoadingView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDKUILoadingView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDKUILoadingView; // inherited from UIAppearance

	static new(): ZDKUILoadingView; // inherited from NSObject

	readonly spinner: UIActivityIndicatorView;
}

interface ZDKUITextViewDelegate extends UITextViewDelegate {

	caretPosition(caret: CGRect): void;
}
declare var ZDKUITextViewDelegate: {

	prototype: ZDKUITextViewDelegate;
};

declare class ZDKUIUtil extends NSObject {

	static alloc(): ZDKUIUtil; // inherited from NSObject

	static appearanceValueForClassSelector(viewClass: typeof NSObject, selector: string): any;

	static appearanceValueForClassWhenContainedInSelector(viewClass: typeof NSObject, containerClass: typeof NSObject, selector: string): any;

	static appearanceValueForViewSelector(view: UIView, selector: string): any;

	static buildButtonWithFrameAndTitle(frame: CGRect, title: string): UIButton;

	static currentInterfaceOrientation(): UIInterfaceOrientation;

	static fixOrientationOfImage(image: UIImage): UIImage;

	static isLandscape(): boolean;

	static isNewerVersion(majorVersionNumber: string): boolean;

	static isOlderVersion(majorVersionNumber: string): boolean;

	static isPad(): boolean;

	static isSameVersion(majorVersionNumber: number): boolean;

	static new(): ZDKUIUtil; // inherited from NSObject

	static scaledHeightForSizeConstrainedByWidth(size: CGSize, width: number): number;

	static separatorHeightForScreenScale(): number;

	static shouldEnableAttachments(viewController: UIViewController): boolean;
}

declare class ZDKUIViewController extends UIViewController {

	static activeController(): ZDKUIViewController;

	static alloc(): ZDKUIViewController; // inherited from NSObject

	static new(): ZDKUIViewController; // inherited from NSObject

	static presentViewControllerRequiresNavController(viewController: UIViewController, requiresNav: boolean): void;

	static topViewController(): UIViewController;

	static topViewControllerWithRootViewController(rootViewController: UIViewController): UIViewController;

	contentView: UIView;

	layoutGuide: ZDKLayoutGuide;

	readonly reachable: ZDKReachability;

	requiresNavBar: boolean;

	toastView: ZDKToastView;

	bottomViewOffset(): number;

	keyboardDidHide(aNotification: NSNotification): void;

	keyboardDidShow(aNotification: NSNotification): void;

	keyboardWillBeHidden(aNotification: NSNotification): void;

	keyboardWillBeShown(aNotification: NSNotification): void;

	layoutContent(): void;

	registerForKeyboardNotifications(): void;

	topViewOffset(): number;

	updateAnimationValuesFromUserInfo(userInfo: NSDictionary<any, any>): void;
}

declare var ZDK_RequestCommentsListUpdated: string;

declare class ZDRequestListEmptyTableCell extends UITableViewCell {

	static alloc(): ZDRequestListEmptyTableCell; // inherited from NSObject

	static appearance(): ZDRequestListEmptyTableCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDRequestListEmptyTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDRequestListEmptyTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDRequestListEmptyTableCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDRequestListEmptyTableCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDRequestListEmptyTableCell; // inherited from UIAppearance

	static new(): ZDRequestListEmptyTableCell; // inherited from NSObject

	messageLabel: UILabel;
}

declare class ZDRequestListLoadingTableCell extends UITableViewCell {

	static alloc(): ZDRequestListLoadingTableCell; // inherited from NSObject

	static appearance(): ZDRequestListLoadingTableCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ZDRequestListLoadingTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ZDRequestListLoadingTableCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ZDRequestListLoadingTableCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ZDRequestListLoadingTableCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ZDRequestListLoadingTableCell; // inherited from UIAppearance

	static new(): ZDRequestListLoadingTableCell; // inherited from NSObject
}

declare var ZDSDK_REQUEST_CELL_DESCRIPTION_TS_MARGIN: number;

declare var ZDSDK_REQUEST_CELL_LEFT_INSET: number;

declare var ZDSDK_REQUEST_CELL_VERTICAL_MARGIN: number;

declare class Zendesk extends NSObject {

	static alloc(): Zendesk; // inherited from NSObject

	static new(): Zendesk; // inherited from NSObject
}
