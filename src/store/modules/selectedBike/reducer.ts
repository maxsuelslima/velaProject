import { Reducer } from "redux";
import { IBikeState } from "./type";

const INITIAL_STATE:IBikeState={
    quadroId:1,
    colorId:1,
    sizeId:2,
}
type actionProps={
    payload:{
        id:number
    }
}

const selectedBike:Reducer<IBikeState>=(state=INITIAL_STATE, action)=>{
    
    switch(action.type){
        case 'CHANGE_QUADRO':{
            const {id} = action.payload
            return{...state,quadroId:id}
            break;
        }
        case 'CHANGE_COLOR':{
            const {id} = action.payload
            return{...state,quadroId:id}
            break;
        }
        case 'CHANGE_SIZE':{
            const {id} = action.payload
            return{...state,quadroId:id}
            break;
        }
        default:{
            return state
            break;
        }
    }


    return INITIAL_STATE;
}

export default selectedBike;