//Github Contributor List API: https://api.github.com/repos/Evie-Skinner18/happy_hacktoberfest_19/contributors
jQuery.contributorList = function (callback) {
    jQuery.getJSON('data/contributors_list.json', callback)
};

jQuery.fn.loadContributors = function () {
    $.contributorList(function (data) {
        console.log(data)
        var $contributorsListContainer = $('#contributors-list');
        $(data).each(function () {
            $contributorsListContainer.append('<div class="card col-3 m-3"><img class="card-img-top" src=' + this.avatar_url + ' alt=' + this.login + '><div class="card-body text-center"><a href=' + this.html_url + ' class="btn btn-primary">See Profile</a></div>');
        });
    });
};