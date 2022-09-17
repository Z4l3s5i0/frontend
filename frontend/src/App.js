import './App.css';
import './components/buttons/buttons.css'
import {HeaderH} from "./components/header/Header";
import {useState} from "react";
import Result from "./components/grid/Result";
import Searchbar2 from "./components/header/Searchbar2.0";
import {BrowserRouter, Route, Router, useLocation} from "react-router-dom";


export default function App() {
    const [result, setResult] = useState();
    let resultIsSet= false;
    if (result !== '') {
        resultIsSet = true;
    }
    else {
        resultIsSet = false;
    }
        return (

                <div className="App algingin">

                    <HeaderH links={[{link: '/', label: 'search'}, {link: '/contact', label: 'contact'}]}/>
                        <Searchbar2 setResult={setResult}/>
                        <Result results={setResult}/>

            </div>

        );

}