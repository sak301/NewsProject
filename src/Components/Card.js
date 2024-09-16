import React from "react";

const Card = ({ data }) => {
  console.log(data);

  // const readMore = (url) => {
  //   window.open(url)
  // }

  // function readMore (url) {
  //   console.log(url);
  //   window.open(url);
  // }

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div className="card">
              <img src={curItem.urlToImage} alt={curItem.title} />
              <div className="content">
                <a className="title" target="blank" href={curItem.url}>
                  {curItem.title}{" "}
                </a>
                <p>{curItem.description}</p>
                {/* <button onClick={readMore(curItem.url)}>Read More</button> */}
                <a href={curItem.url} target="blank">
                  Read More
                </a>
              </div>
            </div>
          );
        }
      })}
    </div>
  );

  // return (
  //   <div className="cardContainer">
  //     {data.map((curItem, index) => (
  //       <div className="card" key={index}>
  //         <img src={curItem.urlToImage} alt={curItem.title} />
  //         <div className="content">
  //           <a className="title">{curItem.title}</a>
  //           <p>{curItem.description}</p>
  //           <button>Read More</button>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default Card;
