import type { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Next App",
  description: "Example with Redux and GraphQL",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
