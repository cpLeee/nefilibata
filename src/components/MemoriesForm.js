import React, {useState, useEffect} from "react";

function MemoriesForm({onAddMemory, memoryId}) {

  // const initialMemoryData = {
	// 	name: "",
  //   user_id: ""
	// }
  const [memory, setMemory]= useState("")
  const [user, setUser]= useState("")
  // const handleChange= (event) => {
  //   const {id, value} = event.target; 
  //   setMemory({...memory, [id]: memoryId}); 
  // }; 
//GETS memory where user ID is 2 
useEffect(() => {
  fetch("http://localhost:9292/users")
      .then((resp) => resp.json())
      .then((myUser) => {
          setUser(myUser[0]);
      });
}, []);

console.log(user.id)

  function handleSubmit(event) {
    event.preventDefault(); 
    event.target.reset();
    fetch("http://localhost:9292/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ 
        memory: memory,
        user_id: user.id //this should be passed down from above 
      }
      ),
    })
    .then((resp) => resp.json())
    .then((newMemory) => onAddMemory(newMemory))
  }

  return (
    <div className="new-memory-form">
      <h2 className="memoriespage-title">Collecting Moments, Not Things</h2>
      <hr></hr>
      <form className="memoriespage-form" onSubmit={handleSubmit}>
        <input
          className="memoriespage-input"
          type="text"
          name="memory"
          placeholder="Moments I'd like to remember..."
          onChange=
          {(event) => setMemory(event.target.value)}
        />
        <br></br>

        <button className="memoriespage-button"
          type="submit">Into My Memory Bank</button>
      </form>
    </div>
  );
}

export default MemoriesForm;
