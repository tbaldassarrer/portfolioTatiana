const variants = {
  sprig: (
    <>
      <path d="M42 186 C48 138 58 88 94 28" />
      <path d="M58 128 C34 116 22 96 24 72 C48 80 62 100 58 128Z" />
      <path d="M72 94 C98 78 118 56 124 30 C96 34 76 58 72 94Z" />
      <path d="M50 160 C28 154 14 140 8 118 C32 118 48 134 50 160Z" />
      <path d="M84 68 C102 66 116 58 126 42" />
    </>
  ),
  bloom: (
    <>
      <path d="M72 190 C78 146 78 102 70 48" />
      <path d="M70 54 C50 36 46 18 60 4 C80 18 84 38 70 54Z" />
      <path d="M72 56 C94 40 116 38 130 54 C112 74 92 74 72 56Z" />
      <path d="M68 58 C46 62 26 54 16 36 C42 24 60 34 68 58Z" />
      <path d="M76 104 C104 88 128 68 142 40" />
      <path d="M78 106 C104 108 126 122 138 146 C110 150 88 136 78 106Z" />
      <path d="M60 132 C36 126 18 112 6 90 C34 86 54 100 60 132Z" />
    </>
  ),
  vine: (
    <>
      <path d="M22 220 C72 182 112 138 140 78 C152 52 164 30 188 12" />
      <path d="M70 178 C50 170 36 154 30 130 C56 132 72 150 70 178Z" />
      <path d="M104 136 C128 126 146 106 158 78 C132 78 110 98 104 136Z" />
      <path d="M136 84 C116 74 106 58 106 36 C130 42 142 58 136 84Z" />
      <path d="M44 202 C36 184 22 174 2 172" />
    </>
  ),
};

export default function BotanicalDecor({ className = '', variant = 'sprig' }) {
  return (
    <svg
      className={`botanical-decor ${className}`}
      viewBox="0 0 200 240"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35">
        {variants[variant]}
      </g>
    </svg>
  );
}
