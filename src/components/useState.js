import React,{useState} from 'react'
import '../CSS/useState.css'

export default function TextExample(props) {
    let [count,setCount]= useState(0);
    const [text,setText]= useState('Gender');
    let [textarea,setTextarea]= useState("");

    
    function increment(){
        setCount(count+1);
    }
    function uppercase(){
      textarea=textarea.toUpperCase();
      setTextarea(textarea);
      props.showalert('success',"Converted to uppercase")
    }
    function lowercase(){
      textarea=textarea.toLowerCase();
      setTextarea(textarea);
      props.showalert('success',"Converted to lowercase")


    }
    function handelchange(e){
      setText(e.target.value)
    }
    function copytext(){
      var text= document.getElementById('textarea');
      text.select();
      navigator.clipboard.writeText(text.value);
      // window.getSelection().removeAllRanges();
      props.showalert('success',"Text Copied")

    }
    function wordcount(text){
    // var wcount=0;
    // let str="ali"
      // text=text.replace(/[ ]{2,}/gi,"");
      
      var word=text.split(" ").filter((element)=>{return element.length!=0}).length;
      var char= text.length;
      return String(word)+" words and " +String(char)+" characters" ;
    }

    
  return (
    <>
    <div className='container' >
        <p className={`text-${props.mode==='light'?'dark':'light'}`}>You clicked button for <b>{count}</b> times</p>
        <button className="btn btn-primary" value={count} onClick={increment}>Press me</button>
        <button className="btn btn-primary" onClick={()=>{setCount(0)}}>Reset</button>
    </div>

    <div className="container textfield" >
      <input type="text" value={text} onChange={handelchange}/>
      <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>I am a {text}</h3>
      <button className="btn btn-primary" onClick={()=>{setText('Gender')}}>Reset</button>

    </div>
    
    <div className="textfield commentbox" style={{width:"600px"}}>
      <h2>Comments</h2>
      <textarea cols="60" rows="10" id='textarea' value={textarea} onChange={(e)=>{setTextarea(e.target.value)}}>{textarea}</textarea><br />

      <button disabled={textarea.length===0} className="btn btn-primary" onClick={uppercase}>Upper Case</button>
      <button disabled={textarea.length===0} className="btn btn-primary" onClick={lowercase}>Lower Case</button>
      <button disabled={textarea.length===0} className="btn btn-primary" onClick={copytext}>Copy Text</button>
      {/* <button className="btn btn-primary" onClick={wordcount(textarea)}>Word Count</button> */}

    </div>
    <div className="container preview">
    <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Word count: {wordcount(textarea)}</h2>

      <h2 >Preview of Comment </h2>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{textarea}</p>
    </div>

    </>
  )
}
