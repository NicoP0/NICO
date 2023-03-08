
// Cambiar la imagen de perfil en respuesta a los eventos de mouse
const profileImg = document.querySelector('#profile-img');
const originalSrc = profileImg.src;

profileImg.addEventListener('mouseover', () => {
    profileImg.src = './Perfil/perfil(1).png';
});

profileImg.addEventListener('mouseout', () => {
    profileImg.src = originalSrc;
});

// Función de desplazamiento suave
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                };
            });
        }
    }
});