import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import "./App.css";

const Main = (props) => {
    let history = useHistory();
    const my_lists = props.list;
    const [circle] = React.useState([0, 1, 2, 3, 4]);
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

    let [number, setNumber] = React.useState(0);


    const onDecrease = () => {
        if (number < -70) {
            setNumber(number = -35);
        } else {
            setNumber(number - 70);
        }
    }



    function posNum(number) {
        return number < 0 ? (0).toFixed(1) : (number / 7).toFixed(1);
    }

    return (
        <div>
            <h3>내 일주일은?</h3>
            {my_lists.map((list, index) => {
                const num = getRandom(0, 5);
                number += (num + 1);
                console.log(`${index} : ${num} : ${number}`);
                return (
                    <Lines>
                        <div key={index}>
                            {list}
                        </div>
                        <div>
                            {circle.map((e, i) => {

                                return <Circle style={{ backgroundColor: i <= num ? ("rgb(255, 235, 59)") : ("rgb(221, 221, 221)") }} />;
                            })}
                        </div>
                        <Arrow
                            onClick={() => {
                                history.push("/detail/" + index);
                            }}
                        />
                    </Lines>
                );
            })}
            <AverageReset>
                <p>평균 평점
                    {posNum(number)}</p>
                <ReBtnSty onClick={onDecrease}>
                    <Reset>Reset</Reset>
                </ReBtnSty>
            </AverageReset>
        </div>
    );
};


const Lines = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0px;
`;

const Circle = styled.div`
    margin: 5px;
    width: 30px;
    height: 30px;
    // background-color: #e0e0e0;
    border-radius: 30px;
    float: left;
`;

const Arrow = styled.div`   
    border-color: transparent purple;
    border-top-width: 1rem;
    border-top-style: solid;
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    border-left-width: 1.6rem;
    border-left-style: solid;   
`;

const AverageReset = styled.div`
    width: 8rem;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    color: blue;
    font-size: 25px;
`;

const ReBtnSty = styled.div`
    background-color: dodgerblue;
    border-radius: 6px;
`;

const Reset = styled.p`
    color: white;
    font-size: 18px;
`;

export default Main;