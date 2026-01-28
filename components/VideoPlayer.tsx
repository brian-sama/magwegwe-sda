
import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
    videoUrl?: string;
    thumbnailUrl?: string;
    title?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    thumbnailUrl = "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?auto=format&fit=crop&q=80&w=1000",
    title = "Church History Video"
}) => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    return (
        <div className="relative group overflow-hidden rounded-3xl shadow-2xl bg-blue-900 aspect-video">
            {!isPlaying ? (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <img
                        src={thumbnailUrl}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
                    />
                    <button
                        onClick={() => setIsPlaying(true)}
                        aria-label="Play video"
                        className="relative z-20 w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-blue-950 shadow-xl group-hover:scale-110 transition-transform duration-300"
                    >
                        <Play className="w-10 h-10 fill-current ml-1" />
                    </button>
                    <div className="absolute bottom-6 left-6 z-20">
                        <p className="text-white font-bold text-lg">{title}</p>
                    </div>
                </div>
            ) : (
                <iframe
                    src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                ></iframe>
            )}
        </div>
    );
};

export default VideoPlayer;
