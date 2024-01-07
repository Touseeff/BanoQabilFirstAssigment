import './App.css';
import React from "react";
import { Fragment } from "react";
import Navbar from './components/Navbar';
import Carousel from './components/Crousel';
import Card from './components/Cards';
import Footer from './components/Footer';
function App() {
  const cardsData = [
    {
        title: "Card 1",
        description: "This is the description for Card 1.",
        imageUrl: "https://placekitten.com/300/200"
    },
    {
        title: "Card 2",
        description: "This is the description for Card 2.",
        imageUrl: "https://placekitten.com/301/200"
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
      imageUrl: "https://placekitten.com/301/200"
  },
  {
    title: "Card 2",
    description: "This is the description for Card 2.",
    imageUrl: "https://placekitten.com/301/200"
},

    // Add more card data as needed
];
  // const isGreen = false;
  // const age = 20;
  return (
    <Fragment>
       <div>
            <Navbar />
        </div>
        <div>
            <Carousel />
            {/* Other components/content of your app */}
        </div>
     

        <div className="app-container">
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                />
            ))}
        </div>
        <div>
            {/* Other components/content of your app */}
        </div>
        
        <div className="app-container">
            {cardsData.map((card, index) => (
                <Card
                key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    />
            ))}
        </div>
                    <div>
                        {/* Other components/content of your app */}
                        <Footer />
                    </div>
      <div className="App">
        {/* <Button /> */}
        <ul>
        </ul>
        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    </Fragment>
  
  );
}
export default App;
