import Link from "next/link"
import { Zap, BookOpen } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const readingOrder = [
  // Rebirth (2009 Era)
  {
    era: "Rebirth (2009 Era)",
    title: "The Flash: Rebirth",
    volume: "Vol. 1",
    year: "2009",
    eraColor: "bg-blue-500"
  },
  {
    era: "Rebirth (2009 Era)",
    title: "The Flash: The Dastardly Death of the Rogues",
    volume: "Vol. 2",
    year: "2010",
    eraColor: "bg-blue-500"
  },
  {
    era: "Rebirth (2009 Era)",
    title: "The Flash: The Road to Flashpoint",
    volume: "Vol. 3",
    year: "2011",
    eraColor: "bg-blue-500"
  },
  {
    era: "Rebirth (2009 Era)",
    title: "Flashpoint",
    volume: "Vol. 4",
    year: "2011",
    eraColor: "bg-blue-500"
  },
  // New 52 Era
  {
    era: "New 52 Era",
    title: "The Flash: Move Forward",
    volume: "Vol. 1",
    year: "2011",
    eraColor: "bg-red-500"
  },
  {
    era: "New 52 Era",
    title: "The Flash: Gorilla Warfare",
    volume: "Vol. 2",
    year: "2013",
    eraColor: "bg-red-500"
  },
  {
    era: "New 52 Era",
    title: "The Flash: Reverse",
    volume: "Vol. 3",
    year: "2014",
    eraColor: "bg-red-500"
  },
  {
    era: "New 52 Era",
    title: "The Flash: History Lessons",
    volume: "Vol. 4",
    year: "2015",
    eraColor: "bg-red-500"
  },
  {
    era: "New 52 Era",
    title: "The Flash: Out of Time",
    volume: "Vol. 5",
    year: "2016",
    eraColor: "bg-red-500"
  },
  {
    era: "New 52 Era",
    title: "The Flash #51",
    volume: "N/A",
    year: "2016",
    eraColor: "bg-red-500"
  },
  {
    era: "New 52 Era",
    title: "The Flash #52",
    volume: "N/A",
    year: "2016",
    eraColor: "bg-red-500"
  },
  // Rebirth (2016 Era)
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: DC Rebirth #1",
    volume: "N/A",
    year: "2016",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: Lightning Strikes Twice",
    volume: "Vol. 1",
    year: "2016",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: Speed of Life",
    volume: "Vol. 2",
    year: "2016",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: The Black Hole",
    volume: "Vol. 3",
    year: "2017",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: The Button (crossover w/ Batman)",
    volume: "Vol. 4",
    year: "2017",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: The Perfect Storm",
    volume: "Vol. 5",
    year: "2017",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: The Trial of The Flash",
    volume: "Vol. 6",
    year: "2018",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: Flash War",
    volume: "Vol. 7",
    year: "2018",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: Force Quest",
    volume: "Vol. 8",
    year: "2019",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: The Greatest Trick of All",
    volume: "Vol. 9",
    year: "2019",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: Reckoning of the Forces",
    volume: "Vol. 10",
    year: "2019",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: Death and the Speed Force",
    volume: "Vol. 11",
    year: "2020",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: Rogue's Reign",
    volume: "Vol. 12",
    year: "2020",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: The Flash Age",
    volume: "Vol. 13",
    year: "2020",
    eraColor: "bg-green-500"
  },
  {
    era: "Rebirth (2016 Era)",
    title: "The Flash: Finish Line",
    volume: "Vol. 14",
    year: "2021",
    eraColor: "bg-green-500"
  }
]

const eras = [
  { name: "Rebirth (2009 Era)", color: "bg-blue-500", count: 4 },
  { name: "New 52 Era", color: "bg-red-500", count: 7 },
  { name: "Rebirth (2016 Era)", color: "bg-green-500", count: 14 }
]

export default function ReadingOrderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-yellow-600">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-yellow-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-8">
              <Zap className="h-8 w-8 text-yellow-400 animate-pulse" />
              <span className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">THE FLASH</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🏠 Home
              </Link>
              <Link href="/heroes" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🦸 Heroes
              </Link>
              <Link href="/villains" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🦹 Villains
              </Link>
              <Link href="/feats" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🏆 Feats
              </Link>
              <Link href="/timeline" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                ⏰ Timeline
              </Link>
              <Link href="/reading-order" className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                📚 Reading Order
              </Link>
              <Link href="/knowledge" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🎓 Knowledge
              </Link>
              <Link href="/challenge" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🎯 Challenge
              </Link>
              <Link href="/flashoot" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🧠 Flashoot!
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-4 py-12 text-center mt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 mb-4 drop-shadow-lg">
          BARRY ALLEN READING ORDER
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
          The complete chronological guide to Barry Allen's comic book adventures
        </p>
      </section>

      {/* Era Overview */}
      <section className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {eras.map((era, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center">
              <Badge className={`${era.color} text-white border-0 mb-3`}>
                {era.name}
              </Badge>
              <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{era.count}</div>
              <p className="text-white/70 drop-shadow-lg">Volumes</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reading Order Table */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-blue-500/30 overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="grid grid-cols-4 gap-4 font-bold text-white text-lg drop-shadow-lg">
              <div className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Era
              </div>
              <div>Title</div>
              <div>Volume</div>
              <div>Year</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/10">
            {readingOrder.map((comic, index) => (
              <div key={index} className="p-6 hover:bg-white/5 transition-colors border-l-4 border-transparent hover:border-yellow-400">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div className="flex items-center space-x-3">
                    <Badge className={`${comic.eraColor} text-white border-0 text-sm px-3 py-1`}>
                      {comic.era}
                    </Badge>
                  </div>
                  <div className="text-white font-medium text-lg drop-shadow-lg">{comic.title}</div>
                  <div className="text-yellow-400 font-bold text-lg drop-shadow-lg">{comic.volume}</div>
                  <div className="text-white/90 font-semibold drop-shadow-lg">{comic.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Tips */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl p-8 text-center shadow-2xl shadow-blue-500/30">
            <BookOpen className="h-16 w-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              READING GUIDE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3 text-yellow-300 drop-shadow-lg">Start Here</h3>
                <p className="text-sm leading-relaxed drop-shadow-lg">Begin with "The Flash: Rebirth" (2009) for Barry's return to comics after his heroic sacrifice</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3 text-yellow-300 drop-shadow-lg">Key Stories</h3>
                <p className="text-sm leading-relaxed drop-shadow-lg">Don't miss "Flashpoint" and "The Button" crossover with Batman - essential Flash mythology</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-bold text-xl mb-3 text-yellow-300 drop-shadow-lg">Modern Era</h3>
                <p className="text-sm leading-relaxed drop-shadow-lg">The 2016 Rebirth era offers the most accessible entry point for new readers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-yellow-500/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">The Flash Hub</span>
            </div>
            <div className="text-white/70 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Developed by: <span className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Escher Presant</span>
            </div>
          </div>
          <p className="text-white/50 text-center mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            This website is made by a fan, for the fans.
          </p>
        </div>
      </footer>
    </div>
  )
}
