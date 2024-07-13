import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './pages/Layout'; 
import Products from './pages/Products';

function App() {

  return (
    <>
    <Router>
      <Layout>
      <Switch>
          <Route path="/products" component={Products} />
        </Switch>
      </Layout>
      </Router>
    </>
  )
}

export default App
