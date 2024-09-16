import React from 'react'

const Button = (props) => {
    const buttonname = [
        "AC",
        "%",
        "C",
        "/",
        "7",
        "8",
        "9",
        "*",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "00",
        "0",
        ".",
        "="

    ]
    const addbutton = (button)=>{
        console.log(button)
    }
  return (
    <div className='buttonname'>
      {buttonname.map((buttonname)=>{
        return <button onClick={()=>props.onclickbutton(buttonname)} className='btn'>{buttonname}</button>
      })}
    </div>
  )
}

export default Button
