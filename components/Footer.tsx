import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white backdrop-blur-sm text-slate-600 border-t border-slate-100">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-2xl text-slate-700 mb-4">Dr. Serena Blake</h2>
            <p className="text-sm">Licensed clinical psychologist providing compassionate therapy and evidence-based approaches to help you overcome anxiety, strengthen relationships, and heal from trauma.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-emerald-600 transition-all duration-300">Services</Link></li>
              <li><Link href="/about" className="hover:text-emerald-600 transition-all duration-300">About</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-600 transition-all duration-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600 transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-slate-700 mb-4">Contact</h3>
            <p className="mb-2">Maplewood Drive, Los Angeles, CA</p>
            <p className="mb-2">Email: info@drblake.com</p>
            <p className="mb-4">Office Hours:</p>
            <ul className="mb-4 text-sm">
              <li>• In-person: Tue & Thu, 10 AM–6 PM</li>
              <li>• Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-emerald-50 text-emerald-600 hover:text-emerald-700 p-2 rounded-full transition-all duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="bg-emerald-50 text-emerald-600 hover:text-emerald-700 p-2 rounded-full transition-all duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.75c2.136 0 2.389.009 3.233.047.78.035 1.204.166 1.486.275.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.275 1.486.038.844.047 1.097.047 3.233s-.009 2.389-.047 3.233c-.035.78-.166 1.204-.275 1.486-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.486.275-.844.038-1.097.047-3.233.047s-2.389-.009-3.233-.047c-.78-.035-1.204-.166-1.486-.275a2.478 2.478 0 01-.92-.598 2.478 2.478 0 01-.598-.92c-.11-.282-.24-.705-.275-1.486-.038-.844-.047-1.097-.047-3.233s.009-2.389.047-3.233c.035-.78.166-1.204.275-1.486.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.486-.275.844-.038 1.097-.047 3.233-.047z"/></svg>
              </a>
              <a href="#" className="bg-emerald-50 text-emerald-600 hover:text-emerald-700 p-2 rounded-full transition-all duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer