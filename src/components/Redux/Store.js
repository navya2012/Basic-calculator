import {createStore} from "redux"
import calculateReducer from "./reducers/calculateReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
}

const persisterReducer = persistReducer(persistConfig, calculateReducer)

const mystore = createStore(persisterReducer);

export const persistor = persistStore(mystore)
export default mystore;