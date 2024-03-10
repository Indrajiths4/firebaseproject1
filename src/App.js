import './App.css';
import {useState} from "react";
import {app, database} from './firebaseConfig'
import {collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from 'firebase/firestore'

function App() {
  
  const [data, setData] = useState({});
  const collectionRef = collection(database, "users");
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value};

    setData({ ...data, ...newInput });
  };
 
  const handleSubmit = () => { 
    addDoc(collectionRef, {
      email: data.email,
      password: data.password
    })
    .then(() => {
      alert('Data Added')
    })
    .catch((err) => {
      alert('Error')
    })
  };
  const getData = () => {
    getDocs(collectionRef).then((response) => {
      console.log(response.docs.map((item => {
        return {...item.data(),id: item.id};
      })))
    })
  };

  const deleteData = () => {
    const docToUpdate = doc(database,'users','3bxIQmvYfyfaFZZyZWu2')
    deleteDoc(docToUpdate).then(() => { console.log('data deleted')}).catch((err) => {
      console.log(err.message)
    })
  };

  return (
    <div className="App">
      
        <input name="email" placeholder='Email' onChange={(event) =>handleInput(event)}></input>
        <input name='password' placeholder='Password' onChange={(event) => handleInput(event)}></input>
        <br></br>
        <button onClick={deleteData}>Submit</button>
      
    </div>
  );
}

export default App;
