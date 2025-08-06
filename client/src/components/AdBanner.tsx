import React from 'react';

export default function AdBanner() {
    return (
        <div className="my-4 text-center">
            {/* Google AdSense global script, index.html head'e eklensin */}
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT}
                 data-ad-slot={import.meta.env.VITE_ADSENSE_SLOT}
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>
    );
}