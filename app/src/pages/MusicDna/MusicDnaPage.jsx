import { useEffect, useState } from "react";
import { getDnaCategory } from "./musicDna";
import "../../css/musicDna.css";
import DnaChart from "../../components/DnaChart";
import { categories, unmatched, fVal } from "./musicDnaData";
import PageWrapper from "../../components/PageWrapper";

function MusicDnaPage(props) {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(unmatched);
  const [songs, setSongs] = useState([]);
  const [avg, setAvg] = useState([]);

  useEffect(() => {
    const getIt = async () => {
      const res = await getDnaCategory(categories, unmatched);
      if (res) {
        setCategory(res.category);
        setSongs(res.representatives);
        setAvg(res.avg);
        setLoading(false);
      }
    };
    getIt();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-color",
      category.backgroundColor
    );
    document.documentElement.style.setProperty(
      "--text-shadow",
      category.textShadow
    );
    document.documentElement.style.setProperty(
      "--box-shadow",
      category.boxShadow
    );
    document.documentElement.style.setProperty("--color", category.color);
    document.getElementById("body").style.backgroundImage =
      category.backgroundImg;
    document.getElementById("body").style.backgroundSize = "cover";
  }, [category]);

  document.getElementById("body").style.animation = "none";

  const songItems = songs.map((song, index) => (
    <div
      className={`row card song${index == 0 ? "" : " top-border"}`}
      key={song.id}
    >
      <div className='albumImg'>
        <img className='album' src={song.album.images[2].url}></img>
      </div>
      <div className='songscard'>
        <a className='song text'>
          {song.name} - {song.album.artists[0].name}
        </a>
      </div>
    </div>
  ));

  return (
    <PageWrapper left='/artists' right='/playlist-timeline'>
      {loading ? (
        <h1 className='loading'>Loading your Music DNA analysis...</h1>
      ) : (
        <div className={`user-dna-content ${category.backgroundClass}`}>
          <h3>Your Music DNA is</h3>
          <img src={category.icon} className='dna-icon'></img>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
          <div className='dna-detail'>
            <div className='card-desc'>
              Checkout your genetic makeup
              <DnaChart avg={avg} colors={category.graphColors} />
            </div>
            <div className='rectangle-card-dna text card-desc'>
              These songs are just so YOU
              <div className='rectangle-card-dna'>{songItems}</div>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}

export default MusicDnaPage;
export { fVal };
