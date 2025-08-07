import Link from "next/link"
import { Zap, GraduationCap, BookOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function KnowledgePage() {
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
              <Link href="/knowledge" className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
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
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 mb-8 drop-shadow-2xl">
          FLASH GENERAL KNOWLEDGE
        </h1>
        
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 max-w-2xl mx-auto mb-8">
          <div className="p-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl shadow-green-500/50 inline-block mb-6">
            <GraduationCap className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Learn About The Flash Universe</h2>
          <p className="text-white/90 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Dive deep into the rich history, complex characters, and evolving storytelling of The Flash comics. 
            From Barry Allen's origins to the development of the Speed Force mythology, discover the fascinating 
            world behind the Fastest Man Alive.
          </p>
        </div>
      </section>

      {/* Knowledge Sections */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30 text-left">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Barry Allen's History and Origin</h2>
            <p className="text-white/90 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Barry Allen debuted in Showcase #4 (1956) as the second character to bear the Flash name, created by writer Robert Kanigher and artist Carmine Infantino. A forensic scientist for the Central City Police Department, Barry gained his powers when lightning struck his laboratory while he was working with chemicals, dousing him in electrified substances. This scientific approach to his origin reflected the Silver Age's emphasis on science fiction elements. Barry's methodical, scientific mind distinguished him from his Golden Age predecessor Jay Garrick, allowing him to discover new applications of super-speed through careful experimentation. His civilian identity as a forensic scientist also provided unique storytelling opportunities, as Barry could use his scientific knowledge both in his day job solving crimes and as The Flash fighting supervillains.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 text-left">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">The Flash Family Legacy</h2>
            <p className="text-white/90 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              The Flash legacy spans multiple generations, beginning with Jay Garrick in 1940, who gained his powers by inhaling hard water vapors. Barry Allen revitalized the concept in 1956, introducing the Speed Force concept that would later become central to all speedster mythology. Wally West, Barry's nephew and the first Kid Flash, eventually surpassed his mentor to become the fastest Flash ever. Bart Allen (Impulse) brought time-travel elements from the 30th century, while characters like Max Mercury added mystical and philosophical dimensions to speed powers. Each Flash has contributed unique elements: Jay's wisdom and experience, Barry's scientific approach, Wally's emotional connection to the Speed Force, and Bart's impulsive energy. This multi-generational approach allows the Flash concept to evolve while maintaining core themes of heroism, family, and the responsibility that comes with great power.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-red-500/30 text-left">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Villain Origins and Development</h2>
            <p className="text-white/90 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              The Flash's rogues gallery developed alongside the character, with each villain designed to challenge different aspects of super-speed. Captain Cold (1957) and his absolute zero gun provided a scientific counter to Barry's speed, while Heat Wave offered the opposite extreme. Mirror Master introduced dimensional and optical challenges, Weather Wizard brought environmental threats, and Trickster added chaos and unpredictability. The Reverse Flash, introduced in 1963, became Barry's perfect opposite - a speedster fueled by hatred rather than heroism. Gorilla Grodd combined physical strength with telepathic powers, creating a threat that couldn't be solved by speed alone. These villains often formed the Rogues, a professional criminal organization with their own code of ethics, making them more than simple antagonists. The development of these characters reflected comic book storytelling's evolution from simple good-versus-evil conflicts to more complex moral landscapes.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/30 text-left">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Silver Age vs Modern Age Differences</h2>
            <p className="text-white/90 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              The Silver Age Flash (1956-1970) emphasized scientific explanations for super-speed, with Barry often explaining the physics behind his abilities to readers. Stories were generally lighter in tone, focusing on creative uses of speed powers and colorful villains with themed gimmicks. The Speed Force didn't exist yet - Barry's powers were simply attributed to his unique physiology. Modern Age Flash stories, beginning in the 1980s, introduced darker themes, complex continuity, and the Speed Force as a mystical energy dimension. Time travel became more prominent and dangerous, with events like Flashpoint showing the catastrophic consequences of altering history. Character development became more sophisticated, exploring Barry's relationships, trauma, and the psychological toll of being a hero. The science became more fantastical, moving from pseudo-realistic explanations to cosmic-level concepts involving multiversal travel and reality manipulation.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-orange-500/30 text-left">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">DC's Editorial Evolution and Creative Decisions</h2>
            <p className="text-white/90 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              DC's handling of The Flash reflects broader changes in comic book publishing and storytelling. The decision to kill Barry Allen in Crisis on Infinite Earths (1985) was revolutionary - major heroes rarely died permanently. This allowed Wally West to grow from sidekick to main character, exploring themes of legacy and living up to impossible standards. Barry's return in Final Crisis (2008) reflected DC's recognition that some characters are too iconic to remain dead, but also the challenge of reintegrating classic characters into modern continuity. The New 52 reboot (2011) attempted to streamline Flash continuity while maintaining core elements, showing DC's ongoing struggle between accessibility for new readers and respect for longtime fans. Flashpoint (2011) demonstrated how The Flash could drive company-wide changes, using time travel as a mechanism for universe-wide reboots. These decisions reflect comic books' evolution from simple entertainment to complex, interconnected narratives that must balance nostalgia, innovation, and commercial viability.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-green-600 to-blue-500 rounded-xl p-8 text-center shadow-2xl shadow-green-500/30">
            <BookOpen className="h-16 w-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Ready to Test Your Knowledge?
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Now that you've learned about The Flash universe, put your knowledge to the test with Flashoot! 
              Our comprehensive quiz covers everything from Barry Allen's origins to the complex mythology 
              of the Speed Force.
            </p>
            <Link href="/flashoot">
              <Button className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white px-8 py-4 text-xl font-semibold shadow-lg shadow-yellow-500/50 transform hover:scale-105 transition-all drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Take the Quiz!
              </Button>
            </Link>
          </div>
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
          <p className="text-white/50 text-xs mt-4 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            This website is made by a fan, for fans. All rights belong to their respective owners.
          </p>
        </div>
      </footer>
    </div>
  )
}
