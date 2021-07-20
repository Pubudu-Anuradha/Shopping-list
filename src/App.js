import './App.css';
import Cart from "./Cart"

//This array holds the details of each item
//To add new ones use this : {id: ,name:"",price: ,qty:}
const itmes=[
	{id:1,name:"Taco Seasoning",price:2.25,qty:1},
	{id:2,name:"Pinto Beans",price:1.99,qty:1},
	{id:3,name:"Sour Cream",price:3.5,qty:1}
]

function App(){
	return (
		<div className="App">
			<Cart items={itmes}/>
		</div>
  );
}

export default App;
