!function(t,s,e){"use strict";var i=function(t,s){var i=this;this.el=t,this.options={},Object.keys(r).forEach(function(t){i.options[t]=r[t]}),Object.keys(s).forEach(function(t){i.options[t]=s[t]}),this.isInput="input"===this.el.tagName.toLowerCase(),this.attr=this.options.attr,this.showCursor=!this.isInput&&this.options.showCursor,this.elContent=this.attr?this.el.getAttribute(this.attr):this.el.textContent,this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.fadeOut=this.options.fadeOut,this.fadeOutClass=this.options.fadeOutClass,this.fadeOutDelay=this.options.fadeOutDelay,e&&this.options.stringsElement instanceof e?this.stringsElement=this.options.stringsElement[0]:this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};i.prototype={constructor:i,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var t=this;if(this.showCursor===!0&&(this.cursor=s.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)),this.stringsElement){this.strings=[],this.stringsElement.style.display="none";var e=Array.prototype.slice.apply(this.stringsElement.children);e.forEach(function(s){t.strings.push(s.innerHTML)})}this.init()},typewrite:function(t,s){if(this.stop!==!0){this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor.classList.remove(this.fadeOutClass));var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var o=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],o+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+o)}if("html"===i.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s+1).charAt(0)!==h&&(a+=t.substr(s).charAt(0),s++,!(s+1>t.length)););s++,a+=h}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,i.loop===!1||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.setAttribute(i.attr,e):i.isInput?i.el.value=e:"html"===i.contentType?i.el.innerHTML=e:i.el.textContent=e,s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){var e=this;if(this.stop!==!0){if(this.fadeOut)return void this.initFadeOut();var i=Math.round(70*Math.random())+this.backSpeed;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(var i="";"<"!==t.substr(s-1).charAt(0)&&(i-=t.substr(s).charAt(0),s--,!(s<0)););s--,i+="<"}var r=t.substr(0,s);e.replaceText(r),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.init()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}},initFadeOut:function(){return self=this,this.el.className+=" "+this.fadeOutClass,this.cursor.className+=" "+this.fadeOutClass,setTimeout(function(){self.arrayPos++,self.replaceText(""),self.typewrite(self.strings[self.sequence[self.arrayPos]],0)},self.fadeOutDelay)},replaceText:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);this.el.getAttribute("id");this.el.textContent="","undefined"!=typeof this.cursor&&"undefined"!=typeof this.cursor.parentNode&&this.cursor.parentNode.removeChild(this.cursor),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},i["new"]=function(t,e){var r=Array.prototype.slice.apply(s.querySelectorAll(t));r.forEach(function(t){var s=t._typed,r="object"==typeof e&&e;s&&s.reset(),t._typed=s=new i(t,r),"string"==typeof e&&s[e]()})},e&&(e.fn.typed=function(t){return this.each(function(){var s=e(this),r=s.data("typed"),o="object"==typeof t&&t;r&&r.reset(),s.data("typed",r=new i(this,o)),"string"==typeof t&&r[t]()})}),t.Typed=i;var r={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window,document,window.jQuery);
jQuery(document).ready(function(){
     
   "use strict"
    $('.slider').ripples({
      dropRadius: 11,
      perturbance: 0.01,
       
    });
  
     $(".text").typed({
        strings:["<strong>i love</strong><strong class='primary'> coding.</strong>","<strong>and to</strong><strong class='primary'> practice !!.</strong>"],
         typespeed:0,
         loop:true
         
     });
     
    $(window).scroll(function(){
        
       var top = $(window).scrollTop();
        if(top>=60){
          $("nav").addClass('secondary'); 
        }
        
        else 
            if($("nav").hasClass('secondary')){
                $("nav").removeClass('secondary'); 
            }
    });

      $('.work').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
      enabled: true
       } 
                               
    });
	
    $("#team-members").owlCarousel({

    items: 3,
    margin: 20,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,

    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 2
        },

        1000: {
            items: 3
        }
    }

});


     $('.counter').counterUp({
                delay: 10,
                time: 4000
            });
     
      $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });

    // CTA Contact: scroll to form, prefill subject and focus the name field
    $('#cta-contact').on('click', function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        var section = $(href);
        var subj = $(this).data('subject') || '';
        $('html, body').animate({
            scrollTop: section.offset().top - -2
        }, 1250, "easeInOutExpo", function(){
            if(subj) $('#subject').val(subj);
            $('#name').focus();
        });
    });
     new WOW().init();
     
 // Contact form: client-side validation and AJAX submission (works for inline form and modal form)
 $('.contact-form').on('submit', function(e){
     e.preventDefault();
     var $form = $(this);
     var $alert = $form.find('.form-alert');
     var name = $.trim($form.find('[name="name"]').val());
     var email = $.trim($form.find('[name="email"]').val());
     var subject = $.trim($form.find('[name="subject"]').val());
     var message = $.trim($form.find('[name="message"]').val());
     var source = $form.find('[name="source"]').val() || 'inline';

     function showAlert(type, msg){
         if($alert.length === 0){
             // fallback to top page alert
             $alert = $('#form-alert');
         }
         $alert.removeClass('success error').addClass(type).text(msg).show();
         try{ $('html,body').animate({scrollTop: $alert.offset().top - 100}, 300);}catch(e){}
     }

     if(!name){ showAlert('error','Please enter your name.'); return; }
     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!email || !emailPattern.test(email)){ showAlert('error','Please enter a valid email address.'); return; }
     if(subject.length < 3){ showAlert('error','Please enter a subject.'); return; }
     if(message.length < 10){ showAlert('error','Please enter a message (at least 10 characters).'); return; }

     var $btn = $form.find('button[type=submit]');
     var originalBtnText = $btn.text();
     $btn.prop('disabled', true).text('Sending...');

     var postData = {name:name, email:email, subject:subject, message:message, source:source};
     var recaptchaSiteKey = $('body').data('recaptcha-sitekey') || '';
     var recaptchaEnabled = recaptchaSiteKey && recaptchaSiteKey !== 'YOUR_RECAPTCHA_SITE_KEY' && typeof grecaptcha !== 'undefined';

     function doAjaxWithData(data){
         $.ajax({
             url: $form.attr('action'),
             method: 'POST',
             data: data,
             dataType: 'json',
             timeout: 15000
         }).done(function(resp){
             if(resp && resp.success){
                 showAlert('success', resp.message || 'Message sent successfully.');
                 $form[0].reset();
                 // sent animation
                 $btn.addClass('sent').text('Sent');
                 setTimeout(function(){
                     $btn.removeClass('sent').text(originalBtnText);
                 }, 1700);
                 if($form.is('#modal-contactform')){
                     setTimeout(closeModal, 1200);
                 }
             } else {
                 showAlert('error', resp.message || 'An error occurred while sending your message.');
             }
         }).fail(function(){
             showAlert('error','An error occurred while sending your message. Please try again later.');
         }).always(function(){
             $btn.prop('disabled', false).text(originalBtnText);
         });
     }

     if(recaptchaEnabled){
         if(typeof grecaptcha === 'undefined'){
             showAlert('error','reCAPTCHA is not available. Please check your configuration.');
             $btn.prop('disabled', false).text(originalBtnText);
             return;
         }
         // execute v3 action
         grecaptcha.execute(recaptchaSiteKey, {action: 'contact'}).then(function(token){
             postData['g-recaptcha-response'] = token;
             doAjaxWithData(postData);
         }).catch(function(){
             showAlert('error','reCAPTCHA execution failed.');
             $btn.prop('disabled', false).text(originalBtnText);
         });
     } else {
         doAjaxWithData(postData);
     }
 });

 // Quick Contact modal open/close
 function openModal(subject){
     var $modal = $('#quick-contact-modal');
     if(subject) $modal.find('[name="subject"]').val(subject);
     $modal.show().attr('aria-hidden','false');
     $('body').addClass('modal-open');
     $modal.find('[name="name"]').focus();
 }
 function closeModal(){
     var $modal = $('#quick-contact-modal');
     $modal.hide().attr('aria-hidden','true');
     $('body').removeClass('modal-open');
     $modal.find('.form-alert').hide().text('');
 }

 $('#cta-quick').on('click', function(e){
     e.preventDefault();
     var subj = $(this).data('subject') || '';
     openModal(subj);
 });

 $('#quick-contact-modal .modal-close, #quick-contact-modal .modal-overlay').on('click', function(){
     closeModal();
 });

 $('.latest-news-wrap').each(function(){
     var $card = $(this);
     var $image = $card.find('.news-image');

     $card.on('mousemove', function(e){
         var rect = this.getBoundingClientRect();
         var x = (e.clientX - rect.left) / rect.width;
         var y = (e.clientY - rect.top) / rect.height;
         var rotateY = (x - 0.5) * 12;
         var rotateX = (0.5 - y) * 12;
         var tx = (x - 0.5) * 14;
         var ty = (y - 0.5) * 14;

         $image.css({
             transform: 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, 0)',
             transition: 'transform 0s ease-out'
         });
     });

     $card.on('mouseleave', function(){
         $image.css({
             transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)',
             transition: 'transform 0.5s ease'
         });
     });
 });

 $(document).on('keydown', function(e){ if(e.key === 'Escape'){ closeModal(); } });
 });
 /**
 * jQuery Ripples plugin v0.6.3 / https://github.com/sirxemic/jquery.ripples
 * MIT License
 * @author sirxemic / https://sirxemic.com/
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(factory(global.$));
}(this, (function ($) { 'use strict';

$ = $ && 'default' in $ ? $['default'] : $;

var gl;
var $window = $(window); // There is only one window, so why not cache the jQuery-wrapped window?

function isPercentage(str) {
	return str[str.length - 1] == '%';
}

/**
 *  Load a configuration of GL settings which the browser supports.
 *  For example:
 *  - not all browsers support WebGL
 *  - not all browsers support floating point textures
 *  - not all browsers support linear filtering for floating point textures
 *  - not all browsers support rendering to floating point textures
 *  - some browsers *do* support rendering to half-floating point textures instead.
 */
