import { useEffect, useState } from "react"
import { Plane, Radio, Navigation } from "lucide-react"
import { Skeleton } from "../components/ui/skeleton"
import Logo from "../assets/logo.svg"
export function LoadingVideo() {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    "Conectando con sistemas DGAC...",
    "Verificando procedimientos operacionales...",
    "Cargando información de aeródromos...",
    "Sincronizando datos meteorológicos...",
    "Preparando interfaz de usuario...",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1.5
      })
    }, 50)

    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 800)

    return () => {
      clearInterval(timer)
      clearInterval(messageTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-20"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source
            src="/placeholder.mp4?query=Chilean airport night operations aircraft landing lights"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-4">

        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="relative bg-white/10 backdrop-blur-md rounded-full p-8 border border-white/20">
            <img src={Logo} alt="Escudo DGAC" className="h-20 w-20 mx-auto" />
          </div>
        </div>

       
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">IFIS - DGAC</h2>
          <p className="text-blue-200">Sistema de Información de Vuelo</p>
          <p className="text-sm text-slate-300 animate-pulse">{messages[currentMessage]}</p>
        </div>

      
        <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden border border-white/30">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>

      
        <div className="text-white/90 font-mono text-lg">{Math.round(progress)}%</div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-3 mb-2">
              <Radio className="h-6 w-6 text-green-400 mx-auto animate-pulse" />
            </div>
            <p className="text-xs text-slate-300">ATC</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-3 mb-2">
              <Navigation className="h-6 w-6 text-blue-400 mx-auto animate-spin" style={{ animationDuration: "3s" }} />
            </div>
            <p className="text-xs text-slate-300">NAV</p>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-3 mb-2">
              <Plane className="h-6 w-6 text-yellow-400 mx-auto animate-bounce" />
            </div>
            <p className="text-xs text-slate-300">OPS</p>
          </div>
        </div>

    
        <div className="space-y-4 mt-8 opacity-50">
          <Skeleton className="h-4 w-3/4 mx-auto bg-white/20" />
          <Skeleton className="h-4 w-1/2 mx-auto bg-white/20" />
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-16 bg-white/20" />
            <Skeleton className="h-16 bg-white/20" />
          </div>
        </div>

   
        <div className="text-xs text-red-300 bg-red-900/30 p-2 rounded border border-red-500/30">
          ⚠️ Página de demostración - No oficial
        </div>
      </div>
    </div>
  )
}
