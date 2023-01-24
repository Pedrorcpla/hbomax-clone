import React from 'react';
import '../_assets/css/App.css';

import Header from '../components/Header/Header';
import Enter from '../components/Enter';

const Home = () =>{
  return (
    <>
      <Header userActived={false} />
      <Enter />
    </>
  );
}

export default Home;