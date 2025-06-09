import React ,{useState} from 'react'

export default function TextBox(props) {
    const handleUpClick=()=>{
        //let newText= text.toUpperCase();
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleLowClick=()=>{
       //let newText = text.toLowerCase();
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success")
    }

    const handleClearText=()=>{
        //let newtext=('');
        setText('');
        props.showAlert("Text cleared", "success")
    }

    
    const handleBoldText=()=>{
        setIsBold(!isBold);
        props.showAlert("Converted to Bold", "success")
    }

    const handleItalicText=()=>{
        setisItalic(!isItalic);
        props.showAlert("Converted to Italic", "success")
    }

     const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const[text, setText]=useState("");
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setisItalic]= useState(false);
  return (
    <>
        <div className='container' style={{color: props.mode === 'blue' ? 'black': props.mode === 'light'? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="form-floating">
                <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                placeholder="Leave a comment here"
                id="myBox"
            
                style={{ height: '200px', fontWeight: isBold ? 'bold' : 'normal' , fontStyle: isItalic ? 'italic' : 'normal', backgroundColor: props.mode==='blue'?'white':props.mode=== 'light' ? 'white' : 'grey'}}
                ></textarea>
                <label htmlFor="floatingTextarea"></label>
            </div>
            <button disabled={text.length===0} className='btn btn-primary m-3 'onClick={handleUpClick} >Convert to UpperCase</button>
            <button disabled={text.length===0} className='btn btn-primary m-3'onClick={handleLowClick} >Convert to LowerCase</button>
            <button disabled={text.length===0} className='btn btn-primary m-3' onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} className='btn btn-primary m-3' onClick={handleBoldText}>Convert text to Bold</button>
            <button disabled={text.length===0} className='btn btn-primary m-3' onClick={handleItalicText}>Convert text to Italic</button>
        </div>

        <div className="container my-2" style={{color:props.mode === 'blue' ? 'black' : props.mode === 'light'? 'black' : 'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter(word=> word.length!==0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter(word=>word.length!==0).length} Minutes to Read</p>
            
        </div>
    </>
  )
}

