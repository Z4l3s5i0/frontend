import logo from './logo.svg';
import './App.css';
import Searchbar from "./components/header/Searchbar";
import './components/buttons/buttons.css'
import NFTMarketRoot1 from "./components/grid/Result";
import {HeaderH} from "./components/header/Header";
import backgroundPic from './pictures/backgroundPic.jpg';
import {useState} from "react";
import Result from "./components/grid/Result";
import SmallSearchbar from "./components/grid/SmallSearchbar";

function App() {
    const linksForRoute = ['/documentation', '/Contact']
    const[results, setResult] = useState('');
    if (results !== ''){
        return (
            <div className="App algingin">
                <HeaderH links={[{link: '/search', label: 'search'}, {link: '/contact', label: 'contact'}]}/>
                <Searchbar setResult={results}/>
                <Result results={setResult}/>
            </div>
        )
    }
    return (
        <div className="App algingin">
            <HeaderH links={[{link: '/search', label: 'search'}, {link: '/contact', label: 'contact'}]}/>
            <Searchbar setResult={results}/>
        </div>
    );
}

export default App;
