var ceoApp = angular.module('ceoApp');

ceoApp.controller('uxGroupProjectController', function($scope) {
	$scope.pager = "templates/pager.html";
	$scope.prevPage = "#seng-group-project";
	$scope.homePage = "#work";
	$scope.nextPage = "#ray-tracing";
	$scope.nextDisabled = "";
	$scope.prevDisabled = "";

	$scope.uxgpLogo00 = "http://i.imgur.com/3QWsWVQ.jpg";
	$scope.uxgpLogo00Thumb = "http://i.imgur.com/F8fWgiJ.png";
	$scope.uxgpLogo00Title = "Draft of Ryde logo.";
	$scope.uxgpLogo01 = "http://i.imgur.com/oIkLThu.png";
	$scope.uxgpLogo01Thumb = "http://i.imgur.com/YAD0zD1.png";
	$scope.uxgpLogo01Title = "Final Ryde logo.";
	$scope.uxgpLogo02 = "http://i.imgur.com/gshSA6Q.jpg";
	$scope.uxgpLogo02Thumb = "http://i.imgur.com/gshSA6Qm.jpg";
	$scope.uxgpLogo02Title = "Draft of a potential icon for Ryde.";
	$scope.uxgpLogo03 = "http://i.imgur.com/p0Jht70.jpg";
	$scope.uxgpLogo03Thumb = "http://i.imgur.com/p0Jht70m.jpg";
	$scope.uxgpLogo03Title = "Draft of another potential icon for Ryde.";
	$scope.uxgpLogo04 = "http://i.imgur.com/8lvnskK.png";
	$scope.uxgpLogo04Thumb = "http://i.imgur.com/xvvasqT.png";
	$scope.uxgpLogo04Title = "Final Ryde icon.";

	$scope.uxgpLowFid00 = "http://i.imgur.com/rgC1zKu.png";
	$scope.uxgpLowFid00Thumb = "http://i.imgur.com/rgC1zKum.png";
	$scope.uxgpLowFid00Title = "Low fidelity slide-out menu prototype.";
	$scope.uxgpLowFid01 = "http://i.imgur.com/xQ8rQ4e.png";
	$scope.uxgpLowFid01Thumb = "http://i.imgur.com/xQ8rQ4em.png";
	$scope.uxgpLowFid01Title = "Low fidelity event page prototype."
	$scope.uxgpLowFid02 = "http://i.imgur.com/Piry6hk.png";
	$scope.uxgpLowFid02Thumb = "http://i.imgur.com/Piry6hkm.png";
	$scope.uxgpLowFid02Title = "Low fidelity prototype of the form for listing a car in an event."

	$scope.uxgpHighFid00 = "http://i.imgur.com/Flzzyz5.png";
	$scope.uxgpHighFid00Thumb = "http://i.imgur.com/Flzzyz5m.png";
	$scope.uxgpHighFid00Title = "Events screen.";
	$scope.uxgpHighFid01 = "http://i.imgur.com/R2I4ufF.png";
	$scope.uxgpHighFid01Thumb = "http://i.imgur.com/R2I4ufFm.png";
	$scope.uxgpHighFid01Title = "Slide-out navigation menu.";
	$scope.uxgpHighFid02 = "http://i.imgur.com/gl4xkdb.png";
	$scope.uxgpHighFid02Thumb = "http://i.imgur.com/gl4xkdbm.png";
	$scope.uxgpHighFid02Title = "COSC Paintball event screen.";
	$scope.uxgpHighFid03 = "http://i.imgur.com/UJA4GqE.png";
	$scope.uxgpHighFid03Thumb = "http://i.imgur.com/UJA4GqEm.png";
	$scope.uxgpHighFid03Title = "Offer Vehicle form.";
	
	$scope.uxgpHighFidChanges00 = "http://i.imgur.com/R7HpmON.png";
	$scope.uxgpHighFidChanges00Thumb = "http://i.imgur.com/R7HpmONm.png";
	$scope.uxgpHighFidChanges00Title = "Updated Offer Vehicle form, with distinctly grouped buttons.";
	$scope.uxgpHighFidChanges01 = "http://i.imgur.com/ArLv4dd.png";
	$scope.uxgpHighFidChanges01Thumb = "http://i.imgur.com/ArLv4ddm.png";
	$scope.uxgpHighFidChanges01Title = "Revised Offer Vehicle form, with question mark buttons.";
	$scope.uxgpHighFidChanges02 = "http://i.imgur.com/AfA43FR.png";
	$scope.uxgpHighFidChanges02Thumb = "http://i.imgur.com/AfA43FRm.png";
	$scope.uxgpHighFidChanges02Title = "The 'Help' dialog that appears when the question mark button to the right of the Pickup button is pressed.";
});