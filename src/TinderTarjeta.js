import React, { useState } from "react";
import "./TinderTarjeta.css"
import Tarjeta from './Tarjeta'
import TinderCard from "react-tinder-card"

function TinderTarjeta(){

    const [personas,setPersona]=useState([
        
    {
        name:"JH de la cruz bendiciones",
        url:"https://www.tiktok.com/api/img/?itemId=7025026615570730245&location=0&aid=1988"

    },
    
    {

        name:"sofia pelirroja papeleta",
        url:"https://www.tiktok.com/api/img/?itemId=7052834891955768581&location=0&aid=1988"


    },
    {
        name:"liendra orejon",
        url:"https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2020/06/02/5ed70e07d7794.r_1591153524487.0-406-1080-941.jpeg"
    },
    {
        name:"karol g llorando por Anuel",
        url:"https://i.ytimg.com/vi/6hoC5nsSbI4/maxresdefault.jpg"
    },
    {
        name:"Ryan castro wasa wasa",
        url:"https://l-hit.com/img_id/398226.jpg"
    },
    {
       name:"epa colombia estrato 1",
       url:"https://files.rcnradio.com/public/2018-09/epa_colombia_1_12_0.jpg?Mos0qeUUBBTLDEwI1Q6Kx1zm6wSbLbHN" 
    }


    
    ]);


    const swiped=(direction,nameToDelete)=>{
        console.log("removiendo: "+nameToDelete);
        //setLastDirection(direction) 
    };

    const outOfFrame=(name)=>{
        console.log(name+ "izquierdaso")
    }

    return(
        <div className="tinderCards">

            <div className="tinderCards__cardContainer">

            {personas.map((persona)=>(
               <TinderCard
               
               className="swipe"
               key={persona.name}
               preventSwipe={["up","down"]}
               onSwipe={(dir)=>swiped(dir,persona.name)}
               onCardLeftScreen={()=>outOfFrame(persona.name)}

               >

                <div style={{ backgroundImage:`url(${persona.url})` }} className="card">

                    <h3>{persona.name}</h3>

                </div>

               </TinderCard>
            ))}

            </div>
            
           

        </div>
    )
}


export default TinderTarjeta    