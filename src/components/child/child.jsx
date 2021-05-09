import React, { useState, useEffect } from 'react'
import './child.css'

//In functional components we can use 'useSelector' hook to get the the redux store
// and create a reference of 'useDispatch' hook to dispath(send) data to store
import { useDispatch, useSelector } from 'react-redux'

export default function Child() {

    //Using 'useSelector' to get redux store
    const redux_store = useSelector(state => state)
    console.log("In child component redux_store: ", redux_store)

    // Local states, assigning data from redux-store states to local states
    const [name, setName] = useState(redux_store.StateOne.name)
    const [age, setAge] = useState(redux_store.StateOne.age)
    const [address, setAddress] = useState(redux_store.StateTwo.address)

    //call useEffect hooks to dispatch data to redux store on particular state change


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





    return (
        <div className="formbody">
            <a href="#/"> &lt;&lt; Parent</a><br /><br />
            <input type="text" onChange={(e) => setName({ name: e.target.value })} name="name" id="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
            <input type="text" onChange={(e) => setAge({ age: e.target.value })} name="age" id="age" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
            <input type="text" onChange={(e) => setAddress({ address: e.target.value })} name="address" id="address" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
    )
}
