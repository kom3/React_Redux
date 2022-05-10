// below imports are required to configure redux with react
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


// importing combined reducers
import redux_with_combined_reducers from '../redux_management/reducers/allreducerscombiner'

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

//or in simply
// composeEnhancers = compose


// Creating a global store, using combined reduer and composeEnhancers
const redux_global_store = createStore(redux_with_combined_reducers, composeEnhancers(applyMiddleware(thunk)))

export { Provider, redux_global_store }