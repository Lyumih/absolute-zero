	($.$azero_app_search) = class $azero_app_search extends ($.$mol_book2) {
		clear_search_filter(id, next){
			if(next !== undefined) return next;
			return null;
		}
		search_labeler_title(id){
			return "Chemical formulae";
		}
		search_labeler_content(id){
			return "Формула";
		}
		Search_labeler_content(id){
			const obj = new this.$.$mol_paragraph();
			(obj.title) = () => ((this.search_labeler_content(id)));
			return obj;
		}
		Search_labeler(id){
			const obj = new this.$.$mol_labeler();
			(obj.title) = () => ((this.search_labeler_title(id)));
			(obj.content) = () => ([(this.Search_labeler_content(id))]);
			return obj;
		}
		Search_filter(id){
			const obj = new this.$.$mol_button_major();
			(obj.hint) = () => ("Убрать");
			(obj.click) = (next) => ((this.clear_search_filter(id, next)));
			(obj.sub) = () => ([(this.Search_labeler(id))]);
			return obj;
		}
		search_filters(){
			return [(this.Search_filter("0"))];
		}
		Search_filters(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ((this.search_filters()));
			return obj;
		}
		refinement_filters_title(id){
			return "qwe";
		}
		Filter_button(id){
			const obj = new this.$.$mol_button_minor();
			(obj.title) = () => ((this.refinement_filters_title(id)));
			return obj;
		}
		refinement_filter_list(){
			return [(this.Filter_button("0"))];
		}
		Filters(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.refinement_filter_list()));
			return obj;
		}
		Filters_page(){
			const obj = new this.$.$mol_page();
			(obj.title) = () => ("Фильтры");
			(obj.body) = () => ([(this.Search_filters()), (this.Filters())]);
			return obj;
		}
		search(next){
			if(next !== undefined) return next;
			return "antiferromagnet";
		}
		suggests(){
			return [];
		}
		Search(){
			const obj = new this.$.$mol_search();
			(obj.hint) = () => ("Type property, elements, classes");
			(obj.query) = (next) => ((this.search(next)));
			(obj.suggests) = () => ((this.suggests()));
			return obj;
		}
		fetch_search(next){
			if(next !== undefined) return next;
			return null;
		}
		Search_button(){
			const obj = new this.$.$mol_button_major();
			(obj.title) = () => ("Искать");
			(obj.click) = (next) => ((this.fetch_search(next)));
			return obj;
		}
		Search_row(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.Search()), (this.Search_button())]);
			return obj;
		}
		search_type(next){
			if(next !== undefined) return next;
			return "0";
		}
		View_type_switch(){
			const obj = new this.$.$mol_switch();
			(obj.value) = (next) => ((this.search_type(next)));
			(obj.options) = () => ({
				"0": "entires", 
				"1": "phases", 
				"2": "articles"
			});
			return obj;
		}
		View_type_row(){
			const obj = new this.$.$mol_row();
			(obj.sub) = () => ([(this.View_type_switch())]);
			return obj;
		}
		get_image(id){
			return "";
		}
		Image(id){
			const obj = new this.$.$mol_image();
			(obj.uri) = () => ((this.get_image(id)));
			return obj;
		}
		get_classes(id){
			return "";
		}
		Classes(id){
			const obj = new this.$.$mol_text();
			(obj.text) = () => ((this.get_classes(id)));
			return obj;
		}
		Card(id){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ([(this.Image(id)), (this.Classes(id))]);
			return obj;
		}
		card_list(){
			return [(this.Card("0"))];
		}
		Row_cards(){
			const obj = new this.$.$mol_list();
			(obj.rows) = () => ((this.card_list()));
			return obj;
		}
		Result_page(){
			const obj = new this.$.$mol_page();
			(obj.Title) = () => (null);
			(obj.tools) = () => ([(this.Search_row()), (this.View_type_row())]);
			(obj.body) = () => ([(this.Row_cards())]);
			return obj;
		}
		title(){
			return "Поиск";
		}
		pages(){
			return [(this.Filters_page()), (this.Result_page())];
		}
	};
	($mol_mem_key(($.$azero_app_search.prototype), "clear_search_filter"));
	($mol_mem_key(($.$azero_app_search.prototype), "Search_labeler_content"));
	($mol_mem_key(($.$azero_app_search.prototype), "Search_labeler"));
	($mol_mem_key(($.$azero_app_search.prototype), "Search_filter"));
	($mol_mem(($.$azero_app_search.prototype), "Search_filters"));
	($mol_mem_key(($.$azero_app_search.prototype), "Filter_button"));
	($mol_mem(($.$azero_app_search.prototype), "Filters"));
	($mol_mem(($.$azero_app_search.prototype), "Filters_page"));
	($mol_mem(($.$azero_app_search.prototype), "search"));
	($mol_mem(($.$azero_app_search.prototype), "Search"));
	($mol_mem(($.$azero_app_search.prototype), "fetch_search"));
	($mol_mem(($.$azero_app_search.prototype), "Search_button"));
	($mol_mem(($.$azero_app_search.prototype), "Search_row"));
	($mol_mem(($.$azero_app_search.prototype), "search_type"));
	($mol_mem(($.$azero_app_search.prototype), "View_type_switch"));
	($mol_mem(($.$azero_app_search.prototype), "View_type_row"));
	($mol_mem_key(($.$azero_app_search.prototype), "Image"));
	($mol_mem_key(($.$azero_app_search.prototype), "Classes"));
	($mol_mem_key(($.$azero_app_search.prototype), "Card"));
	($mol_mem(($.$azero_app_search.prototype), "Row_cards"));
	($mol_mem(($.$azero_app_search.prototype), "Result_page"));

//# sourceMappingURL=search.view.tree.js.map