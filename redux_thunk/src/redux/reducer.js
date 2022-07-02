import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_FAILURE, POST_TODOS_REQUEST, POST_TODOS_SUCCESS } from "./actionTypes"

const initialState = {
    todo:[],
    isLoading:false,
    isError:false
}

export const reducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_TODOS_REQUEST :{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_TODOS_SUCCESS :{
            return{
                ...state,
                todo:payload,
                isLoading:false,
                isError:false
            }
        }
        case GET_TODOS_FAILURE :{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        case POST_TODOS_REQUEST :{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case POST_TODOS_SUCCESS :{
            return{
                ...state,
                isLoading:false,
                isError:false
            }
        }
        case POST_TODOS_FAILURE :{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default :{
            return state;
        }
    }
}