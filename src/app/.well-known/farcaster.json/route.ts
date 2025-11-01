
import { minikitConfig } from '../../../../minikit.config';
import { NextResponse } from 'next/server';

export const GET = async () => {
  return NextResponse.json(minikitConfig.miniapp);
};
