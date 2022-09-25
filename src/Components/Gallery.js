import "./gallery.css";

import React, { Component } from "react";

export default class Gallery extends Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a
              key={index}
              className="book"
              href={infoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={undefined !== imageLinks ? imageLinks.thumbnail : ""}
                alt={`Pictured: the book cover is ${title}.`}
                className="bookCover"
              />
              <header className="bookTitle">{title}</header>
            </a>
          );
        })}
      </div>
    );
  }
}
