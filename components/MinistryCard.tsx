
import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MinistryCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    path: string;
    color?: string;
}

const MinistryCard: React.FC<MinistryCardProps> = ({
    title,
    description,
    icon: Icon,
    path,
    color = "bg-blue-100 text-blue-700"
}) => {
    return (
        <div className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
            <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            <Link
                to={path}
                className="text-sm font-bold text-blue-700 hover:text-blue-900 flex items-center gap-2 group/link"
            >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
        </div>
    );
};

export default MinistryCard;
