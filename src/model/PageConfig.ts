import {TransHeader, VR} from './Vr';

export interface PageConfig {
    pageGroupType: number;
    pageInfo: PageInfo;
    siteName: string;
    pageid: number;
    title: string;
    templateID: number;
    bdstatstoken: string;
    widgets: Widget[];
    userid: number;
    productName: string;
    url: string;
    pageModuleIDS: number[];
    pageType: number;
    extData: EXTData;
    appid: number;
    siteConfig: SiteConfig;
    siteid: number;
    subAppID: number;
    siteType: number;
    vpucid: string;
    gfhid: string;
}

export interface EXTData {
    isEverDynProductDetail: boolean;
    pageStyle: PageStyle;
    consultStyle: SiteConfig;
    dynNum: number;
    wildcard: number;
    isEverDynQuestion: boolean;
    isDynQuestion: boolean;
    isEverDynMaterial: boolean;
    isDyn: boolean;
    titleReWrite: number;
    isEverDyn: boolean;
    isDynProductDetail: boolean;
    isDynProduct: boolean;
    dynInfo: string;
    siteTags: unknown[];
    isEverDynProduct: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SiteConfig {
}

export interface PageStyle {
    mLayout: PageStyleMLayout;
}

export interface PageStyleMLayout {
    paddingBottom: number;
    paddingTop: number;
}

export interface PageInfo {
    auditVersion: number;
    llp: number;
    adaptType: number;
    xcxAppKey: string;
    showType: number;
    siteTplType: number;
}

export interface Widget {
    thumbnail: string;
    widgetID: number;
    groupID?: number;
    title: string;
    type: string;
    widgetMoldID: number;
    groupName?: GroupName;
    widgetMoldName: string;
    name: string;
    doc: SiteConfig | string;
    widgetInfoID: number;
    properties: Properties;
    child: number[];
    bizType?: number[];
    icon?: string;
    widgetURL?: string;
    mLayout?: WidgetMLayout;
    depWidgets?: DepWidgets;
    isUseTheme?: boolean;
}

export interface DepWidgets {
    mipSjhBasisDownload?: string;
    mipSjhImlpSDK?: string;
    mipSjhText?: string;
    mipSjhDownload?: string;
    mipSjhTransFormBlank?: string;
    mipSjhForm?: string;
    mipSjhGeneralVideo?: string;
    mipSjhArticle?: string;
    mipSjhProductDetail?: string;
    mipSjhBtn?: string;
    mipSjhRowList?: string;
    gtJmyH5LayerShell?: string;
}

export enum GroupName {
    侧边中部悬浮 = '侧边中部悬浮',
    图文组件 = '图文组件',
    基本样式 = '基本样式',
    布局组件 = '布局组件',
    底部悬浮 = '底部悬浮',
}

export interface WidgetMLayout {
    isBlock: boolean;
    fixed: boolean;
}

export interface Properties {
    propertiesBackgroundColor?: string;
    isAdaptive?: boolean;
    backgroundImg?: string;
    mSizeHeight: MSizeHeightClass | number;
    image?: string;
    customImgStyle?: SiteConfig;
    bizType?: number[];
    mSizeWidth?: MPosX;
    isRevert?: boolean;
    title?: string;
    mCoordinates?: MCoordinates;
    url?: string;
    xcxPath?: string;
    backgroundColor?: string;
    originImageURL?: string;
    mPosY?: MPosX;
    type?: string;
    extra?: SiteConfig;
    mPosX?: MPosX;
    appURL?: AppURL;
    isThumbnail?: boolean;
    fontFamily?: unknown[];
    propertiesSolutionID?: string;
    text?: Text;
    propertiesSolutionType?: string;
    vrindex?: number;
    vrs?: VR[];
    smallScreenRatio?: number;
    hideDefaultLogo?: boolean;
    enableOrbitControlsWhenMounted?: boolean;
    resetCamera?: boolean;
    transHeader?: TransHeader;
    consult?: Consult;
    phone?: Phone;
    form?: Consult;
    aspectRatio?: number;
    templateType?: number;
    usePip?: number;
    responseScroll?: number;
    videoID?: string;
    duration?: number;
    customVideoStyle?: SiteConfig;
    autoPlay?: number;
    posterURL?: string;
    videoSrc?: string;
    titlePosition?: string;
    width?: number;
    id?: string;
    bgColor?: string;
    decodeDisabled?: boolean;
    height?: number;
    realPhoneType?: number;
    themeType?: string;
    themeColor?: ThemeColor;
    btnFillType?: string;
    color?: string;
    solutionID?: number;
    solutionType?: string;
    propertiesType?: string;
    telBackground?: string;
    borderRadius?: number;
    telBackgroundTimeStamp?: number;
    contentText?: string;
    bgThemeType?: string;
    borderColorTimeStamp?: number;
    phoneSolutionType?: number;
    contentType?: string;
    borderWidth?: string;
    borderStyle?: string;
    bgThemeColor?: ThemeColor;
    btnSizeType?: string;
    iconDisplay?: string;
    telephone?: string;
    borderColor?: string;
    phoneFormatType?: string;
    displayPhoneType?: string;
    iconType?: number;
    borderRadiusType?: string;
    fontSizeType?: string;
    hasData?: boolean;
    isDyn?: boolean;
    sortOrder?: string;
    uniqID?: string;
    sortField?: string;
    bindTypeIDS?: unknown[];
    mVersion?: string;
    datasource?: string;
    displayCount?: number;
    bindType?: number;
    isDynEffective?: boolean;
    skinSetting?: SkinSetting;
    subTitle?: string;
    name?: string;
    encodeName?: string;
    merchantName?: string;
    backgroundType?: number;
    encodeSubTitle?: string;
    btnType?: number;
    iconURL?: string;
    btnSize?: string;
    fixed?: Fixed;
    fixedContentStyle?: FixedContentStyle;
}

export interface AppURL {
    show: boolean;
    schemaURL: string;
}

export interface ThemeColor {
    shapeColorB1: string;
    shape: string;
    shapeColorB8: string;
    shapeColorB9: string;
    font: string;
}

export interface Consult {
    show: boolean;
}

export interface Fixed {
    bottomChangeable: boolean;
    rightChangeable?: boolean;
    bottom: number;
    right?: number;
    type: string;
    leftChangeable?: boolean;
    left?: number;
    pagePadding?: number;
}

export interface FixedContentStyle {
    width: string;
    height: string;
}

export enum MCoordinates {
    LeftTop = 'leftTop',
}

export interface MPosX {
    changeable: boolean;
    value: number;
}

export interface MSizeHeightClass {
    changeable: boolean;
    value: number;
    min?: number;
    max?: number;
}

export interface Phone {
    show: boolean;
    realPhoneType: number;
    themeType: string;
    themeColor: ThemeColor;
    btnFillType: string;
    color: string;
    solutionID: number;
    solutionType: string;
    mCoordinates: MCoordinates;
    phoneType: string;
    telBackground: string;
    borderRadius: number;
    telBackgroundTimeStamp: number;
    contentText: string;
    bgThemeType: string;
    type: string;
    borderColorTimeStamp: number;
    phoneSolutionType: number;
    contentType: string;
    borderWidth: string;
    text: Text;
    borderStyle: string;
    bgThemeColor: ThemeColor;
    btnSizeType: string;
    iconDisplay: string;
    telephone: string;
    borderColor: string;
    phoneFormatType: string;
    displayPhoneType: string;
    button: Button;
}

export interface Button {
    text: Text;
}

export enum Text {
    Empty = '',
    拨打电话 = '拨打电话',
    电话 = '电话',
}

export interface SkinSetting {
    useBgColor: boolean;
    useTextColor: boolean;
}
