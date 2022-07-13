const BottomWave: React.FunctionComponent = () => {
  return (
    <>
      <svg viewBox="0 0 1500 600" height="600" width="1500" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g transform-origin="center" transform="scale(1, 1) rotate(0)">
          <rect x="0" y="0" width="1500" height="600" fill="#00243800"></rect>
          <linearGradient id="linear-gradient-r3">
            <stop offset="0%" stopColor="#f04d6079" stopOpacity="100%"></stop>
            <stop offset="100%" stopColor="#f04d6074" stopOpacity="100%"></stop>
          </linearGradient>
          <filter id="shadow-r0" x="0" width="100%" y="-20%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#0000002e"></feDropShadow>
          </filter>
          <path
            d="M0 0 0,433.66853500530124 C 75,427.2335743144155 224.99999999999997,399.91734625026584 375,401.4937315508723 C 525,403.0701168514788 600,436.94801328778266 750,441.5504615083337 C 900,446.1529097288847 975,433.9662722155452 1125,424.5059726536274 C 1275,415.0456730917096 1425,400.3003654897213 1500,394.2489636987448 L1500 600 L0 600Z"
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow-r0)"
            strokeWidth="1"
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: "url('#linear-gradient-r3')",
            }}
          ></path>
          <path
            d="M0 0 0,477.96346911625005 C 75.00000000000001,484.14368292866277 225,519.9344731208403 375,508.8645381783135 C 525,497.7946032357868 600,432.0628449357115 750,422.61379440361634 C 900,413.1647438715212 975,445.14928248720247 1125,461.61928551783785 C 1275,478.0892885484733 1425,496.2949047490023 1500,504.9638095567934 L1500 600 L0 600Z"
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow-r0)"
            strokeWidth="1"
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: "url('#linear-gradient-r3')",
            }}
          ></path>
          <path
            d="M0 0 0,577.3506131223403 C 75,566.9906519537792 224.99999999999997,529.9729357246309 375,525.5508072795346 C 525,521.1286788344383 600,547.2610281500965 750,555.2399708968587 C 900,563.2189136436209 975,585.2221988493577 1125,565.4455210133456 C 1275,545.6688431773334 1425,478.1743695761077 1500,456.35658171679825 L1500 600 L0 600Z"
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow-r0)"
            strokeWidth="1"
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: "url('#linear-gradient-r3')",
            }}
          ></path>
        </g>
      </svg>
    </>
  );
};

export default BottomWave;
