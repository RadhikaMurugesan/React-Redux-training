import React from 'react';
import '../styles/HomeStyles.css';
import { NewsCard } from '../components/NewsCard';

const Home = () => {
   const data =
      [
         {
            "name": "Abhishek",
            "profileImage": "http://www.sarkarinaukrisearch.in/wp-content/uploads/2019/04/Cute-Profile-Pics-3.jpg",
            "newsImage": "http://www.sarkarinaukrisearch.in/wp-content/uploads/2019/04/Cute-Profile-Pics-3.jpg",
            "newsDesc": "Every React component have their own structure, methods as well as APIs. They can be reusable as per your need. For better understanding, consider the entire UI as a tree. Here, the root is the starting component, and each of the other pieces becomes branches, which are further divided into sub-branches."
         },
         {
            "name": "Saharsh",
            "profileImage": "http://www.sarkarinaukrisearch.in/wp-content/uploads/2019/04/Cute-Profile-Pics-3.jpg",
            "newsImage": "http://www.sarkarinaukrisearch.in/wp-content/uploads/2019/04/Cute-Profile-Pics-3.jpg",
            "newsDesc": "A Component is considered as the core building blocks of a React application. It makes the task of building UIs much easier. Each component exists in the same space, but they work independently from one another and merge all in a parent component, which will be the final UI of your application."

         },
         {
            "name": "Ajay",
            "profileImage": "http://www.sarkarinaukrisearch.in/wp-content/uploads/2019/04/Cute-Profile-Pics-3.jpg",
            "newsImage": "http://www.sarkarinaukrisearch.in/wp-content/uploads/2019/04/Cute-Profile-Pics-3.jpg",
            "newsDesc": "In React, function components are a way to write components that only contain a render method and don't have their own state. They are simply JavaScript functions that may or may not receive data as parameters."

         }
      ];
   return <div><header className="Home-header">My News Feed</header>
      {data.map((value) => <NewsCard value={value} />)}</div>;
};
export default Home;