import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ICountry } from "../Interfaces/CountryInterface";

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState<number>(36);
    const [selectedRadio, setSelectedRadio] = useState<string>("");
    const radio: Array<string> = [
        "Africa",
        "America",
        "Asia",
        "Europe",
        "Oceania",
    ];

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((result: any) => {
                setData(result);
            });
    }, []);

    return (
        <div className="countries">
            <h1>Countries</h1>
            <ul className="radio-container">
                <input
                    type="range"
                    min="1"
                    max={data.length}
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.valueAsNumber)}
                />
                {radio.map((continent) => (
                    <li>
                        <input
                            type="radio"
                            id={continent}
                            name="continentRadio"
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)}
                        />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            {selectedRadio && (
                <button onClick={() => setSelectedRadio("")}>
                    Annuler la recherche
                </button>
            )}
            <ul>
                {data
                    .filter((country: ICountry) =>
                        country.continents[0].includes(selectedRadio)
                    )
                    .sort((a: ICountry, b: ICountry) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country: ICountry, index: number) => (
                        <Card key={index} country={country} />
                    ))}
            </ul>
        </div>
    );
};

export default Countries;