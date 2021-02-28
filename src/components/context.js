import React,{useState} from 'react';
const AppContext =React.createContext();
const AppProvider=({children})=>{
const[openModel,setOpenModel]=useState(false);
const showModel=()=>{
setOpenModel(true);
}
const closeModel=()=>{
    setOpenModel(false);
}
    return (
        <AppContext.Provider value={{openModel,showModel,closeModel}}>{children}</AppContext.Provider>
    )
}
export {AppProvider,AppContext};