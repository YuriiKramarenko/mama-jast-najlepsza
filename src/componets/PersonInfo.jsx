import { Tel } from "./Tel";

export const PersonInfo = (person) => (
  <>
  <h1>{person.name}</h1>
  <h2>tel: <Tel tel={person.tel}/></h2>
  <h3>city: {person.city}</h3>
  </>
)