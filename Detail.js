import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import "./App.css";

const Detail = (props) => {
    const history = useHistory();
    const { id } = useParams();
    const [circle] = React.useState([0, 1, 2, 3, 4]);
    const [index, index_change] = React.useState();

    return (
        <div>
            <h3><TheDay>{props.list[id] + "요일"}</TheDay> 평점 남기기</h3>
            <div>
                {circle.map((e, i) => {
                    return <ReviewCircle
                        onClick={() => {
                            index_change(i)
                        }} style={{ backgroundColor: i <= index ? ("rgb(255, 235, 59)") : ("rgb(221, 221, 221)") }}
                    />
                })}
            </div>
            <ReviewBtn
                onClick={() => {
                    history.push("/");
                }}
            >
                평점 남기기
            </ReviewBtn>
        </div>
    );
};


const TheDay = styled.span`
    color: rgb(255, 255, 255);
    font-weight: 900;
    background: orange;
    padding: 0.2rem;
    border-radius: 5px;
`;

const ReviewCircle = styled.div`
    margin: 10px ;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: inline-block;
`;

const ReviewBtn = styled.button`
    width: 80%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: rgb(255, 255, 255);
`;

export default Detail;