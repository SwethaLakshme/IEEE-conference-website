import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head from './components/Head';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Aboutinst from './components/Aboutinst';
import Aboutdept from './components/Aboutdept';
import Aboutconf from './components/Aboutconf';
import Advisorycommittee from './components/Advisorycommittee'
import Topicsofint from './components/Topicsofint';
import Datestoremember from './components/Datestoremember';
import Generalinfo from './components/Generalinfo';
import Submissiongui from './components/Submissiongui';
import Publication from './components/Publication'
import Speaker from './components/Speakers';
import Registration from './components/Registration';
import Footer from './components/Footer';
import Plagiarism from './components/Plagiarism';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Head />
    <Navbar />
    <Home />
    <Aboutinst/>
    <Aboutdept/>   
    <Aboutconf/> 
    <Advisorycommittee />
    <Topicsofint />
    <Datestoremember />
    <Generalinfo/>
    <Plagiarism/>
    <Submissiongui/>
    <Publication/>
    <Speaker />
    <Registration />
    <Footer />
  </React.StrictMode>
);


