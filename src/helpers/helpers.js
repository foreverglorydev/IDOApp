export const generateTimeRemainingString = function (timestamp) {

    // convert seconds to millis
    let end = new Date(timestamp*1000);

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;

    let now = new Date();
    let distance = end - now;
    if (distance < 0) {
        return "STARTED!";
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);

    return `${days} days, ${hours} hours`
}