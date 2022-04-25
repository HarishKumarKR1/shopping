import {Route , Routes} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" exact element={<HomeScreen/>}/>
            <Route path="/product/:id" element={<ProductScreen/>}/>
            <Route path="/cart/">
              <Route path=":id" element={<CartScreen />} />
              <Route path="" element={<CartScreen />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
