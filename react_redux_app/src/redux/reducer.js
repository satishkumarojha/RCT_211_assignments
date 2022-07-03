import { GET_BOOKS_FAILURE, GET_BOOKS_LOADING, GET_BOOKS_SUCCESS } from "./actionTypes"

const initialState = {
    books:[],
    isError:false,
    isLoading:false
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_BOOKS_LOADING :{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_BOOKS_SUCCESS :{
            console.log(payload);
            return {
                ...state,
                books:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_BOOKS_FAILURE :{
            return {
                ...state,
                isError:true,
                isLoading:false
            }
        }
        default :{
            return state;
        }
    }
}