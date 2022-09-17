import React, {Component, useEffect, useState} from "react";
import "./searchbar.css"
import styled from "styled-components";
import {Textarea, TextInput} from "@mantine/core";

function Searchbar(){
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() =>{
    fetch("...", {
        method: 'GET',
        headers: {"Content-Type": "application/json"},
        body: {
            query
        }
    }).then((res) => res.json())
        .then((result) => {
            if (result.err !== undefined){
                setError(error);
                setLoaded(true);
            }else {
                setItems(result);
                setLoaded(true);
            }});

    }, []);

    if (error){
        return <>{error.message }< />;
    }else {

        return (
                <div>
                    <p className={"SearchText"}>{"VALIDATE THE NFT"}</p>
                    <label htmlFor={'search-form'}>
                        <input
                            type={"search"}
                            name={"search-form"}
                            id={"search-form"}
                            className={"searchbar"}
                            placeholder={`Search for NFT...`}
                            onChange={(e) => setQuery(e.target.value)}/>
                    </label>
                    {//<SearchIcon className={"searchbarImage"} src={`https://file.rendit.io/n/RD2APZZ6cdWUWiiCnINM.svg`} />
                    }
                </div>
        );
    }
};
const SearchIcon = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #7f77e0;
  border-radius: 50px;
  padding: 9px;
`;
export default Searchbar;