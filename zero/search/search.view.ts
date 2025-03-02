//api.mpds.io/v0/search/selectize?q= - автокомплит
namespace $.$$ {
	export class $optimade_zero_search extends $.$optimade_zero_search {
        @$mol_mem
        parsed_query_row(next?: any) {
            return $mol_state_arg.value('q', next ? JSON.stringify($optimade_mpds_nlp.guess(next)) : '') ?? ''
        }

        parsed_query() {
            const query = JSON.parse(this.parsed_query_row() || '{}')
            query.search_type = +this.search_type()
            return query
        }

        refinement_filter_data() {
            const data = this.mpds_api().filters()?.payload || []
            return data.reduce(
                (acc, filter) => ({
                    ...acc,
                    [filter.facet as any]: { ...acc[filter.facet as any], [filter.value]: filter.value },
                }),
                {} as { [key: string]: { [key: string]: string } }
            )
		}

		// @$log
		refinement_filter_options(id: string) {
            return this.refinement_filter_data()[id] || {}
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

        clear_search_filter(id: any, next?: any) {
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
            return (
                this.mpds_api()
                    .results()
                    ?.map((card, index) => this.Card(index)) || []
            )
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
