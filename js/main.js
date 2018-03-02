$(function() {

  function msieversion() {
   var ua = window.navigator.userAgent;
   var msie = ua.indexOf("MSIE ");
   if (msie > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
   window.location.href = "http://www.fredericroth.fr/ie.html";
  }
	
  msieversion();

  var $body=$('body'),
      $bg=$('#bg'),
      $boxID=$('#boxID'),
      $textID=$('#textID h2'),
      $menu=$('nav'),
      $menu_intro=$('nav ul li:eq(0)'),
      $menu_experience=$('nav ul li:eq(1)'),
      $menu_formation=$('nav ul li:eq(2)'),
      $menu_competences=$('nav ul li:eq(3)'),
      $menu_realisations=$('nav ul li:eq(4)'),
      $menu_contact=$('nav ul li:eq(5)'),
      $intro=$('#intro'),
      $experience=$('#experience'),
      $formation=$('#formation'),
      $competences=$('#competences'),
      $realisations=$('#realisations'),
      $wrapper=$('#wrapper'),
      $article_button=$('article button.close'),
      $section=$('section'),
      $contact=$('#contact'),
      $footer=$('footer'),
      $footerLink=$('footer a'),
      $social=$('#social'),
      $cube=$('div.cube'),
      $construction=$('#construction');

  window.setTimeout(
    function()
    {
      $body.addClass('load');
      $boxID.addClass('active');
      $menu.addClass('active');
      $footer.addClass('active');
      
      $cube.addClass('active');
      $section.hide();
    }, 100
  );
  
  window.setTimeout(
    function()
    {
      $textID.removeClass('animated zoomInDown');
      $boxID.addClass('animated pulse');
      $menu.removeClass('fadeInLeftBig').addClass('pulse');
      $menu.css('animation-delay', '0ms');
      $social.removeClass('fadeInDownBig').addClass('pulse');
      $construction.addClass('animated pulse');
      /*$social.css('animation-delay', '0ms');*/
    }, 2800
  );

  $menu_intro.on('click' , function(e)
  {
    $wrapper.hide();
    $experience.hide();
    $formation.hide();
    $competences.hide();
    $contact.hide();
    $realisations.hide();
    $social.hide();
    $section.show();
    $intro.show();
    $bg.addClass('blur');
    $intro.addClass('active');

    e.stopPropagation();
  });

  $body.on('click' , function(event)
  {
    if($bg.hasClass('blur') && $(event.target).parents('section').length === 0)
    {
      $bg.removeClass('blur');

      if ($('#intro.active')) {
          $intro.removeClass('active');
      }
      if ($('#experience.active')) {
          $experience.removeClass('active');
      }
      if ($('#formation.active')) {
          $formation.removeClass('active');
      }	
      if ($('#competences.active')) {
          $competences.removeClass('active');
      }	
      if ($('#realisations.active')) {
          $realisations.removeClass('active');
      }	
      if ($('#contact.active')) {
          $contact.removeClass('active');
      }		    		

      $wrapper.show();
      $social.show();
      $section.hide();
      
      $('.bar').css('width', '0'); 
      $('.label').css('left', '0'); 
    }
  });
  
  $menu_experience.on('click' , function(e)
  {
    $wrapper.hide();
    $intro.hide();
    $formation.hide();
    $competences.hide();
    $realisations.hide();
    $contact.hide();
    $social.hide();
    $section.show();
    $experience.show();
    $bg.addClass('blur');
    $experience.addClass('active');
    
    e.stopPropagation();
  });
  
  $menu_formation.on('click' , function(e)
  {
    $wrapper.hide();
    $intro.hide();
    $experience.hide();
    $competences.hide();
    $realisations.hide();
    $contact.hide();
    $social.hide();
    $section.show();
    $formation.show();
    $bg.addClass('blur');
    $formation.addClass('active');
    
    e.stopPropagation();
  });
  
  $menu_competences.on('click' , function(e)
  {
    $wrapper.hide();
    $intro.hide();
    $experience.hide();
    $formation.hide();
    $realisations.hide();
    $contact.hide();
    $social.hide();
    $section.show();
    $competences.show();
    $bg.addClass('blur');
    $competences.addClass('active');

    e.stopPropagation();
    
    $('.bar').css('width', '0'); 
    $('.label').css('left', '0'); 
    
    $('.progressbar').each(function()
    {
      $(this).find('.bar').animate({width:$(this).attr('data-perc')*0.93 + '%'},2000);
      
      if($('.perc').length < $('.progressbar').length)
      {
        $(this).find('.label').append('<div class="perc"></div>');
      }

      $(this).find('.label').animate(
      {left:($(this).attr('data-perc')*0.905) + '%'},
      {
        duration: 2000,
        step: function(now, fx)
        {
          var data = Math.round(now);
         $(this).find('.perc').text(Math.round(data/0.905) + '%');
        }
      }); 
    });
  });	

  $menu_realisations.on('click' , function(e)
  {
    $wrapper.hide();
    $intro.hide();
    $experience.hide();
    $formation.hide();
    $competences.hide();
    $contact.hide();
    $social.hide();
    $section.show();
    $realisations.show();
    $bg.addClass('blur');
    $realisations.addClass('active');
    
    e.stopPropagation();
  });		

  $menu_contact.on('click' , function(e)
  {
    $wrapper.hide();
    $intro.hide();
    $experience.hide();
    $formation.hide();
    $competences.hide();
    $realisations.hide();
    $social.hide();
    $section.show();
    $contact.show();
    $bg.addClass('blur');
    $contact.addClass('active');

    e.stopPropagation();
  });  
  
  $footerLink.on('click' , function(e)
  {
    $wrapper.hide();
    $intro.hide();
    $experience.hide();
    $formation.hide();
    $competences.hide();
    $realisations.hide();
    $social.hide();
    $section.show();
    $contact.show();
    
    $bg.addClass('blur');
    $contact.addClass('active');

    e.stopPropagation();
  });

  $article_button.on('click' , function()
  {
    $bg.removeClass('blur');
    
    if ($('#intro.active'))
    {
      $intro.removeClass('active');
    }
    
    if ($('#experience.active'))
    {
      $experience.removeClass('active');
    }
    
    if ($('#formation.active'))
    {
      $formation.removeClass('active');
    }	
    
    if ($('#competences.active'))
    {
      $competences.removeClass('active');
    }	
    
    if ($('#realisations.active'))
    {
      $realisations.removeClass('active');
    }	
    
    if ($('#contact.active'))
    {
      $contact.removeClass('active');
    }
    
    $wrapper.show();
    $social.show();
    $section.hide();
    
    $('.bar').css('width', '0'); 
    $('.label').css('left', '0'); 
  });

  $(function()
  {
    $('#contacter').submit(function(e)
    {
      var $name=$('#name').val();
      var $email=$('#email').val();
      var $message=$('#message').val();
      var $emailRegex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
      var $error = false;

      if ($name==='' || $email==='' || $message==='')
      {
        $('#mess_infos').html('Merci de remplir tous les champs');
      }
      else
      {
        if($name.length > 30)
        {
          $('#mess_infos').append('<p>Votre nom ne peut contenir plus de 30 caractères</p>');
          $error = true;
        }
        
        if($email.length > 50)
        {
          $('#mess_infos').append('<p>Votre email ne peut contenir plus de 50 caractères</p>');
          $error = true;
        }
        
        if(!$emailRegex.test($email))
        {
          $('#mess_infos').append('<p>Le format de votre email est incorrect</p>');
          $error = true;
        }
        
        if($message.length > 500)
        {
          $('#mess_infos').append('<p>Votre message ne peut contenir plus de 500 caractères</p>');
          $error = true;
        }
        
        if(!$error)
        {
          $.ajax({
            url : 'js/formulaire.php',
            type : 'POST',
            data : $(this).serialize(),
            success : function() {
              $('#mess_infos').css('color', '#55DE33');
              $('#mess_infos').html('Votre email a bien été envoyé !');
              $('#contacter')[0].reset();
              setTimeout(function() {
                $('#mess_infos').html('');
                $('#mess_infos').css('color', 'red');
              },5000);
            },
            error : function() {
              $('#mess_infos').html("Une erreur est survenue");
            }
          });
        }
        else
        {
          event.preventDefault();
          setTimeout(function() {
                $('#mess_infos').html('');
          },5000);
        }
        return false;
      }
    });
  });    
});

