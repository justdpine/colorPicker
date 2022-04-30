import { dragElement, extractPickerHexValue } from './modules/utilities.js'

const dragElementObj = document.getElementById("drag-object")
const hexInput = document.getElementById('hexInput');
const colorView = document.querySelector('.color-view');
const sliderPicker = new iro.ColorPicker("#sliderPicker", {
    width: 200,
    color: "rgb(255, 0, 0)",
    borderWidth: 1,
    borderColor: "#fff",
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

hexInput.addEventListener('change', extractPickerHexValue);

// drag and drop script

dragElement(dragElementObj);
  
  
  