import React  from 'react';
import PeopleItem from './PeopleItem';

const PeopleList = ({peoples, termName, termLastName, termAge, isCheckedM, isCheckedF})=> {
    const renderedList = peoples.filter(people=> {
        return (people.name.toLowerCase().indexOf(termName.toLowerCase())!== -1) &&
               (people.lastname.toLowerCase().indexOf(termLastName.toLowerCase())!== -1) &&
               (people.age.toString().indexOf(termAge) !== -1) &&
               (people.sex.indexOf(isCheckedM) !==-1 && people.sex.indexOf(isCheckedF) !==-1)}).map((person)=>{
        return <PeopleItem  key = {person.lastname} person={person}/>;
    });
    return (
        <div>{renderedList}</div>
    );
};
export default PeopleList;