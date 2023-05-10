import axios from "axios";
export const retreiveSavedPosts = async (UserId) => {
  const data = await axios.post(
    "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/getsavedpost",
    {
      UserId
    }
  );

  return data;
};
