import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

const Product = ({product}) => {
    return (
        <Card bg="light" className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </Link>

             <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>

            <Card.Text as='div'>
                <Rating value={product.rating} users={product.numReviews} 
                color={
                    product.rating>=4?
                    "green":
                    product.rating>=3?
                    "yellow":
                    "red"
                }/>
            </Card.Text>

            <Card.Text as='h4'>
            ₹{Math.floor(product.price*74.47)}
            </Card.Text>

        </Card>
    )
}

export default Product
