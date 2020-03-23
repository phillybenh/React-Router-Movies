import React, { useState } from "react";
import { Route, Switch, useParams } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const {item} = useParams();

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
console.log("item",item);
  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path="/movies/:id">
          <Movie />
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
