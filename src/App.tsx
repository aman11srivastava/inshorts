import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {CategoryEnum, newsResultType} from "./utils/utils";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [category, setCategory] = useState<CategoryEnum>(CategoryEnum.General);
    const [newsInfo, setNewsInfo] = useState<newsResultType[]>([]);
    const [newsResults, setNewsResults] = useState<number>();
    const [loadMore, setLoadMore] = useState<number>(20);
    const [loading, setLoading] = useState<boolean>(true);

    const newsApi = async () => {
        try {
            setLoading(true);
            const news = await axios.get(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`)
            setNewsInfo(news.data.articles);
            setNewsResults(news.data.totalResults);
            setLoading(false)
        } catch (error) {
            console.log('Error ', error)
        }
    }

    useEffect(() => {
        newsApi();
    }, [newsResults, category, loadMore])

    return (
        <div className="App">
            <Navbar setCategory={setCategory}/>
            <NewsContent newsInfo={newsInfo} newsResults={newsResults} loadMore={loadMore} setLoadMore={setLoadMore}
                         loading={loading}/>
            <Footer/>
        </div>
    );
}
;

export default App;
