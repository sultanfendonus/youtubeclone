import Axios from 'axios';


const API_KEY = 'AIzaSyC3jK5pM7fyOb7OO-5hBXgJ2J2IF610QOk';

export const searchVideos = async (searchText)=>{
    const Response = await Axios.get("https://www.googleapis.com/youtube/v3/search",{
        params : {
            part : 'snippet',
            key : API_KEY,
            q : searchText
            
        }

    });

    return Response;
}