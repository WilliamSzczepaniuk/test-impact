import { useContext } from "react";
import { CharactersContext } from "../../providers/characters";
import { FiltersContext } from "../../providers/filters";
import { Box } from "./styles";
import { Button } from "../Navigation/styles";
import { Loader } from "../Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
export const Filter = () => {
  const {
    filterSpecie,
    filterGender,
    filterFilms,
    filterSpecies,
    clearFilters,
  } = useContext(FiltersContext);
  const { loading } = useContext(CharactersContext);
  const { specieData } = filterSpecie;
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <Box>
      <h2>
        <FontAwesomeIcon icon={faFilter} />
        filter by:
      </h2>
      <div>
        <label aria-labelledby="gender">Genders:</label>
        <select
          onChange={(e) => filterGender(e.target.value)}
          name="gender"
          id="gender"
        >
          <option value="female">female</option>
          <option value="N/a">N/a</option>
          <option value="none">none</option>
          <option value="hermaphrodite">hermaphrodite</option>
        </select>
      </div>
      <div>
        <label aria-labelledby="films">Films:</label>
        <select
          name="films"
          id="films"
          onChange={(e) => filterFilms(e.target.value)}
        >
          <option value="1">A New Hope</option>
          <option value="2">The Empire Strikes Back</option>
          <option value="3">Return of the Jedi</option>
          <option value="4">The Phantom Menace</option>
          <option value="5">Attack of the Clones</option>
          <option value="6">Revenge of the Sith</option>
        </select>
      </div>
      <div>
        <label aria-labelledby="species">Species:</label>
        <select
          onChange={(e) => filterSpecies(e.target.value)}
          name="species"
          id="species"
        >
          {specieData.map(({ name }) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <Button onClick={clearFilters}>Clear filters</Button>
    </Box>
  );
};
