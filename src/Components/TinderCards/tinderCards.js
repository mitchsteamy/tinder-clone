import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import database from "../../firebase/firebase";

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsub = database
            .collection("people")
            .onSnapshot((snapshot) => (
                setPeople(snapshot.docs.map(doc => doc.data()))
            ));

        return () => {
            //This is a cleanup function. It unsuscribes from a listener when it is done listening
            unsub();
        }
    }, [])

    return (
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                >
                    <div
                        style={{ backgroundImage: `url(${person.imageUrl})` }}
                        className="card"
                    >
                        <h2 className="name">{person.name}</h2>
                    </div>
                </TinderCard>
            ))}
        </div>

    );

}


export default TinderCards;