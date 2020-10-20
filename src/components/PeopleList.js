import React  from 'react';
import PeopleItem from './PeopleItem';

const PeopleList = ({peoples, term, isChecked, isChecked2})=> {
    const renderedList = peoples.filter(people=> {
        console.log(people.age.toString().indexOf(term !== -1));
        return (people.name.toLowerCase().indexOf(term.toLowerCase())!== -1
               || people.lastname.toLowerCase().indexOf(term.toLowerCase())!== -1
                ) &&
               (people.sex.indexOf(isChecked) !==-1 && people.sex.indexOf(isChecked2) !==-1)}).map((person)=>{
        return <PeopleItem  key = {person.lastname} person={person}/>;
    });
    return (
        <div>{renderedList}</div>
    );
};
export default PeopleList;