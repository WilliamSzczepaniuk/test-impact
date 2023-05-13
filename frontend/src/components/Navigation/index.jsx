import { useContext } from "react";
import { CharactersContext } from "../../providers/characters";
import { Button, Box } from "../Navigation/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
export const Navigation = () => {
  const { nextPage, prevsPage, currentPage } = useContext(CharactersContext);
  return (
    <Box>
      <Link smooth={true} delay={100} duration={2000} to="target">
        <Button onClick={prevsPage}>
          <FontAwesomeIcon icon={faCaretLeft} size="2xl" />
        </Button>
      </Link>
      <p>{currentPage}</p>
      <Link duration={2000} delay={100} smooth={true} to="target">
        <Button onClick={nextPage}>
          <FontAwesomeIcon icon={faCaretRight} size="2xl" />
        </Button>
      </Link>
    </Box>
  );
};
