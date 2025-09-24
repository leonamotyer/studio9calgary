import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/icons/Icon';

export default function Programs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-solid text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
              Our Music Programs
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
              Professional music education designed to help you achieve your
              musical goals. Choose from private lessons, group classes, and
              specialized programs.
            </p>
          </div>
        </div>
      </section>

      {/* Private Lessons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-primary mb-6">
                Private Lessons
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Private one-on-one lessons are the most effective and efficient
                way to learn how to play a musical instrument. Your instructor
                will work with you individually to:
              </p>
              <ul className="space-y-3 text-neutral-600 mb-8">
                <li className="flex items-start">
                  <Icon
                    name="target"
                    size={20}
                    color="var(--accent-600)"
                    className="mr-3 mt-1 flex-shrink-0"
                  />
                  Help you achieve your goals and overcome obstacles
                </li>
                <li className="flex items-start">
                  <Icon
                    name="book"
                    size={20}
                    color="var(--accent-600)"
                    className="mr-3 mt-1 flex-shrink-0"
                  />
                  Build a lesson plan tailored to your interests and needs
                </li>
                <li className="flex items-start">
                  <Icon
                    name="clock"
                    size={20}
                    color="var(--accent-600)"
                    className="mr-3 mt-1 flex-shrink-0"
                  />
                  Create a practice schedule that helps you learn faster
                </li>
                <li className="flex items-start">
                  <Icon
                    name="user"
                    size={20}
                    color="var(--accent-600)"
                    className="mr-3 mt-1 flex-shrink-0"
                  />
                  Provide personal mentorship and coaching
                </li>
              </ul>
              <Link
                href="/registration"
                className="bg-accent-solid text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 inline-block"
              >
                Start Private Lessons
              </Link>
            </div>
            <div className="relative">
              <div className="bg-neutral-100 rounded-2xl p-8">
                <Image
                  src="/music.jpg"
                  alt="Private music lesson"
                  width={500}
                  height={400}
                  className="mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Options */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Flexible Learning Options
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose the learning format that works best for your schedule and
              preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* In-Person Lessons */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="home" size={24} color="white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                  In-Person Lessons
                </h3>
              </div>
              <p className="text-neutral-600 mb-6">
                Perfect for students who prefer face-to-face interaction and a
                dedicated learning environment.
              </p>
              <ul className="space-y-2 text-neutral-600 mb-6">
                <li>• More personal interaction with instructors</li>
                <li>• Professional learning environment</li>
                <li>• Access to studio equipment and instruments</li>
                <li>• Structured learning atmosphere</li>
                <li>• Available Monday through Saturday</li>
              </ul>
            </div>

            {/* Online Lessons */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="clock" size={24} color="white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-primary mb-4">
                  Online Lessons
                </h3>
              </div>
              <p className="text-neutral-600 mb-6">
                Convenient virtual lessons for students who prefer learning from
                home or need flexible scheduling.
              </p>
              <ul className="space-y-2 text-neutral-600 mb-6">
                <li>• Learn from the comfort of your home</li>
                <li>• Flexible scheduling options</li>
                <li>• Socially distanced learning</li>
                <li>• Extended hours including weekends</li>
                <li>• Same quality instruction as in-person</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Format */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Lesson Structure
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our lessons follow a proven format designed to maximize your
              learning and progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-4">
                Warm-up & Review
              </h3>
              <p className="text-neutral-600">
                Brief warm-up exercises followed by a review of previous
                week&apos;s material and practice progress.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-4">
                New Concepts
              </h3>
              <p className="text-neutral-600">
                Introduction of new techniques, exercises, and repertoire
                tailored to your skill level and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="font-semibold text-lg text-primary mb-4">
                Practice Assignment
              </h3>
              <p className="text-neutral-600">
                Clear assignment of exercises and pieces to practice for the
                upcoming week with specific goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Offered */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Instruments We Teach
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Learn any of these popular instruments with our experienced
              instructors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="piano" size={32} color="var(--accent-600)" />
              </div>
              <h3 className="font-semibold text-primary">Piano</h3>
            </div>

            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="guitar" size={32} color="var(--accent-600)" />
              </div>
              <h3 className="font-semibold text-primary">Guitar</h3>
            </div>

            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="microphone" size={32} color="var(--accent-600)" />
              </div>
              <h3 className="font-semibold text-primary">Voice</h3>
            </div>

            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="violin" size={32} color="var(--accent-600)" />
              </div>
              <h3 className="font-semibold text-primary">Violin</h3>
            </div>

            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="drums" size={32} color="var(--accent-600)" />
              </div>
              <h3 className="font-semibold text-primary">Drums</h3>
            </div>

            <div className="text-center">
              <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="book" size={32} color="var(--accent-600)" />
              </div>
              <h3 className="font-semibold text-primary">Music Theory</h3>
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
            music at Studio 9. Contact us today to schedule your first lesson!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registration"
              className="bg-white text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              Register Now
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
  );
}
