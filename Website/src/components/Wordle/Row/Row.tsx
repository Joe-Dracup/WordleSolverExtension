import { FC } from 'react';
import Letter from '../Letter/Letter';
import styles from "./Row.module.scss"

interface RowProps{
    letters: string
}

const Row: FC<RowProps> = ({letters}) => {
    let lettersArray = letters.split('');
    if(lettersArray.length == 0){
        lettersArray = ['','','','',''];
    }

    return (
        <div className={styles.Row}>
            {lettersArray.map((element) => {
                return <Letter letter={element} colour='green'></Letter>
            })}
        </div>
    );
}

export default Row;