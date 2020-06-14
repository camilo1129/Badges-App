import React from 'react';
import './styles/BadgeEdit.css';
import header from '../images/logo__page.png';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import PageLoading from '../components/PageLoading.js';
import api from '../api.js';

class BadgeEdit extends React.Component {
    state = { 
        loading: true,
        error: null,    
        form: {
            firstName: '',
            lastName: '',
            powerFight: '',
            specialTrait: '',
            nameAnime: '',
        } 
    };

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try{
            const data = await api.badges.read( this.props.match.params.badgeId )
            this.setState({ loading: false, form: data });
        } catch(error) {    
            this.setState({ loading: false, error: error });
        }
    }

    handleChange = e => {
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;
        this.setState({
           form: nextForm,
        });
    };

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null})
        try {
           await api.badges.update(this.props.match.params.badgeId ,this.state.form)
           this.setState({ loading: false }) 
           this.props.history.push('/badges');
        } catch(error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading){
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="img-fluid img__anime" src={header} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'SECOND_NAME'}
                                powerFight={this.state.form.powerFight || 'POWER_FIGHT'}
                                specialTrait={this.state.form.specialTrait || 'SPECIAL_TRAIT'}
                                nameAnime={this.state.form.nameAnime || 'NAME_ANIME'}
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f822e84?d=identicon" />
                        </div>
                        <div className="col-6">
                            <h1>Edit Anime</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error} 
                                />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;