import React from 'react';
import './Styles.css';



const NewsCard = (props) => {
   const { value } = props;
   return <div className='cardBox'>
      <div className='profileContainer'>
         <div className="img">
            <img className="image" src={value.profileImage} alt="Smiley face" width="42" height="42" />
         </div>
         <div className='name'>
            <p><i>{value.name}</i></p>
         </div>
      </div>

      <div className="newsDesc">
         <img className="newsImg" src={value.newsImage} alt="Smiley face"></img>
         <p className="desc">{value.newsDesc}</p>
      </div>

   </div>;
};

export default NewsCard;





