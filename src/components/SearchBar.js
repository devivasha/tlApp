import React, {Component} from 'react';
import PropTypes from "prop-types";

class SearchBar extends Component {
    state = {
        term:'',
    };
    onInputSearch = event =>{
        this.setState({term: event.target.value})
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label htmlFor="">{this.props.label}</label>
                    <input style={{width:"150px", height:"20px" , marginLeft:`${this.props.stylep}`, marginBottom:'5px'}}
                        value={this.state.term}
                        onChange={this.onInputSearch}
                    />
                </form>
            </div>
        );
    }

}
export default SearchBar;


SearchBar.propTypes = {
    term: PropTypes.string,
};