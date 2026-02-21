import './App.css';
import UserProvider, { UserContext } from "./context/UserContext";
import Login from "./Login";
import Profile from "./Profile";
import { useContext } from "react";

const AppContent = () => {
  const { user } = useContext(UserContext);

  return user ? <Profile /> : <Login />;
};

const App = () => {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
};

export default App;
