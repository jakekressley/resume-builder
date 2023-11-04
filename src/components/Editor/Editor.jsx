import React from 'react'
import './Editor.css'

function Example () {
    return (
        <div className="example-section">
            <button className="clear-button">Clear Resume</button>
            <button>Load Example</button>
        </div>
    );
}

function Personal() {
    return (
        <div className="personal-section">
            <h2>Personal Details</h2>
            <form className="personal-form">
                <div className="form-combo">
                    <label htmlFor="">Full Name</label>
                    <input></input>
                </div>
                <div className="form-combo">
                    <label htmlFor="">Email</label>
                    <input></input>
                </div>
                <div className="form-combo">
                    <label htmlFor="">Phone Number</label>
                    <input></input>
                </div>
                <div className="form-combo">
                    <label htmlFor="">Address</label>
                    <input></input>
                </div>
            </form>
        </div>
    );
}

export default function Editor() {
  return (
    <div>
      <Example/>
      <Personal/>
    </div>
  )
}
