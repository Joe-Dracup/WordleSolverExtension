import { FC } from "react";

interface LetterProps{
    letter: string
    colour: string
}

const Letter: FC<LetterProps> = ({letter, colour}) =>  {
    return (
        <>
            <a className={colour}>{letter}</a>
        </>
    );
}

export default Letter;