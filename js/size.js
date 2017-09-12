onresize = function(){
    var mw = innerWidth,
        mh = innerHeight,

        ar = mw / mh, // available ratio
        br = 1, // base ratio
        w,
        h,
        s = document.querySelector('#in').style;

    if(ar <= br){
        w = mw;
        h = w / br;
    }else{
        h = mh;
        w = h * br;
    }

    s.width = w + 'px';
    s.height = h + 'px';
};
