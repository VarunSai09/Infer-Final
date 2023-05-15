import axios from "axios";
export const updateUser = async (
  Name,
       Email,
       MobileNo,
       UserId
) => {
  const data = await axios.post(
    "https://fhnsgxnpa9.execute-api.us-east-1.amazonaws.com/v1/updateuserdetails",
    {
      Name,
       Email,
       MobileNo,
       UserId
    }
  );

  return data;
};
