import { useState } from "react";
import Progress from "../Progress/Progress";

export default function Reader( {articles} ) {
    const [articleIndex, setArticleIndex] = useState(0)

    const handlePrev = () => {
        setArticleIndex(articleIndex - 1)
    };

    const handleNext = () => {
        setArticleIndex(articleIndex + 1)
    };

    const currentArticle = articles[articleIndex];
    const isFirst = articleIndex === 0;
    const isLast = articleIndex === articles.length - 1;

    console.log(currentArticle);

    return (
        <div>
            <header>
                {/* Control props onPrev onNext isFirst isLast */}
                    <div>
                        <button onClick={handlePrev} disabled={isFirst}>Prev</button>
                        <button onClick={handleNext} disabled={isLast}>Next</button>
                    </div>
                <Progress current={articleIndex + 1} total={articles.length}/>
            </header>  

            {/* Article view props article*/}
            <article>
                <h2>{currentArticle.topic}</h2>
                <p>{currentArticle.text}</p>
            </article>
        </div>
    );
   
}