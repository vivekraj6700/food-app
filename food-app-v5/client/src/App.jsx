import './App.css'
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

// pages
import AllFoods from './pages/AllFoods';
import Login from './pages/Login';
import Cart from './pages/Cart';
import New from './pages/New'
import Register from './pages/Register';

const App = ()=> {

  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path='/' element={ <AllFoods/> } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={ <Register/> } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/new' element={ <New/> } />
        </Routes>
      </Layout>
    </Fragment>
  )
}

export default App;
