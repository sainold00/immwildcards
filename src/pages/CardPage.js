import React from "react";
import cardcontent from './card-content'
import { useParams } from "react-router";

export const CardPage = () => {
    const { name } = useParams();
    const card = cardcontent.find(card =>card.name === name);
    if(!card) {
        return <h1>This person does not exist</h1>
    }
    return (
        <>
            <h1>{card.name}</h1>
            <h2>{card.title}</h2>
            {card.content.map((paragraph, key)=>{
                return <p key={key}>{paragraph}</p>
            })}
            
        </>
    )
}

export default CardPage