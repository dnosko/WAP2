import { React, useState } from "react";
import TimeCapsule from "../components/TimeCapsule";
import { getFeatures } from "../api/tracksApi";
import "../css/TimeCapsule.css";
import { useEffect } from "react";
import PageWrapper from "../components/PageWrapper";

export function DiscoverPage(props) {
  let [showTime, setShowTime] = useState(0);
  const [params, setParams] = useState({});
  document.getElementById("body").style.background = "black";
  document.getElementById("body").style.color = "white";

  function showComponent(year) {
    setShowTime(year);
  }
  const years = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

  useEffect(() => {
    const getParams = async () => {
      const features = await getFeatures();
      if (features) {
        setParams(features);
      }
    };
    getParams();
  }, []);

  return (
	<PageWrapper left='/playlist-timeline' right='/'>
		<div className='App'>
        <h1 className='top-songs'>Time Capsule!</h1>
        <h2 className='time-capsule'>Songs across time matching your taste</h2>
        {showTime === 0 ? (
          years.map((year) => (
            <button
              key={year}
              id={year}
              className='time-capsule'
              onClick={() => showComponent(year)}
            >
              {year}
            </button>
          ))
        ) : (
          <>
            <div className='grid-container time-capsule'>
              <button
                id='0'
                className='time-capsule'
                onClick={() => showComponent(0)}
              >
                Back
              </button>
              <TimeCapsule year={showTime} features={params} />
              {showTime === 2020 ? (
                <button
                  id={`'${showTime + 10}'`}
                  className='time-capsule'
                  onClick={() => showComponent(0)}
                >
                  Back
                </button>
              ) : (
                <button
                  id={`'${showTime + 10}'`}
                  className='time-capsule'
                  onClick={() => showComponent(showTime + 10)}
                >
                  {showTime + 10}
                </button>
              )}
            </div>
          </>
        )}
		</div>
	</PageWrapper>
  );
}
