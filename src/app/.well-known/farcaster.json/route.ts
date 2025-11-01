
import { minikitConfig } from '../../../../minikit.config';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const manifest = {
    ...minikitConfig.miniapp, // Reverting back to 'miniapp'
    baseBuilder: minikitConfig.baseBuilder,
  };
  return NextResponse.json(manifest);
};
