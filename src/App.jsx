// App.jsx
import './App.css';
import { useState, useEffect } from 'react';
import userData from './userData';

function App() {
  const [showData, setShowData] = useState(userData);
  const [todoFind, setTodosFind] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const textFind = value.trim();

    if (textFind.length > 1) {
      const array = showData.filter(
        (datas) =>
          datas.first_name.includes(textFind) || datas.last_name.includes(textFind)
      );
      setTodosFind([...array]);
    } else {
      setTodosFind([]); // Clear the search results if the input is empty
    }
  }, [value, showData]);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='container d-flex flex-column text-center bg-white'>
      <div className='top'>
        <h1>Your name</h1>
        <h5>Bangkok, Thailand</h5>
        <input
          type='text'
          placeholder='Search'
          value={value}
          onChange={handleInputChange}
        />
      </div>

      <ul>
        {todoFind.length > 0 ? (
          todoFind.map((user) => (
            <li key={user.id}>
              <div className='d-flex'>
                <div>
                  <img src={`https://reqres.in/img/faces/${user.id}-image.jpg`} alt={`Profile of ${user.first_name} ${user.last_name}`} />
                </div>
                <div>
                  <div className='text-start p-2'>
                    {user.first_name} {user.last_name}
                  </div>
                  <div className='text-start p-2'>
                    {user.email}
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          showData.map((user) => (
            <li key={user.id}>
              <div className='d-flex'>
                <div>
                  <img src={`https://reqres.in/img/faces/${user.id}-image.jpg`} alt={`Profile of ${user.first_name} ${user.last_name}`} />
                </div>
                <div>
                  <div className='text-start p-2'>
                    {user.first_name} {user.last_name}
                  </div>
                  <div className='text-start p-2'>
                    {user.email}
                  </div>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
