import React, { Component } from 'react';
import { connect } from 'react-redux';

class Concerts extends Component {
  render(){
    if(this.props.concerts.length === 0){
      var components = <li className='no-items'>No concerts in your area today! Please check your zipcode or check back later.</li>
    } else {
      components = this.props.concerts.map((concert, index) => {
        return (
          <div key={index} className="col-md-12 concert">
            <h3>{concert.ticket_url ? <a href={concert.ticket_url} target="_blank">{concert.artist}</a> : concert.artist}</h3>
            <li>Location: {concert.venue_name}</li>
            <li>{concert.venue_address}, {concert.venue_city}</li><br />
            <li><u>Start Time:</u> {concert.start_time}</li>
          </div>
        )
    })}

    return(
      <div className="container main components">
        <div className="row">
          {components}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    concerts: state.concertsReducer.concerts
  }
}

export default connect(mapStateToProps)(Concerts);
