import React from 'react';

import Typist from 'react-typist';
import '../css/mainpagecss.css';

const LaunchingComponent = () => {
  return (
    <React.Fragment>
      <Typist avgTypingDelay={10} cursor={{ show: false }}>
        <div id='animatedText'>
          <p>
            A blazingly fast tool to get the past 12 year analytics of any
            organisation selected in GSoC
          </p>
          <Typist.Delay ms={150} />
          <p>Search by tech-stack / organisation name / category or by topic.</p>
          <Typist.Delay ms={200} /> 
          <p>Start Searching now!</p>
        </div>
      </Typist>
    </React.Fragment>
  );
};

export default LaunchingComponent;
