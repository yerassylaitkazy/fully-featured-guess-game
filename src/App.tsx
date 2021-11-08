import React, { lazy, useState, Suspense } from "react";
import { DetectDevice } from 'modules/detect-device';
import { TDeviceType } from "modules/detect-device/model";
import './App.css';

const MobileChunk = lazy(() => import("pages/mobile"));
const TabletChunk = lazy(() => import("pages/tablet"));
const DesktopChunk = lazy(() => import("pages/desktop"));
const Loading = () => <div>Loading...</div>;

export const App = () => {
  const [requiredApp, setRequiredApp] = useState<TDeviceType | undefined>();

  if (requiredApp === "desktop") {
    return <Suspense fallback={<Loading />}>
      <DesktopChunk />
    </Suspense>;
  }

  if (requiredApp === "tablet") {
    return <Suspense fallback={<Loading />}>
      <TabletChunk />
    </Suspense>;
  }

  if (requiredApp === "mobile") {
    return <Suspense fallback={<Loading />}>
      <MobileChunk />
    </Suspense>;
  }

  return <>
    <DetectDevice onDetect={setRequiredApp} />
    <Loading />
  </>;
};