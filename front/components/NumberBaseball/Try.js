import React, { memo } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const Try = memo(({ tryInfo }) => {
  return (
    <li style={{ marginTop: '10px' }}>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

Try.propTypes = {
  tryInfo: PropTypes.shape({
    try: PropTypes.number,
    result: PropTypes.number,
  }).isRequired,
};

module.exports = Try;
