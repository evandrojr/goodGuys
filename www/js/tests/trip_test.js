describe("Initalize a walk trip", function() {
  var trip;

  beforeAll(function(done) {
    trip = new Trip();
    trip.modal = 'walk';
    navigator.geolocation.getCurrentPosition(function(position){
      trip.position = position;
      done();
    });
  });

  it("Check if modal walk is valid", function() {
    modal = ["bicycle","walk","ride", "bus"];
    expect(modal).toContain(trip.modal);
  });

  it("Check if my trip has position", function(done) {
    expect(trip.position).not.toBe(null);
    done();
  });
});
