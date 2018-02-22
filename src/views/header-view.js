import React from 'react';
import logo from '../logo.svg';
import '../App.css';


export default function HeaderView(props) {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React Redux</h1>
      </header>
    );
}