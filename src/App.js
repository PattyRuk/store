
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Banner from './components/Banner';

function App() {


  return (
    <>
      <Header  />
      <main>
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default App;