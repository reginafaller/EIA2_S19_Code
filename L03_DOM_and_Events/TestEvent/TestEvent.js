var TestEvents;
(function (TestEvents) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("click", handleEvent);
    document.addEventListener("mouseover", handleEvent);
    document.addEventListener("keydown", handleEvent);
    window.setTimeout(handleTimeout, 5000);
    function init(_event) {
        console.log(_event);
    }
    function handleEvent(_event) {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.target);
    }
    // No parameter passed 
    function handleTimeout() {
        console.log("Timeout");
    }
})(TestEvents || (TestEvents = {}));
//# sourceMappingURL=TestEvent.js.map