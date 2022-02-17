import React from 'react';
import Header from './Header';
import Menu from './Menu';

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />

      <div className="container">
        <div className="row">
          <div className="margintopbottom">
            <h2>Home</h2>
            <h6 className="margintopbottom20">
              Code camp is a community event where developers learn from fellow
              developers. we also have developer related topics that include
              software branding. legal issues around software as well as other
              topics developers are interested in hearing about.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
