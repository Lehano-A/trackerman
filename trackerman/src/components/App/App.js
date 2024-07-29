import '../../fonts/fonts.css';
import Main from '../Main/Main';
import ModalAddProduct from '../ModalAddProduct/ModalAddProduct';
import AddProduct from '../AddProduct/AddProduct';
import Card from "../Card/Card";


function App() {
  return (
    <Main>
      <AddProduct />
      <ModalAddProduct />
      <Card/>
    </Main>
  );
}

export default App;
