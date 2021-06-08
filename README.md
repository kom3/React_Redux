## Basic modules needed in react + redux project:

```

1. react-router-dom
import { BrowserRouter as Router, HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom'

2. redux
import {combineReducers} from 'redux' (in redux_management/combinereducers.js)
import { createStore, applyMiddleware, compose } from 'redux' (in app.js/index.js)

3. react-redux
import { Provider } from 'react-redux'

4. redux-thunk
import thunk from 'redux-thunk'

```

## How to use?
## 1. In Class Components:

```

// import connect
// import actions (or we can directly import reducers and deal with it as well)

import { connect } from 'react-redux'
import MyActions from '../../redux_management/actions/actions'

//map store to props
const mapStoreToProps = (state) => {
    console.log("Global state received from provider: ", state)
    return {
        GlobalStoreInProps: state
    }
}


const mapDispatchToProps = (dispatch) => {
    console.log(dispatch)
    return {
        //we can directly send json object data to dispatcher(dispatcher refers to all reducer functions
        // which we combined using 'combineReducers' in allreducerscombiner.jsx file)
        setName: (name) => dispatch({
            type: "SET_REDUCER_ONE",
            payload: { name: name }
        }),
        // we can also use actions(action is going to return the json object data requied for dispatcher)
        // you can design action functions as per your need(the way of sending data from components and
        // processing data in actions is up to us, action is just a function which will
        // receive paremeters and will return json object which is requied for dispatcher)
        //Note: Dispatcher refers to all the reducers we have combined and will always expects the data in 
        // the form of json {type:"",  payload: ""} in our case***, agian this data structure can be customisable.
        setAge: (age) => dispatch(MyActions("S_REDUCER_1", { age: age })),

        setAddress: (address) => dispatch({
            type: "SET_REDUCER_TWO",
            payload: { address: address }
        })
    }
}



export default connect(mapStoreToProps, mapDispatchToProps)(Parent)

```

## 1. In Function Components:

```
import { useDispatch, useSelector } from 'react-redux'


ASSIGNING DATA FROM REDUX STORE TO COMPONENT STATES':
-------------------------------------------------------
//Using 'useSelector' to get redux store
const redux_store = useSelector(state => state)

// Local states, (assigning data from redux-store states to local states)
const [name, setName] = useState(redux_store.StateOne.name)
const [age, setAge] = useState(redux_store.StateOne.age)
const [address, setAddress] = useState(redux_store.StateTwo.address)



DISPATCHING DATA FROM COMPONENET STATES'/COMPONENT TO REDUX STORE:
--------------------------------------------------------------------
//create a reference of DispatchRef, *** raises name conflicts if function name starts with use ex: 'useFunc' ***
const DispatchRef = useDispatch()

//dispatching name data to redux store state(StateOne) when name state changes
useEffect(() => {
    DispatchRef({
        type: "SET_REDUCER_ONE",
        payload: { name: name }
    })
}, [name])

//dispatching age data to redux store state(StateOne) state when age state changes
useEffect(() => {
    DispatchRef({
        type: "SET_REDUCER_ONE",
        payload: { age: age }
    })
}, [age])

//dispatching address data to redux store state(StateTwo) when address state changes
useEffect(() => {
    DispatchRef({
        type: "SET_REDUCER_TWO",
        payload: { address: address }
    })
}, [address])


```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
