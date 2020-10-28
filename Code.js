$(document).ready(
    function () {
        var bookFee = .25;
        var dvdFee = .50;
        var total = 0;

        $("button").click(function()
        {
            var total = Calculate();
            $('p').text(`You owe: $${total}`);
        });

        function Calculate() {
            var totalBooks = parseInt($("#Books").val());


            var totalDvds = $("#DVDs").val();
            totalDvds = parseInt(totalDvds);

            var totalDays = $("#daysLate").val();
            totalDays = parseInt(totalDays);

            total += totalBooks * bookFee;
            total += totalDvds * dvdFee;

            var newTotal = total / totalDays;
            return newTotal;
        }

    }
);