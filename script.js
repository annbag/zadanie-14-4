var movies = [
	{
		id: 1,
		title : 'Harry Potter',
		desc: 'film o czarodzieju',
		img: 'images/harry_potter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: 'images/Król_Lew.jpg'
	},
	{
		id: 3,
		title: 'Shrek',
		desc: 'film o zielonym ogrze',
		img: 'images/Shrek.jpg'
	},
	{
		id: 4,
		title: 'Epoka lodowcowa',
		desc: 'Film o leniwcu, tygrysie i mamucie',
		img: 'images/Epoka_lodowcowa.jpg'
	},
	{
		id: 5,
		title: 'Alvin i wiewiórki',
		desc: 'Film o wiewiórkach',
		img: 'images/alivn.jpg'
	}
]; 
var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function() {
		return (
			React.createElement('li', {},
			React.createElement(MovieTitle, {title: this.props.movie.title}),
			React.createElement(MovieDesc, {desc: this.props.movie.desc}),
			React.createElement(MovieImg, {img: this.props.movie.img})
			)
		);
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render: function() {
		return(React.createElement('h2', {}, this.props.title)
		);
	}
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render: function() {
		return(React.createElement('p', {}, this.props.desc)
		);
	}
});

var MovieImg = React.createClass({
	propTypes : {
		img: React.PropTypes.string.isRequired,
	},
	render: function() {
		return(React.createElement('img', {src: this.props.img})
		);
	}
});

var MovieList = React.createClass({
   	render: function() {
		var moviesElements = movies.map(function(movie) {
			return (React.createElement(Movie, {key:movie.id, movie: movie})
			)
		})
		return (  
			React.createElement('ul', {}, moviesElements)
		);
	}
});

var element = React.createElement('div', {},
	      	React.createElement('h1', {}, 'Lista filmów'),
			React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'))