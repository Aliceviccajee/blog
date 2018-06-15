import React, { Component } from "react";
import { Link } from "react-router-dom";



class Articles extends Component {
    componentDidMount() {
        this.props.onLoad();
    }
    
    render () {
        const { articles } = this.props;
        return (
            <React.Fragment>
                { /* check there are articles to show */ }
                { articles.length ?
                    <ul className="list-group">
                        { /* map over each article and display a list item for each one */ }
                        { articles.map(article => (
                            <li className="list-group-item" key={ article.id }>
                                { /* link to the article using its id */ }
                                <Link to={ "/articles/" + article.id }>{ article.title }</Link>
                            </li>
                        ))}
                    </ul>
                    :
                    <p>No articles found</p>
                }
            </React.Fragment>
        );
    }
};



export default Articles;
