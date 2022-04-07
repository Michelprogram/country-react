import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

import ICountry from '../Interfaces/CountryInterface';

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
                            <input type="radio" id={continent}
                                name="continentRadio"
                                checked={continent === selectedRadio}
                                onChange={(el) => setSelectedRadio(el.target.id)} />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))
                }
            </ul>
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>Refresh</button>
            )}
            <ul>
                {
                    data
                        .filter((country: ICountry) => country.continents[0].includes(selectedRadio))
                        .sort((a: ICountry, b: ICountry) => b.population - a.population)
                        .slice(0, rangeValue)
                        .map((element: ICountry, index: number) => {
                            return <Card key={index} country={element} />
                        })
                }
            </ul>
        </div>
    );
};

export default Countries;