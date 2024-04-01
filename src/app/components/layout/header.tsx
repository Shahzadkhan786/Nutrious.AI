import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Header() {
  return (
    <div className="bg-gray-100">
      <div className="">
        <div className="flex h-16 items-center px-4  text-2xl lg:text-5xl sm:text-3xl md:text-4xl font-bold ml-5">
          <Image src="/images/image11.jpg" alt="image" height="40" width="40" className="rounded-full mr-2"/>
          Nutrious.AI
          <div className="ml-auto flex items-center space-x-4 ">
            <Avatar>
              <AvatarImage src="/images/avatar2.png" alt="@sakjPG" />
              <AvatarFallback>PG</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
