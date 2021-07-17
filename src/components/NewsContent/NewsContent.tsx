import React from "react";
import './NewsContent.css'
import {CircularProgress, Container} from "@material-ui/core";
import {loaderStyle, newsResultType} from "../../utils/utils";
import NewsCard from "../NewsCard/NewsCard";

interface NewsContentProps {
    newsInfo: newsResultType[] | undefined
    newsResults: number | undefined
    loadMore: number | undefined
    setLoadMore: (value: number) => void
    loading: boolean
}

export const NewsContent = ({newsInfo, newsResults, loadMore, setLoadMore, loading}: NewsContentProps) => {
    return(
        <Container maxWidth={"md"}>
            {
                loading ? <CircularProgress
                        className={"loader"}
                        size={56}
                        style={loaderStyle} color={"inherit"}/>
                    :
                    <div className={"content"}>
                        <div className={"downloadMessage"}>
                            <span className="downloadText">For the best experience use inshorts app on your smartphone</span>
                            <img
                                alt="app store"
                                height="80%"
                                src="https://assets.inshorts.com/website_assets/images/appstore.png"
                            />
                            <img
                                alt="play store"
                                height="80%"
                                src="https://assets.inshorts.com/website_assets/images/playstore.png"
                            />
                        </div>
                        {
                            newsInfo?.map((newsItem: newsResultType, index: number) => (
                                <NewsCard key={index} newsItem={newsItem}/>
                            ))
                        }

                        {
                            (newsResults && loadMore) &&
                            loadMore <= newsResults && (
                                <>
                                    <hr/>
                                    <button
                                        onClick={() => setLoadMore(loadMore + 10)}
                                        className={"loadMore"}
                                    >
                                        Load More
                                    </button>
                                </>
                            )
                        }

                    </div>
            }

        </Container>
    )
}

export default NewsContent
