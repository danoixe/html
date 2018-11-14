var selectedRow;

function start(element){
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

function editRow(osoba1, kwota1, wiersz) {
	openModal('editDebtWindow');
	console.log('2');
	$('#editDebtWindow #personOfDebt').val(osoba1);
	$('#editDebtWindow #amountOfDebt').val(kwota1);	
}

function getRow() {
    return $("table > tbody > tr.highlight");
}

function addRow($myTable, $myWindow){
    var p = $($myWindow).find('.person').val();
    var a = $($myWindow).find('.amount').val();
    var d = $($myWindow).find('.description').val();
    
	$($myTable).find('tbody')
    .append($('<tr>')
        .append($('<td>')
            .append(p)
             )
		.append($('<td>')
            .append(a)
             )
		.append($('<td>')
			.append(d)
				.attr('class', 'tooltip')
				.append($('<span>')
					.append(d)
					.attr('class', 'tooltiptext')
					)
             )    
    );
    
    $('.person').val('');
	$('.amount').val('');
	$('.description').val('');
}

$(document).ready(function() {
  
$('table').on('click', 'tr', function() {
    var selected = $(this).hasClass("highlight");
    $(".tableMoney tr").removeClass("highlight");
    if(!selected)
            $(this).addClass("highlight");
});

$('#addDebt').click( function() {
	openModal($('#addDebtWindow'));
});

$('#saveDebt').click(function() {
	addRow($('#tableDebt'),$('#addDebtWindow'));
	$('#addDebtWindow').hide();
});


$('#cancelDebt').click(function() {
	closeModal($('#addDebtWindow'));
});
		

$("#editDebt").click(function() {
	selectedRow = getRow();
	
	if (selectedRow.index() != -1){
		var osoba = selectedRow.find('td:eq(0)').text();
		var kwota = selectedRow.find('td:eq(1)').text();
		var opis = selectedRow.find('td:eq(2)').text();
		//editRow(osoba, kwota, selectedRow);
		$('#editDebtWindow').show();
		$('#editDebtWindow #personOfDebt').val(osoba);
		$('#editDebtWindow #amountOfDebt').val(kwota);
		$('#editDebtWindow #descriptionOfDebt').val(opis);
		selectedRow.removeClass("highlight");
	}
    else
        alert('undefined');
});

$("#saveDebtChanges").on('click', function() {
		var nowaOsoba = $('#editDebtWindow #personOfDebt').val();
		var nowaKwota = $('#editDebtWindow #amountOfDebt').val();
		var nowyOpis = $('#editDebtWindow #descriptionOfDebt').val();
		selectedRow.find('td:eq(0)').html(nowaOsoba);
		selectedRow.find('td:eq(1)').html(nowaKwota);
		selectedRow.find('td:eq(2)').html(nowyOpis);
		$('#editDebtWindow').hide();
	});
	
$('#cancelDebtChanges').click(function() {
	closeModal($('#editDebtWindow'));
});
	
$('#deleteDebt').click( function() {
	selectedRow = getRow();
	
	if (selectedRow.index() != -1){
		$("#tableDebt tbody tr").eq(selectedRow.index()).remove();
	}
    else
        alert('undefined');
});

});
 
