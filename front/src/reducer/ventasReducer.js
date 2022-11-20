//Import de las constantes
import {
    ALL_VENTAS_REQUEST,
    ALL_VENTAS_SUCCESS,
    ALL_VENTAS_FAIL,
    CLEAR_ERRORS
} from '../constants/ventasConstants'


export const ventasReducer = (state = {ventas: []}, action) => {
    switch(action.type){
        
        case ALL_VENTAS_REQUEST:
            return{
                loading:true,
            }

        case ALL_VENTAS_SUCCESS:
            return{
                loading:false,
                ventas: action.payload.ventas
            
            }
        case ALL_VENTAS_FAIL:
            return{
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }

        default:
            return state;
    }


}