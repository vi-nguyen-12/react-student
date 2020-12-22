import React, {useReducer} from 'react';
import './App.css';
import {StudentList,Search} from './components'
import {dataContext} from './context';
import {INIT_STATE,reducer} from './reducer';
import {GlobalStyle} from './GlobalStyle'

const App=()=>{
  const [state,dispatch]=useReducer(reducer,INIT_STATE);
  return(
    <dataContext.Provider value={{state,dispatch}}>
        <GlobalStyle/>
        <Search/>
        <StudentList/>
    </dataContext.Provider>
   
  )
}

export default App;
