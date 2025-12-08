      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
      >
        Hi, I'm <span className="text-primary">Rifki</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl sm:text-2xl text-muted-foreground mb-8"
      >
        Full Stack Developer
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-accent/50 border-l-4 border-primary p-6 rounded-lg mb-12 max-w-3xl mx-auto"
      >
        <p className="text-lg sm:text-xl italic text-foreground leading-relaxed">
          "Are you a great developer because you write good code, or do you write good code because you're a great developer?"
        </p>
        <p className="text-sm text-muted-foreground mt-2">— Inspired by Jujutsu Kaisen</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link href="/about">
          <Button size="lg" className="group">
            About Me
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link href="/projects">
          <Button size="lg" variant="outline" className="group">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" variant="secondary" className="group">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  </div>
</div>
