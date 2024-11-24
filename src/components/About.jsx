import React from "react";
import AboutImage from "../assets/about.gif";
import Container from "./Container";

const About = () => {
  return (
    <section id="about" className="mt-14 mb-20">
      <Container>
        <h1 className="xl:text-[35px] text-[20px] py-2 font-bold text-white text-center font-bangla bg-black">
          Bakery about (বেকারি সম্পর্কে)
        </h1>
        <div className="flex xl:flex-row flex-col items-center gap-5 mt-10">
          <div className="xl:w-[50%] w-full">
            <img src={AboutImage} alt="aboutImage" />
          </div>
          <div className="xl:w-[50%] w-full">
            <p className="text-[25px] font-semibold font-bangla text-black">
              আমাদের বেকারি একটি আধুনিক লাইভ বেকারি, যেখানে সতেজতা এবং গুণগত
              মানের প্রতিশ্রুতি আমরা সবসময় বজায় রাখি। আমরা কোনো বাসি খাবার
              বিক্রি করি না। আমাদের সমস্ত কাঁচামাল নামকরা ব্র্যান্ডের পণ্য থেকে
              বাছাই করা হয়, যা আমাদের পণ্যের গুণগত মান অক্ষুণ্ণ রাখতে সহায়তা
              করে। আমাদের প্রতিটি স্টাফ অত্যন্ত স্বাস্থ্যবিধি মেনে কাজ করেন।
              তারা খালি হাতে কোনো পণ্য স্পর্শ করেন না, বরং সবসময় গ্লাভস ব্যবহার
              করেন। আমাদের লক্ষ্য হলো, ক্রেতাদের কাছে সুলভ মূল্যে নিরাপদ এবং
              মানসম্মত খাবার পৌঁছে দেওয়া। আমাদের বেকারির প্রতিটি পণ্য সতেজ,
              সুস্বাদু এবং স্বাস্থ্যসম্মত। তাই আমাদের পণ্যের মানে আপনি সবসময়
              নিশ্চিন্ত থাকতে পারেন।
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
