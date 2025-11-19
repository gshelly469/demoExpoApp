import {
  mockUserData,
  mockPostsData,
  mockClipsData,
  mockTaggedData,
} from "../data/mockData";

/**
 * Simulates an API call to fetch user profile data
 * In a real app, this would be an actual API call
 */
export const fetchProfileData = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve({
        user: mockUserData,
        posts: mockPostsData,
        clips: mockClipsData,
        tagged: mockTaggedData,
      });
    }, 500);
  });
};

/**
 * Could add more service methods like:
 * - updateProfile()
 * - uploadPost()
 * - deletePost()
 * etc.
 */
