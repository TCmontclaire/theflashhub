"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Zap, Trophy, Target } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ChallengePage() {
  const [gameState, setGameState] = useState<'waiting' | 'countdown' | 'racing' | 'finished'>('waiting')
  const [countdown, setCountdown] = useState(3)
  const [userClicks, setUserClicks] = useState(0)
  const [barryClicks, setBarryClicks] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [showCertificate, setShowCertificate] = useState(false)
  const [userWon, setUserWon] = useState(false)
  
  const barryIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null)
  const countdownTimerRef = useRef<NodeJS.Timeout | null>(null)
  const timeDisplayRef = useRef<NodeJS.Timeout | null>(null)
  const gameActiveRef = useRef(false)
  const finalUserClicksRef = useRef(0)
  const finalBarryClicksRef = useRef(0)

  const barryTeasingLines = [
    "You almost kept up... almost",
    "Nice try, but I'm the Fastest Man Alive for a reason!",
    "Better luck next time, slowpoke!",
    "Did you even try? I barely broke a sweat!",
    "Maybe stick to walking... it's more your speed",
    "I've seen turtles move faster than that!",
    "That was cute! Want to try again?",
    "Speed Force 1, You 0!"
  ]

  const clearAllTimers = () => {
    if (barryIntervalRef.current) {
      clearInterval(barryIntervalRef.current)
      barryIntervalRef.current = null
    }
    if (gameTimerRef.current) {
      clearTimeout(gameTimerRef.current)
      gameTimerRef.current = null
    }
    if (countdownTimerRef.current) {
      clearInterval(countdownTimerRef.current)
      countdownTimerRef.current = null
    }
    if (timeDisplayRef.current) {
      clearInterval(timeDisplayRef.current)
      timeDisplayRef.current = null
    }
    gameActiveRef.current = false
  }

  const startGame = () => {
    clearAllTimers()
    setGameState('countdown')
    setCountdown(3)
    setUserClicks(0)
    setBarryClicks(0)
    setTimeLeft(10)
    setShowCertificate(false)
    setUserWon(false)
    gameActiveRef.current = false
    finalUserClicksRef.current = 0
    finalBarryClicksRef.current = 0

    // Countdown timer
    countdownTimerRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          if (countdownTimerRef.current) {
            clearInterval(countdownTimerRef.current)
            countdownTimerRef.current = null
          }
          setGameState('racing')
          startRace()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const startRace = () => {
    gameActiveRef.current = true
    
    // Barry does 10 clicks per second (1 click every 100ms)
    barryIntervalRef.current = setInterval(() => {
      if (gameActiveRef.current) {
        setBarryClicks(prev => {
          const newCount = prev + 1
          finalBarryClicksRef.current = newCount
          return newCount
        })
      }
    }, 100) // 100ms interval = 10 clicks per second

    // Update time left display - proper countdown from 10 to 0
    let currentTime = 10
    setTimeLeft(currentTime)
    
    timeDisplayRef.current = setInterval(() => {
      currentTime -= 1
      setTimeLeft(currentTime)
      
      if (currentTime <= 0) {
        endGame()
      }
    }, 1000)

    // Backup timer to ensure game ends after exactly 10 seconds
    gameTimerRef.current = setTimeout(() => {
      endGame()
    }, 10000)
  }

  const endGame = () => {
    // IMMEDIATELY stop all clicking and timers
    gameActiveRef.current = false
    clearAllTimers()
    
    setGameState('finished')
    setTimeLeft(0)

    // Get the final scores from refs (most up-to-date values)
    const finalUserScore = finalUserClicksRef.current
    const finalBarryScore = finalBarryClicksRef.current
    
    console.log('FINAL SCORES - User:', finalUserScore, 'Barry:', finalBarryScore)
    
    // Manual comparison - if user clicks > barry clicks, user wins
    let didUserWin = false
    if (finalUserScore > finalBarryScore) {
      didUserWin = true
      console.log('USER WON!')
    } else {
      didUserWin = false
      console.log('BARRY WON!')
    }
    
    // Set the winner state
    setUserWon(didUserWin)
    
    // If user won, show certificate
    if (didUserWin === true) {
      console.log('SHOWING CERTIFICATE')
      setShowCertificate(true)
    } else {
      console.log('NOT SHOWING CERTIFICATE')
      setShowCertificate(false)
    }
  }

  const handleScreenClick = (e: React.MouseEvent) => {
    // Only count clicks during racing state AND when game is active
    if (gameState === 'racing' && gameActiveRef.current) {
      setUserClicks(prev => {
        const newCount = prev + 1
        finalUserClicksRef.current = newCount
        console.log('User clicked! New count:', newCount)
        return newCount
      })
      
      // Add visual feedback
      const clickEffect = document.createElement('div')
      clickEffect.className = 'fixed pointer-events-none text-yellow-400 font-bold text-2xl z-50 animate-ping'
      clickEffect.style.left = `${e.clientX - 10}px`
      clickEffect.style.top = `${e.clientY - 10}px`
      clickEffect.textContent = '+1'
      document.body.appendChild(clickEffect)
      
      setTimeout(() => {
        if (document.body.contains(clickEffect)) {
          document.body.removeChild(clickEffect)
        }
      }, 1000)
    }
  }

  const resetGame = () => {
    clearAllTimers()
    setGameState('waiting')
    setUserClicks(0)
    setBarryClicks(0)
    setTimeLeft(10)
    setCountdown(3)
    setShowCertificate(false)
    setUserWon(false)
    finalUserClicksRef.current = 0
    finalBarryClicksRef.current = 0
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearAllTimers()
    }
  }, [])

  const randomTeasingLine = barryTeasingLines[Math.floor(Math.random() * barryTeasingLines.length)]

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-red-900 via-orange-800 to-yellow-600 cursor-crosshair"
      onClick={handleScreenClick}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-yellow-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-4 md:mr-8">
              <Zap className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 animate-pulse" />
              <span className="text-lg md:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">THE FLASH</span>
            </div>
            <div className="flex space-x-3 md:space-x-6 text-sm md:text-base">
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
              <Link href="/challenge" className="text-yellow-400 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] flex items-center gap-1">
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
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 mb-4 drop-shadow-lg">
          CLICK RACE CHALLENGE
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4 drop-shadow-lg">
          Think you can outclick the Fastest Man Alive? Click anywhere on screen! Barry gains 10 clicks per second!
        </p>
      </section>

      {/* Game Area */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Game Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-500/30 text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">Your Clicks</h3>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 drop-shadow-lg">{userClicks}</div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-red-500/30 text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">Barry's Clicks</h3>
              <div className="text-3xl md:text-4xl font-bold text-red-400 drop-shadow-lg">{barryClicks}</div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-yellow-500/30 text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">Time Left</h3>
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-lg">{timeLeft}s</div>
            </div>
          </div>

          {/* Debug Info */}
          {gameState === 'finished' && (
            <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-500/30 text-center">
              <p className="text-white text-sm drop-shadow-lg">
                Final: User {finalUserClicksRef.current} vs Barry {finalBarryClicksRef.current} | Won: {userWon ? 'YES' : 'NO'} | Cert: {showCertificate ? 'YES' : 'NO'}
              </p>
            </div>
          )}

          {/* Game Interface */}
          <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-green-500/30 text-center">
            {gameState === 'waiting' && (
              <div className="space-y-6">
                <div className="p-4 md:p-6 rounded-full bg-gradient-to-r from-green-400 to-yellow-500 shadow-2xl shadow-green-500/50 inline-block">
                  <Target className="h-12 w-12 md:h-16 md:w-16 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">Ready to Race?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto text-sm md:text-base px-4 drop-shadow-lg">
                  You'll have 10 seconds to click anywhere on the screen as fast as you can! 
                  Barry gains 10 clicks per second (about 100 clicks total). Can you beat the Flash?
                </p>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation()
                    startGame()
                  }}
                  className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl font-semibold shadow-lg shadow-green-500/50 transform hover:scale-105 transition-all"
                >
                  Start Race!
                </Button>
              </div>
            )}

            {gameState === 'countdown' && (
              <div className="space-y-6">
                <div className="text-6xl md:text-8xl font-bold text-yellow-400 animate-pulse drop-shadow-lg">
                  {countdown}
                </div>
                <p className="text-xl md:text-2xl text-white drop-shadow-lg">Get ready to click anywhere!</p>
              </div>
            )}

            {gameState === 'racing' && (
              <div className="space-y-6">
                <div className="p-6 md:p-8 border-4 border-dashed border-yellow-400 rounded-xl bg-yellow-400/10">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-lg">CLICK ANYWHERE ON SCREEN!</h2>
                  <div className="text-6xl animate-pulse">⚡</div>
                  <p className="text-yellow-400 font-bold text-lg mt-4 drop-shadow-lg">Click! Click! Click!</p>
                </div>
                <p className="text-white/80 text-sm md:text-base drop-shadow-lg">
                  Time remaining: {timeLeft} seconds - Keep clicking!
                </p>
              </div>
            )}

            {gameState === 'finished' && (
              <div className="space-y-6">
                {userWon ? (
                  <div className="space-y-4">
                    <div className="p-4 md:p-6 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 shadow-2xl shadow-yellow-500/50 inline-block">
                      <Trophy className="h-12 w-12 md:h-16 md:w-16 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-lg">INCREDIBLE!</h2>
                    <p className="text-xl md:text-2xl text-white drop-shadow-lg">You Beat the Flash!</p>
                    <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/50">
                      <p className="text-xl md:text-2xl text-yellow-300 font-bold italic drop-shadow-lg">
                        "Wow! I'm genuinely impressed. You've got some serious speed there, speedster. Welcome to the Speed Force family!"
                      </p>
                      <p className="text-white/80 text-sm mt-2 drop-shadow-lg">- Barry Allen</p>
                    </div>
                    <p className="text-white/80 text-sm md:text-base drop-shadow-lg">
                      Final Score: You ({finalUserClicksRef.current}) vs Barry ({finalBarryClicksRef.current})
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-4 md:p-6 rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-2xl shadow-red-500/50 inline-block">
                      <Zap className="h-12 w-12 md:h-16 md:w-16 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-red-400 drop-shadow-lg">Flash Wins!</h2>
                    <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/50">
                      <p className="text-xl md:text-2xl text-yellow-300 font-bold italic drop-shadow-lg">
                        "{randomTeasingLine}"
                      </p>
                      <p className="text-white/80 text-sm mt-2 drop-shadow-lg">- Barry Allen</p>
                    </div>
                    <p className="text-white/80 text-sm md:text-base drop-shadow-lg">
                      Final Score: You ({finalUserClicksRef.current}) vs Barry ({finalBarryClicksRef.current})
                    </p>
                  </div>
                )}
                
                <Button 
                  onClick={(e) => {
                    e.stopPropagation()
                    resetGame()
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
                >
                  Race Again
                </Button>
              </div>
            )}
          </div>

          {/* Certificate - Shows ONLY when showCertificate is true */}
          {showCertificate && (
            <div className="mt-8 relative">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 md:p-8 border-4 border-yellow-300 shadow-2xl shadow-yellow-500/50">
                <div className="text-center space-y-4">
                  <Trophy className="h-12 w-12 md:h-16 md:w-16 text-white mx-auto" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">CERTIFICATE OF ACHIEVEMENT</h2>
                  <div className="bg-white/20 rounded-lg p-4 md:p-6">
                    <p className="text-lg md:text-xl text-white font-semibold drop-shadow-lg">This certifies that</p>
                    <p className="text-2xl md:text-3xl font-bold text-white my-2 drop-shadow-lg">THE CHALLENGER</p>
                    <p className="text-lg md:text-xl text-white font-semibold drop-shadow-lg">has successfully</p>
                    <p className="text-xl md:text-2xl font-bold text-yellow-200 my-2 drop-shadow-lg">BEATEN THE FLASH</p>
                    <p className="text-base md:text-lg text-white drop-shadow-lg">in a test of clicking speed</p>
                    <p className="text-sm text-white/80 mt-4 drop-shadow-lg">
                      Final Score: {finalUserClicksRef.current} clicks vs Barry's {finalBarryClicksRef.current} clicks
                    </p>
                  </div>
                  <p className="text-white font-semibold drop-shadow-lg">Congratulations, Speedster!</p>
                </div>
              </div>
              <Button 
                onClick={(e) => {
                  e.stopPropagation()
                  setShowCertificate(false)
                }}
                variant="outline"
                size="sm"
                className="absolute top-2 md:top-4 right-2 md:right-4 border-white text-white hover:bg-white hover:text-black"
              >
                ×
              </Button>
            </div>
          )}
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
            This website is made by a fan, for fans. It is not officially endorsed by DC Comics or Warner Bros.
          </p>
        </div>
      </footer>
    </div>
  )
}
