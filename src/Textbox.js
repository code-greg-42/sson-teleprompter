import {useState} from "react";

export default function Textbox() {
    const [text, setText] = useState("");
    const [fileName, setFileName] = useState("");

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

    return (<>
    <div id="file-upload">
        <button id="choose-file" onClick={() => document.querySelector("#handle-files").click()}>Choose File</button>
        <input type="file" className="hidden" id="handle-files" onChange={handleFileChange} /><button id="clear-btn" onClick={handleClearClick}>Clear</button>
        <p id="name-display">{fileName}</p>
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