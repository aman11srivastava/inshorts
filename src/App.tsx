import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {CategoryEnum, newsResultType} from "./utils/utils";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import {API_KEY} from "./config/config";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [category, setCategory] = useState<CategoryEnum>(CategoryEnum.General);
    const [newsInfo, setNewsInfo] = useState<newsResultType>();
    const [newsResults, setNewsResults] = useState<number>();

    const newsApi = async () => {
        try {
            const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}`)
            setNewsInfo(news.data.articles);
            setNewsResults(news.data.totalResults);
        }
        catch (error){
            console.log('Error ', error)
        }
    }

    useEffect(() => {
        newsApi();
    }, [newsResults, category])

  return (
    <div className="App">
        <Navbar setCategory={setCategory}/>
        <NewsContent/>
        <Footer/>
    </div>
  );
};

export default App;
