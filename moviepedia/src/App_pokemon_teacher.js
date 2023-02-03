import mockItems from './pokemons.json';
import { useState } from 'react';

function Pokemon({ item, onDelete }) {
    const handleDeleteClick = () => onDelete(item.id);
    return (
        <div>
            NO.{item.id} {item.name} 
            <button onClick={handleDeleteClick}>삭제</button> 
        </div>
    )
}

export default function App_pokemon(){
    const [items, setItems] = useState(mockItems);

    const [direction, setDirection] = useState(1);
    const handleAscClick = () => setDirection(1);
    const handleDescClick = () => setDirection(-1);

    const sortedItems = items.sort((a,b) => direction * (a.id - b.id));

    const handleDelete = (id) => {
        const nextItems = items.filter((item) => item.id !== id);
        setItems(nextItems);
    };
    
    return (
        <div>
            <div>
                <button onClick={handleAscClick}>도감번호 순서대로</button>
                <button onClick={handleDescClick}>도감번호 반대로</button>
            </div>
            <ul>
                {sortedItems.map((item) => (
                    <li key={item.id}>
                        <Pokemon item={item} onDelete={handleDelete}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}


// function App_pokemon_renderItem(){
//     const renderedItems = items.map((item) => (
//         <li key={item.id}>
//             <Pokemon item={item} />
//         </li>
//     ));

//     return (
//         <ul>
//             {renderedItems}
//         </ul>
//     )
// }