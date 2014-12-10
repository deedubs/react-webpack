/**
 * Page #2
 *
 * @module Page2
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
        return (
            <div>
                <h2>Page 2</h2>
            </div>
        );
    }
};

module.exports = React.createClass(internals.component);
