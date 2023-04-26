import axios from "axios";
export const retreiveSavedPosts = async (UserId) => {
  const data = await axios.post(
    "https://j17uufls85.execute-api.ap-south-1.amazonaws.com/Infer-Prototype/reterivesaved",
    {
      UserId
    }
  );

  return data;
};
