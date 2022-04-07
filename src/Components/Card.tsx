import React from 'react';

const Card = (props: any) => {

    const country = props.country

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