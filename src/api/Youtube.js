import axios from 'axios';

const Key = 'AIzaSyDg6HcbrGeTYeFpBUlixGq4USHHqi3osaM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: Key
  }
});
