import './ReviewList.css';
import StarRating from './StarRating';

function formatDate(value) {
  const date = new Date(value);

  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);

  return (
    <div className="ReivewListItem">
      <img className="ReivewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>
          <StarRating selectedStars={item.rating} />
        </p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
      </div>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

export default function ReviewList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={item.id}>
            {/* //^index는 동적인 값이라서react가 구별 x -> EX) 배열은 순서대로 index가 붙기 때문에 중간에 하나 사라지면 인덱스 값이 밀려서
            //*해결 방안) 식별 가능한 값인 item.id 같은 unique한 값을 부여해 줘야 한다.
             */}
            <ReviewListItem item={item} onDelete={onDelete} />
            {/* <input></input> */}
            {/*//! key값이 없으면 react가 구별을 할 수가 없다.-> 나중에 오작동 할 수도 있으니 key정해주자!!  */}
          </li>
        );
      })}
    </ul>
  );
}
