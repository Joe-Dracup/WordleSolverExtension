import React, { FC } from 'react';
import Letter from './Letter';

interface RowProps{
    letters: string
}

const Row: FC<RowProps> = ({letters}) => {
    let lettersArray = letters.split('');

    return (
        <>
            {lettersArray.map((element) => {
                return <Letter letter={element} colour='green'></Letter>
            })}
        </>
    );
}

export default Row;