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

function useSearchBadges(badges){
  const [ query, setQuery ] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [ badges, query ]);

  return { query, setQuery, filteredBadges};
}

function BadgesList(props) {
    const badges = props.badges;
    const { query, setQuery, filteredBadges} = useSearchBadges(badges);

    if(filteredBadges.length === 0 ) {
      return(
        <div>
          <div className="form-group">
          <label>Filter badges</label>
          <input type="text" className="form-control" 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )    
    }
    return (
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter badges</label>
          <input type="text" className="form-control" 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge}/>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default BadgesList;