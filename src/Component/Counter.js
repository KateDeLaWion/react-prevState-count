

// First Scenario below

// import React, { Component } from 'react'

// export default class Counter extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }
    

//     increment() {

//         this.setState(
            
//             {
//                 count: this.state.count + 1
//             },
//             () => {
//                 console.log('Callback value', this.state.count)
//             }
//         )

//         console.log(this.state.count)

//     }


//     render() {
//         return (
//             <div>
//                 <div>Count - {this.state.count}</div>
//                 <button onClick={()=> this.increment()}>Increment</button>
//             </div>
//         )
//     }


// }









// Second Scenario below
// import React, { Component } from 'react'

// export default class Counter extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }
    

//     increment() {

//             //  setState can have 1 or 2 parameters
//         this.setState(
            
//             {
//                 count: this.state.count + 1
//             },
//             () => {
//                 console.log('Callback value', this.state.count)
//             }
//         )

//         console.log(this.state.count)

//     }


//     incrementFive(){
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//     }
    
//     render() {
//         return (
//             <div>
//                 <div>Count - {this.state.count}</div>
//                 <button onClick={()=> this.incrementFive()}>Increment</button>
//             </div>
//         )
//     }


// }









// Third Scenario below
import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    

    increment() {
        this.setState(
             //  setState can have 1 or 2 parameters
            //  count will not be updated until every step of count is carried out
            prevState =>(
            {count: prevState.count+1}
            ),
            () => {
                console.log('Callback value', this.state.count)
            }
        )

        console.log(this.state.count)
    }


    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }


}












// Fourth Scenario below
// import React, { Component } from 'react'

// export default class Counter extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count: 0
//         }
//     }
    

//     increment() {

//             //  setState can have 1 or 2 parameters
//         this.setState(

//             // prevState can also have 1 or 2 parameters in case 
//             // second parameter is needed if props is affecting state
//             // but props is only hypothetical in this example
//             (prevState, props) => (
//             {count: prevState.count + props.addValue}
//             ),
//             () => {
//                 console.log('Callback value', this.state.count)
//             }
//             )

//         console.log(this.state.count)

//     }


//     incrementFive(){
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//         this.increment()
//     }
    
//     render() {
//         return (
//             <div>
//                 <div>Count - {this.state.count}</div>
//                 <button onClick={()=> this.incrementFive()}>Increment</button>
//             </div>
//         )
//     }


// }








