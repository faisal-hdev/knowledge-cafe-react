import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-[#11111126] max-w-[1280px] mx-auto py-4 px-3 md:my-5 lg:my-10">
      <h1 className="text-xl md:text-3xl lg:text-[40px] font-bold ">
        Knowledge cafe
      </h1>
      <img className="max-sm:w-[44px]" src={profile} alt="" />
    </div>
  );
};

export default Header;
