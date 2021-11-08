export type TDeviceType = "mobile" | "tablet" | "desktop";

export interface IDetectDevice {
    onDetect: (detection: TDeviceType) => void;
}

export enum EDeviceWidth {
    MOBILE_MAX = 900,
    TABLET_MIN = 901,
    TABLET_MAX = 1100,
    DESKTOP_MIN = 1101
}