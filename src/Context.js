import React, { useEffect, useState } from "react";
import { tasksList } from "./constants/tasksList";


export const CardContext = React.createContext();

const Context = (props) => {
    const [newList, setNewList] = useState(tasksList);
    const changeList = (arr, position, change) => {
        arr[position[0]].data[position[1]].checked = change
        setNewList(arr)
        setValue({ changeList, newList })
    }
    const [value, setValue] = useState({ changeList, newList})

    return <CardContext.Provider value={value}>{props.children}</CardContext.Provider>
}



export default Context