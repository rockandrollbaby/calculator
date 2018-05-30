$(document).ready(function(){
    // Show the Modal on load
    $("#exampleModal").modal("show");

    // Hide the Modal
    $(".btn btn-primary").click(function(){
        $("#exampleModal").modal("hide");
    });
});
