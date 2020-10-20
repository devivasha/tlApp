import React, {Component} from 'react';
import PeopleList from './PeopleList';
import SearchBar from './SearchBar';
import axios from "axios";
import Checkbox from './Checkbox'
import PropTypes from "prop-types";

class App extends Component {
   state = {
       peoples:[],
       term:'',
       isChecked:'',
       isChecked2:'',
    };
    componentDidMount() {
        this.fetchUsers()
    }
    async fetchUsers () {
        const response = await axios.get('https://venbest-test.herokuapp.com/', {});
        console.log(response);
        this.setState({
            peoples: response.data,
        })
    };
    onTermSubmit = (term) => {
            this.setState({
                term: term,
            })
    };

    handleCheckboxClick = (term) => {
        if(this.state.isChecked === '') {this.setState({ isChecked: term })}
        else {this.setState({ isChecked:'' })}
    };
    handleCheckboxClick2 = (term) => {
        if(this.state.isChecked2 === '') {this.setState({ isChecked2: term })}
        else {this.setState({ isChecked2:'' })}
    };

    render() {
        return (
            <div className="ui container">
                <div style={{border:'1px dashed black', width:'23%', paddingLeft:"5px", margin:"15px 0"}}>
                    <h4 style={{margin: "10px 39%"}} >Фильтры</h4>
                    <SearchBar stylep={"38px"} label="Имя" onTermSubmit={this.onTermSubmit} />
                    <SearchBar stylep={"5px"} label="Фамилия" onTermSubmit={this.onTermSubmit} />
                    <SearchBar stylep={"10px"} label="Возраст" onTermSubmit={this.onTermSubmit} />
                    <div style={{display:"flex", flexDirection:"row"}}>Пол (*) :
                        <Checkbox
                            id="checkbox1"
                            label={
                                <span> M </span>
                            }
                            isChecked={this.state.isChecked}
                            onChange={() => this.handleCheckboxClick('m')}/>
                        <Checkbox
                            id="checkbox2"
                            label={
                                <span> Ж </span>
                            }
                            isChecked={this.state.isChecked2}
                            onChange={() => this.handleCheckboxClick2("f")}/>
                    </div>
                </div>
                <PeopleList  peoples={this.state.peoples}
                             term={this.state.term}
                             isChecked={this.state.isChecked}
                             isChecked2={this.state.isChecked2}/>
            </div>)
    }
}
export default App;

App.propTypes = {
    peoples: PropTypes.array,
    term: PropTypes.string,
    isChecked: PropTypes.string,
    isChecked2: PropTypes.string,
};