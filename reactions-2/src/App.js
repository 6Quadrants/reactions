import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
// import Counter from "./components/Counter";
import chimuff from "./chimuff.json";

const App = () => (
  <Wrapper>
    <Navbar></Navbar>
    {/* <Counter /> */}

    <Card
      image={chimuff[0].image}
    />
     <Card
      image={chimuff[1].image}
    />
    <Card
      image={chimuff[2].image}
    />
    <Card
    image={chimuff[3].image}
    />
    <Card 
      image={chimuff[4].image}
    />
    <Card
      image={chimuff[5].image}
    />
    <Card
      image={chimuff[6].image}
    />
    <Card
    image={chimuff[7].image}
   />
    <Card
    image={chimuff[8].image}
   />
  </Wrapper>
);

export default App;
