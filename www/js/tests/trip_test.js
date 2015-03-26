describe("Initalize a walk trip", function() {
  var trip;

  beforeAll(function(done) {
    navigator.geolocation.getCurrentPosition(function(position){
      trip = new Trip('walk', position);
      done();
    });
  });

  it("Check if modal walk is valid", function() {
    modal = ["bicycle","walk","ride", "bus"];
    expect(modal).toContain(trip.modal);
    expect(trip.modal).toBe("walk");
  });

  it("Check if my trip has position", function(done) {
    expect(trip.position).not.toBe(null);
    done();
  });

  it('Verify if start date is defined',function(){
      expect(trip.date).not.toBe(null);
  });

});
