import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Registry() {

    const [registryData, setRegistyData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if (error) return;

        const tempData = [...registryData];
        tempData.push(textInput)
        setRegistyData(tempData)
        setTextInput("")

    }

    useEffect(() => {
        if (textInput.length > 10) setError(true)
        else setError(false)
    }, [textInput])


    const removeItem = (index) => {
        if (error) return;

        let newData = [...registryData]
        newData.splice(index, 1)
        setRegistyData(newData)
    }

    const editItem = (index) => {
        if (error) return;

        let newData = [...registryData]
        newData[index] = textInput
        setRegistyData(newData)
    }


    return (
        <div className="registry">
            <h1>Registry</h1>
            <Link to="/">Click here to go to home</Link>
            <form onSubmit={addItem}>
                <input type="text" placeholder="Enter to do action plans" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                {(textInput.length >= 3) ? <input type="submit" value="Submit" /> : null}
            </form>
            {error ? <span style={{ color: "red" }} >Error Occurred!</span> : null}
            <ul>
                {
                    registryData.map((item, index) => {
                        return (
                            <li key={index}>{item}
                                <div className="buttons">
                                    <button onClick={() => removeItem(index)}>Remove</button>
                                    &nbsp;
                                    <button onClick={() => editItem(index)} >Update</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Registry;