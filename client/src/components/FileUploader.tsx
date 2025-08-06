import React, { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { convertFile } from '../services/api';
import { AppContext } from '../context/AppContext';
import ProgressBar from './ProgressBar';
import { useToast } from '../hooks/useToast';

interface FileUploaderProps {
    setProgress: (p: number) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ setProgress }) => {
    const { format } = useContext(AppContext);
    const [file, setFile] = useState<File | null>(null);
    const { show } = useToast();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!file) {
            show('Please select a file first.');
            return;
        }

        try {
            setProgress(10);
            const blob = await convertFile(file, format);
            setProgress(80);

            // Download logic
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${file.name.split('.')[0]}.${format}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);

            setProgress(100);
            show('Conversion successful!');

            // Save to recent
            const recent = JSON.parse(localStorage.getItem('recent') || '[]');
            recent.unshift({ name: file.name, format, date: new Date().toLocaleString() });
            localStorage.setItem('recent', JSON.stringify(recent.slice(0, 5)));
        } catch (err) {
            console.error(err);
            show('Error during conversion.');
            setProgress(0);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center">
                <label className="btn btn-primary mr-4">
                    Select File
                    n          <input type="file" onChange={handleFileChange} className="hidden" />
                </label>
                {file && <span className="truncate">{file.name}</span>}
            </div>

            <ProgressBar percent={0} />

            <button
                type="submit"
                className="btn btn-success w-full"
                disabled={!file}
            >
                Convert to {format.toUpperCase()}
            </button>
        </form>
    );
};

export default FileUploader;