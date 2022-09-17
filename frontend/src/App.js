import './App.css';
import './components/buttons/buttons.css'
import {HeaderH} from "./components/header/Header";
import {useState} from "react";
import Result from "./components/grid/Result";
import Searchbar2 from "./components/header/Searchbar2.0";
import {BrowserRouter} from "react-router-dom";


export default function App() {
    const [result, setResult] = useState(-1);

        return (

                <div className="App algingin">
                    <BrowserRouter  basename="/build">
                        <HeaderH links={[{link: '/', label: 'search'}, {link: '/contact', label: 'contact'}]}/>
                        <Searchbar2 setResult={setResult}/>
                        <Result setResult={result}/>
                    </BrowserRouter>
            </div>

        );

}