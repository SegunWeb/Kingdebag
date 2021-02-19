// changing styles for desctop - mobile menu
let burger = document.querySelector(".header_burger");
let close = document.querySelector(".header_close");
let header = document.querySelector(".header");
let menuList = document.querySelector(".header_menu__list");
let bodyPage = document.querySelector(" body ");
let logo = document.querySelector(".logo_head");
let logoMob = document.querySelector(".mobile_logo");

burger.addEventListener('click', () => {
    close.style.display = "block";
    burger.style.display = "none";
    logo.style.position = "absolute";
    logoMob.style.position = "initial";
    logoMob.style.opacity = "1";
    logo.style.opacity = "0";
    header.style.backgroundColor = "#fff";
    menuList.classList.add('header_menu__list-mobile');
    bodyPage.classList.add('scroll-hidden');
});
close.addEventListener('click', () => {
    close.style.display = "none";
    burger.style.display = "block";
    logo.style.position = "initial";
    logoMob.style.position = "absolute";
    logo.style.opacity = "1";
    logoMob.style.opacity = "0";
    header.style.backgroundColor = "transparent";
    menuList.classList.remove('header_menu__list-mobile');
    bodyPage.classList.remove('scroll-hidden');
});

// footer button download

let buttons = document.querySelectorAll('.radio-button__input');
buttons.forEach( (elem) =>  {
    let getInputValue = elem.getAttribute("value");
    let btnDownLoad = document.querySelector("#check_value");
    elem.onclick = () => {
        btnDownLoad.setAttribute("href", "");
        btnDownLoad.setAttribute("href", getInputValue)
    }
});

// active url
$(function() {
    $('.header_menu [href]').each(function() {
        if (this.href == window.location.href) {
            $(this).addClass('active');
        }
    });
});

// video autoplay
(function($){
    var $w=$(window);
    $.fn.visible = function(partial,hidden,direction,container){
        if (this.length < 1)
            return;
        // Set direction default to 'both'.
        direction = direction || 'both';

        var $t          = this.length > 1 ? this.eq(0) : this,
            isContained = typeof container !== 'undefined' && container !== null,
            $c				  = isContained ? $(container) : $w,
            wPosition        = isContained ? $c.position() : 0,
            t           = $t.get(0),
            vpWidth     = $c.outerWidth(),
            vpHeight    = $c.outerHeight(),
            clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
                    rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
                    rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
                    rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
                    rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
                    rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
                    rec.left >= 0 && rec.left <  vpWidth,
                rViz = isContained ?
                    rec.right - wPosition.left > 0  && rec.right < vpWidth + wPosition.left  :
                    rec.right > 0 && rec.right <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz,
                vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop 				= isContained ? 0 : wPosition,
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $c.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                position          = $t.position(),
                _top            = position.top,
                _bottom         = _top + $t.height(),
                _left           = position.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };
})(jQuery);

