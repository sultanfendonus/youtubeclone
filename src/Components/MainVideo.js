import React from 'react';


const MainVideo = (props) =>{

    const mainVideoId = "https://www.youtube.com/embed/" + props.mainVideoID;
    
    if(props.mainVideoID === undefined){
        return (
            <div>
            </div>
        );
    }else{
        return (
            <div>
                <iframe title={mainVideoId} width="750" height="480" src={mainVideoId} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
        );
    }

   
}

export default MainVideo;