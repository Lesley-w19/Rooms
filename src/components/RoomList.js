import React from "react";
import Room from "./Room";
// import {Link} from 'react-router-dom';

function RoomList({ rooms }) {
  // console.log(rooms);


 
  return (
    
    <div className="roomlist">
      <h2 className="heading">Accomodation</h2>

    
          <div className="info-wrapper">
               {rooms &&
          rooms.map((item) => {
            // console.log(item);
            return (
              <div className="info-wrapper">
                <Room room={item} key={item.id} />
              </div>
            );
          })}
          </div>
       
     
    </div>
  );
}
export default RoomList;


