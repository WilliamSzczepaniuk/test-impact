import { CardStyle, Image, Infos } from "./styles";
import { images } from "../../assets/images";
import { Link } from "react-router-dom";
import { Button } from "../Navigation/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const Card = ({ character }) => {
  const { name, gender, height, birth_year, id } = character;

  return (
    <CardStyle>
      <Image src={images.characters[name]} alt={name} />
      <h3>{name}</h3>
      <Infos>
        <h4>
          Gender:<span>{gender}</span>
        </h4>
        <h4>
          Height:<span> {height}</span>
        </h4>
        <h4>
          Birth year:<span> {birth_year}</span>
        </h4>
      </Infos>
      <Button>
        <Link to={id}>
          <FontAwesomeIcon icon={faEye} />
          Details
        </Link>
      </Button>
    </CardStyle>
  );
};
