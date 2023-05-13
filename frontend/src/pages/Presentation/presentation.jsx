import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { images } from "../../assets/images";
import { CharactersContext } from "../../providers/characters";
import { Link } from "react-router-dom";
import { Box, Image } from "./style";
import { Button } from "../../components/Navigation/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export const Presentation = () => {
  const { people } = useContext(CharactersContext);

  const { id } = useParams();
  const character = people.find((people) => id === people.id);

  const { hair_color, name, height, skin_color } = character;

  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box>
      <Button>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </Button>
      <div>
        <Image
          onMouseOver={() => setOpacity(1)}
          opacity={opacity}
          src={images.characters[name]}
          alt={name}
        />
      </div>
      <p>Skin color: {skin_color}</p>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Hair color: {hair_color}</p>
    </Box>
  );
};
