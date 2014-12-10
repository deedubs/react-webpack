var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute} = Router;

var {Application, Page1, Page2} = require('./components');

var routes = (
    <Route name="home" path="/" handler={Application} >
        <DefaultRoute handler={Page1} />
        <Route name="page-1" path="/page1" handler={Page1} />
        <Route name="page-2" path="/page2" handler={Page2} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function renderContent (Handler) {

    React.render(<Handler />, document.getElementById('content'));
});