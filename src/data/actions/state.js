
export const addArticle = ({ title, article }) => {
    return {
        type: "addArticle",
        title: title,
        article: article,
    };
};

export const editArticle = ({ title, article }, id) => {
    return {
        type: "editArticle",
        title: title,
        article: article,
        id: id,
    };
};

export const deleteArticle = (id) => {
	    return {
        type: "deleteArticle",
        id: id,
    };
};

export const addComment = (id, { email, comment }) => {
    return {
        type: "addComment",
        id: id,
        email: email,
        comment: comment,
    };
};

export const setTitles = ({ articles, titles }) => {
    return {
        type: "setTitles",
        titles: titles,
    };
};
