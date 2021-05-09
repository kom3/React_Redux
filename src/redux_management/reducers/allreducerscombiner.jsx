import {combineReducers} from 'redux'

import reducerOne from './reducer1'
import reducerTwo from './reducer2'



const redux_with_combined_reducers = combineReducers({
    StateOne: reducerOne, //will be storing name, age
    StateTwo: reducerTwo //will be storing address
})

export default redux_with_combined_reducers
