import Link from 'next/link';
import Icon from '@/components/icons/Icon';
import instructorsData from './instructors.json';

type IconName = 'piano' | 'guitar' | 'violin' | 'drums' | 'microphone' | 'book';

interface Instructor {
  id: number;
  name: string;
  instrument: string;
  specialty: string;
  description: string;
  qualifications: string[];
  icon: IconName;
}

export default function Instructors() {
  const instructors: Instructor[] = instructorsData.instructors as Instructor[];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-solid text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6">
              Our Instructors
            </h1>
            <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
              Meet our talented team of professional music instructors who are
              dedicated to helping you achieve your musical goals.
            </p>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Expert Music Teachers
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our instructors are professional musicians with years of teaching
              experience and a passion for music education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map(instructor => (
              <div
                key={instructor.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="bg-neutral-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon
                      name={instructor.icon}
                      size={40}
                      color="var(--accent-600)"
                    />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-accent font-semibold mb-4">
                    {instructor.specialty}
                  </p>
                  <p className="text-neutral-600 mb-4">
                    {instructor.description}
                  </p>
                  <div className="text-sm text-neutral-500">
                    {instructor.qualifications.map((qualification, index) => (
                      <p key={index}>• {qualification}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Instructors */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Why Choose Our Instructors?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our teaching team brings together professional musicians,
              experienced educators, and passionate mentors dedicated to your
              musical success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="user" size={24} color="white" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">
                Professional Musicians
              </h3>
              <p className="text-neutral-600">
                Our instructors are active professional musicians with
                real-world performance experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="book" size={24} color="white" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">
                Formal Education
              </h3>
              <p className="text-neutral-600">
                All instructors hold degrees in music or music education from
                accredited institutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="heart" size={24} color="white" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">
                Passionate Teachers
              </h3>
              <p className="text-neutral-600">
                Our instructors are dedicated to sharing their love of music and
                helping students succeed.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-solid w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="star" size={24} color="white" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">
                Proven Results
              </h3>
              <p className="text-neutral-600">
                Our students consistently achieve their goals and develop
                lifelong musical skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent-solid text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 text-neutral-200">
            Meet with one of our instructors to discuss your musical goals and
            find the perfect match for your learning style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/registration"
              className="bg-white text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              Register Today
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
