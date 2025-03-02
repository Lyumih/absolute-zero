/** Взято за основу у https://github.com/PavelZubkov/absolute-zero */
namespace $ {
    const Rec = $mol_data_record
    const Str = $mol_data_string
    const Maybe = $mol_data_optional
    const Vary = $mol_data_variant
    const Nully = $mol_data_nullable
    const Arr = $mol_data_array
    const Num = $mol_data_number
    const Int = $mol_data_integer
    const Const = $mol_data_const
    const Bool = $mol_data_boolean

    const Guess_results = Rec({
        formulae: Maybe(Str),
        elements: Maybe(Str),
        props: Maybe(Str),
        classes: Maybe(Str),
        numeric: Maybe(
            Arr(
                Rec({
                    0: Str, // свойство
                    1: Str, // оператор
                    2: Maybe(Num), // значение
                })
            )
        ),
        ignored: Arr(Str),
    })

    const Refinement_response = Rec({
        error: Nully(Str),
        total_count: Maybe(Int),
        payload: Maybe(Arr(
            Rec({
                facet: Vary(Const('elements'), Const('props'), Const('classes'), Const('lattices')),
                value: Str,
                count: Int,
            }))
        ),
	} )
	
	const Selectize_response = Arr(Rec({
		facet: Maybe( Str ),
		label: Maybe( Str ),
		id: Maybe( Str ),
	}))

    export const $optimade_zero_api_entry = Rec({
        0: Vary(Str, Int), // Entry
        1: Str, // Formula
        2: Vary(Str, Int), // Property
        3: Vary(Str,Int),
        4: Vary(Bool, Int), // Is public data
        5: Maybe(Str), // Biblio id?
        6: Maybe(Int), // Year
        7: Maybe(Int), // Ref id
    })

    const Facet_response = Rec({
        error: Nully(Str),
        fuzzy_notice: Maybe(Nully(Str)),
        notice: Maybe(Str),
        estimated_count: Maybe(Int),
        out: Maybe(Arr($optimade_zero_api_entry)),
    })
	

    export class $optimade_zero_api extends $mol_object {
        @$mol_mem
        selectize_params(next?: string) {
            return next ?? ''
        }

        @$mol_mem
        selectize() {
            this.$.$mol_wait_timeout(1000)
            return this.selectize_params()
                ? Selectize_response(
                      $mol_fetch.json(`https://api.mpds.io/v0/search/selectize?q=${this.selectize_params()}`) as any
                  )
                : []
		}
		
        @$mol_mem
        search_params(next?: any) {
            return Guess_results(next ?? {})
        }

        /** refinement */
        @$mol_mem
        filters() {
            return (
                this.search_params() &&
                Refinement_response(
                    $mol_fetch.json(
                        `https://api.mpds.io/v0/search/refinement?q=${JSON.stringify(this.search_params())}`
                    ) as any
                )
            )
        }

		/** facet */
        @$mol_mem
        results_response() {
            return (
                this.search_params() &&
                Facet_response(
                    $mol_fetch.json(
                        `https://api.mpds.io/v0/search/facet?q=${JSON.stringify(this.search_params())}`
                    ) as any
                )
            )
        }

		/** facet */
		@$mol_mem
        results() {
            return this.results_response()?.out?.map(tuple => new $optimade_zero_api_entity(tuple))
        }
    }
}
