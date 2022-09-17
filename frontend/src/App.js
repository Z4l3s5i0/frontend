import './App.css';
import './components/buttons/buttons.css'
import {HeaderH} from "./components/header/Header";
import {useState} from "react";
import Result from "./components/grid/Result";
import {BrowserRouter} from "react-router-dom";
import backgroundPic from "./pictures/backgroundPic.jpg";
import Searchbar2 from "./components/header/Searchbar2.0";
import {Container} from "@mantine/core";


export default function App() {
    const [result, setResult] = useState(-1);

        return (

                <div className="App algingin">
                    <BrowserRouter  basename="/build">
                        <HeaderH links={[{link: '/', label: 'search'}, {link: '/contact', label: 'contact'}]}/>
                        {//<img className={"background"} src={backgroundPic}/>
                        }
                        <Container className={"container"}> <Searchbar2 setResult={setResult}/>
                        </Container>
                        {result.metadata !== undefined &&
                            <Result setResult={result}/>
                        }
                    </BrowserRouter>
            </div>

        );

}
