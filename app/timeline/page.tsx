import Link from "next/link"
import { Zap } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const timelineEvents = [
  {
    era: "Golden Age",
    year: "1940",
    title: "Jay Garrick - The First Flash",
    description: "College student Jay Garrick gains super-speed after inhaling hard water vapors in a laboratory accident. He becomes the first hero to bear the name 'The Flash'.",
    badge: "Origin",
    badgeColor: "bg-blue-500"
  },
  {
    era: "Silver Age",
    year: "1956",
    title: "Barry Allen - The Scarlet Speedster",
    description: "Police scientist Barry Allen is struck by lightning while working with chemicals, gaining the power of super-speed and becoming the second Flash.",
    badge: "Rebirth",
    badgeColor: "bg-red-500"
  },
  {
    era: "Bronze Age",
    year: "1961",
    title: "Discovery of the Speed Force",
    description: "Barry Allen discovers the Speed Force, the extra-dimensional energy source that grants speedsters their powers and connects all speed-based heroes.",
    badge: "Discovery",
    badgeColor: "bg-yellow-500"
  },
  {
    era: "Modern Age",
    year: "1985",
    title: "Crisis on Infinite Earths",
    description: "Barry Allen makes the ultimate sacrifice, running into the Speed Force to save the multiverse during the Crisis on Infinite Earths, seemingly dying in the process.",
    badge: "Sacrifice",
    badgeColor: "bg-purple-500"
  },
  {
    era: "Legacy Era",
    year: "1987",
    title: "Wally West Takes the Mantle",
    description: "Barry's nephew Wally West, formerly Kid Flash, assumes the role of The Flash and eventually surpasses his mentor's speed achievements.",
    badge: "Legacy",
    badgeColor: "bg-green-500"
  },
  {
    era: "Rebirth Era",
    year: "2008",
    title: "Barry Allen Returns",
    description: "Barry Allen returns from the Speed Force in 'Final Crisis' and 'Flash: Rebirth', reclaiming his role as The Flash and reuniting with his legacy.",
    badge: "Return",
    badgeColor: "bg-orange-500"
  }
]

export default function TimelinePage() {
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
              <Link href="/timeline" className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                ⏰ Timeline
              </Link>
              <Link href="/reading-order" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
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
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-4 drop-shadow-lg">
          FLASH TIMELINE
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
          Journey through the history of The Flash, from Jay Garrick to Barry Allen's return
        </p>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-red-500 to-orange-500"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Event Card */}
                  <div className="ml-20 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:border-orange-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                        <Badge className={`${event.badgeColor} text-white border-0 drop-shadow-lg`}>
                          {event.badge}
                        </Badge>
                        <span className="text-yellow-400 font-bold text-lg drop-shadow-lg">{event.year}</span>
                      </div>
                      <span className="text-white/60 text-sm font-medium drop-shadow-lg">{event.era}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{event.title}</h3>
                    <p className="text-white/80 leading-relaxed drop-shadow-lg">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Speed Force Legacy Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-xl p-8 text-center shadow-2xl shadow-red-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              SPEED FORCE LEGACY
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
              From Jay Garrick's accidental discovery to Barry Allen's heroic sacrifice and triumphant return, 
              the legacy of The Flash spans generations. Each speedster has contributed to the rich tapestry 
              of heroism, connecting past, present, and future through the infinite power of the Speed Force. 
              The Flash isn't just a hero—he's a symbol of hope that transcends time itself.
            </p>
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
          <p className="text-white/50 text-xs mt-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            This is a fan-made website and is not affiliated with DC Comics.
          </p>
        </div>
      </footer>
    </div>
  )
}
