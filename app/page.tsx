"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Moon,
  Sun,
  Globe,
  Users,
  Target,
  TrendingUp,
  DollarSign,
  Building,
  Gamepad2,
  Brain,
  Shield,
  Linkedin,
  Twitter,
} from "lucide-react"

const translations = {
  en: {
    nav: {
      problems: "Problems",
      goal: "Our Goal",
      solution: "Solution",
      timeline: "Timeline",
      revenue: "Revenue",
      investment: "Investment",
      team: "Team",
    },
    hero: {
      title: "InGauss",
      subtitle: "Connecting companies with talent through gamified assessments and blockchain technology",
      cta: "Learn More",
    },
    problems: {
      title: "Problems We Solve",
      forPeople: {
        title: "For People",
        items: [
          "Monotony in software developer recruitment processes",
          "Over-investment of candidate resources to access a position",
          "Low effectiveness of traditional methods in determining suitability",
          "Inability to validate cultural resonance beyond coincidences",
          "Low assertion in predicting (and preventing) high levels of job turnover",
          "Work burnout due to incorrect evaluation",
        ],
      },
      forCompanies: {
        title: "For Companies",
        items: [
          "High costs in prospecting and recruitment with limited results",
          "Periodic shortage of personnel assignable to new initiatives",
          "Low population coverage of their talent radar",
          "Seasonal defections linked to market fluctuations",
          "Insufficient incorporation of culturally resonant personnel",
          "Increase in casualties due to work burnout",
        ],
      },
    },
    goal: {
      title: "Our Goal",
      description:
        "Significantly reduce the cost and distance between discovering a suitable profile and its immediate incorporation into a work team, based on the results of continuous use of our gamified platform.",
    },
    solution: {
      title: "Our Solution",
      description:
        "A computer system that enables the encounter, understanding and productive action between people exploring new job opportunities, and organizations searching for human capital to add to their teams.",
    },
    timeline: {
      title: "Our Timeline",
      shortTerm: {
        title: "Short Term",
        description:
          "Focus on optimizing business and process modeling aspects necessary to build a minimum viable product.",
      },
      mediumTerm: {
        title: "Medium Term",
        description: "Open to the general public and apply technical innovations to cover more validation scenarios.",
      },
      longTerm: {
        title: "Long Term",
        description:
          "Achieve stable user base and profitability with constant technological adequacy and financial leverage.",
      },
    },
    revenue: {
      title: "Our Revenue Structure",
      streams: [
        "Monthly fee charged to companies and premium users",
        "Additional costs for access to privileged data",
        "Specific educational services and derived continuous training",
        "Productive synergies with companies and institutions",
        "Strategic investment in research and development",
      ],
    },
    investment: {
      title: "Investment Focus",
      subtitle: "At this moment, seeking seed capital to achieve exclusive dedication.",
      areas: [
        "Focused on the short-term phase",
        "Modeling processes and system measurement mechanisms",
        "Conducting user research and interface testing",
      ],
    },
    team: {
      title: "InGauss Team",
      members: [
        {
          name: "José Gregorio Block",
          role: "Software Engineer",
          linkedin: "https://www.linkedin.com/in/josegregorioblock/",
          twitter: "https://x.com/TecnoHereje/",
          image: "/jose-gregorio-block-software-engineer.png",
        },
        {
          name: "Luis Alejandro Delgado",
          role: "UI/UX Specialist",
          linkedin: "https://www.linkedin.com/in/delgado-luis-alejandro/",
          twitter: "https://x.com/luis_unlimited/",
          image: "/luis-alejandro-delgado-ui-ux-designer-profile.png",
        },
        {
          name: "Juan Pablo Gómez",
          role: "Front-end Developer",
          linkedin: "https://www.linkedin.com/in/juan-pablo-g%C3%B3mez-837a3321a/",
          twitter: "https://x.com/goodChamuyo/",
          image: "/juan-pablo-gomez-frontend-developer.png",
        },
        {
          name: "Joaquín Asiain",
          role: "Psychologist and Researcher",
          linkedin: "https://www.linkedin.com/in/joaquinasiain/",
          twitter: "https://x.com/JoaquinAsiain/",
          image: "/joaquin-asiain-profile.png",
        },
        {
          name: "Andrés Bongiovanni",
          role: "Project Manager",
          linkedin: "https://www.linkedin.com/in/anbongiovanni/",
          twitter: "javascript: void(0)",
          image: "/andres-bongiovanni-profile.png",
        },
      ],
    },
  },
  es: {
    nav: {
      problems: "Problemas",
      goal: "Nuestra Meta",
      solution: "Solución",
      timeline: "Cronograma",
      revenue: "Ingresos",
      investment: "Inversión",
      team: "Equipo",
    },
    hero: {
      title: "InGauss",
      subtitle: "Conectando empresas con talento a través de evaluaciones gamificadas y tecnología blockchain",
      cta: "Conocer Más",
    },
    problems: {
      title: "Problemas que resolvemos",
      forPeople: {
        title: "Para la gente",
        items: [
          "Monotonía en los procesos de reclutamiento para desarrolladores de software",
          "Sobreinversión de recursos de los candidatos para acceder a un puesto",
          "Poca efectividad de los métodos tradicionales en determinar la idoneidad",
          "Imposibilidad de validar resonancia cultural más allá de casualidades",
          "Baja aserción en la predicción (y prevención) de altos niveles de rotación laboral",
          "Agotamiento laboral (burnout) por causa de una incorrecta evaluación",
        ],
      },
      forCompanies: {
        title: "Para las empresas",
        items: [
          "Altos costos en prospección y captación con resultados limitados",
          "Escasez periódica de personal asignable a nuevas iniciativas",
          "Poca cobertura poblacional de su radar de talentos",
          "Deserciones estacionales ligadas a fluctuaciones de mercado",
          "Incorporación insuficiente de personal culturalmente resonante",
          "Aumento de bajas por agotamiento laboral (burnout)",
        ],
      },
    },
    goal: {
      title: "Nuestra meta es",
      description:
        "Reducir significativamente el costo y la distancia entre el descubrimiento de un perfil idóneo, y su incorporación en un equipo de trabajo en forma inmediata, nos basamos en los resultados del uso continuo de nuestra plataforma gamificada.",
    },
    solution: {
      title: "Nuestra solución",
      description:
        "Un sistema informático que posibilita el encuentro, entendimiento y accionamiento productivo entre personas explorando nuevas oportunidades laborales, y organizaciones en búsqueda de capital humano para sumar a sus equipos.",
    },
    timeline: {
      title: "Nuestro cronograma",
      shortTerm: {
        title: "Corto Plazo",
        description:
          "La prioridad pasa por terminar de optimizar los aspectos de modelado de procesos y de negocio necesarios para proceder con la construcción de un producto mínimo viable.",
      },
      mediumTerm: {
        title: "Mediano Plazo",
        description:
          "Una vez que el proyecto ha demostrado haber entrado en una fase productiva, es tiempo de dar apertura al gran público para capitalizar la herramienta.",
      },
      longTerm: {
        title: "Largo Plazo",
        description:
          "Para cuando se cuente con una base de usuarios estable, haya confirmación de que se han completado con éxito una buena cantidad de procesos de reclutamiento exitosos.",
      },
    },
    revenue: {
      title: "Nuestra estructura de ingresos",
      streams: [
        "Tarifa mensual cargada a empresas y usuarios premium",
        "Costos adicionales por acceso a data privilegiada",
        "Servicios educativos específicos y entrenamiento continuo derivado",
        "Sinergias productivas con empresas e instituciones",
        "Inversión estratégica en investigación y desarrollo",
      ],
    },
    investment: {
      title: "Foco de Inversión",
      subtitle: "En este momento, buscando capital semilla para lograr dedicación exclusiva.",
      areas: [
        "Enfocados en la fase de corto plazo",
        "Modelando procesos y mecanismos de medición del sistema",
        "Haciendo investigación de usuarios y pruebas de interfase",
      ],
    },
    team: {
      title: "Equipo Ingauss",
      members: [
        {
          name: "José Gregorio Block",
          role: "Ingeniero de Software",
          linkedin: "https://www.linkedin.com/in/josegregorioblock/",
          twitter: "https://x.com/TecnoHereje/",
          image: "/jose-gregorio-block-software-engineer-profile.png",
        },
        {
          name: "Luis Alejandro Delgado",
          role: "Especialista UI/UX",
          linkedin: "https://www.linkedin.com/in/delgado-luis-alejandro/",
          twitter: "https://x.com/luis_unlimited/",
          image: "/luis-alejandro-delgado-ui-ux.png",
        },
        {
          name: "Juan Pablo Gómez",
          role: "Desarrollador Front-end",
          linkedin: "https://www.linkedin.com/in/juan-pablo-g%C3%B3mez-837a3321a/",
          twitter: "https://x.com/goodChamuyo/",
          image: "/juan-pablo-gomez-frontend-developer.png",
        },
        {
          name: "Joaquín Asiain",
          role: "Psicólogo e Investigador",
          linkedin: "https://www.linkedin.com/in/joaquinasiain/",
          twitter: "https://x.com/JoaquinAsiain/",
          image: "/joaquin-asiain-psicologo-investigador.png",
        },
        {
          name: "Andrés Bongiovanni",
          role: "Project Manager",
          linkedin: "https://www.linkedin.com/in/anbongiovanni/",
          twitter: "javascript: void(0)",
          image: "/andres-bongiovanni-profile.png",
        },
      ],
    },
  },
}