function loadConfig() {
	var canvas = document.createElement('canvas');
	gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

	if (!gl) {
		// Browser does not support WebGL.
		return null;
	}

	// Load extensions
	var extensions = {};
	[
		'OES_texture_float',
		'OES_texture_half_float',
		'OES_texture_float_linear',
		'OES_texture_half_float_linear'
	].forEach(function(name) {
		var extension = gl.getExtension(name);
		if (extension) {
			extensions[name] = extension;
		}
	});

	// If no floating point extensions are supported we can bail out early.
	if (!extensions.OES_texture_float) {
		return null;
	}

	var configs = [];

	function createConfig(type, glType, arrayType) {
		var name = 'OES_texture_' + type,
				nameLinear = name + '_linear',
				linearSupport = nameLinear in extensions,
				configExtensions = [name];

		if (linearSupport) {
			configExtensions.push(nameLinear);
		}

		return {
			type: glType,
			arrayType: arrayType,
			linearSupport: linearSupport,
			extensions: configExtensions
		};
	}

	configs.push(
		createConfig('float', gl.FLOAT, Float32Array)
	);

	if (extensions.OES_texture_half_float) {
		configs.push(
			// Array type should be Uint16Array, but at least on iOS that breaks. In that case we
			// just initialize the textures with data=null, instead of data=new Uint16Array(...).
			// This makes initialization a tad slower, but it's still negligible.
			createConfig('half_float', extensions.OES_texture_half_float.HALF_FLOAT_OES, null)
		);
	}

	// Setup the texture and framebuffer
	var texture = gl.createTexture();
	var framebuffer = gl.createFramebuffer();

	gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

	// Check for each supported texture type if rendering to it is supported
	var config = null;

	for (var i = 0; i < configs.length; i++) {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 32, 32, 0, gl.RGBA, configs[i].type, null);

		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
		if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
			config = configs[i];
			break;
		}
	}

	return config;
}

