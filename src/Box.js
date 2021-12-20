import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './actions';


export default function Box() {
    const {count} = useSelector(state => state.count); 
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(add(100))
    }
    return (
        <div>
            <h1 onClick={handleClick}>{count}</h1>
        </div>
    )
}
