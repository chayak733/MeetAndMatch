/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */
import 'style.scss';

import React from 'react';
import picture from './homeBackground.png';

export default function HomePage() {
  return (
    <div className="homePage">
      <center>
        <img id="background" src={picture} alt="background" />
      </center>
    </div>
  );
}
