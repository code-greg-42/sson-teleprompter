import {useState, useEffect} from "react";

export default function Textbox() {
    const [text, setText] = useState("");
    const [fileName, setFileName] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("blue");
    const [fontColor, setFontColor] = useState("azure");

    useEffect(() => {
        document.querySelector("#textbox").style.backgroundColor = backgroundColor;
        document.querySelector("#textbox").style.color = fontColor;
    })

    function handleFileChange(e) {
        if (e.target.files[0]) {
        const file = e.target.files[0];
        console.log(file);
        setFileName(file.name);
        const reader = new FileReader();
        reader.onload = function(e) {
            console.log(e.target.result);
            setText(e.target.result);
        }
        reader.readAsText(file);
        }
    }

    function handleClearClick() {
        if (text || fileName) {
            setText("");
            setFileName("");
            document.querySelector("#handle-files").value = null;
        }
    }

    function handleBackgroundColorSelect(e) {
        setBackgroundColor(e.target.value);
    }

    function handleFontColorSelect(e) {
        setFontColor(e.target.value);
    }

    return (<>
    <div id="file-upload">
        <button id="choose-file" onClick={() => document.querySelector("#handle-files").click()}>Choose File</button>
        <input type="file" className="hidden" id="handle-files" onChange={handleFileChange} /><button id="clear-btn" onClick={handleClearClick}>Clear</button>
        <p id="name-display">{fileName}</p>
        <div id="color-select">
        <input type="color" id="background-select" onChange={handleBackgroundColorSelect} />
        <label htmlFor="background-select" className="color-label">Background Selector</label>
        <input type="color" id="font-color-select" onChange={handleFontColorSelect} />
        <label htmlFor="font-color-select" className="color-label">Font Color Selector</label>
        </div>
    </div>
    <div id="textbox">
    <h1 id="header">Teleprompter: {fileName}</h1>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p id="begin-text">---- begin next line ----</p>
    <p id="textbox-text">{text}</p>
    </div>
    </>)
}