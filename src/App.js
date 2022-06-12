import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeCarousel from "./components/HomeCarousel";
import HomeProductPreview from "./components/HomeProductPreview";
import ProductList from "./components/ProductList";





function App() {

  const products=[
    {name:"Nike SB Sweatshirt", price:19.99, description:"Black Sweatshirt, with NIKE SB printed in the center",
      image:"https://cdn.shopify.com/s/files/1/0556/1841/products/brogan_and_mary_sweats_23.2.22257.jpg?v=1645871690"},
    {name:"Champion Wheaton Sweatshirt", price:14.99, description:"Gray Sweatshirt, with Wheaton College printed in the center",
      image:"https://cdn.shopify.com/s/files/1/0556/1841/products/ele_mens_10.11.21108.jpg?v=1636707629"},
    {name:"The North Face Down Jacket", price:49.99, description:"Black and Navy Blue North Face down jacket",
      image:"https://cdn.shopify.com/s/files/1/0556/1841/products/Ele_Mens_North_Face_5.1.22135.jpg?v=1641461032"}

  ]

  return (
    <Router>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
          </Container>
        </Navbar>

      <Container>
        <Switch>
          <Route path="/products">
            <ProductList products={products}/>
          </Route>

          <Route path="/favorites">
            <Favorite />
          </Route>

          <Route path="/">
            <HomeCarousel/>
            <HomeProductPreview/>
          </Route>
        </Switch>
      </Container>
      </div>
    </Router>
  );
}


function Favorite(){
  return <h2>Favorites</h2>;
}

export default App;
