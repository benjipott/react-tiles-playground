var React = require('react'),
	RRouter = require('react-router'),
	Home = require('./screens/HomeScreen'),
	Sidebar = require('./screens/SidebarScreen'),
	SidebarLink = require('./screens/SidebarLinkScreen'),
	FloatingTile = require('./screens/FloatingTileScreen'),
	GetStarted = require('./screens/GetStartedScreen'),
	Troubleshoot = require('./screens/TroubleshootScreen'),
	GetStarted = require('./screens/GetStartedScreen'),
	TestLink = require('./screens/TestLinkScreen'),
	TestLinkAlternative = require('./screens/TestLinkAlternativeScreen'),
	Api = require('./screens/ApiScreen'),
	App = require('./App')
;

var Router = RRouter.Router,
	Route = RRouter.Route,
	IndexRoute = RRouter.IndexRoute,
	history = RRouter.browserHistory
;

/*
 Routes are going by default to fetch WordPress data, so we will get WP
 404 page when the route is not found at all.
 */
var routes = (
	<Router history={ history }>
		<Route name="app" path="/" component={ App }>
			<IndexRoute component={ Home } />
			<Route path="/sidebar" component={ Sidebar } />
			<Route path="/sidebarLink" component={ SidebarLink } />
			<Route path="/floatingTile" component={ FloatingTile } />
			<Route path="/getStarted" component={ GetStarted } />
			<Route path="/troubleshoot" component={ Troubleshoot } />
			<Route path="/testLink" component={ TestLink } />
			<Route path="/api" component={ Api } />
			<Route path="/testLinkAlternative" component={ TestLinkAlternative } />
		</Route>
	</Router>
);

module.exports = routes;
