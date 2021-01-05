import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './components/pages/aboutUs';
import SkiCams from './components/pages/skiCams';
import Contact from './components/pages/contact';
import { GlobalStyles, ContentContainer } from './App.styles';
import Navbar from './components/shared/navbar/Navbar';
import { Footer } from './components/shared/footer';

function App() {
  return (
    <GlobalStyles>
     <BrowserRouter>
     <Navbar />
     <ContentContainer>
       <Switch>
         <Route exact path="/" component={AboutUs} />
         <Route exact path="/skicams" component={SkiCams} />
         <Route exact path="/contact" component={Contact} />
       </Switch>
     </ContentContainer>
     </BrowserRouter>
     <Footer />
    </GlobalStyles>
  );
}

export default App;
