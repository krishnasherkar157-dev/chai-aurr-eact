import { useCallback, useState, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToCbord = useCallback(() => {
    passwordRef.current?.select();
  navigator.clipboard.writeText(password);
}, [password]);
 

  useEffect(() => {
    passwordGenerator();
  }, [length,numberAllowed,charAllowed,passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 text-orange-500">
      <h1 className="text-white text-center my-3">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-white text-black"
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToCbord}
        className="outline-none bg-blue-700 text-white px-3 cursor-pointer" >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={99}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="charInput"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
          />
          <label htmlFor="charInput">Symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
