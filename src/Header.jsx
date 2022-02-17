import React from 'react';
import SignMeUp from './SignMeUp';

export default function Header() {
  const signupCallback = (email) => {
    console.log('sign up called with email ', email);
  };

  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">
            {' '}
            {new Date().toISOString().split('T')[0]}{' '}
          </h6>
          <h6 className="text-uppercase"> Singapore </h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img src="/static/SVCClogo.png" />
          </div>
          <h2>Singapore Code Camp</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </div>
  );
}
