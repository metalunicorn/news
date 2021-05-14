
export const actionPromise = (name, promise) => {
    const actionPending = () => ({ type: 'PROMISE', name, status: 'PENDING', payload: null, error: null })
    const actionResolved = payload => ({ type: 'PROMISE', name, status: 'RESOLVED', payload, error: null })
    const actionRejected = error => ({ type: 'PROMISE', name, status: 'REJECTED', payload: null, error })
    return async dispatch => {
        dispatch(actionPending())
        let payload
        try {
            payload = await promise
            dispatch(actionResolved(payload))
        }
        catch (e) {
            dispatch(actionRejected(e))
        }
        return payload;
    }
}

export const actionAllNews = () =>
    async dispatch => {

        let allNewsData = await dispatch(actionPromise('allNews', fetch("https://bing-news-search1.p.rapidapi.com/news/trendingtopics?count=20&safeSearch=Off&textFormat=Raw&mkt=en-US&setLang=EN", {
            "method": "GET",
            "headers": {
                "x-search-location": "49.8360",
                "x-bingapis-sdk": "true",
                "x-rapidapi-key": "8ac1ccac45msh8890345ac310c3ap1c78b2jsnfeddd8a9ee43",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
            }
        })
            .then(res => res.json())))
    }
export const actionNews = (nameNews = "Arizona voter purge") => {
    let nameNews2 = nameNews.split(' ').join('%20')
    return async dispatch => {
        let newsDescription = await dispatch(actionPromise('newsDescription', fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${nameNews2}%20&safeSearch=Off&textFormat=Raw&freshness=Day&mkt=en-US&setLang=EN&count=1`, {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-key": "8ac1ccac45msh8890345ac310c3ap1c78b2jsnfeddd8a9ee43",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
            }
        })
            .then(res => res.json())))
    }
}
export const actionCategory = (nameCategory = "") => {
    return async dispatch => {
        let newsCategory = await dispatch(actionPromise('newsCategory', fetch(`https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off&setLang=EN&mkt=en-Us&category=${nameCategory}`, {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-key": "8ac1ccac45msh8890345ac310c3ap1c78b2jsnfeddd8a9ee43",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
            }
        })
            .then(res => res.json())))
    }
}

export const actionSearch = (inputSearch) => {
    return async dispatch => {
        let getResultSearch = await dispatch(actionPromise('searchResult', fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${inputSearch}&safeSearch=Off&textFormat=Raw&freshness=Day&mkt=en-Us&setLang=en`, {
            "method": "GET",
            "headers": {
                "x-bingapis-sdk": "true",
                "x-rapidapi-key": "8ac1ccac45msh8890345ac310c3ap1c78b2jsnfeddd8a9ee43",
                "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
            }
        })
            .then(res => res.json())))
    }
}