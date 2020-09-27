(function(){
    let elBoby = document.body;
    let elImg = document.querySelector('img');
    let elVideo = document.getElementById('video');
    let winWidth;
    let winHeight;
    let pixelDuration;
    let resize;
    let init;
    let scrollY = 0;
    let keyframse = [
        {
            animationValue:{               
                scale:[1,2],
                tryangle:[0,200],
                rectangle:[0,500]
            }
        },
        {
            animationValue:{
                scale:[2,0.5],
                tryangle:[200,1000],
                rectangle:[500,500]
            }
        }
    ]
    
    let totalScrollHeight = 0;
    
    init = function(){
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;

        resize();
        render();

        window.addEventListener('resize',resize)
        window.addEventListener('scroll',scrollHandler)

    }

    resize = function(){
        winWidth = window.innerWidth;
        winHeight = window.innerHeight;
        totalScrollHeight = 0;
        pixelDuration = 0.5 * winHeight;

        for(let i=0; i<keyframse.length; i++){
            totalScrollHeight += pixelDuration;
        }
        totalScrollHeight += winHeight;
        elBoby.style.height = totalScrollHeight + 'px';


    };
    function render(){

    }

    function scrollHandler(){
        scrollY = window.pageYOffset;
        if(scrollY < 0 || scrollY > totalScrollHeight - winHeight){
            return
        }else{
            console.log(scrollY)
        }
    }

    init();

})();
