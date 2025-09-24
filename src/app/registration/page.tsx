'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Registration() {
  const [formData, setFormData] = useState({
    studentName: '',
    studentAge: '',
    parentName: '',
    email: '',
    phone: '',
    instrument: '',
    experience: '',
    preferredDays: [] as string[],
    preferredTimes: [] as string[],
    additionalInfo: '',
  });

  const instruments = [
    'Piano',
    'Guitar (Acoustic)',
    'Guitar (Electric)',
    'Voice',
    'Violin',
    'Drums',
    'Bass Guitar',
    'Saxophone',
    'Flute',
    'Clarinet',
    'Trumpet',
    'Other',
  ];

  const experienceLevels = [
    'Complete Beginner',
    'Some Experience',
    'Intermediate',
    'Advanced',
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    alert(
      'Registration submitted successfully! We will contact you within 24 hours to confirm your lesson schedule.'
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-solid text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
              Register for Lessons
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
              Fall registration is now open! Fill out the form below and
              we&apos;ll get you started with the perfect lesson plan. Contact
              us by phone or email for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-50 rounded-2xl p-8">
            <h2 className="font-playfair text-3xl font-bold text-primary mb-8 text-center">
              Student Registration Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Student Information */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-xl text-primary mb-6">
                  Student Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Student's full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="studentAge"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Student Age *
                    </label>
                    <input
                      type="number"
                      id="studentAge"
                      name="studentAge"
                      required
                      min="5"
                      max="100"
                      value={formData.studentAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Age"
                    />
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-xl text-primary mb-6">
                  Parent/Guardian Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Parent/Guardian full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Musical Preferences */}
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-xl text-primary mb-6">
                  Musical Preferences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="instrument"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Instrument of Interest *
                    </label>
                    <select
                      id="instrument"
                      name="instrument"
                      required
                      value={formData.instrument}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select an instrument</option>
                      {instruments.map(instrument => (
                        <option key={instrument} value={instrument}>
                          {instrument}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="experience"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Experience Level *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select experience level</option>
                      {experienceLevels.map(level => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-accent-solid text-white py-4 px-12 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200"
                >
                  Submit Registration
                </button>
                <p className="text-sm text-neutral-600 mt-4">
                  * Required fields. We&apos;ll contact you within 24 hours to
                  confirm your lesson schedule.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Lesson Pricing
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Affordable, flexible pricing options to fit your budget and
              schedule. Each teacher sets their own rates based on experience
              and qualifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                30-Minute Lessons
              </h3>
              <div className="text-4xl font-bold text-accent mb-4">
                $33 - $42
              </div>
              <p className="text-neutral-600 mb-6">
                Most popular for beginners and young students
              </p>
              <ul className="text-left text-neutral-600 space-y-2 mb-6">
                <li>• Weekly individual lessons</li>
                <li>• Basic technique and theory</li>
                <li>• Progress tracking</li>
                <li>• Monthly billing</li>
              </ul>
              <div className="text-sm text-neutral-500">
                Monthly: $132 - $168 (4 lessons)
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-accent relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                Recommended
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                45-Minute Lessons
              </h3>
              <div className="text-4xl font-bold text-accent mb-4">
                $50 - $63
              </div>
              <p className="text-neutral-600 mb-6">
                Ideal for intermediate students
              </p>
              <ul className="text-left text-neutral-600 space-y-2 mb-6">
                <li>• Extended practice time</li>
                <li>• Advanced technique work</li>
                <li>• Music theory included</li>
                <li>• Regular recitals</li>
              </ul>
              <div className="text-sm text-neutral-500">
                Monthly: $200 - $252 (4 lessons)
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                60-Minute Lessons
              </h3>
              <div className="text-4xl font-bold text-accent mb-4">
                $67 - $84
              </div>
              <p className="text-neutral-600 mb-6">
                For advanced students and adults
              </p>
              <ul className="text-left text-neutral-600 space-y-2 mb-6">
                <li>• Comprehensive instruction</li>
                <li>• Advanced repertoire</li>
                <li>• Performance preparation</li>
                <li>• Competition coaching</li>
              </ul>
              <div className="text-sm text-neutral-500">
                Monthly: $268 - $336 (4 lessons)
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-6 text-center">
              Payment Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg text-primary mb-3">
                  Monthly Billing
                </h4>
                <p className="text-neutral-600 mb-4">
                  Lessons are billed monthly based on the number of lessons in
                  that month. Most months have 4 lessons, but some may have 3 or
                  5 lessons.
                </p>
                <ul className="text-neutral-600 space-y-2">
                  <li>
                    • Automatic credit card billing on the 1st of each month
                  </li>
                  <li>• Post-dated cheques accepted at registration</li>
                  <li>
                    • Fees adjusted for months with different lesson counts
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-primary mb-3">
                  Flexible Scheduling
                </h4>
                <p className="text-neutral-600 mb-4">
                  We offer lessons Monday through Saturday with convenient times
                  for students and families.
                </p>
                <ul className="text-neutral-600 space-y-2">
                  <li>• In-person lessons: Mon-Sat</li>
                  <li>• Online lessons: Extended hours including Sundays</li>
                  <li>• Family discounts available</li>
                  <li>• Summer programs and workshops</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Ready to get started? Contact us today to schedule your first
              lesson!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent-solid text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200"
              >
                Contact Us
              </Link>
              <a
                href="tel:403-271-2066"
                className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent hover:text-white transition-colors duration-200"
              >
                Call (403) 271-2066
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
