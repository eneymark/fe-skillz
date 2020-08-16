import React from 'react';
import HeaderNav from "../components/header-nav";
import navData from "../data/navbar.json";

export default class extends React.Component {
    render() {
        return (
            <div className="main">
                <HeaderNav navBar={navData}/>
            </div>
        )
    }
}