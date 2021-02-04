const setPage = (search, count) => search.set("page", count);
const getPage = (search) => +search.get("page");
const getPrevButton = (page) => {
    return (
        '<li data-page="prev" class="prev">' + 
            `<a href="?page=${page - 1}">` + 
                '<div class="pagination_arrow">' + 
                    '<img class="pagination_arrow_left" src="/src/image/icons/path.svg" alt="arrow-prev">' + 
                '</div>' +
            '</a>' + 
        '</li>'
    );
};
const getNextButton = (page) => {
    return (
        '<li data-page="next" class="next">' + 
            `<a href="?page=${page + 1}">` + 
                '<div class="pagination_arrow">' +
                    '<img src="/src/image/icons/path.svg" alt="arrow-next">' +
                '</div>' + 
            '</a>' +
        '</li>'
    );
};
const getPaginationItem = (num, current) => {
    return (
        `<li data-page="${num}">` + 
            `<a href="?page=${num}" class="${num === current ? 'active ' : ''} pagination_num">` + 
                `<span>${num}</span>` +
            '</a>' + 
        '</li>'
    );
};

function getPagination(ariclesCount, pagesCount, currentPage) {
    const pagination = [];

    if (ariclesCount > pagesCount) {
        pagination.push(getPrevButton(currentPage));

        for (var i = 1; i <= pagesCount; i++) {
            pagination.push(getPaginationItem(i, currentPage));
        }

        pagination.push(getNextButton(currentPage));
    }

    return pagination.join("");
}

function initPagination(articlesCount, pagesCount, currentPage) {
    const prevButton = jQuery('.pagination_items li[data-page="prev"]');
    const nextButton = jQuery('.pagination_items li[data-page="next"]');
    const articles = jQuery('.job-result');

    if (currentPage === 1) {
        prevButton.hide();
    }

    if (currentPage === pagesCount) {
        nextButton.hide();
    }

    const numberOfGroups = Math.ceil(articlesCount / 2);
    const groups = [];

    for (let i = 0; i < numberOfGroups; i++) {
        const start = i * 2;
        const end = start + 2;
        groups[i] = Array.from(articles).slice(start, end);
    }

    groups[currentPage - 1].forEach((el) => {
        el.classList.remove("hide");
    });
}


$(document).ready(function() {
    const searchParams = new URLSearchParams(document.location.search);

    if (!getPage(searchParams)) {
        setPage(searchParams, 1);
    }
    const totalJobs = $(".job-result").length;
    const currentPage = getPage(searchParams);
    const totalPages = Math.ceil(totalJobs / 2);

    console.log(currentPage);

    jQuery(".jobs-pagination ul").html(getPagination(totalJobs, totalPages, currentPage));

    //Search
    $("form").on("submit",function() {
        var q = $("form input[type='text']").val().toLowerCase();

        $(".job-result").each(function() {
            var title = $(this).find("div:first").text().toLowerCase();

            if (title.indexOf(q) > -1) {
                $(this).show();
            }
        });
    });

    initPagination(totalJobs, totalPages, currentPage);
});