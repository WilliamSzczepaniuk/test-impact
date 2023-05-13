import { CardsList } from "../../components/CardsList/CardsList";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { Box } from "./home-style";

export const Home = () => {
  return (
    <Box>
      <Header />
      <div className="stars"></div>
      <nav>
        <Filter />
      </nav>
      <main>
        <CardsList />
      </main>
      <div>
        <Navigation />
      </div>
    </Box>
  );
};
