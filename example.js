import React, { Component } from 'react';

class Example extends Component {
   render() {
      return (
         <div>
            <header id="id_header"><Header/></header>
            {/*<State/>*/}
            <ToDoList/>
            <footer id="id_footer"><Footer/></footer>
         </div>
      );
   }
}
class Header extends Component {
   render() {
      return (
        <h1>Header</h1>
      );
   }
}
class Footer extends Component {
   render() {
      return (
         <div>
            <h1>Footer</h1>
         </div>
      );
   }
}
class State extends Component {
    constructor(props) {
       super(props);
       this.state = {firstInputVal:'',SecondnputVal:''};
       this.firstInputVal = this.firstInputVal.bind(this);
       this.SecondnputVal = this.SecondnputVal.bind(this);
    }
    firstInputVal(e){
      this.setState({firstInputVal : e.target.value})
    }
    SecondnputVal(e){
      this.setState({SecondnputVal : e.target.value})
    }
    render() {
      let addedValue = parseInt(this.state.firstInputVal) + parseInt(this.state.SecondnputVal);
      let subtractedValue = parseInt(this.state.firstInputVal) - parseInt(this.state.SecondnputVal);
       return (
         <React.Fragment>
          <div>
             <input type="text" className="sk_firstElem" onChange={this.firstInputVal}/>
             <br/><br/>
             <input type="text" className="sk_secondElem" onChange={this.SecondnputVal}/>
             <br/><br/>
             <div> Added Value is {isNaN(addedValue) ? 0 : (addedValue)} </div>
             <div> subtracted Value is {isNaN(subtractedValue) ? 0 : (subtractedValue)} </div>
          </div>
          {/*<Props value={this.state}/>*/}
          </React.Fragment>
       );
    }
 }
 
 class Props extends Component {
  constructor(props) {
     super(props);
     this.firstInputVal = this.firstInputVal.bind(this);
     this.SecondnputVal = this.SecondnputVal.bind(this);
  }
  firstInputVal(e){
    this.setState({firstInputVal : e.target.value})
  }
  SecondnputVal(e){
    this.setState({SecondnputVal : e.target.value})
  }
  render() {
    console.log(this.props.value)
    let addedValue = parseInt(this.props.value.firstInputVal) + parseInt(this.props.value.SecondnputVal);
      let subtractedValue = parseInt(this.props.value.firstInputVal) - parseInt(this.props.value.SecondnputVal);
     return (
        <div>
           <div> Added Value is {isNaN(addedValue) ? 0 : addedValue} </div>
           <div> subtracted Value is {isNaN(subtractedValue) ? 0 : subtractedValue} </div>
        </div>
     );
  }
}
export default Example;