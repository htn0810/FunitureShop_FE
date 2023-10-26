import { TSpecialIcon } from "../_types/general.type";

const CartIcon = (props: TSpecialIcon) => {
  return (
    <div className="relative cursor-pointer" onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 hover:text-pinkC"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      {props.quantity && (
        <span className="absolute bottom-1/2 right-0 h-5 w-5 translate-x-1/2 rounded-full bg-pinkC text-center text-xs font-medium leading-[20px] text-white">
          {props.quantity}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
