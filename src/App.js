import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Reviews from './Component/Reviews/Reviews';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews'element = {<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element = {<Blog></Blog>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;