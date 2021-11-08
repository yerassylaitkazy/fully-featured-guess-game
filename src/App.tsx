import React from "react";
import { DetectDevice } from 'modules/detect-device';
import { TDeviceType } from "modules/detect-device/model";
import './App.css';

export const App = () => {

  const handleDetectDevice = (device: TDeviceType) => {
    console.log("device", device);
  };

  return <>
    <div>App</div>
    <DetectDevice onDetect={handleDetectDevice} />
  </>;
};