var images=["url(68522946-books-wallpapers.jpg)", "url(books-stack-book-store-stack-of-books-wallpaper.jpg)","url(thumb-1920-394862.jpg)" ];

var num=0;

function next()
{
	var slider = document.getElementById("topBox");
	
	if(num >= images.length)
	{num=0;}
	slider.style.backgroundImage = images[num];
	num++;
	console.log(num);
}

setInterval(next,3500);