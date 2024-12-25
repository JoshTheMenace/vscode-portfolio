function Illustration(props) {
  return (
    <svg
      width={486}
      height={534}
      viewBox="0 0 486 534"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Define gradients and reusable styles */}
      <defs>
        {/* Circle #1 gradient (top-right circle) */}
        <linearGradient id="circleGradient1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        {/* Circle #2 gradient (left circle) */}
        <radialGradient id="circleGradient2" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#C084FC" />
        </radialGradient>

        {/* Main shape gradient */}
        <linearGradient
          id="mainPathGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>

        {/* Accent line gradient (optional) */}
        <linearGradient
          id="accentLineGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>

      {/* Circle #1 (replaces fill="#D7F484") */}
      <circle cx={167} cy={60} r={60} fill="url(#circleGradient1)" />

      {/* Circle #2 (replaces fill="currentColor") */}
      <circle cx={37.5} cy={215.5} r={37.5} fill="url(#circleGradient2)" />

      {/* Main shape (replaces original path fill="currentColor") */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M486 144.469c-38.145-31.86-87.255-51.033-140.842-51.033-121.415 0-219.842 98.427-219.842 219.842 0 14.167 1.34 28.02 3.9 41.441 47.414-86.154 91.678-142.17 146.717-170.767 56.069-29.132 121.816-29.08 210.067-6.68v-32.803zm0 48.288v289.33c-38.145 31.86-87.255 51.033-140.842 51.033-100.321 0-184.947-67.197-211.325-159.037l1.502.805c49.937-93.22 94.046-149.844 147.514-177.625 52.014-27.025 114.411-27.498 203.151-4.506z"
        fill="url(#mainPathGradient)"
      />

      {/* Optional: A few accent lines for a "techy" vibe */}
      <path
        d="M50 400 C100 370, 180 370, 230 400 S320 430, 370 400"
        stroke="url(#accentLineGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M70 440 L110 480 M110 440 L70 480"
        stroke="url(#accentLineGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

export default Illustration;
