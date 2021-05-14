import { connect } from 'react-redux';

const News = ({ getData }) =>
    <>
        <div className="card-description">
            {getData && getData.map((x, index) => {
                return (
                        <div key={index}> 
                        <img width={`80%`} src={`${x.image.thumbnail.contentUrl}&h=380&w=1020width="+ 297px +" height=" + 1020px +`} height="380px" alt="Preview" />
                        <div className="card-description">
                            <h2>{x.name}</h2>
                            <div className="box-card-news-name-date">
                                <div className="card-news-name">
                                    {x.provider[0].name}
                                </div>
                                <div className="card-news-date">
                                    {x.datePublished.slice(0, 10)}
                                </div>
                            </div>
                            <div className="card-news-text">
                                {x.description}
                            </div>
                        </div>
                        </div>
                )
            })}
        </div>
    </>

export const CNews = connect(s => ({ getData: s.promise && s.promise.newsDescription && s.promise.newsDescription.payload && s.promise.newsDescription.payload.value }), {})(News)