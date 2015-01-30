/**
 * Page #1
 *
 * @module Page1
 *
 * @typeof Component
 * @requires react
 */
var React = require('react');

var internals = {

};

internals.component = {

    /**
     * Render the component
     *
     * @method
     * @return {React.Element}
     */
    render: function () {

        console.log('Rendering page 1');

        return (
            <div>
                <h2>Page 1</h2>
            </div>
        );
    }
};

module.exports = React.createClass(internals.component);
