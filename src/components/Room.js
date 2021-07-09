import React from 'react'
import {Link} from 'react-router-dom';

const Room = ({room}) =>{
    // console.log(room);
    // console.log(props);
    // const {room} = this.props;
  
//  const handleClick = (e)=>{
//      e.preventDefault();
//      console.log(e);
//     const  roomId = e.target.parentElement.parentElement;
//      console.log(roomId);

//      return roomId
//  }

   return(
    <div id="room">            
                    <div className="room-wrapper">
                    {/*single room  */}
                    <div className="room">
                          <h3 className="name"> {room.name} </h3>
                      <div className="img-container">
                        <img src={room.images[0]} alt="room" />
                        <div className="info">
                          <h4 className="price">{room.price}</h4>
                        </div>
                      </div>
        
                      <button className="btn" ><Link to={`/room/${room.slug}`} className="link">View Features</Link></button>
                    </div>
                  </div>
                
      
           
    </div>
   )
}
export default Room