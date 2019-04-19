function addTotal(isAttending) {
    var total;

    if (isAttending)
        total = parseInt($("#numOfGuests").val());
    else
        total = 0;

    $("#totalPeople").val(total.toString());
}

$("#btn-attending").click(function () {
    addTotal(1);
    $("#isAttending").val("attending");

});
$("#btn-not-attending").click(function () {
    addTotal(0);
    $("#isAttending").val("not attending");
});

