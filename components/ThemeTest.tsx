// components/ThemeTest.tsx
"use client";
import React from 'react';
import { ThemedText } from './ThemeProvider';

const ThemeTest = () => {
  return (
    <div className="p-8 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Theme Color Test</h1>
      
      <div className="space-y-4 p-6 bg-white rounded-lg shadow">
        <ThemedText variant="primary" className="text-2xl font-semibold block">
          Primary Text - This should be dark black
        </ThemedText>
        
        <div className="h-px bg-gray-200" /> {/* Divider */}
        
        <ThemedText variant="secondary" className="text-xl block">
          Secondary Text - This should be medium grey
        </ThemedText>
        
        <div className="h-px bg-gray-200" /> {/* Divider */}
        
        <ThemedText variant="tertiary" className="block">
          Tertiary Text - This should be lighter grey
        </ThemedText>
      </div>
      
      {/* Color Sample Grid */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="p-4 rounded bg-gray-900">
          <ThemedText className="text-white">Dark (Primary)</ThemedText>
        </div>
        <div className="p-4 rounded bg-gray-600">
          <ThemedText className="text-white">Medium (Secondary)</ThemedText>
        </div>
        <div className="p-4 rounded bg-gray-400">
          <ThemedText className="text-white">Light (Tertiary)</ThemedText>
        </div>
      </div>
    </div>
  );
};

export default ThemeTest;