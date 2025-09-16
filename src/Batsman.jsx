import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes,setSixes] = useState(0);

  const handleSingles = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
const handleFours = () =>{
const updatedRuns = runs + 4
setRuns (updatedRuns)


}
  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes)
    setRuns(updatedRuns);
  };






  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      <p><small>Six: {sixes}</small></p>
    {
runs > 50  && <p>Congratulations for your success score: 50</p>

    }

      <h1>Score: {runs}</h1>
      <button onClick={handleSingles}>single</button>
      <button onClick={handleFours}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
