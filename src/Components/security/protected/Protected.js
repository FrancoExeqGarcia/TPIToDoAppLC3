import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthenticationContext } from "../../services/authenticationContext/authentication.context";

import ComboLanguage from "../../ui/comboLanguage/ComboLanguaje";
import { TranslateContext } from "../../../services/translationContext/translation.context";
import useTranslation from "../../../custom/useTranslation/useTranslation";

const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  } else return children;
};

export default Protected;
