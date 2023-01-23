import React, { useState } from "react";
import { IState as IStateProps } from "../App";

interface IProps {
    people: IStateProps["people"]
    setPeople: React.Dispatch<React.SetStateAction<IStateProps["people"]>>
}

const AddToList = (props: IProps) => {
    const [input, setInput] = useState({
        name: "",
        url: "",
        age: "",
        note: ""
    });

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void =>  {
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        });
    }

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.url) {
            return;
        }

        props.setPeople([
            ...props.people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ]);
    }

    return (
        <>
           <div className="AddToList">
             <input type="text" placeholder="Name" className="AddToList-input" value={input.name} onChange={handleChange} name="name"/>
             <input type="text" placeholder="Age" className="AddToList-input" value={input.age} onChange={handleChange} name="age"/>
             <input type="text" placeholder="Image URL" className="AddToList-input" value={input.url} onChange={handleChange} name="url"/>
             <textarea placeholder="Notes" className="AddToList-input" value={input.note} onChange={handleChange} name="note"/>
             <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
           </div>
         </>
       );
     
}

export default AddToList;
