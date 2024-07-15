import React, { Component } from "react";
import { RoomContext } from "../../Context/context";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    const context = this.context;
    // Ensure context is defined and loading property is accessible
    if (!context || context.loading === undefined) {
      return <Loading />;
    }

    const { loading, featuredRooms: rooms } = context;

    const roomComponents = rooms.map((room) => (
      <Room key={room.id} room={room} />
    ));

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : roomComponents}
        </div>
      </section>
    );
  }
}
