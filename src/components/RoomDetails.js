import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class RoomDetails extends Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.scrollRef = React.createRef();
    this.inputRef = React.createRef();

    this.state = {
      room: {},
      slug: this.props.match.params.slug,
      loading: false,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.getRoom();

    this.setState({
      loading: false,
    });
    this.inputRef.current.click();
  }

  // get specific room
  getRoom = async () => {
    let response = await fetch("/data.json");
    let result = await response.json();

    // console.log(result)
    const room = result.items.find(
      (item) => item.fields.slug === this.state.slug
    );
    //   console.log(room)
    this.setState({
      room,
    });

    // console.log(room);
    return room;
  };

  // function referencef
  scrollToTop = () => {
    // console.log(this.scrollRef.current);
    this.scrollRef.current.scrollIntoView({
      behavior: "smooth",
      top: true,
    });
  };

  render() {
    //   console.log(this.props);
    const { room, loading } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    if (!room) {
      return (
        <div>
          <h3>Room not found.</h3>
          <Link to="/accomodation">Go to all rooms</Link>
        </div>
      );
    }

    const id = room && room.sys && room.sys.id;
    // console.log(id)
    const images =
      room &&
      room.fields &&
      room.fields.images &&
      room.fields.images.map((image) => image.fields.file.url);
    const roomInfo = { ...room.fields, id };
    // console.log(roomInfo);
    // const {description, price, name, extras, size, type,capacity} = this.room
    // console.log(images)

    return (
      <div className="section-wrapper">
        <div ref={this.scrollRef}></div>
        <input
          type="text"
          placeholder="search rooms"
          ref={this.inputRef}
          onClick={() => {
            console.log("clicked");
          }}
        />
        {/* single rooom details */}
        <div className="room-details">
          <div className="images-wrapper">
            <div className="imgContainer">
              <img src={images && images[0]} alt="details" />
              <div className="btnImg">
                <button className="btn">
                  <Link to="/">Back to Rooms</Link>
                </button>
              </div>
            </div>
            <div className="images">
              <div>
                <img src={images && images[1]} alt="one" />
              </div>
              <div>
                <img src={images && images[2]} alt="two" />
              </div>
              <div>
                <img src={images && images[3]} alt="three" />
              </div>
            </div>
          </div>
          <div className="roomHeader">
            <h1>{roomInfo && roomInfo.name}</h1>
          </div>
          <div className="room-info">
            <div>
              <h3>Description </h3>
              <div className="details">
                <div>
                  <h4>Size:</h4>
                  <p className="size">{roomInfo && roomInfo.size}</p>
                </div>

                <div>
                  <h4>Price:</h4>
                  <p className="price">{roomInfo && roomInfo.price} </p>
                </div>

                <div>
                  <h4>Capacity:</h4>
                  <p className="capacity">{roomInfo && roomInfo.capacity} </p>
                </div>
              </div>

              <p className="description">{roomInfo && roomInfo.description}</p>
            </div>

            <div>
              <h3>Extras </h3>
              <div className="extras">
                <ul>
                  {roomInfo.extras &&
                    roomInfo.extras.map((items) => {
                      //  console.log(items)
                      return (
                        <div>
                          <li>{items}</li>
                        </div>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="btn-up">
          <button onClick={this.scrollToTop}>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(RoomDetails);
