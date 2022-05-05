



// begin wendy's js



 

const dropDown = document.querySelector('#colorSelector');


const aa1 = document.querySelector('#a1');
const a22 = document.querySelector('#a2');
const a33 = document.querySelector('#a3');
const a44 = document.querySelector('#a4');
const a55 = document.querySelector('#a5');
const a66 = document.querySelector('#a6');
const a77 = document.querySelector('#a7');
const a88 = document.querySelector('#a8');
const a99 = document.querySelector('#a9');
const a110 = document.querySelector('#a10');
const a111 = document.querySelector('#a11');
const a112 = document.querySelector('#a12');

const bb1 = document.querySelector('#b1');
const b22 = document.querySelector('#b2');
const b33 = document.querySelector('#b3');
const b44 = document.querySelector('#b4');
const b55 = document.querySelector('#b5');
const b66 = document.querySelector('#b6');
const b77 = document.querySelector('#b7');
const b88 = document.querySelector('#b8');
const b99 = document.querySelector('#b9');
const b110 = document.querySelector('#b10');
const b111 = document.querySelector('#b11');
const b112 = document.querySelector('#b12');

const cc1 = document.querySelector('#c1');
const c22 = document.querySelector('#c2');
const c33 = document.querySelector('#c3');
const c44 = document.querySelector('#c4');
const c55 = document.querySelector('#c5');
const c66 = document.querySelector('#c6');
// const c77 = document.querySelector('#c7');
// const c88 = document.querySelector('#c8');
// const c99 = document.querySelector('#c9');
// const c110 = document.querySelector('#c10');
// const c111 = document.querySelector('#c11');
// const c112 = document.querySelector('#c12');

const mainPalatte = {
  sadBlue: {
    a1: "#CACDDC",
    a2: "#B2B8D0", 
    a3: "#8791B7",
    a4: "#767E9B",
    a5: "#767E9B",
    a6: "#767E9B",
    a7: "#767E9B",
    a8: "#767E9B",
    a9: "#767E9B",
    a10: "#767E9B",
    a11: "#767E9B",
    a12: "#767E9B",
    b1: "#767E9B",
    b2: "#767E9B", 
    b3: "#767E9B",
    b4: "#767E9B",
    b5: "#767E9B",
    b6: "#767E9B",
    b7: "#767E9B",
    b8: "#767E9B",
    b9: "#767E9B",
    b10: "#767E9B",
    b11: "#767E9B",
    b12: "#767E9B",
    c1: "#767E9B",
    c2: "#767E9B", 
    c3: "#767E9B",
    c4: "#767E9B",
    c5: "#767E9B",
    c6: "#767E9B",
    // c7: "#767E9B",
    // c8: "#767E9B",
    // c9: "#767E9B",
    // c10: "#767E9B",
    // c11: "#767E9B",
    // c12: "#767E9B",
  }, 
  happyYellow: {
    a1: "#CACDDC",
	a2: "#B2B8D0", 
	a3: "#8791B7",
	a4: "#767E9B",
    a5: "",
    a6: "",
    a7: "",
    a8: "",
    a9: "",
    a10: "",
    a11: "",
    a12: "",

	b1: "",
	b2: "", 
	b3: "",
	b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",
    b9: "",
    b10: "",
    b11: "",
    b12: "",

	c1: "",
	c2: "", 
	c3: "",
	c4: "",
    c5: "",
    c6: "",
    // c7: "",
    // c8: "",
    // c9: "",
    // c10: "",
    // c11: "",
    // c12: "",
  }, 
  freshGreen: {
    a1: "#CACDDC",
    a2: "#B2B8D0", 
    a3: "#8791B7",
    a4: "#767E9B",
      a5: "",
      a6: "",
      a7: "",
      a8: "",
      a9: "",
      a10: "",
      a11: "",
      a12: "",
  
    b1: "",
    b2: "", 
    b3: "",
    b4: "",
      b5: "",
      b6: "",
      b7: "",
      b8: "",
      b9: "",
      b10: "",
      b11: "",
      b12: "",
  
    c1: "",
    c2: "", 
    c3: "",
    c4: "",
      c5: "",
      c6: "",
      // c7: "",
      // c8: "",
      // c9: "",
      // c10: "",
      // c11: "",
      // c12: "", 
  }, 
  pickAVibe: {
    a1: "#042940",
	a2: "#048175", 
	a3: "#B4db37",
	a4: "#dbf227",
    a5: "#82d99f",
    a6: "#5d9ca3",
    a7: "#25636a",
    a8: "#e3e3ba",
    a9: "#edc5b7",
    a10: "#f48d69",
    a11: "#ff6e6e",
    a12: "#d8655b",

	b1: "#bf1304",
	b2: "#a62b1f", 
	b3: "#730202",
	b4: "#f59595",
    b5: "#f85353",
    b6: "#ca0909",
    b7: "#f4851e",
    b8: "#f7a960",
    b9: "#f5dd88",
    b10: "#fed74c",
    b11: "#fff856",
    b12: "#ddff56",

	c1: "#8ff26c",
	c2: "#6cf2a2", 
	c3: "#4fdebc",
	c4: "#1eba94",
    c5: "#1e9eba",
    c6: "#0d87a1",
    // c7: "#2F0924",
    // c8: "#2F0F0A",
    // c9: "#34230A",
    // c10: "#343209",
    // c11: "#32380A",
    // c12: "#203308",
  }
}

