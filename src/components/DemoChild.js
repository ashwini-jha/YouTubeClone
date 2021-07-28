import React from 'react';


class DemoChild extends React.Component{
 state = {text:"default"};
 updateInput = (e) =>{
     this.state = this.setState({text:e.target.value});
 };
render(){

    return(
        
           
           <form onSubmit = {this.submitForm}>
            <div>
                <input type="text" value = {this.state.text.toLocaleUpperCase()} onChange = {this.updateInput}/>
            </div>
           </form>
      
    );
}
}
export default DemoChild;