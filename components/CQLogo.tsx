export default function CQLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Culture Quest logo"
      role="img"
    >
      {/* C letterform — crimson */}
      <path
        d="M38 20C24 20 14 34 14 50C14 66 24 80 38 80C46 80 52 76 56 70"
        stroke="#6B1414"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Q letterform — charcoal */}
      <circle
        cx="64"
        cy="50"
        r="26"
        stroke="#2C2C2C"
        strokeWidth="7"
        fill="none"
      />
      {/* Q tail */}
      <line
        x1="78"
        y1="68"
        x2="92"
        y2="86"
        stroke="#2C2C2C"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
