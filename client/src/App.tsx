import React from 'react';
import { AppProvider } from './context/AppContext';
import AdBanner from './components/AdBanner';
import FormatSelector from './components/FormatSelector';
import FileUploader from './components/FileUploader';
import ProgressBar from './components/ProgressBar';
import RecentList from './components/RecentList';
import { useToast } from './hooks/useToast';

function AppContent() {
    const { message, show } = useToast();
    const [percent, setPercent] = React.useState(0);
    return (
        <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow">
            <h1 className="text-2xl mb-4">File Converter</h1>
            <AdBanner />
            <FormatSelector />
            <ProgressBar percent={percent} />
            <FileUploader setProgress={setPercent} show={show} />
            <RecentList />
            {message && <div className="toast toast-top toast-center">{message}</div>}
        </div>
    );
}

export default function App() {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    );
}
