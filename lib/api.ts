
const baseApi = "https://api.sampleapis.com/wines/reds"

export async function fetchWineUseCacheRemote(id: number) {
	"use cache: remote"
	return (await fetch(`${baseApi}/${id}`)).json()
}


export async function fetchWineList() {
	return (await fetch(baseApi)).json()
}
