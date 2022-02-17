import React, { useEffect, useState } from "react";

const InputElement = () => {
  const random_boolean = Math.random() > 0.5;
  const [isLoading, setIsLoading] = useState(random_boolean);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <span> Loading... </span>
  ) : (
    <div>
      <input type="text" placeholder="Enter Some Text" />
    </div>
  );
};
export default InputElement;
