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

  // Carousel states
  const [rogueCarouselIndex, setRogueCarouselIndex] = useState(0);
  const [quickWriteCarouselIndex, setQuickWriteCarouselIndex] = useState(0);

  const rogueImages = [
    { src: "/images/rogue1.png", alt: "Rogue Resident Main Menu" },
    { src: "/images/rogue2a.png", alt: "Rogue Resident Night Phase - Knowledge Constellation" },
    { src: "/images/rogue2b.png", alt: "Rogue Resident Night Phase - Home View" },
    { src: "/images/rogue3.png", alt: "Rogue Resident Activities Interface" },
    { src: "/images/rogue4.png", alt: "Rogue Resident Challenge System" },
  ];

  const quickWriteImages = [
    { src: "/images/quickwrite1.png", alt: "QuickWrite Main Interface" },
    { src: "/images/quickwrite2.png", alt: "QuickWrite Report Generation" },
  ];

  const nextRogueImage = () => {
    setRogueCarouselIndex((prev) => (prev + 1) % rogueImages.length);
  };

  const prevRogueImage = () => {
    setRogueCarouselIndex((prev) => (prev - 1 + rogueImages.length) % rogueImages.length);
  };

  const nextQuickWriteImage = () => {
    setQuickWriteCarouselIndex((prev) => (prev + 1) % quickWriteImages.length);
  };

  const prevQuickWriteImage = () => {
    setQuickWriteCarouselIndex((prev) => (prev - 1 + quickWriteImages.length) % quickWriteImages.length);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--rr-dark-bg)' }}>
      {/* Header Section */}
      <header style={{ background: 'var(--rr-darkest-bg)', borderBottom: '2px solid var(--rr-border)' }}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-3" style={{ color: 'var(--rr-primary)' }}>
              Luke Lussier
            </h1>
            <p className="text-xl md:text-2xl mb-4" style={{ color: 'var(--rr-text-secondary)' }}>
              Senior Medical Physics Resident | UT Health San Antonio
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:lussierl@uthscsa.edu" 
                className="px-4 py-2 rounded transition-all duration-200 hover:scale-105"
                style={{ 
                  background: 'var(--rr-surface)', 
                  color: 'var(--rr-primary)',
                  border: '2px solid var(--rr-primary)'
                }}
              >
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/luke-lussier-332243171/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded transition-all duration-200 hover:scale-105"
                style={{ 
                  background: 'var(--rr-surface)', 
                  color: 'var(--rr-primary)',
                  border: '2px solid var(--rr-primary)'
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/images/Luke Lussier (S).jpg"
              alt="Luke Lussier"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6"
              style={{ border: '4px solid var(--rr-primary)' }}
            />
          </div>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--rr-text-secondary)' }}>
            Passionate about advancing medical physics education and clinical efficiency through innovative digital tools. 
            Currently developing solutions that make complex physics concepts more intuitive and clinical workflows more streamlined.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Rogue Resident Project */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Image Carousel */}
              <div className="space-y-6 lg:col-span-3">
                <div className="relative group">
                  <div 
                    className="rounded-lg overflow-hidden"
                    style={{ 
                      background: 'var(--rr-surface)',
                      border: '3px solid var(--rr-border)',
                      aspectRatio: '16/9'
                    }}
                  >
                    <Image
                      src={rogueImages[rogueCarouselIndex].src}
                      alt={rogueImages[rogueCarouselIndex].alt}
                      width={1200}
                      height={675}
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={() => {
                        setRogueLightboxIndex(rogueCarouselIndex);
                        setRogueLightboxOpen(true);
                      }}
                    />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevRogueImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      style={{ 
                        background: 'var(--rr-darkest-bg)',
                        border: '2px solid var(--rr-primary)',
                        color: 'var(--rr-primary)'
                      }}
                      aria-label="Previous image"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={nextRogueImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                      style={{ 
                        background: 'var(--rr-darkest-bg)',
                        border: '2px solid var(--rr-primary)',
                        color: 'var(--rr-primary)'
                      }}
                      aria-label="Next image"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Thumbnail Indicators */}
                  <div className="flex justify-center gap-3 mt-4">
                    {rogueImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setRogueCarouselIndex(index)}
                        className="w-3 h-3 rounded-full transition-all duration-200"
                        style={{
                          background: index === rogueCarouselIndex ? 'var(--rr-primary)' : 'var(--rr-border)',
                          transform: index === rogueCarouselIndex ? 'scale(1.2)' : 'scale(1)'
                        }}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Image Counter */}
                  <div className="text-center mt-2" style={{ color: 'var(--rr-text-muted)' }}>
                    {rogueCarouselIndex + 1} / {rogueImages.length}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6 lg:col-span-2">
                <h3 className="text-3xl md:text-5xl font-bold" style={{ color: 'var(--rr-accent-warm)' }}>
                  Rogue Resident
                </h3>
                <p className="text-xl" style={{ color: 'var(--rr-yellow)' }}>
                  Medical Physics Education Reimagined
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--rr-text-secondary)' }}>
                  An educational game that visualizes medical physics knowledge as an interconnected constellation, helping motivate and test residents across core domains through engaging activities and clinical scenarios.
                </p>

                <div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-lg"
                  style={{ background: 'var(--rr-surface)', border: '2px solid var(--rr-border)' }}
                >
                  <div>
                    <span className="font-semibold block mb-1" style={{ color: 'var(--rr-primary)' }}>
                      Target
                    </span>
                    <p style={{ color: 'var(--rr-text-muted)' }}>Medical physics residents and students</p>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1" style={{ color: 'var(--rr-accent-green)' }}>
                      Status
                    </span>
                    <p style={{ color: 'var(--rr-text-muted)' }}>In active development</p>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1" style={{ color: 'var(--rr-magenta)' }}>
                      Platform
                    </span>
                    <p style={{ color: 'var(--rr-text-muted)' }}>Web-based (subscription planned)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QuickWrite Clinical Tool */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* Description */}
              <div className="space-y-6 lg:col-span-2 lg:order-1">
                <h3 className="text-3xl md:text-5xl font-bold" style={{ color: 'var(--rr-accent-warm)' }}>
                  QuickWrite
                </h3>
                <p className="text-xl" style={{ color: 'var(--rr-yellow)' }}>
                  Streamlined Clinical Documentation
                </p>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--rr-text-secondary)' }}>
                  Automated MPC writeup generation for fusions, DIBHs, and other complex cases. Currently collecting data from users to quantify the impact of the tool.
                </p>

                <div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-lg"
                  style={{ background: 'var(--rr-surface)', border: '2px solid var(--rr-border)' }}
                >
                  <div>
                    <span className="font-semibold block mb-1" style={{ color: 'var(--rr-primary)' }}>
                      Target
                    </span>
                    <p style={{ color: 'var(--rr-text-muted)' }}>Practicing medical physicists</p>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1" style={{ color: 'var(--rr-accent-green)' }}>
                      Status
                    </span>
                    <p style={{ color: 'var(--rr-text-muted)' }}>Polishing</p>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1" style={{ color: 'var(--rr-magenta)' }}>
                      Platform
                    </span>
                    <p style={{ color: 'var(--rr-text-muted)' }}>Web-based (open-source)</p>
                  </div>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="space-y-6 lg:col-span-3 lg:order-2">
                <div className="relative group">
                  <div 
                    className="rounded-lg overflow-hidden"
                    style={{ 
                      background: 'var(--rr-surface)',
                      border: '3px solid var(--rr-border)',
                      aspectRatio: '16/9'
                    }}
                  >
                    <Image
                      src={quickWriteImages[quickWriteCarouselIndex].src}
                      alt={quickWriteImages[quickWriteCarouselIndex].alt}
                      width={1200}
                      height={675}
                      className="w-full h-full object-contain cursor-pointer"
                      onClick={() => {
                        setQuickWriteLightboxIndex(quickWriteCarouselIndex);
                        setQuickWriteLightboxOpen(true);
                      }}
                    />
                    
                    {quickWriteImages.length > 1 && (
                      <>
                        {/* Navigation Arrows */}
                        <button
                          onClick={prevQuickWriteImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                          style={{ 
                            background: 'var(--rr-darkest-bg)',
                            border: '2px solid var(--rr-primary)',
                            color: 'var(--rr-primary)'
                          }}
                          aria-label="Previous image"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </button>
                        
                        <button
                          onClick={nextQuickWriteImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                          style={{ 
                            background: 'var(--rr-darkest-bg)',
                            border: '2px solid var(--rr-primary)',
                            color: 'var(--rr-primary)'
                          }}
                          aria-label="Next image"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  
                  {quickWriteImages.length > 1 && (
                    <>
                      {/* Thumbnail Indicators */}
                      <div className="flex justify-center gap-3 mt-4">
                        {quickWriteImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setQuickWriteCarouselIndex(index)}
                            className="w-3 h-3 rounded-full transition-all duration-200"
                            style={{
                              background: index === quickWriteCarouselIndex ? 'var(--rr-primary)' : 'var(--rr-border)',
                              transform: index === quickWriteCarouselIndex ? 'scale(1.2)' : 'scale(1)'
                            }}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                      
                      {/* Image Counter */}
                      <div className="text-center mt-2" style={{ color: 'var(--rr-text-muted)' }}>
                        {quickWriteCarouselIndex + 1} / {quickWriteImages.length}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4" style={{ background: 'var(--rr-darkest-bg)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: 'var(--rr-primary)' }}>
            Get in Touch
          </h2>
          <p className="text-lg mb-12" style={{ color: 'var(--rr-text-secondary)' }}>
            Let&apos;s discuss innovations in medical physics education and clinical tools.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div 
              className="p-6 rounded-lg"
              style={{ 
                background: 'var(--rr-surface)',
                border: '2px solid var(--rr-border)'
              }}
            >
              <div className="text-4xl mb-3">📧</div>
              <a 
                href="mailto:lussierl@uthscsa.edu"
                className="font-medium hover:underline"
                style={{ color: 'var(--rr-primary)' }}
              >
                lussierl@uthscsa.edu
              </a>
            </div>
            <div 
              className="p-6 rounded-lg"
              style={{ 
                background: 'var(--rr-surface)',
                border: '2px solid var(--rr-border)'
              }}
            >
              <div className="text-4xl mb-3">📱</div>
              <a 
                href="tel:+12106393003"
                className="font-medium hover:underline"
                style={{ color: 'var(--rr-primary)' }}
              >
                (210) 639-3003
              </a>
            </div>
            <div 
              className="p-6 rounded-lg"
              style={{ 
                background: 'var(--rr-surface)',
                border: '2px solid var(--rr-border)'
              }}
            >
              <div className="text-4xl mb-3">🏥</div>
              <p style={{ color: 'var(--rr-text-secondary)' }}>
                Mays Cancer Center<br />
                UT Health San Antonio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4" style={{ borderTop: '2px solid var(--rr-border)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p style={{ color: 'var(--rr-text-muted)' }}>
            © 2025 Luke Lussier | Built with ❤️ for the medical physics community
          </p>
        </div>
      </footer>

      {/* Lightboxes */}
      <Lightbox
        open={rogueLightboxOpen}
        close={() => setRogueLightboxOpen(false)}
        slides={[
          { src: "/images/rogue1.png" },
          { src: "/images/rogue2a.png" },
          { src: "/images/rogue2b.png" },
          { src: "/images/rogue3.png" },
          { src: "/images/rogue4.png" },
        ]}
        index={rogueLightboxIndex}
        plugins={[Zoom]}
        styles={{
          container: { backgroundColor: "rgba(9, 10, 20, 0.95)" },
        }}
      />

      <Lightbox
        open={quickWriteLightboxOpen}
        close={() => setQuickWriteLightboxOpen(false)}
        slides={quickWriteImages.map(img => ({ src: img.src }))}
        index={quickWriteLightboxIndex}
        plugins={[Zoom]}
        styles={{
          container: { backgroundColor: "rgba(9, 10, 20, 0.95)" },
        }}
      />
    </div>
  );
}
