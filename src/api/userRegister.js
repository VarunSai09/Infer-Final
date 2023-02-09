import axios from "axios";
export const registerUser = async (
  name,
  email,
  passwordConfirm,
  mobileNumber
) => {
  const data = await axios.post(
    "https://c5rbbler50.execute-api.us-east-1.amazonaws.com/Deploy/userdb",
    {
      name,
       email,
       passwordConfirm,
       mobileNumber,
    }
  );

  return data;
};
