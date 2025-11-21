import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Feather, Scroll, PenTool } from 'lucide-react';

export const WriterVariant = () => {
  return (
    <div className="min-h-screen bg-[#1c1917] text-stone-200 p-8 pt-24 pb-32 font-serif">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <header className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Feather className="w-12 h-12 text-amber-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-medium text-amber-500/90 mb-4 font-serif tracking-tight">
            The Chronicler
          </h1>
          <div className="h-1 w-24 bg-amber-800/50 mx-auto rounded-full" />
          <p className="text-stone-500 italic mt-6 text-lg">
            "And the darkness wept, whispering that it longed for the moonlight... "
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl text-amber-600/80 mb-6 flex items-center gap-3 border-b border-stone-800 pb-2">
              <BookOpen className="w-5 h-5" /> Current Works
            </h2>
            <div className="grid gap-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="bg-stone-900/50 p-6 rounded border-l-2 border-amber-700 hover:bg-stone-900 transition-colors"
              >
                <h3 className="text-xl text-stone-100 font-medium mb-2">Hidden World</h3>
                <p className="text-stone-400 leading-relaxed mb-4">
                My moonlight fears to shine upon me.”
So said the man who stood on the edge of a vast abyss, holding paper and pen, watching the moon hide itself behind the clouds.
A wind rose, trembling the lone tree upon the cliff; its branches shivered beneath the cold and the force, and a few leaves fell to the ground. The withered flowers beside the grass seemed to bow their heads.

The man drew a long breath and began to write again. He dipped his pen into the dark ink, whispering each word as he carved it onto the page:

“My dear moonlight turned away from me, for she could not bear to watch how I sacrifice my children—bloodied and broken.”
                </p>
                <div className="flex gap-4 text-sm text-amber-700/60 font-sans">
                  <span>Drafting: Chapter 1</span>
                  <span>•</span>
                  <span>Word Count: 45k</span>
                </div>
              </motion.div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-amber-600/80 mb-6 flex items-center gap-3 border-b border-stone-800 pb-2">
              <Scroll className="w-5 h-5" /> Recent Reads
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
              {[
                { title: "The Way of Kings", author: "Brandon Sanderson", rating: "★★★★★" },
                { title: "Death Stalker", author: "Simon R.Green", rating: "★★★★★" },
                { title: "Harry Potter", author: "J.K Rowling", rating: "★★★★☆" },
                { title: "the Demonata", author: "Daran Shan", rating: "★★★★★" }
              ].map((book) => (
                <div key={book.title} className="flex items-center justify-between p-3 bg-stone-900/30 rounded hover:bg-stone-800/50 transition-colors">
                  <div>
                    <div className="text-stone-200 font-medium">{book.title}</div>
                    <div className="text-stone-500 text-sm">{book.author}</div>
                  </div>
                  <div className="text-amber-600/60 text-xs tracking-widest">{book.rating}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <div className="mt-20 text-center">
          <PenTool className="w-6 h-6 text-stone-700 mx-auto mb-4" />
          <p className="text-stone-600 text-sm font-sans">
            Pen is mightier than the sword, but the keyboard is faster.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
