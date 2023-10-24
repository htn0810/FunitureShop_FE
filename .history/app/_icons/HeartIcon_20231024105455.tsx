import { TSpecialIcon } from "../_types/general.type";

const HeartIcon = (props: TSpecialIcon) => {
  return (
    <div className="relative cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 hover:text-pinkC"
        {...props.props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      {props.quantity !== 0 && (
        <span className="absolute bottom-1/2 right-0 h-5 w-5 translate-x-1/2 rounded-full bg-pinkC text-center text-xs font-medium leading-[20px] text-white">
          {props.quantity}
        </span>
      )}
    </div>
  );
};

export default HeartIcon;