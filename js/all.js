$(function () {
    $("#fqa").load("fqa.html");
    $("#progresses").load("progresses.html");
    $("#message").load("message.html");
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

$(function () {
    $("li > button").click(function (e) {
        e.preventDefault();
        $("html,body").animate(
            {
                scrollTop: $("#nav-tabContent").offset().top - 90,
            },
            400
        );
        return false;
    });
});

$(function () {
    $("#sponsor").click(function (e) {
        e.preventDefault();
        $("html,body").animate(
            {
                scrollTop: $("#img-sponsor").offset().top - 80,
            },
            400
        );
    });
});

$(function () {
    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        let maxHeight = $("#img-sponsor").offset().top;
        if (scrollTop > 946 && scrollTop < maxHeight - 300) {
            $("#sponsor").show();
        } else {
            $("#sponsor").hide();
        }
    });
});