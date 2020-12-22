import React, {useEffect, useContext,useState} from 'react';
import {dataContext} from '../../context';
import axios from 'axios';
import {FETCH} from '../../types'
import {Wrapper} from './styled';
import Student from '../Student'

const StudentList = () => {
    const {state:{students},dispatch}=useContext(dataContext);
;    useEffect(async()=>{
        const res= await axios.get("https://api.hatchways.io/assessment/students");
        const list=res.data.students.map(i=>({...i,tags:[]}));
        console.log(list);
        dispatch({type:FETCH,payload:list})
        },[])

    return (
        <Wrapper>
            {students.map(i=>(<Student key={i.id} student={i}/>))}
        </Wrapper>
    )
}

export default StudentList;
