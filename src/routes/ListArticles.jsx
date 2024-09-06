
import Header from "../components/Header";
import SingleArticle from "../components/SingleArticle";
import Bottom from "../components/Bottom";
import pregnancyNews from "../services/localArticles"
import { useEffect } from "react";
const ListArticles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header action="back" head="Articles" profile="dots" />

            {/* {pregnancyNews.map(data => {
                <SingleArticle />
            })} */}

            {pregnancyNews.map((item, index) => (
                <SingleArticle key={index} cont={item} />
            ))}

            <Bottom />

        </>
    )
}

export default ListArticles
