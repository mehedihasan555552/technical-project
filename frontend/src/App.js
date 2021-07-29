import { Container } from 'react-bootstrap';
import { HashRouter as Router,Route } from 'react-router-dom'
import './App.css';
import Header from './components/header'
import Home from './components/Home'
import Footer from './components/footer'
import Add from './components/add'
import productReturn from './components/productReturn'
import Bookproduct from './components/Bookproduct'
import Returnproduct from './components/Returnproduct'


function App() {
  return (

    <Router>
      <Header/>
      <Container>
      <Route path='/' component={Home} exact />
      <Route path='/add' component={Add}  />
      <Route path='/return' component={productReturn}  />
      <Route path='/infoproduct' component={Bookproduct}  />
      <Route path='/returnproduct' component={Returnproduct}  />

      </Container>
      <Footer/>


    </Router>



      
    
  );
}

export default App;
