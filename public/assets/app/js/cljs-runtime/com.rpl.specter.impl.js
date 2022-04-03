goog.provide('com.rpl.specter.impl');
com.rpl.specter.impl.NONE = new cljs.core.Keyword("com.rpl.specter.impl","NONE","com.rpl.specter.impl/NONE",1085349969);
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SPY:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))], 0));

return e;
});
com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54207 = arguments.length;
var i__4737__auto___54208 = (0);
while(true){
if((i__4737__auto___54208 < len__4736__auto___54207)){
args__4742__auto__.push((arguments[i__4737__auto___54208]));

var G__54209 = (i__4737__auto___54208 + (1));
i__4737__auto___54208 = G__54209;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.smart_str_STAR_,elems));
}));

(com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq49325){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49325));
}));

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__54210 = null;
var G__54210__0 = (function (){
return v;
});
var G__54210__1 = (function (a1){
return v;
});
var G__54210__2 = (function (a1,a2){
return v;
});
var G__54210__3 = (function (a1,a2,a3){
return v;
});
var G__54210__4 = (function (a1,a2,a3,a4){
return v;
});
var G__54210__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__54210__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__54210__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__54210__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__54210__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__54210__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__54210__11 = (function() { 
var G__54238__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__54238 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__54240__i = 0, G__54240__a = new Array(arguments.length -  10);
while (G__54240__i < G__54240__a.length) {G__54240__a[G__54240__i] = arguments[G__54240__i + 10]; ++G__54240__i;}
  r = new cljs.core.IndexedSeq(G__54240__a,0,null);
} 
return G__54238__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__54238.cljs$lang$maxFixedArity = 10;
G__54238.cljs$lang$applyTo = (function (arglist__54242){
var a1 = cljs.core.first(arglist__54242);
arglist__54242 = cljs.core.next(arglist__54242);
var a2 = cljs.core.first(arglist__54242);
arglist__54242 = cljs.core.next(arglist__54242);
var a3 = cljs.core.first(arglist__54242);
arglist__54242 = cljs.core.next(arglist__54242);
var a4 = cljs.core.first(arglist__54242);
arglist__54242 = cljs.core.next(arglist__54242);
var a5 = cljs.core.first(arglist__54242);
arglist__54242 = cljs.core.next(arglist__54242);
var a6 = cljs.core.first(arglist__54242);
arglist__54242 = cljs.core.next(arglist__54242);
var a7 = cljs.core.first(arglist__54242);
arglist__54242 = cljs.core.next(arglist__54242);
var a8 = cljs.core.first(arglist__54242);
arglist__54242 = cljs.core.next(arglist__54242);
var a9 = cljs.core.first(arglist__54242);
arglist__54242 = cljs.core.next(arglist__54242);
var a10 = cljs.core.first(arglist__54242);
var r = cljs.core.rest(arglist__54242);
return G__54238__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__54238.cljs$core$IFn$_invoke$arity$variadic = G__54238__delegate;
return G__54238;
})()
;
G__54210 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__54210__0.call(this);
case 1:
return G__54210__1.call(this,a1);
case 2:
return G__54210__2.call(this,a1,a2);
case 3:
return G__54210__3.call(this,a1,a2,a3);
case 4:
return G__54210__4.call(this,a1,a2,a3,a4);
case 5:
return G__54210__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__54210__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__54210__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__54210__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__54210__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__54210__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__54252 = null;
if (arguments.length > 10) {
var G__54253__i = 0, G__54253__a = new Array(arguments.length -  10);
while (G__54253__i < G__54253__a.length) {G__54253__a[G__54253__i] = arguments[G__54253__i + 10]; ++G__54253__i;}
G__54252 = new cljs.core.IndexedSeq(G__54253__a,0,null);
}
return G__54210__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__54252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54210.cljs$lang$maxFixedArity = 10;
G__54210.cljs$lang$applyTo = G__54210__11.cljs$lang$applyTo;
G__54210.cljs$core$IFn$_invoke$arity$0 = G__54210__0;
G__54210.cljs$core$IFn$_invoke$arity$1 = G__54210__1;
G__54210.cljs$core$IFn$_invoke$arity$2 = G__54210__2;
G__54210.cljs$core$IFn$_invoke$arity$3 = G__54210__3;
G__54210.cljs$core$IFn$_invoke$arity$4 = G__54210__4;
G__54210.cljs$core$IFn$_invoke$arity$5 = G__54210__5;
G__54210.cljs$core$IFn$_invoke$arity$6 = G__54210__6;
G__54210.cljs$core$IFn$_invoke$arity$7 = G__54210__7;
G__54210.cljs$core$IFn$_invoke$arity$8 = G__54210__8;
G__54210.cljs$core$IFn$_invoke$arity$9 = G__54210__9;
G__54210.cljs$core$IFn$_invoke$arity$10 = G__54210__10;
G__54210.cljs$core$IFn$_invoke$arity$variadic = G__54210__11.cljs$core$IFn$_invoke$arity$variadic;
return G__54210;
})()
});
com.rpl.specter.impl.throw_illegal_STAR_ = (function com$rpl$specter$impl$throw_illegal_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54255 = arguments.length;
var i__4737__auto___54256 = (0);
while(true){
if((i__4737__auto___54256 < len__4736__auto___54255)){
args__4742__auto__.push((arguments[i__4737__auto___54256]));

var G__54257 = (i__4737__auto___54256 + (1));
i__4737__auto___54256 = G__54257;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)));
}));

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$applyTo = (function (seq49338){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49338));
}));

com.rpl.specter.impl.cljs_analyzer_macroexpand_1 = (function com$rpl$specter$impl$cljs_analyzer_macroexpand_1(){
return cljs.analyzer.macroexpand_1;
});
com.rpl.specter.impl.clj_macroexpand_all = (function com$rpl$specter$impl$clj_macroexpand_all(form){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["not implemented"], 0));
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["intern not supported in ClojureScript"], 0));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__4626__auto__ = cljs.core.system_time();
var ret__4627__auto__ = (function (){var n__4613__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__4613__auto__)){
(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null));

var G__54262 = (_ + (1));
_ = G__54262;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__4626__auto__).toFixed((6)))," msecs"].join('')], 0));

return ret__4627__auto__;
});
com.rpl.specter.impl.exec_select_STAR_ = (function com$rpl$specter$impl$exec_select_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4(null,vals,structure,next_fn);
});
com.rpl.specter.impl.exec_transform_STAR_ = (function com$rpl$specter$impl$exec_transform_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4(null,vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

var com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_54264 = (function (paths){
var x__4428__auto__ = (((paths == null))?null:paths);
var m__4429__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4429__auto__.call(null,paths));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.do_comp_paths["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4426__auto__.call(null,paths));
} else {
throw cljs.core.missing_protocol("PathComposer.do-comp-paths",paths);
}
}
});
com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if((((!((paths == null)))) && ((!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
return com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_54264(paths);
}
});

com.rpl.specter.impl.rich_nav_QMARK_ = (function com$rpl$specter$impl$rich_nav_QMARK_(n){
if((!((n == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === n.com$rpl$specter$protocols$RichNavigator$)))){
return true;
} else {
if((!n.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
}
});
com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(p){
if(com.rpl.specter.impl.rich_nav_QMARK_(p)){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths(p);
}
});
com.rpl.specter.impl.coerce_object = (function com$rpl$specter$impl$coerce_object(this$){
if(com.rpl.specter.impl.rich_nav_QMARK_(this$)){
return this$;
} else {
if((((!((this$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.com$rpl$specter$protocols$ImplicitNav$))))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$))){
return com.rpl.specter.protocols.implicit_nav(this$);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not a navigator: ",this$," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(this$)], 0))], 0));

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

var com$rpl$specter$impl$CoercePath$coerce_path$dyn_54272 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.coerce_path["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoercePath.coerce-path",this$);
}
}
});
com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
return com$rpl$specter$impl$CoercePath$coerce_path$dyn_54272(this$);
}
});

goog.object.set(com.rpl.specter.impl.CoercePath,"null",true);

goog.object.set(com.rpl.specter.impl.coerce_path,"null",(function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.do_comp_paths(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,this$__$1));
}));

goog.object.set(com.rpl.specter.impl.CoercePath,"_",true);

goog.object.set(com.rpl.specter.impl.coerce_path,"_",(function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));
com.rpl.specter.impl.STAY_STAR_ = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49392 = (function (meta49393){
this.meta49393 = meta49393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49394,meta49393__$1){
var self__ = this;
var _49394__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49392(meta49393__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49394){
var self__ = this;
var _49394__$1 = this;
return self__.meta49393;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49392.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl49392.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49392.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49393","meta49393",-307523353,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49392.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49392.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49392");

(com.rpl.specter.impl.t_com$rpl$specter$impl49392.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49392");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49392.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49392 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl49392(meta49393){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49392(meta49393));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49392(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49422 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49422 = (function (nav1,nav2,meta49423){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta49423 = meta49423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49424,meta49423__$1){
var self__ = this;
var _49424__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49422(self__.nav1,self__.nav2,meta49423__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49424){
var self__ = this;
var _49424__$1 = this;
return self__.meta49423;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49422.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl49422.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49422.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta49423","meta49423",-1576081649,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49422.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49422.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49422");

(com.rpl.specter.impl.t_com$rpl$specter$impl49422.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49422");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49422.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49422 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl49422(nav1__$1,nav2__$1,meta49423){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49422(nav1__$1,nav2__$1,meta49423));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49422(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(com.rpl.specter.impl.PathComposer,"null",true);

goog.object.set(com.rpl.specter.impl.do_comp_paths,"null",(function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

goog.object.set(com.rpl.specter.impl.PathComposer,"_",true);

goog.object.set(com.rpl.specter.impl.do_comp_paths,"_",(function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 = (function (navigators){
var navigators__$1 = this;
var coerced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.coerce_path,navigators__$1);
if(cljs.core.empty_QMARK_(coerced)){
return com.rpl.specter.impl.STAY_STAR_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coerced))){
return cljs.core.first(coerced);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.combine_two_navs,coerced);

}
}
}));

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

var com$rpl$specter$impl$PMutableCell$set_cell$dyn_54310 = (function (cell,x){
var x__4428__auto__ = (((cell == null))?null:cell);
var m__4429__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4429__auto__.call(null,cell,x));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.set_cell["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4426__auto__.call(null,cell,x));
} else {
throw cljs.core.missing_protocol("PMutableCell.set_cell",cell);
}
}
});
com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((((!((cell == null)))) && ((!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
return com$rpl$specter$impl$PMutableCell$set_cell$dyn_54310(cell,x);
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
});
(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (self__.q = x);
}));

(com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
}));

(com.rpl.specter.impl.MutableCell.cljs$lang$type = true);

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell");

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/MutableCell");
}));

/**
 * Positional factory function for com.rpl.specter.impl/MutableCell.
 */
com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var G__49520 = arguments.length;
switch (G__49520) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
}));

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
}));

(com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1);

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell(cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = (function (){var G__49530 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__49530) : afn.call(null,G__49530));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null,structure__$1));
} else {
var G__49533 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__49533) : result_fn.call(null,G__49533));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});
com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49549 = (function (apath,structure,meta49550){
this.apath = apath;
this.structure = structure;
this.meta49550 = meta49550;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49551,meta49550__$1){
var self__ = this;
var _49551__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49549(self__.apath,self__.structure,meta49550__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49551){
var self__ = this;
var _49551__$1 = this;
return self__.meta49550;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49549.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49549.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(start);
com.rpl.specter.impl.compiled_traverse_STAR_(self__.apath,(function (elem){
var curr = com.rpl.specter.impl.get_cell(cell);
var newv = (afn.cljs$core$IFn$_invoke$arity$2 ? afn.cljs$core$IFn$_invoke$arity$2(curr,elem) : afn.call(null,curr,elem));
com.rpl.specter.impl.set_cell_BANG_(cell,newv);

return newv;
}),self__.structure);

return com.rpl.specter.impl.get_cell(cell);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta49550","meta49550",56448403,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49549.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49549.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49549");

(com.rpl.specter.impl.t_com$rpl$specter$impl49549.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49549");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49549.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49549 = (function com$rpl$specter$impl$do_compiled_traverse_STAR__$___GT_t_com$rpl$specter$impl49549(apath__$1,structure__$1,meta49550){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49549(apath__$1,structure__$1,meta49550));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49549(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.call_reduce_interface = (function com$rpl$specter$impl$call_reduce_interface(traverser,afn,start){
return traverser.cljs$core$IReduce$_reduce$arity$3(null,afn,start);
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49558 = (function (apath,structure,traverser,meta49559){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta49559 = meta49559;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49560,meta49559__$1){
var self__ = this;
var _49560__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49558(self__.apath,self__.structure,self__.traverser,meta49559__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49560){
var self__ = this;
var _49560__$1 = this;
return self__.meta49559;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49558.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49558.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = com.rpl.specter.impl.call_reduce_interface(self__.traverser,afn,start);
return cljs.core.unreduced(res);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"traverser","traverser",1631431381,null),new cljs.core.Symbol(null,"meta49559","meta49559",414646128,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49558.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49558.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49558");

(com.rpl.specter.impl.t_com$rpl$specter$impl49558.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49558");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49558.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49558 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl49558(apath__$1,structure__$1,traverser__$1,meta49559){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49558(apath__$1,structure__$1,traverser__$1,meta49559));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49558(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__54367 = null;
var G__54367__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__54367__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__54367__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null,r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__54367 = function(result,input){
switch(arguments.length){
case 0:
return G__54367__0.call(this);
case 1:
return G__54367__1.call(this,result);
case 2:
return G__54367__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__54367.cljs$core$IFn$_invoke$arity$0 = G__54367__0;
G__54367.cljs$core$IFn$_invoke$arity$1 = G__54367__1;
G__54367.cljs$core$IFn$_invoke$arity$2 = G__54367__2;
return G__54367;
})()
});
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
return com.rpl.specter.impl.set_cell_BANG_(res,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(curr,structure__$1));
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

return cljs.core.persistent_BANG_(com.rpl.specter.impl.get_cell(res));
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((com.rpl.specter.impl.NONE === ret)){
com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Found no elements for select-one! on ",structure], 0));
} else {
}

return ret;
});
com.rpl.specter.impl.compiled_select_any_STAR_ = (function com$rpl$specter$impl$compiled_select_any_STAR_(var_args){
var G__49633 = arguments.length;
switch (G__49633) {
case 2:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (path,structure){
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(path,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (path,vals,structure){
return cljs.core.unreduced(com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,cljs.core.reduced,vals,structure));
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$lang$maxFixedArity = 3);

com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
var ret = com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_ = (function com$rpl$specter$impl$compiled_selected_any_QMARK__STAR_(path,structure){
return (!((com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure))));
});
com.rpl.specter.impl.terminal_STAR_ = (function com$rpl$specter$impl$terminal_STAR_(afn,vals,structure){
if((vals === cljs.core.PersistentVector.EMPTY)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,structure));
}
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,(function (vals,structure__$1){
return com.rpl.specter.impl.terminal_STAR_(transform_fn,vals,structure__$1);
}));
});
com.rpl.specter.impl.compiled_vtransform_STAR_ = (function com$rpl$specter$impl$compiled_vtransform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,transform_fn);
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return (((f instanceof cljs.core.LazySeq)) || (cljs.core.list_QMARK_(f)));
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
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49669,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49682 = k49669;
var G__49682__$1 = (((G__49682 instanceof cljs.core.Keyword))?G__49682.fqn:null);
switch (G__49682__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49669,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49685){
var vec__49686 = p__49685;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49686,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49686,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49668){
var self__ = this;
var G__49668__$1 = this;
return (new cljs.core.RecordIter((0),G__49668__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49670,other49671){
var self__ = this;
var this49670__$1 = this;
return (((!((other49671 == null)))) && ((this49670__$1.constructor === other49671.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49670__$1.val,other49671.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49670__$1.sym,other49671.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49670__$1.__extmap,other49671.__extmap)));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49668){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49748 = cljs.core.keyword_identical_QMARK_;
var expr__49749 = k__4388__auto__;
if(cljs.core.truth_((pred__49748.cljs$core$IFn$_invoke$arity$2 ? pred__49748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__49749) : pred__49748.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__49749)))){
return (new com.rpl.specter.impl.LocalSym(G__49668,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49748.cljs$core$IFn$_invoke$arity$2 ? pred__49748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__49749) : pred__49748.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__49749)))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__49668,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49668),null));
}
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49668){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__49668,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$type = true);

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalSym",null,(1),null));
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LocalSym");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalSym.
 */
