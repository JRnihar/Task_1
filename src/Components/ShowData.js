import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import ShowRow from './ShowRow';

const ShowData = ({total, setTotal}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    //Remove Data
    const removedata = (data) => {
        const updateCard = total.filter(i => i._id !== data._id)
        setTotal(updateCard)
    }

    return (
        <div className='mt-5'>
            <Table striped bordered hover className='container'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        total.map(data => <ShowRow removedata={removedata} setTotalPrice={setTotalPrice} setTotalQuantity={setTotalQuantity} data={data} />)
                    }
                    <tr>
                        <td colSpan={2} ></td>
                        <td><h4>Quantity : {totalQuantity} </h4></td>
                        <td colSpan={2}><h4>Total : {totalPrice}  </h4></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ShowData;