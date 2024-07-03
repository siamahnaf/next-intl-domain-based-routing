import { createSharedPathnamesNavigation } from "next-intl/navigation";
const locales = ["en", "cz"];

export const { Link, redirect, usePathname, useRouter, permanentRedirect } =
    createSharedPathnamesNavigation({ locales });