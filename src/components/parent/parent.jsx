import React, { Component } from 'react'


import { connect } from 'react-redux'
import MyActions from '../../redux_management/actions/actions'

class Parent extends Component {
    state = {
        name: "",
        age: "",
        address: ""
    }

    componentDidMount() {
        this.setState(this.props.GlobalStoreInProps.StateOne)
        this.setState(this.props.GlobalStoreInProps.StateTwo)
    }

    render() {
        return (
            <div className="formbody">
                <a href="#child">Child &gt;&gt;</a><br /><br />
                <input type="text" onChange={(e) => this.setState({ name: e.target.value }, () => this.props.setName(this.state.name))} value={this.state.name} name="name" id="name" placeholder="name" /><br /><br />
                <input type="text" onChange={(e) => this.setState({ age: e.target.value }, () => this.props.setAge(this.state.age))} value={this.state.age} name="age" id="age" placeholder="age" /><br /><br />
                <input type="text" onChange={(e) => this.setState({ address: e.target.value }, () => this.props.setAddress(this.state.address))} value={this.state.address} name="address" id="address" placeholder="address" />

            </div>
        )
    }
}

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