com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalSym, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__49673){
var extmap__4419__auto__ = (function (){var G__49774 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49673,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__49673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49774);
} else {
return G__49774;
}
})();
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__49673),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__49673),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
com.rpl.specter.impl.VarUse = (function (val,avar,sym,__meta,__extmap,__hash){
this.val = val;
this.avar = avar;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49776,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49793 = k49776;
var G__49793__$1 = (((G__49793 instanceof cljs.core.Keyword))?G__49793.fqn:null);
switch (G__49793__$1) {
case "val":
return self__.val;

break;
case "avar":
return self__.avar;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49776,else__4383__auto__);

}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49809){
var vec__49810 = p__49809;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49810,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49810,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49775){
var self__ = this;
var G__49775__$1 = this;
return (new cljs.core.RecordIter((0),G__49775__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49777,other49778){
var self__ = this;
var this49777__$1 = this;
return (((!((other49778 == null)))) && ((this49777__$1.constructor === other49778.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49777__$1.val,other49778.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49777__$1.avar,other49778.avar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49777__$1.sym,other49778.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49777__$1.__extmap,other49778.__extmap)));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"avar","avar",1316861611),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49775){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49849 = cljs.core.keyword_identical_QMARK_;
var expr__49850 = k__4388__auto__;
if(cljs.core.truth_((pred__49849.cljs$core$IFn$_invoke$arity$2 ? pred__49849.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__49850) : pred__49849.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__49850)))){
return (new com.rpl.specter.impl.VarUse(G__49775,self__.avar,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49849.cljs$core$IFn$_invoke$arity$2 ? pred__49849.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avar","avar",1316861611),expr__49850) : pred__49849.call(null,new cljs.core.Keyword(null,"avar","avar",1316861611),expr__49850)))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__49775,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49849.cljs$core$IFn$_invoke$arity$2 ? pred__49849.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__49850) : pred__49849.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__49850)))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,G__49775,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49775),null));
}
}
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49775){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,G__49775,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"avar","avar",-1337574158,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.rpl.specter.impl.VarUse.cljs$lang$type = true);

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/VarUse",null,(1),null));
}));

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/VarUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/VarUse.
 */
com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,avar,sym){
return (new com.rpl.specter.impl.VarUse(val,avar,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/VarUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__49779){
var extmap__4419__auto__ = (function (){var G__49865 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49779,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__49779)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49865);
} else {
return G__49865;
}
})();
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__49779),new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(G__49779),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__49779),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49869,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49919 = k49869;
var G__49919__$1 = (((G__49919 instanceof cljs.core.Keyword))?G__49919.fqn:null);
switch (G__49919__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49869,else__4383__auto__);

}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49944){
var vec__49946 = p__49944;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49946,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49946,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49868){
var self__ = this;
var G__49868__$1 = this;
return (new cljs.core.RecordIter((0),G__49868__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49873,other49874){
var self__ = this;
var this49873__$1 = this;
return (((!((other49874 == null)))) && ((this49873__$1.constructor === other49874.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49873__$1.val,other49874.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49873__$1.code,other49874.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49873__$1.__extmap,other49874.__extmap)));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49868){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50003 = cljs.core.keyword_identical_QMARK_;
var expr__50004 = k__4388__auto__;
if(cljs.core.truth_((pred__50003.cljs$core$IFn$_invoke$arity$2 ? pred__50003.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__50004) : pred__50003.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__50004)))){
return (new com.rpl.specter.impl.SpecialFormUse(G__49868,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50003.cljs$core$IFn$_invoke$arity$2 ? pred__50003.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__50004) : pred__50003.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__50004)))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__49868,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49868),null));
}
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49868){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__49868,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true);

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/SpecialFormUse",null,(1),null));
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/SpecialFormUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/SpecialFormUse.
 */
com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/SpecialFormUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__49880){
var extmap__4419__auto__ = (function (){var G__50018 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49880,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__49880)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50018);
} else {
return G__50018;
}
})();
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__49880),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__49880),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50028,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50047 = k50028;
var G__50047__$1 = (((G__50047 instanceof cljs.core.Keyword))?G__50047.fqn:null);
switch (G__50047__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50028,else__4383__auto__);

}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50055){
var vec__50056 = p__50055;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50056,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50056,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50027){
var self__ = this;
var G__50027__$1 = this;
return (new cljs.core.RecordIter((0),G__50027__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50029,other50030){
var self__ = this;
var this50029__$1 = this;
return (((!((other50030 == null)))) && ((this50029__$1.constructor === other50030.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50029__$1.op,other50030.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50029__$1.params,other50030.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50029__$1.code,other50030.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50029__$1.__extmap,other50030.__extmap)));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50027){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50097 = cljs.core.keyword_identical_QMARK_;
var expr__50098 = k__4388__auto__;
if(cljs.core.truth_((pred__50097.cljs$core$IFn$_invoke$arity$2 ? pred__50097.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),expr__50098) : pred__50097.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__50098)))){
return (new com.rpl.specter.impl.FnInvocation(G__50027,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50097.cljs$core$IFn$_invoke$arity$2 ? pred__50097.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__50098) : pred__50097.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__50098)))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__50027,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50097.cljs$core$IFn$_invoke$arity$2 ? pred__50097.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__50098) : pred__50097.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__50098)))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__50027,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50027),null));
}
}
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50027){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__50027,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$type = true);

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/FnInvocation",null,(1),null));
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/FnInvocation");
}));

/**
 * Positional factory function for com.rpl.specter.impl/FnInvocation.
 */
com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/FnInvocation, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__50037){
var extmap__4419__auto__ = (function (){var G__50135 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50037,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__50037)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50135);
} else {
return G__50135;
}
})();
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__50037),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__50037),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__50037),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
com.rpl.specter.impl.DynamicVal = (function (code,__meta,__extmap,__hash){
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50148,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50168 = k50148;
var G__50168__$1 = (((G__50168 instanceof cljs.core.Keyword))?G__50168.fqn:null);
switch (G__50168__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50148,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50171){
var vec__50172 = p__50171;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50172,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50172,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50147){
var self__ = this;
var G__50147__$1 = this;
return (new cljs.core.RecordIter((0),G__50147__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50149,other50150){
var self__ = this;
var this50149__$1 = this;
return (((!((other50150 == null)))) && ((this50149__$1.constructor === other50150.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50149__$1.code,other50150.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50149__$1.__extmap,other50150.__extmap)));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50147){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50208 = cljs.core.keyword_identical_QMARK_;
var expr__50209 = k__4388__auto__;
if(cljs.core.truth_((pred__50208.cljs$core$IFn$_invoke$arity$2 ? pred__50208.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__50209) : pred__50208.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__50209)))){
return (new com.rpl.specter.impl.DynamicVal(G__50147,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50147),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50147){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__50147,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicVal",null,(1),null));
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicVal");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicVal.
 */
com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicVal, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__50153){
var extmap__4419__auto__ = (function (){var G__50240 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50153,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core.record_QMARK_(G__50153)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50240);
} else {
return G__50240;
}
})();
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__50153),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
com.rpl.specter.impl.DynamicPath = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50249,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50256 = k50249;
var G__50256__$1 = (((G__50256 instanceof cljs.core.Keyword))?G__50256.fqn:null);
switch (G__50256__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50249,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50260){
var vec__50262 = p__50260;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50262,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50262,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50248){
var self__ = this;
var G__50248__$1 = this;
return (new cljs.core.RecordIter((0),G__50248__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50250,other50251){
var self__ = this;
var this50250__$1 = this;
return (((!((other50251 == null)))) && ((this50250__$1.constructor === other50251.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50250__$1.path,other50251.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50250__$1.__extmap,other50251.__extmap)));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50248){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50298 = cljs.core.keyword_identical_QMARK_;
var expr__50299 = k__4388__auto__;
if(cljs.core.truth_((pred__50298.cljs$core$IFn$_invoke$arity$2 ? pred__50298.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__50299) : pred__50298.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__50299)))){
return (new com.rpl.specter.impl.DynamicPath(G__50248,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50248),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50248){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__50248,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicPath",null,(1),null));
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicPath");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicPath.
 */
com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicPath, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__50254){
var extmap__4419__auto__ = (function (){var G__50340 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50254,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_(G__50254)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50340);
} else {
return G__50340;
}
})();
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__50254),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
com.rpl.specter.impl.DynamicFunction = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50354,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50368 = k50354;
var G__50368__$1 = (((G__50368 instanceof cljs.core.Keyword))?G__50368.fqn:null);
switch (G__50368__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50354,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50412){
var vec__50415 = p__50412;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50415,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50415,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50353){
var self__ = this;
var G__50353__$1 = this;
return (new cljs.core.RecordIter((0),G__50353__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50355,other50356){
var self__ = this;
var this50355__$1 = this;
return (((!((other50356 == null)))) && ((this50355__$1.constructor === other50356.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50355__$1.op,other50356.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50355__$1.params,other50356.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50355__$1.code,other50356.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50355__$1.__extmap,other50356.__extmap)));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50353){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50456 = cljs.core.keyword_identical_QMARK_;
var expr__50457 = k__4388__auto__;
if(cljs.core.truth_((pred__50456.cljs$core$IFn$_invoke$arity$2 ? pred__50456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),expr__50457) : pred__50456.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__50457)))){
return (new com.rpl.specter.impl.DynamicFunction(G__50353,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50456.cljs$core$IFn$_invoke$arity$2 ? pred__50456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__50457) : pred__50456.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__50457)))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__50353,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50456.cljs$core$IFn$_invoke$arity$2 ? pred__50456.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__50457) : pred__50456.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__50457)))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__50353,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50353),null));
}
}
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50353){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__50353,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicFunction",null,(1),null));
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicFunction");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicFunction.
 */
com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params,code){
return (new com.rpl.specter.impl.DynamicFunction(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicFunction, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__50358){
var extmap__4419__auto__ = (function (){var G__50480 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50358,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__50358)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50480);
} else {
return G__50480;
}
})();
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__50358),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__50358),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__50358),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

