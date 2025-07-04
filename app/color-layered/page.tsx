import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <source src="/assets/3163534-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
          <div className="flex items-center">
            <div className="text-white text-xl font-light">
              <span className="mr-1">⚡</span>
              VelocityAI
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Features
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Pricing
            </a>
          </nav>

          <Button
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
          >x
            Start Free Trial
          </Button>
        </header>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              Accelerate your business with <br className="hidden sm:block" />
              <em className="italic font-light">AI-powered speed</em>
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              It&apos;s less about complexity, and more about what brings your ideas to life at lightning speed.
            </p>

            <Button
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-6 py-3 text-base"
              variant="outline"
            >
              Launch Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="pb-8 px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-center space-x-8 md:space-x-12 opacity-70">
            <div className="text-white text-sm font-medium tracking-wide">TRUSTED BY</div>
            <div className="text-white text-lg font-serif italic">Tech Giants</div>
            <div className="text-white text-sm font-light tracking-wider">startup accelerators</div>
            <div className="flex items-center text-white">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
              </svg>
              <span className="text-sm font-medium">innovation labs</span>
            </div>
            <div className="text-white text-sm font-bold tracking-widest">FAST TECH</div>
          </div>
        </div>
      </div>
    </div>
  )
}
