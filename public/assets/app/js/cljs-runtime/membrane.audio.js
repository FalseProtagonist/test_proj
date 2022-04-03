goog.provide('membrane.audio');
if((typeof membrane !== 'undefined') && (typeof membrane.audio !== 'undefined') && (typeof membrane.audio.audio_context !== 'undefined')){
} else {
membrane.audio.audio_context = (cljs.core.truth_(window.AudioContext)?(new window.AudioContext()):(new window.webkitAudioContext()));
}
membrane.audio.load_audio = (function membrane$audio$load_audio(url){
var req = (new XMLHttpRequest());
var audio_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
req.open("GET",url,true);

(req.responseType = "arraybuffer");

(req.onload = (function (){
return membrane.audio.audio_context.decodeAudioData(req.response,(function (buf){
return cljs.core.reset_BANG_(audio_ref,buf);
}));
}));

req.send();

return audio_ref;
});
membrane.audio.play_audio = (function membrane$audio$play_audio(audio_ref){
var temp__5753__auto__ = cljs.core.deref(audio_ref);
if(cljs.core.truth_(temp__5753__auto__)){
var audio_buf = temp__5753__auto__;
var src = membrane.audio.audio_context.createBufferSource();
(src.buffer = audio_buf);

src.connect(membrane.audio.audio_context.destination);

return src.start((0));
} else {
return null;
}
});

//# sourceMappingURL=membrane.audio.js.map
