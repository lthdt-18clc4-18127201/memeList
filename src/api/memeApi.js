import axios from 'axios';

const getMemes = async () => {
    const response = await axios.get("https://api.imgflip.com/get_memes")
    .then(res => res.data.data.memes)
    return response;
}

export default getMemes;