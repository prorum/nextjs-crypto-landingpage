'use client';

import React from 'react';

import DismissibleToast from '@/components/DismissibleToast';

function Providers({ children }: React.PropsWithChildren) {
  return (
    <>
      {children}
      <DismissibleToast />
    </>
  );
}

export default Providers;
