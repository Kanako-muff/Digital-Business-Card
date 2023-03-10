import './App.css';
import Card from './components/Card/Card';
import data from "./assets/data/data.json"

function App() {

  const cardElements = data.map((user) => <Card key={user.fullName} {...user} />);

  return (
    <div className="App">
      {/* <Card /> */}
      <div className="card-list">
        {
          cardElements
        }
      </div>    
    </div>
  );
}

export default App;
