import { DarkThemeToggle, Flowbite } from "flowbite-react";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container fluid">
        <HomeScreen />
      </div>
    </div>
  );
};

export default App;
