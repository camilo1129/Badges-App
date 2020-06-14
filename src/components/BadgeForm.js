import React from 'react';


class BadgeForm extends React.Component {

    handleClick = e => {
        console.log('Button was click');
    }
    /* handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submit');
        console.log(this.state);
    } */

    render() {
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName"
                            value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Power Fight</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="powerFight"
                            value={this.props.formValues.powerFight}/>
                    </div>
                    <div className="form-group">
                        <label>Special Trait</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="specialTrait"
                            value={this.props.formValues.specialTrait}/>
                    </div>
                    <div className="form-group">
                        <label>Name Anime</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="nameAnime"
                            value={this.props.formValues.nameAnime}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                    {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
                </form>
            </div>
        )
    }
}

export default BadgeForm;