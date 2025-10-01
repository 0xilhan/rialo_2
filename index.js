export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0f1f] to-[#0d1b2a] text-white">
      <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-4 bg-black/30 backdrop-blur-md border-b border-cyan-400/30">
        <div className="text-cyan-400 font-bold text-xl">Rialo Quiz</div>
        <div className="space-x-6">
          <a href="/" className="hover:text-cyan-400">Home</a>
          <a href="/quiz" className="hover:text-cyan-400">Quiz</a>
          <a href="/leaderboard" className="hover:text-cyan-400">Leaderboard</a>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center text-center mt-20">
        <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg">
          Welcome to Rialo Quiz 🎉
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Test your knowledge, mint your SBT, and climb the leaderboard!
        </p>
        <a href="/quiz" className="mt-8 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-lg shadow-cyan-500/50 transition">
          Start Quiz
        </a>
      </main>
    </div>
  )
}
