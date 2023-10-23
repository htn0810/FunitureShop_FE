interface IProps {
  children: React.ReactNode;
}

const MainLayout = (props: IProps) => {
  return (
    <div className="mt-[78px] md:mt-[98px] lg:mt-[74px]">{props.children}</div>
  );
};

export default MainLayout;
