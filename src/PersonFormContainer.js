import React, {useEffect, useState} from "react";
import './PersonFormContainer.css';
import PersonFormPresentational from "./PersonFormPresentational";
import PersonForm from "./PersonForm";

function PersonFormContainer() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(null);
    const [address, setAddress] = useState("");
    const [buttonClickCount, setButtonClickCount] = useState(0);
    const [personData, setPersonData] = useState([]);

    useEffect(() => {
        setPersonData((prev) => ([
            ...prev,
            {
                dataFirstName: firstName,
                dataLastName: lastName,
                dataAge: age,
                dataAddress: address
            }])
        )
    }, [buttonClickCount]);

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
        setButtonClickCount((prevCount) => prevCount + 1)
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