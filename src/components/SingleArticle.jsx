import { Link } from 'react-router-dom'
import parse from 'html-react-parser';


const singleArticle = ({ cont }) => {

    return (
        <>
            <div className="p-4">
                <div className="flex flex-col gap-[9px] bg-white p-[12px] shadow-md rounded-md">
                    <div className="w-full h-[160px] bg-gray-300 rounded-sm object-cover">
                        <img src="/images/articles/cover.jpg" className='object-cover w-full h-full rounded-sm' alt="article-cover" />
                    </div>
                    <h3 className="text-lg font-[600] text-black">{cont.title}</h3>
                    <p className="text-gray-600">{parse(cont.article.substring(0, 150) + "...")}</p>
                    <Link to={"/read/" + cont.id} className="text-[#ec407a] font-[500] p-2 hover:bg-pink-100 transition-all w-fit rounded-md">Read More</Link>
                </div>
            </div>
        </>
    )
}

export default singleArticle
