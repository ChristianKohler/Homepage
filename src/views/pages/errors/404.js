import { h } from 'preact';
import Card from '../../tags/card';

export default function (props) {
	return (
		<div className="page page__404">
			<Card>
				<h1>404 Page</h1>
				<p>Looks like you were given a bad link ;-)</p>
				<pre>{ props.url }</pre>
			</Card>
		</div>
	);
}
