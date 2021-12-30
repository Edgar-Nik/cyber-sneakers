import React from "react";

export default function TeamCard({ image, fullName, links }) {
  return (
    <div className="team-card">
      <img src={image} alt={fullName} />
      <div className="name-wrapper">{fullName}</div>
      <div className="social-links">
        {links.twitter && (
          <a className="link-item" href={links.twitter}>
            <i className="fab fa-twitter-square"></i>
          </a>
        )}
        {links.insta && (
          <a className="link-item" href={links.insta}>
            <i className="fab fa-instagram"></i>
          </a>
        )}
        {links.tiktok && (
          <a className="link-item" href={links.tiktok}>
            <i className="fab fa-tiktok"></i>
          </a>
        )}
      </div>
    </div>
  );
}
