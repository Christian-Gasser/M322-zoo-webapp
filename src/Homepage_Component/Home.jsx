import React from 'react';
import css from './Home.css';
import Header from '../Header_Component/Header.jsx';

export default function Home() {
  return (
    <>
      <Header/>
      <div id="homepage-title-div">
        <h3 id="h3">Willkommen auf der Webseite des</h3>
        <h1 id="h1">Zoo Zürich</h1>
      </div>
        <div id="homepage-seperator"/>
    </>
  )
}
