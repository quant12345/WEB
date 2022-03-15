"use strict"; 


document.addEventListener("DOMContentLoaded", () => {
});

let array_text = ["<b>"+"class Main2Period: "+"</b>"+"creates two increments from a financial instrument with different and dynamically variable periods with a shift of one.One increment on the x axis, the other on the y axis. If the value was growing, then the dot is green, the falling value of the dot will be blue."+"<p>"+"      By adjusting the first and second periods,"+" we select the optimal values for separating the points."+"</p>"+"<p>"+"Following libraries are used: PyQt5, numpy, sklearn, scipy, pandas_datareader."+"</p>"+
"<p>"+"<a href='https://github.com/quant12345/Machine-learning-and-graphics-for-financial-markets-and-beyond' target='_blank'>"+"You can download the code here"+"</a>"+"</p>", 
"<b>"+"class Main2Market: "+"</b>"+"similar to the previous version. But, in the second increment, another financial instrument is used. In this case, these are bonds(^TNX). The second increment works much slower, since synchronization with the first increment is used. If the value was growing, then the point green, the falling point value will be red."+"<p>"+"By adjusting the first and second periods," + " we select the optimal values for separating the points. You can also use other financial instruments and find relationships in them. Rising and falling values are taken from the first financial instrument---^GSPC(df1)."+"</p>"+"<p>"+"Following libraries are used: PyQt5, numpy, sklearn, scipy, pandas_datareader."+"</p>"+
"<p>"+"<a href='https://github.com/quant12345/Machine-learning-and-graphics-for-financial-markets-and-beyond' target='_blank'>"+"You can download the code here"+"</a>"+"</p>", 
"<b>"+"class curve_prec_rec: "+"</b>"+" for classification, a one-period increment with a shift of one is used. The 'GradientBoostingClassifier' model is used. 'decision_function()' is used to get the sum of points from 'sklearn'.By adjusting the 'threshold' we get the optimal ratio of 'precisions' and 'recalls'. report=True(prints 'classification_report'), split - how much in % training data, class_= 1 or class_= 0"
+"<p>"+"Following libraries are used: PyQt5, numpy, sklearn, scipy, pandas_datareader."+"</p>"+
"<p>"+"<a href='https://github.com/quant12345/Machine-learning-and-graphics-for-financial-markets-and-beyond' target='_blank'>"+"You can download the code here"+"</a>"+"</p>",
"<b>"+"class curve_roc_: "+"</b>"+"for classification, a one-period increment with a shift of one is used. The 'GradientBoostingClassifier' model is used. By adjusting the slider, select the desired ratio of fpr and tpr. Split - how much in % training data, class_= 1 or class_= 0"
+"<p>"+"Following libraries are used: PyQt5, numpy, sklearn, scipy, pandas_datareader."+"</p>"+
"<p>"+"<a href='https://github.com/quant12345/Machine-learning-and-graphics-for-financial-markets-and-beyond' target='_blank'>"+"You can download the code here"+"</a>"+"</p>"];

const mainSlider = () =>
{
    var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true, 
        slidesPerView: 'auto',
        
        cubeEffect: {
           shadow: true,
           slideShadows: true,
           shadowOffset: 50,
           shadowScale: 0.3,
           centerSlidesBounds: true,
        },

        direction: 'horizontal',
        loop: true,

        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',

        },

 on: {
    init: function () {
     
    },
    },



        });

swiper.on('slideChange', function () {
  let name = swiper.realIndex;
  let element = document.getElementsByClassName("text-element")[0];
  if (name == 0)
    {
     element.innerHTML = array_text[0];
     }
  if (name == 1)
    {
  element.innerHTML = array_text[1];
    }
  if (name == 2)
    {
  element.innerHTML = array_text[2];
    }
  if (name == 3)
    {
  element.innerHTML = array_text[3];
    }
});
};



try {
  mainSlider();
   } catch(err) {
}
