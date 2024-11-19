import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const ProverbsDashboard = () => {
  const [activeTab, setActiveTab] = useState('blitz');
  const [currentChapter, setCurrentChapter] = useState(14);

  const today = new Date('2024-11-15'); // Let's try 11/15 to clearly see if it changes
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

  const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&showinfo=0&autoplay=0`;
    
    return (
      <div className="aspect-video w-full">
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title="Proverbs Daily Blitz"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
          />
        </div>
      </div>
    );
  };

  const StudyView = ({ chapter }: { chapter: number }) => {
    const chapterData: ChapterData = {
      14: [
        { verse: 1, text: "Every wise woman builds her house, but the foolish one tears it down with her own hands." },
        { verse: 2, text: "Those who walk uprightly fear the LORD, but one who is devious in their ways despises him." },
        { verse: 3, text: "In the mouth of the foolish is a rod for his pride, but the lips of the wise will preserve them." },
        { verse: 4, text: "Where no oxen are, the crib is clean, but much increase is by the strength of the ox." },
        { verse: 5, text: "A faithful witness will not lie, but a false witness pours out lies." },
        { verse: 6, text: "A scoffer seeks wisdom and doesn&apos;t find it, but knowledge comes easily to a discerning person." },
        { verse: 7, text: "Stay away from a foolish man, for you won&apos;t find knowledge on his lips." },        
        { verse: 8, text: "The wisdom of the prudent is to think about his way, but the folly of fools is deceit." },
        { verse: 9, text: "Fools mock at making atonement for sins, but among the upright there is good will." },
        { verse: 10, text: "The heart knows its own bitterness and joy; he will not share these with a stranger." },
        { verse: 11, text: "The house of the wicked will be overthrown, but the tent of the upright will flourish." },
        { verse: 12, text: "There is a way that seems right to a man, but its end is the way of death." },
        { verse: 13, text: "Even in laughter the heart may be sorrowful, and mirth may end in heaviness." },
        { verse: 14, text: "The unfaithful will be repaid for his own ways; likewise a good man will be rewarded for his ways." },
        { verse: 15, text: "A simple man believes everything, but the prudent man carefully considers his ways." },
        { verse: 16, text: "A wise man fears and departs from evil, but the fool is hotheaded and reckless." },
        { verse: 17, text: "He who is quick to become angry will commit folly, and a crafty man is hated." },
        { verse: 18, text: "The simple inherit folly, but the prudent are crowned with knowledge." },
        { verse: 19, text: "The evil bow down before the good, and the wicked at the gates of the righteous." },
        { verse: 20, text: "The poor person is shunned even by his own neighbor, but the rich person has many friends." },
        { verse: 21, text: "He who despises his neighbor sins, but blessed is he who has pity on the poor." },
        { verse: 22, text: "Don&apos;t they go astray who plot evil? But love and faithfulness belong to those who plan good." },
        { verse: 23, text: "In all hard work there it profit, but the talk of the lips leads only to poverty." },          
        { verse: 24, text: "The crown of the wise is their riches, but the folly of fools crowns them with folly." },
        { verse: 25, text: "A truthful witness saves lives, but a false witness is deceitful." },
        { verse: 26, text: "In the fear of the LORD is a secure fortress, and he will be a refuge for his children." },
        { verse: 27, text: "The fear of the LORD is a fountain of life, turning people from the snares of death." },
        { verse: 28, text: "In the multitude of people is the king&apos;s glory, but in the lack of people is the destruction of the prince." },        
        { verse: 29, text: "He who is slow to anger has great understanding, but he who has a quick temper displays folly." },
        { verse: 30, text: "A sound heart is the life of the body, but envy rots the bones." },
        { verse: 31, text: "He who oppresses the poor shows contempt for his Maker, but he who is kind to the needy honors him." },
        { verse: 32, text: "The wicked is brought down in his calamity, but in death, the righteous has a refuge." },
        { verse: 33, text: "Wisdom rests in the heart of one who has understanding, and is even made known in the midst of fools." },
        { verse: 34, text: "Righteousness exalts a nation, but sin is a disgrace to any people." },
        { verse: 35, text: "The king&apos;s favor is toward a servant who deals wisely, but his wrath is toward one who causes shame." }      ]
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
            {/* Weekday headers */}
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

            {/* Calendar grid */}
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
          <StudyView 
            chapter={currentChapter}
          />
        );
      case 'calendar':
        return (
          <CalendarView 
            currentDay={currentChapter} 
            onSelectDay={setCurrentChapter} 
          />
        );
      default:
        return (
          <>
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
                  <YouTubeEmbed videoId={currentDevo.videoId} />
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
          </>
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