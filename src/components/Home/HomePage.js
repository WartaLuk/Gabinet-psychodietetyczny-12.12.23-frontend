import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import PostList from "../Posts/PostList";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Witamy w Gabinecie Psychodietetycznym Agaty JW</h2>
        <p>
          Tutaj znajdziesz informacje o naszych usługach, porady i artykuły.
        </p>
        <PostList />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
