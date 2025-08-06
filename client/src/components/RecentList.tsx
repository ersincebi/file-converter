import React from 'react';
interface Item { name: string; format: string; date: string; }
const sample: Item[] = JSON.parse(localStorage.getItem('recent') || '[]');
export default function RecentList() {
    return (
        <div className="mt-4">
            <h2 className="font-semibold">Recent</h2>
            <ul className="list-disc pl-5">
                {sample.map((it, i) => <li key={i}>{it.name} → {it.format} on {it.date}</li>)}
            </ul>
        </div>
    );
}
