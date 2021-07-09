import React, { Component } from "react";
// import Room from "./Room";
import RoomList from "./RoomList";

class Accomodation extends Component {
  constructor() {
    super();
    this.state = {
      rooms: [],
      // room: 0,
    };
  }
  // fetch data from json file
  getData = async () => {
    try {
      const results = await fetch("data.json");
      const response = await results.json();

      const info = response.items;
      // console.log(info);

      const rooms = await this.filterRooms(info);
      // const room = this.getRoom(rooms);

      this.setState({
        rooms: rooms,
        // room: room,
      });

      return info;
    } catch (error) {
      // console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  filterRooms = async (data) => {
    // console.log(data);
    const roomItems = await data.map((item) => {
      // console.log(item);
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);
      const room = { ...item.fields, images, id };
      return room;
    });
    // console.log(roomItems);
    return roomItems;
  };

  getRoom = (slug) => {
    let tempRoom = [...this.state.rooms];
    const findRoom = tempRoom.find((room) => room.slug === slug);

    let roomDetail = this.handleClick(findRoom);
    // console.log(roomDetail);

    return roomDetail;
  };


  render() {
    const { rooms } = this.state;
    // console.log(rooms);
    return (
      <div className="section-wrapper">
        <div className="accomodation">
          {/* <div className="info-wrapper">
            {rooms && rooms.map((room) => <Room room={room} />)}
          </div> */}

          {/* <Room rooms = {this.state.rooms} />*/}
          {/* <Room rooms={rooms}/> */}

          <RoomList rooms = {rooms} key={rooms.id}/>
        </div>
      </div>
    );
  }
}

export default Accomodation;
