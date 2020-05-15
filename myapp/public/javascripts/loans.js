//Bruger ajax til at skabe delete funktion
function deleteLoan(loanId) {
    $.ajax({
        url: '/loan/' + loanId + '/delete-json',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify({loanId}),
        type: 'POST',
        success: ((res) => {
            // Replace follow button with unfollow.
            console.log("Result: ", res)
            $("#"+loanId).remove();
        }),
        error: ((error) => {
            console.log("Error:", error);
        })
    });
}