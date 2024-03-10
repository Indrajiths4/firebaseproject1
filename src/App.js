import './App.css';
import {useState} from "react";
import {app} from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function App() {
  let auth = getAuth();
  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value};

    setData({ ...data, ...newInput });
  };

  const handleSubmit = () => { 
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      console.log(response.user)
    })
    .catch((err) => {
      alert(err.message)
    })
  };
  return (
    <div className="App">
      
        <input name="email" placeholder='Email' onChange={(event) =>handleInput(event)}></input>
        <input name='password' placeholder='Password' onChange={(event) => handleInput(event)}></input>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      
    </div>
  );
}

export default App;
