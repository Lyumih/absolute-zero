declare namespace $ {

	type $mol_paragraph__title_azero_app_search_1 = $mol_type_enforce<
		ReturnType< $azero_app_search['search_labeler_content'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_labeler__title_azero_app_search_2 = $mol_type_enforce<
		ReturnType< $azero_app_search['search_labeler_title'] >
		,
		ReturnType< $mol_labeler['title'] >
	>
	type $mol_labeler__content_azero_app_search_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_labeler['content'] >
	>
	type $mol_button_major__hint_azero_app_search_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['hint'] >
	>
	type $mol_button_major__click_azero_app_search_5 = $mol_type_enforce<
		ReturnType< $azero_app_search['clear_search_filter'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_major__sub_azero_app_search_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_major['sub'] >
	>
	type $mol_row__sub_azero_app_search_7 = $mol_type_enforce<
		ReturnType< $azero_app_search['search_filters'] >
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_button_minor__title_azero_app_search_8 = $mol_type_enforce<
		ReturnType< $azero_app_search['refinement_filters_title'] >
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_list__rows_azero_app_search_9 = $mol_type_enforce<
		ReturnType< $azero_app_search['refinement_filter_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__title_azero_app_search_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_page['title'] >
	>
	type $mol_page__body_azero_app_search_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	type $mol_search__hint_azero_app_search_12 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_search['hint'] >
	>
	type $mol_search__query_azero_app_search_13 = $mol_type_enforce<
		ReturnType< $azero_app_search['search'] >
		,
		ReturnType< $mol_search['query'] >
	>
	type $mol_search__suggests_azero_app_search_14 = $mol_type_enforce<
		ReturnType< $azero_app_search['suggests'] >
		,
		ReturnType< $mol_search['suggests'] >
	>
	type $mol_button_major__title_azero_app_search_15 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_azero_app_search_16 = $mol_type_enforce<
		ReturnType< $azero_app_search['fetch_search'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_row__sub_azero_app_search_17 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_switch__value_azero_app_search_18 = $mol_type_enforce<
		ReturnType< $azero_app_search['search_type'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_azero_app_search_19 = $mol_type_enforce<
		({ 
			'0': string,
			'1': string,
			'2': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_row__sub_azero_app_search_20 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_row['sub'] >
	>
	type $mol_image__uri_azero_app_search_21 = $mol_type_enforce<
		ReturnType< $azero_app_search['get_image'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_text__text_azero_app_search_22 = $mol_type_enforce<
		ReturnType< $azero_app_search['get_classes'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_list__rows_azero_app_search_23 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_list__rows_azero_app_search_24 = $mol_type_enforce<
		ReturnType< $azero_app_search['card_list'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_page__Title_azero_app_search_25 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_page['Title'] >
	>
	type $mol_page__tools_azero_app_search_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['tools'] >
	>
	type $mol_page__body_azero_app_search_27 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_page['body'] >
	>
	export class $azero_app_search extends $mol_book2 {
		clear_search_filter( id: any, next?: any ): any
		search_labeler_title( id: any): string
		search_labeler_content( id: any): string
		Search_labeler_content( id: any): $mol_paragraph
		Search_labeler( id: any): $mol_labeler
		Search_filter( id: any): $mol_button_major
		search_filters( ): readonly(any)[]
		Search_filters( ): $mol_row
		refinement_filters_title( id: any): string
		Filter_button( id: any): $mol_button_minor
		refinement_filter_list( ): readonly(any)[]
		Filters( ): $mol_list
		Filters_page( ): $mol_page
		search( next?: string ): string
		suggests( ): readonly(any)[]
		Search( ): $mol_search
		fetch_search( next?: any ): any
		Search_button( ): $mol_button_major
		Search_row( ): $mol_row
		search_type( next?: string ): string
		View_type_switch( ): $mol_switch
		View_type_row( ): $mol_row
		get_image( id: any): string
		Image( id: any): $mol_image
		get_classes( id: any): string
		Classes( id: any): $mol_text
		Card( id: any): $mol_list
		card_list( ): readonly(any)[]
		Row_cards( ): $mol_list
		Result_page( ): $mol_page
		title( ): string
		pages( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=search.view.tree.d.ts.map