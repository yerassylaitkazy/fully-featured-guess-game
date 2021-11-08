import React, { useEffect } from 'react';
import { IDetectDevice, EDeviceWidth } from './model';

export const DetectDevice = (props: IDetectDevice): null => {
    const { onDetect } = props;

    useEffect(() => {
        const width: number = window.innerWidth || window.screen.width;
        if (width <= EDeviceWidth.MOBILE_MAX) {
            onDetect("mobile");
        } else if (width >= EDeviceWidth.TABLET_MIN && width <= EDeviceWidth.TABLET_MAX) {
            onDetect("tablet");
        } else if (width >= EDeviceWidth.DESKTOP_MIN) {
            onDetect("desktop");
        }
    }, []);

    return null;
}