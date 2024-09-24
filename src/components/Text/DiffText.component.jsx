import React from 'react'

function TextContent({ textBox, setTextBox, disable, placeholder }) {
  return (
    <div className="textContentContainer">
      <div className="inputContent">
        <textarea
          name="textarea"
          id="textarea"
          className='border-solid border-4 outline-none border-cream p-3 mt-10 rounded-lg resize-none text-lg'
          rows={15}
          cols={80}
          placeholder={placeholder}
          value={textBox}
          onChange={(e) => setTextBox(e.target.value)}
          disabled={disable}
        />
      </div>
    </div>
  )
}

export default TextContent;


