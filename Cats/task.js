//Реализация работы кнопки “наверх”
$(document).ready(function(){

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.arrow-btn').fadeIn();
        } else {
            $('.arrow-btn').fadeOut();
        }
    })
    
    $('.arrow-btn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    })
})

//добавить в избранное при нажатии на сердечко
function addBookmark(el, url, title){
  if(!url){
    let url = document.location;
  }
  if(!title){
    let title = document.title;
  }
  try {
    window.external.AddFavorite(url, title);
    } catch(e){
    try {
      window.sidebar.addPanel(title, url, "");
    } catch(e){
      if(typeof(opera) == "object" || window.sidebar){
        el.rel   = "sidebar";
        el.title = title;
        el.url   = url;
        el.href  = url;

        return true;
        } else {
            alert("Добавлено в избранное");
        }
      }
  }
  return false;
}

