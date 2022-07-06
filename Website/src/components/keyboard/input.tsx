import { FC } from "react";

interface inputProps{
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    handleSubmit: React.MouseEventHandler<HTMLButtonElement>
    text: string
}

const Input: FC<inputProps> = ({handleChange, handleSubmit, text}) => {
    
    return (
        <>
            <input
                type="text"
                id="input"
                onChange={handleChange}
                value={text}
            />

            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Input;