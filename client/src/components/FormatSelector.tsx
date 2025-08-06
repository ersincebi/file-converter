import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
export default function FormatSelector() {
    const { format, setFormat } = useContext(AppContext);
    const options = ['pdf', 'docx', 'xlsx'];
    return (
        <select
            value={format}
            onChange={e => setFormat(e.target.value)}
            className="select select-bordered w-full"
        >
            {options.map(o => <option key={o} value={o}>{o.toUpperCase()}</option>)}
        </select>
    );
}
