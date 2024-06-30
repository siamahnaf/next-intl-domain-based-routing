import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

//Fonts
import { macan, domaine } from "@/Fonts";

const RootLayout = async ({ children, params: { locale } }: Readonly<{ children: React.ReactNode, params: { locale: string } }>) => {
  //Translations
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${macan.className} ${domaine.variable}`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;