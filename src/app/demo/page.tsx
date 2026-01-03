"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageSquare,
  Phone,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Users,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Send,
  PhoneCall,
  PhoneOff,
  Volume2,
  Scissors,
  User,
  Search,
  Bell,
  Settings,
  ChevronRight,
  Star,
  TrendingUp,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animations"

// Demo Hero
function DemoHero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="neon" className="mb-6">
              <Play className="w-3 h-3 mr-1" />
              Interactive Demo
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            See Convo in action
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Explore realistic mockups of our chat booking, voice agent, and owner dashboard.
            Use the demo script below to guide your walkthrough.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

// Chat Demo Mock
function ChatDemoMock() {
  const [messages, setMessages] = useState<{ role: string; text: string; typing?: boolean }[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { role: "customer", text: "Hi! I'd like to book a men's haircut" },
    { role: "agent", text: "Hello! I'd be happy to help you book a men's haircut. Do you have a preferred stylist?" },
    { role: "customer", text: "Yes, I'd like to book with Alex please" },
    { role: "agent", text: "Great choice! Alex is available on the following dates:\n\n📅 Monday, Jan 12 at 10:00 AM\n📅 Monday, Jan 12 at 2:30 PM\n📅 Tuesday, Jan 13 at 11:00 AM\n\nWhich time works best for you?" },
    { role: "customer", text: "Monday at 10am works perfectly" },
    { role: "agent", text: "Perfect! I'm holding that slot for you now. Can I get your email or phone number for the confirmation?" },
    { role: "customer", text: "Sure, it's john@email.com" },
    { role: "agent", text: "✅ All set! Your booking is confirmed:\n\n**Men's Haircut with Alex**\n📅 Monday, January 12, 2026\n⏰ 10:00 AM\n📍 Luxe Hair Studio\n\nI've sent a confirmation to john@email.com with a calendar invite. See you soon!" },
  ]

  useEffect(() => {
    if (isPlaying && currentStep < conversation.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, { ...conversation[currentStep], typing: true }])
        setTimeout(() => {
          setMessages(prev => prev.map((m, i) => i === prev.length - 1 ? { ...m, typing: false } : m))
          setCurrentStep(prev => prev + 1)
        }, 500)
      }, currentStep === 0 ? 500 : 1500)
      return () => clearTimeout(timer)
    } else if (currentStep >= conversation.length) {
      setIsPlaying(false)
    }
  }, [isPlaying, currentStep])

  const resetDemo = () => {
    setMessages([])
    setCurrentStep(0)
    setIsPlaying(false)
  }

  const startDemo = () => {
    if (currentStep >= conversation.length) {
      resetDemo()
    }
    setIsPlaying(true)
  }

  return (
    <section className="py-16" id="chat">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-neon-mint/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-neon-mint" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Chat Booking Demo</h2>
              <p className="text-sm text-muted-foreground">Watch a realistic booking conversation</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Chat UI */}
          <Card glass className="p-0 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Luxe Hair Studio</p>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-neon-mint" />
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" onClick={resetDemo}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={isPlaying ? () => setIsPlaying(false) : startDemo}>
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">Click play to start the demo</p>
                  </div>
                </div>
              )}
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.role === "customer" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                        message.role === "customer"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-white/5 border border-white/10 rounded-bl-sm"
                      }`}
                    >
                      {message.typing ? (
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 rounded-full bg-current animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      ) : (
                        message.text
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary/50"
                  disabled
                />
                <Button size="icon" variant="neon" className="rounded-full" disabled>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Demo Controls & Info */}
          <div className="space-y-6">
            <Card glass className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-neon-mint" />
                What you just saw
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Natural language understanding—no forms or dropdowns
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Smart stylist matching based on customer preference
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Real-time availability checking
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Slot holding to prevent double-bookings
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Automatic confirmation with calendar invite
                </li>
              </ul>
            </Card>

            <Card glass className="p-6">
              <h3 className="font-semibold mb-4">Booking Confirmed</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-muted-foreground">Service</span>
                  <span className="font-medium">Men&apos;s Haircut</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-muted-foreground">Stylist</span>
                  <span className="font-medium">Alex</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">Mon, Jan 12, 2026</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">10:00 AM</span>
                </div>
              </div>
              <Button variant="neon" className="w-full mt-4">
                <Calendar className="w-4 h-4 mr-2" />
                Download .ics
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Voice Demo Mock
function VoiceDemoMock() {
  const [isActive, setIsActive] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [callDuration, setCallDuration] = useState(0)

  const transcript = [
    { speaker: "Agent", text: "Thank you for calling Luxe Hair Studio. How can I help you today?", latency: 280 },
    { speaker: "Caller", text: "Hi, I'd like to book a haircut for tomorrow afternoon.", latency: null },
    { speaker: "Agent", text: "Of course! I can help with that. Do you have a preferred stylist, or should I check general availability?", latency: 320 },
    { speaker: "Caller", text: "Maria, if she's available.", latency: null },
    { speaker: "Agent", text: "Let me check Maria's schedule for tomorrow afternoon... Maria has openings at 1 PM, 3:30 PM, and 5 PM. Which works best?", latency: 450 },
    { speaker: "Caller", text: "3:30 would be perfect.", latency: null },
    { speaker: "Agent", text: "Great! I've got you down with Maria at 3:30 PM tomorrow. Can I get your phone number for the confirmation?", latency: 290 },
    { speaker: "Caller", text: "Sure, it's 555-123-4567.", latency: null },
    { speaker: "Agent", text: "Perfect! You're all set. Maria will see you tomorrow at 3:30 PM. You'll receive a text confirmation shortly. Is there anything else I can help with?", latency: 380 },
    { speaker: "Caller", text: "No, that's all. Thank you!", latency: null },
    { speaker: "Agent", text: "You're welcome! We look forward to seeing you. Goodbye!", latency: 250 },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isActive])

  useEffect(() => {
    if (isActive && currentLine < transcript.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 2000)
      return () => clearTimeout(timer)
    } else if (currentLine >= transcript.length && isActive) {
      setIsActive(false)
    }
  }, [isActive, currentLine])

  const startCall = () => {
    setIsActive(true)
    setCurrentLine(0)
    setCallDuration(0)
  }

  const endCall = () => {
    setIsActive(false)
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <section className="py-16" id="voice">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-neon-blue" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Voice Agent Demo</h2>
              <p className="text-sm text-muted-foreground">Experience our AI phone receptionist</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Phone UI */}
          <Card glass className="p-0 overflow-hidden">
            {/* Call Header */}
            <div className={`p-6 text-center transition-colors ${isActive ? 'bg-neon-blue/10' : ''}`}>
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                {isActive ? (
                  <Volume2 className="w-10 h-10 text-white animate-pulse" />
                ) : (
                  <Phone className="w-10 h-10 text-white" />
                )}
              </div>
              <p className="font-semibold text-lg">Luxe Hair Studio</p>
              <p className="text-muted-foreground">+1 (555) 000-BOOK</p>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2"
                >
                  <Badge variant="neon">
                    <Clock className="w-3 h-3 mr-1" />
                    {formatDuration(callDuration)}
                  </Badge>
                </motion.div>
              )}
            </div>

            {/* Transcript */}
            <div className="h-[300px] overflow-y-auto p-4 space-y-4 border-t border-white/10">
              {currentLine === 0 && !isActive && (
                <div className="h-full flex items-center justify-center text-center">
                  <div>
                    <PhoneCall className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">Click to start the call demo</p>
                  </div>
                </div>
              )}
              <AnimatePresence>
                {transcript.slice(0, currentLine).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: line.speaker === "Caller" ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      line.speaker === "Agent" 
                        ? "bg-neon-blue/20 text-neon-blue" 
                        : "bg-white/10 text-muted-foreground"
                    }`}>
                      {line.speaker === "Agent" ? <Phone className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium">{line.speaker}</span>
                        {line.latency && (
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                            {line.latency}ms
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{line.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Call Controls */}
            <div className="p-4 border-t border-white/10 flex justify-center">
              {!isActive ? (
                <Button variant="neon" size="lg" onClick={startCall} className="rounded-full w-16 h-16">
                  <PhoneCall className="w-6 h-6" />
                </Button>
              ) : (
                <Button variant="destructive" size="lg" onClick={endCall} className="rounded-full w-16 h-16 bg-red-500 hover:bg-red-600">
                  <PhoneOff className="w-6 h-6" />
                </Button>
              )}
            </div>
          </Card>

          {/* Info Panel */}
          <div className="space-y-6">
            <Card glass className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-neon-blue" />
                Voice Agent Highlights
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Ultra-low latency (&lt;500ms average response time)
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Natural, human-like voice synthesis
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Handles interruptions gracefully
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Real-time availability lookup
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 mt-0.5 text-primary" />
                  Automatic call summary generated
                </li>
              </ul>
            </Card>

            <Card glass className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-neon-mint" />
                Call Summary (Auto-Generated)
              </h3>
              <div className="p-4 rounded-lg bg-neon-mint/5 border border-neon-mint/20">
                <p className="text-sm text-muted-foreground mb-3">
                  Customer called to book a haircut with Maria. Appointment confirmed for tomorrow at 3:30 PM. Phone number collected for confirmation SMS.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="success">Booking Confirmed</Badge>
                  <Badge variant="secondary">New Customer</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Dashboard Demo Mock
function DashboardDemoMock() {
  return (
    <section className="py-16" id="dashboard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-neon-purple" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Owner GPT Dashboard</h2>
              <p className="text-sm text-muted-foreground">Your salon command center</p>
            </div>
          </div>
        </AnimatedSection>

        <Card glass className="p-0 overflow-hidden">
          {/* Dashboard Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold">Luxe Hair Studio</p>
                <p className="text-xs text-muted-foreground">Owner Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="p-6">
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Today's Bookings", value: "12", icon: Calendar, change: "+3 from yesterday" },
                { label: "Voice Calls", value: "5", icon: Phone, change: "2 pending" },
                { label: "Chat Sessions", value: "8", icon: MessageSquare, change: "All resolved" },
                { label: "Revenue", value: "$847", icon: TrendingUp, change: "+12% vs avg" },
              ].map((stat, i) => (
                <Card key={i} className="bg-white/5 border-white/10 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="w-5 h-5 text-muted-foreground" />
                    <Badge variant="secondary" className="text-[10px]">{stat.change}</Badge>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Services List */}
              <Card className="bg-white/5 border-white/10 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Services</h3>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Men's Haircut", price: "$35", bookings: 24 },
                    { name: "Women's Haircut", price: "$55", bookings: 18 },
                    { name: "Balayage", price: "$180", bookings: 8 },
                    { name: "Beard Trim", price: "$15", bookings: 12 },
                    { name: "Color Touch-up", price: "$85", bookings: 6 },
                  ].map((service, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <div>
                        <p className="text-sm font-medium">{service.name}</p>
                        <p className="text-xs text-muted-foreground">{service.price}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">{service.bookings}</Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Call Summaries */}
              <Card className="bg-white/5 border-white/10 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Recent Call Summaries</h3>
                  <Badge variant="neon" className="text-xs">Live</Badge>
                </div>
                <div className="space-y-3">
                  {[
                    { caller: "+1 (555) 123-4567", time: "5 min ago", summary: "Booked haircut with Maria for tomorrow 3:30 PM" },
                    { caller: "+1 (555) 987-6543", time: "32 min ago", summary: "Rescheduled from Friday to Thursday" },
                    { caller: "+1 (555) 456-7890", time: "1 hour ago", summary: "Inquired about balayage pricing" },
                  ].map((call, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3 h-3 text-neon-blue" />
                          <span className="text-xs font-medium">{call.caller}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{call.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{call.summary}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Customer Lookup */}
              <Card className="bg-white/5 border-white/10 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Customer Lookup</h3>
                </div>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search customers..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Sarah Johnson", visits: 12, lastService: "Balayage", rating: 5 },
                    { name: "Mike Chen", visits: 8, lastService: "Men's Haircut", rating: 5 },
                    { name: "Emily Davis", visits: 5, lastService: "Color Touch-up", rating: 4 },
                  ].map((customer, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-xs font-bold">
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{customer.name}</p>
                        <p className="text-xs text-muted-foreground">{customer.visits} visits • {customer.lastService}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        <span className="text-xs">{customer.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

// Demo Script Section
function DemoScriptSection() {
  const scripts = [
    {
      title: "Chat Booking Flow",
      duration: "2 minutes",
      steps: [
        "Show the customer landing page with embedded chat widget",
        "Demonstrate natural language booking: 'Book a haircut with Alex'",
        "Show real-time availability checking",
        "Complete booking with email confirmation",
        "Show the calendar invite (.ics) download",
      ],
    },
    {
      title: "Voice Agent Flow",
      duration: "3 minutes",
      steps: [
        "Dial the salon's AI phone number",
        "Demonstrate the natural greeting and intent recognition",
        "Show stylist preference handling",
        "Complete a full booking over the phone",
        "Switch to dashboard to show the call summary",
      ],
    },
    {
      title: "Owner Dashboard Flow",
      duration: "2 minutes",
      steps: [
        "Show today's booking stats at a glance",
        "Navigate to recent call summaries",
        "Demonstrate customer lookup and history",
        "Show service management features",
        "Highlight booking analytics and trends",
      ],
    },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Live Demo Script</h2>
              <p className="text-sm text-muted-foreground">Use this guide when presenting to investors or partners</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {scripts.map((script, i) => (
            <Card key={i} glass className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{script.title}</h3>
                <Badge variant="secondary">
                  <Clock className="w-3 h-3 mr-1" />
                  {script.duration}
                </Badge>
              </div>
              <ol className="space-y-3">
                {script.steps.map((step, j) => (
                  <li key={j} className="flex gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-xs font-medium">
                      {j + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          ))}
        </div>

        <AnimatedSection className="mt-12">
          <Card glass className="p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Ready to demo for real?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a personalized walkthrough with our team.
            </p>
            <Button variant="neon" size="lg" asChild>
              <Link href="/contact">
                Schedule Live Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Main Page Component
export default function DemoPage() {
  return (
    <>
      <DemoHero />
      <ChatDemoMock />
      <VoiceDemoMock />
      <DashboardDemoMock />
      <DemoScriptSection />
    </>
  )
}
