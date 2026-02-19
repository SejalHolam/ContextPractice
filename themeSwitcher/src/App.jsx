import "./App.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
