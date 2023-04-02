import { React } from "react";
import { average } from "../utils";

/* Split array into object of arrays based on interval of popularity */
function categorizeByPopularity(arr) {
  const categories = {
    Superstars: [],
    Mainstream: [],
    "Rising stars": [],
    "Emerging artists": [],
  };
  arr.forEach((num) => {
    if (num > 75 && num <= 100) {
      categories["Superstars"].push(num);
    } else if (num > 50 && num <= 75) {
      categories["Mainstream"].push(num);
    } else if (num > 30 && num <= 50) {
      categories["Rising stars"].push(num);
    } else if (num >= 0 && num <= 30) {
      categories["Emerging artists"].push(num);
    }
  });
  return categories;
}

/* Creates object containing:
 a photo of the first artist for the category interval based on popularity,
 average popularity of artists in given category
 */
function createObjForRender(categories, artists) {
  const categoriesNew = {
    Superstars: { photo: "", avg: 0, num: 0 },
    Mainstream: { photo: "", avg: 0, num: 0 },
    "Rising stars": { photo: "", avg: 0, num: 0 },
    "Emerging artists": { photo: "", avg: 0, num: 0 },
  };
  Object.keys(categories).forEach((category) => {
    const artist = artists.find(({ popularity }) => {
      if (category === "Superstars" && popularity > 75 && popularity <= 100) {
        return true;
      }
      if (category === "Mainstream" && popularity > 50 && popularity <= 75) {
        return true;
      }
      if (category === "Rising stars" && popularity > 30 && popularity <= 50) {
        return true;
      }
      if (
        category === "Emerging artists" &&
        popularity >= 0 &&
        popularity <= 30
      ) {
        return true;
      }
      return false;
    });

    if (artist) {
      categoriesNew[category].photo = artist.images[2].url;
      const popularityArr = categories[category];
      categoriesNew[category].avg = Math.ceil(average(popularityArr));
      categoriesNew[category].num = popularityArr.length;
    }
  });
  return categoriesNew;
}

export default function ArtistMeterCategories(props) {
  const categories = categorizeByPopularity(props.popularity);
  const categoriesForRender = createObjForRender(categories, props.artists);

  return (
    <div>
      <h2 className='artist-meter card-heading'>Your top 50 artists</h2>
      <div className='rectangle-card artist-meter'>
        {Object.entries(categoriesForRender).map(([category, childObj]) => (
          <div key={category}>
            <h3
              className={`artist-meter offset-card ${
                category == "Superstars" ? "" : " top-border"
              }`}
            >
              {category}
            </h3>
            <div className='row card' id='offset-card' key={category}>
              <div className='albumImg'>
                <img className='album artist-meter' src={childObj.photo}></img>
              </div>
              <div className='songscard'>
                <a className='artist-text'>{childObj.num} artists</a>
                <br></br>
                <a className='artist-text'>
                  average popularity: {childObj.avg}{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