com.rpl.specter.impl.dynamic_param_QMARK_ = (function com$rpl$specter$impl$dynamic_param_QMARK_(o){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([com.rpl.specter.impl.DynamicPath,com.rpl.specter.impl.DynamicFunction,com.rpl.specter.impl.DynamicVal]),cljs.core.type(o));
});
com.rpl.specter.impl.static_path_QMARK_ = (function com$rpl$specter$impl$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.impl.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.impl.late_path = (function com$rpl$specter$impl$late_path(path){
if(com.rpl.specter.impl.static_path_QMARK_(path)){
return com.rpl.specter.impl.comp_paths_STAR_(path);
} else {
return com.rpl.specter.impl.__GT_DynamicPath(path);
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
com.rpl.specter.impl.CachedPathInfo = (function (dynamic_QMARK_,precompiled,__meta,__extmap,__hash){
this.dynamic_QMARK_ = dynamic_QMARK_;
this.precompiled = precompiled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50491,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50510 = k50491;
var G__50510__$1 = (((G__50510 instanceof cljs.core.Keyword))?G__50510.fqn:null);
switch (G__50510__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50491,else__4383__auto__);

}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50526){
var vec__50527 = p__50526;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50527,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50527,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50490){
var self__ = this;
var G__50490__$1 = this;
return (new cljs.core.RecordIter((0),G__50490__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50493,other50494){
var self__ = this;
var this50493__$1 = this;
return (((!((other50494 == null)))) && ((this50493__$1.constructor === other50494.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50493__$1.dynamic_QMARK_,other50494.dynamic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50493__$1.precompiled,other50494.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50493__$1.__extmap,other50494.__extmap)));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50490){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50564 = cljs.core.keyword_identical_QMARK_;
var expr__50565 = k__4388__auto__;
if(cljs.core.truth_((pred__50564.cljs$core$IFn$_invoke$arity$2 ? pred__50564.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__50565) : pred__50564.call(null,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__50565)))){
return (new com.rpl.specter.impl.CachedPathInfo(G__50490,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50564.cljs$core$IFn$_invoke$arity$2 ? pred__50564.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__50565) : pred__50564.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__50565)))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__50490,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50490),null));
}
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50490){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__50490,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dynamic?","dynamic?",-1973843346,null),new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null)], null);
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true);

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/CachedPathInfo",null,(1),null));
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/CachedPathInfo");
}));

/**
 * Positional factory function for com.rpl.specter.impl/CachedPathInfo.
 */
com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/CachedPathInfo, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__50500){
var extmap__4419__auto__ = (function (){var G__50618 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50500,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], 0));
if(cljs.core.record_QMARK_(G__50500)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50618);
} else {
return G__50618;
}
})();
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__50500),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__50500),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

com.rpl.specter.impl.cached_path_info_precompiled = (function com$rpl$specter$impl$cached_path_info_precompiled(c){
return c.precompiled;
});
com.rpl.specter.impl.cached_path_info_dynamic_QMARK_ = (function com$rpl$specter$impl$cached_path_info_dynamic_QMARK_(c){
return c.dynamic_QMARK_;
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});
com.rpl.specter.impl.pred_STAR_ = (function com$rpl$specter$impl$pred_STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl50652 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl50652 = (function (afn,meta50653){
this.afn = afn;
this.meta50653 = meta50653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl50652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50654,meta50653__$1){
var self__ = this;
var _50654__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl50652(self__.afn,meta50653__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50654){
var self__ = this;
var _50654__$1 = this;
return self__.meta50653;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50652.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl50652.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50652.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50652.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta50653","meta50653",1058652231,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50652.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl50652.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl50652");

(com.rpl.specter.impl.t_com$rpl$specter$impl50652.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl50652");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl50652.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl50652 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl50652(afn__$1,meta50653){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl50652(afn__$1,meta50653));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl50652(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl50699 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl50699 = (function (afn,meta50700){
this.afn = afn;
this.meta50700 = meta50700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl50699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50701,meta50700__$1){
var self__ = this;
var _50701__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl50699(self__.afn,meta50700__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50701){
var self__ = this;
var _50701__$1 = this;
return self__.meta50700;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50699.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl50699.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50699.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta50700","meta50700",-1823756234,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50699.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl50699.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl50699");

(com.rpl.specter.impl.t_com$rpl$specter$impl50699.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl50699");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl50699.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl50699 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl50699(afn__$1,meta50700){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl50699(afn__$1,meta50700));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl50699(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl50728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl50728 = (function (cell,meta50729){
this.cell = cell;
this.meta50729 = meta50729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl50728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50730,meta50729__$1){
var self__ = this;
var _50730__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl50728(self__.cell,meta50729__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50730){
var self__ = this;
var _50730__$1 = this;
return self__.meta50729;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50728.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl50728.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50728.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta50729","meta50729",-1238342842,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl50728.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl50728.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl50728");

(com.rpl.specter.impl.t_com$rpl$specter$impl50728.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl50728");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl50728.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl50728 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl50728(cell__$1,meta50729){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl50728(cell__$1,meta50729));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl50728(cell,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.local_declarepath = (function com$rpl$specter$impl$local_declarepath(){
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.impl.cell_nav(cell),cljs.core.assoc,new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671),cell);
});
com.rpl.specter.impl.providepath_STAR_ = (function com$rpl$specter$impl$providepath_STAR_(declared,compiled_path){
var cell = new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declared));
return com.rpl.specter.impl.set_cell_BANG_(cell,compiled_path);
});
com.rpl.specter.impl.gensyms = (function com$rpl$specter$impl$gensyms(amt){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(amt,cljs.core.gensym));
});
com.rpl.specter.impl.comp_navs = (function com$rpl$specter$impl$comp_navs(var_args){
var G__51080 = arguments.length;
switch (G__51080) {
case 0:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case 13:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case 14:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case 15:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case 16:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case 17:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case 18:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case 19:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54710 = arguments.length;
var i__4737__auto___54711 = (0);
while(true){
if((i__4737__auto___54711 < len__4736__auto___54710)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54711]));

var G__54713 = (i__4737__auto___54711 + (1));
i__4737__auto___54711 = G__54713;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__4758__auto__);

}
});

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__46877__auto__){
return nav1__46877__auto__;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__46877__auto__,nav2__46878__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__46877__auto__,nav2__46878__auto__);
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__50787,G__50788,G__50789){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50787,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50788,G__50789));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__50790,G__50791,G__50792,G__50793){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50790,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__50791,G__50792,G__50793));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__50794,G__50795,G__50796,G__50797,G__50798){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50794,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__50795,G__50796,G__50797,G__50798));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__50799,G__50800,G__50801,G__50802,G__50803,G__50804){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50799,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__50800,G__50801,G__50802,G__50803,G__50804));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__50805,G__50806,G__50807,G__50808,G__50809,G__50810,G__50811){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50805,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__50806,G__50807,G__50808,G__50809,G__50810,G__50811));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__50812,G__50813,G__50814,G__50815,G__50816,G__50817,G__50818,G__50819){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50812,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__50813,G__50814,G__50815,G__50816,G__50817,G__50818,G__50819));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__50820,G__50821,G__50822,G__50823,G__50824,G__50825,G__50826,G__50827,G__50828){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50820,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__50821,G__50822,G__50823,G__50824,G__50825,G__50826,G__50827,G__50828));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__50829,G__50830,G__50831,G__50832,G__50833,G__50834,G__50835,G__50836,G__50837,G__50838){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50829,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__50830,G__50831,G__50832,G__50833,G__50834,G__50835,G__50836,G__50837,G__50838));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__50839,G__50840,G__50841,G__50842,G__50843,G__50844,G__50845,G__50846,G__50847,G__50848,G__50849){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50839,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__50840,G__50841,G__50842,G__50843,G__50844,G__50845,G__50846,G__50847,G__50848,G__50849));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__50850,G__50851,G__50852,G__50853,G__50854,G__50855,G__50856,G__50857,G__50858,G__50859,G__50860,G__50861){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50850,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__50851,G__50852,G__50853,G__50854,G__50855,G__50856,G__50857,G__50858,G__50859,G__50860,G__50861));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__50862,G__50863,G__50864,G__50865,G__50866,G__50867,G__50868,G__50869,G__50870,G__50871,G__50872,G__50873,G__50874){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50862,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__50863,G__50864,G__50865,G__50866,G__50867,G__50868,G__50869,G__50870,G__50871,G__50872,G__50873,G__50874));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__50875,G__50876,G__50877,G__50878,G__50879,G__50880,G__50881,G__50882,G__50883,G__50884,G__50885,G__50886,G__50887,G__50888){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50875,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__50876,G__50877,G__50878,G__50879,G__50880,G__50881,G__50882,G__50883,G__50884,G__50885,G__50886,G__50887,G__50888));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__50889,G__50890,G__50891,G__50892,G__50893,G__50894,G__50895,G__50896,G__50897,G__50898,G__50899,G__50900,G__50901,G__50902,G__50903){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50889,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__50890,G__50891,G__50892,G__50893,G__50894,G__50895,G__50896,G__50897,G__50898,G__50899,G__50900,G__50901,G__50902,G__50903));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__50904,G__50905,G__50906,G__50907,G__50908,G__50909,G__50910,G__50911,G__50912,G__50913,G__50914,G__50915,G__50916,G__50917,G__50918,G__50919){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50904,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__50905,G__50906,G__50907,G__50908,G__50909,G__50910,G__50911,G__50912,G__50913,G__50914,G__50915,G__50916,G__50917,G__50918,G__50919));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__50920,G__50921,G__50922,G__50923,G__50924,G__50925,G__50926,G__50927,G__50928,G__50929,G__50930,G__50931,G__50932,G__50933,G__50934,G__50935,G__50936){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50920,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__50921,G__50922,G__50923,G__50924,G__50925,G__50926,G__50927,G__50928,G__50929,G__50930,G__50931,G__50932,G__50933,G__50934,G__50935,G__50936));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__50937,G__50938,G__50939,G__50940,G__50941,G__50942,G__50943,G__50944,G__50945,G__50946,G__50947,G__50948,G__50949,G__50950,G__50951,G__50952,G__50953,G__50954){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50937,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__50938,G__50939,G__50940,G__50941,G__50942,G__50943,G__50944,G__50945,G__50946,G__50947,G__50948,G__50949,G__50950,G__50951,G__50952,G__50953,G__50954));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__50955,G__50956,G__50957,G__50958,G__50959,G__50960,G__50961,G__50962,G__50963,G__50964,G__50965,G__50966,G__50967,G__50968,G__50969,G__50970,G__50971,G__50972,G__50973){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50955,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__50956,G__50957,G__50958,G__50959,G__50960,G__50961,G__50962,G__50963,G__50964,G__50965,G__50966,G__50967,G__50968,G__50969,G__50970,G__50971,G__50972,G__50973));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__50767,G__50768,G__50769,G__50770,G__50771,G__50772,G__50773,G__50774,G__50775,G__50776,G__50777,G__50778,G__50779,G__50780,G__50781,G__50782,G__50783,G__50784,G__50785,rest__46879__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__50767,G__50768,G__50769,G__50770,G__50771,G__50772,G__50773,G__50774,G__50775,G__50776,G__50777,G__50778,G__50779,G__50780,G__50781,G__50782,G__50783,G__50784,G__50785),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__46879__auto__));
}));

/** @this {Function} */
(com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq51056){
var G__51057 = cljs.core.first(seq51056);
var seq51056__$1 = cljs.core.next(seq51056);
var G__51058 = cljs.core.first(seq51056__$1);
var seq51056__$2 = cljs.core.next(seq51056__$1);
var G__51059 = cljs.core.first(seq51056__$2);
var seq51056__$3 = cljs.core.next(seq51056__$2);
var G__51060 = cljs.core.first(seq51056__$3);
var seq51056__$4 = cljs.core.next(seq51056__$3);
var G__51061 = cljs.core.first(seq51056__$4);
var seq51056__$5 = cljs.core.next(seq51056__$4);
var G__51062 = cljs.core.first(seq51056__$5);
var seq51056__$6 = cljs.core.next(seq51056__$5);
var G__51063 = cljs.core.first(seq51056__$6);
var seq51056__$7 = cljs.core.next(seq51056__$6);
var G__51064 = cljs.core.first(seq51056__$7);
var seq51056__$8 = cljs.core.next(seq51056__$7);
var G__51065 = cljs.core.first(seq51056__$8);
var seq51056__$9 = cljs.core.next(seq51056__$8);
var G__51066 = cljs.core.first(seq51056__$9);
var seq51056__$10 = cljs.core.next(seq51056__$9);
var G__51067 = cljs.core.first(seq51056__$10);
var seq51056__$11 = cljs.core.next(seq51056__$10);
var G__51068 = cljs.core.first(seq51056__$11);
var seq51056__$12 = cljs.core.next(seq51056__$11);
var G__51069 = cljs.core.first(seq51056__$12);
var seq51056__$13 = cljs.core.next(seq51056__$12);
var G__51070 = cljs.core.first(seq51056__$13);
var seq51056__$14 = cljs.core.next(seq51056__$13);
var G__51071 = cljs.core.first(seq51056__$14);
var seq51056__$15 = cljs.core.next(seq51056__$14);
var G__51072 = cljs.core.first(seq51056__$15);
var seq51056__$16 = cljs.core.next(seq51056__$15);
var G__51073 = cljs.core.first(seq51056__$16);
var seq51056__$17 = cljs.core.next(seq51056__$16);
var G__51074 = cljs.core.first(seq51056__$17);
var seq51056__$18 = cljs.core.next(seq51056__$17);
var G__51075 = cljs.core.first(seq51056__$18);
var seq51056__$19 = cljs.core.next(seq51056__$18);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51057,G__51058,G__51059,G__51060,G__51061,G__51062,G__51063,G__51064,G__51065,G__51066,G__51067,G__51068,G__51069,G__51070,G__51071,G__51072,G__51073,G__51074,G__51075,seq51056__$19);
}));

