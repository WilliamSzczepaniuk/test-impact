import Logo from "../../assets/logo.png";
import { HeaderBox } from "./styles";
import { InputSearch } from "../../components/InputSearch";
export const Header = () => {
  return (
    <HeaderBox id="target">
      <img src={Logo} alt="Logo Star Wars" />
      <h1> characters</h1>
      <InputSearch></InputSearch>
    </HeaderBox>
  );
};
