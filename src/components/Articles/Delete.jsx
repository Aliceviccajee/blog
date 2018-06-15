import React from "react";
import Form from "../Forms/Form";

// the fields the form should have
const fields = [
    { name: "title", label: "Title", value: "" },
    { name: "article", label: "Article", value: "" },
    { name: "tags", label: "Tags", value: "" }
];

const Delete = ({ onSubmit }) => (
    <React.Fragment>
        <h2>Delete Article</h2>
		<Form onSubmit={ onSubmit } className="panel-body" fields={ fields } button="Delete Article" />
    </React.Fragment>
);

export default Delete;
