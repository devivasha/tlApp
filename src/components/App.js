import React, {Component} from 'react';
import PeopleList from './PeopleList';
import SearchBar from './SearchBar';
import axios from "axios";
import Checkbox from './Checkbox'
import PropTypes from "prop-types";

class App extends Component {
   state = {
       peoples:[],
       termName:'',
       termLastName:'',
       termAge:'',
       isCheckedM:'',
       isCheckedF:'',
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
    onTermSubmitName = (term) => {
            this.setState({
                termName: term,
            })
    };
    onTermSubmitLastName = (term) => {
        this.setState({
            termLastName: term,
        })
    };
    onTermSubmitAge =(term)=> {
        this.setState({
            termAge: term,
        })
    };
    handleCheckboxClickM = (term) => {
        if(this.state.isCheckedM === '') {this.setState({ isCheckedM: term })}
        else {this.setState({ isCheckedM:'' })}
    };
    handleCheckboxClickF = (term) => {
        if(this.state.isCheckedF === '') {this.setState({ isCheckedF: term })}
        else {this.setState({ isCheckedF:'' })}
    };

    render() {
        return (
            <div className="ui container">
                <div style={{border:'1px dashed black', width:'23%', paddingLeft:"5px", margin:"15px 0"}}>
                    <h4 style={{margin: "10px 39%"}} >Фильтры</h4>
                    <SearchBar stylep={"38px"}
                               label="Имя"
                               onTermSubmit={this.onTermSubmitName} />
                    <SearchBar stylep={"5px"}
                               label="Фамилия"
                               onTermSubmit={this.onTermSubmitLastName} />
                    <SearchBar stylep={"10px"}
                               label="Возраст"
                               onTermSubmit={this.onTermSubmitAge} />
                    <div style={{display:"flex", flexDirection:"row"}}>Пол (*) :
                        <Checkbox
                            id="checkbox1"
                            label={<span> M </span>}
                            isChecked={this.state.isCheckedM}
                            onChange={() => this.handleCheckboxClickM('m')}/>
                        <Checkbox
                            id="checkbox2"
                            label={<span> Ж </span>}
                            isChecked={this.state.isCheckedF}
                            onChange={() => this.handleCheckboxClickF("f")}/>
                    </div>
                </div>
                <PeopleList  peoples={this.state.peoples}
                             termName={this.state.termName}
                             termLastName = {this.state.termLastName}
                             termAge = {this.state.termAge}
                             isCheckedM={this.state.isCheckedM}
                             isCheckedF={this.state.isCheckedF}/>
            </div>)
    }
}
export default App;

App.propTypes = {
    peoples: PropTypes.array,
    termName: PropTypes.string,
    termLastName: PropTypes.string,
    termAge: PropTypes.string,
    isCheckedM: PropTypes.string,
    isCheckedF: PropTypes.string,
};