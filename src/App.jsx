import PageLayout from "./PageLayout";
import { GROUPS } from "./data/groups";

export default function App() {
  return (
    <PageLayout
      userName="Carlos"
      groups={GROUPS}
    />
  );
}
