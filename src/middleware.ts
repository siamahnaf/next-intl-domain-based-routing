import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
    localePrefix: "never",
    domains: [
        {
            domain: "dev.localhost:3000",
            locales: ["en"],
            defaultLocale: "en"
        },
        {
            domain: "fr.dev.localhost:3000",
            locales: ["fr"],
            defaultLocale: "fr"
        },
        {
            domain: "de.dev.localhost:3000",
            locales: ["de"],
            defaultLocale: "de"
        }
    ]
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
};