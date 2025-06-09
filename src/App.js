import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
 import TextBox from "./components/TextBox";
 import About from "./components/About";
import Alert from "./components/Alert";
 import Main from "./components/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode enabled!!!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode disabled", "success");
    }
  };

  const toggleBlueMode = () => {
    if (Mode !== "blue") {
      setMode("blue");
      document.body.style.backgroundColor = "#7DF9FF";
      showAlert("Blue Mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Blue Mode disabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar
          h4="TextUtils"
          aboutTextUtils="About"
          mode={Mode}
          toggleDarkMode={toggleDarkMode}
          toggleBlueMode={toggleBlueMode}
        ></Navbar>
        <Alert alert={alert} />

        <Routes>
          <Route
            exact path="/about"
            element={
              <div className="container my-3">
                <About />
              </div>
            }
          />

          <Route
            exact path="/"
            element={
              <div className="container my-3">
                <Main />
              </div>
            }
          />

          <Route
            exact path="/home"
            element={
              <div className="container my-5">
                <TextBox
                  showAlert={showAlert}
                  mode={Mode}
                  heading="Enter the text to analyze"
                />
              </div>
            }
          />
        </Routes>

      </Router>


              
    </>
  );
}

export default App;
