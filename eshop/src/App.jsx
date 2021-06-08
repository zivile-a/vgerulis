import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './nav-bar/NavBar';
import Products from './products/Products';
import Vision from './vision/Vision';
import Product from './product/Product';

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main className="p-2" style={{ height: 'calc(100vh - 44px)' }}>
        <Switch>
          <Route exact path={['/', '/products']} component={Products} />
          <Route exact path="/products/:id" component={Product} />
          <Route exact path="/vision" component={Vision} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
