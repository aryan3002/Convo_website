"use client"

import { useState, useEffect, useCallback } from "react"
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
  MapPin,
  X,
  Navigation,
  Globe,
  Smartphone,
  Zap,
  Check,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection, StaggeredContainer, StaggeredItem, HoverLift } from "@/components/animations"

// Demo Hero - Updated with new copy
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
              Try the Customer Experience
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="gradient-text neon-glow">Bookings that feel like texting</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Works directly from Google Maps — no website required.
            <br className="hidden md:block" />
            See how customers can book your salon in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="neon" size="xl" asChild>
              <a href="#google-maps-demo">
                Try the Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#how-it-works">
                See How It Works for Owners
                <ChevronDown className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Google Maps Demo with Booking Modal
function GoogleMapsDemo() {
  const [showInfoWindow, setShowInfoWindow] = useState(true)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showVoiceModal, setShowVoiceModal] = useState(false)
  const [bookingStep, setBookingStep] = useState(0)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [messages, setMessages] = useState<Array<{ role: "agent" | "user"; text: string; typing?: boolean }>>([])
  const [isTyping, setIsTyping] = useState(false)
  
  // Voice modal state
  const [voiceStep, setVoiceStep] = useState(0)
  const [callDuration, setCallDuration] = useState(0)
  const [voiceTranscript, setVoiceTranscript] = useState<Array<{ speaker: "ai" | "user"; text: string }>>([])
  const [isCallActive, setIsCallActive] = useState(false)

  const services = [
    { name: "Men's Haircut", price: "$35", duration: "30 min" },
    { name: "Women's Haircut", price: "$55", duration: "45 min" },
    { name: "Balayage", price: "$180", duration: "2 hrs" },
    { name: "Beard Trim", price: "$15", duration: "15 min" },
  ]

  const timeSlots = [
    "Today, 2:00 PM",
    "Today, 3:30 PM",
    "Today, 5:00 PM",
    "Tomorrow, 10:00 AM",
    "Tomorrow, 11:30 AM",
    "Tomorrow, 2:00 PM",
  ]

  // AI greeting text as specified
  const aiGreeting = "Hi — welcome to Convo Salon. What would you like to book today?"
  
  // Voice AI greeting
  const voiceAiGreeting = "Hi, thanks for calling Convo Salon. I'm the AI assistant. How can I help you today?"

  const addMessage = useCallback((role: "agent" | "user", text: string) => {
    setIsTyping(true)
    setMessages(prev => [...prev, { role, text, typing: role === "agent" }])
    
    if (role === "agent") {
      setTimeout(() => {
        setMessages(prev => prev.map((m, i) => 
          i === prev.length - 1 ? { ...m, typing: false } : m
        ))
        setIsTyping(false)
      }, 1000)
    } else {
      setIsTyping(false)
    }
  }, [])

  const startBooking = () => {
    // Analytics: chat_booking_started would fire here
    setShowBookingModal(true)
    setShowInfoWindow(false)
    setBookingStep(0)
    setMessages([])
    setSelectedService(null)
    setSelectedTime(null)
    
    // Initial AI greeting
    setTimeout(() => {
      addMessage("agent", aiGreeting)
    }, 500)
  }
  
  // Voice call functions
  const startVoiceCall = () => {
    // Analytics: map_call_clicked would fire here
    setShowVoiceModal(true)
    setShowInfoWindow(false)
    setVoiceStep(0)
    setCallDuration(0)
    setVoiceTranscript([])
    setIsCallActive(true)
    
    // Analytics: voice_call_started would fire here
    
    // Initial AI greeting after "connecting"
    setTimeout(() => {
      setVoiceTranscript([{ speaker: "ai", text: voiceAiGreeting }])
    }, 1500)
  }
  
  // Call duration timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isCallActive])
  
  const handleVoiceOption = (option: string) => {
    if (option === "book") {
      setVoiceTranscript(prev => [...prev, { speaker: "user", text: "I'd like to book an appointment" }])
      setTimeout(() => {
        setVoiceTranscript(prev => [...prev, { speaker: "ai", text: "Of course! What service would you like to book? We offer haircuts, balayage, beard trims, and more." }])
        setVoiceStep(1)
      }, 1000)
    } else if (option === "services") {
      setVoiceTranscript(prev => [...prev, { speaker: "user", text: "What services do you offer?" }])
      setTimeout(() => {
        setVoiceTranscript(prev => [...prev, { speaker: "ai", text: "We offer Men's Haircuts for $35, Women's Haircuts for $55, Balayage starting at $180, and Beard Trims for $15. Would you like to book any of these?" }])
        setVoiceStep(1)
      }, 1000)
    } else if (option === "hours") {
      setVoiceTranscript(prev => [...prev, { speaker: "user", text: "What are your salon hours?" }])
      setTimeout(() => {
        setVoiceTranscript(prev => [...prev, { speaker: "ai", text: "We're open Monday through Saturday, 9 AM to 8 PM, and Sunday 10 AM to 6 PM. Would you like to book an appointment?" }])
        setVoiceStep(1)
      }, 1000)
    }
  }
  
  const handleVoiceServiceSelect = (service: string) => {
    setVoiceTranscript(prev => [...prev, { speaker: "user", text: `I'd like a ${service}` }])
    setTimeout(() => {
      setVoiceTranscript(prev => [...prev, { speaker: "ai", text: `Great! For the ${service}, I have availability today at 2 PM, 3:30 PM, or tomorrow at 10 AM. Which time works best for you?` }])
      setVoiceStep(2)
    }, 1000)
  }
  
  const handleVoiceTimeSelect = (time: string) => {
    setVoiceTranscript(prev => [...prev, { speaker: "user", text: time }])
    setTimeout(() => {
      setVoiceTranscript(prev => [...prev, { speaker: "ai", text: "Perfect! Your appointment is confirmed. You'll receive a confirmation text shortly. Is there anything else I can help you with?" }])
      setVoiceStep(3)
      // Analytics: voice_booking_completed would fire here
    }, 1000)
  }
  
  const endVoiceCall = () => {
    if (voiceStep === 3) {
      setVoiceTranscript(prev => [...prev, { speaker: "user", text: "No, that's all. Thank you!" }])
      setTimeout(() => {
        setVoiceTranscript(prev => [...prev, { speaker: "ai", text: "You're welcome! We look forward to seeing you. Goodbye!" }])
        setTimeout(() => {
          setIsCallActive(false)
          setVoiceStep(4) // Show completion
        }, 1500)
      }, 800)
    } else {
      setIsCallActive(false)
      resetVoiceDemo()
    }
  }
  
  const resetVoiceDemo = () => {
    setShowVoiceModal(false)
    setShowInfoWindow(true)
    setVoiceStep(0)
    setCallDuration(0)
    setVoiceTranscript([])
    setIsCallActive(false)
  }
  
  const formatCallDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const selectService = (service: string) => {
    setSelectedService(service)
    addMessage("user", `I'd like to book a ${service}`)
    
    setTimeout(() => {
      addMessage("agent", `Great choice! I have the following times available for ${service}. Which works best for you?`)
      setBookingStep(1)
    }, 1500)
  }

  const selectTime = (time: string) => {
    setSelectedTime(time)
    addMessage("user", time)
    
    setTimeout(() => {
      addMessage("agent", "Perfect! Let me confirm your booking...")
      setTimeout(() => {
        setBookingStep(2)
        addMessage("agent", `✅ You're all set!\n\n**${selectedService}**\n📅 ${time}\n📍 Convo Salon\n\nYou'll receive a confirmation text shortly. See you soon!`)
      }, 1500)
    }, 1000)
  }

  const resetDemo = () => {
    setShowBookingModal(false)
    setShowInfoWindow(true)
    setBookingStep(0)
    setMessages([])
    setSelectedService(null)
    setSelectedTime(null)
  }

  return (
    <section className="py-16" id="google-maps-demo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-8 text-center">
          <Badge variant="secondary" className="mb-4">
            <MapPin className="w-3 h-3 mr-1" />
            Interactive Demo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience booking from Google Maps
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on the salon marker, then tap "Book via Chat" or "Call" to see how customers can book — whether they prefer texting or calling.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Google Maps Simulation */}
          <Card glass className="overflow-hidden">
            {/* Maps Header Bar */}
            <div className="bg-white dark:bg-gray-900 p-3 border-b border-white/10 flex items-center gap-3">
              <div className="flex items-center gap-2 flex-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    value="Convo Salon" 
                    readOnly
                    className="w-full bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1.5 text-sm"
                  />
                </div>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0">
                <Navigation className="w-4 h-4" />
              </Button>
            </div>

            {/* Map Area */}
            <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
              {/* Fake map grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Fake roads */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-400 dark:bg-gray-600 opacity-50"></div>
              <div className="absolute top-0 bottom-0 left-1/3 w-2 bg-gray-400 dark:bg-gray-600 opacity-50"></div>
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-400 dark:bg-gray-600 opacity-30"></div>

              {/* Marker */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full cursor-pointer z-10"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                onClick={() => setShowInfoWindow(true)}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <Scissors className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-25"></div>
                </div>
              </motion.div>

              {/* Info Window */}
              <AnimatePresence>
                {showInfoWindow && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-[calc(50%-120px)] left-1/2 -translate-x-1/2 w-[280px] z-20"
                  >
                    <Card className="bg-white dark:bg-gray-900 shadow-2xl border-0 overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">Convo Salon</h3>
                            <div className="flex items-center gap-1 mt-1">
                              <div className="flex">
                                {[1,2,3,4,5].map((i) => (
                                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">(128 reviews)</span>
                            </div>
                          </div>
                          <button 
                            onClick={() => setShowInfoWindow(false)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">Hair Salon · 0.3 mi</p>
                        <p className="text-xs text-green-600 dark:text-green-400 mb-3">Open · Closes 8 PM</p>
                        
                        {/* Book via Chat CTA - Primary action */}
                        <Button 
                          variant="neon" 
                          className="w-full mb-2"
                          onClick={startBooking}
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Book via Chat
                        </Button>
                        
                        <div className="flex gap-2">
                          <button 
                            onClick={startVoiceCall}
                            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 px-3 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          >
                            <div className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              <span className="text-xs font-medium">Call</span>
                            </div>
                            <span className="text-[10px] text-neon-blue">AI answers instantly</span>
                          </button>
                          <Button variant="outline" size="sm" className="flex-1 text-xs">
                            <Navigation className="w-3 h-3 mr-1" />
                            Directions
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Voice Agent Modal */}
              <AnimatePresence>
                {showVoiceModal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-30 p-4"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="w-full max-w-sm"
                    >
                      <Card glass className="overflow-hidden">
                        {/* Call Header */}
                        <div className="p-6 text-center border-b border-white/10">
                          <div className="relative w-20 h-20 mx-auto mb-4">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                              <Scissors className="w-10 h-10 text-white" />
                            </div>
                            {isCallActive && (
                              <>
                                <div className="absolute inset-0 rounded-full border-4 border-neon-blue animate-ping opacity-20"></div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-neon-mint flex items-center justify-center">
                                  <Volume2 className="w-3 h-3 text-white animate-pulse" />
                                </div>
                              </>
                            )}
                          </div>
                          <h3 className="font-semibold text-lg">
                            {isCallActive ? "Convo Salon" : "Call Ended"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {isCallActive ? "Connected to AI Assistant" : "Thank you for calling"}
                          </p>
                          {isCallActive && (
                            <Badge variant="neon" className="mt-2">
                              <Clock className="w-3 h-3 mr-1" />
                              {formatCallDuration(callDuration)}
                            </Badge>
                          )}
                          
                          {/* Waveform animation */}
                          {isCallActive && (
                            <div className="flex items-center justify-center gap-1 mt-4 h-8">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="w-1 bg-neon-blue rounded-full"
                                  animate={{
                                    height: [8, 24, 8],
                                  }}
                                  transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    delay: i * 0.1,
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Transcript */}
                        <div className="max-h-[200px] overflow-y-auto p-4 space-y-3">
                          <AnimatePresence>
                            {voiceTranscript.map((line, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex gap-2 ${line.speaker === "user" ? "justify-end" : "justify-start"}`}
                              >
                                <div className={`max-w-[85%] p-2 rounded-lg text-xs ${
                                  line.speaker === "user" 
                                    ? "bg-primary/20 text-primary-foreground" 
                                    : "bg-white/10"
                                }`}>
                                  <span className="font-medium text-[10px] text-muted-foreground block mb-1">
                                    {line.speaker === "ai" ? "🤖 AI" : "👤 You"}
                                  </span>
                                  {line.text}
                                </div>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                        </div>

                        {/* Voice Options */}
                        {voiceStep === 0 && voiceTranscript.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="p-4 border-t border-white/10 space-y-2"
                          >
                            <p className="text-[10px] text-muted-foreground text-center mb-2">Tap to respond:</p>
                            <Button variant="outline" size="sm" className="w-full text-xs" onClick={() => handleVoiceOption("book")}>
                              📅 Book an appointment
                            </Button>
                            <Button variant="outline" size="sm" className="w-full text-xs" onClick={() => handleVoiceOption("services")}>
                              💇 Ask about services
                            </Button>
                            <Button variant="outline" size="sm" className="w-full text-xs" onClick={() => handleVoiceOption("hours")}>
                              🕐 Salon hours
                            </Button>
                          </motion.div>
                        )}
                        
                        {/* Service Selection */}
                        {voiceStep === 1 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="p-4 border-t border-white/10"
                          >
                            <p className="text-[10px] text-muted-foreground text-center mb-2">Select a service:</p>
                            <div className="grid grid-cols-2 gap-2">
                              {services.map((service) => (
                                <Button
                                  key={service.name}
                                  variant="outline"
                                  size="sm"
                                  className="text-[10px] h-auto py-2"
                                  onClick={() => handleVoiceServiceSelect(service.name)}
                                >
                                  {service.name}
                                </Button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Time Selection */}
                        {voiceStep === 2 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="p-4 border-t border-white/10"
                          >
                            <p className="text-[10px] text-muted-foreground text-center mb-2">Select a time:</p>
                            <div className="grid grid-cols-1 gap-2">
                              <Button variant="outline" size="sm" className="text-xs" onClick={() => handleVoiceTimeSelect("Today at 2 PM")}>
                                Today at 2 PM
                              </Button>
                              <Button variant="outline" size="sm" className="text-xs" onClick={() => handleVoiceTimeSelect("Today at 3:30 PM")}>
                                Today at 3:30 PM
                              </Button>
                              <Button variant="outline" size="sm" className="text-xs" onClick={() => handleVoiceTimeSelect("Tomorrow at 10 AM")}>
                                Tomorrow at 10 AM
                              </Button>
                            </div>
                          </motion.div>
                        )}
                        
                        {/* Call Completed */}
                        {voiceStep === 4 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="p-4 border-t border-white/10 text-center"
                          >
                            <div className="w-12 h-12 rounded-full bg-neon-mint/20 flex items-center justify-center mx-auto mb-3">
                              <CheckCircle2 className="w-6 h-6 text-neon-mint" />
                            </div>
                            <p className="text-sm font-medium mb-1">Booking Confirmed!</p>
                            <p className="text-xs text-muted-foreground mb-4">
                              This is how easy voice booking works.
                            </p>
                            <Button variant="neon" size="sm" className="w-full" onClick={resetVoiceDemo}>
                              Try Again
                            </Button>
                          </motion.div>
                        )}

                        {/* End Call Button */}
                        {isCallActive && (
                          <div className="p-4 border-t border-white/10 flex justify-center">
                            <Button
                              variant="destructive"
                              size="lg"
                              className="rounded-full w-14 h-14 bg-red-500 hover:bg-red-600"
                              onClick={endVoiceCall}
                            >
                              <PhoneOff className="w-6 h-6" />
                            </Button>
                          </div>
                        )}
                      </Card>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Booking Modal */}
              <AnimatePresence>
                {showBookingModal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center z-30 p-4"
                  >
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      className="w-full max-w-md"
                    >
                      <Card glass className="overflow-hidden max-h-[80vh] flex flex-col">
                        {/* Chat Header */}
                        <div className="p-4 border-b border-white/10 flex items-center justify-between shrink-0">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                              <Scissors className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium">Convo Salon</p>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 rounded-full bg-neon-mint" />
                                <span className="text-xs text-muted-foreground">AI Assistant</span>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" onClick={resetDemo}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[300px]">
                          <AnimatePresence>
                            {messages.map((message, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                              >
                                <div
                                  className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                                    message.role === "user"
                                      ? "bg-primary text-primary-foreground rounded-br-sm"
                                      : "bg-white/10 border border-white/10 rounded-bl-sm"
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

                        {/* Service Selection */}
                        {bookingStep === 0 && !isTyping && messages.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 border-t border-white/10 shrink-0"
                          >
                            <p className="text-xs text-muted-foreground mb-3">Choose a service:</p>
                            <div className="grid grid-cols-2 gap-2">
                              {services.map((service) => (
                                <Button
                                  key={service.name}
                                  variant="outline"
                                  size="sm"
                                  className="justify-start h-auto py-2 px-3"
                                  onClick={() => selectService(service.name)}
                                >
                                  <div className="text-left">
                                    <p className="text-xs font-medium">{service.name}</p>
                                    <p className="text-[10px] text-muted-foreground">{service.price} · {service.duration}</p>
                                  </div>
                                </Button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* Time Selection */}
                        {bookingStep === 1 && !isTyping && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 border-t border-white/10 shrink-0"
                          >
                            <p className="text-xs text-muted-foreground mb-3">Available times:</p>
                            <div className="grid grid-cols-2 gap-2">
                              {timeSlots.map((time) => (
                                <Button
                                  key={time}
                                  variant="outline"
                                  size="sm"
                                  className="text-xs"
                                  onClick={() => selectTime(time)}
                                >
                                  {time}
                                </Button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* Booking Confirmed */}
                        {bookingStep === 2 && !isTyping && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 border-t border-white/10 shrink-0"
                          >
                            <div className="flex items-center justify-center gap-2 mb-4">
                              <div className="w-12 h-12 rounded-full bg-neon-mint/20 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-neon-mint" />
                              </div>
                            </div>
                            <p className="text-center text-sm text-muted-foreground mb-4">
                              Booking confirmed! This is how easy it is.
                            </p>
                            <Button variant="neon" className="w-full" onClick={resetDemo}>
                              Try Again
                            </Button>
                          </motion.div>
                        )}
                      </Card>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Google branding simulation */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 rounded px-2 py-1 text-xs text-gray-600 dark:text-gray-400">
                <Globe className="w-3 h-3" />
                <span>Map Simulation</span>
              </div>
            </div>
          </Card>

          {/* Hint text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-sm text-muted-foreground mt-4"
          >
            👆 Click the marker, then try "Book via Chat" OR "Call" — Convo handles both!
          </motion.p>
        </div>
      </div>
    </section>
  )
}

// Customer Flow Visual
function CustomerFlowVisual() {
  const steps = [
    {
      icon: Smartphone,
      title: "Open Google Maps",
      description: "Customer searches for salons nearby",
      color: "neon-blue",
    },
    {
      icon: MapPin,
      title: "Tap Business",
      description: "Views your salon profile",
      color: "neon-purple",
    },
    {
      icon: MessageSquare,
      title: "Chat OR Call",
      description: "Both connect to Convo AI",
      color: "neon-pink",
    },
    {
      icon: CheckCircle2,
      title: "Booked Instantly",
      description: "Confirmed in seconds",
      color: "neon-mint",
    },
  ]

  return (
    <section className="py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Customer Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Booking in seconds, not minutes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Whether customers prefer texting or calling — Convo handles both.
            <br className="hidden md:block" />
            No app downloads. No account creation. Just tap and book.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-mint -translate-y-1/2 z-0" />

          <StaggeredContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10" staggerDelay={0.15}>
            {steps.map((step, index) => (
              <StaggeredItem key={index}>
                <HoverLift>
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-${step.color}/10 flex items-center justify-center mb-4 relative`}>
                      <step.icon className={`w-8 h-8 md:w-10 md:h-10 text-${step.color}`} />
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-white/10 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-1 text-sm md:text-base">{step.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </HoverLift>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </div>
    </section>
  )
}

// Owner Education Section - How It Works Without a Website
function OwnerEducationSection() {
  const features = [
    {
      icon: MapPin,
      title: "Add Link to Google Business Profile",
      description: "Just paste your Convo booking link into your Google Business Profile. Takes 2 minutes, no technical skills needed.",
    },
    {
      icon: MessageSquare,
      title: "Customer Taps 'Book via Chat'",
      description: "When customers find you on Google Maps, they see a direct booking button. No website visit required.",
    },
    {
      icon: Phone,
      title: "Customer Taps 'Call' → AI Answers",
      description: "When customers tap 'Call' on Google Maps, Convo answers automatically and books the appointment. No missed calls, ever.",
    },
    {
      icon: Sparkles,
      title: "Convo AI Handles Everything",
      description: "Same AI handles chat + voice. Books appointments, sends confirmations, works 24/7 — no staff answering phones.",
    },
  ]

  const benefits = [
    { icon: X, text: "No website needed", crossed: true },
    { icon: X, text: "No app to download", crossed: true },
    { icon: X, text: "No missed calls", crossed: true },
    { icon: X, text: "No staff answering phones", crossed: true },
    { icon: Check, text: "Works 24/7", crossed: false },
  ]

  return (
    <section className="py-20" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="neon" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            For Business Owners
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How this works <span className="gradient-text">without a website</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convo turns your Google Maps listing into a 24/7 booking machine.
            Chat or call — same AI, same result: booked appointments.
          </p>
        </AnimatedSection>

        {/* Benefits strip */}
        <AnimatedSection delay={0.1} className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 ${benefit.crossed ? 'text-muted-foreground' : 'text-neon-mint font-medium'}`}
              >
                {benefit.crossed ? (
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-neon-mint/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-neon-mint" />
                  </div>
                )}
                <span className={`text-sm ${benefit.crossed ? 'line-through' : ''}`}>{benefit.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Feature cards */}
        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.15}>
          {features.map((feature, index) => (
            <StaggeredItem key={index}>
              <HoverLift>
                <Card glass className="p-6 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/5">
                    {index + 1}
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </HoverLift>
            </StaggeredItem>
          ))}
        </StaggeredContainer>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <Card glass className="inline-block p-6 md:p-8">
            <p className="text-lg font-medium mb-4">Ready to add Convo to your Google listing?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="neon" size="lg" asChild>
                <Link href="/contact">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link href="/pricing">
                  See Pricing
                </Link>
              </Button>
            </div>
          </Card>
        </AnimatedSection>
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
      <GoogleMapsDemo />
      <CustomerFlowVisual />
      <OwnerEducationSection />
      <ChatDemoMock />
      <VoiceDemoMock />
      <DashboardDemoMock />
      <DemoScriptSection />
    </>
  )
}
