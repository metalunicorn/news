import { useState } from "react";
import { connect } from "react-redux";

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



const Category = ({ getData }) => {
  return (
    <>
      <div className="card-list">
        {getData && getData.map((x, index) => {
          return (
              <div className="card-news" key={index}>
                <img width={`100%`} src={`${x.image && x.image.thumbnail.contentUrl}&h=179&w=297width="+ 297px +" height=" + 179px +`} height="179px" alt="Preview" />
                <h2>{x.name}</h2>
                <div className="text">
                  {x.description}
                </div>
                <div className="card-news-bottom">
                  <div className="card-news-bottom-more">

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

export const CCategory = connect(s => ({
  getData: s.promise && s.promise.newsCategory && s.promise.newsCategory.payload && s.promise.newsCategory.payload.value
}), {})(Category)