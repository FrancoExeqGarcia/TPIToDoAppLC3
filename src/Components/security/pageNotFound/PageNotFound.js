import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import ComboLanguage from "../../ui/comboLanguage/ComboLanguaje";
import { TranslateContext } from "../../../services/translationContext/translation.context";
import useTranslation from "../../../custom/useTranslation/useTranslation";


const PageNotFound = () => {
  const navigate = useNavigate();
  const translate = useTranslation();

  const backToHomePageHandler = () => {
    navigate("/login");
  };
  return (
    <div className="text-center">
      <h2 className="my-4">{translate("not_found")}</h2>
      <Button onClick={backToHomePageHandler}>{translate("return")}</Button>
    </div>
  );
};

export default PageNotFound;
