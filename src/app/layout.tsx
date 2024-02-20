import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ReferenceToScrollContextProvider } from "@/contexts/referenceToScrollContext";
import { LanguageContextProvider } from "@/contexts/languageContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClassName = `${inter.className} relative bg-[#130526] font-mono`;
  return (
    <ReferenceToScrollContextProvider>
      <LanguageContextProvider>
        <html lang="en">
          <body className={bodyClassName}>
            <Header />
            {children}
          </body>
        </html>
      </LanguageContextProvider>
    </ReferenceToScrollContextProvider>
  );
}
