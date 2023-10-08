import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      <h1>{t("Страница о сайте")}</h1>
      <Counter />
    </div>
  );
};

export default AboutPage;