(com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19));

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__51302 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__51302) : next_fn.call(null,G__51302));
})();
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,((structure).length))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__51313 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__51313) : next_fn.call(null,G__51313));
})();
var res = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,(0),start),newpart,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,end,cljs.core.count(structure))], 0));
if(cljs.core.vector_QMARK_(structure)){
return cljs.core.vec(res);
} else {
return res;
}
}
});
com.rpl.specter.impl.matching_indices = (function com$rpl$specter$impl$matching_indices(aseq,p){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,e){
if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(e) : p.call(null,e)))){
return i;
} else {
return null;
}
}),aseq);
});
com.rpl.specter.impl.matching_ranges = (function com$rpl$specter$impl$matching_ranges(aseq,p){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__51350,i){
var vec__51354 = p__51350;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51354,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51354,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51354,(2),null);
var curr = vec__51354;
if((curr_start == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,i,i], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(curr_last + (1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,curr_start,i], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_start,(curr_last + (1))], null)),i,i], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null,null], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.matching_indices(aseq,p),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))));
});
com.rpl.specter.impl.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$impl$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__51380){
var vec__51381 = p__51380;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51381,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51381,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_(structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse(com.rpl.specter.impl.matching_ranges(structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
var ret = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(((com.rpl.specter.impl.fn_invocation_QMARK_(structure)) && (com.rpl.specter.impl.fn_invocation_QMARK_(ret)))){
return cljs.core.with_meta(ret,cljs.core.meta(structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var walker = (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure__$1) : pred.call(null,structure__$1)))){
var r = (continue_fn.cljs$core$IFn$_invoke$arity$1 ? continue_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : continue_fn.call(null,structure__$1));
if((!((r === com.rpl.specter.impl.NONE)))){
com.rpl.specter.impl.set_cell_BANG_(ret,r);
} else {
}

return r;
} else {
return clojure.walk.walk(com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});
walker(structure);

return com.rpl.specter.impl.get_cell(ret);
});
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.coerce_nav = (function com$rpl$specter$impl$coerce_nav(o){
if((((!((o == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.com$rpl$specter$protocols$RichNavigator$))))?true:(((!o.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o))){
return o;
} else {
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.comp_paths_STAR_(o);
} else {
return com.rpl.specter.protocols.implicit_nav(o);

}
}
});
com.rpl.specter.impl.dynamic_var_QMARK_ = (function com$rpl$specter$impl$dynamic_var_QMARK_(v){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
});
com.rpl.specter.impl.direct_nav_obj = (function com$rpl$specter$impl$direct_nav_obj(o){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(o,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620),o], null));
});
com.rpl.specter.impl.maybe_direct_nav = (function com$rpl$specter$impl$maybe_direct_nav(obj,direct_nav_QMARK_){
if(cljs.core.truth_(direct_nav_QMARK_)){
return com.rpl.specter.impl.direct_nav_obj(obj);
} else {
return obj;
}
});
com.rpl.specter.impl.original_obj = (function com$rpl$specter$impl$original_obj(o){
while(true){
var orig = new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
if(cljs.core.truth_(orig)){
var G__54778 = orig;
o = G__54778;
continue;
} else {
return o;
}
break;
}
});
com.rpl.specter.impl.direct_nav_QMARK_ = (function com$rpl$specter$impl$direct_nav_QMARK_(o){
return new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
});
com.rpl.specter.impl.all_static_QMARK_ = (function com$rpl$specter$impl$all_static_QMARK_(params){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,params));
});
com.rpl.specter.impl.late_resolved_fn = (function com$rpl$specter$impl$late_resolved_fn(afn){
return (function() { 
var G__54785__delegate = function (args){
if(com.rpl.specter.impl.all_static_QMARK_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__54785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54788__i = 0, G__54788__a = new Array(arguments.length -  0);
while (G__54788__i < G__54788__a.length) {G__54788__a[G__54788__i] = arguments[G__54788__i + 0]; ++G__54788__i;}
  args = new cljs.core.IndexedSeq(G__54788__a,0,null);
} 
return G__54785__delegate.call(this,args);};
G__54785.cljs$lang$maxFixedArity = 0;
G__54785.cljs$lang$applyTo = (function (arglist__54790){
var args = cljs.core.seq(arglist__54790);
return G__54785__delegate(args);
});
G__54785.cljs$core$IFn$_invoke$arity$variadic = G__54785__delegate;
return G__54785;
})()
;
});
com.rpl.specter.impl.preserve_map = (function com$rpl$specter$impl$preserve_map(afn,o){
if(((cljs.core.list_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(o),cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o));
}
});
com.rpl.specter.impl.magic_precompilation_STAR_ = (function com$rpl$specter$impl$magic_precompilation_STAR_(o){
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.preserve_map(com.rpl.specter.impl.magic_precompilation_STAR_,o);
} else {
if((o instanceof com.rpl.specter.impl.VarUse)){
var v = o.avar;
if(cljs.core.truth_((function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return com.rpl.specter.impl.dynamic_var_QMARK_(v);
} else {
return and__4115__auto__;
}
})())){
return com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.maybe_direct_nav(o.sym,(function (){var or__4126__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav(o.val,(function (){var or__4126__auto__ = (function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return com.rpl.specter.impl.direct_nav_QMARK_(v);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.val);
}
}
})());
}
} else {
if((o instanceof com.rpl.specter.impl.LocalSym)){
return com.rpl.specter.impl.__GT_DynamicVal(o.sym);
} else {
if((o instanceof com.rpl.specter.impl.SpecialFormUse)){
return com.rpl.specter.impl.__GT_DynamicVal(o.code);
} else {
if((o instanceof com.rpl.specter.impl.FnInvocation)){
var op = (function (){var G__51451 = o.op;
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__51451) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__51451));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,o.params));
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__51452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__51452) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__51452));
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(op,params,o.code);
}
} else {
return o;

}
}
}
}
}
});
com.rpl.specter.impl.static_combine = (function com$rpl$specter$impl$static_combine(var_args){
var G__51456 = arguments.length;
switch (G__51456) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1 = (function (o){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o,true);
}));

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2 = (function (o,nav_pos_QMARK_){
if(cljs.core.sequential_QMARK_(o)){
if(cljs.core.truth_(nav_pos_QMARK_)){
var res = com.rpl.specter.impl.continuous_subseqs_transform_STAR_(com.rpl.specter.impl.rich_nav_QMARK_,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.static_combine,cljs.core.flatten(o))),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.comp_paths_STAR_(s)], null);
}));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(res))){
return cljs.core.first(res);
} else {
return res;
}
} else {
return com.rpl.specter.impl.preserve_map((function (p1__51453_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__51453_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o.op,false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51454_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__51454_SHARP_,false);
}),o.params)),o.code);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return com.rpl.specter.impl.__GT_DynamicPath(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(o.path));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return o;
} else {
if(cljs.core.truth_(nav_pos_QMARK_)){
return com.rpl.specter.impl.coerce_nav(o);
} else {
return o;
}

}
}
}
}
}));

(com.rpl.specter.impl.static_combine.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
com.rpl.specter.impl.LateResolve = function(){};

var com$rpl$specter$impl$LateResolve$late_resolve$dyn_54800 = (function (this$,dynamic_params){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4429__auto__.call(null,this$,dynamic_params));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.late_resolve["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4426__auto__.call(null,this$,dynamic_params));
} else {
throw cljs.core.missing_protocol("LateResolve.late-resolve",this$);
}
}
});
com.rpl.specter.impl.late_resolve = (function com$rpl$specter$impl$late_resolve(this$,dynamic_params){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null)))))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
return com$rpl$specter$impl$LateResolve$late_resolve$dyn_54800(this$,dynamic_params);
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
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LocalParam = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51489,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51498 = k51489;
var G__51498__$1 = (((G__51498 instanceof cljs.core.Keyword))?G__51498.fqn:null);
switch (G__51498__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51489,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51500){
var vec__51501 = p__51500;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51501,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51501,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dynamic_params,self__.idx);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51488){
var self__ = this;
var G__51488__$1 = this;
return (new cljs.core.RecordIter((0),G__51488__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51490,other51491){
var self__ = this;
var this51490__$1 = this;
return (((!((other51491 == null)))) && ((this51490__$1.constructor === other51491.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51490__$1.idx,other51491.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51490__$1.__extmap,other51491.__extmap)));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51488){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51519 = cljs.core.keyword_identical_QMARK_;
var expr__51520 = k__4388__auto__;
if(cljs.core.truth_((pred__51519.cljs$core$IFn$_invoke$arity$2 ? pred__51519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),expr__51520) : pred__51519.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__51520)))){
return (new com.rpl.specter.impl.LocalParam(G__51488,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51488),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51488){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__51488,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$type = true);

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalParam",null,(1),null));
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LocalParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalParam.
 */
com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__51492){
var extmap__4419__auto__ = (function (){var G__51541 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51492,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_(G__51492)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51541);
} else {
return G__51541;
}
})();
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__51492),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.StaticParam = (function (val,__meta,__extmap,__hash){
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51545,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51550 = k51545;
var G__51550__$1 = (((G__51550 instanceof cljs.core.Keyword))?G__51550.fqn:null);
switch (G__51550__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51545,else__4383__auto__);

}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51553){
var vec__51555 = p__51553;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51555,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51555,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51544){
var self__ = this;
var G__51544__$1 = this;
return (new cljs.core.RecordIter((0),G__51544__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51546,other51547){
var self__ = this;
var this51546__$1 = this;
return (((!((other51547 == null)))) && ((this51546__$1.constructor === other51547.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51546__$1.val,other51547.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51546__$1.__extmap,other51547.__extmap)));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51544){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51601 = cljs.core.keyword_identical_QMARK_;
var expr__51602 = k__4388__auto__;
if(cljs.core.truth_((pred__51601.cljs$core$IFn$_invoke$arity$2 ? pred__51601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__51602) : pred__51601.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__51602)))){
return (new com.rpl.specter.impl.StaticParam(G__51544,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51544),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51544){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__51544,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$type = true);

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/StaticParam",null,(1),null));
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/StaticParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/StaticParam.
 */
com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/StaticParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__51549){
var extmap__4419__auto__ = (function (){var G__51636 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51549,new cljs.core.Keyword(null,"val","val",128701612));
if(cljs.core.record_QMARK_(G__51549)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51636);
} else {
return G__51636;
}
})();
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__51549),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn0 = (function (fn,__meta,__extmap,__hash){
this.fn = fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51665,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51676 = k51665;
var G__51676__$1 = (((G__51676 instanceof cljs.core.Keyword))?G__51676.fqn:null);
switch (G__51676__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51665,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51681){
var vec__51682 = p__51681;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51682,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51682,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51641){
var self__ = this;
var this__46935__auto____$1 = this;
var fexpr__51686 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51641);
return (fexpr__51686.cljs$core$IFn$_invoke$arity$0 ? fexpr__51686.cljs$core$IFn$_invoke$arity$0() : fexpr__51686.call(null));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51664){
var self__ = this;
var G__51664__$1 = this;
return (new cljs.core.RecordIter((0),G__51664__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51666,other51667){
var self__ = this;
var this51666__$1 = this;
return (((!((other51667 == null)))) && ((this51666__$1.constructor === other51667.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51666__$1.fn,other51667.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51666__$1.__extmap,other51667.__extmap)));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51664){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51717 = cljs.core.keyword_identical_QMARK_;
var expr__51718 = k__4388__auto__;
if(cljs.core.truth_((pred__51717.cljs$core$IFn$_invoke$arity$2 ? pred__51717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51718) : pred__51717.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51718)))){
return (new com.rpl.specter.impl.LateFn0(G__51664,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51664),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51664){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__51664,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn0",null,(1),null));
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn0");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn0.
 */
com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn0, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__51673){
var extmap__4419__auto__ = (function (){var G__51744 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51673,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.record_QMARK_(G__51673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51744);
} else {
return G__51744;
}
})();
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51673),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn1 = (function (fn,arg0,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51749,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51763 = k51749;
var G__51763__$1 = (((G__51763 instanceof cljs.core.Keyword))?G__51763.fqn:null);
switch (G__51763__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51749,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51768){
var vec__51769 = p__51768;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51769,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51769,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51643){
var self__ = this;
var this__46935__auto____$1 = this;
var G__51773 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51643);
var fexpr__51772 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51643);
return (fexpr__51772.cljs$core$IFn$_invoke$arity$1 ? fexpr__51772.cljs$core$IFn$_invoke$arity$1(G__51773) : fexpr__51772.call(null,G__51773));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51748){
var self__ = this;
var G__51748__$1 = this;
return (new cljs.core.RecordIter((0),G__51748__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51750,other51751){
var self__ = this;
var this51750__$1 = this;
return (((!((other51751 == null)))) && ((this51750__$1.constructor === other51751.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51750__$1.fn,other51751.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51750__$1.arg0,other51751.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51750__$1.__extmap,other51751.__extmap)));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51748){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51805 = cljs.core.keyword_identical_QMARK_;
var expr__51806 = k__4388__auto__;
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51806)))){
return (new com.rpl.specter.impl.LateFn1(G__51748,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51806)))){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__51748,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51748),null));
}
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51748){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__51748,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)], null);
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn1",null,(1),null));
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn1");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn1.
 */
com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn1, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__51753){
var extmap__4419__auto__ = (function (){var G__51828 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51753,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355)], 0));
if(cljs.core.record_QMARK_(G__51753)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51828);
} else {
return G__51828;
}
})();
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51753),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51753),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn2 = (function (fn,arg0,arg1,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51835,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51848 = k51835;
var G__51848__$1 = (((G__51848 instanceof cljs.core.Keyword))?G__51848.fqn:null);
switch (G__51848__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51835,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51852){
var vec__51854 = p__51852;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51854,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51854,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51645){
var self__ = this;
var this__46935__auto____$1 = this;
var G__51861 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51645);
var G__51862 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51645);
var fexpr__51860 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51645);
return (fexpr__51860.cljs$core$IFn$_invoke$arity$2 ? fexpr__51860.cljs$core$IFn$_invoke$arity$2(G__51861,G__51862) : fexpr__51860.call(null,G__51861,G__51862));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51834){
var self__ = this;
var G__51834__$1 = this;
return (new cljs.core.RecordIter((0),G__51834__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51836,other51837){
var self__ = this;
var this51836__$1 = this;
return (((!((other51837 == null)))) && ((this51836__$1.constructor === other51837.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51836__$1.fn,other51837.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51836__$1.arg0,other51837.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51836__$1.arg1,other51837.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51836__$1.__extmap,other51837.__extmap)));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51834){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51896 = cljs.core.keyword_identical_QMARK_;
var expr__51897 = k__4388__auto__;
if(cljs.core.truth_((pred__51896.cljs$core$IFn$_invoke$arity$2 ? pred__51896.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51897) : pred__51896.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51897)))){
return (new com.rpl.specter.impl.LateFn2(G__51834,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51896.cljs$core$IFn$_invoke$arity$2 ? pred__51896.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51897) : pred__51896.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51897)))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__51834,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51896.cljs$core$IFn$_invoke$arity$2 ? pred__51896.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51897) : pred__51896.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51897)))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__51834,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51834),null));
}
}
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51834){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__51834,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null);
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn2",null,(1),null));
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn2");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn2.
 */
