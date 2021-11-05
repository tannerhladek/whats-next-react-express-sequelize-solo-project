import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// thunk inport
import { restoreUser } from './store/session'

//component import
import LoginFormPage from './components/LoginFormPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser())
  }, [dispatch])

  return (
    <>
      <div>WELCOME TO MY FIRST SOLO APP!</div>
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
