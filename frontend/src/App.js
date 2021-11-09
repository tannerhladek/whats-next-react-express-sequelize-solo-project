import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// thunk import
import { restoreUser } from './store/session'

//component import
import NavigationBar from './components/Navigation/NavigationBar';
import SplashPage from './components/SplashPage';

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
        </Switch>
      )}
      
    </div>
  );
}

export default App;
