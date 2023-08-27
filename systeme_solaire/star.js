const STARSNUM = 100;
const SPEED = 1;

const windowW = $(window).width(),
    windowH = $(window).height(),
    sky = $('#sky');

for (let i=0; i<STARSNUM; i++) {
    const size = Math.floor((Math.random()*5)+2),
        animDur = Math.floor((Math.random()*10)+4) / (SPEED/2),
        posX = Math.floor((Math.random()*windowW)+1),
        posY = Math.floor((Math.random()*windowH)+1);
    
    const randomAnimDuration = [

        'animation-duration: ' + animDur + 's;'
    ].join('');
    
    const style = 'width: ' + size + 'px; height: ' + size + 'px; left: ' + posX + 'px; top: ' + posY + 'px;' + randomAnimDuration;
    
    sky.appendChild = ('<div class="star" style="' + style + '"></div>');
}