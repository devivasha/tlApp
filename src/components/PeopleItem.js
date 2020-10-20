import React from 'react';


const PeopleItem =({person})=>{
    return (
        <div style={{borderTop:'1px dashed black', borderBottom:'1px dashed black', width:"23%"}}>
            <div style={{paddingTop:"10px", paddingBottom:"10px"}}>
                <div><span>{person.name}</span> <span>{person.lastname}</span></div>
                <div>Возрас: {person.age}</div>
                <div>Пол: {person.sex}</div>
            </div>
        </div>
    );
};
export default PeopleItem;