var btn=$(".nav__burger"),menu=$(".nav__main"),mask=$(".mask"),cont=$(".nav-container"),item=$(".nav__link");function menuShow(){btn.on("click",function(){menu.toggleClass("is-active"),mask.toggleClass("is-active"),cont.toggleClass("is-active")}),item.on("click",function(){menu.toggleClass("is-active",!1),mask.toggleClass("is-active",!1),cont.toggleClass("is-active",!1)})}$(window).ready(function(){menuShow(),$(".services-panel").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,prevArrow:$(".services__arrow_b"),nextArrow:$(".services__arrow_f"),dots:!1,arrows:!0,variableWidth:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1,arrows:!1}}]}),$(".team-panel").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,prevArrow:$(".team__arrow_b"),nextArrow:$(".team__arrow_f"),dots:!1,arrows:!0,variableWidth:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1,arrows:!1}}]}),$(".intro-slide").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,prevArrow:$(".intro__b"),nextArrow:$(".intro__f"),dots:!1,arrows:!0,variableWidth:!1,responsive:[{breakpoint:767,settings:{slidesToShow:1,arrows:!1}}]})});
//# sourceMappingURL=main.js.map
