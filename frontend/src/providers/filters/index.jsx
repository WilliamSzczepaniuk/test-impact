import { createContext, useContext, useEffect, useState } from "react";
import { CharactersContext } from "../characters";
import { api } from "../../services/api";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const { setPeople, allPeople, setCurrentPage, setLoading } =
    useContext(CharactersContext);

  const [selectValue, setSelectValue] = useState("");

  const [filterSpecie, setFilterSpecie] = useState({
    specieData: [],
    nextUrl: "species/",
    isLoaded: false,
  });

  const { specieData, nextUrl, isLoaded } = filterSpecie;

  const filterFilms = (value) => {
    setSelectValue(value);

    const filterFilms = allPeople.filter((character) => {
      return character.films.some((film) => film.includes(value));
    });
    setPeople(filterFilms);
    setCurrentPage(1);
  };

  const filterGender = (value) => {
    const filtered = allPeople.filter(({ gender }) => value === gender);
    setPeople(filtered);
    setCurrentPage(1);
  };

  const filterSpecies = async (specie) => {
    setLoading(true);
    const actualSpecie = specieData.find(({ name }) => name === specie);

    const { people } = actualSpecie;
    const characters = people.map((url) => api.get(url));

    Promise.all(characters).then((value) => {
      const data = value.map((res) => res.data);
      const generateId = data.map((people) => ({
        ...people,
        id: Math.random().toString(36).substring(2, 9),
      }));
      setPeople(generateId);
      setLoading(false);
    });
  };

  const speciesData = async () => {
    try {
      if (!isLoaded) {
        const { data } = await api.get(nextUrl);
        const { results, next } = data;
        const { specieData } = filterSpecie;

        setFilterSpecie({
          ...filterSpecie,
          nextUrl: next,
          specieData: [...specieData, ...results],
        });
        next === null && setFilterSpecie({ ...filterSpecie, isLoaded: true });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const clearFilters = () => setPeople(allPeople);

  useEffect(() => {
    speciesData();
  });
  return (
    <FiltersContext.Provider
      value={{
        clearFilters,
        filterSpecies,
        filterFilms,
        filterGender,
        selectValue,
        filterSpecie,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
