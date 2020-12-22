import React, {useContext,useRef,useState,useEffect} from 'react'
import {dataContext} from '../../context';
import {FILTER} from '../../types'
import {Wrapper} from './styled'
import {Input} from 'semantic-ui-react';

const Search = () => {
    const [state,setState]=useState({name:'',tag:''});
    console.log(state);
    const {dispatch}=useContext(dataContext);
    const timeoutRef=useRef();

    const handleSubmit=(value)=>{
        dispatch({type:FILTER,payload:value})
        console.log(value)
        }

    const handleChange=(e)=>{
        const newState={...state,[e.target.name]:e.target.value}
        setState(newState); 
        if(timeoutRef.current){clearTimeout(timeoutRef.current);};
        timeoutRef.current=setTimeout(()=>{
            handleSubmit(newState)
        },300)
      
    }

    return (
        <Wrapper>
            <Input name='name' type='text' placeholder='Search by name'
            onChange={handleChange} value={state.name}
            />
            <Input name='tag' type='text' placeholder='Search by tag'
            onChange={handleChange} value={state.tag}
            />
        </Wrapper>
    )
}

export default Search
