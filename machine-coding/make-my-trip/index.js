function Color() {
    let hash = new Map();
    let c = 0;

    const onClick = (e) => {
        const id = e.target.id;
        if (!hash.has(id)) {
            e.target.style.backgroundColor = 'green';
            hash.set(id, c++);
        }
        if (hash.size == 7) {
            setTimeout(() => {
                handleReset();
            }, 100);
        }
    };

    const handleReset = () => {
        const id = setInterval(() => {
            if (!hash.keys().next().value) {
                clearInterval(id);
                return;
            }
            document.getElementById(hash.keys().next().value).style.backgroundColor = 'white';
            hash.delete(hash.keys().next().value);
            console.log(hash);
        }, 1000);
    };

    //attach event listners
    Array(7)
        .fill('')
        .forEach((__, idx) => {
            document.getElementById(idx + 1).addEventListener('click', onClick);
        });
}

Color();
