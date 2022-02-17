import React, { useEffect } from "react";

export default function useEffectSyntax() {
  useEffect(() => {
    console.log("in UseEffect");
    return () => console.log("in UseEffect clean up.");
  }, []);

  return <div>useEffectSyntax</div>;
}
