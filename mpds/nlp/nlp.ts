namespace $ {

    export class $optimade_mpds_nlp extends $mol_object {

        @$mol_mem
        static lib() {
            return $mol_import.script('https://unpkg.com/optimade-mpds-nlp@0.1.7/index.js').OptimadeNLP()
		}
		
		@$log
		static guess( text: string ) {
			return this.lib().guess( text )
		}
    }
}
