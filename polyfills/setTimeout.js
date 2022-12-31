function customSetTimeOut() {
    const timerMap = {};
    let timeOutId = 0;

    function createTimeOut(cb, delay = 1000, ...args) {
        timeOutId = timeOutId++;
        timerMap[timeOutId] = true;
        let start = Date.now();
        function triggerCallback() {
            if (!timerMap[timeOutId]) return;
            if (Date.now() > start + delay) {
                cb(...args);
                // condition for setInterval
                // start = Date.now();
                // requestIdleCallback(triggerCallback);
            } else {
                requestIdleCallback(triggerCallback);
            }
        }
        requestIdleCallback(triggerCallback);
        return timeOutId;
    }

    function clearTimeOut() {
        delete timerMap[id];
    }

    return { createTimeOut, clearTimeOut };
}

const { createTimeOut } = customSetTimeOut();

const id = createTimeOut(() => {
    console.log('Hi', 1);
}, 10000);
