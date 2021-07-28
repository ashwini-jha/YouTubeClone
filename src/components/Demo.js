import React from 'react';
import ReactDom from 'react-dom';
import DemoChild from './DemoChild';


const Demo = () => {

   return(
       <div>
           <p>This Demo component</p>
           <DemoChild  text= "Value to demo child"/>
       </div>
   ); 
}

export default Demo;