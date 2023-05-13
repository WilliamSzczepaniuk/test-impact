import { useContext } from "react";
import { CharactersContext } from "../../providers/characters";
import { Card } from "../Card/Card";
import { CardList } from "./styles";

export const CardsList = () => {
  const { cardData } = useContext(CharactersContext);

  return (
    <CardList>
      {cardData.map((character) => (
        <Card character={character} key={character.id} />
      ))}
    </CardList>
  );
};
// TER UM STATE DE CARD DATA
// QUE VAI SER ATUALIZADO PELO BOTÃO DE PAGINAÇÃO
// DISPARANDO UM REQUEST NA API
