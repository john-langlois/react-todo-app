import React from "react";
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component{
    handleEditing = () =>{
        this.setState({
            editing:true,
        }) 
    }
    state = {
        editing: false, 
    }
    handleUpdatedDone = event => {
        if(event.key === "Enter"){
            this.setState({editing: false})
        }
    }

    componentWillUnmount(){
        console.log("Cleaning up")
    }
    render(){
        const completedStyle = {
            fontStyle : "italic",
            color : "green",
            opacity:0.4,
            textDecoration: "line-through",
        }
        const{ completed, id, title} = this.props.todo;
        
        //allows hiding of text editor when double clicked
        let viewMode = {}
        let editMode = {}
        if(this.state.editing){
            viewMode.display = "none"
        }
        else{
            editMode.display = "none"
        }
        return ( <li className={styles.item}>
            <div onDoubleClick={this.handleEditing} style = {viewMode}>
            <input type = "text" className={styles.textInput}/>
            <input type = "checkbox" 
            className={styles.checkbox} 
            checked = {completed}
            onChange={()=> this.props.handleChangeProps(id)}
            />
            <button onClick={()=> this.props.deleteTodoProps(id)}>Delete</button>
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
                 this.props.setUpdate(e.target.value, id)
             }}
             //Press enter to leave edit mode
             onKeyDown={this.handleUpdatedDone}

             />
            </li>
        )
    }
}
export default TodoItem;