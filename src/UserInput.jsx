import React, { useEffect, useState } from "react";

function UserInput() {
  const [userIp, setUser] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, age, score };
    setUser([...userIp, newUser]);
    setAge(0);
    setName("");
    setScore(0);
  };
  
  return (
    <div>
      add your details
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          placeholder="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={age}
          placeholder="age"
          type="number"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          value={score}
          placeholder="score"
          type="number"
          onChange={(e) => setScore(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <div className="container">
        <table border="1px">
          <thead>
            <tr border="1px">
              <th>name</th>
              <th>age</th>
              <th>score</th>
            </tr>
          </thead>
          <tbody>
            {userIp.map((item) => (
              <>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.score}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserInput;
