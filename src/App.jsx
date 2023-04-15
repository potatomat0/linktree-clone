import { Component, useState } from 'react';
import PageBody from './components/body';
import CardsHolder from './components/CardsHolder';
import Header from './components/header'
import './App.css';

function App() {
  return (
    <PageBody>
    <Header></Header>
      <CardsHolder />
    </PageBody>
  );
}

export default App;