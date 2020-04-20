import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem row">
        <div className="col-2">
          <img
            className="BadgesListItem__avatar"
            src={this.props.badge.avatarUrl}
            alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          />
        </div>
        <div className="col-5">
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />{this.props.badge.powerFight} / 3000
          <br />
          {this.props.badge.specialTrait}
        </div>
        <div className="col-5">
          <strong>
            <p style={{paddingTop:"30px"}}>{this.props.badge.nameAnime}</p>
          </strong>
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if(this.props.badges.length === 0 ) {
      return(
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )    
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;