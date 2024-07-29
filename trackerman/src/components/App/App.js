import '../../fonts/fonts.css';
import Main from '../Main/Main';
import ModalAddProduct from '../ModalAddProduct/ModalAddProduct';
import ButtonAddProduct from '../ButtonAddProduct/ButtonAddProduct';
import Card from "../Card/Card";


function App() {
  return (
    <Main>
      <ButtonAddProduct />
      <ModalAddProduct />
      <Card />
    </Main>
  );
}

export default App;
