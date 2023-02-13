import axios from "axios";
export const updateUser = async (
  name,
  email,
  mobileNumber,
  userId
) => {
  const data = await axios.post(
    "https://c5rbbler50.execute-api.us-east-1.amazonaws.com/v4/updateuser",
    {
      name,
       email,
       mobileNumber,
       userId
    }
  );

  return data;
};
