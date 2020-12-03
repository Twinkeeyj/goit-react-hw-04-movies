import React, { lazy, Suspense } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from "./component/Loading"
import routes from './routes';
import AppBar from './AppBar/AppBar';

const AsynkHomePage = lazy(() => import('./views/HomePage'));
const AsynkMoviesPage= lazy(() => import('./views/MoviesPage'));
const AsynkMovieDetailsPage= lazy(() => import('./views/MovieDetailsPage'));



const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<><Loading/><h3>Loading...</h3></>}>
      <Switch>
        <Route exact path={routes.HomePage} component={AsynkHomePage}></Route>
        <Route exact path={routes.MoviesPage} component={AsynkMoviesPage}></Route>
        <Route
          path={routes.MovieDetailsPage}
          component={AsynkMovieDetailsPage}
        ></Route>
      <Redirect to="/"/>
      </Switch>
    </Suspense>
  </>
);
export default App;
