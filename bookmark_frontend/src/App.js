
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import './style.css';


const App = () => {
  return (
    <div className="App">

      <Header/>
      <Outlet/>
      <Footer />

    </div>
  );
}

export default App;