const sadBlue = {
	a1: "#CACDDC",
	a2: "#B2B8D0", 
	a3: "#8791B7",
	a4: "#767E9B",
    a5: "#767E9B",
    a6: "#767E9B",
    a7: "#767E9B",
    a8: "#767E9B",
    a9: "#767E9B",
    a10: "#767E9B",
    a11: "#767E9B",
    a12: "#767E9B",

	b1: "#767E9B",
	b2: "#767E9B", 
	b3: "#767E9B",
	b4: "#767E9B",
    b5: "#767E9B",
    b6: "#767E9B",
    b7: "#767E9B",
    b8: "#767E9B",
    b9: "#767E9B",
    b10: "#767E9B",
    b11: "#767E9B",
    b12: "#767E9B",

	c1: "#767E9B",
	c2: "#767E9B", 
	c3: "#767E9B",
	c4: "#767E9B",
    c5: "#767E9B",
    c6: "#767E9B",
    // c7: "#767E9B",
    // c8: "#767E9B",
    // c9: "#767E9B",
    // c10: "#767E9B",
    // c11: "#767E9B",
    // c12: "#767E9B",
};

const happyYellow = {
	a1: "#CACDDC",
	a2: "#B2B8D0", 
	a3: "#8791B7",
	a4: "#767E9B",
    a5: "",
    a6: "",
    a7: "",
    a8: "",
    a9: "",
    a10: "",
    a11: "",
    a12: "",

	b1: "",
	b2: "", 
	b3: "",
	b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",
    b9: "",
    b10: "",
    b11: "",
    b12: "",

	c1: "",
	c2: "", 
	c3: "",
	c4: "",
    c5: "",
    c6: "",
    // c7: "",
    // c8: "",
    // c9: "",
    // c10: "",
    // c11: "",
    // c12: "",
};

const freshGreen = {
	a1: "#CACDDC",
	a2: "#B2B8D0", 
	a3: "#8791B7",
	a4: "#767E9B",
    a5: "",
    a6: "",
    a7: "",
    a8: "",
    a9: "",
    a10: "",
    a11: "",
    a12: "",

	b1: "",
	b2: "", 
	b3: "",
	b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",
    b9: "",
    b10: "",
    b11: "",
    b12: "",

	c1: "",
	c2: "", 
	c3: "",
	c4: "",
    c5: "",
    c6: "",
    // c7: "",
    // c8: "",
    // c9: "",
    // c10: "",
    // c11: "",
    // c12: "",
};

