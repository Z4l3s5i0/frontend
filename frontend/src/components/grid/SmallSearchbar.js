import React, {Component, useEffect, useState} from "react";
import "../header/searchbar.css"
import styled from "styled-components";
import {TextInput} from "@mantine/core";

function SmallSearchbar(props){
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState();

    useEffect(() =>{
        fetch("https://backend-velasiraptor-gvom4czscq-oa.a.run.app/search", {
            method: 'POST',
            headers: {"Content-Type": "text/plain"},
            body: query
        }).then((res) => res.json())
            .then((result) => {
                if (result.err !== undefined){
                    setError(error);
                    setLoaded(true);
                }else {
                    setResults(result);
                    this.props.setResult(result);
                    setLoaded(true);
                }});

    }, []);

    if (error){
        return <>{error.message }< />;
    }else if (!loaded){
        return <>{"loading..."}</>
    } else{

        return (
            <div>
                <label htmlFor={'search-form'}>
                    <input
                        inputMode={"text"}
                        name={"search-form"}
                        id={"search-form"}
                        className={"searchbar"}
                        placeholder={`Search for NFT...`}
                        onChange={e => setQuery(e.target.value.toString())}
                    />
                </label>
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
export default SmallSearchbar;