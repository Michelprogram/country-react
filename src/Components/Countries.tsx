import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState<number>(36)

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])

    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul className="radio-container">
                <input type="range" min="1" max={data.length} defaultValue={rangeValue.toString()}
                    onChange={(e) => setRangeValue(parseInt(e.target.value))} />
            </ul>
            <ul>
                {
                    data
                        .slice(0, rangeValue)
                        .map((element: Object, index: number) => {
                            return <Card key={index} country={element} />
                        })
                }
            </ul>
        </div>
    );
};

export default Countries;