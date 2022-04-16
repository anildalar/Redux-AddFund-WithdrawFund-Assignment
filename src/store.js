import { createStore } from "redux";
import { rootReducer } from "./reducer";




export const storeObject = createStore(rootReducer,1000);

