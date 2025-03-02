//api.mpds.io/v0/search/selectize?q= - автокомплит
namespace $.$$ {
	export class $azero_app_search extends $.$azero_app_search {
        @$mol_mem
        dumb_query(next?: any) {
            return (
                next ?? {
                    classes: 'zeolite',
                    lattices: 'orthorhombic',
                    elements: 'Al',
                    search_type: +this.search_type(),
                }
            )
        }

        @$mol_action
        fetch_refinement(next?: any) {
            const query = this.dumb_query()
            const urlRefinement = 'https://api.mpds.io/v0/search/refinement?q='
            return $mol_fetch.json(urlRefinement + JSON.stringify(query)) as {
                error: null
                payload: { facet: string; value: string; count: number }[]
            }
        }

        @$mol_mem
        refinement_data() {
            return this.fetch_refinement().payload
        }

        refinement_filter_list() {
            // const { payload } = this.fetch_refinement()
            return this.refinement_data().map((_, index) => this.Filter_button(index))
        }

        refinement_filters_title(id: any): string {
            const { facet, value, count } = this.refinement_data()[id]
            return facet + ' ' + count + ':' + value
        }

        filters_query() {
            return Object.entries(this.dumb_query()) || []
        }

        search_filters(): readonly any[] {
            return this.filters_query().map(([filter, value]) => this.Search_filter(filter))
        }

        search_labeler_title(id: any): string {
            return id
        }
        search_labeler_content(id: any): string {
            return this.dumb_query()[id as 'props']
        }

        clear_search_filter(id: any, next?: any) {
            const new_query = { ...this.dumb_query() }
            delete new_query[id]
            this.dumb_query(new_query)
        }

        @$mol_mem
        fetch_facet(next?: any) {
            const query = this.dumb_query()
            const urlFacet = 'https://api.mpds.io/v0/search/facet?q='
            return $mol_fetch.json(urlFacet + JSON.stringify(query)) as { out: [string, string, string][] }
        }

        fetch_search() {
            if (this.search()) {
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
            if (!this.fetch_facet().out) return []
            return this.fetch_facet()?.out?.map((card, index) => this.Card(index))
        }

        get_classes(id: any): string {
            return `<div>${this.fetch_facet()?.out?.[id]?.[1]}</div>`
		}
		
        get_description(id: any): string {
            return `<div>${this.fetch_facet()?.out?.[id]?.[2]}</div>`
        }

        get_image(id: any): string {
            const image_name = this.fetch_facet()?.out?.[id]?.[0]
            const category = image_name.startsWith('C') ? 'pd' : 'rd'
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
