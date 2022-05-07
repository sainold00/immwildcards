import React from "react";
import cardcontent from './card-content'
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export const CardPage = () => {
    const { name } = useParams();
    const card = cardcontent.find(card => card.name === name);
    if (!card) {
        return <h1>This person does not exist</h1>
    }
    return (
        <>
            <div className="cardIntro">
                <img className='cardImg' src={card.insrc} />
                <div className="cardContent">
                    <h1>{card.name}</h1>
                    <h2>{card.title}</h2>
                    {card.content.map((paragraph, key) => {
                        return <p key={key}>{paragraph}</p>
                    })}
                    <div className="profileLink">
                        <ul>
                            {card.linkedinLink !== 'tbd' && <li><a href={card.linkedinLink}>Linkedin</a></li>}
                            {card.portfolioLink !== 'tbd' && <li><a href={card.portfolioLink}>Portfolio</a></li>}
                            {card.resumeLink !== 'tbd' && <li><a href={card.resumeLink}>Resume</a></li>}
                            {card.socialLink !== 'tbd' && <li><a href={card.socialLink}>Social Media</a></li>}
                        </ul>
                    </div>
                    <br />
                    <br />
                    <Link to={`/students`}>
                        <a>Back</a>
                    </Link>
                </div>

            </div>

        </>
    )
}

export default CardPage