com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn2, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__51841){
var extmap__4419__auto__ = (function (){var G__51911 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51841,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], 0));
if(cljs.core.record_QMARK_(G__51841)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51911);
} else {
return G__51911;
}
})();
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51841),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51841),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51841),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn3 = (function (fn,arg0,arg1,arg2,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51918,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51936 = k51918;
var G__51936__$1 = (((G__51936 instanceof cljs.core.Keyword))?G__51936.fqn:null);
switch (G__51936__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51918,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51941){
var vec__51942 = p__51941;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51942,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51942,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51646){
var self__ = this;
var this__46935__auto____$1 = this;
var G__51948 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51646);
var G__51949 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51646);
var G__51950 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51646);
var fexpr__51947 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51646);
return (fexpr__51947.cljs$core$IFn$_invoke$arity$3 ? fexpr__51947.cljs$core$IFn$_invoke$arity$3(G__51948,G__51949,G__51950) : fexpr__51947.call(null,G__51948,G__51949,G__51950));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51917){
var self__ = this;
var G__51917__$1 = this;
return (new cljs.core.RecordIter((0),G__51917__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51919,other51920){
var self__ = this;
var this51919__$1 = this;
return (((!((other51920 == null)))) && ((this51919__$1.constructor === other51920.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51919__$1.fn,other51920.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51919__$1.arg0,other51920.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51919__$1.arg1,other51920.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51919__$1.arg2,other51920.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51919__$1.__extmap,other51920.__extmap)));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51917){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51978 = cljs.core.keyword_identical_QMARK_;
var expr__51979 = k__4388__auto__;
if(cljs.core.truth_((pred__51978.cljs$core$IFn$_invoke$arity$2 ? pred__51978.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51979) : pred__51978.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51979)))){
return (new com.rpl.specter.impl.LateFn3(G__51917,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51978.cljs$core$IFn$_invoke$arity$2 ? pred__51978.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51979) : pred__51978.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51979)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__51917,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51978.cljs$core$IFn$_invoke$arity$2 ? pred__51978.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51979) : pred__51978.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51979)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__51917,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51978.cljs$core$IFn$_invoke$arity$2 ? pred__51978.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51979) : pred__51978.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51979)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__51917,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51917),null));
}
}
}
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51917){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51917,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null);
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn3",null,(1),null));
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn3");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn3.
 */
com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn3, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__51926){
var extmap__4419__auto__ = (function (){var G__51993 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51926,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], 0));
if(cljs.core.record_QMARK_(G__51926)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51993);
} else {
return G__51993;
}
})();
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51926),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51926),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51926),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51926),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn4 = (function (fn,arg0,arg1,arg2,arg3,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51999,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52017 = k51999;
var G__52017__$1 = (((G__52017 instanceof cljs.core.Keyword))?G__52017.fqn:null);
switch (G__52017__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51999,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52021){
var vec__52022 = p__52021;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52022,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52022,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51647){
var self__ = this;
var this__46935__auto____$1 = this;
var G__52028 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51647);
var G__52029 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51647);
var G__52030 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51647);
var G__52031 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51647);
var fexpr__52027 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51647);
return (fexpr__52027.cljs$core$IFn$_invoke$arity$4 ? fexpr__52027.cljs$core$IFn$_invoke$arity$4(G__52028,G__52029,G__52030,G__52031) : fexpr__52027.call(null,G__52028,G__52029,G__52030,G__52031));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51998){
var self__ = this;
var G__51998__$1 = this;
return (new cljs.core.RecordIter((0),G__51998__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52000,other52001){
var self__ = this;
var this52000__$1 = this;
return (((!((other52001 == null)))) && ((this52000__$1.constructor === other52001.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52000__$1.fn,other52001.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52000__$1.arg0,other52001.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52000__$1.arg1,other52001.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52000__$1.arg2,other52001.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52000__$1.arg3,other52001.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52000__$1.__extmap,other52001.__extmap)));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51998){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52056 = cljs.core.keyword_identical_QMARK_;
var expr__52057 = k__4388__auto__;
if(cljs.core.truth_((pred__52056.cljs$core$IFn$_invoke$arity$2 ? pred__52056.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52057) : pred__52056.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52057)))){
return (new com.rpl.specter.impl.LateFn4(G__51998,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52056.cljs$core$IFn$_invoke$arity$2 ? pred__52056.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52057) : pred__52056.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52057)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__51998,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52056.cljs$core$IFn$_invoke$arity$2 ? pred__52056.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52057) : pred__52056.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52057)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__51998,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52056.cljs$core$IFn$_invoke$arity$2 ? pred__52056.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52057) : pred__52056.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52057)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__51998,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52056.cljs$core$IFn$_invoke$arity$2 ? pred__52056.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52057) : pred__52056.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52057)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51998,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51998),null));
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51998){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51998,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null);
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn4",null,(1),null));
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn4");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn4.
 */
com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn4, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__52012){
var extmap__4419__auto__ = (function (){var G__52074 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52012,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], 0));
if(cljs.core.record_QMARK_(G__52012)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52074);
} else {
return G__52074;
}
})();
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52012),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52012),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52012),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52012),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52012),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn5 = (function (fn,arg0,arg1,arg2,arg3,arg4,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52080,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52103 = k52080;
var G__52103__$1 = (((G__52103 instanceof cljs.core.Keyword))?G__52103.fqn:null);
switch (G__52103__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52080,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52116){
var vec__52117 = p__52116;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52117,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52117,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51648){
var self__ = this;
var this__46935__auto____$1 = this;
var G__52122 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51648);
var G__52123 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51648);
var G__52124 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51648);
var G__52125 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51648);
var G__52126 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51648);
var fexpr__52121 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51648);
return (fexpr__52121.cljs$core$IFn$_invoke$arity$5 ? fexpr__52121.cljs$core$IFn$_invoke$arity$5(G__52122,G__52123,G__52124,G__52125,G__52126) : fexpr__52121.call(null,G__52122,G__52123,G__52124,G__52125,G__52126));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52079){
var self__ = this;
var G__52079__$1 = this;
return (new cljs.core.RecordIter((0),G__52079__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52081,other52082){
var self__ = this;
var this52081__$1 = this;
return (((!((other52082 == null)))) && ((this52081__$1.constructor === other52082.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52081__$1.fn,other52082.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52081__$1.arg0,other52082.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52081__$1.arg1,other52082.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52081__$1.arg2,other52082.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52081__$1.arg3,other52082.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52081__$1.arg4,other52082.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52081__$1.__extmap,other52082.__extmap)));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52079){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52164 = cljs.core.keyword_identical_QMARK_;
var expr__52165 = k__4388__auto__;
if(cljs.core.truth_((pred__52164.cljs$core$IFn$_invoke$arity$2 ? pred__52164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52165) : pred__52164.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52165)))){
return (new com.rpl.specter.impl.LateFn5(G__52079,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52164.cljs$core$IFn$_invoke$arity$2 ? pred__52164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52165) : pred__52164.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52165)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__52079,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52164.cljs$core$IFn$_invoke$arity$2 ? pred__52164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52165) : pred__52164.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52165)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__52079,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52164.cljs$core$IFn$_invoke$arity$2 ? pred__52164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52165) : pred__52164.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52165)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__52079,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52164.cljs$core$IFn$_invoke$arity$2 ? pred__52164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52165) : pred__52164.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52165)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__52079,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52164.cljs$core$IFn$_invoke$arity$2 ? pred__52164.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52165) : pred__52164.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52165)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__52079,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52079),null));
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52079){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__52079,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null)], null);
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn5",null,(1),null));
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn5");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn5.
 */
com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn5, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__52083){
var extmap__4419__auto__ = (function (){var G__52177 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52083,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], 0));
if(cljs.core.record_QMARK_(G__52083)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52177);
} else {
return G__52177;
}
})();
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52083),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52083),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52083),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52083),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52083),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__52083),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn6 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52181,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52198 = k52181;
var G__52198__$1 = (((G__52198 instanceof cljs.core.Keyword))?G__52198.fqn:null);
switch (G__52198__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52181,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52201){
var vec__52206 = p__52201;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52206,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52206,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51649){
var self__ = this;
var this__46935__auto____$1 = this;
var G__52218 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51649);
var G__52219 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51649);
var G__52220 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51649);
var G__52221 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51649);
var G__52222 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51649);
var G__52223 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51649);
var fexpr__52216 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51649);
return (fexpr__52216.cljs$core$IFn$_invoke$arity$6 ? fexpr__52216.cljs$core$IFn$_invoke$arity$6(G__52218,G__52219,G__52220,G__52221,G__52222,G__52223) : fexpr__52216.call(null,G__52218,G__52219,G__52220,G__52221,G__52222,G__52223));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52180){
var self__ = this;
var G__52180__$1 = this;
return (new cljs.core.RecordIter((0),G__52180__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52182,other52183){
var self__ = this;
var this52182__$1 = this;
return (((!((other52183 == null)))) && ((this52182__$1.constructor === other52183.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52182__$1.fn,other52183.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52182__$1.arg0,other52183.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52182__$1.arg1,other52183.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52182__$1.arg2,other52183.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52182__$1.arg3,other52183.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52182__$1.arg4,other52183.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52182__$1.arg5,other52183.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52182__$1.__extmap,other52183.__extmap)));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52180){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52268 = cljs.core.keyword_identical_QMARK_;
var expr__52269 = k__4388__auto__;
if(cljs.core.truth_((pred__52268.cljs$core$IFn$_invoke$arity$2 ? pred__52268.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52269) : pred__52268.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52269)))){
return (new com.rpl.specter.impl.LateFn6(G__52180,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52268.cljs$core$IFn$_invoke$arity$2 ? pred__52268.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52269) : pred__52268.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52269)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__52180,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52268.cljs$core$IFn$_invoke$arity$2 ? pred__52268.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52269) : pred__52268.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52269)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__52180,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52268.cljs$core$IFn$_invoke$arity$2 ? pred__52268.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52269) : pred__52268.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52269)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__52180,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52268.cljs$core$IFn$_invoke$arity$2 ? pred__52268.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52269) : pred__52268.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52269)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__52180,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52268.cljs$core$IFn$_invoke$arity$2 ? pred__52268.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52269) : pred__52268.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52269)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__52180,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52268.cljs$core$IFn$_invoke$arity$2 ? pred__52268.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52269) : pred__52268.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52269)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__52180,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52180),null));
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52180){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__52180,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null)], null);
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn6",null,(1),null));
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn6");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn6.
 */
com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn6, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__52188){
var extmap__4419__auto__ = (function (){var G__52303 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52188,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], 0));
if(cljs.core.record_QMARK_(G__52188)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52303);
} else {
return G__52303;
}
})();
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52188),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52188),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52188),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52188),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52188),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__52188),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__52188),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn7 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52311,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52326 = k52311;
var G__52326__$1 = (((G__52326 instanceof cljs.core.Keyword))?G__52326.fqn:null);
switch (G__52326__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52311,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52332){
var vec__52333 = p__52332;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52333,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52333,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51650){
var self__ = this;
var this__46935__auto____$1 = this;
var G__52343 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51650);
var G__52344 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51650);
var G__52345 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51650);
var G__52346 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51650);
var G__52347 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51650);
var G__52348 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51650);
var G__52349 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51650);
var fexpr__52342 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51650);
return (fexpr__52342.cljs$core$IFn$_invoke$arity$7 ? fexpr__52342.cljs$core$IFn$_invoke$arity$7(G__52343,G__52344,G__52345,G__52346,G__52347,G__52348,G__52349) : fexpr__52342.call(null,G__52343,G__52344,G__52345,G__52346,G__52347,G__52348,G__52349));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52310){
var self__ = this;
var G__52310__$1 = this;
return (new cljs.core.RecordIter((0),G__52310__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52312,other52313){
var self__ = this;
var this52312__$1 = this;
return (((!((other52313 == null)))) && ((this52312__$1.constructor === other52313.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52312__$1.fn,other52313.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52312__$1.arg0,other52313.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52312__$1.arg1,other52313.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52312__$1.arg2,other52313.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52312__$1.arg3,other52313.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52312__$1.arg4,other52313.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52312__$1.arg5,other52313.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52312__$1.arg6,other52313.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52312__$1.__extmap,other52313.__extmap)));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52310){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52380 = cljs.core.keyword_identical_QMARK_;
var expr__52381 = k__4388__auto__;
if(cljs.core.truth_((pred__52380.cljs$core$IFn$_invoke$arity$2 ? pred__52380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52381) : pred__52380.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52381)))){
return (new com.rpl.specter.impl.LateFn7(G__52310,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52380.cljs$core$IFn$_invoke$arity$2 ? pred__52380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52381) : pred__52380.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52381)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__52310,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52380.cljs$core$IFn$_invoke$arity$2 ? pred__52380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52381) : pred__52380.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52381)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__52310,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52380.cljs$core$IFn$_invoke$arity$2 ? pred__52380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52381) : pred__52380.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52381)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__52310,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52380.cljs$core$IFn$_invoke$arity$2 ? pred__52380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52381) : pred__52380.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52381)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__52310,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52380.cljs$core$IFn$_invoke$arity$2 ? pred__52380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52381) : pred__52380.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52381)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__52310,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52380.cljs$core$IFn$_invoke$arity$2 ? pred__52380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52381) : pred__52380.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52381)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__52310,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52380.cljs$core$IFn$_invoke$arity$2 ? pred__52380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52381) : pred__52380.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52381)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__52310,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52310),null));
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52310){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__52310,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null)], null);
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn7",null,(1),null));
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn7");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn7.
 */
