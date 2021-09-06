function Pokemon({ info }) {
	return (
		<div className="pokemon-card" key={info.id}>
			<h3>{info.name}</h3>
			<img src={info.sprites.other.dream_world.front_default} alt={info.name} />
			<table>
				<tr>
					<th>Stat</th>
					<th>Base</th>
					<th>Effort</th>
				</tr>
				{info.stats.map((s) => (
					<tr>
						<td>
							<strong>{s.stat.name}</strong>
						</td>
						<td>{s.base_stat}</td>
						<td>{s.effort}</td>
					</tr>
				))}
				<tr>
					<th>Total:</th>
					<th>{info.stats.reduce((acc, curr) => acc + curr.base_stat, 0)}</th>
					<th>{info.stats.reduce((acc, curr) => acc + curr.effort, 0)}</th>
				</tr>
			</table>
		</div>
	);
}

export default Pokemon;
