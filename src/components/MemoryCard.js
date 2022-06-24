import React, {useState} from 'react'

function MemoryCard({ memoryList, onDeleteMemory, onUpdateMemory }) {
  const {id, memory, user_id} = memoryList; 

  const [updatedMemory, setUpdatedMemory]= useState(""); 


  function handleDeleteClick() {
    fetch(`http://localhost:9292/memories/${id}`, {
      method: "DELETE",
    });

    onDeleteMemory(id);
  }

  function handleMemorySubmit(e) {
    e.preventDefault();
    e.target.reset(); 
    fetch(`http://localhost:9292/memories/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ memory: updatedMemory }),
    })
      .then((r) => r.json())
      .then((updatedMemory) => {
        onUpdateMemory(updatedMemory);
      });
  }
     

  return (
    <div className="memory-item">
      <label className='memories' key={memory.id} user_id={memory.user_id}>
        {memory}
      </label>
      <label className="memory-trash" onClick={handleDeleteClick}>
        🗑️
      </label>

      <form onSubmit={handleMemorySubmit}>
        <input
          type="text"
          placeholder="Scratch That..."
          // value={updatedMemory}
          onChange={(e) => setUpdatedMemory(e.target.value)}
        />
        <button type="submit">Update Memory</button>
      </form>

    </div>
  )
}


export default MemoryCard