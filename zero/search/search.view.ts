//api.mpds.io/v0/search/selectize?q= - автокомплит
namespace $.$$ {
	export class $optimade_zero_search extends $.$optimade_zero_search {
        refinement_filter_list() {
            return this.mpds_api().filters()?.payload?.map((_, index) => this.Filter_button(index)) || []
		}

		@$mol_mem
		parsed_query_row(next?: any) {
			return $mol_state_arg.value( 'q', next ? JSON.stringify( $optimade_mpds_nlp.guess( next )): null) ?? ''
		}

		parsed_query() {
			return JSON.parse(this.parsed_query_row() || '{}')
		}

        refinement_filters_title(id: any): string {
            const data = this.mpds_api()?.filters()?.payload?.[id]
            return data?.facet + ' ' + data?.count + ':' + data?.value
        }

		filters_query() {
            return Object.entries(this.parsed_query()) || []
        }

        search_filters(): readonly any[] {
            return this.filters_query().map(([filter, value]) => this.Search_filter(filter))
        }

        search_labeler_title(id: any): string {
            return id
        }
        search_labeler_content(id: any): string {
            return this.parsed_query()[id as 'props']
        }

		clear_search_filter( id: any, next?: any ) {
            const new_query = { ...this.parsed_query() }
            delete new_query[id]
            this.parsed_query_row(new_query)
		}

		/** отправить запрос */
		fetch_search() {
			this.parsed_query_row(this.search())
        }

        suggests(): readonly any[] {
			const data = this.mpds_api().selectize()
			return data?.flatMap(d => d.label) || []
        }

        card_list() {
            if (!this.mpds_api().results()) return []
            return this.mpds_api().results()?.map((card, index) => this.Card(index)) || []
        }

        get_classes(id: any): string {
            return `<div>${this.mpds_api().results()?.[id].formula_html()}</div>`
        }

        get_description(id: any): string {
            return `<div>${this.mpds_api().results()?.[id]?.property()}</div>`
        }

        @$mol_mem
        get_image(id: any): string {
			return this.mpds_api()?.results()?.[id]?.thumbs_link() || ''
        }
    }
}
