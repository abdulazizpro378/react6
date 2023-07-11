import React from "react";

const LoginP = () => {
  const login = () => {
    localStorage.setItem("isAuthe", "1");
    window.location = "/";
  };

  return (
    <div>
      LoginP
      <button onClick={login}>login </button>
    </div>
  );
};

export default LoginP;
