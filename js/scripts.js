(function() {
          
		window.app = {};
		app.collections = {};
		app.models = {};
		app.views = {};
		app.routers = {};
        app.configs = {};

		})();
// app.read_token = 'zgooH18dKNI0NR4PiDk6_iabWI372AA96LUU_aKVKH06ZLz1bMZtow..';
// app.configs = {

//   api: 'http://api.brightcove.com/services/library?page_size=20&callback=?&token='+ app.read_token+'&command='

// };

// 		(function ( models ) {
// 		models.Video = Backbone.Model.extend({
// 		defaults: {
// 			username: 'macanhhuy',
// 			password: '123456'
// 		},
//          url: app.configs.api
// 		});
//         models.Playlist = Backbone.Model.extend({
		
// 		});  
          
// 		})(app.models);

// 		(function (collections, models) {
          
// 		collections.VideoCollection= Backbone.Collection.extend({
// 		model: models.Video,
// 		url: 'http://api.brightcove.com/services/library?command=find_all_videos&page_size=20&callback=?&token=zgooH18dKNI0NR4PiDk6_iabWI372AA96LUU_aKVKH06ZLz1bMZtow..',
// 		parse: function (response) {
// 			return response.items;
// 		}
// 		});
          
//         collections.PlaylistCollection= Backbone.Collection.extend({
// 		model: models.Playlist,
// 		url: app.configs.api+'find_all_playlists',
// 		parse: function (response) {
// 			return response.items;
// 		}
// 		});
          
          
// 		})( app.collections, app.models);


// 		(function(views) {
// 		views.VideoView = Backbone.View.extend({
// 		tagName : 'tr',
// 		className: 'video',
// 		events: {'click button.delete': 'deleteVideo'
// 		},
// 		template : _.template($('#video-template').html()),
// 		initialize : function() {

// 			this.model.bind('change', this.render, this);
// 			this.model.bind('destroy', this.remove, this);
// 		},
// 		render : function() {
// 			console.log(this.model.toJSON());
// 		this.$el.html(this.template(this.model.toJSON()));
// 			return this;
// 		},
// 		deleteVideo: function(){
// 		this.model.destroy();
         
//         console.log('delete');
// 		}
// 		});

// 		views.AppView = Backbone.View.extend({
// 		el : 'body',
// 			events:{
// 				'click span.search':'searchVideo',
// 				'click span.reset':'resetVideo'
// 			},
		
// 		initialize : function() {
// 			_.bindAll(this,'render','addOne', 'addAll');


// 			this.collection.on('reset', this.addAll, this);
// 			this.collection.on('change', this.addAll, this);
// 			this.collection.fetch();
      

// 		},
// 		resetVideo: function(){
//         this.collection.fetch();
// 			},
// 			searchVideo: function(){

// 		var url = 'http://api.brightcove.com/services/library?command=search_videos&none=private&none=private&page_size=20&callback=?&token=zgooH18dKNI0NR4PiDk6_iabWI372AA96LUU_aKVKH06ZLz1bMZtow..';
// 			var keyword = $('#search').val(), any='';
// 			keywords = keyword.split(',');
// 			keywords.forEach(function(key){
// 			any += '&any='+key;
//             });

// 		this.collection.url = url+any;
// 		this.collection.fetch();
// 		},
// 		addAll : function() {
// 		$('#videos').html('<th>Thumbnail</th><th>Video Name</th><th>Action</th>');
// 		this.collection.url = app.configs.api+'find_all_videos';
// 		var sortedByAlphabet = this.collection.sortBy(function (todo) {
// 		return todo.get("name").toLowerCase();
// 		});
//        var playlistview = new app.views.PlaylistView({collection:new           app.collections.PlaylistCollection()});
// 			sortedByAlphabet.forEach(this.addOne);
// 		},
// 		addOne : function(item) {
// 			var video = new                 views.VideoView({model:item});
// 			$('#videos').append(video.render().el);
         
// 		},
// 		render : function() {

// 			return this;
// 		}
// 		});
        
          
//         views.PLView = Backbone.View.extend({
        
// 		tagName : 'li',
// 		className: 'pl',
//           events: {
//             'click span.playlist':'add2Playlist'
// 		},
// 		template : _.template('<span class="playlist"><%= name %></span>'),
// 		initialize : function() {

// 			this.model.bind('change', this.render, this);
		
// 		},
// 		render : function() {
// 		this.$el.html(this.template(this.model.toJSON()));
// 			return this;
// 		},
	
//           add2Playlist: function(e){
//               e.preventDefault();
//          var videoIds = this.model.attributes.videoIds || [];
  
//         var id = $(e.currentTarget).parent().parent().parent();
//             videoid = id.data('id');
 
//            videoIds.push(videoid);
//             console.log(_.uniq(videoIds, false));
//           }
// 		});  
          
          
          
//         views.PlaylistView = Backbone.View.extend({
//         el: 'body',
// 		initialize : function() {
       
// 		this.collection.bind('reset', this.render, this);
// 		this.collection.fetch();
// 		},
//         render : function() {
          
//           this.collection.each(this.addItem);
        
// 			return this;
// 		},
//         addItem: function(item){
//         var plview = new app.views.PLView({model:item});
          
//            $('.dropdown-menu').append(plview.render().el);     
//         }
// 		});  
          
//       views.PlaylistTabView = Backbone.View.extend({
// 		tagName : 'tr',
// 		className: 'playlist',
// 		template : _.template($('#playlist-template').html()),
// 		initialize : function() {

// 			this.model.bind('change', this.render, this);
// 			this.model.bind('destroy', this.remove, this);
// 		},
// 		render : function() {
// 		this.$el.html(this.template(this.model.toJSON()));
// 			return this;
// 		}
// 		});
          
// 		views.PlaylistsView = Backbone.View.extend({
// 		el : '#playlists',
// 		initialize : function() {
// 			_.bindAll(this,'render','addOne', 'addAll');


// 			this.collection.on('reset', this.addAll, this);
// 			this.collection.on('change', this.addAll, this);
// 			this.collection.fetch();
      
// 		},
// 		addAll : function() {
// 		$(this.el).html('<th>ID</th><th>Playlist Name</th><th>Description</th>');
		
// 		var sortedByAlphabet = this.collection.sortBy(function (todo) {
// 		return todo.get("name").toLowerCase();
// 		});

// 			sortedByAlphabet.forEach(this.addOne);
// 		},
// 		addOne : function(item) {
// 			var playlist = new                 views.PlaylistTabView({model:item});
// 			$(this.el).append(playlist.render().el);
         
// 		},
// 		render : function() {

// 			return this;
// 		}
// 		});          
          
//         })(app.views);

  

// 		var appview = new app.views.AppView({collection:new app.collections.VideoCollection()});
//         var playlistview = new app.views.PlaylistsView({collection:new app.collections.PlaylistCollection()});

		

// 		(function ( models ) {
// 		models.Playlist = Backbone.Model.extend({
// 		defaults: {
// 			name: 'playlist name'
// 		}
// 		});
// 		})(app.models);

		(function ( routers ) {
		routers.VideoRouter = Backbone.Router.extend({
		routes: {
			"about" : "showAbout"
		},
		showAbout: function(){
          console.log('Mac Anh Huy');
        }

		});

		})(app.routers);


		var myRouter = new app.routers.VideoRouter();

		Backbone.history.start();