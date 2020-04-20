import React from 'react';
import './styles/Badges.css';
import animeLogo from '../images/logo__page.png'
import BadgesList from '../components/BadgesList.js';
import PageLoading from '../components/PageLoading.js';
import PageError from '../components/PageError.js';
import api from '../api.js';


class Badges extends React.Component {
    
    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render(){
        if (this.state.loading === true) {
            return <PageLoading />;
        } 
        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges__conf-logo img__logo" src={animeLogo} alt="anime logo"/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <a href="/badges/new" className="btn btn-primary"> New Badge</a>
                    </div>
                    <div className="Badges__list">
                        <div className="badges__container">
                            <BadgesList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;