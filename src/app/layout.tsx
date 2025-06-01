import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import ChakraWrapper from "./ChakraWrapper";
// adjust path if needed

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mansoor Ahmad",
  description: "A portfolio website for a web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
