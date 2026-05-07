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
];


const PersonInfoElements = people.map((person) => (
  <PersonInfo name={person.name} tel={person.tel} city={person.city}/>
))

function App() {


  return (
    <>
  <h1>Lista kontaktów</h1>
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
