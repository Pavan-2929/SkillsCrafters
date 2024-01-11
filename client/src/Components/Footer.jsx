import React from "react";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full  bg-[#171616] text-[#ccc] py-2 mt-20 border-white border-t-2">
      <div className=" container mx-auto text-center font-semibold ">
        <p className="text-sm">
          © {new Date().getFullYear()} SkillsCrafters. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
