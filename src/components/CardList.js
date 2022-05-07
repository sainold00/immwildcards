import React from "react";
import { Link } from "react-router-dom";

const CardList = ({ cards }) => {
    return (
        <>
            {cards.map((card, key) => {
                return (
                    <Link className='card-list-item' key={key} to={`/student/${card.name}`}>
                        <img className='cardimg' src={card.src} />
                    </Link>
                )
            })}
        </>

    )
};



export default CardList;