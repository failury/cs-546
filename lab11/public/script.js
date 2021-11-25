
$(document).ready(function () {





    var searchform = $('#searchForm'),
        searchInput = $('#search_term'),
        showlist = $('#showList'),
        show = $('#show'),
        backlink = $('#homeLink')
        error = $('#error');
    backlink.hide();
    $.ajax({
        url: "http://api.tvmaze.com/shows",
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            show.hide();
            res.forEach(element => {
                $('<li>').append(
                    $('<a>',{
                    text: element.name,
                    href: element._links.self.href,
                    click: function(event){
                        event.preventDefault();
                        showlist.hide();
                        show.empty();
                        backlink.show();
                        $.ajax({
                            url: element._links.self.href,
                            type: 'GET',
                            dataType: 'json',
                            success: function(res) {
                                let name = res.name !=null ? res.name : "N/A";
                                let image = res.image.medium !=null ? res.image.medium : "./noimage.png";
                                let lan = res.language !=null ? res.language : "N/A";
                                let rat = res.rating.average !=null ? res.rating.average :"N/A";
                                console.log(res);
                                let networkname = res.network !=null ? res.network.name : "N/A";
                                
                                let summary = res.summary !=null ? res.summary : "N/A";
                                let genres = res.genres;
                                let genreslist = $('<ul>');
                                if(genres.length == 0){
                                    genreslist = $('<dd>'.text("N/A"));
                                }else{
                                    genres.forEach(element => {
                                        genreslist.append($('<li>').text(element))
                                    });
                                }    
                                let list = $('<dl>',{}).append([$('<dt>').text("Language"),$('<dd>').text(lan),$('<dt>').text("Genres"),$('<dd>').append(genreslist),$('<dt>').text("Average Rating"),$('<dd>').text(rat),$('<dt>').text("Network"),$('<dd>').text(networkname),$('<dt>').text("Summary"),$('<dd>').append(summary)]);
                                show.append([$('<h1>',{}).text(name),
                                $('<img>',{src:image}),
                                list
                            ]      
                                )
                                show.show();
                            }
                        });
                    }
                })).appendTo(showlist);
                
            });
        }
    });






    searchform.submit(function (event) {
        show.hide();
        showlist.show();
        backlink.show();
        event.preventDefault();
        var input = searchInput.val();
        if (input.trim() == "") {
            error.text("empty input");
        } else {
            error.text("");
            showlist.empty();
            $.ajax({
                url: "http://api.tvmaze.com/search/shows",
                type: 'GET',
                data: 'q='+input,
                dataType: 'json',
                success: function(res) {
                    show.hide();
                    res.forEach(element => {
                        $('<li>').append(
                            $('<a>',{
                            text: element.show.name,
                            href: element.show._links.self.href,
                            click: function(event){
                                event.preventDefault();
                                showlist.hide();
                                show.empty();
                                
                                $.ajax({
                                    url: element.show._links.self.href,
                                    type: 'GET',
                                    dataType: 'json',
                                    success: function(res) {
                                        let name = res.name != null ? res.name : "N/A";
                                        let image = res.image.medium != null ? res.image.medium : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
                                        let lan = res.language != null ? res.language : "N/A";
                                        let rat = res.rating.average  != null? res.rating.average :"N/A";
                                        let networkname = res.network != null ? res.network.name : "N/A";
                                        let summary = res.summary != null ? res.summary : "N/A";
                                        let genres = res.genres;
                                        let genreslist = $('<ul>');
                                        if(genres.length == 0){
                                            genreslist = $('<dd>'.text("N/A"));
                                        }else{
                                            genres.forEach(element => {
                                                genreslist.append($('<li>').text(element))
                                            });
                                        }    
                                        let list = $('<dl>',{}).append([$('<dt>').text("Language"),$('<dd>').text(lan),$('<dt>').text("Genres"),$('<dd>').append(genreslist),$('<dt>').text("Average Rating"),$('<dd>').text(rat),$('<dt>').text("Network"),$('<dd>').text(networkname),$('<dt>').text("Summary"),$('<dd>').append(summary)]);
                                        show.append([$('<h1>',{}).text(name),
                                        $('<img>',{src:image}),
                                        list
                                    ]      
                                        )
                                        show.show();
                                    }
                                });
                            }
                        })).appendTo(showlist);
                        
                    });
                }
            });
        }

    });
});