import { useState, useEffect } from 'react';
import butter from './butter-client';


function App() {

  const [fetchData, setFetchData] = useState('');

  useEffect(() => {
    butter.post.list({page: 1, page_size: 10})
    .then(function(response) {
      setFetchData(response)
    })
  }, []);

  console.log(fetchData)

  return (
    <div className="App">
      {fetchData === '' ? 'Data not loaded!' : 'Data Loaded'}
    </div>
  );
}

export default App;
