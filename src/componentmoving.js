import React from 'react';
import ReactDOM from 'react-dom'
import {useTransition, animated,Transition,Spring} from 'react-spring/renderprops';




class  ComponentMoving extends React.PureComponent {
    render(){
    const items = ["item1","item2","item3"];
    return(<div>
    <Transition
        items={items}
        from={{ transform: 'translate3d(0,-40px,0)' }}
        enter={{ transform: 'translate3d(0,0px,0)' }}
        leave={{ transform: 'translate3d(0,-40px,0)' }}>
           
            
    {items => props => <animated.div style={props}>{items}</animated.div>
}
 
 </Transition>
      
      </div>)}
   

}
export default ComponentMoving;