import "../styles/components/Avatar.css"

import blankAvatar from "../styles/images/blank-profile.png"


function Avatar({ avatar, owner }) {

  return (
    <div className="avatar-container">
      <div className="image-container">
        <img src={avatar ? avatar : blankAvatar} alt={`${owner}'s avatar`} />
      </div>
    </div>
  );
}

export default Avatar;
