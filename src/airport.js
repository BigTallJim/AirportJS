function Airport() {
    this._planes = [];

}

Airport.prototype.landPlane = function(plane){
    this._planes.push(plane);
}

Airport.prototype.takeOffPlane = function(plane){
    var index = this._planes.indexOf(plane)
    // console.log(index);
    if (this.checkWeather(0.5) === "Stormy") {
        throw new Error('TOO STORMY!');
    };
    if (index > -1){
        this._planes.splice(index, 1)
        console.log("not stormy")
    };
};

Airport.prototype.checkWeather = function(percentage){
    var rand = Math.random()
    if (rand < percentage) {
        return "Stormy"
    };
        return "Sunny"
};