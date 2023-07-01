import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import ConfettiExplosion from 'react-confetti-explosion';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const[isExpanded,setExpanded]=useState(false);
  function expand(){
    setExpanded(true);
  }


  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [isExploding, setIsExploding] = useState(false);
  function explodeIt(){
    setIsExploding(true);
    setTimeout(()=>{
      setIsExploding(false)
    },1000);
  }

  return (
    <div>
      <form className="create-note">
      {isExpanded && (
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
      />)}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?"3":"1"}
        />
        <Zoom  in={isExpanded}>
        <Fab onClick={(event)=>{submitNote(event);explodeIt()}} ><AddIcon/>{isExploding && <ConfettiExplosion />} </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
