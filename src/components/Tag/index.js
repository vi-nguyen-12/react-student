import React, {useState,useContext} from 'react';
import {dataContext} from '../../context';
import {ADD_TAG} from '../../types';
import {Wrapper} from './styled';
import {List,Form} from 'semantic-ui-react';

const Tag = ({id,tags}) => {
    const [input,setInput]=useState('');
    const {dispatch}= useContext(dataContext);

    const handleChange=(e) => {
        setInput(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTags=[...tags,input.toLowerCase()]
        setInput('');
        dispatch({type:ADD_TAG,payload:{id,tags:newTags}})
    }
    return (
        <Wrapper>
            <List>
                {tags.map((i,index)=>(
                    <List.Item key={index}>{i}</List.Item>
                ))}
            </List>
            <Form onSubmit={handleSubmit}>
                <input 
                placeholder="Add a tag" 
                value={input}
                onChange={handleChange}
                />
            </Form>
        </Wrapper>
    )
}

export default Tag
