import React from 'react';
import {Easing} from 'react-native';
import {NeuSpinner} from 'react-native-neu-element';

const Spinner = props => {
  return (
    <NeuSpinner
      color="#f9f9f9"
      size={50}
      indicatorColor={'rgba(255,144,131,0.2)'} // Mint
      duration={1000}
      easingType={Easing.linear}
    />
  );
};

export default Spinner;
