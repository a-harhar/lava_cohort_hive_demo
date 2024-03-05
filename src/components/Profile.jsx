const Profile = () => {
  const onProfileClick = () => {
    alert("Profile clicked");
  };

  return (
    <div>
      <img
        className="rounded-full cursor-pointer"
        src="/profile.png"
        alt="profile"
        onClick={onProfileClick}
      />
    </div>
  );
};

export default Profile;
