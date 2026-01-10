import HomePage from './pages/HomePage.jsx'
import React from 'react';
import JsonLd from './components/seo/JsonLd';
import GoogleAnalytics from './components/seo/GoogleAnalytics';
import './App.css'

function App() {

  return (
    <>
      <GoogleAnalytics />
      <JsonLd />
     <HomePage/>
    </>
  )
}

export default App
