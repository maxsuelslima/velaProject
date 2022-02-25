import { Reducer } from "redux";
import { IBikeState } from "./type";

const INITIAL_STATE:IBikeState={
    quadroId:1,
    colorId:1,
    sizeId:1,
}
type actionProps={
    payload:{
        id:number
    }
}

const selectedBike:Reducer<IBikeState>=(state=INITIAL_STATE, action)=>{
    
    switch(action.type){
        case 'CHANGE_QUADRO':{
            console.log(action.payload)
            const {payloadId} = action.payload
            return{...state,quadroId:payloadId,sizeId:payloadId}
            break;
        }
        case 'CHANGE_COLOR':{
            const {payloadId} = action.payload
            return{...state,colorId:payloadId}
            break;
        }
        case 'CHANGE_SIZE':{
            const {payloadId} = action.payload
            return{...state,sizeId:payloadId}
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