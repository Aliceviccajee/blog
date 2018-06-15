import React from "react";
import Form from "../Forms/Form";
import FourOhFour from "../FourOhFour";

// the add article component
const Edit = ({ fields, article, onSubmit }) => !article ? <FourOhFour /> : (
    <React.Fragment>
        
        <h2>Edit Article</h2>

        <Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Update Article" />
    </React.Fragment>
);

export default Edit;
//show a 404 if article not found
//needs to get stuff out the state and also dispatch