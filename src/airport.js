function Airport() {
    this._planes = [];

}

Airport.prototype.landPlane = function(plane){
    this._planes.push(plane);
}

Airport.prototype.takeOffPlane = function(plane){
    var index = this._planes.indexOf(plane)
    console.log(index);
    if (index > -1){
        this._planes.splice(index, 1)
    };
}