import React, { PropTypes } from 'react';

import './name-and-time-online.scss';

const NameAndTimeOnline = props => {
  return (
    <div className="name-and-time-online-container">
      <h2>{props.name}</h2><div></div>
      <p>Online for 12 minutes</p>
    </div>
  );
}

NameAndTimeOnline.propTypes = {
  name: React.PropTypes.string
};

export default NameAndTimeOnline;