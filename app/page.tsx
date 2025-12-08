'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">

        {/* Main Container Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          {/* Profile Picture */}
          <div className="mb-10 flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="relative w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20"
            >
              <img
                src="/profile/kiw.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Hi, I'm <span className="text-primary">Rifki</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-10"
          >
            Full Stack Developer
          </motion.p>

          {/* Quote Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-card/50 backdrop-blur-md border border-border/50 p-6 sm:p-8 rounded-2xl mb-14 shadow-md shadow-primary/5 max-w-3xl mx-auto"
          >
            <p className="text-lg sm:text-xl italic leading-relaxed text-foreground">
              "Are you a great developer because you write good code, or do you write good code because you're a great developer?"
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              — Inspired by Jujutsu Kaisen
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/about">
              <Button
                size="lg"
                className="group rounded-xl shadow hover:shadow-lg transition-all"
              >
                About Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="group rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="group rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
