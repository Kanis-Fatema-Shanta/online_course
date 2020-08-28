import React from 'react';
import logo from './logo.svg';
import './App.css';
import myData from './Fakedata/myData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './components/Course/Course';
import Header from './components/Header/Header';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

function App() {
  const data = [...myData];
  console.log("first", typeof (data))
  const [item, setItem] = useState(data);
  const [cart, setCart] = useState([]);

  const clickHandle = (props) => {
    const newCart = [props.every, ...cart];
    setCart(newCart);
    console.log("cartlist", typeof (cart));
  }
  return (
    <div className="">
      <Container fluid>
        <Header data={cart}></Header>
          <Row>
            {/* course list  */}
            <Col sm={8}>
              <div className="course-container">
                <Course data={item} clickHandle={clickHandle}></Course>
              </div>
            </Col>
            {/* Cart section */}
            <Col sm={4}>
              <Cart data={cart}></Cart>
            </Col>
          </Row>
          <div>
            <Footer></Footer>
          </div>
        
      </Container>



    </div>
  );
}

export default App;
