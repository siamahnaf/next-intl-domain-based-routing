"use client"
import { useRef, useState } from "react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/navigation";

const Switcher = () => {
    //State
    const [lang, setLang] = useState<boolean>(false);

    //Initializing Hook
    const ref = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const locale = useLocale();

    return (
        <div >
            <Link href={pathname} locale={locale === "en" ? "bn" : "en"} className={`flex gap-2.5 my-px py-2 select-none cursor-pointer`}>
                {locale === "en" ? "Bangla" : "English"}
            </Link>
        </div>
    );
};

export default Switcher;