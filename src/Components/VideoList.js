import React from 'react';


class VideoList extends React.Component{

     onvideoSelect = (id)=>{
        this.props.onClick(id);
    }
    
     

render(){
        let videoListFunc = this.props.videos.map(videos =>{
            let hrefLink = '#';
            return (
                <div key={videos.id.videoId+1}>
                    <div className="list-group">
                        <a href={hrefLink} onClick = {()=>this.onvideoSelect(videos.id.videoId)}  className="list-group-item list-group-item-action">
                            <div  className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">{videos.snippet.title}</h6>
                            </div>
                            <img src={videos.snippet.thumbnails.high.url} alt="Trulli" width="300" height="170"></img>
                            <small>Donec id elit non mi porta.</small>
                        </a>
                        
                        </div>
                </div>
            )
        })
        
    return (
        <div>{videoListFunc}</div>
    )
}

   
}





export default VideoList;