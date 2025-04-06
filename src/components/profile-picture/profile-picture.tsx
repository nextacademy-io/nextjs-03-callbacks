import Image from 'next/image';

export interface ProfilePictureProps {
  diameter?: number; // In pixels
  profileUrl?: string; // URL of the profile picture
}

export function ProfilePicture({
  diameter = 100,
  profileUrl = 'https://randomuser.me/api/portraits/men/1.jpg',
}: ProfilePictureProps): React.ReactNode {
  return (
    <div className="profile-picture max-w-fit">
      <Image
        src={profileUrl}
        alt="Profile Picture"
        width={diameter}
        height={diameter}
        className="rounded-full object-cover"
      />
    </div>
  );
}
