import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import gif from './borntoparty.gif';

import Switch from "react-switch";
import Confetti from 'react-dom-confetti';
import Button from 'react-bootstrap/Button';


class App extends Component {
  state = {
    party: false,
    moreParty: false,
  }

  handleChange = (party) => {
    this.setState({ party: party });
    console.log("Switch");
  }

  handleChangeMoreParty = () => {
    this.setState({ moreParty: !this.state.moreParty });
    console.log("Switch");
  }

  render() {
    const config = {
      angle: 45,
      spread: 200,
      startVelocity: 30,
      elementCount: 200,
      dragFriction: 0.1,
      duration: 8000,
      delay: 0,
      width: "10px",
      height: "10px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    };

    return (
      <div className="App">
        <h1>LINDA'S SECRET PARTY ROOM</h1>
        <div style={{marginBottom: '15px', float: 'center'}}>
          <Confetti active={ this.state.party } config={ config }/>
          <Switch
            checked={this.state.party}
            onChange={this.handleChange}
            onColor="#00c27b"
            onHandleColor="#00a86b"
            handleDiameter={36}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={30}
            width={72}
            className="react-switch"
            id="material-switch"
            />
          <div>
            PARTY!
          </div>
        </div>
        <div style={{marginBottom: '15px', float: 'center'}}>
          <Confetti active={ this.state.moreParty } config={ config }/>
          <Button variant="light" size="lg" onClick={this.handleChangeMoreParty}>MORE PARTY!</Button>
        </div>
        <div style={{marginBottom: '15px', float: 'center'}}>
          <img src={gif} alt="borntoparty" />
        </div>
      </div>
    );
  }
}

export default App;
