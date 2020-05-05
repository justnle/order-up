import PropTypes from 'prop-types';
import React from 'react';

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(` `)
                .map(s => `col-${ s}`)
                .join(` `)}
        >
            {children}
        </div>
    );
}
Col.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string
};

