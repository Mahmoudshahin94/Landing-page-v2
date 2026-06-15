'use client';

import Link from 'next/link';
import { Leaf, Camera, MessageCircle, Share2, Play, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '@/lib/animations';

const quickLinks = ['Our Meals', 'How It Works', 'Pricing', 'About Us', 'Blog', 'Careers'];
const legalLinks = ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Refund Policy'];

const socialLinks = [
  { icon: Camera, label: 'Instagram', href: '#' },
  { icon: MessageCircle, label: 'Twitter', href: '#' },
  { icon: Share2, label: 'Facebook', href: '#' },
  { icon: Play, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-[#10b981] rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Eat<span className="text-[#10b981]">Fresh</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Real food, real ingredients, real results. We make healthy eating effortless so you can focus on living your best life.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#10b981] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-[#10b981] transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (888) 328-7373</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">hello@eatfresh.co</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#10b981] mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Fresh Street<br />Los Angeles, CA 90001</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 mb-1">Delivery Hours</p>
              <p className="text-sm text-white font-medium">Mon–Sat: 7am – 9pm</p>
              <p className="text-sm text-white font-medium">Sunday: 8am – 6pm</p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-5">Stay Fresh</h4>
            <p className="text-gray-400 text-sm mb-4">Get weekly meal inspiration, nutrition tips and exclusive offers.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#10b981] transition-colors"
              />
              <button className="w-full py-3 bg-[#10b981] hover:bg-[#059669] text-white font-semibold rounded-xl transition-colors text-sm">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-3">No spam. Unsubscribe any time.</p>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 EatFresh. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
