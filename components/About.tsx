import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="py-10 md:py-20 bg-slate-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">About Dr. Blake</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Clinical Psychologist, PsyD</h3>
            
            <p className="text-gray-700 mb-4">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
              with eight years of experience and over 500 client sessions.
            </p>
            
            <p className="text-gray-700 mb-4">
              She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with 
              compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            
            <p className="text-gray-700 mb-4">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
              Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
            
            <div className="mt-6">
              <h4 className="text-lg md:text-xl font-semibold mb-2">Office Hours</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• In-person: Tue & Thu, 10 AM–6 PM</li>
                <li>• Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <Image 
              src="/images/drimg.png" 
              width={600} 
              height={600} 
              alt="Dr. Serena Blake" 
              className="rounded-lg shadow-xl mx-auto w-full h-auto"
              priority 
            />
          </div>
        </div>
      </div>      
    </section>
  )
}

export default About