import React from "react";
import { IoCallSharp } from "react-icons/io5";

import Container from "./Container";
import ros from "../assets/ros.jpg";
import gur from "../assets/gur.jpg";

const Methai = () => {
  return (
    <section className="pb-20">
      <Container>
        <h1 className="xl:text-[35px] text-[20px] py-2 font-bold text-white text-center font-bangla bg-black">
          Seasonal product (মৌসুমী পণ্য)
        </h1>
        <div className="mt-10">
          <h5 className="text-[25px] font-semibold font-pera tracking-[1px] mb-5">
            Desi date jaggery (দেশি খেজুরের গুড়)
          </h5>
          <div className="flex xl:flex-row flex-col">
            <img
              className="w-[500px]"
              src={ros}
              alt="img
            "
            />
            <div className="">
              <img src={gur} alt="img" />
              <p className="text-[20px] font-semibold font-bangla tracking-[1px] xl:px-5 px-2 py-5">
                আমাদের ওয়েবসাইটের মাধ্যমে আমরা আপনাদের জন্য সরবরাহ করি খেজুর
                গাছ থেকে সংগ্রহ করা খাঁটি ও প্রাকৃতিক গুড়। এটি সম্পূর্ণ
                হাইজেনিক পদ্ধতিতে প্রস্তুত করা হয়, যাতে স্বাস্থ্য সুরক্ষিত
                থাকে। গ্রামের প্রাকৃতিক পরিবেশে আমরা নিজ হাতে খেজুর গাছ থেকে রস
                সংগ্রহ করি। রস সংগ্রহ থেকে শুরু করে গুড় তৈরির প্রতিটি ধাপে আমরা
                পরিচ্ছন্নতা এবং স্বাস্থ্যবিধি কঠোরভাবে মেনে চলি। খেজুর গাছের
                কাছাকাছি থেকেই গুড় তৈরি করা হয়, যাতে এর স্বাদ ও গুণাগুণ অটুট
                থাকে। আমাদের এই খেজুরের গুড় সম্পূর্ণ রাসায়নিকমুক্ত এবং
                প্রাকৃতিক স্বাদের। যারা খাঁটি ও নির্ভেজাল গুড়ের স্বাদ পেতে চান,
                তাদের জন্য এটি সেরা পছন্দ। আমরা গ্রাম থেকে শহর পর্যন্ত সবার জন্য
                সুলভ মূল্যে এই পণ্য সরবরাহ করে থাকি। আপনার পরিবারকে সুস্বাস্থ্য
                ও প্রকৃতির ঘ্রাণে পূর্ণ করতে আমাদের খেজুরের গুড় একবার টেস্ট
                করুন।
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-[25px] font-bangla font-bold justify-center flex items-center gap-2 border-[2px] border-black py-2 pl-5 xl:pl-0 mt-5">
          {" "}
          <IoCallSharp className="text-[30px]" />
          অর্ডার করতে কল করুন: 01965656363
        </h2>
      </Container>
    </section>
  );
};

export default Methai;
