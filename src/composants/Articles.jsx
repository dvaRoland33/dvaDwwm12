import React from "react"
import ArticleMobile from "./ArticleMobile"
import ArticleEtendu from "./ArticleEtendu"


class Articles extends React.Component {
  render(){
    return (
      <div>
        <div className="d-block d-md-none">
          <ArticleMobile />
        </div>

        <div className="d-none d-md-block">
          <ArticleEtendu />
        </div>
      </div>
    )
  }
}
  export default Articles