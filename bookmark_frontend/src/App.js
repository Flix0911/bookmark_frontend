import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
