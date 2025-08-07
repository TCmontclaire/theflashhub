import Link from "next/link"
import { Zap, Shield } from 'lucide-react'

const heroes = [
  {
    name: "The Flash (Barry Allen)",
    abilities: "Super Speed, Time Travel, Speed Force Mastery, Lightning Generation, Molecular Vibration",
    debut: "Showcase #4 (1956)",
    image: "/barry-allen-hero.png",
    description: "Barry Allen is the most famous Flash, the Scarlet Speedster who defined what it means to be the Fastest Man Alive. A forensic scientist for the Central City Police Department, Barry gained his powers when lightning struck his lab while he was working with chemicals. His scientific mind and methodical approach to heroism revolutionized how super-speed could be used, discovering applications from time travel to dimensional phasing. Barry's connection to the Speed Force is so profound that he essentially became one with it during Crisis on Infinite Earths, sacrificing himself to save the multiverse. His return years later proved that some heroes are too important to stay dead, and his legacy continues to inspire speedsters across all realities."
  },
  {
    name: "Jay Garrick",
    abilities: "Super Speed, Enhanced Reflexes, Accelerated Healing, Dimensional Travel",
    debut: "Flash Comics #1 (1940)",
    image: "/jay-garrick-hero.png",
    description: "Jay Garrick was the very first Flash, gaining his powers in 1940 after inhaling hard water vapors during a laboratory accident. As a college student turned superhero, Jay established the template for all speedsters who would follow. His distinctive winged helmet and red shirt became iconic symbols of heroism during the Golden Age of comics. Unlike later Flashes who tap into the Speed Force, Jay's powers stem from a different source, making him unique among speedsters. His wisdom and experience as the elder statesman of the Flash family make him a mentor figure to younger speedsters, and his ability to travel between dimensions has proven crucial in many multiversal crises."
  },
  {
    name: "Kid Flash (Wally West)",
    abilities: "Super Speed, Speed Force Connection, Speed Lending, Molecular Vibration",
    debut: "The Flash #110 (1959)",
    image: "/kid-flash-wally.png",
    description: "Wally West, Barry Allen's nephew, was the first Kid Flash and eventually became the third person to take on the mantle of The Flash. Originally gaining his powers in the same accident that gave Barry his abilities, Wally started as Barry's sidekick before growing into a hero who would surpass even his mentor's achievements. His deep connection to the Speed Force allowed him to discover new applications of super-speed that Barry never imagined. Wally's journey from sidekick to successor represents one of the most successful legacy transitions in comic book history, proving that sometimes the student can indeed become greater than the teacher."
  },
  {
    name: "Max Mercury",
    abilities: "Super Speed, Speed Force Mastery, Time Travel, Dimensional Awareness, Longevity",
    debut: "Quality Comics #5 (1940)",
    image: "/max-mercury-hero.png",
    description: "Max Mercury, known as the 'Zen Master of Speed,' is one of the most enigmatic and powerful speedsters in the Flash family. Originally a 19th-century cavalry scout who gained speed powers, Max has spent over a century mastering the Speed Force in ways that other speedsters can barely comprehend. His deep philosophical understanding of speed and time makes him the perfect mentor for young speedsters like Impulse. Max's ability to exist partially outside of normal time flow gives him unique insights into the nature of the Speed Force itself. His white and black costume reflects his role as a bridge between the physical world and the Speed Force dimension, and his teachings have shaped multiple generations of speedster heroes."
  },
  {
    name: "Impulse",
    abilities: "Super Speed, Time Travel Resistance, Accelerated Healing, Speed Force Immunity",
    debut: "The Flash #92 (1994)",
    image: "/impulse-hero.png",
    description: "Bart Allen, grandson of Barry Allen from the 30th century, came back in time as the hyperactive speedster known as Impulse. Born with an accelerated aging process due to his Speed Force connection, Bart lived his early life in virtual reality to slow his aging until he could be brought to the present. His impulsive nature and tendency to act without thinking earned him his codename, but beneath his reckless exterior lies a hero with one of the strongest connections to the Speed Force ever recorded. Bart's unique temporal origin and his ability to resist time-based attacks make him invaluable in battles against time-manipulating villains."
  },
  {
    name: "Kid Flash (Wallace West)",
    abilities: "Super Speed, Speed Force Connection, Energy Absorption, Electromagnetic Manipulation",
    debut: "The Flash Annual #3 (2014)",
    image: "/kid-flash-wallace.png",
    description: "Wallace West, cousin to the original Wally West, represents the newest generation of speedster heroes. Gaining his powers during a Speed Force storm, Wallace initially struggled with controlling his abilities and understanding his place in the Flash legacy. His connection to the Speed Force manifests differently than other speedsters, allowing him to absorb and redirect various forms of energy. As the current Kid Flash, Wallace carries on the proud tradition of speedster sidekicks while forging his own unique path. His modern perspective and fresh approach to heroism bring new energy to the Flash family, proving that the legacy of speed will continue to evolve with each new generation."
  },
  {
    name: "XS",
    abilities: "Super Speed, Time Travel, Speed Force Projection, Molecular Acceleration, Future Knowledge",
    debut: "Legionnaires #0 (1994)",
    image: "/xs-hero.png",
    description: "Jenni Ognats, granddaughter of Barry Allen, comes from the 30th century as the speedster known as XS. As a member of the Legion of Super-Heroes, she brings future knowledge and advanced understanding of Speed Force applications to present-day conflicts. Her yellow and white costume reflects her optimistic nature and her role as a beacon of hope from a better tomorrow. XS's ability to project Speed Force energy and accelerate molecular structures makes her uniquely versatile among speedsters. Her time-traveling adventures and deep knowledge of future events make her an invaluable ally in preventing temporal catastrophes, while her youthful enthusiasm reminds everyone why the Flash legacy continues to inspire heroes across all timelines."
  },
  {
    name: "Jesse Quick",
    abilities: "Super Speed, Flight, Enhanced Strength, Speed Force Connection, Velocity Formula",
    debut: "Justice Society of America #1 (1992)",
    image: "/jesse-quick-hero.png",
    description: "Jesse Chambers, daughter of speedster Johnny Quick and Liberty Belle, inherited both speed powers and her father's mathematical speed formula. Unlike other speedsters who rely purely on the Speed Force, Jesse can access her powers through her father's velocity equation: 3X2(9YZ)4A. Her unique dual heritage gives her not only super-speed but also flight and enhanced strength from her mother's side. As Jesse Quick, she has served with both the Justice Society and Titans, proving herself as both a capable hero and brilliant scientist. Her red and yellow costume pays homage to the Flash legacy while establishing her own distinct identity in the speedster family."
  }
]

export default function HeroesPage() {
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
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🏠 Home
              </Link>
              <Link href="/heroes" className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
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

      {/* Header */}
      <section className="container mx-auto px-4 py-8 md:py-12 text-center mt-16 md:mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400 mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          HEROES GALLERY
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Meet the speedster heroes who carry on the legacy of The Flash
        </p>
      </section>

      {/* Heroes Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {heroes.map((hero, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/30 hover:border-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="aspect-[2/3] relative overflow-hidden">
                <img 
                  src={hero.image || "/placeholder.svg"} 
                  alt={hero.name}
                  className="w-full h-full object-contain bg-gradient-to-b from-gray-800 to-gray-900"
                />
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{hero.name}</h3>
                
                <p className="text-white/90 mb-4 text-xs md:text-sm leading-relaxed line-clamp-4 md:line-clamp-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {hero.description}
                </p>
                
                <div className="space-y-2 text-xs md:text-sm">
                  <div>
                    <span className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Abilities: </span>
                    <span className="text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{hero.abilities}</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">First Appearance: </span>
                    <span className="text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{hero.debut}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
