import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { BoxLoader } from "./styles";
export const Loader = () => {
  return (
    <BoxLoader>
      <FontAwesomeIcon icon={faSpinner} size="2xl" spinPulse />
    </BoxLoader>
  );
};
