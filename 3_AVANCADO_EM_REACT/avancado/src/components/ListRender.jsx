import { useState } from 'react'

const ListRender = () => {
  const [list] = useState(["Douglas", "Letycia", "Leia", "Brie"])
  const [users, setUsers] = useState([
    { id: 1, name: "Douglas", age: 32 },
    { id: 2, name: "Letycia", age: 25 },
    { id: 3, name: "Leia", age: 8 },
    { id: 4, name: "Brie", age: 2 },
  ]);

  const deleteRandom = () => {
    const randomN = Math.floor(Math.random() * 5)

    setUsers((prevUsers) => {
      return prevUsers.filter((users) => randomN !== users.id)
    })
    console.log(randomN);
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.name} - {users.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete aleatóriamente</button>
    </div>
  )
}

export default ListRender
