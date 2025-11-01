
import { minikitConfig } from '../../../../minikit.config';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const manifest = {
    ...minikitConfig.frame,
    baseBuilder: minikitConfig.baseBuilder,
  };
  return NextResponse.json(manifest);
};
