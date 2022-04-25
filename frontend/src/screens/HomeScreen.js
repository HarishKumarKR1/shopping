import React, {useEffect} from 'react'
import Product from "../components/Product.js"
import {Row, Col} from "react-bootstrap"
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions.js'
import Message from '../components/message'
import Loader from '../components/loader'


const HomeScreen = () => {
    const dispatch=useDispatch()

    const productList= useSelector(state=>state.productList)
    const { loading, error, products}=productList

    useEffect(()=>{
        dispatch(listProducts)
    },[dispatch])

    return (
        <>
        {error?<Message variant='danger'>{error}</Message>:loading? <Loader/>:(
            <Row>
                {products.map((product)=>(
                    <Col key={product._id} sm={8} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>)
        }
        </>
    )
}

export default HomeScreen

