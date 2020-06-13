import React,{useCallback, useState, useEffect, ChangeEvent} from 'react';
import youtubeTransform from './services/youtube'
import logo from './logo.svg';
import './App.css';

function App() {
  const [url, setUrl]: [string, Function] = useState('')
  const [embedUrl, setEmbedUrl]: [string, Function] = useState('')

  const handleOnChangeUrl = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const {target: {value}} = event
    setUrl(value)
  }, [setUrl])

  const handleConvert = useCallback(() =>{
    setEmbedUrl(youtubeTransform(url))
  },[url, setEmbedUrl])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video url to embed url</h1>
        <p>Youtube, Facebook, Vimeo</p>

        <form action="#">
          <input type="text" onChange={handleOnChangeUrl} value={url} />
          <button onClick={handleConvert}>Get embed url</button>
          {embedUrl &&
            <div>
              <h2>Your embed url:</h2>
              <p>{embedUrl}</p>
            </div>
          }
        </form>
      </header>
    </div>
  );
}

export default App;
