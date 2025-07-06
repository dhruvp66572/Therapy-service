import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
  <section className="mx-auto py-8 sm:py-12 md:py-16 px-2 sm:px-4 bg-gray-400">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center">Services & Specialties</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl mx-auto">
      <ServiceCard
        title="Anxiety & Stress Management"
        image="/images/Stress.jpg"
        description="Personalized strategies to help you manage stress and reduce anxiety through evidence-based approaches."
      />
      <ServiceCard
        title="Relationship Counseling"
        image="/images/realationshipjpg.jpg"
        description="Improve communication, strengthen connections, and resolve conflicts in a safe, supportive space."
      />
      <ServiceCard
        title="Trauma Recovery"
        image="/images/Trauma.jpg"
        description="Heal from past trauma with compassionate support and proven therapeutic techniques tailored to your needs."
      />       
    </div>    
  </section>
  )
}

export default Services