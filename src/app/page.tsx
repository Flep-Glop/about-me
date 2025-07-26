"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
  const [rogueLightboxOpen, setRogueLightboxOpen] = useState(false);
  const [rogueLightboxIndex, setRogueLightboxIndex] = useState(0);
  const [quickWriteLightboxOpen, setQuickWriteLightboxOpen] = useState(false);
  const [quickWriteLightboxIndex, setQuickWriteLightboxIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Luke Lussier
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Senior Medical Physics Resident | UT Health San Antonio
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:lussierl@uthscsa.edu" 
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/luke-lussier-332243171/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/Luke Lussier (S).jpg"
              alt="Luke Lussier"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 shadow-lg"
            />
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Passionate about advancing medical physics education and clinical efficiency through innovative digital tools. 
            Currently developing solutions that make complex physics concepts more intuitive and clinical workflows more streamlined.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Featured Projects
          </h2>

          {/* Rogue Resident Project */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Image
                    src="/images/rogue1.png"
                    alt="Rogue Resident Knowledge Constellation"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                    onClick={() => {
                      setRogueLightboxIndex(0);
                      setRogueLightboxOpen(true);
                    }}
                  />
                  <Image
                    src="/images/rogue2.png"
                    alt="Rogue Resident Gameplay"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                    onClick={() => {
                      setRogueLightboxIndex(1);
                      setRogueLightboxOpen(true);
                    }}
                  />
                  <Image
                    src="/images/rogue3.png"
                    alt="Rogue Resident Interface"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                    onClick={() => {
                      setRogueLightboxIndex(2);
                      setRogueLightboxOpen(true);
                    }}
                  />
                   <Image
                    src="/images/rogue4.png"
                    alt="Rogue Resident Achievements"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md w-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                    onClick={() => {
                      setRogueLightboxIndex(3);
                      setRogueLightboxOpen(true);
                    }}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-teal-600">
                  Rogue Resident: Medical Physics Education Reimagined
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A new approach to medical physics education that visualizes knowledge as an interconnected constellation. 
                  Instead of memorizing isolated facts, residents build connections between concepts across all four domains 
                  while working through clinically relevant scenarios.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      Visual knowledge mapping with interconnected concepts
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      Narrative-driven learning with memorable characters
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      Progressive difficulty matching learner development
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      Covers all four core domains: Treatment Planning, Radiation Therapy, Linac Anatomy, and Dosimetry
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Target:</span>
                    <p className="text-gray-600">Medical physics residents and students</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Status:</span>
                    <p className="text-gray-600">In active development</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Platform:</span>
                    <p className="text-gray-600">Web-based (subscription model planned)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QuickWrite Clinical Tool */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Description */}
              <div className="space-y-6 md:order-1">
                <h3 className="text-2xl font-bold text-teal-600">
                  QuickWrite: Streamlined Clinical Documentation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  A purpose-built tool designed to streamline MPC writeups for fusions and DIBHs using dynamic output 
                  based on simple input, reducing time and errors. Part of the larger Residency Toolkit project featuring 
                  updated digital tools for QA, P&Ps, and more.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      Automated MPC writeup generation for fusions and DIBHs
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      Dynamic output based on simple user input
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      Significant time savings and error reduction
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      Part of comprehensive Residency Toolkit suite
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Target:</span>
                    <p className="text-gray-600">Practicing medical physicists</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Impact:</span>
                    <p className="text-gray-600">Streamlined clinical workflows</p>
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="space-y-4 md:order-2">
                <Image
                  src="/images/quickwrite1.png"
                  alt="QuickWrite Main Interface"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md w-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                  onClick={() => {
                    setQuickWriteLightboxIndex(0);
                    setQuickWriteLightboxOpen(true);
                  }}
                />
                <Image
                  src="/images/quickwrite2.png"
                  alt="QuickWrite Report Generation"
                  width={600}
                  height={300}
                  className="rounded-lg shadow-md w-full object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                  onClick={() => {
                    setQuickWriteLightboxIndex(1);
                    setQuickWriteLightboxOpen(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Interested in Learning More?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            I&apos;m always excited to discuss innovations in medical physics education and clinical tools. 
            Feel free to reach out:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-700 text-2xl mb-2">📧</div>
              <a 
                href="mailto:lussierl@uthscsa.edu"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                lussierl@uthscsa.edu
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-700 text-2xl mb-2">📱</div>
              <a 
                href="tel:+12106393003"
                className="text-blue-700 hover:text-blue-900 font-medium"
              >
                (210) 639-3003
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-700 text-2xl mb-2">🏥</div>
              <p className="text-gray-700">
                Mays Cancer Center<br />
                UT Health San Antonio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2025 Luke Lussier | Built with ❤️ for the medical physics community
          </p>
        </div>
      </footer>

      <Lightbox
        open={rogueLightboxOpen}
        close={() => setRogueLightboxOpen(false)}
        slides={[
          { src: "/images/rogue1.png" },
          { src: "/images/rogue2.png" },
          { src: "/images/rogue3.png" },
          { src: "/images/rogue4.png" },
        ]}
        index={rogueLightboxIndex}
        plugins={[Zoom]}
      />

      <Lightbox
        open={quickWriteLightboxOpen}
        close={() => setQuickWriteLightboxOpen(false)}
        slides={[
          { src: "/images/quickwrite1.png" },
          { src: "/images/quickwrite2.png" },
        ]}
        index={quickWriteLightboxIndex}
        plugins={[Zoom]}
      />
    </div>
  );
}
