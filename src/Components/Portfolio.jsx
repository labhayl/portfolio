/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/coding.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "BigLens",
    description:
      "A Google Lens-inspired, open-source clone. It leverages Yandex, TinEye, Bing, and other image search services.",
    url: "https://github.com/labhayl/BigLens",
  },
  {
    title: "Kailasah",
    description:
      "A Sanskrit Sandhi splitting web tool. Achieved a record-breaking accuracy of 71.87%, surpassing the performance of previous models.",
    url: "https://github.com/labhayl/Samskritam",
  },
  {
    title: "Bliss Events",
    description:
      "An event management website to book destination weddings, birthdays, engagements, parties etc.",
    url: "https://github.com/labhayl/Event-Management-Full-Stack",
  },
  {
    title: "DocSim",
    description:
      "Document similarity percentage is determined by the cosine similarity between the TF-IDF vectors.",
    url: "https://github.com/labhayl/DS-Checker",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
