import logo from "./logo.svg";
import "./App.css";
import {Layout} from "./components/layout/Layout";
import {PlaceList} from "./components/PlaceList";
import {Outlet, Link} from "react-router-dom";

function App() {
  return (
    <Layout>
      <PlaceList />
    </Layout>
  );
}

export default App;
