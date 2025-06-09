import React , {useState} from 'react'

export default function About() {

    const[myStyle, setMyStyle]= useState( {
        color:"black",
        backgroundColor:"white",
    })

    const [btnStyle, setBtnStyle]= useState("Enable Dark Mode")
    
    const handleDarkMode=()=>{
        if(myStyle.color ==="black"){
            setMyStyle({
            color:"white",
            backgroundColor:"black",
        })
        setBtnStyle("Enable Light Mode")
        
        }
        else{
            setMyStyle({
            color:"black",
            backgroundColor:"white",
        })
        setBtnStyle("Enable Dark Mode")
        }
    }
   

  return (
    <>
    <div className="accordion" id="accordionExample" style={myStyle}>
        <h1>About TextUtils</h1>
        <div className="accordion-item" style={myStyle} >
            <h2 className="accordion-header " style={myStyle} >
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                What is TextUtils?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                 TextUtils is a simple utility tool to analyze and manipulate your text quickly and efficiently. You can perform operations such as converting text to uppercase or lowercase, removing extra spaces, counting words and characters, and more.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Why use TextUtils?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils helps you save time when working with text. Whether you’re preparing content for websites, writing emails, cleaning up formatted text, or analyzing content for SEO, TextUtils provides an easy way to perform common text transformations in one place.


            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Features of TextUtils
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Convert text to Uppercase and Lowercase, 

                Remove extra spaces from text,

                Count words and characters,

                Preview modified text in real-time,

                Light Mode, Dark Mode, and Blue Mode themes for comfortable usage.
            </div>
            </div>
        </div>

        
    </div>
    <div className="container my-2">
            <button onClick={handleDarkMode} classNameName='btn btn-primary '>{btnStyle}</button>
    </div>

    </>
  )
}
