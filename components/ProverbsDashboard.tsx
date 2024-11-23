"use client";
import React, { useState, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { 
  Video, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  Facebook, 
  Youtube, 
  Instagram, 
  Twitter 
} from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

interface Devotional {
  verse: string;
  title: string;
  reflection: string;
  prayer: string;
  videoId: string | null;
}

interface Devotionals {
  [key: string]: Devotional;
}

interface Verse {
  verse: number;
  text: string;
}

interface ChapterData {
  [key: number]: Verse[];
}

const BlitzSectionLoading = () => (
  <Card className="animate-pulse">
    <CardHeader>
      <div className="h-8 bg-gray-200 rounded w-3/4" />
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="h-24 bg-gray-200 rounded" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
      </div>
    </CardContent>
  </Card>
);

const StudyViewLoading = () => (
  <Card className="mt-4">
    <CardHeader>
      <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto" />
    </CardHeader>
    <CardContent className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="h-6 bg-gray-200 rounded" />
      ))}
    </CardContent>
  </Card>
);

const ProverbsDashboard = () => {
  const [activeTab, setActiveTab] = useState('blitz');
  const [currentChapter, setCurrentChapter] = useState(14);

  const today = new Date('2024-11-15');
  const dateOptions: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'numeric', 
    day: 'numeric' 
  };
  const formattedDate = today.toLocaleDateString('en-US', dateOptions);

  const devotionals: Devotionals = {
    "14:1": {
      verse: "Every wise woman builds her house, but the foolish one tears it down with her own hands.",
      title: "Being Wrong Still Feels Right",
      reflection: "What does it feel like to be wrong? Remorseful? Shameful? Embarrassing? No. That's what it feels like to discover that you're wrong. What does it feel like to be wrong? It feels like you're right.",
      prayer: "With my own hands I desire to build this home.",
      videoId: "0fFQUFrMP4A"
    }
  };

  const currentDevoKey = `${currentChapter}:1`;
  const defaultDevo: Devotional = {
    verse: `Loading verse for Chapter ${currentChapter}...`,
    title: "Daily Reflection",
    reflection: "Loading reflection...",
    prayer: "Loading prayer...",
    videoId: null
  };
  const currentDevo = devotionals[currentDevoKey] || defaultDevo;

 

  const StudyView = ({ chapter }: { chapter: number }) => {
    const chapterData: ChapterData = {
      14: [
        { verse: 1, text: "Every wise woman builds her house, but the foolish one tears it down with her own hands." },
        { verse: 2, text: "Those who walk uprightly fear the LORD, but one who is devious in their ways despises him." },
        // ... rest of your verses
      ]
    };
  
    return (
      <Card className="mt-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <button 
              onClick={() => setCurrentChapter(chapter - 1)}
              disabled={chapter <= 1}
              className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold">Proverbs Chapter {chapter}</h2>
            <button 
              onClick={() => setCurrentChapter(chapter + 1)}
              disabled={chapter >= 31}
              className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-50"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {chapterData[chapter]?.map(verse => (
            <div key={verse.verse} className="p-2 hover:bg-gray-50 rounded">
              <p className="text-lg">
                <span className="font-bold">{verse.verse}.</span> {verse.text}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  };

  const CalendarView = ({ currentDay, onSelectDay }: { currentDay: number, onSelectDay: (day: number) => void }) => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <div className="p-4 max-w-3xl">
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weekdays.map((day) => (
            <div 
              key={day} 
              className="w-10 flex items-center justify-center font-semibold text-gray-600 text-sm"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {Array(3).fill(null).map((_, index) => (
            <div key={`empty-${index}`} className="h-10 w-10" />
          ))}
          {days.map((day) => (
            <div
              key={day}
              onClick={() => onSelectDay(day)}
              className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer ${
                currentDay === day ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              } transition-colors duration-200`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'study':
        return (
          <Suspense fallback={<StudyViewLoading />}>
            <StudyView chapter={currentChapter} />
          </Suspense>
        );
      case 'calendar':
        return (
          <Suspense fallback={<LoadingSpinner />}>
            <CalendarView 
              currentDay={currentChapter}
              onSelectDay={setCurrentChapter}
            />
          </Suspense>
        );
      default:
        return (
          <Suspense fallback={<BlitzSectionLoading />}>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">
                    Today's Proverb - Chapter {currentChapter}:1
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-blue-800 italic text-lg">
                      {currentDevo.verse}
                    </p>
                    <p className="text-sm text-blue-600 mt-2">
                      Proverbs {currentChapter}:1 (WEB)
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h2 className="font-bold text-xl">{currentDevo.title}</h2>
                    <p className="text-lg">{currentDevo.reflection}</p>
                    <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
                      <h3 className="font-semibold">Prayer for Today</h3>
                      <p className="italic text-gray-600">
                        {currentDevo.prayer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Daily Blitz Video
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {currentDevo.videoId ? (
                    <Suspense fallback={<LoadingSpinner />}>
                     <YouTubeEmbed
  videoId={currentDevo.videoId}
  aspectRatio="16:9"
  title={`Proverbs ${currentChapter}:1 Daily Blitz`}
/>
                    </Suspense>
                  ) : (
                    <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-500">Video content will be loaded here</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Connect With Us</CardTitle>
                    <div className="flex items-center gap-2">
                      <Share2 className="h-5 w-5" />
                      <span>Share this devo</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-8">
                    <button className="p-3 text-blue-600 hover:text-blue-800 transition-colors">
                      <Facebook size={24} />
                    </button>
                    <button className="p-3 text-red-600 hover:text-red-800 transition-colors">
                      <Youtube size={24} />
                    </button>
                    <button className="p-3 text-pink-600 hover:text-pink-800 transition-colors">
                      <Instagram size={24} />
                    </button>
                    <button className="p-3 text-gray-800 hover:text-gray-600 transition-colors">
                      <Twitter size={24} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Suspense>
        );
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="mb-6">
        <h1 className="text-4xl font-bold">Proverbs Daily Blitz</h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Be wise and be well</p>
          <p className="text-lg">{formattedDate}</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6 border-b">
        {['blitz', 'study', 'calendar'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 capitalize ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProverbsDashboard;