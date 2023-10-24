const MenuIcon = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-slate-100 hover:bg-white hover:text-pinkC">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
};

export default MenuIcon;
