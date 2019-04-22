import React from 'react';
import SearchBar from './SearchBar'
import {searchVideos} from '../Api/YoutubeApi'
import VideoList from './VideoList';
import MainVideo from './MainVideo';

class App extends React.Component {

    state = {videoList : [], mainVideoId : ''};

    
    getFormSubmitedData = async (searchText)=>{
        const Response  = await searchVideos(searchText);
        this.setState({videoList : Response.data.items});
        this.setState({mainVideoID : Response.data.items[0].id.videoId})
    }

    getSelectedVideo = (selectedVideoId)=>{
       this.setState({mainVideoID : selectedVideoId});
    }

    render(){
        return(
            <div className="container">
            <SearchBar onSubmit={this.getFormSubmitedData}/>
            
            <div className="row">
                <div className="col-8">
               
                    <MainVideo mainVideoID = {this.state.mainVideoID}/>
                
                </div>
                <div className="col-4">
                    <VideoList videos = {this.state.videoList} onClick={this.getSelectedVideo}/>
                </div>
            </div>
            
            
            </div>
        )
    }
}

export default App;