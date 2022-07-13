const TopWave: React.FunctionComponent = () => {
  return (
    <>
      <svg viewBox="0 0 1500 600" height="600" width="1500" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <g transform-origin="center" transform="scale(1, -1) rotate(0)">
          <rect x="0" y="0" width="1500" height="600" fill="#00243800"></rect>
          <linearGradient id="linear-gradient-r10">
            <stop offset="0%" stopColor="#f04d60" stopOpacity="100%"></stop>
            <stop offset="100%" stopColor="#f04d6082" stopOpacity="100%"></stop>
          </linearGradient>
          <filter id="shadow-r0" x="0" width="100%" y="-20%" height="150%">
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#00000044"></feDropShadow>
          </filter>
          <path
            d="M0 0 0,510.7879193080589 C 75,507.7491878706962 225.00000000000003,494.8498579515145 375,495.59426212124527 C 525,496.3386662909761 600,512.3365618303418 750,514.5099401567131 C 900,516.6833184830845 975,510.9285174351186 1125,506.4611537531018 C 1275,501.9937900710851 1425,495.030728147924 1500,492.1731217466295 L1500 600 L0 600Z"
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow-r0)"
            strokeWidth="1"
            style={{
              fill: "url('#linear-gradient-r10')",
            }}
          ></path>
          <path
            d="M0 0 0,512.3326082070358 C 75,514.9462446414059 225.00000000000003,530.0823088780977 375,525.400790378886 C 525,520.7192718796742 600,492.92105589510254 750,488.9250157109772 C 900,484.9289755268519 975,498.45536118272696 1125,505.4205894582594 C 1275,512.385817733792 1425,520.0850435625638 1500,523.7511570886398 L1500 600 L0 600Z"
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow-r0)"
            strokeWidth="1"
            style={{
              fill: "url('#linear-gradient-r10')",
            }}
          ></path>
        </g>
      </svg>
    </>
  );
};

export default TopWave;
