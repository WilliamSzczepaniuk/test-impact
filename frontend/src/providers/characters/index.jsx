import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import axios from "axios";
export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [cardData, setCardData] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allPeople, setAllPeople] = useState([]);

  const nextPage = () => {
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  };

  const prevsPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const getCharactersForPage = (page, array) => {
    if (array.length > 1) {
      const startIndex = (page - 1) * 15;
      const endIndex = startIndex + 15;

      return setCardData(array.slice(startIndex, endIndex));
    }
    return setCardData(array);
  };

  const fetchPeople = async () => {
    if (loading) {
      let allPeople = [];
      let nextUrl = "https://swapi.dev/api/people/";
      while (nextUrl) {
        const { data } = await axios.get(nextUrl);
        allPeople = [...allPeople, ...data.results];
        nextUrl = data.next;
      }

      const generateId = allPeople.map((people) => ({
        ...people,
        id: Math.random().toString(36).substring(2, 9),
      }));
      setAllPeople(generateId);
      setPeople(generateId);

      setLoading(false);
    }
  };

  useEffect(() => {}, [loading, people]);

  useEffect(() => {
    fetchPeople();
  }, []);

  useEffect(() => {
    getCharactersForPage(currentPage, people);

    setTotalPages(Math.ceil(people.length / 15));
  }, [currentPage, people]);

  return (
    <CharactersContext.Provider
      value={{
        setPeople,
        setCurrentPage,
        getCharactersForPage,
        currentPage,
        loading,
        people,
        cardData,
        setLoading,
        nextPage,
        setCardData,
        prevsPage,
        allPeople,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
