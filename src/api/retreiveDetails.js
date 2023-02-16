import axios from "axios";
export const retreiveUser = async (UserId) => {
  const data = await axios.post(
    "https://c5rbbler50.execute-api.us-east-1.amazonaws.com/new/userdetails",
    {
      UserId
    }
  );

  return data;
};
