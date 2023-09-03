import React, { Component } from "react";
import noimage from './/no_image.png'
export class NewsItem extends Component {
    render() {
        let { title, description, image_url, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{height:'690px'}} >
                    <img src={image_url ? image_url : noimage} className="card-img-top" alt="..." height="160" width="280" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toDateString()}</small></p>
                        <h6>Source <span className="badge badge-danger">{source.name}</span></h6>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}