function createImageData(width, height) {
	try {
		return new ImageData(width, height);
	}
	catch (e) {
		// Fallback for IE
		var canvas = document.createElement('canvas');
		return canvas.getContext('2d').createImageData(width, height);
	}
}

function translateBackgroundPosition(value) {
	var parts = value.split(' ');

	if (parts.length === 1) {
		switch (value) {
			case 'center':
				return ['50%', '50%'];
			case 'top':
				return ['50%', '0'];
			case 'bottom':
				return ['50%', '100%'];
			case 'left':
				return ['0', '50%'];
			case 'right':
				return ['100%', '50%'];
			default:
				return [value, '50%'];
		}
	}
	else {
		return parts.map(function(part) {
			switch (value) {
				case 'center':
					return '50%';
				case 'top':
				case 'left':
					return '0';
				case 'right':
				case 'bottom':
					return '100%';
				default:
					return part;
			}
		});
	}
}

function createProgram(vertexSource, fragmentSource, uniformValues) {
	function compileSource(type, source) {
		var shader = gl.createShader(type);
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			throw new Error('compile error: ' + gl.getShaderInfoLog(shader));
		}
		return shader;
	}

	var program = {};

	program.id = gl.createProgram();
	gl.attachShader(program.id, compileSource(gl.VERTEX_SHADER, vertexSource));
	gl.attachShader(program.id, compileSource(gl.FRAGMENT_SHADER, fragmentSource));
	gl.linkProgram(program.id);
	if (!gl.getProgramParameter(program.id, gl.LINK_STATUS)) {
		throw new Error('link error: ' + gl.getProgramInfoLog(program.id));
	}

	// Fetch the uniform and attribute locations
	program.uniforms = {};
	program.locations = {};
	gl.useProgram(program.id);
	gl.enableVertexAttribArray(0);
	var match, name, regex = /uniform (\w+) (\w+)/g, shaderCode = vertexSource + fragmentSource;
	while ((match = regex.exec(shaderCode)) != null) {
		name = match[2];
		program.locations[name] = gl.getUniformLocation(program.id, name);
	}

	return program;
}

