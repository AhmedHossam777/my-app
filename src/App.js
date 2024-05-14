import './App.css';
import Welcome from './components/Welcome';
import WelcomeCC from './components/WelcomeCC';
import Product from './components/Product';
import Button from './components/Button';
import Input from './components/Input';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      {/* <Button title="Ahmed" /> */}
      {/* <Input label="name" type="text"/> */}
      {/* <Input label="password" type="password"/> */}
      {/* <Welcome name="Aldod" age="22" title="Backend developer"></Welcome> */}
      {/* <WelcomeCC name="Ahmed" age="22" title="Fullstack developer" /> */}
      {/* <Product
        title="product-1"
        price="100"
        description="lorem lorem lorem 1"
      />
      <Product
        title="product-3"
        price="200"
        description="lorem lorem lorem 2"
      />
      <Product
        title="product-1"
        price="600"
        description="lorem lorem lorem 3"
      /> */}
      
      <Form/>
    </div>
  );
}

export default App;
