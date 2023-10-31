import { useParams, useSearchParams } from "react-router-dom";

export const useTodoFormParams = () => {
  const { id } = useParams();

  const [search] = useSearchParams();

  //* id가 있으면 string 없으면 undefined로 들어감.
  const type = typeof id === "string" ? "edit" : "create";
  const from = search.get("from");
  const to = search.get("to");

  return {
    type,
    id: +id,
    from: from ? new Date(+from) : undefined,
    to: to ? new Date(+to) : undefined,
  };
};
