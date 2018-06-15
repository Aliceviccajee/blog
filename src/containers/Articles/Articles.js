// import in the getTitles API action
import { getTitles } from "../../data/api";
// react redux's connect function
import { connect } from "react-redux";

// import in the Articles component
import Articles from "../../components/Articles/Articles";

// mapStateToProps is passed in the current state
// it should return an object, which gets passed in as props to the connected component
const mapStateToProps = state => {
    return {
        // convert the articles object into an array
        articles: Object.values(state.articles),
    };
};

// setup mapDispatchToProps to call the action
const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getTitles()),
    };
};



// make sure we add mapDispatchToProps to the connect call
export default connect(mapStateToProps, mapDispatchToProps)(Articles);
