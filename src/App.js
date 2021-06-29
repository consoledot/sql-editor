import "./app.scss";
import { Editor, Header, Table } from "./component";
function App() {
  return (
    <div className="app">
      <Header />
      <Editor />
      <Table />
    </div>
  );
}

export default App;
