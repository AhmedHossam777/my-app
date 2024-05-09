import './App.css';
import Welcome from './components/Welcome';
import WelcomeCC from './components/WelcomeCC';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <WelcomeCC name="Ahmed" age="22" title="Fullstack developer" />
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
    </div>
  );
}

export default App;
