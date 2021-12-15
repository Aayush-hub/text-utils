import React , {useState} from 'react'

export default function Textforms() {
    
    const [btnDark, setbtnDark] = useState("Enable Dark Mode")
    const [textstyle, settextstyle] = useState({
       
        maxWidth:"530px",
    })
    const [letstyle, setletStyle] = useState({
        color:"black",
        backgroundColor: "white",
        maxWidth:"1540px",
        height:"92.5vh",
        margin:"0px",
        paddingLeft:"50px"
    })
    const darkMode= ()=>{
        if(letstyle.color === "black"){
            setletStyle({
                color:"white",
                backgroundColor: "black",
                maxWidth:"1540px",
                height:"92.5vh",
                margin:"0px",
                paddingLeft:"50px"
        })
            settextstyle({
                maxWidth:"530px"
            }
                
            )
        setbtnDark("Enable Light Mode")
        }
        else{
            setletStyle({
                color:"black",
                backgroundColor: "white",
                maxWidth:"1540px",
                height:"92.5vh",
                margin: "0px",
                paddingLeft:"50px"
        })
            setbtnDark("Enable Dark Mode")

        }
    }
    function convertUp(){
        let txt = text.toUpperCase()
        setText(txt)

    }
    function convertDown(){
        let txt = text.toLowerCase()
        setText(txt)

    }
    function setvalue(event){
        setText(event.target.value)
    }
    const[text,setText] = useState("Enter your text here")
    // const[mode,setdarkMode] = useState("color:white;backgroundColor:black")
    return (
        <div className='container' style={letstyle}>
        <div className="mb-3">
        <h2 className="py-4">Welcome to TextUtils</h2>
        <div style={textstyle}><textarea className="form-control" value={text} onChange={setvalue} id="exampleFormControlTextarea1" rows="6"></textarea></div>
        
        </div>
        <h7>Total no. of characters: {text.replace(/\s/g, "").length} , Total no. of words: {text.split(" ").length}</h7><br />
        <button class="btn btn-primary my-3 " onClick={convertUp}>Convert to UpperCase</button>
        <button class="btn btn-secondary my-3 ms-3" onClick={convertDown}>Convert to LowerCase</button>
        <button class="btn btn-dark my-3 ms-3" onClick={darkMode}>{btnDark}</button>
        
        </div>
        
    )
}
