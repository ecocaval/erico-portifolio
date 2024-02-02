import { Inter } from "next/font/google";
import "./globals.css";
import { ButtonWithIcon } from "@/components/button-with-icon";
import { HEADER_BUTTONS_LIST } from "./utils/header-buttons-list";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClassName = `${inter.className} relative h-screen bg-[#130526] font-mono`;
  return (
    <html lang="en">
      <body className={bodyClassName}>
        <header className="px-12 h-20 flex justify-start items-center my-2 mt-3">
          <div className="flex justify-center items-center">
            {HEADER_BUTTONS_LIST.map(item => (
              <ButtonWithIcon
                key={Math.random()}
                iconSourcePath={item.iconSourcePath}
                darkIconSourcePath={item.darkIconSourcePath}
                iconAltText={item.iconAltText}
                iconWidth={item.iconWidth}
                iconHeight={item.iconHeight}
                buttonText={item.buttonText}
                buttonAdditionalCss={item.buttonAdditionalCss}
                iconAdditionalCss={item.iconAdditionalCss}
                textAdditionalCss={item.textAdditionalCss}
              ></ButtonWithIcon>
            ))}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
