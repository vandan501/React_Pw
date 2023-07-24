import Person from "./Person";
import Button from "./Button";
import Header from "./Header"
import List from "./List";
function App() {
  return (
    <div className="App">

<Header title="Welcome to my website!" />
<p>
<Person name="Vandan" age="22" />
<Person name="Maluki" age="32" />
<Person name="Vansh" age="11" />
<Person name="Vihaan" age="11" />
<Person name="Rudra" age="10" />
<Person name="Nisarg" age="25" />
</p>

<Button text="Click me!" onClick={() => alert("Perfect")} />
<List items={['apple', 'banana', 'orange','Mango']} />

</div>

  );
}

export default App;
