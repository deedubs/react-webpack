/**
 *  Application Wrapper
 *
 * @module Application
 *
 * @typeof Component
 * @requires react
 * @requires react-router
 */
var React = require('react');
var Router = require('react-router');

var {RouteHandler, Link} = Router;

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
                <h1>React / Webpack</h1>
                <RouteHandler />
                <Link to="page-1">Page 1</Link>
                <Link to="page-2">Page 2</Link>
            </div>
        );
    }
};

module.exports = React.createClass(internals.component);
