import Link from "next/link"
import { Zap } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const villains = [
  {
    name: "Reverse Flash",
    relationship: "Arch Nemesis",
    relationshipColor: "bg-red-500",
    threat: "Extreme",
    threatColor: "bg-red-600",
    abilities: "Super Speed, Time Travel, Reality Manipulation, Negative Speed Force",
    debut: "The Flash #139 (1963)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-8-2025_234337_www.bing.com-qsq1Sw253eFm7QEcnVIO7tKQARuOBx.jpeg",
    description: "Eobard Thawne, the man who hates Barry Allen across all timelines. Born in the 25th century, Thawne was originally a fan of the Flash who became obsessed with becoming his hero. When he discovered he was destined to become Barry's greatest enemy, his admiration turned to pure hatred. Possessing all of Barry's powers but fueled by the Negative Speed Force, Reverse Flash can manipulate time itself, erase people from existence, and has killed Barry's mother, fundamentally altering his life. His yellow suit crackling with red lightning serves as a twisted mirror of the Flash's heroic legacy."
  },
  {
    name: "Zoom",
    relationship: "Primary Adversary",
    relationshipColor: "bg-red-300",
    threat: "Extreme",
    threatColor: "bg-red-600",
    abilities: "Time Manipulation, Super Speed, Reality Alteration, Temporal Duplication",
    debut: "The Flash: Secret Files & Origins #3 (2001)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_6-8-2025_22558_www.bing.com-RLvvrayN5IgcnZDXsZH4p35W98OWXi.jpeg",
    description: "Hunter Zolomon, the second Zoom, is a former FBI profiler who became obsessed with making heroes better through tragedy. Unlike other speedsters, Zoom doesn't tap into the Speed Force but manipulates time around himself, making him appear to move at super-speed. His yellow costume with red accents mirrors the Reverse Flash, but his motivations are twisted - he believes that by causing heroes to suffer, he makes them stronger. Zoom's ability to alter time makes him one of the most dangerous foes the Flash has ever faced, capable of undoing victories and rewriting history itself."
  },
  {
    name: "Savitar",
    relationship: "Primary Adversary",
    relationshipColor: "bg-red-300",
    threat: "Extreme",
    threatColor: "bg-red-600",
    abilities: "Speed Force Mastery, Energy Projection, Immortality, Cult Leadership",
    debut: "The Flash #108 (1995)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_6-8-2025_2273_www.bing.com-esfmjoUHKRZc2AvoUYKy3ykFSCWKr7.jpeg",
    description: "Once a Cold War pilot who gained speed powers in a test flight, Savitar became obsessed with speed and formed a cult around the Speed Force itself. His metallic armor and imposing presence make him one of the most visually striking Flash villains. Savitar believes that speed is the ultimate power and that he is destined to rule over all speedsters. His mastery of the Speed Force allows him to grant speed powers to others, creating an army of followers. Unlike other speedsters who see their powers as a gift or curse, Savitar views speed as a religion, making him a fanatical and unpredictable enemy."
  },
  {
    name: "Godspeed",
    relationship: "Main Villain",
    relationshipColor: "bg-purple-600",
    threat: "High",
    threatColor: "bg-orange-500",
    abilities: "Super Speed, Speed Theft, Lightning Generation, Speed Force Manipulation",
    debut: "The Flash: Rebirth #1 (2016)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_6-8-2025_22434_www.bing.com-QF6PmiJodVbIhrQlQvTigZ3ZFZ9oQm.jpeg",
    description: "August Heart was Barry Allen's friend and colleague at the CCPD who gained speed powers during a Speed Force storm. Initially wanting to be a hero like Barry, August's methods became increasingly violent as he sought to eliminate all criminals permanently. His white and gold costume represents his twisted sense of justice - he believes he's doing God's work by killing criminals rather than imprisoning them. Godspeed can steal speed from other speedsters and has the ability to split himself into multiple copies. His fall from friend to foe makes him one of Barry's most personal and tragic enemies."
  },
  {
    name: "Captain Cold",
    relationship: "Rogues Leader",
    relationshipColor: "bg-blue-800",
    threat: "High",
    threatColor: "bg-orange-500",
    abilities: "Absolute Zero Gun, Tactical Genius, Leadership, Ice Manipulation",
    debut: "Showcase #8 (1957)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-8-2025_234458_www.bing.com-MEO5RNwpy95KGZ3Jzh1C5nZlfiHb6s.jpeg",
    description: "Leonard Snart leads the Rogues with his signature cold gun and tactical brilliance. Born into poverty in Central City, Snart turned to crime early but developed a strict code of honor that governs the Rogues. His absolute zero gun can freeze anything to -459°F, creating ice barriers, freezing the Flash mid-run, and even slowing down his molecular vibration. As the undisputed leader of the Rogues, Cold maintains discipline among his team and has earned a grudging respect from the Flash himself. His blue parka and goggles have become iconic symbols of organized crime in Central City."
  },
  {
    name: "Heat Wave",
    relationship: "Rogues Member",
    relationshipColor: "bg-blue-400",
    threat: "High",
    threatColor: "bg-orange-500",
    abilities: "Flame Projector, Pyrokinesis, Heat Immunity, Fire Manipulation",
    debut: "The Flash #140 (1963)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-8-2025_234553_www.bing.com-yGIrsJK4WT3jbQ2tPczsPMCJB7xbMn.jpeg",
    description: "Mick Rory's obsession with fire makes him one of the most dangerous and unpredictable members of the Rogues. Born with an uncontrollable fascination with flames, Rory's pyromania led him to a life of arson and crime. His advanced flame projector can generate temperatures exceeding 3000°F, melt through virtually any material, and create walls of fire. Unlike his partner Captain Cold, Heat Wave struggles with his destructive impulses and has a more volatile relationship with both his teammates and enemies. His heat-resistant suit allows him to walk through his own flames unharmed, making him a formidable opponent in any confrontation."
  },
  {
    name: "Gorilla Grodd",
    relationship: "Main Villain",
    relationshipColor: "bg-purple-600",
    threat: "Extreme",
    threatColor: "bg-red-600",
    abilities: "Telepathy, Super Strength, Genius Intellect, Mind Control, Immortality",
    debut: "The Flash #106 (1959)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-8-2025_234818_www.bing.com-OZIlRVmljkiuOT5ArsrpB48KhKWQLS.jpeg",
    description: "The super-intelligent gorilla from Gorilla City represents one of the Flash's most formidable and recurring threats. Enhanced by the same meteor that gave his species intelligence, Grodd possesses telepathic powers that can control minds, read thoughts, and project devastating mental attacks. Standing over 8 feet tall with the strength of a dozen men, he combines brute force with a genius-level intellect that has allowed him to conquer cities, travel through time, and even achieve temporary immortality. His hatred for humanity and obsession with ruling over 'inferior' beings has led to countless schemes to destroy Central City and eliminate the Flash. Grodd's imposing presence and ruthless ambition make him a threat on both personal and global scales."
  },
  {
    name: "Mirror Master",
    relationship: "Rogues Member",
    relationshipColor: "bg-blue-400",
    threat: "Moderate",
    threatColor: "bg-yellow-500",
    abilities: "Mirror Dimension Travel, Illusions, Reflection Manipulation, Dimensional Portals",
    debut: "The Flash #105 (1959)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-8-2025_23474_www.bing.com-ViAJSRT7sMRW1MjuDwNjOOMHFMXVfc.jpeg",
    description: "Sam Scudder uses mirrors and reflective surfaces to create some of the most creative and disorienting traps the Flash has ever faced. Originally a simple criminal, Scudder discovered the secrets of mirror manipulation while hiding in a hall of mirrors. His mastery over reflective surfaces allows him to travel instantly between any mirrors, create perfect duplicates, trap enemies in mirror dimensions, and bend light to become invisible. The Mirror Master's green and orange costume reflects his theatrical nature, and his mirror gun can transform any surface into a portal or weapon. While not as physically threatening as other Rogues, his ability to attack from unexpected angles and create elaborate mirror mazes makes him a constant tactical challenge."
  },
  {
    name: "Weather Wizard",
    relationship: "Rogues Member",
    relationshipColor: "bg-blue-400",
    threat: "High",
    threatColor: "bg-orange-500",
    abilities: "Weather Control, Storm Generation, Flight, Lightning Manipulation, Atmospheric Pressure Control",
    debut: "The Flash #110 (1959)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_5-8-2025_234918_www.bing.com-s3cmAWydbDUhBKmxdGZ9ADPBHkweLE.jpeg",
    description: "Mark Mardon controls the very forces of nature with his mystical weather wand, making him one of the most environmentally dangerous members of the Rogues. After stealing his brother's weather control research, Mardon gained the ability to manipulate atmospheric conditions on a massive scale. He can summon tornadoes, create blizzards, generate lightning storms, and even fly by riding wind currents. His green costume with lightning bolt motifs reflects his mastery over electrical storms, and his weather wand serves as both a focus for his powers and a symbol of his authority over the elements. Weather Wizard's attacks can affect entire city blocks, making him a threat not just to the Flash but to all of Central City's citizens."
  },
  {
    name: "Pied Piper",
    relationship: "Reformed Rogue",
    relationshipColor: "bg-blue-300",
    threat: "Moderate",
    threatColor: "bg-yellow-500",
    abilities: "Sonic Manipulation, Hypnotic Music, Sound Wave Generation, Mind Control",
    debut: "The Flash #106 (1959)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_6-8-2025_22028_www.bing.com-h0xnsWgbdxtvG6Gke73CO35KyQxsBs.jpeg",
    description: "Hartley Rathaway, the Pied Piper, is a former member of the Rogues who has since reformed and occasionally aids the Flash. Born into wealth but rejected by his family for his sexuality, Hartley turned to crime using advanced sonic technology. His flute-like devices can generate hypnotic melodies that control minds, create destructive sound waves, or even open dimensional portals. His blue and orange costume reflects his theatrical nature and musical theme. Unlike many Flash villains, Pied Piper has shown the capacity for redemption, evolving from enemy to reluctant ally, making him one of the more complex characters in the Flash's rogues gallery."
  },
  {
    name: "Trickster",
    relationship: "Wild Card",
    relationshipColor: "bg-orange-500",
    threat: "Moderate",
    threatColor: "bg-yellow-500",
    abilities: "Gadgetry, Acrobatics, Illusions, Explosive Devices, Aerial Combat",
    debut: "The Flash #113 (1960)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_6-8-2025_22631_www.bing.com-L9T6laCiU5i005KEuWA5DCnB2mpcGS.jpeg",
    description: "James Jesse, the original Trickster, brings chaos and mischief to Central City with his arsenal of deadly toys and acrobatic skills. A former circus performer turned criminal, Jesse combines his natural agility with an array of trick devices including exploding teddy bears, razor-sharp playing cards, and anti-gravity boots. His green polka-dotted costume and jester-like appearance mask a brilliant criminal mind capable of elaborate schemes. The Trickster views crime as performance art, often leaving clues and riddles for the Flash to solve. His unpredictable nature and theatrical crimes make him both dangerous and oddly entertaining, embodying the chaotic spirit of a true trickster."
  },
  {
    name: "Turtle",
    relationship: "Minor Disruption",
    relationshipColor: "bg-gray-500",
    threat: "Minor",
    threatColor: "bg-green-500",
    abilities: "Slowness Field Generation, Time Deceleration, Durability, Strategic Planning",
    debut: "All-Flash #1 (1941)",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_6-8-2025_22111_www.bing.com-cNiBHZYOOKEMO7JyjXLD5Y2hAYnf7H.jpeg",
    description: "The Turtle is the antithesis of everything the Flash represents - where Barry is fast, the Turtle is deliberately slow. This massive, methodical villain possesses the ability to slow down everything around him, creating fields of decelerated time that can trap even the Flash. His green, hulking appearance and turtle-like features reflect his patient, calculated approach to crime. Unlike other Flash villains who rely on speed or flashy powers, the Turtle wins through careful planning and his unique ability to negate the Flash's greatest advantage. His slowness field can affect entire city blocks, making him a uniquely challenging opponent who forces the Flash to think rather than simply run."
  }
]

