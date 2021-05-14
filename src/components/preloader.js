import { connect } from 'react-redux';
import { actionAllNews } from "../store/actions";


const Preloader = ({ getData }) => {
    return (
        <>
            {getData === "RESOLVED" || getData === undefined ? <></> : <div id="floating-circlesG">
                <div className="f_circleG" id="frotateG_01"></div>
                <div className="f_circleG" id="frotateG_02"></div>
                <div className="f_circleG" id="frotateG_03"></div>
                <div className="f_circleG" id="frotateG_04"></div>
                <div className="f_circleG" id="frotateG_05"></div>
                <div className="f_circleG" id="frotateG_06"></div>
                <div className="f_circleG" id="frotateG_07"></div>
                <div className="f_circleG" id="frotateG_08"></div>
            </div>}
        </>
    )
}

export const CPreloader = connect(s => ({ getData: s.promise && s.promise.allNews && s.promise.allNews.status }), { action: actionAllNews })(Preloader)