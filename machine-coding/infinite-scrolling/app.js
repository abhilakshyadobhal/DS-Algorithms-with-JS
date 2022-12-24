function Pagination() {
    this.items = [];
    this.api_url = 'http://openlibrary.org/search.json';
    this.query = '';
    this.page = 1;
    this.itemsDiv = document.getElementById('items');

    const options = {
        rootMargin: '0px',
        threshold: 1.0,
    };

    this.observer = new IntersectionObserver((entry) => {
        if (entry[0].intersectionRatio > 0) {
            this.search(++this.page);
        }
    });
    //intialize event listners
    const getInputField = document.getElementById('input');
    const debounce = this.debounce(this.search.bind(this), 1000);

    getInputField.style.marginBottom = '50px';
    getInputField.addEventListener('input', function (e) {
        debounce(e.target.value);
    });
}

Pagination.prototype.search = async function (e) {
    this.query = e;
    await fetch(`${this.api_url}?q=${this.query}&page=${this.page}&size=5`)
        .then((res) => res.json())
        .then((r) => {
            setTimeout(() => {
                const data = r.docs.map((curr) => {
                    return `<div id=${curr.key}>` + curr.title + '</div>';
                });
                this.itemsDiv.innerHTML += data.join('');
            }, 0);
        });
    this.observer.observe(document.getElementById('last'));
};

Pagination.prototype.debounce = function (callback, delay = 500) {
    let id;
    return function (...args) {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};

Pagination.prototype.onChange = function (q = '') {
    if (q.length) {
        this.query = q;
        const db = this.debounce(this.search, 5000);
        db(q);
    }
};

const P = new Pagination();
