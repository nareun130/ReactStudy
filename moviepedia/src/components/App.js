import ReviewList from './ReviewList';
// import mockItems from '../mock.json';//^api로 data를 가져올 거 기 때문에 주석처리
import { useEffect, useState } from 'react';
import { getReviews } from '../api';

function App() {
  // const [items, setItems] = useState(mockItems);
  const [items, setItems] = useState([]);

  //*state를 써서 rating순으로 할지 createdAt으로 할지 정렬기준을 정할 것임
  const [order, setOrder] = useState('createdAt');

  //^최신 영화순으로 rating해줌.
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('createdAt');
  const handleBestClick = () => setOrder('rating');
  const handleTitleClick = () => {
    items.sort((a, b) => (a['title'] > b['title'] ? 1 : -1));
    setOrder('title');
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleSearchClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>별점 순</button>
        <button onClick={handleTitleClick}>제목순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      {/*이렇게 변수로 안 넣어줘도 sort는 원본 배열을 건드리니 바로 sort됨*/}
      <button onClick={handleSearchClick}>조회</button>
    </div>
  );
}

export default App;