function bindTexture(texture, unit) {
	gl.activeTexture(gl.TEXTURE0 + (unit || 0));
	gl.bindTexture(gl.TEXTURE_2D, texture);
}

function extractUrl(value) {
	var urlMatch = /url\(["']?([^"']*)["']?\)/.exec(value);
	if (urlMatch == null) {
		return null;
	}

	return urlMatch[1];
}

function isDataUri(url) {
	return url.match(/^data:/);
}

var config = loadConfig();
var transparentPixels = createImageData(32, 32);

// Extend the css
$('head').prepend('<style>.jquery-ripples { position: relative; z-index: 0; }</style>');

// RIPPLES CLASS DEFINITION
// =========================

var Ripples = function (el, options) {
	var that = this;

	this.$el = $(el);

	// Init properties from options
	this.interactive = options.interactive;
	this.resolution = options.resolution;
	this.textureDelta = new Float32Array([1 / this.resolution, 1 / this.resolution]);

	this.perturbance = options.perturbance;
	this.dropRadius = options.dropRadius;

	this.crossOrigin = options.crossOrigin;
	this.imageUrl = options.imageUrl;

	// Init WebGL canvas
	var canvas = document.createElement('canvas');
	canvas.width = this.$el.innerWidth();
	canvas.height = this.$el.innerHeight();
	this.canvas = canvas;
	this.$canvas = $(canvas);
	this.$canvas.css({
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		zIndex: -1
	});

	this.$el.addClass('jquery-ripples').append(canvas);
	this.context = gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

	// Load extensions
	config.extensions.forEach(function(name) {
		gl.getExtension(name);
	});

	// Auto-resize when window size changes.
	this.updateSize = this.updateSize.bind(this);
	$(window).on('resize', this.updateSize);

	// Init rendertargets for ripple data.
	this.textures = [];
	this.framebuffers = [];
	this.bufferWriteIndex = 0;
	this.bufferReadIndex = 1;

	var arrayType = config.arrayType;
	var textureData = arrayType ? new arrayType(this.resolution * this.resolution * 4) : null;

	for (var i = 0; i < 2; i++) {
		var texture = gl.createTexture();
		var framebuffer = gl.createFramebuffer();

		gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, config.linearSupport ? gl.LINEAR : gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, config.linearSupport ? gl.LINEAR : gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.resolution, this.resolution, 0, gl.RGBA, config.type, textureData);

		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

		this.textures.push(texture);
		this.framebuffers.push(framebuffer);
	}

	// Init GL stuff
	this.quad = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
		-1, -1,
		+1, -1,
		+1, +1,
		-1, +1
	]), gl.STATIC_DRAW);

	this.initShaders();
	this.initTexture();
	this.setTransparentTexture();

	// Load the image either from the options or CSS rules
	this.loadImage();

	// Set correct clear color and blend mode (regular alpha blending)
	gl.clearColor(0, 0, 0, 0);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	// Plugin is successfully initialized!
	this.visible = true;
	this.running = true;
	this.inited = true;
	this.destroyed = false;

	this.setupPointerEvents();

	// Init animation
	function step() {
		if (!that.destroyed) {
			that.step();

			requestAnimationFrame(step);
		}
	}

	requestAnimationFrame(step);
};

