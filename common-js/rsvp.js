function numGuestChange(selectObject) {

    var currVal = selectObject.value;
    var gn = $("#guestsNames");

    if (currVal != "0")
        gn.removeAttr('disabled');
    else if (currVal == "0")
        gn.attr('disabled', 'disabled'); 
    else
        gn.attr('disabled', 'disabled');
}

function addTotal(isAttending) {
    var total;

    if (isAttending)
        total = 1 + parseInt($("#numOfGuests").val());
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

