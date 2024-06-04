"use client"

import { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';

const Map = () => {
  useEffect(() => {
    // Any additional JavaScript to run after the script is loaded can go here
  //  const script = document.createElement('script');
  //  script.type = 'text/javascript';
  //  script.innerHTML = `
      
  //  `

  }, []);
  
  return (
    <div id="vesselfinder-map" style={{ width: '100%', height: '150px' }} className="rounded-lg drop-shadow-lg">
      {/* <Script
        id="vesselfinder-map-script"
        type="text/javascript"
        src="https://www.vesselfinder.com/aismap.js"
        onLoad={() => {
          console.log('Script has loaded')
        }}
      />
      <Script id="vesselfinder-map-config"
        dangerouslySetInnerHTML={{
          __html: 
          `<script type="text/javascript">
          // Map appearance
          var width="100%";         // width in pixels or percentage
          var height="300";         // height in pixels
          var latitude="46.00";     // center latitude (decimal degrees)
          var longitude="-11.20";    // center longitude (decimal degrees)
          var zoom="8";             // initial zoom (between 3 and 18)
          </script>`,
        }} /> */}
        {/* {`
          console.log("Test");
          var width ="100%";
          var height ="300";
          var latitude ="45.00";
          var longitude ="-11.85";
          var zoom="8"
        `}
      </Script> */}
      <iframe name="vesselfinder" id="vesselfinder" src="https://www.vesselfinder.com/aismap?embed" width="100%" height="150px" className="rounded-lg drop-shadow-lg" >
      </iframe>
    </div>
  );
};

export default Map;
