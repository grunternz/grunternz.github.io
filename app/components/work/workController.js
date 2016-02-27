var ceoApp = angular.module('ceoApp');

ceoApp.controller('workController', function($scope) {
	$scope.projects = [
		{
			thumbnail: 'assets/img/work/ad-thumb.jpg',
			href: '#android-development',
			title: 'Android Development',
			caption: 'A summary of my ongoing efforts in Android development.'
		},
		{
			thumbnail: 'assets/img/work/ga-thumb.jpg',
			href: '#game-art',
			title: 'Game Art',
			caption: 'The result of my dive into the realm of 3D art. More to be added upon completion.'
		},
		{
			thumbnail: 'assets/img/work/segp-thumb.jpg',
			href: '#seng-group-project',
			title: 'Software Engineering Group Project',
			caption: 'Over the course of a year, we developed a java application named Plotnode to aid writers in their creative process.'
		},
		{
			thumbnail: 'assets/img/work/uxgp-thumb.jpg',
			href: '#ux-group-project',
			title: 'UX Group Project',
			caption: 'Taking on the role of UX designers, we designed the foundation for the creation of our ride sharing mobile application.'
		},
		{
			thumbnail: 'assets/img/work/rt-thumb.jpg',
			href: '#ray-tracing',
			title: 'Ray Tracing',
			caption: 'After countless grueling nights of confusion, a ray tracer emerged. Covering features such as reflection, refraction and supersampling.'
		},
		{
			thumbnail: 'assets/img/work/adp-thumb.jpg',
			href: '#art-design-portfolio',
			title: 'Art Design Portfolio',
			caption: 'A product of the hard work I poured into computer art design in year 13 of high school. Top 5% in the country, with Excellence!'
		},
		{
			thumbnail: 'assets/img/work/ma-thumb.jpg',
			href: '#misc-art',
			title: 'Miscellaneous Art',
			caption: 'A collection of various pieces of art I\'ve worked on over the years.'
		},
	];
});