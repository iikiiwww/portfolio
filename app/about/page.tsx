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
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <img
              src="/profile/kiw.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-accent/50 border-l-4 border-primary p-6 rounded-lg mb-12"
        >
          <p className="text-lg sm:text-xl italic text-foreground leading-relaxed text-center">
            "Are you a great developer because you write good code, or do you write good code because you're a great developer?"
          </p>
          <p className="text-sm text-muted-foreground mt-2 text-center">— Inspired by Jujutsu Kaisen</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Who Am I?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate full stack developer with expertise in building modern web applications.
                I love creating elegant solutions to complex problems and am always eager to learn new technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With several years of experience in the industry, I have worked on various projects ranging
                from small business websites to large-scale enterprise applications. My focus is on writing
                clean, maintainable code and delivering exceptional user experiences.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bioData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
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
