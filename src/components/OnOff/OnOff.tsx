import React, {useState} from 'react';


type PropsType = {
    value: boolean
    onClick: (value: boolean)=>void
}


const OnOff = (props: PropsType) => {


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.value ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.value ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red"

    }
    return (
        <div>
            <div style={onStyle} onClick={ ()=>{props.onClick(true)} }>On</div>
            <div style={offStyle} onClick={ ()=>{props.onClick(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;