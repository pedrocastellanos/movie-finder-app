import React from 'react'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function getClassByRate(vote) {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange'
    } else {
      return 'red';
    }
  }


export default function Movie({movie}) {
    const { poster_path, title, vote_average, overview} = movie

    return (
        <div className="movie">
            <img src={`${IMGPATH + poster_path}`} alt={title} />
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={getClassByRate(vote_average)}>{vote_average}</span>
            </div>
            <div className="overview">
                <h2>Overview</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}
