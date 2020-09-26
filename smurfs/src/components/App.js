import React, { useEffect, useState } from "react";
import "./App.css";
import {fetchSmurf} from './actions/smurfActions'
import {connect} from 'react-redux'
import SmurfForm from './SmurfForm'
import axios from 'axios'


function App ({fetchSmurf}) {

  const [smurf, setSmurfs] = useState()


  useEffect(() => {
    fetchSmurf()
  }, [fetchSmurf])

  const addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log('post res', res);
        setSmurfs(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm addSmurf={addSmurf}/>
        
        
      </div>
    );
  
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurf
  }
}

export default connect(mapStateToProps ,{fetchSmurf})(App)