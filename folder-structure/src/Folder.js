import { useState } from "react";

export default function Folder({ explorer }) {
  const [folder, setFolder] = useState(false);

  // console.log(explorer);

  if (explorer.isFolder) {
    return (
      <div className="App">
        <h3 onClick={() => setFolder(!folder)}> {explorer.name} </h3>

        <div style={{ display: folder ? "block" : "none" }}>
          {explorer.items.map((e) => {
            return <Folder key={e.id} explorer={e} />;
          })}
        </div>
      </div>
    );
  } else {
    return <p> {explorer.name} </p>;
  }
}
