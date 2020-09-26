import {
    FETCH_SMURF,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR,
    NEW_SMURF,
    NEW_SMURF_SUCCESS,
    NEW_SMURF_ERROR,
  } from "../actions/smurfActions";

const initialState = {
    smurfs: [{
        "name": "Brainey",
        "age": 200,
        "height": "5cm",
        "id": 0 
    }],
    loadingSmurfs: true,
    error:''
}


export default (state= initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                loadingSmurfs: true
            }
        case FETCH_SMURF_ERROR:
            return {
                ...state,
                loadingSmurfs: true
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                loadingSmurfs: true
            }
        case NEW_SMURF:
            return {
                ...state,
                loadingSmurfs: true
            }
        case NEW_SMURF_SUCCESS:
            return {
                ...state,
                loadingSmurfs: true,
                smurfs: action.payload
            }
        case NEW_SMURF_ERROR:
            return{
                ...state,
                loadingSmurfs: true
            }

        default:
            return state;

    }
}