import { connect } from "react-redux";
import Edit from "../../components/Articles/Edit";
import { editArticle } from "../../data/actions/state";
import history from "../../history";
// the second argument passed to mapStateToProps represent the props passed in from the parent
const mapStateToProps = (state, { id }) => {
    const article = state.articles[id];
    let fields;
    if(article) { 
	    fields = [
		    { name: "title", label: "Title", value: article.title },
            { name: "article", label: "Article", value: article.article },
		    { name: "tags", label: "Tags", value: article.tags },
		];
	}
    //add code to break if id not found
    return {
        // this is why storing articles in an object is useful
        fields: fields, 
        article: article,
    };
};


const mapDispatchToProps = (dispatch, { id }) => {
    return {
        onSubmit: data => {
            dispatch(editArticle(data, id));
            // navigate to the home page
            history.push("/");
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);


