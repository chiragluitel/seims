import React from 'react';

interface ProfilePictureProps {
  image: string;
  name?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ image, name = "Profile Picture" }) => {
  return (
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover rounded-full"
    />
  );
};

export default ProfilePicture;