import "./CoreConcept.css";
export default function CoreConcept({
  image,
  title,
  description = "prop 기본값",
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
