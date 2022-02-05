import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageStyles from "./LanguageChanger.style";

const LanguageChanger = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language);
    if (navigator.language === "ar") {
      document.getElementsByTagName("html")[0].dir = "rtl";
    } else {
      document.getElementsByTagName("html")[0].dir = "ltr";
    }
  }, []);

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
    if (e.target.value === "ar") {
      document.getElementsByTagName("html")[0].dir = "rtl";
    } else {
      document.getElementsByTagName("html")[0].dir = "ltr";
    }
  };

  return (
    <LanguageStyles>
      <select
        style={{
          borderWidth: "0px 0px 1px 0px",
          borderColor: "#008489",
          padding: "4px",
        }}
        value=""
        onChange={handleLanguageChange}
      >
        <option value="">{t("language_selector.select")}</option>
        <option value="ar">{t("language_selector.ar")}</option>
        <option value="en">{t("language_selector.en")}</option>
      </select>
    </LanguageStyles>
  );
};

export default LanguageChanger;
