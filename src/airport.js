function Airport(size) {
    this._planes = [];
    this._maxPlanes = size;
    
}

Airport.prototype.landPlane = function(plane){
    if (this.checkFull() === true){
        throw new Error('AIRPORT FULL!');
    };

    if (this.checkWeather(0.5) === "Stormy"){
        throw new Error('TOO STORMY TO LAND!');
    };
    this._planes.push(plane);
}

// Airport.prototype.maxPlanes = function(){
//     return this.numMaxPlanes;
// }

Airport.prototype.takeOffPlane = function(plane){
    var index = this._planes.indexOf(plane)
    if (this.checkWeather(0.5) === "Stormy") {
        throw new Error('TOO STORMY!');
    };
    if (index > -1){
        this._planes.splice(index, 1)
    };
};

Airport.prototype.checkWeather = function(percentage){
    var rand = Math.random()
    if (rand < percentage) {
        return "Stormy"
    };
        return "Sunny"
};

Airport.prototype.checkFull = function(){
    if (this._planes.length === this._maxPlanes){
        return true;
    };
    return false;
};