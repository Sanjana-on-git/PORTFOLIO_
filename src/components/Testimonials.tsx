import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Working with Alex was an absolute pleasure. Their expertise in web development transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversion rates. Alex has a remarkable ability to understand business needs and translate them into effective digital solutions.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      company: 'Innovate Digital',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Alex delivered an exceptional e-commerce platform for our business. Their technical skills are impressive, but what truly sets them apart is their attention to detail and commitment to creating the best possible user experience. The website is not only beautiful but also performs excellently, which has led to a 40% increase in our online sales.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'SaaS Platform',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'We hired Alex to help us rebuild our web application from the ground up, and the results exceeded our expectations. Their in-depth knowledge of React and modern frontend architecture has given us a stable, scalable platform that our customers love. Alex was communicative throughout the entire process and delivered on time and within budget.'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Founder',
      company: 'FitTrack App',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      content: 'Alex took our concept for a fitness tracking app and turned it into a reality. Their expertise in both frontend and backend development was invaluable. They not only built a beautiful interface but also ensured that the application was fast, secure, and reliable. I highly recommend Alex for any web or mobile development project.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Navigation controls
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Select a specific testimonial
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            What clients and colleagues have to say about working with me.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="mb-4 flex justify-center md:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i} 
                                className="w-5 h-5 text-yellow-500 fill-current" 
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                          <blockquote className="text-slate-700 dark:text-slate-300 text-lg mb-6 italic">
                            "{testimonial.content}"
                          </blockquote>
                          <div className="text-center md:text-left">
                            <div className="font-bold text-lg text-slate-800 dark:text-white">
                              {testimonial.name}
                            </div>
                            <div className="text-slate-600 dark:text-slate-400">
                              {testimonial.role}, {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-between p-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots for navigation */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeIndex === index 
                        ? 'bg-indigo-600 dark:bg-indigo-400' 
                        : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};