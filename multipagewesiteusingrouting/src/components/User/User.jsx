import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  return <div className="text-center bg-green-600 p-4">User:{id}</div>;
}

export default User;
