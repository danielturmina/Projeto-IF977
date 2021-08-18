import React from "react";
import './style.css';
import { FaStar } from "react-icons/fa";


const colors = {
    orange: "#FFBASA",
    grey: "#a9a9a9"
}

function UsersComments(){

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    return (
        <div style={styles.container}>
            <h2>Comentários dos Usuários</h2>
            <div style={styles.stars}>
                {stars.map((_, index)=>{
                    return(
                        <FaStar 
                            key={index}
                            size={24}
                            style={{
                                marginRight:10,
                                cursor: "pointer"
                            }}
                            color={(hoverValue || currentValue)> index ? colors.orange: colors.grey}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })}
            </div>
            <textarea
                placeholder="Qual o seu feedback sobre o produto?"
                style={styles.textarea}
            />
            <button style={styles.button}>Enviar</button>
            
            
        </div>
    )
}

const styles = {
    container:{
        display: "flex",
        flexDirection:"column",
        alignItems: "center"
    },
    textarea:{
        border:"1px solid #a9a9a9",
        borderRadius: 5,
        width: "100%",
        margin: "20px 0",
        minHeight: "300px",
        padding: 10
    }
}


export default UsersComments;