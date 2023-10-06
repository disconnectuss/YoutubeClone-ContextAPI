import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { MdLocalFireDepartment, MdLiveTv } from 'react-icons/md';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';

// Categories
export const categories = [
  { name: 'New', icon: <AiFillHome />, type: 'home' },
  {
    name: 'Trending',
    icon: <MdLocalFireDepartment />,
    type: 'category',
  },
  {
    name: 'Music',
    icon: <CgMusicNote />,
    type: 'category',
  },
  { name: 'Movies', icon: <FiFilm />, type: 'category' },
  { name: 'Live', icon: <MdLiveTv />, type: 'category' },
  {
    name: 'Gaming',
    icon: <IoGameControllerSharp />,
    type: 'category',
  },
  {
    name: 'News',
    icon: <ImNewspaper />,
    type: 'category',
  },
  {
    name: 'Sport',
    icon: <GiDiamondTrophy />,
    type: 'category',
  },
  {
    name: 'Education',
    icon: <RiLightbulbLine />,
    type: 'category',
  },
  {
    name: 'Beauty and cosmetic',
    icon: <GiEclipse />,
    type: 'category',
    divider: true,
  },
  { name: 'Ayarlar', icon: <FiSettings />, type: 'menu' },
  {
    name: 'Report History',
    icon: <AiOutlineFlag />,
    type: 'menu',
  },
  { name: 'Yardım', icon: <FiHelpCircle />, type: 'menu' },
  {
    name: 'Send feedback',
    icon: <RiFeedbackLine />,
    type: 'menu',
  },
];
// API process

export const options = {
  params: {

    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '7f439e5980mshe38af19fbab2c45p1da11ejsne3faedfb56e8',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
  


/* const axios = require("axios")

const url= "https://www.coupang.com/";

axios.get(url).then((res) => {
  console.log('no Accept-Encoding status:', res.status);
  })
  .catch((error) => {
    console.error('no Accept-Encoding status:', error.response.status);
  });

const config = {
  headers: {
    'Accept-Encoding': 'gzip, deflate, br'
  }
};

axios.get(url, config).then((res) => {
  console.log('Accept-Encoding status:', res.status);
})
.catch((error) => {
  console.error('Accept-Encoding status:', error.response.status);
});
*/