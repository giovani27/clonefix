import React, { useEffect, useState } from 'react';
import './App.css'
import tmdb from './tmdb.js';
import MovieRow from './components/movierow';
import FeatureMovie from './components/featuremovie'
import Header from './components/header'

export default  () => {

const [movielist , setmovielist ] = useState([]);
const [FeatureData , setFeatureData] = useState(null)

const [ BlackHeader , setBlackHeader] = useState(false)

  useEffect(() => {
    const loadall = async () => {
        let list =  await tmdb.getHomeList();
        setmovielist(list)

        let originals  = list.filter(i=>i.slug === 'originals');

        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1 ));
        let Chosen = originals[0].items.results[randomChosen];
       let ChosenInfo = await tmdb.getMovieInfo(Chosen.id, 'tv');

       setFeatureData(ChosenInfo)

    }

    loadall()
  }, []);

  console.log(movielist)
  useEffect(() => { 
      
   const scrollister = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      }else {
        setBlackHeader(false)
      }

   }

   window.addEventListener('scroll' , scrollister);
   return () => {
      window.removeEventListener('scroll', scrollister )

   }
  }, []);

  return (
    <div className="page"> 
      <Header black={BlackHeader} />

    {FeatureData && 
          <FeatureMovie  item={FeatureData} />

        }
        <section className="lists">

            {movielist.map((item, key) =>(
             
             <MovieRow  key={key} title={item.title} items={item.items}/>
            
              ))}



        </section>
        <footer>
          Feito com<span role="img" aria-label="Coração"> ♫ </span> Pela B7WEB<br/>
          Direito de Imagems para NetFlix<br/>
          Dados pegos do Site Themoviedb.org
           </footer>
      </div>
  );
}