const gradientSchemes = {
  ocean: { from: "#667eea", to: "#764ba2", accent: "#4f46e5" },
  sunset: { from: "#f093fb", to: "#f5576c", accent: "#ec4899" },
  forest: { from: "#4facfe", to: "#00f2fe", accent: "#06b6d4" },
  aurora: { from: "#a8edea", to: "#fed6e3", accent: "#10b981" },
  cosmic: { from: "#ff9a9e", to: "#fecfef", accent: "#8b5cf6" },
  custom: { from: "#fbbb06", to: "#4484f3", accent: "#35a755" },
}

export default function InGaussWebsite() {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState<"en" | "es">("es")
  const [currentGradient, setCurrentGradient] = useState("custom")
  const [activeTimelinePhase, setActiveTimelinePhase] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    const scheme = gradientSchemes[currentGradient as keyof typeof gradientSchemes]
    document.documentElement.style.setProperty("--gradient-from", scheme.from)
    document.documentElement.style.setProperty("--gradient-to", scheme.to)
    document.documentElement.style.setProperty("--accent-color", scheme.accent)
  }, [isDark, currentGradient])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IG</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
                InGauss
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("problems")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.problems}
              </button>
              <button
                onClick={() => scrollToSection("solution")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.solution}
              </button>
              <button
                onClick={() => scrollToSection("timeline")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.timeline}
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.team}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              {/* Gradient Selector */}
              <div className="flex space-x-1">
                {Object.keys(gradientSchemes).map((scheme) => (
                  <button
                    key={scheme}
                    onClick={() => setCurrentGradient(scheme)}
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                      currentGradient === scheme ? "border-foreground scale-110" : "border-muted-foreground"
                    }`}
                    style={{
                      background: `linear-gradient(45deg, ${gradientSchemes[scheme as keyof typeof gradientSchemes].from}, ${gradientSchemes[scheme as keyof typeof gradientSchemes].to})`,
                    }}
                  />
                ))}
              </div>

              {/* Language Switcher */}
              <div className="relative group">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <Globe className="w-4 h-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2 space-y-1">
                    {(["en", "es"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                          language === lang
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        }`}
                      >
                        {lang === "en" && "English"}
                        {lang === "es" && "Español"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Theme Switcher */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="text-muted-foreground hover:text-foreground"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-from)]/20 to-[var(--gradient-to)]/20" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-foreground/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent animate-float">
            InGauss
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">{t.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white hover:opacity-90 transition-opacity"
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t.problems.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300">
              <Users className="w-12 h-12 text-[var(--accent-color)] mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{t.problems.forPeople.title}</h3>
              <ul className="space-y-3 text-muted-foreground">
                {t.problems.forPeople.items.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 mr-3 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300">
              <Building className="w-12 h-12 text-[var(--accent-color)] mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{t.problems.forCompanies.title}</h3>
              <ul className="space-y-3 text-muted-foreground">
                {t.problems.forCompanies.items.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mt-2 mr-3 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Target className="w-16 h-16 text-[var(--accent-color)] mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t.goal.title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">{t.goal.description}</p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t.solution.title}
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">{t.solution.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300 group">
              <Gamepad2 className="w-12 h-12 text-[var(--accent-color)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">Gamificación</h3>
              <p className="text-muted-foreground">
                Evaluaciones interactivas y motivadoras que miden capacidades transversales de manera efectiva.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300 group">
              <Brain className="w-12 h-12 text-[var(--accent-color)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">Matching Inteligente</h3>
              <p className="text-muted-foreground">
                Algoritmos avanzados que conectan perfiles ideales con organizaciones compatibles.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300 group">
              <Shield className="w-12 h-12 text-[var(--accent-color)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">Blockchain</h3>
              <p className="text-muted-foreground">
                Certificaciones verificables y seguras mediante NFTs soulbound en la blockchain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t.timeline.title}
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)]" />

            <div className="relative flex items-center mb-12">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{t.timeline.shortTerm.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.timeline.shortTerm.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--accent-color)] rounded-full border-4 border-background" />
            </div>

            <div className="relative flex items-center mb-12 flex-row-reverse">
              <div className="w-1/2 pl-8 text-left">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{t.timeline.mediumTerm.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.timeline.mediumTerm.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--accent-color)] rounded-full border-4 border-background" />
            </div>

            <div className="relative flex items-center mb-12">
              <div className="w-1/2 pr-8 text-right">
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300 cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{t.timeline.longTerm.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.timeline.longTerm.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--accent-color)] rounded-full border-4 border-background" />
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t.revenue.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.revenue.streams.map((stream, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300 text-center group"
              >
                <DollarSign className="w-12 h-12 text-[var(--accent-color)] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground text-sm">{stream}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <TrendingUp className="w-16 h-16 text-[var(--accent-color)] mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t.investment.title}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">{t.investment.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {t.investment.areas.map((area, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border">
                <p className="text-muted-foreground text-sm">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
            {t.team.title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.team.members.map((member, index) => (
              <div
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-[var(--accent-color)]/50 transition-all duration-300 text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-[var(--accent-color)]/20 group-hover:border-[var(--accent-color)] transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                <p className="text-[var(--accent-color)] font-medium mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[var(--accent-color)] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[var(--accent-color)] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IG</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] bg-clip-text text-transparent">
              InGauss
            </span>
          </div>
          <p className="text-muted-foreground mb-4">{t.hero.subtitle}</p>
          <p className="text-sm text-muted-foreground">© 2024 InGauss. All rights reserved.</p>
        </div>
      </section>
    </div>
  )
}
