import React from 'react';
import ImageToggleOnScroll from './ImageToggleOnScroll';

export default function SpeakerDetail({ data, onHeartFavoriteHandler }) {
  return (
    <div className="card col-4 cardmin">
      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${data.id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${data.id}.jpg`}
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-sessionid={data.id}
            className={data.favorite}
            className={data.favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              onHeartFavoriteHandler(e, !data.favorite);
            }}
          />
          <span>
            {data.firstname} {data.lastname}
          </span>
        </h4>
        <span> {data.bio}</span>
      </div>
    </div>
  );
}
