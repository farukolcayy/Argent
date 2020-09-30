


$(document).ready(function () {

    $(".harf").keyup(function () {
        if (this.value.match(/[^a-zğüışçö]/gi)) {
            this.value = this.value.replace(/[^a-zğüışçö]/gi, "");
        }
    });
    $(".no").keyup(function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });
    $('.harf').on('paste', function (event) {
        if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
            event.preventDefault();
        }
    });

    $('.no').on('paste', function (event) {
        if (event.originalEvent.clipboardData.getData('Text').match(/[^\d]/)) {
            event.preventDefault();
        }
    });
    $('#btn').click(function () {

        $(".error").hide();
        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var emailaddressVal = $("#email").val();      
        if (hasError == true) { return false; }

    });

});