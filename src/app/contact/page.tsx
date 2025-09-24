'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

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
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-solid text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
              Ready to start your musical journey? Get in touch with us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Your full name"
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="registration">Registration</option>
                      <option value="lessons">Private Lessons</option>
                      <option value="group">Group Classes</option>
                      <option value="performance">
                        Performance Opportunities
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Tell us about your musical interests and how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-solid text-white py-4 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Address
                    </h3>
                    <p className="text-neutral-600">
                      755 Lake Bonavista Drive
                      <br />
                      Calgary, AB T2J 2X8
                      <br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Phone
                    </h3>
                    <p className="text-neutral-600">
                      (403) 271-2066
                      <br />
                      Mon-Fri: 3:00 PM - 8:00 PM
                      <br />
                      Sat: 9:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Email
                    </h3>
                    <p className="text-neutral-600">
                      bonavista@studio9.com
                      <br />
                      registration@studio9.com
                      <br />
                      lessons@studio9.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neutral-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Office Hours
                    </h3>
                    <p className="text-neutral-600">
                      Monday - Friday: 3:00 PM - 8:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg text-primary mb-4">
                  Find Us
                </h3>
                <div className="bg-neutral-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-neutral-500">
                    Interactive Map Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-600">
              Common questions about our music programs and services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-primary mb-2">
                What age groups do you teach?
              </h3>
              <p className="text-neutral-600">
                We welcome students of all ages! Our programs are designed for
                children as young as 5 years old, teenagers, and adults. We have
                specialized programs for each age group to ensure the best
                learning experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-primary mb-2">
                Do you offer both in-person and online lessons?
              </h3>
              <p className="text-neutral-600">
                Yes! We offer both in-person lessons at our Calgary location and
                online lessons for students who prefer learning from home. Our
                instructors are experienced with both formats and can provide
                the same quality instruction either way.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-primary mb-2">
                What are your lesson rates?
              </h3>
              <p className="text-neutral-600">
                Our rates vary by instructor and lesson length. Most teachers
                charge between $33-$42 for a 30-minute lesson. We offer 30, 45,
                and 60-minute lesson options. Lessons are billed monthly based
                on the number of lessons per month.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-primary mb-2">
                How do I pay for lessons?
              </h3>
              <p className="text-neutral-600">
                We accept post-dated cheques written at registration or credit
                card payments billed automatically on the first of each month.
                Monthly fees are adjusted based on the number of lessons in that
                month.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-primary mb-2">
                What if I need to cancel or reschedule a lesson?
              </h3>
              <p className="text-neutral-600">
                We understand that life happens! We have a flexible cancellation
                policy with 24-hour notice required for cancellations.
                We&apos;ll work with you to reschedule whenever possible.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-primary mb-2">
                Do I need to have my own instrument?
              </h3>
              <p className="text-neutral-600">
                While we encourage students to have their own instruments for
                practice at home, we do have instruments available for use
                during in-person lessons. We can also help you find the right
                instrument to purchase or rent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
