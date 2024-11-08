import React, { useState } from 'react'
import './BrowserTab.css'
import { NavLink } from 'react-router-dom';

const BrowserTab = (props) => {

    const [highlightstyle,setHighlightstyle]=useState({left:0 , opacity:0})

    function moveHighlight(e){
      console.log(e.nativeEvent);
      // update highlight style to move the highlight
      setHighlightstyle({
        left:e.nativeEvent.layerX-150 ,
      });
    }
  
      function hideHighlight(e){
        setHighlightstyle({
          opacity:0,
          left:e.nativeEvent.layerX-150 ,
        });
      }
  
  return (
    <div>
       <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
            <div className="highlight" style={highlightstyle}/>
            <a>{props.children}</a>
          </div>
    </div>
  )
}

export default BrowserTab
