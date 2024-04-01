"use client";
import * as React from "react";
import { useState } from "react";

import { Card, CardContent } from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  const [imagePaths, setImagePaths] = React.useState([
    // Replace these placeholders with your actual image URLs
    "/images/image11.jpg",
    "/images/image12.jpg",
    "/images/image15.jpg",
    "/images/image13.jpg",
    "/images/image14.jpg",
    "/images/image16.jpg",
  ]);
  return (
    <Carousel className="flex flex-col overflow-hidden bg-cover bg-center w-full-screen hover:border-black hover:border-2 rounded-md max-screen max-h-[600px] bg-gray-300">
      <CarouselContent>
        {imagePaths.map((imagePath, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="">
                <CardContent className="flex aspect-square items-top justify-top p-3">
                  <Image
                    src={imagePath}
                    alt={`Slide ${index + 1}`}
                    width={1880}
                    height={1024}
                    className="object-cover h-[580px] w-full-screen"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
