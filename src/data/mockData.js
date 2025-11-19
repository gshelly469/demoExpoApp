export const mockUserData = {
  profilePicture: "https://i.pravatar.cc/300?img=45",
  coverImage:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  name: "Joy Alexander",
  username: "J_Jay_username",
  bio: "Sample BIO of user !!",
  website:
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PL1234567890ABCDEFG&index=45&t=256s&ab_channel=SampleChannel",
  stats: {
    posts: 124,
    followers: "12K",
    following: "2K",
  },
};

export const mockPostsData = Array.from({ length: 24 }, (_, i) => ({
  id: `post-${i + 1}`,
  image: `https://picsum.photos/400/400?random=${i + 1}`,
  type: "post",
  isMultiple: i % 5 === 0, // Some posts have multiple images
}));

export const mockClipsData = Array.from({ length: 12 }, (_, i) => ({
  id: `clip-${i + 1}`,
  image: `https://picsum.photos/400/600?random=${i + 25}`,
  type: "clip",
  isMultiple: i % 3 === 0,
}));

export const mockTaggedData = Array.from({ length: 8 }, (_, i) => ({
  id: `tagged-${i + 1}`,
  image: `https://picsum.photos/400/400?random=${i + 37}`,
  type: "tagged",
}));
