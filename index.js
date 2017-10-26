var lunchOptions = [
	"Ölerian",
	"Greesy spoon",
	"Chokladfabriken",
	"Dellselius",
	"Omnipollo",
	"Gossip",
	"TacoBar",
	"Deli Di Luca",
	"Lily's burger",
	"Amida kolgrill"
];

var lunchChoice = Math.floor(Math.random() * lunchOptions.length);

module.exports = function() {
	// if Tuesday, default to Lovies as Tuesday is 20% off
	var d = new Date();
	var today = d.getDay();
	if (today === 5) {
		return "It's Friyay! Beer o clock!";
	}
  return "Your choice for lunch is: " + lunchOptions[lunchChoice];
};
