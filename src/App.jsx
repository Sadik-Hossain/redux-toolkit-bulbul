import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { LoginAction, LogoutAction } from "./redux/actions";
function App() {
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  //* useSelector is a function that is used for retrieving multiple values from the store that takes the current state as an argument and returns whatever data you want from it
  // const isAuth = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <div className="App">
      {auth.isAuth ? (
        <div>
          <h1 style={{ color: "royalblue" }}>Welcome</h1>
          <p>Phone:{auth.phone}</p>
          <button onClick={() => dispatch(LogoutAction())}>Log out</button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={() => dispatch(LoginAction(phone))}>Login</button>
        </div>
      )}
      <h1>redux toolkit</h1>
    </div>
  );
}

export default App;
