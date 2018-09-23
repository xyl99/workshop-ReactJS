import React from "react";

const BlogList = props => {
  return (
    <div style={style.BL}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

const style = {
    BL: {
    backgroundColor: "#e8faff", justifyContent:"center",
    alignItems:"center",

}
}

export default BlogList;
