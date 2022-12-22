import {articles} from "../utils/articles"


export default function(props){

return <div className="articles">

<img src={articles[props.article].image} alt="A little bunny in the snow." title="Bunny" class="hero-image" />
<div id='show_bg_2'>
	<h1>{articles[props.article].title}</h1>
</div>
<div className="navbar">
	<div>{articles[props.article].date}<i class="fa-solid fa-clock"></i></div>
	<div>{articles[props.article].author}<i class="fa-solid fa-user"></i></div>

</div>
<div className="main">
		<h2>{articles[props.article].header1}</h2>
		<p>{articles[props.article].paragraph1}</p>
		<p>{articles[props.article].paragraph2}</p>
		<p>{articles[props.article].paragraph3}</p>
		<p>{articles[props.article].paragraph4}</p>
		<p>{articles[props.article].paragraph5}</p>
		<p>{articles[props.article].paragraph6}</p>

		<blockquote class="pullquote">"{articles[props.article].quote}"</blockquote>

		<h2>Verdict: We had a bunderful day!</h2>
</div>
</div> }