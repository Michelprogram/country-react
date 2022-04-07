import React from 'react';
import ICountry from '../Interfaces/CountryInterface';

const Card = (props: { country: ICountry }) => {

    const country: ICountry = props.country

    return (
        <li className="card">
            <img src={country.flags.svg}
                alt="" />
            <div className="infos">
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                <p>Pop. {country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;