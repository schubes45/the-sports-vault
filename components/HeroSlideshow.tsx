"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
"/super-bowl.jpg",
"/maradona.webp",
"/college-football.jpg",
"/latvia-hockey.webp",
"/usa-hockey.webp",
"/hockey-brawl.jpeg",
];

export default function HeroSlideshow() {
const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
const interval = window.setInterval(() => {
setCurrentImage((previousImage) => {
return (previousImage + 1) % heroImages.length;
});
}, 10000);

return () => window.clearInterval(interval);

}, []);

return (
<div className="absolute inset-0">
{heroImages.map((image, index) => (
<Image
key={image}
src={image}
alt=""
fill
loading={index === 0 ? "eager" : "lazy"}
sizes="100vw"
className="object-cover transition-opacity duration-[1500ms] ease-in-out"
style={{
opacity: index === currentImage ? 1 : 0,
}}
/>
))}

  <div className="absolute inset-0 bg-black/45" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#080b10]/80 via-[#080b10]/45 to-black/10" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d12]/70 via-transparent to-black/10" />
</div>

);
}