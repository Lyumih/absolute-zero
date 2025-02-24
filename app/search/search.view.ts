//api.mpds.io/v0/search/selectize?q= - автокомплит
namespace $.$$ {
	export class $azero_app_search extends $.$azero_app_search {
		
		dumb_query() {
			return '{"elements":"Ge-K"}'
		}

        fetch_refinement(next?: any) {
			const query = this.dumb_query()
			const urlRefinement = 'https://api.mpds.io/v0/search/refinement?q='
			return $mol_fetch.json(urlRefinement + query)
		}
		
		@$mol_mem
        fetch_facet(next?: any) {
			const query = this.dumb_query()
			const urlFacet = 'https://api.mpds.io/v0/search/facet?q='
			return $mol_fetch.json( urlFacet + query ) as { out: [ string, string ][] }
		}
		
		fetch_search() {
			if( this.search() ) {
				this.fetch_refinement()
				this.fetch_facet()
			}
		}

        fetch_suggests() {
            if (this.search()) {
                const url = 'https://api.mpds.io/v0/search/selectize?q='
                const query = this.search()
                $mol_fetch.json(url + query)
                return $mol_fetch.json(url + query) as { facet: string; label: string; id: string }[]
            }
        }

        suggests(): readonly any[] {
            if (this.search()) {
                const data = this.fetch_suggests()
                return data?.flatMap(d => d.label) || []
            }
            return []
        }

        card_list() {
            return this.fetch_facet()?.out?.map((card, index) => this.Card(index))
		}
		
		get_classes(id: any): string {
			return this.fetch_facet()?.out?.[id]?.[1]
		}

		get_image( id: any ): string {
			const image_name = this.fetch_facet()?.out?.[ id ]?.[ 0 ]
			const category = image_name.startsWith( 'C' ) ? 'pd': 'rd'
			return `https://mpds.io/${category}_thumbs/${image_name}.png`
		}


        // Cards(id: any): any {
        // 	return this.card_list().map( (card, index) => this.Cards( index ) )
        // }

        // Cards(id: any): $mol_view {
        // 	return this.card_list().map( (card, index) => this.Cards( index ) )
        // }
    }
}
