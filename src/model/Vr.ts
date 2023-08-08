export interface VrConfig {
    vrindex: number;
    vrs: VR[];
    smallScreenRatio: number;
    hideDefaultLogo: boolean;
    enableOrbitControlsWhenMounted: boolean;
    resetCamera: boolean;
    transHeader: TransHeader;
    consult: Consult;
    phone: Phone;
    form: Consult;
}

export interface Consult {
    show: boolean;
}

export interface Phone {
    show: boolean;
    number: string;
    solutionID: number;
    button: Button;
}

export interface Button {
    text: string;
}

export interface TransHeader {
    logo: string;
    title: string;
    subTitle: string;
}

export interface VR {
    image: string;
    title: string;
    initialCamera: InitialCamera;
    thumbnail: string;
    scenesName: string;
}

export interface InitialCamera {
    angleB: number;
    zoom: number;
}
