import React, {useState} from 'react'
import {connect} from 'react-redux'
import { Button } from 'reactstrap';

function SmurfForm(props) {

      const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
      });
    
      const handleChanges = e => {
        setNewSmurf({
          ...newSmurf,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = e => {
        
    
        props.addSmurf(newSmurf);
        setNewSmurf({
          name: "",
          age: "",
          height: ""
        });
      };

      console.log(props)


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChanges} placeholder="name"/>
                </label>
                <label>
                    Age:
                    <input type="text" name="age" onChange={handleChanges} placeholder="age"/>
                </label>
                <label>
                    Height:
                    <input type="text" name="height" onChange={handleChanges} placeholder="height"/>
                </label>
                <button>
                    Add Smurf
                </button>
            </form>
            {props.smurfs.map((smurf) => {
                return (
                    <div>
                        <h2>Created Smurf</h2>
                        <form>
                        <label>
                            Name: 
                            <input 
                            type='text'
                            name='name'
                            value={smurf.name}
                            
                            />
                        </label>
                        <label>
                            Age: 
                            <input 
                            type='text'
                            name='age'
                            value={smurf.age}
                            />
                        </label>
                        <label>
                            Height: 
                            <input 
                            type='text'
                            name='height'
                            value={smurf.height}
                            />
                        </label>
                        </form>
                    </div>
                )
            }
        )}
            
        </div>
    )
}


function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, {})(SmurfForm)
