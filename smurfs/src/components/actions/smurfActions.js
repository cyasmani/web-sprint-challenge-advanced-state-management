import axios from "axios"


export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";

export const NEW_SMURF = "NEW_SMURF";
export const NEW_SMURF_SUCCESS = "NEW_SMURF_FAILURE";
export const NEW_SMURF_ERROR = "NEW_SMURF_ERROR";

export const fetchSmurf = () => (dispatch) =>  {

        dispatch({type: FETCH_SMURF});
        axios.get("http://localhost:3333/smurfs")
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
            
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SMURF_ERROR, payload: err})
            
        } )

        
}

export const newSmurf = (smurf) => (dispatch) => {
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((response) => {
    dispatch({ type: NEW_SMURF_SUCCESS, payload: response.data });
    })
    .catch((error) => {
    dispatch({ type: NEW_SMURF_ERROR, payload: error });
    });
};