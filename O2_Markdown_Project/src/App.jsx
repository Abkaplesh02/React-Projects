import { useState } from 'react'
import './App.css'
import { marked } from 'marked';
import Markdown from 'react-markdown'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown,setMarkDown]=useState('#sup');

  function handleChange(e){
    setMarkDown(e.target.value);
  }

  return (
    <div className='app'>

      <textarea onChange={handleChange} value={markdown} />

      {/* <div 
      className='preview'><Markdown>{markdown}</Markdown></div> */}
      {/* <Markdown className='preview' source={markdown}/> */}

      <ReactMarkdown className="preview" >{markdown}</ReactMarkdown>
      </div>

  );
}

export default App
