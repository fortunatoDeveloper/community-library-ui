interface IconProps {
  className: string;
}

const BookIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="34"
      height="37"
      viewBox="0 0 34 37"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.66675 30.0625C5.66675 29.0403 6.03989 28.06 6.70408 27.3372C7.36827 26.6144 8.26911 26.2083 9.20841 26.2083H28.3334M5.66675 30.0625C5.66675 31.0847 6.03989 32.065 6.70408 32.7878C7.36827 33.5106 8.26911 33.9167 9.20841 33.9167H28.3334V3.08334H9.20841C8.26911 3.08334 7.36827 3.48941 6.70408 4.2122C6.03989 4.935 5.66675 5.91532 5.66675 6.93751V30.0625Z"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default BookIcon;
