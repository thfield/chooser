$(document).ready(function () {
    // var dataString is contained in file calc4-data.js and called from html file
    // loading from a separate file is difficult w/o server
    
    function makeItem() {
        // writes html for new item
        var where = $('.wrapper');
        var itemHtml = '<div class="item"><div class="itemRemove editing">-</div><div class="nameContainer"><div class="itemName view"></div><input class="editing" type="text" name="newItemName" value="" /></div><div class="itemEdit">edit</div><div class="addOption editing">Add</div><div class="removeOption editing">Remove</div><div class="spacer"></div><div class="itemPrice"></div></div>';
        $(where).prepend(itemHtml);
    };

    var optionHtml = '<div class="optionContainer"><div class="itemOption view"></div><input class="editing" type="text" name="optionName" value="" /><input class="editing" type="number" name="optionPrice" value="" /></div>';

    function optionPrice() {
        $('.optionActive').each(function () {
            var setPrice = $(this).children('input[name=optionPrice]').val();
            $(this).siblings('.itemPrice').text('' + setPrice);
        });
    };

    function populate() {
        for (var k = 0, l = dataString.length; k < l; k += 1) {
            // make a new item row and fill it with data from the dataString
            makeItem();
            var targetItem = $('.wrapper').children('.item').first();
            // name the item
            targetItem.find('.itemName').text(dataString[k].itemName);
            //make the options
            for (var i = 0, j = dataString[k].options.length; i < j; i += 1) {
                targetItem.find('.itemEdit').after(optionHtml);
                var targetOption = targetItem.find('.optionContainer').first();
                targetOption.children('.itemOption').text(dataString[k].options[i].optionName);
                targetOption.children('input[name=optionPrice]').attr('value', dataString[k].options[i].optionPrice);
            }
            targetItem.find('.optionContainer').first().addClass('optionActive');
            optionPrice();
        }
    };
    populate();
});