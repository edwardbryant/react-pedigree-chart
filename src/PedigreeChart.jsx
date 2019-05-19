import React from 'react';
import PropTypes from 'prop-types';

const Foo = ({ id }) => (
  <div id={id}>Hello World</div>
);

Foo.propTypes = {
  id: PropTypes.string
};

export default Foo;
