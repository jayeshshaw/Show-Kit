import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Watchlist from "./Pages/Watchlist/Watchlist";
import { Container } from "@material-ui/core";
import AppContext from "./AppContext"


function App() {
  const [Mylist, setMylist] = useState([]);


  return (
    <AppContext.Provider value={{ Mylist, setMylist }}>
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/"  ><Trending Mylist={Mylist}  /></Route>
            <Route exact path="/movies"  ><Movies Mylist={Mylist}  /></Route>
            
            <Route exact path="/series"  ><Series Mylist={Mylist}  /></Route>
            
            <Route exact path="/search"  ><Search Mylist={Mylist}  /></Route>
            
            <Route exact path="/watchlist"  ><Watchlist Mylist={Mylist}  /></Route>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
    </ AppContext.Provider>
  );
}

export default App;
