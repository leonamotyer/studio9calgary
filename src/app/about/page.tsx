import Image from 'next/image';
import Icon from '@/components/icons/Icon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Studio 9 - Professional Music School in Calgary',
  description:
    'Learn about Studio 9 Music School in Calgary. Our mission, values, and commitment to providing professional music education for all ages in a family-friendly environment.',
  keywords: [
    'about Studio 9 Calgary',
    'music school mission Calgary',
    'music education values Calgary',
    'professional music instructors Calgary',
    'music school history Calgary',
  ],
  openGraph: {
    title: 'About Studio 9 - Professional Music School in Calgary',
    description:
      'Learn about Studio 9 Music School in Calgary. Our mission, values, and commitment to professional music education.',
  },
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-solid text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
              About Studio 9
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
              Dedicated to nurturing musical talent and fostering a lifelong
              love of music in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Founded in 2010, Studio 9 has been a cornerstone of musical
                education in our community. What started as a small studio with
                a passion for teaching has grown into a comprehensive music
                school serving hundreds of students each year.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                Our mission is to provide exceptional music education in a
                nurturing, family-friendly environment where every student can
                discover their unique musical voice and develop the skills and
                confidence to express themselves through music.
              </p>
              <p className="text-lg text-neutral-600 mb-6">
                We offer both in-person and online lessons to accommodate
                different learning preferences and schedules. Our experienced
                instructors are committed to helping each student achieve their
                musical goals, whether they&apos;re complete beginners or
                advanced musicians.
              </p>
              <p className="text-lg text-neutral-600">
                We believe that music education goes beyond learning to play an
                instrument. It builds character, enhances creativity, improves
                academic performance, and creates lasting friendships and
                memories that will last a lifetime.
              </p>
            </div>
            <div className="relative">
              <div className="bg-neutral-100 rounded-2xl p-8">
                <Image
                  src="/logo.png"
                  alt="Studio 9 Logo"
                  width={400}
                  height={400}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              These core values guide everything we do at Studio 9.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="target" size={32} color="white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Excellence
              </h3>
              <p className="text-neutral-600">
                We strive for excellence in everything we do, from our teaching
                methods to our student performances.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="heart" size={32} color="white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Passion
              </h3>
              <p className="text-neutral-600">
                Our instructors share a genuine passion for music and teaching,
                inspiring students to develop their own love for music.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="handshake" size={32} color="white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Community
              </h3>
              <p className="text-neutral-600">
                We foster a supportive community where students, families, and
                instructors work together toward musical growth.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="star" size={32} color="white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Individuality
              </h3>
              <p className="text-neutral-600">
                We celebrate each student&apos;s unique musical journey and help
                them develop their own artistic voice.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="book" size={32} color="white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Education
              </h3>
              <p className="text-neutral-600">
                We provide comprehensive music education that includes theory,
                technique, performance, and appreciation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="celebration" size={32} color="white" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                Fun
              </h3>
              <p className="text-neutral-600">
                Learning music should be enjoyable! We create a fun, engaging
                environment that makes students excited to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-accent-solid text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Studio 9 by the Numbers
            </h2>
            <p className="text-xl text-neutral-200">
              Our impact on the musical community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-lg text-neutral-200">Students Taught</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">15</div>
              <div className="text-lg text-neutral-200">Expert Instructors</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">14</div>
              <div className="text-lg text-neutral-200">
                Years of Excellence
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-lg text-neutral-200">
                Annual Performances
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
