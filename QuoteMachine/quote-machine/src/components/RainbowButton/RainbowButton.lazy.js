import React, { lazy, Suspense } from 'react';

const LazyRainbowButton = lazy(() => import('./RainbowButton'));

const RainbowButton = props => (
  <Suspense fallback={null}>
    <LazyRainbowButton {...props} />
  </Suspense>
);

export default RainbowButton;
