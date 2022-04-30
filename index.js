var sliderPicker = new iro.ColorPicker("#sliderPicker", {
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
  //     {
  //       // component: iro.ui.Slider,
  // //       options: {
  // //         sliderType: 'alpha'
  // //       }
  // //     },
  // //   ]
  // // });
  var hexInput = document.getElementById('hexInput');
  var colorView = document.querySelector('.color-view');
  const dragElementObj = document.getElementById("drag-object")
  sliderPicker.on(['color:init', 'color:change'], function(color){
    const { hexString } = color
    hexInput.value = hexString;
    colorView.style.backgroundColor = hexString;
    dragElementObj.style.backgroundColor = hexString;
  });
  
  hexInput.addEventListener('change', function() {
    const colorValue = this.value;
    console.log(colorValue);
    sliderPicker.color.hexString = this.value;
  });
  
// drag and drop script

dragElement(dragElementObj);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // this I find the cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the user moves their cursor:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // finds the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // "places" the element after the mouse stops/release:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
  
  
  