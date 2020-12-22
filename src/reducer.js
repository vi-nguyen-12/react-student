import {FETCH,FILTER,ADD_TAG} from './types';
import produce from 'immer';
import {filter} from './utils';
export const INIT_STATE = {
    total:[],
    students:[]
  }
  
export const reducer=produce((draft,{type,payload})=>{
    switch(type){
        case FETCH:
            draft.total=payload;
            draft.students=payload;
            break;
        case FILTER:
            draft.students=draft.total
            .filter(i=>
              (i.firstName.toLowerCase().startsWith(payload.name.toLowerCase())||
              i.lastName.toLowerCase().startsWith(payload.name.toLowerCase()))
            )
            .filter(i=>filter(i.tags,payload.tag))
            console.log(draft.students);
            break;
        case ADD_TAG:
            draft.total=draft.total.map(x=>{
              if (x.id===payload.id){
                return {...x,tags:payload.tags}}
              return x
            })
            draft.students=draft.students.map(x=>{
              if (x.id===payload.id){
                return {...x,tags:payload.tags}}
              return x
            })
            console.log(draft.total);
            break;

    }
  },INIT_STATE)