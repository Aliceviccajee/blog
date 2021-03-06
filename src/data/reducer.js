
// need to track the last ID used
// the last ID used by the dummy articles is 2
let lastID = 2;
// create a function that returns a new article

// take the articles we've been given and set them as articles
const setTitles = (state, { titles }) => {
    return {
        ...state,
        titles: titles,
    };
};



const createArticle = ({ title, article }) => {
    // up the ID by 1 every time
    lastID += 1;
    return {
        id: lastID,
        title: title,
        article: article,
        comments: [],
        tags: [],
    };
};

const addArticle = (state, action) => {
    // create a new article with a dummy ID
    let newArticle = createArticle(action);
    return {
        ...state,
        articles: {
            ...state.articles,
            // add using the dummy ID
            [newArticle.id]: newArticle,
        },
    };
};

const editArticle = (state, { title, article, id}) => {
    return {
        ...state,
        articles: {
            ...state.articles,
            [id]: { 
            	...state.articles[id],
            	title: title,
            	article: article,
            },
        },
    };
};

const deleteArticle = (state, { id }) => {

	const copyState = {...state};
	delete copyState.articles[id]
	return copyState

};

const addComment = (state, { id, email, comment }) => {
   
    return {
        ...state,
        articles: {
            ...state.articles,
            [id]: { 
                ...state.articles[id],
                comments: [
                    ...state.articles[id].comments,
                    {email, comment}
                ]  
            },
        },
    };
    
};


const reducer = (state, action) => {
    switch (action.type) {

    	case "addArticle": return addArticle(state, action);
    	case "editArticle": return editArticle(state, action);
    	case "setTitles": return setTitles(state, action);
        case "deleteArticle": return deleteArticle(state, action);
    	case "addComment": return addComment(state, action);
        default: return state;
    }
}

export default reducer;





