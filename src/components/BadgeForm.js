import React from 'react';


class BadgeForm extends React.Component {
    state = {
        powerFight: "/1300",
    };

    handleChange = e => {
        /* console.log({ 
            name: e.target.name,
            value: e.target.value }); */
        this.setState({
            [e.target.name]: e.target.value,
        });    
    }
    handleClick = e => {
        console.log('Button was click');
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submit');
        console.log(this.state);
    }

    render() {
        return(
            <div>
                <h1>New Anime</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.state.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.state.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Power Fight</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="powerFight"
                            value={this.state.powerFight}/>
                    </div>
                    <div className="form-group">
                        <label>Special Trait</label>
                        <input 
                            onChange={this.handleChange} 
                            className="form-control" 
                            type="text" 
                            name="specialTrait"
                            value={this.state.specialTrait}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;