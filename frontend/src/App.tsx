import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container px-4 mx-auto">
      <Header />
      <div className="container fluid">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
