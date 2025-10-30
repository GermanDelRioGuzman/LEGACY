'use client';

import React from 'react';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Variantes de animación más fluidas
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as any }, // ✅ ignora el tipo
  },
};



  // 🔽 función de desplazamiento suave
  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="bg-white text-gray-900 font-sans">

      {/* 🧭 NAVBAR flotante y redondeado */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-2xl w-11/12 max-w-7xl z-50 transition-all duration-500">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'learnity', 'lynk', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(`#${id}`)}
                className="hover:text-black text-gray-700 transition-all"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-3 space-y-2 shadow-md rounded-lg mt-2">
            {['home', 'about', 'learnity', 'lynk', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(`#${id}`)}
                className="block text-gray-700 hover:text-black"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* 🏠 HERO */}
      <motion.section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-100 relative px-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: false, amount: 0.4 }}
      >
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl items-center">
          <motion.div className="md:w-1/2 text-center md:text-left" variants={sectionVariants}>
            <h1 className="text-8xl font-bold mb-6">LEGACY</h1>
            <h2 className="text-5xl font-bold mb-6 text-gray-700">technologies</h2>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={sectionVariants}
            transition={{ delay: 0.2 }}
          >
            <Image src="/logo.png" alt="Imagen representativa" width={600} height={400} />
          </motion.div>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-8 text-gray-700 hover:text-black transition-all duration-300"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <FaChevronDown size={32} />
          </motion.div>
        </button>
      </motion.section>

      {/* 🧠 ABOUT */}
      <motion.section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center bg-white px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl">
          <motion.div className="md:w-1/2 flex justify-center" variants={sectionVariants}>
            <Image src="/4.png" alt="Sobre Nosotros" width={500} height={400} />
          </motion.div>

          <motion.div className="md:w-1/2 text-center md:text-left" variants={sectionVariants}>
            <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-gray-800 text-lg mb-4">
              Legacy Technologies crea soluciones de inteligencia artificial que transforman la educación y la comunicación empresarial.
            </p>
            <p className="text-gray-700 text-lg">
              Nuestro objetivo es ofrecer productos con el diseño y la elegancia que caracterizan a las mejores marcas del mundo.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 📚 LEARNITY */}
      <motion.section
        id="learnity"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl">
          <motion.div className="md:w-1/2 text-center md:text-left" variants={sectionVariants}>
            <h2 className="text-4xl font-bold mb-6">Learnity</h2>
            <p className="text-gray-800 mb-6 text-lg">
              Learnity es una plataforma educativa impulsada por IA, diseñada para facilitar la gestión de cursos, estudiantes y reportes.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Gestión inteligente de estudiantes</li>
              <li>Reportes automáticos</li>
              <li>Interfaz moderna y limpia</li>
            </ul>
          </motion.div>

          <motion.div className="md:w-1/2 flex justify-center" variants={sectionVariants}>
            <Image src="/2.png" alt="Learnity" width={500} height={400} />
          </motion.div>
        </div>
      </motion.section>

      {/* 🤖 LYNK */}
      <motion.section
        id="lynk"
        className="min-h-screen flex flex-col justify-center items-center bg-white px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl">
          <motion.div className="md:w-1/2 flex justify-center" variants={sectionVariants}>
            <Image src="/3.png" alt="Lynk" width={500} height={400} />
          </motion.div>

          <motion.div className="md:w-1/2 text-center md:text-left" variants={sectionVariants}>
            <h2 className="text-4xl font-bold mb-6">Lynk</h2>
            <p className="text-gray-800 mb-6 text-lg">
              Lynk es una contestadora inteligente con IA que gestiona llamadas, organiza contactos y responde automáticamente.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ✉️ CONTACTO */}
      <motion.section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 md:px-20 text-center"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="mb-6 text-lg">
          Escríbenos a <span className="font-semibold">contact@legacytech.com</span>
        </p>
        <p className="text-gray-400 text-sm">&copy; 2025 Legacy Technologies. Todos los derechos reservados.</p>
      </motion.section>
    </main>
  );
}
