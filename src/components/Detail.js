import React, { useEffect, useState } from 'react';
import '../style/Detail.css';

const Detail = () =>{
    const [movieDetail,setMovieDetail] = useState({});

    const id = window.location.pathname;

    useEffect(async ()=>{
            fetch(`https://api.themoviedb.org/3/movie${id}?api_key=a9573f17301d308bb511bb7fd75183d8`)
            .then(res=>res.json())
            .then(result=>{
                setMovieDetail(result);
            })
            return () => {
                setMovieDetail({})
            }
    },[])

    function noDisplayOverview(){
        if(movieDetail.overview == ''){
            return null;
        }else{
            return <p className="overview">{movieDetail.overview}</p>
        }
    }

    function noDisplayDate(){
        if(movieDetail.release_date == ''){
            return null;
        }else{
            return <p className="release-date"><span>Fecha de estreno: {movieDetail.release_date}</span></p>
        }
    }
    
    return(
        <div className="movie-detail" >
            <div className="movie-detail-center">
                <div className="detail-img">
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetail.poster_path}`} alt={movieDetail.original_title}/>
                </div>
                <div className="detail-information">
                    <div className="information-center">
                        <h2>{movieDetail.original_title}</h2>
                        {noDisplayOverview()}
                        {noDisplayDate()}
                    </div>
                </div>
                
            </div>
        </div>
    )
}


export default Detail;