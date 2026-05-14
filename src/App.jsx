import { useState } from "react";
import { Form } from "./componets/Form";
import { PersonInfo } from "./componets/PersonInfo"

const people = [
  {
  name: "Maks",
  tel: 235464578,
  city: "Gdańsk",
},

 {
  name: "Artem",
  tel: 65878963457,
  city: "Warszawa",
},

 {
  name: "Danil",
  tel: 983246598237,
  // city: "Poznań",
},
];


const PersonInfoElements = people.map((person) => (
  <PersonInfo name={person.name} tel={person.tel} city={person.city}/>
))

function App() {
const [isFormShown, setIsFormShown] = useState(false);
const handleShowFromClick = () => setIsFormShown(true);

const addPerson = (data) => {console.log(data);
};

  return (
    <>
  <h1>Lista kontaktów</h1>
  {isFormShown ? (
      <Form onAddPerson={addPerson}/>
  ) : (
<button onClick={handleShowFromClick}>Dodaj</button>
  )}
  
{PersonInfoElements}
  {/* <PersonInfo 
  name={person.name} 
  tel={person.tel} 
  city={person.city}/>

  <PersonInfo 
  name={newPerson.name} 
  tel={newPerson.tel} 
  city={newPerson.city}/> */}
  

    </>
  )
}

export default App