const getThreatBadgeVariant = (threat: string) => {
  switch (threat) {
    case "Extreme": return "destructive"
    case "High": return "default" 
    case "Moderate": return "secondary"
    case "Minor": return "outline"
    default: return "outline"
  }
}

export default function VillainsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-yellow-600">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-yellow-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-4 md:mr-8">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 animate-pulse drop-shadow-lg" />
              <span className="text-lg md:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">THE FLASH</span>
            </div>
            <div className="flex space-x-2 md:space-x-4 text-xs md:text-base">
              <Link href="/" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🏠 Home
              </Link>
              <Link href="/heroes" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🦸 Heroes
              </Link>
              <Link href="/villains" className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
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
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          VILLAINS GALLERY
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Meet the rogues, villains, and adversaries who challenge the Fastest Man Alive
        </p>
      </section>

      {/* Villains Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {villains.map((villain, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-sm rounded-xl overflow-hidden border border-red-500/30 hover:border-red-500 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
              <div className="aspect-[2/3] relative overflow-hidden">
                <img 
                  src={villain.image || "/placeholder.svg"} 
                  alt={villain.name}
                  className="w-full h-full object-contain bg-gradient-to-b from-gray-800 to-gray-900"
                />
                <div className="absolute top-2 md:top-4 right-2 md:right-4 space-y-2">
                  <Badge 
                    variant={getThreatBadgeVariant(villain.threat)}
                    className="bg-black/70 backdrop-blur-sm block text-xs md:text-sm"
                  >
                    {villain.threat} Threat
                  </Badge>
                </div>
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{villain.name}</h3>
                
                <div className="flex flex-col space-y-2 mb-4">
                  <Badge className={`${villain.relationshipColor} text-white border-0 w-fit text-xs md:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
                    {villain.relationship}
                  </Badge>
                  <Badge className={`${villain.threatColor} text-white border-0 w-fit text-xs md:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
                    {villain.threat} Threat Level
                  </Badge>
                </div>
                
                <p className="text-white/80 mb-4 text-xs md:text-sm leading-relaxed line-clamp-4 md:line-clamp-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {villain.description}
                </p>
                
                <div className="space-y-2 text-xs md:text-sm">
                  <div>
                    <span className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Abilities: </span> 
                    <span className="text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{villain.abilities}</span>
                  </div>
                  <div>
                    <span className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">First Appearance: </span> 
                    <span className="text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{villain.debut}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm border-t border-yellow-500/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-yellow-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
              <span className="text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">The Flash Hub</span>
            </div>
            <div className="text-white/70 text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Developed by: <span className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Escher Presant</span>
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
