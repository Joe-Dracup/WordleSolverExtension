import { FC } from "react";
import { setSyntheticLeadingComments } from "typescript";
import styles from "./Letter.module.scss"

interface LetterProps{
    letter: string
    colour: string
}

const Letter: FC<LetterProps> = ({letter, colour}) =>  {
    return (
        <>
            <a className={`${styles.letter} ${styles.colour}`}>{letter}</a>
        </>
    );
}

export default Letter;