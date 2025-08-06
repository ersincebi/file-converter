import React from 'react';
interface Props { percent: number; }
export default function ProgressBar({ percent }: Props) {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${percent}%` }} />
        </div>
    );
}
