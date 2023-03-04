import React, { useState } from 'react';


export default function TextForm(props) {

    const [text, setText] = useState('');
    const [sentenceCount, setSentenceCount] = useState(0);

    const handleupcase = () => {
        let upText = text.toUpperCase()
        setText(upText)
    }

    const handlelocase = () => {
        let upText = text.toLowerCase()
        setText(upText)
    }

    const handleclear = () => {
        setText("")
    }

    const handleonchage = (event) => {
        // console.log('on change')
        setText(event.target.value)
    }
    
    // const countsentences=()=>{
    //     const sentences = text.split(/[.?!]+/);
    //     const count = sentences.filter(sentence => sentence.trim() !== '').length;
    //     setSentenceCount(count);

    
    return (
        <>
            <div className={`textform-container text-${props.formColor}`}>
                <h3 className='textform-h3'>{props.heading} </h3>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.areaColor} text-${props.formColor}`} onChange={handleonchage} placeholder='Enter the text here' value={text} id="texthere" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleupcase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handlelocase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>
                {/* <div>
                <button className="btn btn-primary mx-2" onClick={countsentences}>Sentence Count</button>
                <p>Number of senteces: {setSentenceCount}</p>
                </div> */}
            
            <h2 className='text1 my-3' ><u>Your text has:</u> </h2>
            {/* split(" ")gives no of words and text.length gives no of characters */}
            <p className='parastext1'> {text.split(" ").length} <b>number of words,</b> {text.length} number of characters</p>
            <p className='parastext2'> You will take this much of time to read these words:<b> {.008 * text.split(" ").length} </b></p>
            <h2 className='text2 my-3'><u>Preview of above text is:</u></h2>
            {text}
            </div>
        </>
        
    )
}

/* </>and {text.split(".").length} <b>no of senteces */