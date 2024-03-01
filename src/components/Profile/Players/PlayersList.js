import React from 'react'
//import { Button,Card } from "react-bootstrap" ;
import Players from './Players';
const PlayersList = () =>
 {
    const PlayerList = [
        {
        name:"ronaldo",
        jerseyNumber:"10",
       nationality:"marroc",
        Team:"test",
        imgURL:"https://media.cnn.com/api/v1/images/stellar/prod/230621042149-01-cristiano-ronaldo-euro-200-apps-062023-restricted.jpg?c=16x9&q=h_833,w_1480,c_fill"
    },
    {
        name:"messi",
        jerseyNumber:"7",
        nationality:"russie",
        Team:"test",
        imgURL:"https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
    },
    {
        name:"naimar",
        jerseyNumber:"4",
        nationality:"tunisie",
        Team:"test",
        imgURL:"https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-09T030927Z_162449516_UP1EJ9908RPW8_RTRMADP_3_SOCCER-WORLDCUP-BRA-BOL-REPORT-1694250362.jpg?resize=770%2C513&quality=80"
    },
    {
        name:"mbappi",
        jerseyNumber:"9",
        nationality:"france",
        Team:"test",
         imgURL:"https://s.hs-data.com/bilder/spieler/gross/284095.jpg?fallback=png"
    },
    
 ];
 return ( 
    <div style={{
        display:"flex", flex:"wrap", justifyContent:"space-between"
    }}> 
     {PlayerList.map((player,index)=> {
        return <Players player={player}/>;
     }  )
     } 
    </div>
);
};

export default PlayersList;
