import axios from "axios";
export const updateUser = async (
  name,
  email,
  mobileNumber,
  userId
) => {
  const data = await axios.post(
    "https://j17uufls85.execute-api.ap-south-1.amazonaws.com/Infer-Prototype/userdataupdate",
    {
      name,
       email,
       mobileNumber,
       userId
    }
  );

  return data;
};
