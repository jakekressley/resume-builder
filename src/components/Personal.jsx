import React from 'react'
import '../styles/Personal.css'
import InputGroup from './InputGroup';
import '@fortawesome/fontawesome-free/css/all.css';

function Example () {
    return (
        <div className="example-section">
            <button className="clear-button">
                {/* <i className="fa-solid fa-trash" style={{color: '#b91c1c'}}></i> */}
                Clear Resume
                </button>
            <button>Load Example</button>
        </div>
    );
}

export default function Personal({ onChange, name, email, phone, address }) {
    return (
        <div className="editor">
            <Example/>
            <div className="info-section">
                <h2>Personal Details</h2>
                <form className="personal-form">
                    <InputGroup
                        type="text"
                        id="name"
                        labelText="Full name"
                        placeholder="First and last name"
                        value={name}
                        onChange={onChange}
                        data-key="name"
                    />
                    <InputGroup
                        type="email"
                        id="email"
                        labelText="Email"
                        placeholder="Enter email"
                        value={email}
                        onChange={onChange}
                        data-key="email"
                        recommended
                    />
                    <InputGroup
                        type="tel"
                        id="phone-number"
                        labelText="Phone number"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={onChange}
                        data-key="phone"
                        recommended
                    />
                    <InputGroup
                        type="text"
                        id="address"
                        labelText="Address"
                        placeholder="City, Country"
                        value={address}
                        onChange={onChange}
                        data-key="address"
                        recommended
                    />
                </form>
            </div>
        </div>
    );
}
