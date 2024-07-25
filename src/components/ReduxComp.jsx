import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, changeUserName } from '../utils/user'

const ReduxComp = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const inputRef = useRef(null)
  return (
    <div>
        <h1>User profile managed with Redux</h1>
        <div>
            <p>Name: {user.value.name}</p>
            <p>Age: {user.value.age}</p>
            <p>Email: {user.value.email}</p>
        </div>
        <button onClick={()=>{
            if(user.value.loggedIn){
                dispatch(logout())
            }else{
                dispatch(login({name:"Ehab", email:"ehab@gmail.com", age:23}))
            }
        }}>{user.value.loggedIn ? "Logout": "Login"}</button>
        {user.value.loggedIn && <div>
            <input ref={inputRef} type="text" placeholder="Enter new name"/>
            <button onClick={()=>{
                dispatch(changeUserName(inputRef.current.value))
                inputRef.current.value = ""
            }}>Change name</button>
            </div>}
    </div>
  )
}

export default ReduxComp