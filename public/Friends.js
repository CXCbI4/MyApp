$('#load').on('click', loadFriends);
	
	// Метод для преобразования запроса
	function getUrl(method, params)
	{
		// Проверяем на переданный метод
		if(!method)
			throw new Error('Вы не указали метод!');
		params = params || {};
		params['access_token'] = '2352c7420d1d13f2cb6d22db4da82e6a967b38229f855f552af06a2a3c0de8a9cd30d01ad025664caabb7';
		return 'https://api.vk.com/method/' + method + '?' + $.param(params) + '&v=5.52';
	}

	// Получаем запрос
	function sendRequest(method, params, func){
	$.ajax({
		/*url: 'https://api.vk.com/method/friends.search?count=60&fields=photo_100&access_token=2352c7420d1d13f2cb6d22db4da82e6a967b38229f855f552af06a2a3c0de8a9cd30d01ad025664caabb7&v=5.52',*/
		url: getUrl(method, params),
		method: 'GET',
		dataType: 'JSONP',
		success: func
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}

	// Получаем список друзей
	function loadFriends()
	{
		sendRequest('friends.search', {count: 60, fields: 'photo_100,online'}, function(data){
		console.log(data);
		showFriends(data.response);
	});
	}
	
	// Отрисовка друзей
	function showFriends(friends)
	{
		var html = '';
		

		console.log(friends.count);

		for (var i = 0; i < friends.count; i++) {

			var f = friends.items[i];
			var online = f.online;
			if(f.online)
				online = 'Online';
			else
				online = 'Offline';
			
			html += 
			'<li>' + 
			'<a target="_blank" href="https://vk.com/id' + f.id + '">'
			 +'<img src = "' + f.photo_100 + '" />'
			 	+'<div>'
			 		+'<h4>'+ f.first_name + ' ' + f.last_name +'</h4>'
			 		+'<p>' + online + '</p>'
			 	+'</div>'
			 +'</a>'
			 + '</li>';
		}

		$('ul').html(html);
	}