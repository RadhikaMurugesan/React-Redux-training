import React from 'react'; 
import './style.css';

class NewsCard extends React.Component{
   constructor(props){
      super(props)
      
  }
    render() {
      console.log(this.props.data)

      const data = this.props.data;
  const listItems = data.map((listData) =>
  <div class='cardBox'>
  <div class='profileContainer'>
     <div class="img">
     <img class ="image" src={listData.profileImage} alt="Smiley face" width="42" height="42"/>
     </div>
     <div class='name'>
     <p><i>{listData.name}</i></p>            
     </div>                  
  </div>

  <div class="newsDesc">
     <img class = "newsImg" src={listData.newsImage} alt="Smiley face"></img>
     <p class="desc">{listData.newsDesc}</p>
  </div>

</div>
  );
       return (
          <ul>
             {listItems}
          </ul>

       )
       }
 }

 export default NewsCard;