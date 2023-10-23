interface IProps {
  children: React.ReactNode;
}

const SubLayout = (props: IProps) => {
  return (
    <div className="px-[15px] md:px-[40px] xl:px-[90px]">{props.children}</div>
  );
};

export default SubLayout;
