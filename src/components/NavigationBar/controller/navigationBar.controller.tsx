import { useEffect, useState } from "react";
import Countries from "../../../constants/country.constants";
import Languages from "../../../constants/language.constants";

import NavigationBarView from "../view/navigationBar.view";

const NavigationBarController = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<String>("");
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const setLanguage = (language: string) => {
    setSelectedLanguage(language);
  };

  const setCountry = (flag: any) => {
    setSelectedCountry(flag);
  };

  useEffect(() => {
    setSelectedCountry(Countries[0].flag);
    setSelectedLanguage(Languages[0]);
  }, []);

  return (
    <NavigationBarView
      selectedLanguage={selectedLanguage}
      setLanguage={setLanguage}
      selectedCountry={selectedCountry}
      setCountry={setCountry}
    />
  );
};

export default NavigationBarController;
