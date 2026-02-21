import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>{" "}
      <input
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
