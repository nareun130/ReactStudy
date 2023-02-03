//network에서 api를 쏴서 데이터를 가져와서 뿌려줄 것이다.
export async function getReviews() {
  const reponse = await fetch(`https://learn.codeit.kr/api/film-reviews`);
  const body = await reponse.json();
  console.log(body);
  return body;
}
