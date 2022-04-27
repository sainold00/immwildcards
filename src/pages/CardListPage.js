import React from "react";
import CardList from "../components/CardList";
import cardcontent from './card-content'

export const CardListPage = () => {
    return (
        <>
            <h1>Students</h1>
            <CardList cards={cardcontent} />
            
        </>
    )
}

export default CardListPage