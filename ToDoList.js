import React, { Component } from 'react';

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state={ipValue:'',toDoListArr:[],count:0};
        this.handleIpChange = this.handleIpChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
    }
    handleIpChange(e){
        this.setState({ipValue:e.target.value});
    }
    handleAddClick(e){
        if(this.state.ipValue !== ""){
            this.setState({ 
                toDoListArr: this.state.toDoListArr.concat([this.state.ipValue])
            })
            this.setState({ipValue:''});
        }
    }
    handleListClick(e){
        let classLists = e.target.classList
        if(classLists.value.indexOf('strike') < 0){
            classLists.add('strike');
            this.setState({count:(this.state.count + 1)});
        }
        else{
            classLists.remove('strike');
            this.setState({count:(this.state.count - 1)});
        }
    }
    render(){
        let toDoCount = this.state.toDoListArr.length;
        return(
            <div>
                <h1>ToDoList</h1>
                <input type="text" value={this.state.ipValue} onChange={this.handleIpChange}/>
                <br/><br/>
                <button onClick={this.handleAddClick}>ADD</button>
                <br/><br/>
                <p>{toDoCount - this.state.count} remaining out of {toDoCount} tasks</p>
                <ul>
                    {this.state.toDoListArr.map((toDoList,key) => {
                        return(<li key={key} onClick={this.handleListClick}>{toDoList}</li>)
                    })}
                </ul>
                <style>
                    {`.strike{
                        text-decoration: line-through;
                    }`}
                </style>
            </div>
        );
    }
}

export default ToDoList;