import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, Form, Button, ListGroup, ListGroupItem, Card } from 'react-bootstrap'
import Message from '../components/message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useParams, useLocation } from 'react-router'

const CartScreen = () => {
    const {id}=useParams()
    const location=useLocation()
    const quantity = location.search? Number(location.search.split('=')[1]):1

    const dispatch=useDispatch()

    const removeFromCartHandler=(id)=>{
        dispatch(removeFromCart(id));
    }

    const checkoutHandler=()=>{
        console.log(cartItems);
    }

    const cart=useSelector(state=>state.cart)
    const {cartItems}=cart
    useEffect(()=>{
        if(id){
            dispatch(addToCart(id, quantity))
        }
    },[dispatch, id, quantity])

    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length===0? <Message> Your cart is empty 
                    <Link to='/'>Go Back</Link></Message>:(
                        <ListGroup variant='flush'>
                            {cartItems.map(item=>(
                                <ListGroupItem key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />

                                        </Col>
                                        <Col md={3}>
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>₹{item.price}</Col>
                                        <Col md={2}>
                                        <Form.Control as='select' value={item.quantity} onChange={(e)=>
                                                dispatch(addToCart(item.product,Number(e.target.value)))}>
                                                    { [...Array(item.countInStock).keys()].map((item)=>(
                                                        <option key={item+1} value={item+1}>
                                                            {item+1}
                                                        </option>
                                                    ))}

                                                </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button type='button' variant='light' onClick={()=>removeFromCartHandler(item.product)}><i className='fas fa-trash'></i>Remove</Button>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup>
                        <ListGroupItem>
                            <h2>Total({cartItems.reduce((acc,item)=> acc+item.quantity, 0)}) items</h2>
                            Rupees {cartItems.reduce((acc, cur)=>acc+cur.quantity*cur.price,0).toFixed(2)}
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button type="button" className="btn-block" disabled={cartItems.length===0} onClick={checkoutHandler}>Checkout</Button>
                        </ListGroupItem>
                    </ListGroup>
                    </Card>                                        
            </Col>

        </Row>
    )
}

export default CartScreen
