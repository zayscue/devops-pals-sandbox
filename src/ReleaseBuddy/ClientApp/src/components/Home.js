import React from 'react';
import { connect } from 'react-redux';
import flash from '../assets/flash.png';

const Home = props => (
  <div>
    <h1>Welcome!</h1>
    <p>We make releasing faster than ever for our friends.</p>
    <br />
    <img src={flash} alt="flash" />
  </div>
);

export default connect()(Home);
