import React, { lazy, Suspense } from 'react';

const LazyQuoteBox = lazy(() => import('./QuoteBox'));

const QuoteBox = props => (
  <Suspense fallback={null}>
    <LazyQuoteBox {...props} />
  </Suspense>
);

export default QuoteBox;
