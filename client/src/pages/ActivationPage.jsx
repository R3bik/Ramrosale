import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {
            activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <div className="sm:text-4xl text-xl text-center border w-1/2  sm:h-1/2 h-[30vh] flex items-center justify-center bg-black rounded-lg">
        {error ? (
          <p className="text-red-500">Your token has expired!</p>
        ) : (
          <p className="text-green-500">
            Your account has been created successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivationPage;
