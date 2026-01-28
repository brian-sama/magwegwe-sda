import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    imageAlt?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, imageAlt }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}>
            <div className="absolute top-6 right-6 flex items-center gap-4">
                <a
                    href={imageUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                    onClick={(e) => e.stopPropagation()}
                    title="Download image"
                    aria-label="Download image"
                >
                    <Download className="w-6 h-6" />
                </a>
                <button
                    onClick={onClose}
                    className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                    title="Close modal"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="max-w-7xl max-h-[90vh] px-4 w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <img
                    src={imageUrl}
                    alt={imageAlt || "Full screen view"}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                />
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
                Click anywhere outside the image to close
            </div>
        </div>
    );
};

export default ImageModal;
