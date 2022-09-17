import logo from './logo.svg';
import './App.css';
import Searchbar from "./components/header/Searchbar";
import './components/buttons/buttons.css'
import NFTMarketRoot1 from "./components/grid/grid";
import {HeaderH} from "./components/header/Header";
import backgroundPic from './pictures/backgroundPic.jpg';

function App() {
    const linksForRoute = ['/documentation', '/Contact']
  return (
    <div className="App algingin">
        <HeaderH links={[{link: '/search', label: 'search'}, {link: '/documentation', label: 'Documentation'}, {link: '/contact', label: 'contact'}]}/>
        <Searchbar/>
    </div>
  );
}

export default App;
