
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface HeroProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
    overlayColor?: string;
    icon?: LucideIcon;
    accentColor?: string;
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    backgroundImage = "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=2000",
    overlayColor = "bg-blue-900/40",
    icon: Icon,
    accentColor = "text-yellow-500"
}) => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover brightness-[0.45]"
                />
                <div className={`absolute inset-0 ${overlayColor}`}></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {Icon && (
                    <div className="inline-flex p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-6 border border-white/20 animate-in fade-in zoom-in duration-700">
                        <Icon className="w-10 h-10 text-white" />
                    </div>
                )}
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 tracking-tight">
                    {title.split(' ').map((word, i) => (
                        <span key={i} className={i === title.split(' ').length - 1 ? accentColor : ""}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>
                <p className="text-lg md:text-2xl text-blue-50 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-relaxed font-light italic">
                    "{subtitle}"
                </p>
            </div>
        </section>
    );
};

export default Hero;
