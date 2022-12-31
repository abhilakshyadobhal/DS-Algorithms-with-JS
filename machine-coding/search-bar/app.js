function HyperSearch() {
    this.results = [];
    this.api = 'http://openlibrary.org/search.json';
    this.isLoading = false;
    this.query = '';
    this.id = '';

    //intialize event listners
    const searchBar = document.getElementById('search');
    const resultBar = document.getElementById('results');

    this.resultBar = resultBar;
    searchBar.addEventListener('input', this.onChange.bind(this));
}

HyperSearch.prototype.onSearch = async function (e) {
    fetch(`${this.api}?q=${e}&page=1&size=10`)
        .then((r) => r.json())
        .then((r) => {
            if (r.docs?.length) {
                this.resultBar.innerHTML = '';

                this.resultBar.style.display = 'block';
                const items = r.docs.slice(0, 10);
                const data = items
                    .map((curr, i) => {
                        return (
                            `<div style=${
                                i !== items.length - 1
                                    ? '"border-bottom:1px solid;margin:10px 0"'
                                    : ''
                            }>` +
                            curr.title +
                            '</div>'
                        );
                    })
                    .join('');
                this.resultBar.innerHTML += data;
            } else {
                this.resultBar.innerHTML = 'No results found !';
            }
        });
};

HyperSearch.prototype.debounce = function (fn, delay = 1000) {
    return function (...args) {
        clearTimeout(this.id);
        this.id = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};
HyperSearch.prototype.onChange = function (e) {
    const getSearchResult = this.debounce(this.onSearch.bind(this), 500);
    this.query = e.target.value;
    getSearchResult(this.query);
};

const search = new HyperSearch();
console.log(search);
