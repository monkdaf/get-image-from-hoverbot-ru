// @flow

import downloadImage from './downloadImage';
//
// export default half;
downloadImage('giroskuter-power-pasport-bag_11.jpg', 'https://static-eu.insales.ru/images/products/1/2034/84322290/giroskuter-power-pasport-bag.jpg')
.then(res => console.log(res));
