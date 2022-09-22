import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState()
  const [version, setVersion] = useState()

  useEffect(() => {
    (async () => {
      const res = await fetch(process.env.REACT_APP_API_URL)

      const {joke, version} = await res.json()

      setJoke(joke)
      setVersion(version)
    })()
  }, [process.env.REACT_APP_API_URL])


  return (
    <div className="App">
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost normal-case text-xl">
          API Version : {version}
        </a>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-red-500">{joke?.category}</h1>
            <p className="py-6">{joke?.setup}</p>
            <p className="py-6">{joke?.delivery}</p>
            <p className="py-6">{joke?.joke}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
