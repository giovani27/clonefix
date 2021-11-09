import React, {useState} from 'react';
import './movierow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items }) => {

  const[scroolx, setscroolx] = useState(0);

  const handleLeftArrow = () => {
      let x = scroolx + Math.round(window.innerWidth / 2 );
        if(x  > 0 ){
          x = 0;
        }

        setscroolx(x);

  }
  const handleRightArrow = () => {
    let x = scroolx - Math.round(window.innerWidth / 2 );
    let listw = items.results.length * 150
    if(window.innerWidth - listw > x  ){
      x = (window.innerWidth - listw) -60 ;
    }
    setscroolx(x);
  }


  return (
   <div className="movierow">
       <h2>{title}</h2>
          <div className="movierow-left" onClick={handleLeftArrow}>
               <NavigateBeforeIcon style={{fontSize: 50}} />

          </div>
          <div className="movierow-right"     onClick={handleRightArrow} >
               <NavigateNextIcon style={{fontSize: 50}} />

          </div>


       <div className="movierow--listarea" >

           <div className="movierow--list" style={{
             marginLeft: scroolx,
             width: items.results.length * 150
           }} >
           {items.results.length > 0 && items.results.map((item, key)=>(
               <div key={key} className="movierow--item"> 
                 <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
               </div>

            ))} 

           </div>
      
           
       </div>

   </div>
     
  ) ;

}