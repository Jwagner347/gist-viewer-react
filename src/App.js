import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Search from "./containers/Search/Search";
import Favorites from "./containers/Favorites/Favorites";

const App = () => {
    return (
      <div className="app-container">
				<Navbar/>
					<Switch>
						<Route path="/favorites" component={Favorites}/>
						<Route path="/search" component={Search}/>
						<Route path="/" exact component={Search}/>
					</Switch>
			</div>
    );
  }

export default App;