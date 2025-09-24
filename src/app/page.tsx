import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/icons/Icon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Music School in Calgary - Studio 9',
  description:
    'Studio 9 offers professional music education for all ages in Calgary. Learn piano, guitar, violin, drums, and voice with experienced instructors. Family-friendly environment with flexible scheduling.',
  keywords: [
    'music school Calgary',
    'piano lessons Calgary',
    'guitar lessons Calgary',
    'violin lessons Calgary',
    'drum lessons Calgary',
    'voice lessons Calgary',
    'music education Calgary',
    'Studio 9 Calgary',
  ],
  openGraph: {
    title: 'Professional Music School in Calgary - Studio 9',
    description:
      'Professional music education for all ages in Calgary. Piano, guitar, violin, drums, and voice lessons with experienced instructors.',
    images: [
      {
        url: '/music.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio 9 Music School - Professional Music Education',
      },
    ],
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool',
    name: 'Studio 9 Music School',
    description:
      'Professional music education for all ages in Calgary. Learn piano, guitar, violin, drums, and voice with experienced instructors.',
    url: 'https://studio9calgary.com',
    telephone: '(403) 271-2066',
    email: 'bonavista@studio9.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    openingHours: ['Mo-Fr 15:00-20:00', 'Sa 09:00-17:00'],
    priceRange: '$38-$40 per lesson',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Music Lessons',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Piano Lessons',
            description: 'Professional piano instruction for all ages',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Guitar Lessons',
            description: 'Acoustic and electric guitar instruction',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Violin Lessons',
            description: 'Classical violin instruction',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Drum Lessons',
            description: 'Professional drum instruction',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Voice Lessons',
            description: 'Professional vocal instruction',
          },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/studio9calgary',
      'https://www.instagram.com/studio9calgary',
      'https://www.youtube.com/studio9calgary',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/music.jpg"
              alt="music instruments"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6 text-white">
              Discover Your
              <span className="block text-accent">Musical Journey</span>
            </h1>
            <p className="text-xl mb-8 text-neutral-200 max-w-3xl mx-auto">
              Studio 9 offers professional music education for all ages in a
              nurturing, family-friendly environment. From beginner to advanced,
              we help you unlock your musical potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registration"
                className="bg-accent-solid text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 text-center"
              >
                Start Your Journey
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors duration-200 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
                Our Programs
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                We offer comprehensive music education programs designed to
                inspire and develop musical talent at every level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Piano */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="piano" size={32} color="var(--accent-600)" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                    Piano Lessons
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Master the fundamentals of piano playing with our
                    experienced instructors. Perfect for all ages and skill
                    levels.
                  </p>
                  <ul className="text-left text-neutral-600 space-y-2 mb-6">
                    <li>• Classical & Contemporary Styles</li>
                    <li>• Theory & Technique</li>
                    <li>• Performance Opportunities</li>
                    <li>• Ages 5+</li>
                  </ul>
                  <Link
                    href="/programs"
                    className="text-accent font-semibold hover:opacity-80 transition-opacity duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Guitar */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="guitar" size={32} color="var(--accent-600)" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                    Guitar Lessons
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Learn acoustic and electric guitar with personalized
                    instruction tailored to your musical interests and goals.
                  </p>
                  <ul className="text-left text-neutral-600 space-y-2 mb-6">
                    <li>• Acoustic & Electric</li>
                    <li>• Rock, Pop, Classical</li>
                    <li>• Fingerpicking & Strumming</li>
                    <li>• Ages 8+</li>
                  </ul>
                  <Link
                    href="/programs"
                    className="text-accent font-semibold hover:opacity-80 transition-opacity duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Voice */}
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon
                      name="microphone"
                      size={32}
                      color="var(--accent-600)"
                    />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                    Voice Lessons
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    Develop your vocal skills with professional voice training
                    covering technique, breathing, and performance.
                  </p>
                  <ul className="text-left text-neutral-600 space-y-2 mb-6">
                    <li>• Vocal Technique</li>
                    <li>• Breathing Exercises</li>
                    <li>• Performance Skills</li>
                    <li>• All Ages</li>
                  </ul>
                  <Link
                    href="/programs"
                    className="text-accent font-semibold hover:opacity-80 transition-opacity duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Studio 9 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
                Why Choose Studio 9?
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                We&apos;re committed to providing exceptional music education in
                a supportive, professional environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="user" size={24} color="white" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Expert Instructors
                </h3>
                <p className="text-neutral-600">
                  Learn from professional musicians with years of teaching
                  experience.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="home" size={24} color="white" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Family-Friendly
                </h3>
                <p className="text-neutral-600">
                  Safe, welcoming environment perfect for students of all ages.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="clock" size={24} color="white" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-neutral-600">
                  Lessons available throughout the week to fit your busy
                  schedule.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="trophy" size={24} color="white" />
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  Performance Opportunities
                </h3>
                <p className="text-neutral-600">
                  Regular recitals and performances to showcase your progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-accent-solid text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-xl mb-8 text-neutral-200">
              Join hundreds of students who have discovered their passion for
              music at Studio 9. Book your first lesson today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registration"
                className="bg-white text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200"
              >
                Enroll Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-accent transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
