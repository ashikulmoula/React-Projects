import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [nallwd, setNAllwd] = useState(false);
  const [chrallwd, setChaAlwd] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const passwordgenaretor = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (nallwd) str += "0123456789";
    if (chrallwd) str += "!~@#$%^&*()-_=+?><:;{}[]`";

    for (let i = 1; i <= length; i++) {
      let charindex = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(charindex);
    }
    setpassword(pass);
  }, [length, nallwd, chrallwd, setpassword]);
  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordgenaretor();
  }, [length, nallwd, chrallwd, passwordgenaretor]);
  return (
    <>
      <div className=" w-full text-orange-400 max-w-md mx-auto rounded-lg shadow-lg my-8 px-4 py-2 bg-gray-800">
        <h1 className="text-xl text-center pb-3">Password Genaretor</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copypasswordToClipboard}
            className="bg-blue-700 px-3 py-0.5 text-white shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Lenght:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={nallwd}
              id="numberInput"
              onChange={() => {
                setNAllwd((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={chrallwd}
              id="characterInput"
              onChange={() => {
                setChaAlwd((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
