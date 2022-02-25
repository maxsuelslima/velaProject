import { createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import { IBikeState } from "./modules/selectedBike/type";

export interface IState{
    bike:IBikeState
}

const store = createStore(rootReducer)

export default store