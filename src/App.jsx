// import { useState } from 'react';
// import Navbar from './components/Navbar/navbar.component';
// import TextContent from './components/Text/DiffText.component';


// function App() {
//   const [textBox1, setTextBox1] = useState('')
//   const [textBox2, setTextBox2] = useState('')
//   const [output, setOutput] = useState(null)


//   const showDifference = () => {
//     let diff = '';
//     const maxLength = Math.max(textBox1.length, textBox2.length);

//     for (let i = 0; i < maxLength; i++) {
//       const char1 = textBox1[i] || '';
//       const char2 = textBox2[i] || '';

//       if(char1.length!==char2.length){

//       }

//       if (char1 !== char2) {
//         diff += `<span style="background-color: red">${char2 || ' '}</span>`;
//       } else {
//         diff += char2;
//       }
//     }
//     setOutput(diff);
//   }

//   const handleClick = () => {
//     console.log("Button Clicked...");
//     if (textBox1.trim() === '' || textBox2.trim() === '') {
//       setOutput('Please enter text to compare...');
//     } else {
//       showDifference();
//     }
//   }

//   const onReset = () => {
//     setTextBox1('');
//     setTextBox2('');
//     setOutput('');
//   }

//   return (
//     <>
//       <Navbar NavbarTitle="Diffing Text " />

//       <div className="flex flex-row justify-around p-4">
//         <div>
//           <h1 className='text-3xl text-center'>Original Text</h1>
//           <TextContent textBox={textBox1} setTextBox={setTextBox1} placeholder='Enter Original Text...' />
//         </div>

//         <div>
//           <h1 className='text-3xl text-center'>Compared Text</h1>
//           <TextContent textBox={textBox2} setTextBox={setTextBox2} placeholder='Enter Text To Compare...' />
//         </div>
//       </div>

//       <div className='compareButton text-center'>
//         <button onClick={handleClick} className='bg-green-500 rounded-xl p-5 text-white font-semibold my-10 text-lg'>Compare Now</button>
//         <button onClick={onReset} className='bg-blue-500 rounded-xl p-5 text-white font-semibold my-10 text-lg ml-4 w-40'>Reset</button>
//       </div>

//       <div className="output text-center">
//         <h1 className='text-3xl my-5 font-bold'>Difference in Text:</h1>
//         <div dangerouslySetInnerHTML={{ __html: output }} className="border border-chocolaty p-4 rounded-lg bg-cream p-5 min-h-80 text-chocolaty text-3xl"></div>
//       </div>
//     </>
//   )
// }

// export default App

// import { useState } from 'react';
// import Navbar from './components/Navbar/navbar.component';
// import TextContent from './components/Text/DiffText.component';

// function App() {
//   const [textBox1, setTextBox1] = useState('');
//   const [textBox2, setTextBox2] = useState('');
//   const [output, setOutput] = useState(null);

//   // Function to compare line by line
//   const showDifference = () => {
//     let diff = '';
    
//     // Split the text into lines
//     const lines1 = textBox1.split('\n');
//     const lines2 = textBox2.split('\n');

//     // Make the line count equal by adding empty lines to the shorter text
//     const maxLength = Math.max(lines1.length, lines2.length);
    
//     for (let i = lines1.length; i < maxLength; i++) {
//       lines1.push(''); // Add empty lines to lines1
//     }

//     for (let i = lines2.length; i < maxLength; i++) {
//       lines2.push(''); // Add empty lines to lines2
//     }

//     // Compare the lines
//     for (let i = 0; i < maxLength; i++) {
//       const line1 = lines1[i];
//       const line2 = lines2[i];

//       if (line1 !== line2) {
//         diff += `<span style="background-color: red">${line2 || ''}</span><br/>`;
//       } else {
//         diff += `${line2}<br/>`;
//       }
//     }

//     setOutput(diff);
//   };

//   const handleClick = () => {
//     console.log("Button Clicked...");
//     if (textBox1.trim() === '' || textBox2.trim() === '') {
//       setOutput('Please enter text to compare...');
//     } else {
//       showDifference();
//     }
//   };

