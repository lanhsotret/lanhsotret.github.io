let SetWidthHeight = (function () {
    function HeightFn(ele, rate) {
        var EleTarget = document.querySelectorAll(ele);
        var Domparent = EleTarget[0].parentElement;
        var count = Domparent.childElementCount;
        EleTarget.forEach(particle => {
            particle.style.height = `${Domparent.offsetWidth * rate / count}px`;
        });
        Domparent.style.height = `${Domparent.offsetHeight}px`;
        EleTarget.forEach((particle, index) => {
            var EleTargetH = particle.offsetHeight;
            var EleTargetW = particle.offsetWidth;
            var eleChild = particle.children;
            particle.style.minWidth = `${EleTargetW * 90 / 100}px`;
            particle.addEventListener("mouseover", () => {
                particle.style.minWidth = `${EleTargetW * 105 / 100}px`;
                for (i = 0; i < EleTarget.length; i++) {
                    if (i === index) { continue; }
                    EleTarget[i].style.height = `${EleTargetH * 100 / 103}px`;
                }
            });
            particle.addEventListener("mouseout", () => {
                particle.style.minWidth = `${EleTargetW * 90 / 100}px`;
                for (i = 0; i < EleTarget.length; i++) {
                    if (i === index) { continue; }
                    EleTarget[i].style.height = `${EleTargetH}px`;
                }
            });
            [...eleChild].forEach((particle, index) => {
                particle.style.minHeight = `${EleTargetH * 0.1}px`;
                index === 0 ? particle.style.minHeight = `${EleTargetH * 0.27}px` : "";
                index === (eleChild.length - 1) ? particle.style.minHeight = `${EleTargetH * 0.16}px` : "";
                particle.style.maxWidth = `${EleTargetW}px`;
                var childDomH = particle.offsetHeight;
                var childDomW = particle.offsetWidth;
                particle.style.minWidth = `${childDomW * 90 / 100}px`;
                particle.addEventListener("mouseover", () => {
                    particle.style.minWidth = `${childDomW * 105 / 100}px`;
                    particle.style.minHeight = `${childDomH * 107 / 100}px`;
                });
                particle.addEventListener("mouseout", () => {
                    particle.style.minWidth = `${childDomW * 90 / 100}px`;
                    if (index === 0 || index === (eleChild.length - 1))
                        particle.style.minHeight = `${childDomH}px`;
                    else
                        particle.style.minHeight = `${childDomH * 85 / 100}px`;
                });
            });
        });
    }
    return { Height: HeightFn}
})();

SetWidthHeight.Height(".div-flex", 1.8);