import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';


export interface IState{
  people: {
    name: string,
    url: string,
    age: number,
    note?: string // ? indicates optional
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1279732568_446225_qsh0ap.jpg",
      age: 36,
      note: "I hate french fries"
    }
  ]);
  
  return (
    <div className="App">
      <h1 className="text-3xl mt-10">Famous dudes</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
