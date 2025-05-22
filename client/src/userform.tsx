import {useState} from 'react'; 
import * as React from 'react'; 
import * as ReactDOM from 'react-dom/client';
import './userform.css';

const UserForm: React.FC = () => {

    const [name, setName] = useState(""); 
    const [message, setMessage ] = useState(""); 
    const [phonenumber, setNumber] = useState(""); 
    const [feedback, setFeedback] = useState(""); 
    const [category, setCategory] = useState("Love"); 
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        console.log("User Info:", name, message , phonenumber, category); 
        setName(""); 
        setMessage(""); 
        setNumber(""); 
        setCategory(""); 
        setFeedback("Message Sent!"); 
    }; 
    return (
        <>
        <form className="form-box" onSubmit={handleSubmit}>

        <div className="form-row">
            <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-row">
            <label htmlFor="message">Message:</label>
                <input id="message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="form-row">
            <label htmlFor="phonenumber">Phone Number:</label>
                <input id="phoneNumber" type="text" value={phonenumber} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div className="form-row">
            <label htmlFor="phonenumber">Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Love">Love</option>
                <option value="Reminder">Reminder</option>
                <option value="Hunger">Hunger</option>
            </select>
        </div>
       
        <button type="submit">Send Message</button>
        </form>
        </>
    ); 
}; 

export default UserForm;

