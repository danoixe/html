var selectedRow;

/*function start(element){
    document.getElementById(element).style.display = "none";
}

function go(leave, to) {
    //Gets leave by id and makes its display none, and sets to to online
    document.getElementById(leave).style.display = "none";
    document.getElementById(to).style.display = "inline";
}

function openModal($addWindow) {
    $($addWindow).show();
}

function closeModal($addWindow) {
	$($addWindow).hide();
}
*/
function editRow(osoba1, kwota1, wiersz) {
	openModal('editIncomeWindow');
	console.log('2');
	$('#editIncomeWindow #personOfIncome').val(osoba1);
	$('#editIncomeWindow #amountOfIncome').val(kwota1);	
}
/*
function getRow() {
    return $("table > tbody > tr.highlight");
}
*/
$(document).ready(function() {
/*  
$('table').on('click', 'tr', function() {
    var selected = $(this).hasClass("highlight");
    $(".tableMoney tr").removeClass("highlight");
    if(!selected)
            $(this).addClass("highlight");
});*/

$('#addIncome').click( function() {
	openModal($('#addIncomeWindow'));
});

$('#saveIncome').click(function() {
	addRow($('#tableIncome'),$('#addIncomeWindow'));
	$('#addIncomeWindow').hide();
});

$('#cancelIncome').click(function() {
	closeModal($('#addIncomeWindow'));
});

$("#editIncome").click(function() {
	selectedRow = getRow();
	
	if (selectedRow.index() != -1){
		var osoba = selectedRow.find('td:eq(0)').text();
		var kwota = selectedRow.find('td:eq(1)').text();
		//editRow(osoba, kwota, selectedRow);
		$('#editIncomeWindow').show();
		$('#editIncomeWindow #personOfIncome').val(osoba);
		$('#editIncomeWindow #amountOfIncome').val(kwota);
		selectedRow.removeClass("highlight");
	}
    else
        alert('undefined');
});

$("#saveIncomeChanges").on('click', function() {
		var nowaOsoba = $('#editIncomeWindow #personOfIncome').val();
		var nowaKwota = $('#editIncomeWindow #amountOfIncome').val();
		selectedRow.find('td:eq(0)').html(nowaOsoba);
		selectedRow.find('td:eq(1)').html(nowaKwota);
		$('#editIncomeWindow').hide();
	});
	
$('#cancelIncomeChanges').click(function() {
	closeModal($('#editIncomeWindow'));
});
	
$('#deleteIncome').click( function() {
	selectedRow = getRow();
	
	if (selectedRow.index() != -1){
		$("#tableIncome tbody tr").eq(selectedRow.index()).remove();
	}
    else
        alert('undefined');
});

//szukanie

  $(".navigation input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tableIncome tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

});
 
