var cont = 0;
function main(){
    $("#but").on("click", function(e){
    e.preventDefault(); 
    $("#shopList").append(`<li id="item${cont}">
                            ${$("#item").val()}
                           </li>
                            <button id="${cont}">check</button>
                            <button id="D${cont}">delete</button>`)
    cont++;
    });

    $("ul").on("click", "button", function(e){
            var id = $(this).attr("id");
            var isDeleted = false;
            if(id[0] === 'D'){
                isDeleted = true;
                id = id.substr(1);
            }
        var original = id;
        id = "#item" + id;
        if(isDeleted){
           $(id).remove();
           $("#" + "D" + original).remove();
           $("#" + original).remove();
        }else{
            if($(id).attr("class") == "crossed")
                $(id).attr("class", "");
            else
                $(id).attr("class", "crossed");

        }
    });
}


main();

