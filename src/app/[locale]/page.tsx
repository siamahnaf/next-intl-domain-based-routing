import { getTranslations } from "next-intl/server";

const Page = async () => {
  const t = await getTranslations("Index");

  return (
    <div className="text-red-600">
      {t("title")}
    </div>
  );
};

export default Page;