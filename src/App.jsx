import { useState } from 'react';
import PageBody from './components/body';
import CardsHolder from './components/CardsHolder';
import Header from './components/header';
import Footer from './components/PageFooter';
import './App.css';
import Perlin from './components/Perlin';

function App() {
  const [language, setLanguage] = useState('en');
  return (
    <PageBody>
     <Perlin></Perlin>
      <Header language={language} setLanguage={setLanguage}></Header>
      <CardsHolder language={language} />
      <Footer />
    </PageBody>
  );
}

export default App;