import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='questions'>
            <div className="first-question">
                <h1 style={{fontSize: '30px', textAlign: 'justify', marginLeft: '40px'}}>রিএক্ট কিভাবে কাজ করে ?</h1>
                <p style={{fontSize: '20px', textAlign: 'justify', marginLeft: '40px', lineHeight: '37px', marginBottom: '55px'}}>এটা সাধারণত ফেইসবুক দ্বারা নিয়ন্ত্রণ করা হয়। রিএক্ট একটি ডিক্লেয়ারেটিভ প্যারাডিজম ব্যবহার করে<br /> যা ইউজার এর আবেদন সম্পর্কে যুক্তি করা সহজ করে এবং এর লক্ষ্য দক্ষতাসম্পন্ন এবং খুব সাধারণ উভয়ই হতে পারে।<br /> এটি ইউজার এর এপ্লিকেশন এর প্রতিটি স্টেট এর জন্য সাধারণ ভিউ ডিজাইন করে<br /> এবং ইউজার এর ডাটা পরিবর্তিত হলে স্টেট দক্ষতার সাথে সঠিকভাবে আপডেট এবং রেন্ডার করবে।</p>
            </div>
            <div className="second-question">
                <h1 style={{fontSize: '30px', textAlign: 'justify', marginLeft: '40px'}}>প্রপ্স এবং স্টেট এর মধ্যে পার্থক্য ?</h1>
                <p style={{fontSize: '20px', textAlign: 'justify', marginLeft: '40px', lineHeight: '37px'}}>স্টেট : স্টেট একটি আপডেটেবল স্ট্রাকচার যা এলিমেন্ট সম্পর্কে ডাটা বা তথ্য সংরক্ষণ করতে ব্যাবহৃত হয়<br /> এবং সময়ের সাথে সাথে পরিবর্তন হতে পারে। এটি শুধুমাত্র কম্পোনেন্ট এর ভিতরে বা সরাসরি কম্পোনেন্ট এর মাধ্যমে<br /> এক্সেস বা পরিবর্তন করা যেতে পারে।</p>
                <p style={{fontSize: '20px', textAlign: 'justify', marginLeft: '40px', lineHeight: '37px', marginBottom: '55px'}}>প্রপ্স : প্রপ্সগুলি শুধুমাত্র পঠনযোগ্য উপাদান। এটি এমন একটি অবজেক্ট যা ট্যাগের এট্রিবিউট এর মান সঞ্চয় করে<br /> এবং HTML এট্রিবিউট এর মতো কাজ করে। এটি একটি এলিমেন্ট থেকে অন্য এলিমেন্ট এ ডাটা পাস্ করার অনুমতি দেয়।<br /> এটি ফাঙ্কশন আর্গুমেন্টের অনুরূপ। প্রপ্সগুলি  অপরিবর্তনীয় তাই ইউজার এলিমেন্ট এর ভিতর থেকে প্রপ পরিবর্তন করতে পারে না।</p>
            </div>
            
        </div>
    );
};

export default Question;