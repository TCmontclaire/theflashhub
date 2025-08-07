"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Zap, Check, X, Target, Trophy } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  // Barry Allen History & Origins
  {
    id: 1,
    question: "What was Barry Allen's profession before becoming The Flash?",
    options: ["Police Detective", "Forensic Scientist", "Newspaper Reporter", "College Professor"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "In what year did Barry Allen first appear as The Flash?",
    options: ["1940", "1956", "1961", "1985"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What caused Barry Allen to gain his super-speed powers?",
    options: ["Radioactive spider bite", "Lightning strike while working with chemicals", "Exposure to cosmic rays", "Drinking a speed formula"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Who created the Barry Allen version of The Flash?",
    options: ["Gardner Fox and Harry Lampert", "Robert Kanigher and Carmine Infantino", "Mark Waid and Mike Wieringo", "Geoff Johns and Ethan Van Sciver"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is Barry Allen's civilian job location?",
    options: ["Keystone City Police", "Central City Police Department", "Star City Labs", "Coast City Forensics"],
    correctAnswer: 1
  },

  // Flash Family & Other Speedsters
  {
    id: 6,
    question: "Who was the first person to bear the name 'The Flash'?",
    options: ["Barry Allen", "Wally West", "Jay Garrick", "Bart Allen"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Which Flash is known as 'Impulse'?",
    options: ["Wallace West", "Wally West", "Bart Allen", "Jay Garrick"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "What is the relationship between Barry Allen and Wally West?",
    options: ["Father and son", "Uncle and nephew", "Brothers", "Mentor and student only"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Who is known as the 'Zen Master of Speed'?",
    options: ["Jay Garrick", "Max Mercury", "Johnny Quick", "Jesse Quick"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What is XS's real name?",
    options: ["Jenni Ognats", "Jesse Quick", "Liberty Belle", "Trajectory"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "How did Jay Garrick gain his super-speed powers?",
    options: ["Lightning strike", "Inhaling hard water vapors", "Speed Force storm", "Chemical explosion"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which speedster is from the 30th century?",
    options: ["Wally West", "Bart Allen", "Wallace West", "Max Mercury"],
    correctAnswer: 1
  },

  // Speed Force & Powers
  {
    id: 13,
    question: "What is the name of the extra-dimensional energy source that grants speedsters their powers?",
    options: ["Lightning Force", "Speed Force", "Thunder Force", "Flash Force"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Which Flash feat allows Barry to travel between dimensions?",
    options: ["Time Travel", "Lightning Generation", "Dimensional Running", "Speed Force Aura"],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "What ability allows The Flash to phase through solid matter?",
    options: ["Time Travel", "Molecular Vibration", "Lightning Generation", "Speed Lending"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Which speedster power protects others when traveling at super-speed?",
    options: ["Speed Force Aura", "Lightning Generation", "Time Travel", "Molecular Vibration"],
    correctAnswer: 0
  },

  // Villains & Rogues Gallery
  {
    id: 17,
    question: "Who is Barry Allen's arch nemesis?",
    options: ["Captain Cold", "Reverse Flash", "Zoom", "Gorilla Grodd"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which villain leads the Rogues?",
    options: ["Heat Wave", "Captain Cold", "Mirror Master", "Weather Wizard"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "What is Gorilla Grodd's primary ability?",
    options: ["Super Speed", "Telepathy", "Time Travel", "Ice Powers"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "In which comic did Reverse Flash first appear?",
    options: ["The Flash #139 (1963)", "The Flash #105 (1959)", "Showcase #4 (1956)", "The Flash #110 (1959)"],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "Which villain can manipulate weather with a mystical wand?",
    options: ["Mirror Master", "Weather Wizard", "Trickster", "Pied Piper"],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "What is Captain Cold's real name?",
    options: ["Leonard Snart", "Mick Rory", "Sam Scudder", "Mark Mardon"],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "Which villain was originally Barry Allen's friend at CCPD?",
    options: ["Reverse Flash", "Zoom", "Godspeed", "Savitar"],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "What makes the Turtle unique among Flash villains?",
    options: ["He's the fastest", "He slows everything down", "He can fly", "He's invisible"],
    correctAnswer: 1
  },

  // Comic History & Publishing
  {
    id: 25,
    question: "The Silver Age of comics began with which Flash's introduction?",
    options: ["Jay Garrick", "Barry Allen", "Wally West", "Bart Allen"],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "In which major event did Barry Allen sacrifice himself?",
    options: ["Flashpoint", "Crisis on Infinite Earths", "Final Crisis", "Infinite Crisis"],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Which comic event brought Barry Allen back to life?",
    options: ["Flashpoint", "Final Crisis", "Infinite Crisis", "Zero Hour"],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "What year did Barry Allen return from the Speed Force?",
    options: ["2006", "2008", "2010", "2011"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "Which era introduced the concept of the Speed Force?",
    options: ["Golden Age", "Silver Age", "Bronze Age", "Modern Age"],
    correctAnswer: 3
  },

  // Reading Order & Comics
  {
    id: 30,
    question: "What is the first volume in the Barry Allen reading order (2009 Era)?",
    options: ["The Flash: Move Forward", "The Flash: Rebirth", "The Flash: Gorilla Warfare", "Flashpoint"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "Which major Flash storyline reset the DC Universe?",
    options: ["Crisis on Infinite Earths", "Flashpoint", "Final Crisis", "The Flash: Rebirth"],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "What comic series featured the first appearance of Kid Flash?",
    options: ["The Flash #110", "Teen Titans #1", "Showcase #4", "Flash Comics #1"],
    correctAnswer: 0
  },

  // Legendary Feats
  {
    id: 33,
    question: "What is considered The Flash's most incredible speed achievement?",
    options: ["Faster than light", "Outran Death itself", "Time travel", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 34,
    question: "Which Flash ability allows him to generate lightning?",
    options: ["Speed Force connection", "Molecular vibration", "Time manipulation", "Dimensional travel"],
    correctAnswer: 0
  },
  {
    id: 35,
    question: "What happens when The Flash breaks the time barrier?",
    options: ["He gains more speed", "He can time travel", "He loses his powers", "He becomes invisible"],
    correctAnswer: 1
  },

  // Timeline & History
  {
    id: 36,
    question: "When was the Golden Age Flash (Jay Garrick) first introduced?",
    options: ["1938", "1940", "1942", "1945"],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "What major difference exists between Silver Age and Modern Age Flash stories?",
    options: ["Silver Age had simpler science", "Modern Age removed time travel", "Silver Age had no villains", "Modern Age removed the Speed Force"],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "Which Flash era is known for introducing complex continuity and darker themes?",
    options: ["Golden Age", "Silver Age", "Bronze Age", "Modern Age"],
    correctAnswer: 3
  },

  // Advanced Knowledge
  {
    id: 39,
    question: "Why did DC originally kill Barry Allen in 1985?",
    options: ["Low sales", "To make Wally West the main Flash", "Actor contract issues", "Writer preference"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "What was revolutionary about Barry Allen's death in Crisis on Infinite Earths?",
    options: ["It was the first superhero death", "Major heroes rarely died permanently", "It ended the Silver Age", "It created the multiverse"],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "Which Flash has been said to have the strongest connection to the Speed Force?",
    options: ["Barry Allen", "Wally West", "Bart Allen", "Jay Garrick"],
    correctAnswer: 2
  },
  {
    id: 42,
    question: "What makes Jay Garrick unique among speedsters?",
    options: ["He's the fastest", "His powers don't come from the Speed Force", "He can't time travel", "He's immortal"],
    correctAnswer: 1
  },

  // Website-Specific Knowledge
  {
    id: 43,
    question: "According to the Flash Hub, which villain has an 'Extreme' threat level?",
    options: ["Captain Cold", "Mirror Master", "Reverse Flash", "Trickster"],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "How many speedster heroes are featured in the Heroes Gallery?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "Which hero is listed first in the Heroes Gallery?",
    options: ["Jay Garrick", "The Flash (Barry Allen)", "Kid Flash", "Max Mercury"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "What is the name of this Flash knowledge website?",
    options: ["The Flash Universe", "The Flash Hub", "Flash Central", "Speed Force Database"],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "Which section teaches about Barry Allen's history and DC's editorial decisions?",
    options: ["Timeline", "Reading Order", "General Knowledge", "Feats"],
    correctAnswer: 2
  },
  {
    id: 48,
    question: "What game on the Flash Hub tests your clicking speed against Barry Allen?",
    options: ["Speed Test", "Flash Race", "Click Race Challenge", "Lightning Challenge"],
    correctAnswer: 2
  },
  {
    id: 49,
    question: "How many legendary feats are showcased in the Feats section?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2
  },
  {
    id: 50,
    question: "Which Flash Hub section covers the evolution from Golden Age to Modern Age?",
    options: ["Timeline", "General Knowledge", "Reading Order", "Heroes"],
    correctAnswer: 1
  }
]

export default function FlashootPage() {
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'correct' | 'gameOver'>('menu')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [usedQuestions, setUsedQuestions] = useState<number[]>([])

  // Load high score from localStorage on component mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem('flashoot-highscore')
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore))
    }
  }, [])

  // Save high score to localStorage
  const updateHighScore = (newScore: number) => {
    if (newScore > highScore) {
      setHighScore(newScore)
      localStorage.setItem('flashoot-highscore', newScore.toString())
    }
  }

  const getRandomQuestion = () => {
    const availableQuestions = questions.filter((_, index) => !usedQuestions.includes(index))
    if (availableQuestions.length === 0) {
      // Reset used questions if we've used them all
      setUsedQuestions([])
      return Math.floor(Math.random() * questions.length)
    }
    const randomIndex = Math.floor(Math.random() * availableQuestions.length)
    const questionIndex = questions.indexOf(availableQuestions[randomIndex])
    return questionIndex
  }

  const startGame = () => {
    setGameState('playing')
    const questionIndex = getRandomQuestion()
    setCurrentQuestion(questionIndex)
    setUsedQuestions([questionIndex])
    setSelectedAnswer(null)
    setScore(0)
  }

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return // Prevent multiple clicks
    
    setSelectedAnswer(answerIndex)
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setGameState('correct')
      const newScore = score + 1
      setScore(newScore)
      updateHighScore(newScore)
      
      setTimeout(() => {
        // Get next random question
        const nextQuestionIndex = getRandomQuestion()
        setCurrentQuestion(nextQuestionIndex)
        setUsedQuestions(prev => [...prev, nextQuestionIndex])
        setSelectedAnswer(null)
        setGameState('playing')
      }, 1500)
    } else {
      setGameState('gameOver')
      updateHighScore(score)
      
      setTimeout(() => {
        setGameState('menu')
      }, 3000)
    }
  }

  const returnToMenu = () => {
    setGameState('menu')
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setUsedQuestions([])
  }

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
              <Link href="/knowledge" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🎓 Knowledge
              </Link>
              <Link href="/challenge" className="text-white hover:text-yellow-400 transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🎯 Challenge
              </Link>
              <Link href="/flashoot" className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
                🧠 Flashoot!
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Game Content */}
      <section className="container mx-auto px-4 py-8 md:py-12 text-center mt-16 md:mt-20">
        {gameState === 'menu' && (
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 mb-8 drop-shadow-2xl">
              FLASHOOT!
            </h1>
            
            {/* High Score Display */}
            {highScore > 0 && (
              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/30 max-w-md mx-auto mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-xl drop-shadow-lg">High Score: {highScore}</span>
                </div>
              </div>
            )}
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-lg">
              Test your comprehensive knowledge of The Flash universe! Answer as many questions correctly as you can. One wrong answer ends the game!
            </p>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30 max-w-2xl mx-auto">
              <div className="p-6 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 shadow-2xl shadow-yellow-500/50 inline-block mb-6">
                <Target className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Ultimate Flash Quiz</h2>
              <p className="text-white/80 mb-6 drop-shadow-lg">
                50+ questions covering Barry Allen's history, the Flash family, villains, comic evolution, and everything from the Flash Hub!
              </p>
              <Button 
                onClick={startGame}
                className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-white px-8 py-4 text-xl font-semibold shadow-lg shadow-yellow-500/50 transform hover:scale-105 transition-all drop-shadow-lg"
              >
                Start Flashoot!
              </Button>
            </div>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center max-w-4xl mx-auto mb-8">
              <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg">FLASHOOT!</h1>
              <div className="text-white text-xl drop-shadow-lg">
                Score: {score}
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 drop-shadow-lg">
                {questions[currentQuestion].question}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`p-6 text-lg font-semibold transition-all transform hover:scale-105 drop-shadow-lg ${
                      selectedAnswer === null
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correctAnswer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {gameState === 'correct' && (
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-green-500/30 max-w-2xl mx-auto">
              <div className="p-6 rounded-full bg-green-500 shadow-2xl shadow-green-500/50 inline-block mb-6">
                <Check className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-green-400 mb-4 drop-shadow-lg">CORRECT!</h2>
              <p className="text-white text-xl drop-shadow-lg">Moving to the next question...</p>
              <p className="text-white/80 mt-4 drop-shadow-lg">Current Score: {score}</p>
            </div>
          </div>
        )}

        {gameState === 'gameOver' && (
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-red-500/30 max-w-2xl mx-auto">
              <div className="p-6 rounded-full bg-red-500 shadow-2xl shadow-red-500/50 inline-block mb-6">
                <X className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-red-400 mb-4 drop-shadow-lg">
                {score === 0 ? "GOOD TRY!" : "GAME OVER"}
              </h2>
              <p className="text-white text-xl mb-4 drop-shadow-lg">
                Wrong answer! The correct answer was: <br />
                <span className="text-yellow-400 font-bold">
                  {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}
                </span>
              </p>
              <p className="text-white/80 mb-2 drop-shadow-lg">Final Score: {score}</p>
              {score > highScore && (
                <p className="text-yellow-400 font-bold drop-shadow-lg">🎉 NEW HIGH SCORE! 🎉</p>
              )}
              <p className="text-white/60 mt-4 drop-shadow-lg">Returning to main menu...</p>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-yellow-500/30 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-semibold drop-shadow-lg">The Flash Hub</span>
            </div>
            <div className="text-white/70 text-sm drop-shadow-lg">
              Developed by: <span className="text-yellow-400 font-semibold">Escher Presant</span>
            </div>
          </div>
          <p className="text-white/50 text-xs mt-4 text-center drop-shadow-lg">
            This is an unofficial fan site and is not affiliated with DC Comics. The Flash and all related characters are trademarks of DC Comics. © 2024.
          </p>
        </div>
      </footer>
    </div>
  )
}
