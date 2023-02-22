import axios from "axios";
export const retreiveSavedPosts = async (UserId) => {
  const data = await axios.post(
    "https://c5rbbler50.execute-api.us-east-1.amazonaws.com/new/retreivesavedposts",
    {
      UserId
    }
  );

  return data;
};
