import React from "react";
import LoginForm from "./LoginForm";

var isLoggedIn = true;
const currentTime = new Date();
function renderConditionally() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return <LoginForm />;
  }
}

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <LoginForm />}
      {currentTime > 12 ? <h1>Why are you still stuying ?</h1> : null}
    </div>
  );
}

export default App;
