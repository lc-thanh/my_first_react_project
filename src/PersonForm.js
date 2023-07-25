import React from "react";
import './PersonForm.css';

function PersonForm(props) {
    return (
        <div>
            <label>First Name</label>
            <input onChange={props.onChangeFirstName} />

            <label>Last Name</label>
            <input onChange={props.onChangeLastName} />

            <label>Age</label>
            <input onChange={props.onChangeAge} />

            <label>Address</label>
            <input onChange={props.onChangeAddress} />

            <button onClick={props.onClickAdd}>
                Add
            </button>
        </div>
    );
}

export default PersonForm;