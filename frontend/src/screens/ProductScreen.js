import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link ,useParams} from 'react-router-dom'
import Loader from '../components/loader'
import Message from '../components/message'
import { useNavigate } from 'react-router'
import {Row, Col, Image, Card,ListGroup,Button, ListGroupItem, Form} from 'react-bootstrap'
import Rating from "../components/Rating"
import { listProductDetails } from '../actions/productActions'


const ProductScreen = (props) => {
    const [quantity, setQuantity]= useState(1)
    const {id}=useParams(); 
    const history=useNavigate()
    const dispatch=useDispatch()

    const productDetails= useSelector(state=>state.productDetails)
    const { loading, error, product}=productDetails

    useEffect(()=>{
        dispatch(listProductDetails(id)) 


    },[dispatch, id])

    const addToCartHandler=()=>{
        history(`/cart/${id}?quantity=${quantity}`)
    }

    return(
        <>
        {error?<Message variant='danger'>{error}</Message>:loading? <Loader/>:
        (<>
            <Link className='btn btn-light my-3' to="/">Home</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} users={product.numReviews} 
                            color={
                            product.rating>=4?
                            "green":
                            product.rating>=3?
                            "yellow":
                            "red"}/>
                        </ListGroupItem>
                        <ListGroupItem>
                            Price:₹{product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Details:{product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                    <strong>₹{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Availability:</Col>
                                    <Col>
                                    <strong>{product.countInStock>0?"In Stock":"Out of Stock"}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            {
                                product.countInStock > 0 && 
                                (
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Quantity</Col>
                                            <Col>
                                                <Form.Control as='select' value={quantity} onChange={(e)=>
                                                setQuantity(e.target.value)}>
                                                    { [...Array(product.countInStock).keys()].map((item)=>(
                                                        <option key={item+1} value={item+1}>
                                                            {item+1}
                                                        </option>
                                                    ))}

                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                )
                            }
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        <Button 
                                        onClick={addToCartHandler}
                                        className="btn-block" 
                                        type='button' 
                                        disabled={product.countInStock===0}
                                        >
                                        Add to Cart
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>)
        
        
        }
        </>
    )
}

export default ProductScreen
