'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Calendar, User, Globe } from 'lucide-react';

export default function AboutPage() {
  const bioData = [
    { icon: User, label: 'Name', value: 'Muhammad Rifki' },
    { icon: Calendar, label: 'Birthday', value: '23 January 2002' },
    { icon: Globe, label: 'Website', value: 'https://portfolio-ruby-zeta-87.vercel.app/', link: 'https://portfolio-ruby-zeta-87.vercel.app/' },
    { icon: Mail, label: 'Phone', value: '+62-8213-4915-306' },
    { icon: MapPin, label: 'City', value: 'Sleman, Yogyakarta' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/40 fade-in">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight title-glow neon-underline">
            About Me
          </h1>
          <div className="w-24 h-1 rounded-full bg-primary/80 mx-auto shadow-soft"></div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden glow-border glass parallax-hover hologram">
            <img
              src="/profile/kiw.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass border-l-4 border-primary p-6 rounded-xl shadow-soft mb-12 sparkle"
        >
          <p className="text-lg sm:text-xl italic text-foreground leading-relaxed text-center">
            "Are you a great developer because you write good code, or do you
            write good code because you're a great developer?"
          </p>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            — Inspired by Jujutsu Kaisen
          </p>
        </motion.div>

        {/* Who Am I */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="glass shadow-smooth hover:shadow-soft-lg transition-all section-float">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 tracking-tight title-glow">Who Am I?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate full stack developer with expertise in building
                modern web applications. I love crafting elegant solutions and am
                always eager to learn new technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, I have worked on various projects ranging from
                small business websites to large-scale enterprise applications.
                My mission is to create clean, maintainable code and deliver
                polished, meaningful user experiences.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Personal Info */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <h2 className="text-2xl font-bold mb-6 text-center tracking-tight title-glow">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bioData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="glass hover:shadow-soft-lg shadow-soft transition-all duration-300 cursor-pointer group hover-float">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">

                        {/* Icon */}
                        <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>

                        {/* Text */}
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="font-medium">{item.value}</p>
                          )}
                        </div>

                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
