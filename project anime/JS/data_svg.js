const append_svg = {
    search: `<svg id="Capa_1" enable-background="new 0 0 515.558 515.558" height="100%" viewBox="0 0 515.558 515.558" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/></svg>`,
    SvgHtml: function(ele, svg) {
        let domhtml = document.querySelectorAll(ele);
        domhtml.forEach(particle=>{
            particle.innerHTML += append_svg[svg];
        });
    }
}
append_svg.SvgHtml('.logo__search', "search");
append_svg.user_signIn = `<svg height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient id="a" gradientTransform="matrix(1 0 0 -1 0 -19430)" gradientUnits="userSpaceOnUse" x1="0" x2="512" y1="-19686" y2="-19686"><stop offset="0" stop-color="#00f38d"/><stop offset="1" stop-color="#009eff"/></linearGradient><path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="url(#a)"/><path d="m314.203125 247.9375c23.515625-17.710938 38.75-45.851562 38.75-77.488281 0-53.457031-43.492187-96.949219-96.953125-96.949219-53.457031 0-96.949219 43.492188-96.949219 96.949219 0 31.636719 15.230469 59.777343 38.746094 77.488281-62.960937 23.632812-107.894531 84.445312-107.894531 155.5625h30c0-75.046875 61.054687-136.097656 136.101562-136.097656 75.042969 0 136.097656 61.050781 136.097656 136.097656h30c-.003906-71.117188-44.933593-131.929688-107.898437-155.5625zm-125.152344-77.488281c0-36.917969 30.03125-66.949219 66.949219-66.949219s66.949219 30.03125 66.949219 66.949219-30.03125 66.953125-66.949219 66.953125-66.949219-30.035156-66.949219-66.953125zm0 0" fill="#fff"/></svg>`;
append_svg.SvgHtml('.nav__signIn', 'user_signIn');

append_svg.homepage = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="100%" width="100%"
viewBox="0 0 491.398 491.398" style="enable-background:new 0 0 491.398 491.398;" xml:space="preserve">
   <path d="M481.765,220.422L276.474,15.123c-16.967-16.918-44.557-16.942-61.559,0.023L9.626,220.422
       c-12.835,12.833-12.835,33.65,0,46.483c12.843,12.842,33.646,12.842,46.487,0l27.828-27.832v214.872
       c0,19.343,15.682,35.024,35.027,35.024h74.826v-97.62c0-7.584,6.146-13.741,13.743-13.741h76.352
       c7.59,0,13.739,6.157,13.739,13.741v97.621h74.813c19.346,0,35.027-15.681,35.027-35.024V239.091l27.812,27.815
       c6.425,6.421,14.833,9.63,23.243,9.63c8.408,0,16.819-3.209,23.242-9.63C494.609,254.072,494.609,233.256,481.765,220.422z"/></svg>`;
append_svg.SvgHtml('.logo__home', 'homepage');

append_svg.next = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%"
viewBox="0 0 490.661 490.661" style="enable-background:new 0 0 490.661 490.661;" xml:space="preserve">
   <path d="M453.352,236.091L48.019,1.424c-3.285-1.899-7.36-1.899-10.688,0c-3.285,1.899-5.333,5.419-5.333,9.237v469.333
       c0,3.819,2.048,7.339,5.333,9.237c1.643,0.939,3.499,1.429,5.333,1.429c1.856,0,3.691-0.469,5.355-1.429l405.333-234.667
       c3.285-1.92,5.312-5.44,5.312-9.237S456.637,237.989,453.352,236.091z"/>
</svg>`
append_svg.SvgHtml(".panel-list .div-button__JS-bt1", "next");
append_svg.SvgHtml(".panel-list .div-button__JS-bt2", "next");

append_svg.list = `<svg enable-background="new 0 0 512 512" height="100%" viewBox="0 0 512 512" width="100%" xmlns="http://www.w3.org/2000/svg"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/></svg>`
append_svg.SvgHtml(".panel-list .div-button__JS-bt3", "list");



const append_html = {
    array_img: [
        "IMAGE/poster/code-geass.jpg",
        "IMAGE/poster/Gundam-Seed.png",
        "IMAGE/poster/hagane-no-rankinjutsushi-fullmetal-alchemist.jpg",
        "IMAGE/poster/kill-la-kill.png",
        "IMAGE/poster/kuroshitsuji.jpg",
        "IMAGE/poster/Maho-Shojo-Madoka-Magica.jpg",
        "IMAGE/poster/psycho-pass.jpg",
        "IMAGE/poster/steins-gate.jpg"
    ],
    Html: function(parent) {
        let ele = document.getElementsByClassName(parent)[0] || document.querySelector(parent);
        for(let i = 0; i < append_html.array_img.length; i++) {
            let index = append_html.array_img[i];
            let html = `
            <div class="sideshow-popular__div div-contain${i+1}">
              <img class="sideshow-popular__img div-contain${i+1}_img" src="${append_html.array_img[i]}" alt="${append_html.array_img[i].substring(13, index.lastIndexOf("."))}">
              <div class="sideshow-popular__vendor"></div>
            </div>`;
            ele.innerHTML += html;
        }
        console.log(ele);
    }
}

// append_html.Html("sideshow-popular");