import React, { useState , useEffect} from "react";
import styles from "./TodoItem.module.css"
import {FaTrash} from "react-icons/fa"

const TodoItem = props => {
    const [editing, setEditing] = useState(false)

    const handleEditing = () =>{
        setEditing(true); 
    }
   const handleUpdatedDone = event => {
        if(event.key === "Enter"){
            setEditing(false)
        }
    }

        const completedStyle = {
            fontStyle : "italic",
            color : "grey",
            opacity:0.4,
            textDecoration: "line-through",
        }
        const{ completed, id, title} = props.todo;
        
        //allows hiding of text editor when double clicked
        let viewMode = {}
        let editMode = {}
        if(editing){
            viewMode.display = "none"
        }
        else{
            editMode.display = "none"
        }

        useEffect(()=>{
            return() => {
                console.log("cleaning up")
            }
        },[])
        return ( <li className={styles.item}>
            <div onDoubleClick={handleEditing} style = {viewMode}>
            <input type = "text" className={styles.textInput}/>
            <input type = "checkbox" 
            className={styles.checkbox} 
            checked = {completed}
            onChange={()=> props.handleChangeProps(id)}
            />
            <button onClick={()=> props.deleteTodoProps(id)}><FaTrash style ={{size: "30px", marginBottom : "-2px", color: "red"}}/></button>
            <span style={completed ? completedStyle : null}> 
            {title}
            </span>
            </div>
            <input type= "text" 
            style = {editMode}
             className={styles.textInput}
             value = {title}
             //Double click to edit, updates values
             onChange={e=>{
                 props.setUpdate(e.target.value, id)
             }}
             //Press enter to leave edit mode
             onKeyDown={handleUpdatedDone}

             />
            </li>
        )
    }
export default TodoItem;