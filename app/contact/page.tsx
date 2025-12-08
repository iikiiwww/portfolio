'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for your message. I will get back to you soon.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+62 812 3456 7890',
      link: 'https://wa.me/6282134915306',
      color: 'text-green-600',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@_iikiiwww',
      link: 'https://www.instagram.com/_iikiiwww?igsh=MnFnb3R5aWhiNmNj&utm_source=qr',
      color: 'text-pink-600',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'rifki@students.amikom.ac.id',
      link: 'mailto:rifki@students.amikom.ac.id',
      color: 'text-blue-600',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Get In Touch
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full shadow-md"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full border-muted/30 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Send Me a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="rounded-xl focus:ring-2 focus:ring-primary transition-all"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="rounded-xl focus:ring-2 focus:ring-primary transition-all"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={5}
                      className="rounded-xl focus:ring-2 focus:ring-primary transition-all"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl text-base font-medium shadow-md hover:shadow-xl transition-all"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="border-muted/30 shadow-sm hover:shadow-xl rounded-2xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
                <CardDescription className="text-muted-foreground">
                  You can also reach me through any of these channels.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border hover:border-primary hover:shadow-md transition-all duration-300 group bg-background"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`bg-primary/10 p-3 rounded-full shadow-inner ${method.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <p className="font-medium text-sm text-muted-foreground">
                          {method.title}
                        </p>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
