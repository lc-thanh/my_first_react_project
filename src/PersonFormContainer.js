import React, {useEffect, useState} from "react";
import './PersonFormContainer.css';
import PersonFormPresentational from "./PersonFormPresentational";
import PersonForm from "./PersonForm";

function PersonFormContainer() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(null);
    const [address, setAddress] = useState("");
    const [personData, setPersonData] = useState([]);

    useEffect(() => {

    }, [personData]);

    const changeFirstNameHandler = ({target}) => {
        setFirstName(target.value);
    };

    const changeLastNameHandler = ({target}) => {
        setLastName(target.value);
    };
    const changeAgeHandler = ({target}) => {
        setAge(target.value);
    };

    const changeAddressHandler = ({target}) => {
        setAddress(target.value);
    };

    const clickAddHandler = () => {
        setPersonData((prev) => ([
            ...prev,
            {
                dataFirstName: firstName,
                dataLastName: lastName,
                dataAge: age,
                dataAddress: address
            }])
        )
    };


    return (
        <div className="personFormContainer">
            <PersonForm onChangeFirstName={changeFirstNameHandler} onChangeLastName={changeLastNameHandler}
                        onChangeAge={changeAgeHandler} onChangeAddress={changeAddressHandler}
                        onClickAdd={clickAddHandler}/>
            <PersonFormPresentational data={personData}/>
        </div>
    );
}

export default PersonFormContainer;