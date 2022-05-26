import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";

function App() {

  let now = new Date();
  console.log(now)
  const week = ["일", "월", "화", "수", "목", "금", "토", "일", "월", "화", "수", "목", "금"];

  const [list] = React.useState([`${week[now.getDay()]}`, `${week[(now).getDay() + 1]}`, `${week[(now).getDay() + 2]}`, `${week[(now).getDay() + 3]}`, `${week[(now).getDay() + 4]}`, `${week[(now).getDay() + 5]}`, `${week[(now).getDay() + 6]}`]);


  return (
    <div className="App">
      <Container>
        <Route 
          path="/"
          exact
          render={(props) => (
            <Main list={list}/>
          )}
        />

        <Route 
          path="/detail/:id"
          render={(props) => (
            <Detail list={list}/>
          )}
        />
      </Container>
    </div>
  );
}


const Container = styled.div`
max-width: 350px;
width: 80vw;
height: 90vh;
margin: 5vh auto;
padding: 5vh 0px;
border: 1px solid rgb(221, 221, 221);
box-sizing: border-box;
border-radius: 5px;
`;

export default App;