com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn7, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__52316){
var extmap__4419__auto__ = (function (){var G__52405 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52316,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], 0));
if(cljs.core.record_QMARK_(G__52316)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52405);
} else {
return G__52405;
}
})();
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52316),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52316),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52316),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52316),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52316),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__52316),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__52316),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__52316),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn8 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52408,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52425 = k52408;
var G__52425__$1 = (((G__52425 instanceof cljs.core.Keyword))?G__52425.fqn:null);
switch (G__52425__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52408,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52429){
var vec__52430 = p__52429;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52430,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52430,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51651){
var self__ = this;
var this__46935__auto____$1 = this;
var G__52438 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51651);
var G__52439 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51651);
var G__52440 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51651);
var G__52441 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51651);
var G__52442 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51651);
var G__52443 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51651);
var G__52444 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51651);
var G__52445 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51651);
var fexpr__52437 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51651);
return (fexpr__52437.cljs$core$IFn$_invoke$arity$8 ? fexpr__52437.cljs$core$IFn$_invoke$arity$8(G__52438,G__52439,G__52440,G__52441,G__52442,G__52443,G__52444,G__52445) : fexpr__52437.call(null,G__52438,G__52439,G__52440,G__52441,G__52442,G__52443,G__52444,G__52445));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52407){
var self__ = this;
var G__52407__$1 = this;
return (new cljs.core.RecordIter((0),G__52407__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52409,other52410){
var self__ = this;
var this52409__$1 = this;
return (((!((other52410 == null)))) && ((this52409__$1.constructor === other52410.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.fn,other52410.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.arg0,other52410.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.arg1,other52410.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.arg2,other52410.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.arg3,other52410.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.arg4,other52410.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.arg5,other52410.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.arg6,other52410.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.arg7,other52410.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52409__$1.__extmap,other52410.__extmap)));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52407){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52492 = cljs.core.keyword_identical_QMARK_;
var expr__52493 = k__4388__auto__;
if(cljs.core.truth_((pred__52492.cljs$core$IFn$_invoke$arity$2 ? pred__52492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52493) : pred__52492.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52493)))){
return (new com.rpl.specter.impl.LateFn8(G__52407,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52492.cljs$core$IFn$_invoke$arity$2 ? pred__52492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52493) : pred__52492.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52493)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__52407,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52492.cljs$core$IFn$_invoke$arity$2 ? pred__52492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52493) : pred__52492.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52493)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__52407,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52492.cljs$core$IFn$_invoke$arity$2 ? pred__52492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52493) : pred__52492.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52493)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__52407,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52492.cljs$core$IFn$_invoke$arity$2 ? pred__52492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52493) : pred__52492.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52493)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__52407,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52492.cljs$core$IFn$_invoke$arity$2 ? pred__52492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52493) : pred__52492.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52493)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__52407,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52492.cljs$core$IFn$_invoke$arity$2 ? pred__52492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52493) : pred__52492.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52493)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__52407,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52492.cljs$core$IFn$_invoke$arity$2 ? pred__52492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52493) : pred__52492.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52493)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__52407,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52492.cljs$core$IFn$_invoke$arity$2 ? pred__52492.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52493) : pred__52492.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52493)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__52407,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52407),null));
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52407){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__52407,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null)], null);
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn8",null,(1),null));
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn8");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn8.
 */
com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn8, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__52413){
var extmap__4419__auto__ = (function (){var G__52519 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52413,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], 0));
if(cljs.core.record_QMARK_(G__52413)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52519);
} else {
return G__52519;
}
})();
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52413),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52413),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52413),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52413),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52413),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__52413),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__52413),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__52413),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__52413),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn9 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52525,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52546 = k52525;
var G__52546__$1 = (((G__52546 instanceof cljs.core.Keyword))?G__52546.fqn:null);
switch (G__52546__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52525,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52554){
var vec__52557 = p__52554;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52557,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52557,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51652){
var self__ = this;
var this__46935__auto____$1 = this;
var G__52563 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51652);
var G__52564 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51652);
var G__52565 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51652);
var G__52566 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51652);
var G__52567 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51652);
var G__52568 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51652);
var G__52569 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51652);
var G__52570 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51652);
var G__52571 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51652);
var fexpr__52562 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51652);
return (fexpr__52562.cljs$core$IFn$_invoke$arity$9 ? fexpr__52562.cljs$core$IFn$_invoke$arity$9(G__52563,G__52564,G__52565,G__52566,G__52567,G__52568,G__52569,G__52570,G__52571) : fexpr__52562.call(null,G__52563,G__52564,G__52565,G__52566,G__52567,G__52568,G__52569,G__52570,G__52571));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52524){
var self__ = this;
var G__52524__$1 = this;
return (new cljs.core.RecordIter((0),G__52524__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52526,other52527){
var self__ = this;
var this52526__$1 = this;
return (((!((other52527 == null)))) && ((this52526__$1.constructor === other52527.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.fn,other52527.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.arg0,other52527.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.arg1,other52527.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.arg2,other52527.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.arg3,other52527.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.arg4,other52527.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.arg5,other52527.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.arg6,other52527.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.arg7,other52527.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.arg8,other52527.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52526__$1.__extmap,other52527.__extmap)));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52524){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52603 = cljs.core.keyword_identical_QMARK_;
var expr__52604 = k__4388__auto__;
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(G__52524,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__52524,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__52524,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__52524,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__52524,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__52524,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__52524,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__52524,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__52524,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52603.cljs$core$IFn$_invoke$arity$2 ? pred__52603.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__52604) : pred__52603.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__52604)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__52524,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52524),null));
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52524){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__52524,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null)], null);
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn9",null,(1),null));
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn9");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn9.
 */
com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn9, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__52528){
var extmap__4419__auto__ = (function (){var G__52635 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52528,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], 0));
if(cljs.core.record_QMARK_(G__52528)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52635);
} else {
return G__52635;
}
})();
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52528),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52528),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52528),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52528),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52528),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__52528),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__52528),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__52528),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__52528),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__52528),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn10 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52639,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52649 = k52639;
var G__52649__$1 = (((G__52649 instanceof cljs.core.Keyword))?G__52649.fqn:null);
switch (G__52649__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52639,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52650){
var vec__52651 = p__52650;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52651,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52651,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51653){
var self__ = this;
var this__46935__auto____$1 = this;
var G__52655 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51653);
var G__52656 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51653);
var G__52657 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51653);
var G__52658 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51653);
var G__52659 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51653);
var G__52660 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51653);
var G__52661 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51653);
var G__52662 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51653);
var G__52663 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51653);
var G__52664 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51653);
var fexpr__52654 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51653);
return (fexpr__52654.cljs$core$IFn$_invoke$arity$10 ? fexpr__52654.cljs$core$IFn$_invoke$arity$10(G__52655,G__52656,G__52657,G__52658,G__52659,G__52660,G__52661,G__52662,G__52663,G__52664) : fexpr__52654.call(null,G__52655,G__52656,G__52657,G__52658,G__52659,G__52660,G__52661,G__52662,G__52663,G__52664));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52638){
var self__ = this;
var G__52638__$1 = this;
return (new cljs.core.RecordIter((0),G__52638__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52644,other52645){
var self__ = this;
var this52644__$1 = this;
return (((!((other52645 == null)))) && ((this52644__$1.constructor === other52645.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.fn,other52645.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg0,other52645.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg1,other52645.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg2,other52645.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg3,other52645.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg4,other52645.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg5,other52645.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg6,other52645.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg7,other52645.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg8,other52645.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.arg9,other52645.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52644__$1.__extmap,other52645.__extmap)));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52638){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52698 = cljs.core.keyword_identical_QMARK_;
var expr__52699 = k__4388__auto__;
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(G__52638,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__52638,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__52638,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__52638,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__52638,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__52638,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__52638,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__52638,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__52638,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__52638,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52698.cljs$core$IFn$_invoke$arity$2 ? pred__52698.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__52699) : pred__52698.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__52699)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__52638,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52638),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52638){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__52638,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null)], null);
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn10",null,(1),null));
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn10");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn10.
 */
com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn10, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__52648){
var extmap__4419__auto__ = (function (){var G__52732 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52648,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], 0));
if(cljs.core.record_QMARK_(G__52648)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52732);
} else {
return G__52732;
}
})();
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__52648),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__52648),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn11 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52738,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52752 = k52738;
var G__52752__$1 = (((G__52752 instanceof cljs.core.Keyword))?G__52752.fqn:null);
switch (G__52752__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52738,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52762){
var vec__52763 = p__52762;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52763,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52763,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51654){
var self__ = this;
var this__46935__auto____$1 = this;
var G__52767 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51654);
var G__52768 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51654);
var G__52769 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51654);
var G__52770 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51654);
var G__52771 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51654);
var G__52772 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51654);
var G__52773 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51654);
var G__52774 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51654);
var G__52775 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51654);
var G__52776 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51654);
var G__52777 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params51654);
var fexpr__52766 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51654);
return (fexpr__52766.cljs$core$IFn$_invoke$arity$11 ? fexpr__52766.cljs$core$IFn$_invoke$arity$11(G__52767,G__52768,G__52769,G__52770,G__52771,G__52772,G__52773,G__52774,G__52775,G__52776,G__52777) : fexpr__52766.call(null,G__52767,G__52768,G__52769,G__52770,G__52771,G__52772,G__52773,G__52774,G__52775,G__52776,G__52777));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52737){
var self__ = this;
var G__52737__$1 = this;
return (new cljs.core.RecordIter((0),G__52737__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52739,other52740){
var self__ = this;
var this52739__$1 = this;
return (((!((other52740 == null)))) && ((this52739__$1.constructor === other52740.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.fn,other52740.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg0,other52740.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg1,other52740.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg2,other52740.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg3,other52740.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg4,other52740.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg5,other52740.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg6,other52740.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg7,other52740.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg8,other52740.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg9,other52740.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.arg10,other52740.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52739__$1.__extmap,other52740.__extmap)));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52737){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52839 = cljs.core.keyword_identical_QMARK_;
var expr__52840 = k__4388__auto__;
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(G__52737,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__52737,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__52737,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__52737,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__52737,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__52737,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__52737,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__52737,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__52737,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__52737,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__52737,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52839.cljs$core$IFn$_invoke$arity$2 ? pred__52839.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__52840) : pred__52839.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__52840)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__52737,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52737),null));
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52737){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__52737,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null)], null);
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn11",null,(1),null));
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn11");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn11.
 */
com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn11, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__52745){
var extmap__4419__auto__ = (function (){var G__52886 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52745,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], 0));
if(cljs.core.record_QMARK_(G__52745)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52886);
} else {
return G__52886;
}
})();
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__52745),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__52745),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn12 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52890,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52898 = k52890;
var G__52898__$1 = (((G__52898 instanceof cljs.core.Keyword))?G__52898.fqn:null);
switch (G__52898__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52890,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52900){
var vec__52901 = p__52900;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52901,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52901,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51655){
var self__ = this;
var this__46935__auto____$1 = this;
var G__52909 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51655);
var G__52910 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51655);
var G__52911 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51655);
var G__52912 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51655);
var G__52913 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51655);
var G__52914 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51655);
var G__52915 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51655);
var G__52916 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51655);
var G__52917 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51655);
var G__52918 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51655);
var G__52919 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params51655);
var G__52920 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params51655);
var fexpr__52908 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51655);
return (fexpr__52908.cljs$core$IFn$_invoke$arity$12 ? fexpr__52908.cljs$core$IFn$_invoke$arity$12(G__52909,G__52910,G__52911,G__52912,G__52913,G__52914,G__52915,G__52916,G__52917,G__52918,G__52919,G__52920) : fexpr__52908.call(null,G__52909,G__52910,G__52911,G__52912,G__52913,G__52914,G__52915,G__52916,G__52917,G__52918,G__52919,G__52920));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52889){
var self__ = this;
var G__52889__$1 = this;
return (new cljs.core.RecordIter((0),G__52889__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52891,other52892){
var self__ = this;
var this52891__$1 = this;
return (((!((other52892 == null)))) && ((this52891__$1.constructor === other52892.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.fn,other52892.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg0,other52892.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg1,other52892.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg2,other52892.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg3,other52892.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg4,other52892.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg5,other52892.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg6,other52892.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg7,other52892.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg8,other52892.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg9,other52892.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg10,other52892.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.arg11,other52892.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52891__$1.__extmap,other52892.__extmap)));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52889){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52944 = cljs.core.keyword_identical_QMARK_;
var expr__52945 = k__4388__auto__;
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(G__52889,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__52889,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__52889,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__52889,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__52889,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__52889,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__52889,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__52889,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__52889,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__52889,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__52889,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__52889,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52944.cljs$core$IFn$_invoke$arity$2 ? pred__52944.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__52945) : pred__52944.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__52945)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__52889,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52889),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52889){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__52889,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null)], null);
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn12",null,(1),null));
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn12");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn12.
 */
