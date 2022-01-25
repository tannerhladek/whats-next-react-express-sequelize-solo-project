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
import UserActivitiesPage from './components/UserActivitiesPage';
import EditActivityForm from './components/EditActivityForm';
import FooterBarLinks from './components/FooterLinksBar/FooterLinkBarComp';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(restoreUser())
      .then(() => setIsLoaded(true));
  }, [dispatch])

  return (
    <div>
      <header>
        <NavigationBar isLoaded={isLoaded} />
      </header>
      <main>
        {isLoaded && (
          <Switch>
            <Route exact path="/">
              <SplashPage />
            </Route>
            <Route path="/activities/new">
              <CreateActivityForm />
            </Route>
            <Route exact path="/activities/:id">
              <ActivityPage />
            </Route>
            <Route path="/activities/:id/edit">
              <EditActivityForm />
            </Route>
            <Route path="/users/:id/activities">
              <UserActivitiesPage />
            </Route>
          </Switch>
        )}
      </main>
      <footer>
        <FooterBarLinks />
      </footer>
    </div>
  );
}

export default App;
