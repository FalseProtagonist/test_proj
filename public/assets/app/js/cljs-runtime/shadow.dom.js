goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_47606 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_47606(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_47607 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_47607(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__46207 = coll;
var G__46208 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46207,G__46208) : shadow.dom.lazy_native_coll_seq.call(null,G__46207,G__46208));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__46230 = arguments.length;
switch (G__46230) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__46248 = arguments.length;
switch (G__46248) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__46259 = arguments.length;
switch (G__46259) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__46267 = arguments.length;
switch (G__46267) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__46272 = arguments.length;
switch (G__46272) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46310 = arguments.length;
switch (G__46310) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e46317){if((e46317 instanceof Object)){
var e = e46317;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46317;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__46349 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46350 = null;
var count__46351 = (0);
var i__46352 = (0);
while(true){
if((i__46352 < count__46351)){
var el = chunk__46350.cljs$core$IIndexed$_nth$arity$2(null,i__46352);
var handler_47671__$1 = ((function (seq__46349,chunk__46350,count__46351,i__46352,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46349,chunk__46350,count__46351,i__46352,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47671__$1);


var G__47675 = seq__46349;
var G__47676 = chunk__46350;
var G__47677 = count__46351;
var G__47678 = (i__46352 + (1));
seq__46349 = G__47675;
chunk__46350 = G__47676;
count__46351 = G__47677;
i__46352 = G__47678;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46349);
if(temp__5753__auto__){
var seq__46349__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46349__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46349__$1);
var G__47688 = cljs.core.chunk_rest(seq__46349__$1);
var G__47689 = c__4556__auto__;
var G__47690 = cljs.core.count(c__4556__auto__);
var G__47691 = (0);
seq__46349 = G__47688;
chunk__46350 = G__47689;
count__46351 = G__47690;
i__46352 = G__47691;
continue;
} else {
var el = cljs.core.first(seq__46349__$1);
var handler_47693__$1 = ((function (seq__46349,chunk__46350,count__46351,i__46352,el,seq__46349__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46349,chunk__46350,count__46351,i__46352,el,seq__46349__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_47693__$1);


var G__47696 = cljs.core.next(seq__46349__$1);
var G__47697 = null;
var G__47698 = (0);
var G__47699 = (0);
seq__46349 = G__47696;
chunk__46350 = G__47697;
count__46351 = G__47698;
i__46352 = G__47699;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__46370 = arguments.length;
switch (G__46370) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__46386 = cljs.core.seq(events);
var chunk__46387 = null;
var count__46388 = (0);
var i__46389 = (0);
while(true){
if((i__46389 < count__46388)){
var vec__46400 = chunk__46387.cljs$core$IIndexed$_nth$arity$2(null,i__46389);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46400,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47731 = seq__46386;
var G__47732 = chunk__46387;
var G__47733 = count__46388;
var G__47734 = (i__46389 + (1));
seq__46386 = G__47731;
chunk__46387 = G__47732;
count__46388 = G__47733;
i__46389 = G__47734;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46386);
if(temp__5753__auto__){
var seq__46386__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46386__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46386__$1);
var G__47737 = cljs.core.chunk_rest(seq__46386__$1);
var G__47738 = c__4556__auto__;
var G__47739 = cljs.core.count(c__4556__auto__);
var G__47740 = (0);
seq__46386 = G__47737;
chunk__46387 = G__47738;
count__46388 = G__47739;
i__46389 = G__47740;
continue;
} else {
var vec__46406 = cljs.core.first(seq__46386__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46406,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46406,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47744 = cljs.core.next(seq__46386__$1);
var G__47745 = null;
var G__47746 = (0);
var G__47747 = (0);
seq__46386 = G__47744;
chunk__46387 = G__47745;
count__46388 = G__47746;
i__46389 = G__47747;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__46411 = cljs.core.seq(styles);
var chunk__46412 = null;
var count__46413 = (0);
var i__46414 = (0);
while(true){
if((i__46414 < count__46413)){
var vec__46435 = chunk__46412.cljs$core$IIndexed$_nth$arity$2(null,i__46414);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46435,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47749 = seq__46411;
var G__47750 = chunk__46412;
var G__47751 = count__46413;
var G__47752 = (i__46414 + (1));
seq__46411 = G__47749;
chunk__46412 = G__47750;
count__46413 = G__47751;
i__46414 = G__47752;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46411);
if(temp__5753__auto__){
var seq__46411__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46411__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46411__$1);
var G__47753 = cljs.core.chunk_rest(seq__46411__$1);
var G__47754 = c__4556__auto__;
var G__47755 = cljs.core.count(c__4556__auto__);
var G__47756 = (0);
seq__46411 = G__47753;
chunk__46412 = G__47754;
count__46413 = G__47755;
i__46414 = G__47756;
continue;
} else {
var vec__46441 = cljs.core.first(seq__46411__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46441,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46441,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__47759 = cljs.core.next(seq__46411__$1);
var G__47760 = null;
var G__47761 = (0);
var G__47762 = (0);
seq__46411 = G__47759;
chunk__46412 = G__47760;
count__46413 = G__47761;
i__46414 = G__47762;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__46446_47765 = key;
var G__46446_47766__$1 = (((G__46446_47765 instanceof cljs.core.Keyword))?G__46446_47765.fqn:null);
switch (G__46446_47766__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_47788 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_47788,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_47788,"aria-");
}
})())){
el.setAttribute(ks_47788,value);
} else {
(el[ks_47788] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__46476){
var map__46477 = p__46476;
var map__46477__$1 = (((((!((map__46477 == null))))?(((((map__46477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46477):map__46477);
var props = map__46477__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46477__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__46490 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46490,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46490,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46490,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__46493 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__46493,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__46493;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__46508 = arguments.length;
switch (G__46508) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__46524){
var vec__46525 = p__46524;
var seq__46526 = cljs.core.seq(vec__46525);
var first__46527 = cljs.core.first(seq__46526);
var seq__46526__$1 = cljs.core.next(seq__46526);
var nn = first__46527;
var first__46527__$1 = cljs.core.first(seq__46526__$1);
var seq__46526__$2 = cljs.core.next(seq__46526__$1);
var np = first__46527__$1;
var nc = seq__46526__$2;
var node = vec__46525;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46528 = nn;
var G__46529 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46528,G__46529) : create_fn.call(null,G__46528,G__46529));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46531 = nn;
var G__46532 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__46531,G__46532) : create_fn.call(null,G__46531,G__46532));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__46536 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46536,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46536,(1),null);
var seq__46539_47820 = cljs.core.seq(node_children);
var chunk__46540_47821 = null;
var count__46541_47822 = (0);
var i__46542_47823 = (0);
while(true){
if((i__46542_47823 < count__46541_47822)){
var child_struct_47824 = chunk__46540_47821.cljs$core$IIndexed$_nth$arity$2(null,i__46542_47823);
var children_47825 = shadow.dom.dom_node(child_struct_47824);
if(cljs.core.seq_QMARK_(children_47825)){
var seq__46575_47826 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47825));
var chunk__46577_47827 = null;
var count__46578_47828 = (0);
var i__46579_47829 = (0);
while(true){
if((i__46579_47829 < count__46578_47828)){
var child_47849 = chunk__46577_47827.cljs$core$IIndexed$_nth$arity$2(null,i__46579_47829);
if(cljs.core.truth_(child_47849)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47849);


var G__47850 = seq__46575_47826;
var G__47851 = chunk__46577_47827;
var G__47852 = count__46578_47828;
var G__47853 = (i__46579_47829 + (1));
seq__46575_47826 = G__47850;
chunk__46577_47827 = G__47851;
count__46578_47828 = G__47852;
i__46579_47829 = G__47853;
continue;
} else {
var G__47854 = seq__46575_47826;
var G__47855 = chunk__46577_47827;
var G__47856 = count__46578_47828;
var G__47857 = (i__46579_47829 + (1));
seq__46575_47826 = G__47854;
chunk__46577_47827 = G__47855;
count__46578_47828 = G__47856;
i__46579_47829 = G__47857;
continue;
}
} else {
var temp__5753__auto___47858 = cljs.core.seq(seq__46575_47826);
if(temp__5753__auto___47858){
var seq__46575_47859__$1 = temp__5753__auto___47858;
if(cljs.core.chunked_seq_QMARK_(seq__46575_47859__$1)){
var c__4556__auto___47860 = cljs.core.chunk_first(seq__46575_47859__$1);
var G__47861 = cljs.core.chunk_rest(seq__46575_47859__$1);
var G__47862 = c__4556__auto___47860;
var G__47863 = cljs.core.count(c__4556__auto___47860);
var G__47864 = (0);
seq__46575_47826 = G__47861;
chunk__46577_47827 = G__47862;
count__46578_47828 = G__47863;
i__46579_47829 = G__47864;
continue;
} else {
var child_47865 = cljs.core.first(seq__46575_47859__$1);
if(cljs.core.truth_(child_47865)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47865);


var G__47866 = cljs.core.next(seq__46575_47859__$1);
var G__47867 = null;
var G__47868 = (0);
var G__47869 = (0);
seq__46575_47826 = G__47866;
chunk__46577_47827 = G__47867;
count__46578_47828 = G__47868;
i__46579_47829 = G__47869;
continue;
} else {
var G__47870 = cljs.core.next(seq__46575_47859__$1);
var G__47871 = null;
var G__47872 = (0);
var G__47873 = (0);
seq__46575_47826 = G__47870;
chunk__46577_47827 = G__47871;
count__46578_47828 = G__47872;
i__46579_47829 = G__47873;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47825);
}


var G__47878 = seq__46539_47820;
var G__47879 = chunk__46540_47821;
var G__47880 = count__46541_47822;
var G__47881 = (i__46542_47823 + (1));
seq__46539_47820 = G__47878;
chunk__46540_47821 = G__47879;
count__46541_47822 = G__47880;
i__46542_47823 = G__47881;
continue;
} else {
var temp__5753__auto___47882 = cljs.core.seq(seq__46539_47820);
if(temp__5753__auto___47882){
var seq__46539_47883__$1 = temp__5753__auto___47882;
if(cljs.core.chunked_seq_QMARK_(seq__46539_47883__$1)){
var c__4556__auto___47884 = cljs.core.chunk_first(seq__46539_47883__$1);
var G__47885 = cljs.core.chunk_rest(seq__46539_47883__$1);
var G__47886 = c__4556__auto___47884;
var G__47887 = cljs.core.count(c__4556__auto___47884);
var G__47888 = (0);
seq__46539_47820 = G__47885;
chunk__46540_47821 = G__47886;
count__46541_47822 = G__47887;
i__46542_47823 = G__47888;
continue;
} else {
var child_struct_47889 = cljs.core.first(seq__46539_47883__$1);
var children_47890 = shadow.dom.dom_node(child_struct_47889);
if(cljs.core.seq_QMARK_(children_47890)){
var seq__46603_47891 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47890));
var chunk__46605_47892 = null;
var count__46606_47893 = (0);
var i__46607_47894 = (0);
while(true){
if((i__46607_47894 < count__46606_47893)){
var child_47895 = chunk__46605_47892.cljs$core$IIndexed$_nth$arity$2(null,i__46607_47894);
if(cljs.core.truth_(child_47895)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47895);


var G__47896 = seq__46603_47891;
var G__47897 = chunk__46605_47892;
var G__47898 = count__46606_47893;
var G__47899 = (i__46607_47894 + (1));
seq__46603_47891 = G__47896;
chunk__46605_47892 = G__47897;
count__46606_47893 = G__47898;
i__46607_47894 = G__47899;
continue;
} else {
var G__47900 = seq__46603_47891;
var G__47901 = chunk__46605_47892;
var G__47902 = count__46606_47893;
var G__47903 = (i__46607_47894 + (1));
seq__46603_47891 = G__47900;
chunk__46605_47892 = G__47901;
count__46606_47893 = G__47902;
i__46607_47894 = G__47903;
continue;
}
} else {
var temp__5753__auto___47905__$1 = cljs.core.seq(seq__46603_47891);
if(temp__5753__auto___47905__$1){
var seq__46603_47906__$1 = temp__5753__auto___47905__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46603_47906__$1)){
var c__4556__auto___47908 = cljs.core.chunk_first(seq__46603_47906__$1);
var G__47910 = cljs.core.chunk_rest(seq__46603_47906__$1);
var G__47911 = c__4556__auto___47908;
var G__47912 = cljs.core.count(c__4556__auto___47908);
var G__47913 = (0);
seq__46603_47891 = G__47910;
chunk__46605_47892 = G__47911;
count__46606_47893 = G__47912;
i__46607_47894 = G__47913;
continue;
} else {
var child_47915 = cljs.core.first(seq__46603_47906__$1);
if(cljs.core.truth_(child_47915)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47915);


var G__47916 = cljs.core.next(seq__46603_47906__$1);
var G__47917 = null;
var G__47918 = (0);
var G__47919 = (0);
seq__46603_47891 = G__47916;
chunk__46605_47892 = G__47917;
count__46606_47893 = G__47918;
i__46607_47894 = G__47919;
continue;
} else {
var G__47920 = cljs.core.next(seq__46603_47906__$1);
var G__47921 = null;
var G__47922 = (0);
var G__47923 = (0);
seq__46603_47891 = G__47920;
chunk__46605_47892 = G__47921;
count__46606_47893 = G__47922;
i__46607_47894 = G__47923;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47890);
}


var G__47926 = cljs.core.next(seq__46539_47883__$1);
var G__47927 = null;
var G__47928 = (0);
var G__47929 = (0);
seq__46539_47820 = G__47926;
chunk__46540_47821 = G__47927;
count__46541_47822 = G__47928;
i__46542_47823 = G__47929;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46651 = cljs.core.seq(node);
var chunk__46652 = null;
var count__46653 = (0);
var i__46654 = (0);
while(true){
if((i__46654 < count__46653)){
var n = chunk__46652.cljs$core$IIndexed$_nth$arity$2(null,i__46654);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47952 = seq__46651;
var G__47953 = chunk__46652;
var G__47954 = count__46653;
var G__47955 = (i__46654 + (1));
seq__46651 = G__47952;
chunk__46652 = G__47953;
count__46653 = G__47954;
i__46654 = G__47955;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46651);
if(temp__5753__auto__){
var seq__46651__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46651__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46651__$1);
var G__47960 = cljs.core.chunk_rest(seq__46651__$1);
var G__47961 = c__4556__auto__;
var G__47962 = cljs.core.count(c__4556__auto__);
var G__47963 = (0);
seq__46651 = G__47960;
chunk__46652 = G__47961;
count__46653 = G__47962;
i__46654 = G__47963;
continue;
} else {
var n = cljs.core.first(seq__46651__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47972 = cljs.core.next(seq__46651__$1);
var G__47973 = null;
var G__47974 = (0);
var G__47975 = (0);
seq__46651 = G__47972;
chunk__46652 = G__47973;
count__46653 = G__47974;
i__46654 = G__47975;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46708 = arguments.length;
switch (G__46708) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46711 = arguments.length;
switch (G__46711) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46726 = arguments.length;
switch (G__46726) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48009 = arguments.length;
var i__4737__auto___48010 = (0);
while(true){
if((i__4737__auto___48010 < len__4736__auto___48009)){
args__4742__auto__.push((arguments[i__4737__auto___48010]));

var G__48012 = (i__4737__auto___48010 + (1));
i__4737__auto___48010 = G__48012;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46781_48031 = cljs.core.seq(nodes);
var chunk__46782_48032 = null;
var count__46783_48033 = (0);
var i__46784_48034 = (0);
while(true){
if((i__46784_48034 < count__46783_48033)){
var node_48038 = chunk__46782_48032.cljs$core$IIndexed$_nth$arity$2(null,i__46784_48034);
fragment.appendChild(shadow.dom._to_dom(node_48038));


var G__48040 = seq__46781_48031;
var G__48042 = chunk__46782_48032;
var G__48043 = count__46783_48033;
var G__48044 = (i__46784_48034 + (1));
seq__46781_48031 = G__48040;
chunk__46782_48032 = G__48042;
count__46783_48033 = G__48043;
i__46784_48034 = G__48044;
continue;
} else {
var temp__5753__auto___48045 = cljs.core.seq(seq__46781_48031);
if(temp__5753__auto___48045){
var seq__46781_48046__$1 = temp__5753__auto___48045;
if(cljs.core.chunked_seq_QMARK_(seq__46781_48046__$1)){
var c__4556__auto___48047 = cljs.core.chunk_first(seq__46781_48046__$1);
var G__48048 = cljs.core.chunk_rest(seq__46781_48046__$1);
var G__48049 = c__4556__auto___48047;
var G__48050 = cljs.core.count(c__4556__auto___48047);
var G__48051 = (0);
seq__46781_48031 = G__48048;
chunk__46782_48032 = G__48049;
count__46783_48033 = G__48050;
i__46784_48034 = G__48051;
continue;
} else {
var node_48052 = cljs.core.first(seq__46781_48046__$1);
fragment.appendChild(shadow.dom._to_dom(node_48052));


var G__48053 = cljs.core.next(seq__46781_48046__$1);
var G__48054 = null;
var G__48055 = (0);
var G__48056 = (0);
seq__46781_48031 = G__48053;
chunk__46782_48032 = G__48054;
count__46783_48033 = G__48055;
i__46784_48034 = G__48056;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46750){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46750));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46809_48061 = cljs.core.seq(scripts);
var chunk__46810_48062 = null;
var count__46811_48063 = (0);
var i__46812_48064 = (0);
while(true){
if((i__46812_48064 < count__46811_48063)){
var vec__46844_48065 = chunk__46810_48062.cljs$core$IIndexed$_nth$arity$2(null,i__46812_48064);
var script_tag_48066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46844_48065,(0),null);
var script_body_48067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46844_48065,(1),null);
eval(script_body_48067);


var G__48069 = seq__46809_48061;
var G__48070 = chunk__46810_48062;
var G__48071 = count__46811_48063;
var G__48072 = (i__46812_48064 + (1));
seq__46809_48061 = G__48069;
chunk__46810_48062 = G__48070;
count__46811_48063 = G__48071;
i__46812_48064 = G__48072;
continue;
} else {
var temp__5753__auto___48074 = cljs.core.seq(seq__46809_48061);
if(temp__5753__auto___48074){
var seq__46809_48076__$1 = temp__5753__auto___48074;
if(cljs.core.chunked_seq_QMARK_(seq__46809_48076__$1)){
var c__4556__auto___48077 = cljs.core.chunk_first(seq__46809_48076__$1);
var G__48078 = cljs.core.chunk_rest(seq__46809_48076__$1);
var G__48079 = c__4556__auto___48077;
var G__48080 = cljs.core.count(c__4556__auto___48077);
var G__48081 = (0);
seq__46809_48061 = G__48078;
chunk__46810_48062 = G__48079;
count__46811_48063 = G__48080;
i__46812_48064 = G__48081;
continue;
} else {
var vec__46848_48082 = cljs.core.first(seq__46809_48076__$1);
var script_tag_48083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46848_48082,(0),null);
var script_body_48084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46848_48082,(1),null);
eval(script_body_48084);


var G__48086 = cljs.core.next(seq__46809_48076__$1);
var G__48087 = null;
var G__48088 = (0);
var G__48089 = (0);
seq__46809_48061 = G__48086;
chunk__46810_48062 = G__48087;
count__46811_48063 = G__48088;
i__46812_48064 = G__48089;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46851){
var vec__46852 = p__46851;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46852,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46852,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46866 = arguments.length;
switch (G__46866) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46916 = cljs.core.seq(style_keys);
var chunk__46917 = null;
var count__46918 = (0);
var i__46919 = (0);
while(true){
if((i__46919 < count__46918)){
var it = chunk__46917.cljs$core$IIndexed$_nth$arity$2(null,i__46919);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48118 = seq__46916;
var G__48119 = chunk__46917;
var G__48120 = count__46918;
var G__48121 = (i__46919 + (1));
seq__46916 = G__48118;
chunk__46917 = G__48119;
count__46918 = G__48120;
i__46919 = G__48121;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46916);
if(temp__5753__auto__){
var seq__46916__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46916__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46916__$1);
var G__48131 = cljs.core.chunk_rest(seq__46916__$1);
var G__48133 = c__4556__auto__;
var G__48134 = cljs.core.count(c__4556__auto__);
var G__48135 = (0);
seq__46916 = G__48131;
chunk__46917 = G__48133;
count__46918 = G__48134;
i__46919 = G__48135;
continue;
} else {
var it = cljs.core.first(seq__46916__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48141 = cljs.core.next(seq__46916__$1);
var G__48142 = null;
var G__48143 = (0);
var G__48144 = (0);
seq__46916 = G__48141;
chunk__46917 = G__48142;
count__46918 = G__48143;
i__46919 = G__48144;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46937,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46967 = k46937;
var G__46967__$1 = (((G__46967 instanceof cljs.core.Keyword))?G__46967.fqn:null);
switch (G__46967__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46937,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46978){
var vec__46981 = p__46978;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46981,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46981,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46936){
var self__ = this;
var G__46936__$1 = this;
return (new cljs.core.RecordIter((0),G__46936__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46938,other46939){
var self__ = this;
var this46938__$1 = this;
return (((!((other46939 == null)))) && ((this46938__$1.constructor === other46939.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46938__$1.x,other46939.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46938__$1.y,other46939.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46938__$1.__extmap,other46939.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46936){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47006 = cljs.core.keyword_identical_QMARK_;
var expr__47007 = k__4388__auto__;
if(cljs.core.truth_((pred__47006.cljs$core$IFn$_invoke$arity$2 ? pred__47006.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__47007) : pred__47006.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__47007)))){
return (new shadow.dom.Coordinate(G__46936,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47006.cljs$core$IFn$_invoke$arity$2 ? pred__47006.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__47007) : pred__47006.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__47007)))){
return (new shadow.dom.Coordinate(self__.x,G__46936,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46936),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46936){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46936,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46950){
var extmap__4419__auto__ = (function (){var G__47077 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46950,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46950)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47077);
} else {
return G__47077;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46950),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46950),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47125,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47140 = k47125;
var G__47140__$1 = (((G__47140 instanceof cljs.core.Keyword))?G__47140.fqn:null);
switch (G__47140__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47125,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47143){
var vec__47144 = p__47143;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47144,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47144,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47124){
var self__ = this;
var G__47124__$1 = this;
return (new cljs.core.RecordIter((0),G__47124__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47126,other47127){
var self__ = this;
var this47126__$1 = this;
return (((!((other47127 == null)))) && ((this47126__$1.constructor === other47127.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47126__$1.w,other47127.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47126__$1.h,other47127.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47126__$1.__extmap,other47127.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47124){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47179 = cljs.core.keyword_identical_QMARK_;
var expr__47180 = k__4388__auto__;
if(cljs.core.truth_((pred__47179.cljs$core$IFn$_invoke$arity$2 ? pred__47179.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__47180) : pred__47179.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__47180)))){
return (new shadow.dom.Size(G__47124,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47179.cljs$core$IFn$_invoke$arity$2 ? pred__47179.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__47180) : pred__47179.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__47180)))){
return (new shadow.dom.Size(self__.w,G__47124,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47124),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47124){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47124,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47132){
var extmap__4419__auto__ = (function (){var G__47197 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47132,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47132)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47197);
} else {
return G__47197;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47132),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47132),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__48414 = (i + (1));
var G__48415 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48414;
ret = G__48415;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47262){
var vec__47263 = p__47262;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47263,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47263,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47273 = arguments.length;
switch (G__47273) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__48432 = ps;
var G__48433 = (i + (1));
el__$1 = G__48432;
i = G__48433;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47356 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47356,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47356,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47356,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47359_48453 = cljs.core.seq(props);
var chunk__47360_48454 = null;
var count__47361_48455 = (0);
var i__47362_48456 = (0);
while(true){
if((i__47362_48456 < count__47361_48455)){
var vec__47384_48457 = chunk__47360_48454.cljs$core$IIndexed$_nth$arity$2(null,i__47362_48456);
var k_48458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47384_48457,(0),null);
var v_48459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47384_48457,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_48458);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48458),v_48459);


var G__48461 = seq__47359_48453;
var G__48462 = chunk__47360_48454;
var G__48463 = count__47361_48455;
var G__48464 = (i__47362_48456 + (1));
seq__47359_48453 = G__48461;
chunk__47360_48454 = G__48462;
count__47361_48455 = G__48463;
i__47362_48456 = G__48464;
continue;
} else {
var temp__5753__auto___48465 = cljs.core.seq(seq__47359_48453);
if(temp__5753__auto___48465){
var seq__47359_48470__$1 = temp__5753__auto___48465;
if(cljs.core.chunked_seq_QMARK_(seq__47359_48470__$1)){
var c__4556__auto___48471 = cljs.core.chunk_first(seq__47359_48470__$1);
var G__48472 = cljs.core.chunk_rest(seq__47359_48470__$1);
var G__48473 = c__4556__auto___48471;
var G__48474 = cljs.core.count(c__4556__auto___48471);
var G__48475 = (0);
seq__47359_48453 = G__48472;
chunk__47360_48454 = G__48473;
count__47361_48455 = G__48474;
i__47362_48456 = G__48475;
continue;
} else {
var vec__47393_48476 = cljs.core.first(seq__47359_48470__$1);
var k_48477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47393_48476,(0),null);
var v_48478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47393_48476,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_48477);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48477),v_48478);


var G__48481 = cljs.core.next(seq__47359_48470__$1);
var G__48482 = null;
var G__48483 = (0);
var G__48484 = (0);
seq__47359_48453 = G__48481;
chunk__47360_48454 = G__48482;
count__47361_48455 = G__48483;
i__47362_48456 = G__48484;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__47397 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47397,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47397,(1),null);
var seq__47411_48487 = cljs.core.seq(node_children);
var chunk__47413_48488 = null;
var count__47414_48489 = (0);
var i__47415_48490 = (0);
while(true){
if((i__47415_48490 < count__47414_48489)){
var child_struct_48491 = chunk__47413_48488.cljs$core$IIndexed$_nth$arity$2(null,i__47415_48490);
if((!((child_struct_48491 == null)))){
if(typeof child_struct_48491 === 'string'){
var text_48492 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48492),child_struct_48491].join(''));
} else {
var children_48494 = shadow.dom.svg_node(child_struct_48491);
if(cljs.core.seq_QMARK_(children_48494)){
var seq__47470_48497 = cljs.core.seq(children_48494);
var chunk__47472_48498 = null;
var count__47473_48499 = (0);
var i__47474_48500 = (0);
while(true){
if((i__47474_48500 < count__47473_48499)){
var child_48502 = chunk__47472_48498.cljs$core$IIndexed$_nth$arity$2(null,i__47474_48500);
if(cljs.core.truth_(child_48502)){
node.appendChild(child_48502);


var G__48503 = seq__47470_48497;
var G__48504 = chunk__47472_48498;
var G__48505 = count__47473_48499;
var G__48506 = (i__47474_48500 + (1));
seq__47470_48497 = G__48503;
chunk__47472_48498 = G__48504;
count__47473_48499 = G__48505;
i__47474_48500 = G__48506;
continue;
} else {
var G__48507 = seq__47470_48497;
var G__48508 = chunk__47472_48498;
var G__48509 = count__47473_48499;
var G__48510 = (i__47474_48500 + (1));
seq__47470_48497 = G__48507;
chunk__47472_48498 = G__48508;
count__47473_48499 = G__48509;
i__47474_48500 = G__48510;
continue;
}
} else {
var temp__5753__auto___48513 = cljs.core.seq(seq__47470_48497);
if(temp__5753__auto___48513){
var seq__47470_48514__$1 = temp__5753__auto___48513;
if(cljs.core.chunked_seq_QMARK_(seq__47470_48514__$1)){
var c__4556__auto___48515 = cljs.core.chunk_first(seq__47470_48514__$1);
var G__48516 = cljs.core.chunk_rest(seq__47470_48514__$1);
var G__48517 = c__4556__auto___48515;
var G__48518 = cljs.core.count(c__4556__auto___48515);
var G__48519 = (0);
seq__47470_48497 = G__48516;
chunk__47472_48498 = G__48517;
count__47473_48499 = G__48518;
i__47474_48500 = G__48519;
continue;
} else {
var child_48520 = cljs.core.first(seq__47470_48514__$1);
if(cljs.core.truth_(child_48520)){
node.appendChild(child_48520);


var G__48521 = cljs.core.next(seq__47470_48514__$1);
var G__48522 = null;
var G__48523 = (0);
var G__48524 = (0);
seq__47470_48497 = G__48521;
chunk__47472_48498 = G__48522;
count__47473_48499 = G__48523;
i__47474_48500 = G__48524;
continue;
} else {
var G__48525 = cljs.core.next(seq__47470_48514__$1);
var G__48526 = null;
var G__48527 = (0);
var G__48528 = (0);
seq__47470_48497 = G__48525;
chunk__47472_48498 = G__48526;
count__47473_48499 = G__48527;
i__47474_48500 = G__48528;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48494);
}
}


var G__48529 = seq__47411_48487;
var G__48530 = chunk__47413_48488;
var G__48531 = count__47414_48489;
var G__48532 = (i__47415_48490 + (1));
seq__47411_48487 = G__48529;
chunk__47413_48488 = G__48530;
count__47414_48489 = G__48531;
i__47415_48490 = G__48532;
continue;
} else {
var G__48533 = seq__47411_48487;
var G__48534 = chunk__47413_48488;
var G__48535 = count__47414_48489;
var G__48536 = (i__47415_48490 + (1));
seq__47411_48487 = G__48533;
chunk__47413_48488 = G__48534;
count__47414_48489 = G__48535;
i__47415_48490 = G__48536;
continue;
}
} else {
var temp__5753__auto___48537 = cljs.core.seq(seq__47411_48487);
if(temp__5753__auto___48537){
var seq__47411_48538__$1 = temp__5753__auto___48537;
if(cljs.core.chunked_seq_QMARK_(seq__47411_48538__$1)){
var c__4556__auto___48539 = cljs.core.chunk_first(seq__47411_48538__$1);
var G__48540 = cljs.core.chunk_rest(seq__47411_48538__$1);
var G__48541 = c__4556__auto___48539;
var G__48542 = cljs.core.count(c__4556__auto___48539);
var G__48543 = (0);
seq__47411_48487 = G__48540;
chunk__47413_48488 = G__48541;
count__47414_48489 = G__48542;
i__47415_48490 = G__48543;
continue;
} else {
var child_struct_48544 = cljs.core.first(seq__47411_48538__$1);
if((!((child_struct_48544 == null)))){
if(typeof child_struct_48544 === 'string'){
var text_48545 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48545),child_struct_48544].join(''));
} else {
var children_48546 = shadow.dom.svg_node(child_struct_48544);
if(cljs.core.seq_QMARK_(children_48546)){
var seq__47484_48547 = cljs.core.seq(children_48546);
var chunk__47486_48548 = null;
var count__47487_48549 = (0);
var i__47488_48550 = (0);
while(true){
if((i__47488_48550 < count__47487_48549)){
var child_48554 = chunk__47486_48548.cljs$core$IIndexed$_nth$arity$2(null,i__47488_48550);
if(cljs.core.truth_(child_48554)){
node.appendChild(child_48554);


var G__48556 = seq__47484_48547;
var G__48557 = chunk__47486_48548;
var G__48558 = count__47487_48549;
var G__48559 = (i__47488_48550 + (1));
seq__47484_48547 = G__48556;
chunk__47486_48548 = G__48557;
count__47487_48549 = G__48558;
i__47488_48550 = G__48559;
continue;
} else {
var G__48560 = seq__47484_48547;
var G__48561 = chunk__47486_48548;
var G__48562 = count__47487_48549;
var G__48563 = (i__47488_48550 + (1));
seq__47484_48547 = G__48560;
chunk__47486_48548 = G__48561;
count__47487_48549 = G__48562;
i__47488_48550 = G__48563;
continue;
}
} else {
var temp__5753__auto___48565__$1 = cljs.core.seq(seq__47484_48547);
if(temp__5753__auto___48565__$1){
var seq__47484_48566__$1 = temp__5753__auto___48565__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47484_48566__$1)){
var c__4556__auto___48567 = cljs.core.chunk_first(seq__47484_48566__$1);
var G__48568 = cljs.core.chunk_rest(seq__47484_48566__$1);
var G__48569 = c__4556__auto___48567;
var G__48570 = cljs.core.count(c__4556__auto___48567);
var G__48571 = (0);
seq__47484_48547 = G__48568;
chunk__47486_48548 = G__48569;
count__47487_48549 = G__48570;
i__47488_48550 = G__48571;
continue;
} else {
var child_48572 = cljs.core.first(seq__47484_48566__$1);
if(cljs.core.truth_(child_48572)){
node.appendChild(child_48572);


var G__48573 = cljs.core.next(seq__47484_48566__$1);
var G__48574 = null;
var G__48575 = (0);
var G__48576 = (0);
seq__47484_48547 = G__48573;
chunk__47486_48548 = G__48574;
count__47487_48549 = G__48575;
i__47488_48550 = G__48576;
continue;
} else {
var G__48579 = cljs.core.next(seq__47484_48566__$1);
var G__48580 = null;
var G__48581 = (0);
var G__48582 = (0);
seq__47484_48547 = G__48579;
chunk__47486_48548 = G__48580;
count__47487_48549 = G__48581;
i__47488_48550 = G__48582;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48546);
}
}


var G__48584 = cljs.core.next(seq__47411_48538__$1);
var G__48585 = null;
var G__48586 = (0);
var G__48587 = (0);
seq__47411_48487 = G__48584;
chunk__47413_48488 = G__48585;
count__47414_48489 = G__48586;
i__47415_48490 = G__48587;
continue;
} else {
var G__48588 = cljs.core.next(seq__47411_48538__$1);
var G__48589 = null;
var G__48590 = (0);
var G__48591 = (0);
seq__47411_48487 = G__48588;
chunk__47413_48488 = G__48589;
count__47414_48489 = G__48590;
i__47415_48490 = G__48591;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48594 = arguments.length;
var i__4737__auto___48595 = (0);
while(true){
if((i__4737__auto___48595 < len__4736__auto___48594)){
args__4742__auto__.push((arguments[i__4737__auto___48595]));

var G__48597 = (i__4737__auto___48595 + (1));
i__4737__auto___48595 = G__48597;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47517){
var G__47518 = cljs.core.first(seq47517);
var seq47517__$1 = cljs.core.next(seq47517);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47518,seq47517__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__47520 = arguments.length;
switch (G__47520) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__42554__auto___48614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42555__auto__ = (function (){var switch__42399__auto__ = (function (state_47562){
var state_val_47563 = (state_47562[(1)]);
if((state_val_47563 === (1))){
var state_47562__$1 = state_47562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47562__$1,(2),once_or_cleanup);
} else {
if((state_val_47563 === (2))){
var inst_47559 = (state_47562[(2)]);
var inst_47560 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47562__$1 = (function (){var statearr_47566 = state_47562;
(statearr_47566[(7)] = inst_47559);

return statearr_47566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47562__$1,inst_47560);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42400__auto__ = null;
var shadow$dom$state_machine__42400__auto____0 = (function (){
var statearr_47568 = [null,null,null,null,null,null,null,null];
(statearr_47568[(0)] = shadow$dom$state_machine__42400__auto__);

(statearr_47568[(1)] = (1));

return statearr_47568;
});
var shadow$dom$state_machine__42400__auto____1 = (function (state_47562){
while(true){
var ret_value__42401__auto__ = (function (){try{while(true){
var result__42402__auto__ = switch__42399__auto__(state_47562);
if(cljs.core.keyword_identical_QMARK_(result__42402__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42402__auto__;
}
break;
}
}catch (e47570){var ex__42403__auto__ = e47570;
var statearr_47571_48620 = state_47562;
(statearr_47571_48620[(2)] = ex__42403__auto__);


if(cljs.core.seq((state_47562[(4)]))){
var statearr_47573_48622 = state_47562;
(statearr_47573_48622[(1)] = cljs.core.first((state_47562[(4)])));

} else {
throw ex__42403__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42401__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48624 = state_47562;
state_47562 = G__48624;
continue;
} else {
return ret_value__42401__auto__;
}
break;
}
});
shadow$dom$state_machine__42400__auto__ = function(state_47562){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42400__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42400__auto____1.call(this,state_47562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42400__auto____0;
shadow$dom$state_machine__42400__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42400__auto____1;
return shadow$dom$state_machine__42400__auto__;
})()
})();
var state__42556__auto__ = (function (){var statearr_47575 = f__42555__auto__();
(statearr_47575[(6)] = c__42554__auto___48614);

return statearr_47575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42556__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