//   const onReset = () => {
//     setTextBox1('');
//     setTextBox2('');
//     setOutput('');
//   };

//   return (
//     <>
//       <Navbar NavbarTitle="Diffing Text " />

//       <div className="flex flex-row justify-around p-4">
//         <div>
//           <h1 className='text-3xl text-center'>Original Text</h1>
//           <TextContent textBox={textBox1} setTextBox={setTextBox1} placeholder='Enter Original Text...' />
//         </div>

//         <div>
//           <h1 className='text-3xl text-center'>Compared Text</h1>
//           <TextContent textBox={textBox2} setTextBox={setTextBox2} placeholder='Enter Text To Compare...' />
//         </div>
//       </div>

//       <div className='compareButton text-center'>
//         <button onClick={handleClick} className='bg-green-500 rounded-xl p-5 text-white font-semibold my-10 text-lg'>Compare Now</button>
//         <button onClick={onReset} className='bg-blue-500 rounded-xl p-5 text-white font-semibold my-10 text-lg ml-4 w-40'>Reset</button>
//       </div>

//       <div className="output text-center">
//         <h1 className='text-3xl my-5 font-bold'>Difference in Text:</h1>
//         <div dangerouslySetInnerHTML={{ __html: output }} className="border border-chocolaty p-4 rounded-lg bg-cream p-5 min-h-80 text-chocolaty text-3xl"></div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';
import Navbar from './components/Navbar/navbar.component';
import TextContent from './components/Text/DiffText.component';

function App() {
  const [textBox1, setTextBox1] = useState('');
  const [textBox2, setTextBox2] = useState('');
  const [output, setOutput] = useState(null);

  // Function to compare line by line
  const showDifference = () => {
    let diff = '';
    
    // Split the text into lines
    const lines1 = textBox1.split('\n');
    const lines2 = textBox2.split('\n');

    // Make the line count equal by adding empty lines to the shorter text
    const maxLength = Math.max(lines1.length, lines2.length);

    // Equalize the lengths of both arrays
    if (lines1.length < maxLength) {
      setTextBox1(...Array(maxLength - lines1.length).fill(''));
    }
    if (lines2.length < maxLength) {
      setTextBox2(...Array(maxLength - lines2.length).fill(''));
    }

    // Compare the lines
    for (let i = 0; i < maxLength; i++) {
      const line1 = lines1[i];
      const line2 = lines2[i];

      if (line1 !== line2) {
        diff += `<span style="background-color: red">${line2 || ''}</span><br/>`;
      } else {
        diff += `${line2}<br/>`;
      }
    }

    setOutput(diff);
  };

  const handleClick = () => {
    console.log("Button Clicked...");
    if (textBox1.trim() === '' || textBox2.trim() === '') {
      setOutput('Please enter text to compare...');
    } else {
      showDifference();
    }
  };

  const onReset = () => {
    setTextBox1('');
    setTextBox2('');
    setOutput('');
  };

  return (
    <>
      <Navbar NavbarTitle="Diffing Text " />

      <div className="flex flex-row justify-around p-4">
        <div>
          <h1 className='text-3xl text-center'>Original Text</h1>
          <TextContent textBox={textBox1} setTextBox={setTextBox1} placeholder='Enter Original Text...' />
        </div>

        <div>
          <h1 className='text-3xl text-center'>Compared Text</h1>
          <TextContent textBox={textBox2} setTextBox={setTextBox2} placeholder='Enter Text To Compare...' />
        </div>
      </div>

      <div className='compareButton text-center'>
        <button onClick={handleClick} className='bg-green-500 rounded-xl p-5 text-white font-semibold my-10 text-lg'>Compare Now</button>
        <button onClick={onReset} className='bg-blue-500 rounded-xl p-5 text-white font-semibold my-10 text-lg ml-4 w-40'>Reset</button>
      </div>

      <div className="output text-center">
        <h1 className='text-3xl my-5 font-bold'>Difference in Text:</h1>
        <div dangerouslySetInnerHTML={{ __html: output }} className="border border-chocolaty p-4 rounded-lg bg-cream p-5 min-h-80 text-chocolaty text-3xl"></div>
      </div>
    </>
  );
}

export default App;
