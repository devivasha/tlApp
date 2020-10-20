import React from 'react';

const Checkbox =({id, isChecked, onChange, label })=> {
        return (
            <div>
                <input
                    style={{marginLeft:"15px"}}
                    type="checkbox"
                    id={id}
                    checked={isChecked}
                    onChange={() => onChange()}/>
                <label
                    aria-hidden="true"
                    htmlFor={id}/>
                <label htmlFor={id}>
                    {label}
                </label>
            </div>

        );
};
export default Checkbox;