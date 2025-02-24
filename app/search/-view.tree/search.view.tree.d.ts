declare namespace $ {

	type $mol_search__hint_azero_app_search_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query_azero_app_search_2 = $mol_type_enforce<
		ReturnType< $azero_app_search['search'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__suggests_azero_app_search_3 = $mol_type_enforce<
		ReturnType< $azero_app_search['suggests'] >
		,
		ReturnType< $mol_search['suggests'] >
	>
	type $mol_button_major__title_azero_app_search_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_azero_app_search_5 = $mol_type_enforce<
		ReturnType< $azero_app_search['fetch_search'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_row__sub_azero_app_search_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_image__uri_azero_app_search_7 = $mol_type_enforce<
		ReturnType< $azero_app_search['get_image'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_text__text_azero_app_search_8 = $mol_type_enforce<
		ReturnType< $azero_app_search['get_classes'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__rows_azero_app_search_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_azero_app_search_10 = $mol_type_enforce<
		ReturnType< $azero_app_search['card_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $azero_app_search extends $mol_page {
		search( next?: string ): string
		suggests( ): readonly(any)[]
		Search( ): $mol_search
		fetch_search( next?: any ): any
		Search_button( ): $mol_button_major
		Search_row( ): $mol_row
		get_image( id: any): string
		Image( id: any): $mol_image
		get_classes( id: any): string
		Classes( id: any): $mol_text
		Card( id: any): $mol_list
		card_list( ): readonly(any)[]
		Row_cards( ): $mol_list
		title( ): string
		body( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map