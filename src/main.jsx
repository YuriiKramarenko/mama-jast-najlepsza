// import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./App"


// const element = React.createElement("a",
//   {href: "https://google.pl"},
//   "Google"
// );

// const elementInJSX = <a href='https://google.pl'>Google (JSX)</a>;

// console.log(element);

// const createDate = new Date();
// const hours = createDate.getHours();
// const minutes = createDate.getMinutes();

// const text = "rjyyj";

// function getElementById(){
//   return Math.round(Math.random() * 100);
// }

// const randomNumber = getElementById();

// const element = <div>{getElementById()}</div>;

// const person = {
//   name: "Maks",
//   tel: 235464578,
//   city: "Gdańsk",
// }

// const newPerson = {
//   name: "Artem",
//   tel: 65878963457,
//   city: "Warszawa",
// }

// // console.log(hours, minutes);
// // const telElement = <a href={person.tel}>{person.tel}</a>;





// const element = (
// <>
//   <h1>Lista kontaktów</h1>

//   <PersonInfo name={person.name} tel={person.tel} city={person.city}/>

//   <h2>{person.name}</h2>
//   <h3>tel: <Tel tel={person.tel}/></h3>
//   <h4>city: {person.city}</h4>
  
//   <h2>{newPerson.name}</h2>
//   <h3>tel: <Tel tel={newPerson.tel}/></h3>
//   <h4>city: {newPerson.city}</h4>
// </>
// );

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

