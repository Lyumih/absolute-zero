	($.$azero_app) = class $azero_app extends ($.$mol_book2_catalog) {
		Search_page(){
			const obj = new this.$.$azero_app_search();
			return obj;
		}
		menu_title(){
			return "−273.15°C";
		}
		param(){
			return "p";
		}
		spreads(){
			return {"search": (this.Search_page())};
		}
	};
	($mol_mem(($.$azero_app.prototype), "Search_page"));

//# sourceMappingURL=app.view.tree.js.map