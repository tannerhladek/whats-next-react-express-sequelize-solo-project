import { useDispatch } from "react-redux";

//thunk import
import { login } from "../../store/session";

const DemoUserButton = () => {
   const dispatch = useDispatch();

   const loginDemoUser = () =>{
      dispatch(login({credential: 'Demo-lition', password: 'password'}));
   }

   return (
      <>
         <button onClick={loginDemoUser}>Demo User</button>
      </>
   );
};

export default DemoUserButton;
