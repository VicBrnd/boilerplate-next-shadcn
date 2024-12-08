import { env } from "@/lib/env";

import type { ObjectValues } from "@/types/object-values";

export const AppInfo = {
  APP_NAME: env.NEXT_PUBLIC_APP_NAME,
  APP_DESCRIPTION: env.NEXT_PUBLIC_APP_DESCRIPTION,
  PRODUCTION: process.env.NODE_ENV,
} as const;

export type AppInfo = ObjectValues<typeof AppInfo>;
