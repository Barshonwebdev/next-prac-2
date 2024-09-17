import React from 'react';

const blogs = () => {

    const allBlogs=[
        {
          "id": "001",
          "title": "The Benefits of Morning Routines",
          "description": "Establishing a morning routine can significantly improve productivity and mental well-being. By starting your day with consistency, you set a positive tone that carries through to other aspects of life. Whether it's a simple 10-minute meditation, a quick workout, or journaling your thoughts, morning routines help reduce stress, enhance focus, and promote a sense of accomplishment."
        },
        {
          "id": "002",
          "title": "How to Stay Motivated During Tough Times",
          "description": "Staying motivated when life gets tough can be challenging, but it’s not impossible. Surrounding yourself with positivity, setting small achievable goals, and practicing self-compassion are some ways to stay on track. During difficult periods, it's essential to stay connected with loved ones, maintain perspective, and take one step at a time. Motivation thrives on progress."
        },
        {
          "id": "003",
          "title": "Top 5 Productivity Tools for 2024",
          "description": "With an influx of new apps and tools every year, choosing the right productivity tools can be overwhelming. In 2024, some of the top contenders include Notion for project management, Todoist for task management, Google Keep for quick notes, Trello for team collaboration, and Forest for staying focused. Each tool offers unique features to help boost personal and professional efficiency."
        },
        {
          "id": "004",
          "title": "The Power of Mindful Eating",
          "description": "Mindful eating is about being fully present during meals and savoring each bite. By paying close attention to how food tastes, smells, and feels, you can enjoy your meals more and prevent overeating. It's a great way to reconnect with your body's hunger signals and make healthier food choices. This practice also helps in cultivating gratitude and reducing stress."
        },
        {
          "id": "005",
          "title": "Understanding the Basics of Cryptocurrency",
          "description": "Cryptocurrency has become a hot topic, but what exactly is it? In simple terms, cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies, it operates on decentralized networks like blockchain technology. Bitcoin, Ethereum, and Ripple are some of the most popular cryptocurrencies. Understanding the basics helps you navigate the digital finance landscape."
        }
      ];
      
    return (
        <div className=' bg-black text-white'>
            <h1 className='text-center text-2xl text-white'>All blogs</h1>
            <div className='space-y-5 '>
                {
                    allBlogs.map((blog)=><div className='border-2 border-white mx-3 p-5' key={blog.id}>
                        <h1 className='text-2xl'>Blog Entry: {blog.id}</h1>
                        <h1 className='text-xl'>Blog Title: {blog.title}</h1>
                        <p className='text-lg mt-5'>{blog.description}</p>
                        <button className='bg-white text-black p-3 rounded-lg mt-3'>Details</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default blogs;