const pickAVibe = {
	a1: "#042940",
	a2: "#048175", 
	a3: "#B4db37",
	a4: "#dbf227",
    a5: "#82d99f",
    a6: "#5d9ca3",
    a7: "#25636a",
    a8: "#e3e3ba",
    a9: "#edc5b7",
    a10: "#f48d69",
    a11: "#ff6e6e",
    a12: "#d8655b",

	b1: "#bf1304",
	b2: "#a62b1f", 
	b3: "#730202",
	b4: "#f59595",
    b5: "#f85353",
    b6: "#ca0909",
    b7: "#f4851e",
    b8: "#f7a960",
    b9: "#f5dd88",
    b10: "#fed74c",
    b11: "#fff856",
    b12: "#ddff56",

	c1: "#8ff26c",
	c2: "#6cf2a2", 
	c3: "#4fdebc",
	c4: "#1eba94",
    c5: "#1e9eba",
    c6: "#0d87a1",
    // c7: "#2F0924",
    // c8: "#2F0F0A",
    // c9: "#34230A",
    // c10: "#343209",
    // c11: "#32380A",
    // c12: "#203308",
};

const colorBox = (userSelection) => {
	const { a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, c1, c2, c3, c4, c5, c6} = userSelection;

	aa1.style.backgroundColor = a1;
  aa1.dataset.backgroundColor = a1;
	a22.style.backgroundColor = a2;
	a33.style.backgroundColor = a3;
	a44.style.backgroundColor = a4;
    a55.style.backgroundColor = a5;
    a66.style.backgroundColor = a6;
    a77.style.backgroundColor = a7;
    a88.style.backgroundColor = a8;
    a99.style.backgroundColor = a9;
    a110.style.backgroundColor = a10;
    a111.style.backgroundColor = a11;
    a112.style.backgroundColor = a12;

	bb1.style.backgroundColor = b1;
	b22.style.backgroundColor = b2;
	b33.style.backgroundColor = b3;
	b44.style.backgroundColor = b4;
    b55.style.backgroundColor = b5;
    b66.style.backgroundColor = b6;
    b77.style.backgroundColor = b7;
    b88.style.backgroundColor = b8;
    b99.style.backgroundColor = b5;
    b10.style.backgroundColor = b6;
    b77.style.backgroundColor = b7;
    b88.style.backgroundColor = b8;
    b99.style.backgroundColor = b9;
    b10.style.backgroundColor = b10;
    b111.style.backgroundColor = b11;
    b112.style.backgroundColor = b12;

	cc1.style.backgroundColor = c1;
	c22.style.backgroundColor = c2;
	c33.style.backgroundColor = c3;
	c44.style.backgroundColor = c4;
    c55.style.backgroundColor = c5;
    c66.style.backgroundColor = c6;
    // c77.style.backgroundColor = c7;
    // c88.style.backgroundColor = c8;
    // c99.style.backgroundColor = c9;
    // c110.style.backgroundColor = c10;
    // c111.style.backgroundColor = c11;
    // c112.style.backgroundColor = c12;
    

};


dropDown.addEventListener('change', (event) => {
	const { value } = event.target;
	switch(value) {
		case "sadBlue":
			colorBox(sadBlue)
			break;
		case "happyYellow":
			colorBox(happyYellow)
			break;
		case "freshGreen":
			colorBox(freshGreen)
			break;
		default:
            colorBox(pickAVibe)
			return;
	}
});

import { dragElement, extractPickerHexValue } from './modules/utilities.js'

const dragElementObj = document.getElementById("drag-object")
const hexInput = document.getElementById('hexInput');
const colorView = document.querySelector('.color-view');
let mainColorValue = ""
const sliderPicker = new iro.ColorPicker("#sliderPicker", {
    width: 200,
    color: "rgb(255, 0, 0)",
    borderWidth: .44,
    borderColor: "#EAE8E8",
    handleRadius: 6.5,
    margin: 25,
    padding: 4,
    layout: [
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'hue'
        }
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'saturation'
        }
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'value'
        }
      },
      ]
    });

sliderPicker.on(['color:init', 'color:change'], function(color){
  const { hexString } = color
  hexInput.value = hexString;
  colorView.style.backgroundColor = hexString;
  dragElementObj.style.backgroundColor = hexString;
});

hexInput.addEventListener('change', (event) => extractPickerHexValue(event, mainColorValue, sliderPicker));


swatchesContainer.addEventListener('click', (event) => {
  const dropDownValue = document.querySelector('#selectorDropdown').value;
  const id = event.target.id;
  const colorCombo = `${dropDownValue}.${id}`
  console.log(mainPalatte[dropDownValue][id])
  // I.E.
  // mainPalatte.sadBlue.a1
});


// end wendy's js
  
  
  