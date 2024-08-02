import ReduxProvider from "@/lib/providers";
import type { Metadata } from "next";
import "./globals.css";
import { CookiesProvider } from "next-client-cookies/server";

export const metadata: Metadata = {
  title: "A2SV Blogs",
  description: "This is a starter project for AASTU group 1 web team",
};

type CookieRecord = {
  name: string;
  value: string;
};

// Sample data for cookies
const cookies: CookieRecord[] = [
  { name: "session", value: "abc123" },
  { name: "theme", value: "dark" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CookiesProvider>{children}</CookiesProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
