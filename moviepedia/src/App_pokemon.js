import { useReducer, useState } from 'react';
import mockItems from './pokemons.json';

function Pokemon({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id); //^2)props가 위로 다시 흐른다.
  return (
    <div>
      No.{item.id} {item.name}
      <br />
      타입 : {item.types.join(',')}
      <br />
      <button onClick={() => onDelete(item.id)}>삭제</button>
    </div>
  );
}
const reducer = (state, action) => {
  console.log(`reducer > state: ${state}, action: ${action}`);

  switch (action.type) {
    case 'name':
      return;
    case 'type':
      return;
    default:
      return;
  }
};
export default function App_pokemon() {
  const [items, setItems] = useState(mockItems);
  const [direction, setDirection] = useState(1);

  const [value, setValue] = useState(''); //name,type을 입력받을 value
  const [type, setType] = useState('name');
  const handleAscClick = () => setDirection(1);
  const handleDescClick = () => setDirection(-1);

  const sortedItems = items.sort((a, b) => (a.id - b.id) * direction);
  const handleToggleClick = () => setDirection((prev) => prev * -1);
  //선택 삭제
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
  //포켓몬 이름 받아서 삭제
  const handleValueDelete = () => {
    console.log(value);
    if (type === 'name') {
      const nextItems = items.filter((item) => {
        return item.name !== value;
      });
      setItems(nextItems);
    }
    if (type === 'type') {
      const nextItems = items.filter((item) => {
        return !item.types.includes(value);
      });
      setItems(nextItems);
    }
  };

  //select타입 지정할 때
  const handleTypeSelect = (e) => setType(e.target.value);
  return (
    <div>
      <button onClick={handleAscClick}>도감번호 순서대로</button>
      <button onClick={handleDescClick}>도감번호 반대로</button>
      <button onClick={handleToggleClick}>
        {direction === 1 ? 'id 내림차순' : 'id 오름차순'}
      </button>
      <select value={type} onChange={handleTypeSelect}>
        <option value="name">이름 </option>
        <option value="type">타입 </option>
      </select>
      <input
        type="text"
        placeholder={type === 'name' ? '이름' : '타입'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleValueDelete}>삭제</button>
      <h1>{items.length} POKEMONS</h1>
      <ul>
        {sortedItems.map((item) => (
          <li key={item.id}>
            {/*//^ 1)props가 아래로 내려 갔다가 */}
            <Pokemon item={item} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

//^이렇게도 가능
// function App_pokemon_renderItem() {
//   const renderedItems = items.map((item) => (
//     <li key={item.id}>
//       <Pokemon item={item} />
//     </li>
//   ));
//   return <ul>{renderedItems}</ul>;
// }
