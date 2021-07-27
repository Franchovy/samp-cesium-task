
import React from 'react';


class FormField extends React.Component {

    /**
     * @param {*} props 
     * input id for parent form
     * input label
     * hint text
     * errorCheck() -> errorText
     * @returns 
     */
    constructor(props) {
        super(props)

        this.state = {
            inputId: props.inputId,
            inputLabel: props.inputLabel,
            hintText: props.hintText,
            onChange: props.onChange,
            errorText: props.errorText
        }

        return <div>
        <input id={this.state.inputId} type="text" name={this.state.inputId} onChange={this.onChange}/>
        {this.state.cityError ? 
        <label>city error</label> :
        <div/>
        }
        {this.state.cityLoading ? 
        <label>loading icon</label> :
        <div/>
        }</div>
    }

    onChange (input) {
        // Check with function from state
        var result = this.state.onChange(input);

        console.log("On change:");
        console.log(result);

        if (result !== null) {
            // Display Error
            this.setState({errorText: "error"});
        } else {
            this.setState({errorText: null});
        }
    }
}


class CreateBillboardForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            formOpen: false,
            loading: false
        }
    }

    handleFormOpen = () => {
        this.setState({
            formOpen: true
        });
    }

    handleSubmit = () => {
        this.setState({loading: true});


    }


    handleCityNameChange = (input) => {
        return "error!";
    }

    handleBillboardNameChange = (input) => {
        return "error!";
    }

    render() {
        return <div className="form-Container">
            
        {
        
        <form className="form" onSubmit={this.handleSubmit}>
        
            <FormField inputId="city" inputLabel="City" hintText="Enter City Name..." onChange={this.handleCityNameChange}/>
            <FormField inputId="name" inputLabel="Billboard Name" hintText="Enter a unique name for your billboard..." onChange={this.handleBillboardNameChange}/>
        
        
        <button className="form-submitButton">Enter</button>
        </form>
        
    
    }    
        
    </div>
    }
}



export default CreateBillboardForm;