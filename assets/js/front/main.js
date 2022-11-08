import {data1} from "../common/data";
//import 'jquery';
import '../../styles/front-style.css';

import imageSrc from  '../../images/cheveux-image.png';


console.log('hello webpack');
data1.describe();
console.log('coucou');

const i = document.createElement('img');
i.src = imageSrc;