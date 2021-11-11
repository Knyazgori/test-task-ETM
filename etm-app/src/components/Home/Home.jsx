import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <span style={{ display: 'block', textAlign: 'center', marginTop: '30px', fontSize: '30px', textDecoration: 'none' }}><Link to='/catalog'>Прейдите по ссылке</Link></span>
  );
}

export default Home;
