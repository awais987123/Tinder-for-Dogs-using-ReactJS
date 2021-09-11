import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import db from './firebase.config';
import { collection, getDocs } from 'firebase/firestore/lite';


function TinderCards() {
    const [dogs ,setDogs]=useState([
        {
            name:"REX",
            url:"https://images.pexels.com/photos/374825/pexels-photo-374825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        },
        {
            name:"CUDY",
            url:"https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        },
        {
            name:"ALEX",
            url:"https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        },
        {
            name:"LEO",
            url:"https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

        },
        {
            name:"LUCKY",
            url:"https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            name:"FRENCH",
            url:"https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }
        
    ]);

    useEffect(()=>
 {

    /*db.collection('dogs').onSnapshot( snapshot =>(
        snapshot.docs.map(doc => doc.data())*/
    /* collection(db, 'dogs').getDocs().docs.map(doc => doc.data()); */

    } , []); 
    



    return (
        <div>
            <div className="TinderCards__cardContainer">
            {dogs.map(dogs=>(<TinderCard
            className="swipe"
            keys={dogs.name}
            preventSwipe={['up','down']}
            >
                <div 
                    style={
                        {
                            backgroundImage:`url(${dogs.url})`
                        }
                    }
                    className="card"
                    >
                    <h3>{dogs.name}</h3>
                </div>
            </TinderCard>
            )
            )
            }
        </div>
        </div>
    )
}

export default TinderCards;
