import { useState } from "react";

const questions = [
  { q: "What does SBT stand for?", a: "Soulbound Token" },
  { q: "Which blockchain does Rialo use?", a: "Ethereum" }
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (answer) => {
    if(answer === questions[step].a) setScore(score+1);
    if(step+1 < questions.length) setStep(step+1);
    else setDone(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] to-[#0d1b2a] text-white flex flex-col items-center pt-20">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">Quiz Time 🧠</h1>
      {!done ? (
        <div className="bg-black/40 p-8 rounded-2xl shadow-xl border border-cyan-400/20 w-96 text-center">
          <h2 className="text-2xl mb-4">{questions[step].q}</h2>
          <div className="space-y-3">
            {["Soulbound Token","Smart Blockchain Transaction","Ethereum"].map((opt,i)=>(
              <button key={i} onClick={()=>handleAnswer(opt)} 
                className="w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold shadow-md shadow-cyan-500/40 transition">
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-black/40 p-8 rounded-2xl shadow-xl border border-cyan-400/20 w-96 text-center">
          <h2 className="text-2xl text-cyan-400">Quiz Finished ✅</h2>
          <p className="mt-2 text-gray-300">Your score: {score}/{questions.length}</p>
          <p className="mt-4 text-sm text-gray-400">Mint your SBT to appear on the leaderboard.</p>
        </div>
      )}
    </div>
  )
}
