import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import ImageToggleOnScroll from './ImageToggleOnScroll';
import Menu from './Menu';
import SpeakerData from './speaker-data/speakerData';
import SpeakerDetail from './SpeakerDetail';

export default function Speakers() {
  const [speakersList, setSpeakersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
    });
    setSpeakersList(SpeakerData);
    return () => {
      console.log('clean up');
    };
  }, []);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const speakerListFitered = isLoading
    ? []
    : speakersList
        .filter(
          (sat, sun) => (speakingSaturday && sat) || (speakingSunday && sun),
        )
        .sort((a, b) => {
          if (a.firstname < b.firstname) return -1;
          if (a.firstname > b.firstname) return 1;
          return 0;
        });

  const heartFavoriteHandler = (e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
    setSpeakersList(
      speakersList.map((item) => {
        if (item.id === sessionId) {
          return { ...item, favorite: favoriteValue };
        }
        return item;
      }),
    );
  };

  if (isLoading) return <div> Loading ..... </div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar margintopbottom5 checkbox-bigger">
          <div className="hide">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSaturday}
                  checked={speakingSaturday}
                />
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSunday}
                  checked={speakingSunday}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card-deck">
            {speakerListFitered.map((data, index) => (
              <SpeakerDetail
                key={index}
                data={data}
                onHeartFavoriteHandler={heartFavoriteHandler}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