com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn12, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__52895){
var extmap__4419__auto__ = (function (){var G__52978 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52895,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], 0));
if(cljs.core.record_QMARK_(G__52895)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52978);
} else {
return G__52978;
}
})();
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__52895),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__52895),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn13 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52983,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52994 = k52983;
var G__52994__$1 = (((G__52994 instanceof cljs.core.Keyword))?G__52994.fqn:null);
switch (G__52994__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52983,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52995){
var vec__52996 = p__52995;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52996,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52996,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51656){
var self__ = this;
var this__46935__auto____$1 = this;
var G__53000 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51656);
var G__53001 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51656);
var G__53002 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51656);
var G__53003 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51656);
var G__53004 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51656);
var G__53005 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51656);
var G__53006 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51656);
var G__53007 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51656);
var G__53008 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51656);
var G__53009 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51656);
var G__53010 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params51656);
var G__53011 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params51656);
var G__53012 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params51656);
var fexpr__52999 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51656);
return (fexpr__52999.cljs$core$IFn$_invoke$arity$13 ? fexpr__52999.cljs$core$IFn$_invoke$arity$13(G__53000,G__53001,G__53002,G__53003,G__53004,G__53005,G__53006,G__53007,G__53008,G__53009,G__53010,G__53011,G__53012) : fexpr__52999.call(null,G__53000,G__53001,G__53002,G__53003,G__53004,G__53005,G__53006,G__53007,G__53008,G__53009,G__53010,G__53011,G__53012));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52982){
var self__ = this;
var G__52982__$1 = this;
return (new cljs.core.RecordIter((0),G__52982__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52984,other52985){
var self__ = this;
var this52984__$1 = this;
return (((!((other52985 == null)))) && ((this52984__$1.constructor === other52985.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.fn,other52985.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg0,other52985.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg1,other52985.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg2,other52985.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg3,other52985.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg4,other52985.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg5,other52985.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg6,other52985.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg7,other52985.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg8,other52985.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg9,other52985.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg10,other52985.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg11,other52985.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.arg12,other52985.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52984__$1.__extmap,other52985.__extmap)));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52982){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53061 = cljs.core.keyword_identical_QMARK_;
var expr__53062 = k__4388__auto__;
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(G__52982,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__52982,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__52982,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__52982,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__52982,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__52982,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__52982,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__52982,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__52982,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__52982,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__52982,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__52982,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__52982,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53061.cljs$core$IFn$_invoke$arity$2 ? pred__53061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53062) : pred__53061.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53062)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__52982,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52982),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52982){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__52982,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null)], null);
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn13",null,(1),null));
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn13");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn13.
 */
com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn13, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__52987){
var extmap__4419__auto__ = (function (){var G__53110 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52987,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], 0));
if(cljs.core.record_QMARK_(G__52987)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53110);
} else {
return G__53110;
}
})();
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__52987),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__52987),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn14 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53115,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53121 = k53115;
var G__53121__$1 = (((G__53121 instanceof cljs.core.Keyword))?G__53121.fqn:null);
switch (G__53121__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53115,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53127){
var vec__53129 = p__53127;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53129,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53129,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51657){
var self__ = this;
var this__46935__auto____$1 = this;
var G__53133 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51657);
var G__53134 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51657);
var G__53135 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51657);
var G__53136 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51657);
var G__53137 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51657);
var G__53138 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51657);
var G__53139 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51657);
var G__53140 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51657);
var G__53141 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51657);
var G__53142 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51657);
var G__53143 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params51657);
var G__53144 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params51657);
var G__53145 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params51657);
var G__53146 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params51657);
var fexpr__53132 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51657);
return (fexpr__53132.cljs$core$IFn$_invoke$arity$14 ? fexpr__53132.cljs$core$IFn$_invoke$arity$14(G__53133,G__53134,G__53135,G__53136,G__53137,G__53138,G__53139,G__53140,G__53141,G__53142,G__53143,G__53144,G__53145,G__53146) : fexpr__53132.call(null,G__53133,G__53134,G__53135,G__53136,G__53137,G__53138,G__53139,G__53140,G__53141,G__53142,G__53143,G__53144,G__53145,G__53146));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53114){
var self__ = this;
var G__53114__$1 = this;
return (new cljs.core.RecordIter((0),G__53114__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53116,other53117){
var self__ = this;
var this53116__$1 = this;
return (((!((other53117 == null)))) && ((this53116__$1.constructor === other53117.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.fn,other53117.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg0,other53117.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg1,other53117.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg2,other53117.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg3,other53117.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg4,other53117.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg5,other53117.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg6,other53117.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg7,other53117.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg8,other53117.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg9,other53117.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg10,other53117.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg11,other53117.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg12,other53117.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.arg13,other53117.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53116__$1.__extmap,other53117.__extmap)));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53114){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53217 = cljs.core.keyword_identical_QMARK_;
var expr__53218 = k__4388__auto__;
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(G__53114,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__53114,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__53114,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__53114,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__53114,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__53114,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__53114,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__53114,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__53114,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__53114,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__53114,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__53114,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__53114,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__53114,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53218)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__53114,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53114),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53114){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__53114,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null)], null);
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn14",null,(1),null));
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn14");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn14.
 */
com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn14, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__53118){
var extmap__4419__auto__ = (function (){var G__53237 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53118,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], 0));
if(cljs.core.record_QMARK_(G__53118)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53237);
} else {
return G__53237;
}
})();
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__53118),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__53118),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn15 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53253,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53274 = k53253;
var G__53274__$1 = (((G__53274 instanceof cljs.core.Keyword))?G__53274.fqn:null);
switch (G__53274__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53253,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53278){
var vec__53282 = p__53278;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53282,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53282,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51658){
var self__ = this;
var this__46935__auto____$1 = this;
var G__53286 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51658);
var G__53287 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51658);
var G__53288 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51658);
var G__53289 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51658);
var G__53290 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51658);
var G__53291 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51658);
var G__53292 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51658);
var G__53293 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51658);
var G__53294 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51658);
var G__53295 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51658);
var G__53296 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params51658);
var G__53297 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params51658);
var G__53298 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params51658);
var G__53299 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params51658);
var G__53300 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params51658);
var fexpr__53285 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51658);
return (fexpr__53285.cljs$core$IFn$_invoke$arity$15 ? fexpr__53285.cljs$core$IFn$_invoke$arity$15(G__53286,G__53287,G__53288,G__53289,G__53290,G__53291,G__53292,G__53293,G__53294,G__53295,G__53296,G__53297,G__53298,G__53299,G__53300) : fexpr__53285.call(null,G__53286,G__53287,G__53288,G__53289,G__53290,G__53291,G__53292,G__53293,G__53294,G__53295,G__53296,G__53297,G__53298,G__53299,G__53300));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53252){
var self__ = this;
var G__53252__$1 = this;
return (new cljs.core.RecordIter((0),G__53252__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53254,other53255){
var self__ = this;
var this53254__$1 = this;
return (((!((other53255 == null)))) && ((this53254__$1.constructor === other53255.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.fn,other53255.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg0,other53255.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg1,other53255.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg2,other53255.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg3,other53255.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg4,other53255.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg5,other53255.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg6,other53255.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg7,other53255.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg8,other53255.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg9,other53255.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg10,other53255.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg11,other53255.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg12,other53255.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg13,other53255.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.arg14,other53255.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53254__$1.__extmap,other53255.__extmap)));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53252){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53348 = cljs.core.keyword_identical_QMARK_;
var expr__53349 = k__4388__auto__;
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(G__53252,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__53252,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__53252,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__53252,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__53252,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__53252,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__53252,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__53252,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__53252,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__53252,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__53252,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__53252,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__53252,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__53252,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__53252,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53348.cljs$core$IFn$_invoke$arity$2 ? pred__53348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53349) : pred__53348.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53349)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__53252,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53252),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53252){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__53252,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null)], null);
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn15",null,(1),null));
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn15");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn15.
 */
com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn15, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__53265){
var extmap__4419__auto__ = (function (){var G__53412 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53265,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], 0));
if(cljs.core.record_QMARK_(G__53265)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53412);
} else {
return G__53412;
}
})();
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__53265),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__53265),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn16 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53415,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53452 = k53415;
var G__53452__$1 = (((G__53452 instanceof cljs.core.Keyword))?G__53452.fqn:null);
switch (G__53452__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53415,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53461){
var vec__53466 = p__53461;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53466,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53466,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51659){
var self__ = this;
var this__46935__auto____$1 = this;
var G__53477 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51659);
var G__53478 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51659);
var G__53479 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51659);
var G__53480 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51659);
var G__53481 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51659);
var G__53482 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51659);
var G__53483 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51659);
var G__53484 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51659);
var G__53485 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51659);
var G__53486 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51659);
var G__53487 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params51659);
var G__53488 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params51659);
var G__53489 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params51659);
var G__53490 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params51659);
var G__53491 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params51659);
var G__53492 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params51659);
var fexpr__53476 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51659);
return (fexpr__53476.cljs$core$IFn$_invoke$arity$16 ? fexpr__53476.cljs$core$IFn$_invoke$arity$16(G__53477,G__53478,G__53479,G__53480,G__53481,G__53482,G__53483,G__53484,G__53485,G__53486,G__53487,G__53488,G__53489,G__53490,G__53491,G__53492) : fexpr__53476.call(null,G__53477,G__53478,G__53479,G__53480,G__53481,G__53482,G__53483,G__53484,G__53485,G__53486,G__53487,G__53488,G__53489,G__53490,G__53491,G__53492));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53414){
var self__ = this;
var G__53414__$1 = this;
return (new cljs.core.RecordIter((0),G__53414__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53416,other53417){
var self__ = this;
var this53416__$1 = this;
return (((!((other53417 == null)))) && ((this53416__$1.constructor === other53417.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.fn,other53417.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg0,other53417.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg1,other53417.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg2,other53417.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg3,other53417.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg4,other53417.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg5,other53417.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg6,other53417.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg7,other53417.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg8,other53417.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg9,other53417.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg10,other53417.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg11,other53417.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg12,other53417.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg13,other53417.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg14,other53417.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.arg15,other53417.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53416__$1.__extmap,other53417.__extmap)));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53414){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53553 = cljs.core.keyword_identical_QMARK_;
var expr__53554 = k__4388__auto__;
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(G__53414,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__53414,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__53414,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__53414,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__53414,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__53414,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__53414,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__53414,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__53414,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__53414,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__53414,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__53414,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__53414,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__53414,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__53414,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__53414,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53553.cljs$core$IFn$_invoke$arity$2 ? pred__53553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__53554) : pred__53553.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__53554)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__53414,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53414),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53414){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__53414,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null)], null);
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn16",null,(1),null));
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn16");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn16.
 */
com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn16, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__53420){
var extmap__4419__auto__ = (function (){var G__53586 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53420,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], 0));
if(cljs.core.record_QMARK_(G__53420)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53586);
} else {
return G__53586;
}
})();
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__53420),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__53420),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn17 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53589,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53607 = k53589;
var G__53607__$1 = (((G__53607 instanceof cljs.core.Keyword))?G__53607.fqn:null);
switch (G__53607__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53589,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53624){
var vec__53625 = p__53624;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51660){
var self__ = this;
var this__46935__auto____$1 = this;
var G__53637 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51660);
var G__53638 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51660);
var G__53639 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51660);
var G__53640 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51660);
var G__53641 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51660);
var G__53642 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51660);
var G__53643 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51660);
var G__53644 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51660);
var G__53645 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51660);
var G__53646 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51660);
var G__53647 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params51660);
var G__53648 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params51660);
var G__53649 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params51660);
var G__53650 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params51660);
var G__53651 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params51660);
var G__53652 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params51660);
var G__53653 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params51660);
var fexpr__53636 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51660);
return (fexpr__53636.cljs$core$IFn$_invoke$arity$17 ? fexpr__53636.cljs$core$IFn$_invoke$arity$17(G__53637,G__53638,G__53639,G__53640,G__53641,G__53642,G__53643,G__53644,G__53645,G__53646,G__53647,G__53648,G__53649,G__53650,G__53651,G__53652,G__53653) : fexpr__53636.call(null,G__53637,G__53638,G__53639,G__53640,G__53641,G__53642,G__53643,G__53644,G__53645,G__53646,G__53647,G__53648,G__53649,G__53650,G__53651,G__53652,G__53653));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53588){
var self__ = this;
var G__53588__$1 = this;
return (new cljs.core.RecordIter((0),G__53588__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53590,other53591){
var self__ = this;
var this53590__$1 = this;
return (((!((other53591 == null)))) && ((this53590__$1.constructor === other53591.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.fn,other53591.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg0,other53591.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg1,other53591.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg2,other53591.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg3,other53591.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg4,other53591.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg5,other53591.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg6,other53591.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg7,other53591.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg8,other53591.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg9,other53591.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg10,other53591.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg11,other53591.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg12,other53591.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg13,other53591.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg14,other53591.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg15,other53591.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.arg16,other53591.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53590__$1.__extmap,other53591.__extmap)));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53588){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53688 = cljs.core.keyword_identical_QMARK_;
var expr__53689 = k__4388__auto__;
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(G__53588,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__53588,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__53588,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__53588,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__53588,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__53588,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__53588,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__53588,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__53588,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__53588,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__53588,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__53588,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__53588,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__53588,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__53588,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__53588,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__53588,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53688.cljs$core$IFn$_invoke$arity$2 ? pred__53688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__53689) : pred__53688.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__53689)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__53588,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53588),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53588){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__53588,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null)], null);
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn17",null,(1),null));
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn17");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn17.
 */
