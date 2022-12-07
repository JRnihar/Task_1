import React, { useEffect, useState } from 'react';

const ShowRow = ({ data, setTotalPrice, setTotalQuantity, removedata, }) => {
    const [subTotal, setSubTotal] = useState(0)
    const [quantity, setQauntity] = useState(0)


    //User will enter [QUANTITY] field and [Subtotal] value will be automatically calculated as [Unit Price] x [Quantity]
    const handlSubTotal = (e) => {
        const value = e.target.value;
        setSubTotal(value * data.UnitPrice)
        setQauntity(value)
    }


    //And a "TOTAL" line will be created at the end of the table. That will show TOTAL BILL and Quantity of Product.
    useEffect(() => {
        setTotalQuantity((i) => i + Number(quantity))
        setTotalPrice((i) => i + Number(subTotal))
    }, [quantity])


    return (
        <tr>
            <td><input class="form-control" type="text" value={data.Description} /></td>
            <td><input class="form-control" type="text" value={data.UnitPrice} /></td>
            <td ><input class="form-control" placeholder='Enter Quantity' type="number" onChange={handlSubTotal} /></td>
            <td><input class="form-control" type="text" value={subTotal} /></td>
            <td><button className='btn btn-danger' onClick={() => removedata(data)}>X</button></td>
        </tr>
    );
};

export default ShowRow;