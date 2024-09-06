import Header from "../components/Header"
import Bottom from "../components/Bottom"
import { useParams } from "react-router-dom"
import pregnancyNews from "../services/localArticles"
import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import "../Article.css"
const Article = () => {

    const [title, SetTitle] = useState('');
    const [article, SetArticle] = useState('');
    const [thumbnail, SetThumbnail] = useState('');


    const params = useParams();
    const articleId = params.articleId;
    // console.log(articleId);
    function getArticle(id) {
        const article = pregnancyNews.find(a => a.id == id);
        SetTitle(article.title);
        SetArticle(parse(article.article));
        SetThumbnail(article.thumbnail);
    }
    useEffect(() => {
        getArticle(articleId);
        window.scrollTo(0, 0);

    }, [articleId]);


    return (
        <>
            <Header action="bck" head="Article title" profile="dots" />
            <div id="view"
                className="h-full max-w-lg mx-auto overflow-y-scroll bg-fixed bg-top bg-no-repeat shadow-lg"
                style={{ backgroundImage: "url(/images/articles/cover.jpg)", backgroundSize: "100% 50%" }}>
                <div className="mt-[302px] w-full">
                    <div className="w-full p-4 bg-white" style={{ borderRadius: '20px 20px 0 0' }}>
                        <div
                            className="text-2xl font-extrabold tracking-tight text-center text-black">
                            {title}
                        </div>
                        <div className="mt-6 text-sm font-medium text-slate-500">
                            {/* {parse(article)} */}
                            {article}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Article