com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn17, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__53599){
var extmap__4419__auto__ = (function (){var G__53731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53599,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], 0));
if(cljs.core.record_QMARK_(G__53599)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53731);
} else {
return G__53731;
}
})();
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__53599),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__53599),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn18 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53735,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53743 = k53735;
var G__53743__$1 = (((G__53743 instanceof cljs.core.Keyword))?G__53743.fqn:null);
switch (G__53743__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53735,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53751){
var vec__53752 = p__53751;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53752,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53752,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51661){
var self__ = this;
var this__46935__auto____$1 = this;
var G__53759 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51661);
var G__53760 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51661);
var G__53761 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51661);
var G__53762 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51661);
var G__53763 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51661);
var G__53764 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51661);
var G__53765 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51661);
var G__53766 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51661);
var G__53767 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51661);
var G__53768 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51661);
var G__53769 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params51661);
var G__53770 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params51661);
var G__53771 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params51661);
var G__53772 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params51661);
var G__53773 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params51661);
var G__53774 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params51661);
var G__53775 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params51661);
var G__53776 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params51661);
var fexpr__53758 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51661);
return (fexpr__53758.cljs$core$IFn$_invoke$arity$18 ? fexpr__53758.cljs$core$IFn$_invoke$arity$18(G__53759,G__53760,G__53761,G__53762,G__53763,G__53764,G__53765,G__53766,G__53767,G__53768,G__53769,G__53770,G__53771,G__53772,G__53773,G__53774,G__53775,G__53776) : fexpr__53758.call(null,G__53759,G__53760,G__53761,G__53762,G__53763,G__53764,G__53765,G__53766,G__53767,G__53768,G__53769,G__53770,G__53771,G__53772,G__53773,G__53774,G__53775,G__53776));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53734){
var self__ = this;
var G__53734__$1 = this;
return (new cljs.core.RecordIter((0),G__53734__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53736,other53737){
var self__ = this;
var this53736__$1 = this;
return (((!((other53737 == null)))) && ((this53736__$1.constructor === other53737.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.fn,other53737.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg0,other53737.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg1,other53737.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg2,other53737.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg3,other53737.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg4,other53737.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg5,other53737.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg6,other53737.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg7,other53737.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg8,other53737.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg9,other53737.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg10,other53737.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg11,other53737.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg12,other53737.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg13,other53737.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg14,other53737.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg15,other53737.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg16,other53737.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.arg17,other53737.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53736__$1.__extmap,other53737.__extmap)));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53734){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53826 = cljs.core.keyword_identical_QMARK_;
var expr__53827 = k__4388__auto__;
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(G__53734,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__53734,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__53734,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__53734,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__53734,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__53734,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__53734,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__53734,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__53734,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__53734,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__53734,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__53734,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__53734,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__53734,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__53734,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__53734,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__53734,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__53734,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53826.cljs$core$IFn$_invoke$arity$2 ? pred__53826.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__53827) : pred__53826.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__53827)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__53734,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53734),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53734){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__53734,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null)], null);
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn18",null,(1),null));
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn18");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn18.
 */
com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn18, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__53738){
var extmap__4419__auto__ = (function (){var G__53849 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53738,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], 0));
if(cljs.core.record_QMARK_(G__53738)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53849);
} else {
return G__53849;
}
})();
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__53738),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__53738),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
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
com.rpl.specter.impl.LateFn19 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.arg18 = arg18;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k53851,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__53864 = k53851;
var G__53864__$1 = (((G__53864 instanceof cljs.core.Keyword))?G__53864.fqn:null);
switch (G__53864__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
case "arg18":
return self__.arg18;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53851,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__53867){
var vec__53868 = p__53867;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53868,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53868,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__46935__auto__,dynamic_params51662){
var self__ = this;
var this__46935__auto____$1 = this;
var G__53873 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params51662);
var G__53874 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params51662);
var G__53875 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params51662);
var G__53876 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params51662);
var G__53877 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params51662);
var G__53878 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params51662);
var G__53879 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params51662);
var G__53880 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params51662);
var G__53881 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params51662);
var G__53882 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params51662);
var G__53883 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params51662);
var G__53884 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params51662);
var G__53885 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params51662);
var G__53886 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params51662);
var G__53887 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params51662);
var G__53888 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params51662);
var G__53889 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params51662);
var G__53890 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params51662);
var G__53891 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params51662);
var fexpr__53872 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params51662);
return (fexpr__53872.cljs$core$IFn$_invoke$arity$19 ? fexpr__53872.cljs$core$IFn$_invoke$arity$19(G__53873,G__53874,G__53875,G__53876,G__53877,G__53878,G__53879,G__53880,G__53881,G__53882,G__53883,G__53884,G__53885,G__53886,G__53887,G__53888,G__53889,G__53890,G__53891) : fexpr__53872.call(null,G__53873,G__53874,G__53875,G__53876,G__53877,G__53878,G__53879,G__53880,G__53881,G__53882,G__53883,G__53884,G__53885,G__53886,G__53887,G__53888,G__53889,G__53890,G__53891));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53850){
var self__ = this;
var G__53850__$1 = this;
return (new cljs.core.RecordIter((0),G__53850__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53852,other53853){
var self__ = this;
var this53852__$1 = this;
return (((!((other53853 == null)))) && ((this53852__$1.constructor === other53853.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.fn,other53853.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg0,other53853.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg1,other53853.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg2,other53853.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg3,other53853.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg4,other53853.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg5,other53853.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg6,other53853.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg7,other53853.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg8,other53853.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg9,other53853.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg10,other53853.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg11,other53853.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg12,other53853.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg13,other53853.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg14,other53853.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg15,other53853.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg16,other53853.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg17,other53853.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.arg18,other53853.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53852__$1.__extmap,other53853.__extmap)));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__53850){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__53945 = cljs.core.keyword_identical_QMARK_;
var expr__53946 = k__4388__auto__;
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(G__53850,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__53850,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__53850,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__53850,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__53850,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__53850,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__53850,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__53850,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__53850,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__53850,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__53850,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__53850,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__53850,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__53850,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__53850,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__53850,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__53850,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__53850,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__53850,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53945.cljs$core$IFn$_invoke$arity$2 ? pred__53945.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__53946) : pred__53945.call(null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__53946)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__53850,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__53850),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__53850){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__53850,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null),new cljs.core.Symbol(null,"arg18","arg18",-1203928417,null)], null);
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn19",null,(1),null));
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn19");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn19.
 */
com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn19, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__53854){
var extmap__4419__auto__ = (function (){var G__53983 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53854,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], 0));
if(cljs.core.record_QMARK_(G__53854)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53983);
} else {
return G__53983;
}
})();
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__53854),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__53854),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn53987,args53988){
var G__53989 = cljs.core.count(args53988);
switch (G__53989) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn53987);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn53987,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args53988,(17)));

break;
default:
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cannot have late function with more than 18 args"], 0));

}
});
com.rpl.specter.impl.static_fn_code = (function com$rpl$specter$impl$static_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(com.rpl.specter.impl.__GT_StaticParam(afn),args);
});
com.rpl.specter.impl.dynamic_fn_code = (function com$rpl$specter$impl$dynamic_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(afn,args);
});
com.rpl.specter.impl.dynamic_val_code = (function com$rpl$specter$impl$dynamic_val_code(code,possible_params){
var vec__54017 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54017,(0),null);
if((i == null)){
com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not find ",code," in possible params ",possible_params], 0));
} else {
}

return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_LocalParam(i),com.rpl.specter.impl.direct_nav_QMARK_(code));
});
com.rpl.specter.impl.static_val_code = (function com$rpl$specter$impl$static_val_code(o){
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_StaticParam(o),com.rpl.specter.impl.direct_nav_QMARK_(o));
});
com.rpl.specter.impl.dynamic__GT_code = (function com$rpl$specter$impl$dynamic__GT_code(o){
return com.rpl.specter.impl.walk_until(com.rpl.specter.impl.dynamic_param_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),o);
});
com.rpl.specter.impl.resolve_arg_code = (function com$rpl$specter$impl$resolve_arg_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var op = (function (){var G__54024 = o.op;
var G__54025 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__54024,G__54025) : com.rpl.specter.impl.resolve_arg_code.call(null,G__54024,G__54025));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54021_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__54021_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null,p1__54021_SHARP_,possible_params));
}),o.params);
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.dynamic_fn_code(com.rpl.specter.impl.original_obj(op),params),com.rpl.specter.impl.direct_nav_QMARK_(o.op));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return com.rpl.specter.impl.dynamic_val_code(o.code,possible_params);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(o,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,o,possible_params));
} else {
if((com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,o))){
return com.rpl.specter.impl.static_val_code(o);
} else {
var G__54026 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__54027 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__54026,G__54027) : com.rpl.specter.impl.resolve_arg_code.call(null,G__54026,G__54027));
}

}
}
}
});
com.rpl.specter.impl.resolve_nav_code = (function com$rpl$specter$impl$resolve_nav_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicPath)){
var path = o.path;
if(cljs.core.sequential_QMARK_(path)){
var resolved = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54028_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__54028_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,p1__54028_SHARP_,possible_params));
}),path));
if(cljs.core.empty_QMARK_(resolved)){
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.STAY_STAR_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(resolved))){
return cljs.core.first(resolved);
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.comp_navs,resolved);

}
}
} else {
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(path,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,path,possible_params));
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
var code = o.code;
var d = com.rpl.specter.impl.dynamic_val_code(code,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(code))){
return d;
} else {
if(((cljs.core.set_QMARK_(code)) || (((com.rpl.specter.impl.fn_invocation_QMARK_(code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.first(code))))))){
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.pred_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));

}
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var res = com.rpl.specter.impl.resolve_arg_code(o,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(res))){
return res;
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
}
} else {
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.coerce_nav(o));

}
}
}
});
com.rpl.specter.impl.used_locals = (function com$rpl$specter$impl$used_locals(locals_set,form){
var used_locals_cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (e){
if(cljs.core.contains_QMARK_(locals_set,e)){
return com.rpl.specter.impl.update_cell_BANG_(used_locals_cell,(function (p1__54060_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__54060_SHARP_,e);
}));
} else {
return e;
}
}),form);

return com.rpl.specter.impl.get_cell(used_locals_cell);
});
com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_ = false;
com.rpl.specter.impl.mk_fn_name_strs = (function com$rpl$specter$impl$mk_fn_name_strs(o){
return clojure.walk.postwalk((function (e){
if(cljs.core.fn_QMARK_(e)){
return cljs.core.re_find(/ .*/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)));
} else {
return e;
}
}),o);
});
com.rpl.specter.impl._STAR_path_compile_files_STAR_ = false;
com.rpl.specter.impl.mk_dynamic_path_maker = (function com$rpl$specter$impl$mk_dynamic_path_maker(resolved_code,ns_str,used_locals_list,possible_params){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Possible params:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([possible_params], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nProduced dynamic object:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.rpl.specter.impl.mk_fn_name_strs(resolved_code)], 0));

cljs.core.println();
} else {
}

return (function (dynamic_params){
return com.rpl.specter.impl.late_resolve(resolved_code,dynamic_params);
});
});
com.rpl.specter.impl.magic_precompilation = (function com$rpl$specter$impl$magic_precompilation(path,ns_str,used_locals_list,possible_params){
var magic_path = com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.magic_precompilation_STAR_(path));
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Inline caching debug information"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Input path:",path,"\n"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processed path:",magic_path,"\n"], 0));
} else {
}

if(com.rpl.specter.impl.rich_nav_QMARK_(magic_path)){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Static result:",magic_path], 0));
} else {
}

return com.rpl.specter.impl.__GT_CachedPathInfo(false,magic_path);
} else {
var maker = com.rpl.specter.impl.mk_dynamic_path_maker(com.rpl.specter.impl.resolve_nav_code(com.rpl.specter.impl.__GT_DynamicPath(magic_path),possible_params),ns_str,used_locals_list,possible_params);
return com.rpl.specter.impl.__GT_CachedPathInfo(true,maker);
}
});
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.fast_constantly(val),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___57007 = arguments.length;
var i__4737__auto___57008 = (0);
while(true){
if((i__4737__auto___57008 < len__4736__auto___57007)){
args__4742__auto__.push((arguments[i__4737__auto___57008]));

var G__57010 = (i__4737__auto___57008 + (1));
i__4737__auto___57008 = G__57010;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__54105){
var map__54106 = p__54105;
var map__54106__$1 = (((((!((map__54106 == null))))?(((((map__54106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54106):map__54106);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54106__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,(function() { 
var G__57017__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__54110 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54110,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54110,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__54113 = com.rpl.specter.impl.get_cell(state);
var G__54114 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__54113,G__54114) : merge_fn.call(null,G__54113,G__54114));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__57017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57023__i = 0, G__57023__a = new Array(arguments.length -  0);
while (G__57023__i < G__57023__a.length) {G__57023__a[G__57023__i] = arguments[G__57023__i + 0]; ++G__57023__i;}
  args = new cljs.core.IndexedSeq(G__57023__a,0,null);
} 
return G__57017__delegate.call(this,args);};
G__57017.cljs$lang$maxFixedArity = 0;
G__57017.cljs$lang$applyTo = (function (arglist__57024){
var args = cljs.core.seq(arglist__57024);
return G__57017__delegate(args);
});
G__57017.cljs$core$IFn$_invoke$arity$variadic = G__57017__delegate;
return G__57017;
})()
,structure),com.rpl.specter.impl.get_cell(state)], null);
}));

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq54101){
var G__54102 = cljs.core.first(seq54101);
var seq54101__$1 = cljs.core.next(seq54101);
var G__54103 = cljs.core.first(seq54101__$1);
var seq54101__$2 = cljs.core.next(seq54101__$1);
var G__54104 = cljs.core.first(seq54101__$2);
var seq54101__$3 = cljs.core.next(seq54101__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54102,G__54103,G__54104,seq54101__$3);
}));

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___57029 = arguments.length;
var i__4737__auto___57031 = (0);
while(true){
if((i__4737__auto___57031 < len__4736__auto___57029)){
args__4742__auto__.push((arguments[i__4737__auto___57031]));

var G__57033 = (i__4737__auto___57031 + (1));
i__4737__auto___57031 = G__57033;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav], 0));
}));

(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq54119){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54119));
}));

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=com.rpl.specter.impl.js.map
