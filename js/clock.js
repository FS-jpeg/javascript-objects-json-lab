const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock")

const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");

digitalClock.appendChild(myNode);
const updateTime = () => {
    const myDate = new Date();
    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", {hour: "2-digit", minute: "2-digit", second: "2-digit"});

    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    const minutes = myDate.getMinutes();
    const rotminutes = minutes * 6 - 90;
    const hours = myDate.getHours();
    const rothours = (hours * 30 - 90) + (minutes / 6);

    secondHand.style.transform = `rotate(${rotSeconds}deg)`;
    minHand.style.transform = `rotate(${rotminutes}deg)`;
    hrHand.style.transform = `rotate(${rothours}deg)`;
}
setInterval(updateTime,1000);
updateTime();

hrHand.style.backgroundColor = 'rgb(131, 131, 130)';
