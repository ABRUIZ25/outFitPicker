// import './cloths/cloths';
import { useState } from "react";
import './App.css';

function App() {
  const [clothingType, setClothingType] = useState('')
  const [top, SetTop] = useState(null)
  const [bottom, SetBottom] = useState(null)
  const [shoes, Setshoes] = useState(null)


  const clothing = [
    {
      description: 'Michael Kors Blue Dress Shirt',
      type: "top",
      dressCode: 'formal',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$& wid=376 & fmt=webp,'
    },
    {
      description: 'Calvin Klein Steel Gray Dress Shirt',
      type: "top",
      dressCode: 'formal',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/19714862_fpx.tif?bgc = 255, 255, 255 & wid=400 & qlt=90, 0 & layer=comp & op_sharpen=0 & resMode=bicub & op_usm=0.7, 1.0, 0.5, 0 & fmt=webp',
    },
    {
      description: 'Michael Kors Pink Dress Shirt',
      type: "top",
      dressCode: 'formal',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/21014523_fpx.tif?op_sharpen = 1 & wid=1230 & hei=1500 & fit=fit, 1 & $filterxlrg$ & fmt=webp',
    },
    {
      description: 'Michael Kors White Dress Shirt',
      type: "top",
      dressCode: 'formal',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/10468918_fpx.tif?$browse$ & wid=376 & fmt=webp',
    },
    {
      description: 'Alfani Short Sleeve Shirt',
      type: "top",
      dressCode: 'casual',

      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/20929261_fpx.tif?$browse$ & wid=376 & fmt=webp',
    },
    {
      description: 'Tommy Hilfiger white Short Sleeve Shirt',
      type: "top",
      dressCode: 'casual',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8789631_fpx.tif?$browse$ & wid=376 & fmt=webp',
    },
    {
      description: 'Wrangler Graphic T-shirt',
      type: "top",
      dressCode: 'sport',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/8/optimized/21436348_fpx.tif?$browse$ & wid=376 & fmt=webp',
    },
    {
      description: 'Adidas red T-shirt',
      type: "top",
      dressCode: 'sport',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/13336822_fpx.tif?$thumb$ & wid=376',
    },
    {
      description: 'Nike Giannis Basketball Sneakers',
      type: "shoes",
      dressCode: 'sport',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/21824750_fpx.tif?op_sharpen = 1 & wid=1230 & hei=1500 & fit=fit, 1 & $filterxlrg$ & fmt=webp',
    },
    {
      description: 'Adidas High Top Sneakers',
      type: "shoes",
      dressCode: 'sport',

      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18588060_fpx.tif?op_sharpen = 1 & wid=1230 & hei=1500 & fit=fit, 1 & $filterxlrg$ & fmt=webp',
    },
    {
      description: 'Sperry Brown Shoes',
      type: "shoes",
      dressCode: 'casual',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/524862_fpx.tif?$thumb$ & wid=376',
    },
    {
      description: 'Sperry Blue Shoes',
      type: "shoes",
      dressCode: 'casual',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21650286_fpx.tif?op_sharpen = 1 & wid=1230 & hei=1500 & fit=fit, 1 & $filterxlrg$ & fmt=webp',
    },
    {
      description: 'Casual White Pants',
      type: "bottom",
      dressCode: 'casual',
      imageUrl:
        'https://n.nordstrommedia.com/id/sr3/0e7486a9-93bb-47d9-947c-5a4052ff4157.jpeg?h=365&w= 240 & dpr=2',
    },
    {
      description: 'Dress Blue Pants',
      type: "bottom",
      dressCode: 'formal',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8353081_fpx.tif?op_sharpen = 1 & wid=1230 & hei=1500 & fit=fit, 1 & $filterxlrg$ & fmt=webp',
    },
    {
      description: 'Slim Fit Stretch Khaki Pants',
      type: "bottom",
      dressCode: 'casual',

      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/10067433_fpx.tif?op_sharpen = 1 & wid=700 & hei=855 & fit=fit, 1 & fmt=webp',
    },
    {
      description: 'Brown Dress Pants',
      type: "bottom",
      dressCode: 'formal',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/10067390_fpx.tif?$thumb$ & wid=376',
    },
    {
      description: 'Black Dress Pants',
      type: "bottom",
      dressCode: 'formal',
      imageUrl:
        'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$ & wid=376 & fmt=webp',
    },
    {
      description: 'Adidas Track Pants',
      type: "bottom",
      dressCode: 'sport',
      imageUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d80911fe0e24f8eb67fac3800e8bee0_9366 / Tiro_21_Sweat_Pants_Black_GM7336_21_model.jpg',
    },
    {
      description: 'Adidas Jogger Pants',
      type: "bottom",
      dressCode: 'sport',
      imageUrl:
        'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5bf3559e3514ebc8afeac840145abf8_9366 / tiro - 21 - sweat - pants.jpg',
    },
    {
      description: 'Brown formal shoes',
      type: "shoes",
      dressCode: 'formal',
      imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/3/optimized/9199563_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
    },
    {
      description: 'Black formal shoes',
      type: "shoes",
      dressCode: 'formal',
      imageUrl: 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/3717082_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
    },
  ];

  const sportWear = clothing.filter(clothing => clothing.dressCode === 'sport')
  const casualWear = clothing.filter(clothing => clothing.dressCode === 'casual')
  const formalWear = clothing.filter(clothing => clothing.dressCode === 'formal')

  const sportTop = sportWear.filter(sportWear => sportWear.type === 'top')
  const sportBottom = sportWear.filter(sportWear => sportWear.type === 'bottom')
  const sportShoes = sportWear.filter(sportWear => sportWear.type === 'shoes')


  const casualTop = casualWear.filter(casualWear => casualWear.type === 'top')
  const casualBottom = casualWear.filter(casualWear => casualWear.type === 'bottom')
  const casualshoes = casualWear.filter(casualWear => casualWear.type === 'shoes')

  const formalTop = formalWear.filter(formalWear => formalWear.type === 'top')
  const formalBottom = formalWear.filter(formalWear => formalWear.type === 'bottom')
  const formalshoes = formalWear.filter(formalWear => formalWear.type === 'shoes')

  const sportType = () => {

    let selectedTop = Math.floor(Math.random() * sportTop.length)
    SetTop(sportTop[selectedTop].imageUrl)

    let selectedBottom = Math.floor(Math.random() * sportBottom.length)
    SetBottom(sportBottom[selectedBottom].imageUrl)

    let selectedShoes = Math.floor(Math.random() * sportShoes.length)

    Setshoes(sportShoes[selectedShoes].imageUrl)
  }

  const casualType = () => {
    let selectedTop = Math.floor(Math.random() * casualTop.length)
    SetTop(casualTop[selectedTop].imageUrl)

    let selectedBottom = Math.floor(Math.random() * casualBottom.length)
    SetBottom(casualBottom[selectedBottom].imageUrl)

    let selectedshoes = Math.floor(Math.random() * casualshoes.length)
    Setshoes(casualshoes[selectedshoes].imageUrl)

  }


  const formalType = () => {
    let selectedTop = Math.floor(Math.random() * formalTop.length)
    SetTop(formalTop[selectedTop].imageUrl)

    let selectedBottom = Math.floor(Math.random() * formalBottom.length)
    SetBottom(formalBottom[selectedBottom].imageUrl)

    let selectedshoes = Math.floor(Math.random() * formalshoes.length)
    Setshoes(formalshoes[selectedshoes].imageUrl)

  }

  return (
    <div className="App">
      <button onClick={casualType}>casual</button>
      <button onClick={sportType}>sport</button>
      <button onClick={formalType}>formal</button>
      <div>{clothingType}</div>
      <img src={top} />

      <img scr={bottom} />
      <img src={shoes} />







    </div>
  );
}

export default App;
