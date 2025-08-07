import Link from "next/link"
import { Zap, Users, Trophy, Clock, Target, BookOpen, Shield, Brain, GraduationCap } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-yellow-600">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-yellow-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-4 md:mr-6">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 animate-pulse" />
              <span className="text-lg md:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">THE FLASH</span>
            </div>
            <div className="flex space-x-2 md:space-x-3 text-xs md:text-sm">
              <Link href="/" className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center mt-20">
        <div className="mb-8">
          <div className="inline-block p-6 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 shadow-2xl shadow-yellow-500/50 animate-pulse">
            <Zap className="h-16 w-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-orange-600 mb-6 animate-pulse text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          THE FLASH HUB
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Enter the world of Barry Allen, the Fastest Man Alive. Explore his rogues gallery, legendary achievements, and test your speed against the Scarlet Speedster himself.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-red-500/50 transform hover:scale-105 transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <Zap className="mr-2 h-5 w-5" />
            Speed Force Powered
          </Button>
          <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Interactive Experience
          </Button>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6 max-w-7xl mx-auto">
          <Link href="/heroes" className="group">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col leading-8 h-72">
              <div className="flex-1 flex flex-col items-center justify-center">
                <Shield className="h-12 w-12 text-blue-400 mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Heroes Gallery</h3>
                <p className="text-white/70 mb-4 text-center text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Meet the speedster heroes</p>
              </div>
              <div className="mt-auto px-2">
                <Button variant="outline" size="sm" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white w-full">
                  Explore
                </Button>
              </div>
            </div>
          </Link>

          <Link href="/villains" className="group">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:border-red-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 flex flex-col h-72">
              <div className="flex-1 flex flex-col items-center justify-center">
                <Users className="h-12 w-12 text-red-400 mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Villains Gallery</h3>
                <p className="text-white/70 mb-4 text-center text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Meet the rogues who challenge the Flash</p>
              </div>
              <div className="mt-auto px-2">
                <Button variant="outline" size="sm" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white w-full">
                  Explore
                </Button>
              </div>
            </div>
          </Link>

          <Link href="/feats" className="group">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30 flex flex-col h-72">
              <div className="flex-1 flex flex-col items-center justify-center">
                <Trophy className="h-12 w-12 text-yellow-400 mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Legendary Feats</h3>
                <p className="text-white/70 mb-4 text-center text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Discover Barry's incredible powers</p>
              </div>
              <div className="mt-auto px-2">
                <Button variant="outline" size="sm" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white w-full">
                  Explore
                </Button>
              </div>
            </div>
          </Link>

          <Link href="/timeline" className="group">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:border-orange-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 flex flex-col h-72">
              <div className="flex-1 flex flex-col items-center justify-center">
                <Clock className="h-12 w-12 text-orange-400 mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Flash Timeline</h3>
                <p className="text-white/70 mb-4 text-center text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Journey through Flash history</p>
              </div>
              <div className="mt-auto px-2">
                <Button variant="outline" size="sm" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white w-full">
                  Explore
                </Button>
              </div>
            </div>
          </Link>

          <Link href="/reading-order" className="group">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex flex-col h-72">
              <div className="flex-1 flex flex-col items-center justify-center">
                <BookOpen className="h-12 w-12 text-purple-400 mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Reading Order</h3>
                <p className="text-white/70 mb-4 text-center text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Complete Barry Allen comic guide</p>
              </div>
              <div className="mt-auto px-2">
                <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full">
                  Explore
                </Button>
              </div>
            </div>
          </Link>

          <Link href="/knowledge" className="group">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 flex flex-col h-72">
              <div className="flex-1 flex flex-col items-center justify-center">
                <GraduationCap className="h-12 w-12 text-green-400 mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">General Knowledge</h3>
                <p className="text-white/70 mb-4 text-center text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Learn Flash history and lore</p>
              </div>
              <div className="mt-auto px-2">
                <Button variant="outline" size="sm" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white w-full">
                  Explore
                </Button>
              </div>
            </div>
          </Link>

          <Link href="/flashoot" className="group">
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30 hover:border-pink-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 flex flex-col h-72">
              <div className="flex-1 flex flex-col items-center justify-center">
                <Brain className="h-12 w-12 text-pink-400 mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Flashoot!</h3>
                <p className="text-white/70 mb-4 text-center text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Test your Flash knowledge</p>
              </div>
              <div className="mt-auto px-2">
                <Button variant="outline" size="sm" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white w-full">
                  Explore
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-yellow-500/30 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">The Flash Hub</span>
            </div>
            <div className="text-white/70 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Developed by: <span className="text-yellow-400 font-semibold">Escher Presant</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-white/50 text-xs font-thin drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              This is a fan-made DC Comics tribute website. All characters and content are property of DC Comics.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
