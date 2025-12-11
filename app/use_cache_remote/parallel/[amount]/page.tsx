import { fetchWineList, fetchWineUseCacheRemote } from "@/lib/api"


async function test(id: number) {
	const start = Date.now();
	const wine = await fetchWineUseCacheRemote(id);
	return {
		...wine,
		duration: Date.now() - start
	}
}

export default async function Page({ params }: { params: Promise<{ amount: string }> }) {
	const { amount: amountStr } = await params
	const amount = parseInt(amountStr)

	let wineList = await fetchWineList()
	wineList = wineList.slice(0, amount);

	const wines = await Promise.all(wineList.map(item => test(item.id)))

	return (
		<table>
			<thead>
				<tr>
					<th>Duration (ms)</th>
					<th>Wine</th>
				</tr>
			</thead>
			<tbody>
				{wines.map(item =>
					<tr key={item.id}>
						<td>{item.duration}</td>
						<td>{item.wine}</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}
