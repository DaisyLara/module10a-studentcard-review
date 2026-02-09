import React from 'react';

function StudentCard(props) { //this is the child component, referencing the props in App.jsx
  const { name, major, year, bio, imageUrl } = props; 
  const [showBio, setShowBio] = React.useState(false); //establishing initial state of showBio as false

  const toggleBio = () => {
    setShowBio(!showBio); //setting showBio state to NOT false/currentstate when toggled
  };

  return (
    <div style={{
      // The background's appearance
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#000000', //I set this to a dark color because I was seeing white on white and couldn't see the font
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* // all variables below in {} are props from the parent file. These are all references and then styling */}
      <img // Start of image appearance
        src={imageUrl} 
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      {/* start of name header appearance */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2> 
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p> 
      {/* start of button appearance and use case */}
      <button onClick={toggleBio} style={{ //makes use of the button to actuate toggleBio
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'} 
        {/* conditional if/then operator used to determine the button text depending on showBio */}
      </button>
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>} 
    </div>
  );
}

export default StudentCard; //makes this function available for reference