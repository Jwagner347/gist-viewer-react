import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./containers/SearchResults/SearchResults";
import Home from "./components/Home/Home";
import Favorites from "./containers/Favorites/Favorites";

const App = () => {
    return (
      <div className="app-container">
				<Navbar/>
					<Switch>
						<Route path="/favorites" component={Favorites}/>
						<Route path="/search-results" component={SearchResults}/>
						<Route path="/" exact component={Home}/>
					</Switch>
			</div>
    );
  }

export default App;