describe('Plane', function() {
    airport = new Airport();
    plane1 = new Plane();

    it("Lands at an airport", function(){
        airport.landPlane(plane1);
        expect(airport._planes[0]).toEqual(plane1);
    });

    it("Plane takes off, and leaves airport", function(){
        airport.landPlane(plane1);
        airport.takeOffPlane(plane1);
        expect(airport._planes).toEqual([]);
    });
});