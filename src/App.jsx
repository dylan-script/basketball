// import { useState } from 'react';
import "./App.css";
import { Header } from "./components/header/header";
import { Body } from "./components/body/body";
import Helmet from "react-helmet";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Helmet>
        <title>App Title</title>
        <meta name="author" content="Dilan, Nicolas"></meta>
        <meta name="keywords" content="react"></meta>
        <meta
          name="description"
          content="proyecto final sobre un equipos de baloncesto con React"
        />
      </Helmet>
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
