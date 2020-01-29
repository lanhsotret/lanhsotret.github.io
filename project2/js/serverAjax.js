$(document).ready(()=>{
    //GET/READ
    $('#get-button').on('click', ()=>{
        $.ajax({
            url: '/products',
            contentType: 'application/json',
            success: (response)=> {
                let tbodyEl = $('tbody');
                tbodyEl.html('');
                response.product.forEach(element => {
                    tbodyEl.append('\
                    <tr>\
                        <td class="id">' + element.id + '</td>\
                        <td><input type="text" class="name" value="' + element.name + '"></td>\
                        <td>\
                            <button class="update-button">UPDATE/PUT</button>\
                            <button class="delete-button">DELETE</button>\
                        </td>\
                    </tr>\
                    ')
                });
            }
        });
    });
    // Create/post

    $('#create-form').on('submit', ()=>{
        event.preventDefault();
        let createInput = $('#create-input');

        $.ajax({
            url: '/products',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: createInput.val() }),
            success: (response)=> {
                console.log(response);
                createInput.val('');
                $('#get-button').click();
            }
        })
    });
    //update/put
    $('table').on('click', '.update-button', function() {
        let rowEl = $(this).closest('tr');
        console.log(rowEl);
        let id = rowEl.find('.id').html();
        console.log(id);
        let newName = rowEl.find('.name').val();
        console.log(newName);

        $.ajax({
            url: '/products/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify({ newProduct: newName }),
            success: (response)=>{
                console.log(response);
                $('#get-button').click();
            }
        });
    });
    //delete
    $('table').on('click', '.delete-button', function() {
        let rowEl = $(this).closest('tr');
        console.log(rowEl);
        let id = rowEl.find('.id').html();
        console.log(id);

        $.ajax({
            url: '/products/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: function(response) {
                console.log(response);
                $('#get-button').click();
            }
        });
    });
});


