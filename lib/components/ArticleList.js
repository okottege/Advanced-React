import React from "react";
import Article from "./Article";

const ArticleList = (props) => {
    const articles = [];

    Object.keys(props.articles).forEach(key => {
        const article = props.articles[key];
        articles.push(
            <Article
                key={article.id}
                article={article}
                actions={props.articleActions}
            />
        );
    });

    return(
        <div>
            {articles}
        </div>
    );
};

export default ArticleList;