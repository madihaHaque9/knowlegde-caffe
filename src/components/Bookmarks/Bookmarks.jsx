import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-50" >
            <div>
                <h3 className='text-3xl text-center font-bold'>Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-2xl font-bold text-center  mt-2 p-4">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;