Ripples.DEFAULTS = {
	imageUrl: null,
	resolution: 256,
	dropRadius: 20,
	perturbance: 0.03,
	interactive: true,
	crossOrigin: ''
};

Ripples.prototype = {

	// Set up pointer (mouse + touch) events
	setupPointerEvents: function() {
		var that = this;

		function pointerEventsEnabled() {
			return that.visible && that.running && that.interactive;
		}

		function dropAtPointer(pointer, big) {
			if (pointerEventsEnabled()) {
				that.dropAtPointer(
					pointer,
					that.dropRadius * (big ? 1.5 : 1),
					(big ? 0.14 : 0.01)
				);
			}
		}

		// Start listening to pointer events
		this.$el

			// Create regular, small ripples for mouse move and touch events...
			.on('mousemove.ripples', function(e) {
				dropAtPointer(e);
			})
			.on('touchmove.ripples touchstart.ripples', function(e) {
				var touches = e.originalEvent.changedTouches;
				for (var i = 0; i < touches.length; i++) {
					dropAtPointer(touches[i]);
				}
			})

			// ...and only a big ripple on mouse down events.
			.on('mousedown.ripples', function(e) {
				dropAtPointer(e, true);
			});
	},

	// Load the image either from the options or the element's CSS rules.
	loadImage: function() {
		var that = this;

		gl = this.context;

		var newImageSource = this.imageUrl ||
			extractUrl(this.originalCssBackgroundImage) ||
			extractUrl(this.$el.css('backgroundImage'));

		// If image source is unchanged, don't reload it.
		if (newImageSource == this.imageSource) {
			return;
		}

		this.imageSource = newImageSource;

		// Falsy source means no background.
		if (!this.imageSource) {
			this.setTransparentTexture();
			return;
		}

		// Load the texture from a new image.
		var image = new Image;
		image.onload = function() {
			gl = that.context;

			// Only textures with dimensions of powers of two can have repeat wrapping.
			function isPowerOfTwo(x) {
				return (x & (x - 1)) == 0;
			}

			var wrapping = (isPowerOfTwo(image.width) && isPowerOfTwo(image.height)) ? gl.REPEAT : gl.CLAMP_TO_EDGE;

			gl.bindTexture(gl.TEXTURE_2D, that.backgroundTexture);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapping);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapping);
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

			that.backgroundWidth = image.width;
			that.backgroundHeight = image.height;

			// Hide the background that we're replacing.
			that.hideCssBackground();
		};

		// Fall back to a transparent texture when loading the image failed.
		image.onerror = function() {
			gl = that.context;

			that.setTransparentTexture();
		};

		// Disable CORS when the image source is a data URI.
		image.crossOrigin = isDataUri(this.imageSource) ? null : this.crossOrigin;

		image.src = this.imageSource;
	},

	step: function() {
		gl = this.context;

		if (!this.visible) {
			return;
		}

		this.computeTextureBoundaries();

		if (this.running) {
			this.update();
		}

		this.render();
	},

	drawQuad: function() {
		gl.bindBuffer(gl.ARRAY_BUFFER, this.quad);
		gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
		gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
	},

	render: function() {
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);

		gl.viewport(0, 0, this.canvas.width, this.canvas.height);

		gl.enable(gl.BLEND);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

		gl.useProgram(this.renderProgram.id);

		bindTexture(this.backgroundTexture, 0);
		bindTexture(this.textures[0], 1);

		gl.uniform1f(this.renderProgram.locations.perturbance, this.perturbance);
		gl.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft);
		gl.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight);
		gl.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio);
		gl.uniform1i(this.renderProgram.locations.samplerBackground, 0);
		gl.uniform1i(this.renderProgram.locations.samplerRipples, 1);

		this.drawQuad();
		gl.disable(gl.BLEND);
	},

	update: function() {
		gl.viewport(0, 0, this.resolution, this.resolution);

		gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]);
		bindTexture(this.textures[this.bufferReadIndex]);
		gl.useProgram(this.updateProgram.id);

		this.drawQuad();

		this.swapBufferIndices();
	},

	swapBufferIndices: function() {
		this.bufferWriteIndex = 1 - this.bufferWriteIndex;
		this.bufferReadIndex = 1 - this.bufferReadIndex;
	},

	computeTextureBoundaries: function() {
		var backgroundSize = this.$el.css('background-size');
		var backgroundAttachment = this.$el.css('background-attachment');
		var backgroundPosition = translateBackgroundPosition(this.$el.css('background-position'));

		// Here the 'container' is the element which the background adapts to
		// (either the chrome window or some element, depending on attachment)
		var container;
		if (backgroundAttachment == 'fixed') {
			container = { left: window.pageXOffset, top: window.pageYOffset };
			container.width = $window.width();
			container.height = $window.height();
		}
		else {
			container = this.$el.offset();
			container.width = this.$el.innerWidth();
			container.height = this.$el.innerHeight();
		}

		// TODO: background-clip
		if (backgroundSize == 'cover') {
			var scale = Math.max(container.width / this.backgroundWidth, container.height / this.backgroundHeight);

			var backgroundWidth = this.backgroundWidth * scale;
			var backgroundHeight = this.backgroundHeight * scale;
		}
		else if (backgroundSize == 'contain') {
			var scale = Math.min(container.width / this.backgroundWidth, container.height / this.backgroundHeight);

			var backgroundWidth = this.backgroundWidth * scale;
			var backgroundHeight = this.backgroundHeight * scale;
		}
		else {
			backgroundSize = backgroundSize.split(' ');
			var backgroundWidth = backgroundSize[0] || '';
			var backgroundHeight = backgroundSize[1] || backgroundWidth;

			if (isPercentage(backgroundWidth)) {
				backgroundWidth = container.width * parseFloat(backgroundWidth) / 100;
			}
			else if (backgroundWidth != 'auto') {
				backgroundWidth = parseFloat(backgroundWidth);
			}

			if (isPercentage(backgroundHeight)) {
				backgroundHeight = container.height * parseFloat(backgroundHeight) / 100;
			}
			else if (backgroundHeight != 'auto') {
				backgroundHeight = parseFloat(backgroundHeight);
			}

			if (backgroundWidth == 'auto' && backgroundHeight == 'auto') {
				backgroundWidth = this.backgroundWidth;
				backgroundHeight = this.backgroundHeight;
			}
			else {
				if (backgroundWidth == 'auto') {
					backgroundWidth = this.backgroundWidth * (backgroundHeight / this.backgroundHeight);
				}

				if (backgroundHeight == 'auto') {
					backgroundHeight = this.backgroundHeight * (backgroundWidth / this.backgroundWidth);
				}
			}
		}

		// Compute backgroundX and backgroundY in page coordinates
		var backgroundX = backgroundPosition[0];
		var backgroundY = backgroundPosition[1];

		if (isPercentage(backgroundX)) {
			backgroundX = container.left + (container.width - backgroundWidth) * parseFloat(backgroundX) / 100;
		}
		else {
			backgroundX = container.left + parseFloat(backgroundX);
		}

		if (isPercentage(backgroundY)) {
			backgroundY = container.top + (container.height - backgroundHeight) * parseFloat(backgroundY) / 100;
		}
		else {
			backgroundY = container.top + parseFloat(backgroundY);
		}

		var elementOffset = this.$el.offset();

		this.renderProgram.uniforms.topLeft = new Float32Array([
			(elementOffset.left - backgroundX) / backgroundWidth,
			(elementOffset.top - backgroundY) / backgroundHeight
		]);
		this.renderProgram.uniforms.bottomRight = new Float32Array([
			this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / backgroundWidth,
			this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / backgroundHeight
		]);

		var maxSide = Math.max(this.canvas.width, this.canvas.height);

		this.renderProgram.uniforms.containerRatio = new Float32Array([
			this.canvas.width / maxSide,
			this.canvas.height / maxSide
		]);
	},

	initShaders: function() {
		var vertexShader = [
			'attribute vec2 vertex;',
			'varying vec2 coord;',
			'void main() {',
				'coord = vertex * 0.5 + 0.5;',
				'gl_Position = vec4(vertex, 0.0, 1.0);',
			'}'
		].join('\n');

		this.dropProgram = createProgram(vertexShader, [
			'precision highp float;',

			'const float PI = 3.141592653589793;',
			'uniform sampler2D texture;',
			'uniform vec2 center;',
			'uniform float radius;',
			'uniform float strength;',

			'varying vec2 coord;',

			'void main() {',
				'vec4 info = texture2D(texture, coord);',

				'float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);',
				'drop = 0.5 - cos(drop * PI) * 0.5;',

				'info.r += drop * strength;',

				'gl_FragColor = info;',
			'}'
		].join('\n'));

		this.updateProgram = createProgram(vertexShader, [
			'precision highp float;',

			'uniform sampler2D texture;',
			'uniform vec2 delta;',

			'varying vec2 coord;',

			'void main() {',
				'vec4 info = texture2D(texture, coord);',

				'vec2 dx = vec2(delta.x, 0.0);',
				'vec2 dy = vec2(0.0, delta.y);',

				'float average = (',
					'texture2D(texture, coord - dx).r +',
					'texture2D(texture, coord - dy).r +',
					'texture2D(texture, coord + dx).r +',
					'texture2D(texture, coord + dy).r',
				') * 0.25;',

				'info.g += (average - info.r) * 2.0;',
				'info.g *= 0.995;',
				'info.r += info.g;',

				'gl_FragColor = info;',
			'}'
		].join('\n'));
		gl.uniform2fv(this.updateProgram.locations.delta, this.textureDelta);

		this.renderProgram = createProgram([
			'precision highp float;',

			'attribute vec2 vertex;',
			'uniform vec2 topLeft;',
			'uniform vec2 bottomRight;',
			'uniform vec2 containerRatio;',
			'varying vec2 ripplesCoord;',
			'varying vec2 backgroundCoord;',
			'void main() {',
				'backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);',
				'backgroundCoord.y = 1.0 - backgroundCoord.y;',
				'ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;',
				'gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);',
			'}'
		].join('\n'), [
			'precision highp float;',

			'uniform sampler2D samplerBackground;',
			'uniform sampler2D samplerRipples;',
			'uniform vec2 delta;',

			'uniform float perturbance;',
			'varying vec2 ripplesCoord;',
			'varying vec2 backgroundCoord;',

			'void main() {',
				'float height = texture2D(samplerRipples, ripplesCoord).r;',
				'float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;',
				'float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;',
				'vec3 dx = vec3(delta.x, heightX - height, 0.0);',
				'vec3 dy = vec3(0.0, heightY - height, delta.y);',
				'vec2 offset = -normalize(cross(dy, dx)).xz;',
				'float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);',
				'gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;',
			'}'
		].join('\n'));
		gl.uniform2fv(this.renderProgram.locations.delta, this.textureDelta);
	},

	initTexture: function() {
		this.backgroundTexture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, this.backgroundTexture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	},

	setTransparentTexture: function() {
		gl.bindTexture(gl.TEXTURE_2D, this.backgroundTexture);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, transparentPixels);
	},

	hideCssBackground: function() {

		// Check whether we're changing inline CSS or overriding a global CSS rule.
		var inlineCss = this.$el[0].style.backgroundImage;

		if (inlineCss == 'none') {
			return;
		}

		this.originalInlineCss = inlineCss;

		this.originalCssBackgroundImage = this.$el.css('backgroundImage');
		this.$el.css('backgroundImage', 'none');
	},

	restoreCssBackground: function() {

		// Restore background by either changing the inline CSS rule to what it was, or
		// simply remove the inline CSS rule if it never was inlined.
		this.$el.css('backgroundImage', this.originalInlineCss || '');
	},

	dropAtPointer: function(pointer, radius, strength) {
		var borderLeft = parseInt(this.$el.css('border-left-width')) || 0,
				borderTop = parseInt(this.$el.css('border-top-width')) || 0;

		this.drop(
			pointer.pageX - this.$el.offset().left - borderLeft,
			pointer.pageY - this.$el.offset().top - borderTop,
			radius,
			strength
		);
	},

	/**
	 *  Public methods
	 */
	drop: function(x, y, radius, strength) {
		gl = this.context;

		var elWidth = this.$el.innerWidth();
		var elHeight = this.$el.innerHeight();
		var longestSide = Math.max(elWidth, elHeight);

		radius = radius / longestSide;

		var dropPosition = new Float32Array([
			(2 * x - elWidth) / longestSide,
			(elHeight - 2 * y) / longestSide
		]);

		gl.viewport(0, 0, this.resolution, this.resolution);

		gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]);
		bindTexture(this.textures[this.bufferReadIndex]);

		gl.useProgram(this.dropProgram.id);
		gl.uniform2fv(this.dropProgram.locations.center, dropPosition);
		gl.uniform1f(this.dropProgram.locations.radius, radius);
		gl.uniform1f(this.dropProgram.locations.strength, strength);

		this.drawQuad();

		this.swapBufferIndices();
	},

	updateSize: function() {
		var newWidth = this.$el.innerWidth(),
				newHeight = this.$el.innerHeight();

		if (newWidth != this.canvas.width || newHeight != this.canvas.height) {
			this.canvas.width = newWidth;
			this.canvas.height = newHeight;
		}
	},

	destroy: function() {
		this.$el
			.off('.ripples')
			.removeClass('jquery-ripples')
			.removeData('ripples');

		// Make sure the last used context is garbage-collected
		gl = null;

		$(window).off('resize', this.updateSize);

		this.$canvas.remove();
		this.restoreCssBackground();

		this.destroyed = true;
	},

	show: function() {
		this.visible = true;

		this.$canvas.show();
		this.hideCssBackground();
	},

	hide: function() {
		this.visible = false;

		this.$canvas.hide();
		this.restoreCssBackground();
	},

	pause: function() {
		this.running = false;
	},

	play: function() {
		this.running = true;
	},

	set: function(property, value) {
		switch (property) {
			case 'dropRadius':
			case 'perturbance':
			case 'interactive':
			case 'crossOrigin':
				this[property] = value;
				break;
			case 'imageUrl':
				this.imageUrl = value;
				this.loadImage();
				break;
		}
	}
};

// RIPPLES PLUGIN DEFINITION
// ==========================

var old = $.fn.ripples;

$.fn.ripples = function(option) {
	if (!config) {
		throw new Error('Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.');
	}

	var args = (arguments.length > 1) ? Array.prototype.slice.call(arguments, 1) : undefined;

	return this.each(function() {
		var $this = $(this),
				data = $this.data('ripples'),
				options = $.extend({}, Ripples.DEFAULTS, $this.data(), typeof option == 'object' && option);

		if (!data && typeof option == 'string') {
			return;
		}
		if (!data) {
			$this.data('ripples', (data = new Ripples(this, options)));
		}
		else if (typeof option == 'string') {
			Ripples.prototype[option].apply(data, args);
		}
	});
};

$.fn.ripples.Constructor = Ripples;


// RIPPLES NO CONFLICT
// ====================

$.fn.ripples.noConflict = function() {
	$.fn.ripples = old;
	return this;
};
})));