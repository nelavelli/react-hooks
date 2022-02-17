import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

export default function App({ pageName }) {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers></Speakers>;
  return <div>Not Found.</div>;
}
