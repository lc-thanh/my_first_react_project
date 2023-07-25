import React from "react";
import './PersonFormPresentational.css'

function PersonFormPresentational(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((person) =>
                        <tr>
                            <td>{person.dataFirstName}</td>
                            <td>{person.dataLastName}</td>
                            <td>{person.dataAge}</td>
                            <td>{person.dataAddress}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default PersonFormPresentational;