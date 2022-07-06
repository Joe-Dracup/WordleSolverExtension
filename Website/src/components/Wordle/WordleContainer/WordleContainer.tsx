import { FC, useState } from "react";
import Input from "../../keyboard/input";
import Row from "../Row/Row";
import styles from "./WordleContainer.module.scss"

interface WordleContainerProps{

}

const WordleContainer: FC<WordleContainerProps> = () =>  {
    const [input, setInput] = useState('');
    const [words, setWords] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.value.length <= 5){
            setInput(event.target.value)
        }
        console.log(words);
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(input.replace(/\s/g, "").length == 5){
            if(words.indexOf(input) == -1){
                setWords(prevWords => [...prevWords, input])
                setInput('');
            }
        }
    }

    return(
        <>
            <div className={styles.wordleContainer}>
                {words.map((element) => {
                    return <Row letters={element}></Row>;
                })}
                
                <Input handleChange={handleChange} handleSubmit={handleSubmit} text={input}></Input>
            </div>
        </>
    );
}

export default WordleContainer;