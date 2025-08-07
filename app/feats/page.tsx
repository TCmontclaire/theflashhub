import Link from "next/link"
import { Zap, Clock, Bolt, Globe, Eye, Shield } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const feats = [
  {
    title: "Faster Than Light",
    achievement: "Outran Death Itself",
    description: "Barry has achieved speeds that transcend the physical laws of the universe, moving faster than light itself and even outrunning the concept of death.",
    tag: "Speed",
    tagColor: "bg-red-500",
    icon: Bolt
  },
  {
    title: "Time Travel",
    achievement: "Broke the Time Barrier",
    description: "The Flash can run so fast that he breaks through the time barrier, allowing him to travel to different points in history and alternate timelines.",
    tag: "Temporal",
    tagColor: "bg-blue-500",
    icon: Clock
  },
  {
    title: "Dimensional Running",
    achievement: "Crossed Infinite Earths",
    description: "Barry can vibrate his molecules at specific frequencies to phase between dimensions and parallel universes, accessing the infinite multiverse.",
    tag: "Dimensional",
    tagColor: "bg-purple-500",
    icon: Globe
  },
  {
    title: "Lightning Generation",
    achievement: "Channeled Pure Speed Force",
    description: "The Flash can generate and throw lightning bolts created from the Speed Force itself, capable of stunning even the most powerful opponents.",
    tag: "Energy",
    tagColor: "bg-yellow-500",
    icon: Zap
  },
  {
    title: "Molecular Vibration",
    achievement: "Phased Through Reality",
    description: "By vibrating his molecules at superhuman frequencies, Barry can phase through solid matter, becoming intangible at will.",
    tag: "Phasing",
    tagColor: "bg-green-500",
    icon: Eye
  },
  {
    title: "Speed Force Aura",
    achievement: "Protected Others at Light Speed",
    description: "The Speed Force creates a protective aura around Barry and anyone he carries, allowing them to survive the incredible forces of super-speed travel.",
    tag: "Protection",
    tagColor: "bg-orange-500",
    icon: Shield
  }
]

export default function FeatsPage() {
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
              <Link href="/feats" className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🏆 Feats
              </Link>
              <Link href="/timeline" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
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
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 mb-4 drop-shadow-lg">
          LEGENDARY FEATS
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
          Discover the incredible powers and achievements of the Fastest Man Alive
        </p>
      </section>

      {/* Feats Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feats.map((feat, index) => {
            const IconComponent = feat.icon
            return (
              <div key={index} className="bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30 hover:border-yellow-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <Badge className={`${feat.tagColor} text-white border-0 drop-shadow-lg`}>
                    {feat.tag}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{feat.title}</h3>
                
                <div className="mb-4">
                  <span className="text-yellow-400 font-semibold text-lg drop-shadow-lg">Achievement: </span> 
                  <span className="text-white font-medium drop-shadow-lg">{feat.achievement}</span>
                </div>
                
                <p className="text-white/80 leading-relaxed drop-shadow-lg">
                  {feat.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-yellow-500/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-semibold drop-shadow-lg">The Flash Hub</span>
            </div>
            <div className="text-white/70 text-sm drop-shadow-lg">
              Developed by: <span className="text-yellow-400 font-semibold drop-shadow-lg">Escher Presant</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-white/50 text-xs font-thin drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            This is a fan-made DC Comics tribute website. All characters and content are property of DC Comics.
          </p>
        </div>
      </footer>
    </div>
  )
}
