import axios from 'axios'

//Import de las constantes
import {
    ALL_VENTAS_REQUEST,
    ALL_VENTAS_SUCCESS,
    ALL_VENTAS_FAIL,
    CLEAR_ERRORS
} from '../constants/ventasConstants'

export const getVentas = () => async(dispath) => {
    try{
        dispath({type: ALL_VENTAS_REQUEST});

        const {data} = await axios.get('/api/allventas')

        dispath({
            type: ALL_VENTAS_SUCCESS,
            payload: data
        })
        
    }catch (error){
        dispath({
            type:ALL_VENTAS_FAIL,
            payload: error.response.data.message
        })
        
    }
}

//Clear Errors
export const clearErrors = ()=> async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}