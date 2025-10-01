export default function Leaderboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] to-[#0d1b2a] text-white flex flex-col items-center pt-20">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">Leaderboard 🏆</h1>
      <div className="bg-black/40 p-8 rounded-2xl shadow-xl border border-cyan-400/20 w-96">
        <p className="text-gray-300 mb-4">(Only users with SBT minted will appear here)</p>
        <ul className="space-y-2">
          <li className="flex justify-between"><span>0x123...abc</span><span>2/2</span></li>
          <li className="flex justify-between"><span>0x456...def</span><span>1/2</span></li>
        </ul>
      </div>
    </div>
  )
}
