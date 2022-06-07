import React, { Component } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown,Segment } from "semantic-ui-react";

const kupon =[
    // {key:1, text : 'x20loe',value: 0.2},
    // {key:2, text : '10DrIj',value: 0.1},
    // {key:3, text : '33myzHa',value: 0.3}s
]
// const [sel,setSel] = useState()


class Drop extends Component{
    render(){
        return(  
    <Container>
    <Segment className="coupon">
        <Dropdown placeholder="Add Discount code(Optional)" fluid 
        options={kupon} />
    </Segment>
    </Container>
    )
}}


export default Drop;