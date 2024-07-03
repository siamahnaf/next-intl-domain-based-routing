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
            <div ref={ref} className="relative">
                <button className="text-lg flex items-center gap-1.5" onClick={() => setLang(!lang)}>
                    <span className="text-base font-semibold text-gray-600">{list.find(a => a.id === locale)?.code}</span>
                </button>
                {lang &&
                    <div className="absolute top-full mt-5 border border-solid border-gray-200 left-0 w-[170px] z-[9999] bg-white px-4 py-1 rounded-md">
                        {list.filter(a => a.id !== locale).map((item, i) => (
                            <Link href={pathname} locale={item.id} key={i} className={`flex gap-2.5 my-px py-2 select-none cursor-pointer`}>
                                <span className="text-gray-700 font-medium">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default Switcher;

const NavList = [
    { id: "prices", url: "/prices" },
    { id: "bonus", url: "/bonus" },
    { id: "affiliate", url: "/affiliate" },
    { id: "faq", url: "/#faqs" },
    { id: "story", url: "/#story" },
]

const list = [
    { id: "en", name: "English", code: "EN" },
    { id: "bn", name: "Bangla", code: "BN" },
]