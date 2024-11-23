// components/LoadingState.tsx
"use client";
import React, { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';

const LoadingState = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
};

export default LoadingState;