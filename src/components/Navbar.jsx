import Profile from "./Profile";

const Navbar = () => {
  return (
    <div
      className="pt-6 pb-6 pl-16 pr-16 flex justify-between items-center"
      style={{
        background: "rgba(255, 255, 255, 0.50)",
        borderBottom: "1px solid #EEE",
      }}
    >
      <div className=" text-hive_purple text-main-logo">hive</div>
      <Profile />
    </div>
  );
};

export default Navbar;
