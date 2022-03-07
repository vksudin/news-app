import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, dates, source } =
      this.props;
    return (
      <div className="my-3">
        This is a NewsItem component
        <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"10"}}>
         {source}
    <span className="visually-hidden">unread messages</span>
  </span>
          <img
            src={
              !imageUrl
                ? "https://image.cnbcfm.com/api/v1/image/106114404-1567712262917gettyimages-1156688158.jpeg?v=1639140150"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} to{" "}
                {new Date(dates).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
