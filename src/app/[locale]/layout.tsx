import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import Switcher from "@/Components/Switcher";

//Fonts
import { macan, domaine } from "@/Fonts";

const RootLayout = async ({ children, params: { locale } }: Readonly<{ children: React.ReactNode, params: { locale: string } }>) => {
  //Translations
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${macan.className} ${domaine.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Switcher />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;