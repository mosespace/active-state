import app from "/public/images-icons/app.png";
import machine from "/public/images-icons/machine.png";
import web from "/public/images-icons/web.png";
import { PiDribbbleLogoFill, PiInstagramLogoFill } from 'react-icons/pi';
import { FaTwitter, FaLinkedin} from 'react-icons/fa';

export const AppDevelopment ={
    id: 1,
    image: app,
    title: 'App development',
    decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat magnam sit veniam nihil similique aut eos quae quia!',
    itemsArray: ['Building Web Applications', 'Hosting the Web Applicationson the server', 'Maintaince for Free Monthly!']
};
export const WebDevelopment ={
    id: 2,
    image: web,
    title: 'Web development',
    decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat magnam sit veniam nihil similique aut eos quae quia!',
    itemsArray: ['Building Web Applications', 'Hosting the Web Applicationson the server', 'Maintaince for Free Monthly!']
};
export const MachineLearning ={
    id: 3,
    image: machine,
    title: 'Machine Learning',
    decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat magnam sit veniam nihil similique aut eos quae quia!',
    itemsArray: ['Building Machine Applications', 'Hosting & Marketting Machine Learning the Web', 'Maintaince for Free Monthly!']
};

export const benefits = [
    {
      id: 1,
      icon: PiDribbbleLogoFill,
      title: "Management",
      desc: "This is the For the Management",
    },
    {
      id: 2,
      icon: PiInstagramLogoFill,
      title: "Timely Execution",
      desc: "This is the description For the Timely Execution",
    },
    {
      id: 3,
      icon: FaTwitter,
      title: "Satisfaction",
      desc: "This is the description For the Satisfaction",
    },
    {
      id: 4,
      icon: FaLinkedin,
      title: "Coders",
      desc: "This is the description For the Coders",
    },
  ];