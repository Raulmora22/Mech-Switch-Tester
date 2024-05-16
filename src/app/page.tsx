import React from "react";
import Features from "../app/components/Features.jsx";
import Name from "../app/components/Name.jsx";
import Photo from "../app/components/Photo";
import Price from "../app/components/Price.jsx";
import Translation from "../app/components/Translation.jsx";

function Page() {
  return (
    <div>
      <Photo />
      <Features />
      <Name />
      <Price />
      <Translation />
    </div>
  );
}

export default Page;
