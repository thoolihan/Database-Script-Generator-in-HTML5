$(document).ready(function() {
    var key_id = 0;
    $('input#add_foreign_key').click(function(){
        key_id += 1;
        var key_data = {
            id: key_id,
            table: $('#fk_table_name').val(),
            foreign_key: $('#foreign_key_constraint').val()
        };
        $('#foreign_key_template').tmpl(key_data).appendTo('#foreign_keys');
    });

    $('input#generate_script').click(function(){
        var script_data = {
            table: $('#table_name').val(),
            foreign_keys: []
        };
        $('#foreign_keys li').each(function(index) {
            var fk_constraint = {
                table: $(this).children('.table').first().html(),
                constraint: $(this).children('.foreign_key').first().html()
            };
            script_data.foreign_keys.push(fk_constraint);
        });
        $('#script_template').tmpl(script_data).appendTo('#results');
        $('#results').removeClass('hidden');
    });
});