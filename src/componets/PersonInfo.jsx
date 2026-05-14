import { useState } from "react";
import { Tel } from "./Tel";

export const PersonInfo = (person) => {
let stateArray = useState(false);
let isExpanded = stateArray[0];
let setIsExpanded = stateArray[1];

const buttonEl = ( 
<button 
onClick={() => {
 setIsExpanded(!isExpanded);
}}
>
  {isExpanded ? "Schowaj" : "Pokaż"}
  </button>
);
// document.querySelector("button").addEventListener("click", () => {
//  isExpanded = true;
// });

return (
    <>
  <h1>{person.name}</h1>
  {buttonEl}
{isExpanded && (
<>
  <h2>tel: <Tel tel={person.tel}/></h2>

  {person.city && <h3>city: {person.city}</h3>}
  </>
  )}
  <hr />
  </>
);
};