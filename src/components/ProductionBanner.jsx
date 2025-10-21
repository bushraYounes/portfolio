import React from 'react'
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const ProductionBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show for 3 seconds then fade out
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Wait for fade out animation to complete
            setTimeout(() => setIsVisible(false), 500);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-500",
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
            <div className="text-center space-y-6">
                {/* Animated spinner */}
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>

                <div className="space-y-3">
                    <h1 className="text-4xl font-bold text-foreground">
                        Bushra Younes
                    </h1>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/50">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full animate-ping mr-2"></span>
                        <span className="text-yellow-600 font-medium">
                            Portfolio Under Construction
                        </span>
                    </div>
                    <p className="text-muted-foreground max-w-md">
                        This portfolio is currently being developed.
                        Some features may not be fully functional yet.
                    </p>
                </div>
            </div>
        </div>
    );
}


export default ProductionBanner
