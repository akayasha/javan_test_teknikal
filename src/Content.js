import React,{useState} from "react";
import { Button, Container,Divider,Grid,GridColumn,Header,Icon,Image,Input,Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import 'semantic-ui-css/semantic.min.css';
import './content.css'
import Drop from "./Drop";

function Content(props){
    const [remove1, setRemove1] = useState(false);
    const toggleClass1 = () => {
        setRemove1(!remove1)
    }
    const [remove2,setRemove2] = useState(false);
    const toggleClass2 = () =>{
        setRemove2(!remove2)
    }
   
    return( 
        <div>
            <Segment size='massive' centered padded textAlign='center'>
                <Header as='h2'>Shopping Cart</Header>
            </Segment>
            <Grid className="main"  stackable >
            <Grid.Row >
            <Grid.Column computer={9} >
            <Segment className='content'  >
                <Header as='h2' className="header">Cart ( {props.items} items) </Header>
                <div className={remove1 ? 'remove' : null}>
                <Grid stackable >
                <Grid.Row columns={3}  >
                    <Grid.Column computer={4}>
                        <Image  className='gambar' src ='https://id.360buyimg.com/Indonesia/s880x0_/amZzL3Q2MS83NC8yMjQ2OTI0MzQzLzI3MzMxMS83Njk1YzFjZC81Zjk5ODg2ZE41MjhhZjU3OA.jpg.dpg.webp' />
                    </Grid.Column>
                    <Grid.Column computer={6}>
                        <Header as='h3'>Blue Denim Shirt</Header>
                        <span className="desc">
                        <p>SHIRT </p><p>|</p>
                        <p> BLUE</p>
                        </span>
                        <p>Color : Blue</p>
                        <p>Size : M</p>
                        <Button onClick={() => {toggleClass1();props.price0();props.subValue()}} icon labelPosition="left" size="mini" >
                        <Icon name="trash alternate" />
                        REMOVE ITEM
                        </Button>
                        <Button  onClick={props.wishlist} icon labelPosition="left" size="mini">
                        <Icon name="like" />
                         MOVE TO WISHLIST
                        </Button>
                    </Grid.Column>
                    
                    <Grid.Column only="computer" computer={6} className="note" stackable>
                        <Button  onClick={props.subBarang1} basic size='mini' icon='minus' />
                        <Input className="inputValue"  size='mini ' value ={props.barang1} />
                        <Button onClick={props.addBarang1} basic icon='plus' size="mini" />
                        <p>(Note, 1 Pieces)</p>
                        <p className="price">${props.price1}</p>
                    </Grid.Column> <hr/>
                  
                    <Grid.Column only="mobile tablet"  className="noteres" stackable>
                        <Button  onClick={props.subBarang1} basic size='mini' icon='minus' />
                        <Input className="inputValue"  size='mini ' value ={props.barang1} />
                        <Button onClick={props.addBarang1} basic icon='plus' size="mini" />
                        <p>(Note, 1 Pieces)</p>
                        <p className="priceres">${props.price1}</p>
                    </Grid.Column> <hr/>
                </Grid.Row>
                </Grid>
                <Divider></Divider>
                </div>
               <div className={remove2 ? 'remove' : null}>
                <Grid columns='equal' stackable>
                <Grid.Row columns={3}>
                    <Grid.Column width={4}>
                        <Image  className='gambar' src ='https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/9/20/2f3bbdf0-db25-440b-90e2-39729e89968b.jpg' />
                    </Grid.Column>
                    <Grid.Column computer={6} tablet={2}>
                        <Header as='h3'>RED HOODIE</Header>
                        <span className="desc">
                        <p>HOODIE </p><p>|</p>
                        <p> RED</p>
                        </span>
                        <p>Color : Red</p>
                        <p>Size : M</p>                 
                        <Button onClick={() => {toggleClass2();props.price02();props.subValue()}} icon labelPosition="left" size="mini" >
                        <Icon name="trash alternate" />
                        REMOVE ITEM
                        </Button>
                        <Button onClick={props.wishlist} icon labelPosition="left" size="mini">
                        <Icon name="like" />
                         MOVE TO WISHLIST
                        </Button>
                    </Grid.Column>
                    <Grid.Column only='computer' computer={6} className="note">
                        <Button onClick={props.subBarang2} basic size='mini' icon='minus' />
                        <Input className="inputValue"  size='mini' value={props.barang2} />
                        <Button onClick={props.addBarang2} basic icon='plus' size="mini" />
                        <p className="price">${props.price2}</p>
                    </Grid.Column> <hr/>
                    <Grid.Column only="mobile tablet"  className="noteres" stackable>
                        <Button  onClick={props.subBarang2} basic size='mini' icon='minus' />
                        <Input className="inputValue"  size='mini ' value ={props.barang2} />
                        <Button onClick={props.addBarang2} basic icon='plus' size="mini" />
                        <p className="priceres">${props.price2}</p>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                </div>  
            </Segment>
                 
            </Grid.Column> 
            <Grid.Column only="computer mobile" padded computer={4} stackable>
            <Segment className="sider">
                <Header as='h4' >The total amount of</Header>   
                <Grid>
                    <Grid.Row>
                    <GridColumn className="amount" width={12}> <p>Temporary Amount</p> </GridColumn>
                    <GridColumn className="amount"> <p>${props.amount}</p> </GridColumn>
                    </Grid.Row>
                    <Grid.Row>
                    <GridColumn className="amount" width={12}> <p>Shopping</p> </GridColumn>
                    <GridColumn className="amount"> <p>Free</p> </GridColumn>
                    </Grid.Row>
                    <Divider></Divider>
                    <Grid.Row>
                    <GridColumn className="amount" width={12}><Header as ='h5'>The total amount <br/>(Including VAT)</Header> </GridColumn>
                    <GridColumn className="sum" > <p>${props.total}</p> </GridColumn>
                    </Grid.Row>
                    <Container className="tombolCheck" >
                    <Grid.Row columns={4}>
                        <Button onClick={props.checkout} fluid color="blue" >Go to Checkout</Button>
                    </Grid.Row>
                    </Container>
                </Grid>
            </Segment>
                <Grid.Column>
                     <Drop />
                </Grid.Column>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column only="tablet" tablet={4} >
                <Segment className="sider">
                <Header as='h4' >The total amount of</Header>   
                <Grid>
                    <Grid.Row>
                    <GridColumn className="amount" width={12}> <p>Temporary Amount</p> </GridColumn>
                    <GridColumn className="amount"> <p>${props.amount}</p> </GridColumn>
                    </Grid.Row>
                    <Grid.Row>
                    <GridColumn className="amount" width={12}> <p>Shopping</p> </GridColumn>
                    <GridColumn className="amount"> <p>Free</p> </GridColumn>
                    </Grid.Row>
                    <Divider></Divider>
                    <Grid.Row>
                    <GridColumn className="amount" width={12}><Header as ='h5'>The total amount <br/>(Including VAT)</Header> </GridColumn>
                    <GridColumn className="sum" > <p>${props.total}</p> </GridColumn>
                    </Grid.Row>
                    <Container className="tombolCheck" >
                    <Grid.Row columns={4}>
                        <Button onClick={props.checkout} fluid color="blue" >Go to Checkout</Button>
                    </Grid.Row>
                    </Container>
                </Grid>
            </Segment>
                </Grid.Column>    
            </Grid.Row>           
           </Grid>
        </div>
        
    )
}


function mapStatetoProps(state){
    console.log('mapStatetoProps' , state);
    return{
        value : state.value,
        price1 : state.price1,
        price2 : state.price2,
        items : state.items,
        barang1 : state.barang1,
        barang2 : state.barang2,
        amount : ((state.price1*state.barang1) +(state.price2*state.barang2)).toFixed(2),
        total :  ((state.price1*state.barang1) +(state.price2*state.barang2)).toFixed(2), 
        show : state.show,
        hidden : state.hidden
    }
}

function mapDispatchtoProps(dispatch){
    return{
        addBarang1 : () =>{
            console.log('tambah barang 1');
            const action = {type :'addBarang1'}
            dispatch(action)
        },
        subBarang1 : () =>{
            console.log('kurangi barang 1');
            const action ={type : 'subBarang1'}
            dispatch(action)
        },
        addBarang2 : () => {
            console.log('tambah barang 2');
            const action = {type : 'addBarang2'}
            dispatch(action)
        },
        subBarang2 : () =>{
            console.log('kurangi barang 2');
            const action = {type : 'subBarang2'}
            dispatch(action)
        },
        checkout :() =>{
            alert('Menunggu Pembayaran')
        },
        price0: () =>{
            console.log('Remove Item');
            const action = {type : 'price0'}
            dispatch(action)
        },
        price02: () => {
            console.log('Remove Item');
            const action = {type : 'price02'}
            dispatch(action)
        },
        subValue: () => {
            console.log('Sub Value');
            const action = {type : 'subValue'}
            dispatch(action)
        },
        wishlist : () => {
            alert('Berhasil DI tambahkan ke wishlist')
        }
       
        
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Content) ;