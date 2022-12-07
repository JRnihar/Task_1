import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ProductCard = ({ item, handleId }) => {
    return (
            <div className="col-md-4 d-flex flex-column align-items-center justify-content-center h-100">
                <Card className='pt-2 pb-2 border-bottom-0  border-5 border border-dark  border-start-0 me-3  d-flex flex-column align-items-center justify-content-center shadow-lg  mt-5' style={{ width: '20rem', background: '#4d4d4f', borderRadius: "20px" }}>
                <Card.Body>
                    <Card.Title className='text-white'>{item.Description}</Card.Title>
                    <Button onClick={() => handleId(item)} variant="primary">Order</Button>
                </Card.Body>
                </Card>
            </div>    
    );
};
export default ProductCard;