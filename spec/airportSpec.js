describe('Plane', function() {
    
    beforeEach(function() {
        airport = new Airport(3);
        plane1 = new Plane();
        plane2 = new Plane();
        plane3 = new Plane();
        plane4 = new Plane();
    });


    it("Lands at an airport", function(){
        spyOn(airport, "checkWeather").and.returnValue('Sunny');
        airport.landPlane(plane1);
        expect(airport._planes[0]).toEqual(plane1);
    });

    it("Plane takes off, and leaves airport", function(){
        spyOn(airport, "checkWeather").and.returnValue('Sunny');
        airport.landPlane(plane1);
        airport.takeOffPlane(plane1);
        expect(airport._planes.length).toEqual(0);
    });

    it("Checks whether the weather is stormy", function() {
        expect(airport.checkWeather(1)).toEqual("Stormy");
        expect(airport.checkWeather(0)).toEqual("Sunny");
    });

    it("Prevents takeoff when weather is stormy", function(){
        spyOn(airport, "checkWeather").and.returnValue('Stormy');
        expect(function(){airport.takeOffPlane(plane1)}).toThrowError('TOO STORMY!');
    });

    it("Prevent landing when weather is stormy", function(){
        spyOn(airport, "checkWeather").and.returnValue('Stormy');
        expect(function(){airport.landPlane(plane1)}).toThrowError('TOO STORMY TO LAND!');
    });

    it("Prevent landing when airport is full", function(){
        spyOn(airport, "checkWeather").and.returnValue('Sunny');
        airport.landPlane(plane1);
        airport.landPlane(plane2);
        airport.landPlane(plane3);
        expect(function(){airport.landPlane(plane4)}).toThrowError('AIRPORT FULL!');
    });
});