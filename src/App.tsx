import { useState } from "react";
import GroupsPage from "./components/GroupsPage";

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <div>
      {page === 1 && <GroupsPage />}
    </div>
  );
}

