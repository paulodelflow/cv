import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink, Element } from 'react-scroll'
import { Home, User, Briefcase, Sun, Moon, Github, Linkedin, Mail, Instagram } from 'lucide-react'
import experiences from '../libs/experiencia.json'
import technologies from '../libs/skills.json'


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(true)

  const sections = ['home', 'about', 'experience']

  const handleNavigation = (section) => {
    setActiveSection(section)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY
      const windowHeight = window.innerHeight
      const activeIndex = Math.floor(currentPosition / windowHeight)
      setActiveSection(sections[activeIndex])
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`font-mono ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-500">
        
        {/* Navigation */}
        <nav className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg p-2">
          <div className="flex gap-4 items-center">
            {[
              { icon: <Home className="w-5 h-5" />, section: 'home' },
              { icon: <User className="w-5 h-5" />, section: 'about' },
              { icon: <Briefcase className="w-5 h-5" />, section: 'experience' },
            ].map((item, index) => (
              <ScrollLink
                key={index}
                to={item.section}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
              >
                <motion.button
                  onClick={() => handleNavigation(item.section)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full transition-colors ${
                    activeSection === item.section
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {item.icon}
                </motion.button>
              </ScrollLink>
            ))}
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </nav>

        {/* Content */}
        <Element name="home" className="min-h-screen flex items-center justify-center">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            >
              Paulo Escobar 
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
            >
              Desarrollador Web 
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center gap-4 mb-12"
            >
              {[
                { Icon: Github, href: 'https://github.com/paulodelflow' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/paulo-escobar-ba76b0224/' },
                { Icon: Mail, href: 'mailto:pauloxmiranda2@gmail.com' },
                { Icon: Instagram, href: 'https://www.instagram.com/react.de.pana/?hl=es' },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.section>
        </Element>

        <Element name="about" className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80"
            >
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Paulo Escobar | Profesional Comprometido</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Soy un profesional dedicado que valora la excelencia y el compromiso en el trabajo. Mantengo la calma y el enfoque en situaciones de estrés, siempre priorizando la empatía y la colaboración en el equipo. Creo firmemente en la importancia de un entorno laboral positivo, donde el respeto y el apoyo mutuo impulsen el éxito colectivo.
                Mi meta es seguir creciendo, tanto personal como profesionalmente, aprendiendo de quienes me rodean y aportando valor con mi experiencia. Estoy siempre abierto a nuevos desafíos que me permitan optimizar procesos y mejorar la calidad del servicio.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80"
            >
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Mis Tecnologías</h2>
              {Object.entries(technologies).map(([category, items], categoryIndex) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300 capitalize">{category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-md shadow-sm"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </Element>

        <Element name="experience" className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80"
            >
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Experiencia</h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="border-l-2 border-blue-500 pl-4"
                  >
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.period} · {exp.company}</p>
                    <p className="text-gray-700 dark:text-gray-300 my-2">{exp.description}</p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Actividades</h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {exp.activities.map((activity, i) => (
                          <li key={i}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Habilidades</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Element>
      </div>
    </div>
  )
}


