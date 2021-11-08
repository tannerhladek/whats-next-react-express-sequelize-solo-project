import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// thunk inport
import { restoreUser } from './store/session'

//component import
import SignUpFormPage from './components/SignUpFormPage';
import NavigationBar from './components/Navigation/NavigationBar';

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
          <Route path="/signup">
            <SignUpFormPage />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
