import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// thunk import
import { restoreUser } from './store/session'

//component import
import NavigationBar from './components/Navigation/NavigationBar';
import SplashPage from './components/SplashPage';
import ActivityPage from './components/ActivityPage';
import CreateActivityForm from './components/CreateActivityForm';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <div>
      <NavigationBar isLoaded={isLoaded} />

      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/activities/new">
            <CreateActivityForm />
          </Route>
          <Route path="/activities/:id">
            <ActivityPage />
          </Route>
          <Route path="/users/:id/activities">
            <SplashPage />
          </Route>
        </Switch>
      )}

    </div>
  );
}

export default App;
