import { useParams } from "react-router-dom";

export default function Country() {
  const { name } = useParams();
  return <div>{name}</div>;
}
