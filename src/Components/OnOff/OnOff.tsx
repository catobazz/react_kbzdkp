import React from 'react';

type PropsType = {
    on: boolean
    setOn: (set: boolean)=>void
}

const OnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "30px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "30px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.on  ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        display: "inline-block",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.on  ? "green" : "red"
    }

    return (
        <div>
            <div onClick={()=> {props.setOn(true)}} style={onStyle}>On</div>
            <div onClick={()=> {props.setOn(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;