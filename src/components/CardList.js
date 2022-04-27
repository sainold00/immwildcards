import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ cards }) => {
    return (
        <>
            {cards.map((card, key) => {
                return (
                    <Link className='card-list-item' key={key} to={`/student/${card.name}`}>
                        <h3>{card.name} - {card.title}</h3>
                    </Link>
                )
            })}
        </>

    )
};



export default CardList;