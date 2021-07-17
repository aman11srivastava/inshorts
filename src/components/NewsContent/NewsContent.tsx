import React from "react";
import './NewsContent.css'
import {Container} from "@material-ui/core";

interface NewsContentProps {

}

export const NewsContent = ({}: NewsContentProps) => {
    return(
        <Container maxWidth={"md"}>
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

            </div>
        </Container>
    )
}

export default NewsContent