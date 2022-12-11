import Folder from "./Folder";
import explorer from "./data";

export default function App() {
  // console.log(explorer);
  return (
    <div className="App">
      <Folder explorer={explorer} />
    </div>
  );
}
