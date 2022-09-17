import React, {Component} from "react";

class Searchbar extends Component{
    render(){
        return (
            <div>
                <input classname={".searchbar"} placeholder={`Search for NFT...`}>
                    {}
                </input>
                <img src={`https://file.rendit.io/n/RD2APZZ6cdWUWiiCnINM.svg`} />
            </div>

        );
    }
};
export default Searchbar;