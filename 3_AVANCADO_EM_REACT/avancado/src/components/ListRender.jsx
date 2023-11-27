import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Douglas", "Letycia", "Leia", "Brie"])
  return (
    <div>
      <ul>
        {list.map((item) => (
            <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListRender
