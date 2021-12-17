import React from 'react'

export default function Alert(props) {
    const captialalize= (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div class= {`alert alert-${props.alert.type}`} role="alert">
        <strong>{captialalize(props.alert.type)}</strong>: {props.alert.message}
        </div>
    )
}
