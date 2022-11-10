import React from "react";


    import {useState} from "react";
// import { postSighting } from "./SightingService";

const RSVP = () => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        // postSighting(formData).then((data)=>{
        //     addSighting(data);
        // })
    }

    return (
        <form onSubmit={onSubmit} id="rsvp-form" >
            <h2>RSVP</h2>
            <div className="formWrap">
                <label htmlFor="Name">Name:</label>
                <input onChange={onChange} type="text" id="name"  />
            </div>
            <div className="formWrap">
                <label htmlFor="party">Number in Party:</label>
                <input onChange={onChange} type="text" id="location"  />
            </div>
            <div className="formWrap">
                <label htmlFor="meal-choice">Meal Choice:</label>
                <input onChange={onChange} type="text" id="meal-choice"  />
            </div>
            <div className="formWrap">
                <label htmlFor="dietary-requirements">Any Dietery Requirements?:</label>
                <input onChange={onChange} type="text" id="dietary-requirements"  />
            </div>
            <div className="formWrap">
                <label htmlFor="drink">Favourite Drink:</label>
                <input onChange={onChange} type="text" id="drink"  />
            </div>
            <div className="formWrap">
                <label htmlFor="song">Favourite Song:</label>
                <input onChange={onChange} type="text" id="song"  />
            </div>

            <input type="submit" value="Submit" id="submit"/>
	    </form>

    );
}

export default RSVP;
