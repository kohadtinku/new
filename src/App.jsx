import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";

import img from "./assets/avenger.jpg";
import img1 from "./assets/img.jpg";
import img2 from "./assets/img1.jpg";
import img3 from "./assets/1.jpeg";
import img4 from "./assets/2.jpeg";
import img5 from "./assets/3.jpeg";

import Header from "./components/Header";
import MainCard from "./components/MainCard";
import Counter from "./components/Counter";
import NewCard from "./components/NewCard";
import Form from "./components/Form";
import NewForm from "./components/NewForm";
import CustomForm from "./components/CustomForm";
import Conditional from "./components/Conditional";
import Map from "./components/Map";
import Product from "./components/Product";
import NewCounter from "./components/NewCounter";
import User from "./components/User";
import NewProduct from "./components/NewProduct";
import CryptoTracker from "./components/CryptoTracker";
import Photo from "./components/Photo";
import NFT from "./components/NFT";
import MovieProvider from "./context/Context";
import SearchBar from "./components/SearchBar";
import MoviesList from "./components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import "./App.css";
import Counter1 from "./components/Counter1";
import News from "./components/News";
import News1 from "./components/News1";
import Card3 from "./components/Card3";
import Nav1 from "./components/Nav1";
import UseRef from "./components/UseRef";
import UseMemo from "./components/UseMemo";
import Recipe from "./components/Recipe";
import NewRecipe from "./components/NewRecipe";
import Recipedetails from "./components/Recipedetails";
const App = () => {
  return (
    <>
      {/* <Header /> */}
      {/* <Carousel /> */}
      {/* <Navbar /> */}

      {/* <div
        className="maincard"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          padding: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainCard imgsrc={img} text="Some quick example text" btn="view more" />
        <MainCard
          imgsrc={img1}
          text="this is an another text with props"
          btn="read more"
        />

        <MainCard
          imgsrc={img2}
          text="ehuohvieohveiovhierhvi ehifeh ife iofejifjef efj ejfe"
          btn="more"
        />
        <MainCard imgsrc={img3} text="HTML" btn="learn more" />
        <MainCard imgsrc={img4} text="JS" btn="Learn JS" />
        <MainCard imgsrc={img5} text="REACT" btn="Learn React" />
      </div> */}

      {/* <Counter /> */}
      {/* <div className="maincard">
        <NewCard
          maintag="Featured"
          img={img}
          title="first card"
          para="This is first card component"
          btn="Read More"
        />

        <NewCard
          maintag="New Content"
          img={img1}
          title="second card"
          para="This is second card component"
          btn="view More"
        />
        <NewCard
          maintag="Best card"
          img={img2}
          title="third card"
          para="This is third card component"
          btn="learn More"
        />

        <NewCard
          maintag="Card Component"
          img={img3}
          title="fourth card"
          para="This is fourth card component"
          btn="Submit"
        />
      </div> */}

      {/* <Form/> */}
      {/* <div className="container mt-5 mb-5 border p-5 bg-warning">
        <NewForm />
      </div> */}
      {/* 
      <div className="newform container mt-5 mb-5 bg-info">
        <CustomForm />
      </div>

      <div style={{ background: "yellow", height: "300px", marginTop: "10%" }}>
        <Conditional />
      </div> */}

      {/* List And Map- method */}
      {/* <Map /> */}
      {/* <Product/> */}
      {/* <NewCounter/> */}
      {/* <User/> */}
      {/* <NewProduct/> */}

      {/* <CryptoTracker/> */}

      {/* <Photo/> */}
      {/* <NFT/> */}
      
      <BrowserRouter>
        <SearchBar />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ display: "flex" }}>
                <MoviesList />
             
              </div>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter> 

      {/* <Counter1/> */}

      {/* <News />  */}
      {/* <Nav1/>
      <News1/> */}

      {/* <UseRef/> */}
      {/* <UseMemo/> */}

      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          alignItems: "center",
          gap: "2rem",
          padding: "20px",
        }}
      >
        <Card3
          title="Card 1"
          desc="this is card 1 using props"
          btn="read more"
          img={img}
        />
        <Card3
          title="Card 2"
          desc="this is card 2 using props"
          btn="get more"
          img={img1}
        />
        <Card3
          title="Card 3"
          desc="this is card 3 using props"
          btn="learn more"
          img={img2}
        />
        <Card3
          title="Card 4"
          desc="this is card 4 using props"
          btn="submit"
          img={img3}
        />

        <Card3
          title="Card 5"
          desc="this is card 5 using props"
          btn="read "
          img={img4}
        />

        <Card3
          title="Card 6"
          desc="this is card 6 using props"
          btn="add to cart"
          img={img5}
        />
        <Card3
          title="Card 7"
          desc="this is card 7 using props"
          btn="add to cart"
          img={img5}
        />
        <Card3
          title="Card 8"
          desc="this is card 8 using props"
          btn="add to cart"
          img={img5}
        />
        <Card3
          title="Card 9"
          desc="this is card 9 using props"
          btn="add to cart"
          img={img5}
        />
        <Card3
          title="Card 10"
          desc="this is card 10 using props"
          btn="add to cart"
          img={img5}
        />
      </div> */}
      {/* <Recipe/> */}

      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ display: "flex" }}>
                <NewRecipe />
              </div>
            }
          />
          <Route path="/recipe/:id" element={<Recipedetails />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
