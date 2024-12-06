import { Providers } from "@/app/providers";
import { AppInfo } from "@/constants/app-info";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: AppInfo.APP_NAME,
  description: AppInfo.APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
