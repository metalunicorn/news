import { connect } from 'react-redux';

const PageSearchResult = ({ getData }) => {
    return (
        <>
            <div className="card-list">
                {getData && getData.map((x, index) => {
                    return (
                            <div className="card-news" key={index}>
                                <img width={`100%`} src={`${x.image?.thumbnail.contentUrl}&h=179&w=297width="+ 297px +" height=" + 179px +`} height="179px" alt="Preview" />
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
        </>
    );
}

export const CPageResultSearch = connect(s => ({ getData: s.promise?.searchResult?.payload?.value }), {})(PageSearchResult)
