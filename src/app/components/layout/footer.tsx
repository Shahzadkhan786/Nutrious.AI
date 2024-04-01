"use client";

import { FacebookIcon, Twitter, LinkedinIcon, Instagram } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 z-[100] p-0">
      <div className="text-lg">
        <section className="flex flex-col w-full place-items-center justify-center gap-4 text-gray-600">
          <div className="flex gap-2 place-items-center">
            <div>
              <Badge className="py-3 px-6 rounded-lg bg-blue-white text-black hover:text-gray-800 hover:bg-gray-200 text-lg">
                <Twitter size={20} />
              </Badge>
            </div>

            <div>
              <Badge className="py-3 px-6 rounded-lg bg-blue-white text-black hover:text-gray-800 hover:bg-gray-200 text-lg">
                <FacebookIcon size={20} />
              </Badge>
            </div>

            <div>
              <Link href={"/"}>
              <Badge className="py-3 px-6 rounded-lg bg-blue-white text-black hover:text-gray-800 hover:bg-gray-200 text-lg">
                <LinkedinIcon size={20} />
              </Badge>
              </Link>
            </div>

            <div>
              <Badge className="py-3 px-6 rounded-lg bg-blue-white text-black hover:text-gray-800 hover:bg-gray-200 text-lg">
                <Instagram size={20} />
              </Badge>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4">
            <Button className="bg-gray-100 rounded-md py-4 py-2 hover:bg-gray-200 text-black">
              CONTACT
            </Button>
            <Button className="bg-gray-100 rounded-md py-4 py-2 hover:bg-gray-200 text-black">
              PRICING
            </Button>
            <Button className="bg-gray-100 rounded-md py-4 py-2 hover:bg-gray-200 text-black">
              TERMS OF SERVICE
            </Button>
            <Button className="bg-gray-100 rounded-md py-4 py-2 hover:bg-gray-200 text-black">
              {" "}
              PRIVACY POLICY
            </Button>
          </div>
        </section>
      </div>

      <div className=" w-full place-items-center  text-center bg-inherit mt-12 m-2">
        Copyright © 2023 <b>{"Nutrious.AI"}</b>
      </div>
    </footer>
  );
}
