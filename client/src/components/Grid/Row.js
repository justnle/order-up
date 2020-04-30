import PropTypes from 'prop-types';
import React from 'react';

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? `-fluid` : ``}`}>{children}</div>;
}
Row.propTypes = {
    children: PropTypes.node,
    fluid: PropTypes.bool
};
