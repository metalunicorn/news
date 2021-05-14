import { useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const ScrollArrow = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 50) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 50) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)
  return (
    <button className="scroll-top" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }}>Scroll to top
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.00001 17.3334C4.40001 17.3334 0.666676 13.6 0.666676 9.00004C0.666676 4.40004 4.40001 0.666706 9.00001 0.666706C13.6 0.666706 17.3333 4.40004 17.3333 9.00004C17.3333 13.6 13.6 17.3334 9.00001 17.3334ZM8.16668 9.00004L8.16668 12.3334H9.83334V9.00004L12.3333 9.00004L9.00001 5.66671L5.66668 9.00004H8.16668Z" fill="white" />
      </svg>
    </button>
  );
}



const AllNews = ({ getData }) => {
  return (
    <>
      <div className="card-list">
        {getData && getData.value.map((x, index) => {
          return (
              <div className="card-news" key={index}>
                 <Link to={`/main/${x.name}`}><img width={`100%`} src={`${x.image.url}&h=179&w=297width="+ 297px +" height=" + 179px +`} height="179px" alt="Preview" /></Link>
                 <Link to={`/main/${x.name}`}><h2>{x.name}</h2></Link>
                <div className="text">
                  {x.query.text}
                </div>
                <div className="card-news-bottom">
                  <div className="card-news-bottom-more">
                    <Link to={`/main/${x.name}`}>Read more</Link>
                  </div>
                </div>
              </div>
          )
        })}
      </div>
      <ScrollArrow />
    </>
  )
}

export const CAllNews = connect(s => ({
  getData: s.promise && s.promise.allNews && s.promise.allNews.payload
}), {})(AllNews)