import ReactSpinner from "react-bootstrap/Spinner";

import { TranslateContext } from "../../../services/translationContext/translation.context";
import useTranslation from "../../../custom/useTranslation/useTranslation";

const CustomSpinner = () => {
  return (
    <ReactSpinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </ReactSpinner>
  );
};

export default CustomSpinner;
