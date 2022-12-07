import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './ProductCard';
import ShowData from './ShowData';

const Home = () => {
    const [product, setProduct] = useState([])
    const [total, setTotal] = useState([])

    //Fetch data from json
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    //Handle Single product
    const handleId = (e) => {
        const totalData = [
            ...total, e
        ]
        setTotal(totalData)
    }
    return (
        <div>
            <div className='row'>
                {
                    product.map(item => <ProductCard handleId={handleId} item={item} />)
                }
            </div>
            <ShowData setTotal={setTotal} total={total} />
        </div>
    );
};

export default Home;