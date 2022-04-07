import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState<number>(36)
    const [selectedRadio, setSelectedRadio] = useState<string>("")
    const radios: Array<string> = ["Africa", "America", "Asia", "Europe", "Oceania"]

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])

    return (
        <div className='countries'>
            <h1>Countries</h1>
            <ul className="radio-container">
                <input type="range" min="1" max={data.length}
                    defaultValue={rangeValue.toString()}
                    onChange={(e) => setRangeValue(parseInt(e.target.value))} />
                {
                    radios.map((continent) => (
                        <li>
                            <input type="radio" id={continent} name="continentRadio"
                                onChange={(el) => setSelectedRadio(el.target.id)} />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))
                }
            </ul>
            <ul>
                {
                    data
                        .filter((country: any) => country.continents[0].includes(selectedRadio))
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