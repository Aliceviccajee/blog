import { connect } from "react-redux";
import Actions from "../../components/Articles/Actions";
import { deleteArticle } from "../../data/actions/state";
import history from "../../history";
// map dispatch to props gets given store's dispatch method as the first argument
// again, we return an object which gets passed in as props to the wrapped component    
	const mapDispatchToProps = (dispatch, {article}) => {
	    return {
	        onClick: () => { 
	            dispatch(deleteArticle(article.id));
	            history.push("/")
	            //dispatch action and redirect
	        },
	    };
};
// connect up mapDispatchToProps with the Add component
// has to be the second argument - the first is for mapStateToProps
// Add' props are now controlled by this file
export default connect(null, mapDispatchToProps)(Actions);