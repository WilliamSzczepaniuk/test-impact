import React from "react";
import { useContext, useState } from "react";
import { swapi } from "../../services/swapi";
import { CharactersContext } from "../../providers/characters";
import { Input } from "./styles";
import { Button } from "../Navigation/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const InputSearch = () => {
  const { setPeople, setCurrentPage } = useContext(CharactersContext);

  const [inputValue, setInputValue] = useState("");

  const handleSearch = async (searchValue) => {
    const data = swapi(1, searchValue, "people");

    Promise.resolve(data).then((res) => {
      const searchArray = res.results;
      const generateId = searchArray.map((people) => ({
        ...people,
        id: Math.random().toString(36).substring(2, 9),
      }));
      setPeople(generateId);
    });
    setCurrentPage(1);
  };

  return (
    <div>
      <Input
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
        placeholder="Search..."
        type="text"
      />
      <Button onClick={() => handleSearch(inputValue)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </div>
  );
};
