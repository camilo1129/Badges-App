import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/logo__page.png';
import Navbar from '../components/Navbar.js';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js'

class BadgeNew extends React.Component {
    state = { form: {
        firstName: '',
        lastName: '',
        powerFight: '',
        specialTrait: '',
        nameAnime: '',
    } };

    handleChange = e => {
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;
        this.setState({
           form: nextForm,
        });
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid img__anime" src={header} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                powerFight={this.state.form.powerFight}
                                specialTrait={this.state.form.specialTrait}
                                nameAnime={this.state.form.nameAnime}
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;