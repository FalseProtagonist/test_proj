goog.provide('com.rpl.specter');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__58936__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__58936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58937__i = 0, G__58937__a = new Array(arguments.length -  0);
while (G__58937__i < G__58937__a.length) {G__58937__a[G__58937__i] = arguments[G__58937__i + 0]; ++G__58937__i;}
  args = new cljs.core.IndexedSeq(G__58937__a,0,null);
} 
return G__58936__delegate.call(this,args);};
G__58936.cljs$lang$maxFixedArity = 0;
G__58936.cljs$lang$applyTo = (function (arglist__58938){
var args = cljs.core.seq(arglist__58938);
return G__58936__delegate(args);
});
G__58936.cljs$core$IFn$_invoke$arity$variadic = G__58936__delegate;
return G__58936;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58939 = arguments.length;
var i__4737__auto___58940 = (0);
while(true){
if((i__4737__auto___58940 < len__4736__auto___58939)){
args__4742__auto__.push((arguments[i__4737__auto___58940]));

var G__58941 = (i__4737__auto___58940 + (1));
i__4737__auto___58940 = G__58941;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq57859){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57859));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__57871 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57872 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__57871,G__57872) : com.rpl.specter.compiled_select.call(null,G__57871,G__57872));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__57880 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57881 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__57880,G__57881) : com.rpl.specter.compiled_select_one.call(null,G__57880,G__57881));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__57883 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57884 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__57883,G__57884) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__57883,G__57884));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__57887 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57888 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__57887,G__57888) : com.rpl.specter.compiled_select_first.call(null,G__57887,G__57888));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__57895 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57896 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__57895,G__57896) : com.rpl.specter.compiled_select_any.call(null,G__57895,G__57896));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__57900 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57901 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__57900,G__57901) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__57900,G__57901));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__57905 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__57906 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__57905,G__57906) : com.rpl.specter.compiled_traverse.call(null,G__57905,G__57906));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__57918 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__57918) : com.rpl.specter.compiled_traverse_all.call(null,G__57918));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__57921 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57922 = transform_fn;
var G__57923 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__57921,G__57922,G__57923) : com.rpl.specter.compiled_transform.call(null,G__57921,G__57922,G__57923));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__57924 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57925 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__57924,G__57925) : com.rpl.specter.compiled_multi_transform.call(null,G__57924,G__57925));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__57928 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57929 = val;
var G__57930 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__57928,G__57929,G__57930) : com.rpl.specter.compiled_setval.call(null,G__57928,G__57929,G__57930));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___58942 = arguments.length;
var i__4737__auto___58943 = (0);
while(true){
if((i__4737__auto___58943 < len__4736__auto___58942)){
args__4742__auto__.push((arguments[i__4737__auto___58943]));

var G__58944 = (i__4737__auto___58943 + (1));
i__4737__auto___58943 = G__58944;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__57951){
var map__57952 = p__57951;
var map__57952__$1 = (((((!((map__57952 == null))))?(((((map__57952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57952):map__57952);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57952__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__57955 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__57956 = transform_fn;
var G__57957 = structure;
var G__57958 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__57959 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__57955,G__57956,G__57957,G__57958,G__57959) : com.rpl.specter.compiled_replace_in.call(null,G__57955,G__57956,G__57957,G__57958,G__57959));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq57938){
var G__57940 = cljs.core.first(seq57938);
var seq57938__$1 = cljs.core.next(seq57938);
var G__57941 = cljs.core.first(seq57938__$1);
var seq57938__$2 = cljs.core.next(seq57938__$1);
var G__57942 = cljs.core.first(seq57938__$2);
var seq57938__$3 = cljs.core.next(seq57938__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57940,G__57941,G__57942,seq57938__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__58948__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__58948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58949__i = 0, G__58949__a = new Array(arguments.length -  0);
while (G__58949__i < G__58949__a.length) {G__58949__a[G__58949__i] = arguments[G__58949__i + 0]; ++G__58949__i;}
  args = new cljs.core.IndexedSeq(G__58949__a,0,null);
} 
return G__58948__delegate.call(this,args);};
G__58948.cljs$lang$maxFixedArity = 0;
G__58948.cljs$lang$applyTo = (function (arglist__58950){
var args = cljs.core.seq(arglist__58950);
return G__58948__delegate(args);
});
G__58948.cljs$core$IFn$_invoke$arity$variadic = G__58948__delegate;
return G__58948;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter57964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter57964 = (function (meta57965){
this.meta57965 = meta57965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter57964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57966,meta57965__$1){
var self__ = this;
var _57966__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter57964(meta57965__$1));
}));

(com.rpl.specter.t_com$rpl$specter57964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57966){
var self__ = this;
var _57966__$1 = this;
return self__.meta57965;
}));

(com.rpl.specter.t_com$rpl$specter57964.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter57964.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter57964.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter57964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57965","meta57965",1217151856,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter57964.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter57964.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter57964");

(com.rpl.specter.t_com$rpl$specter57964.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter57964");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter57964.
 */
com.rpl.specter.__GT_t_com$rpl$specter57964 = (function com$rpl$specter$__GT_t_com$rpl$specter57964(meta57965){
return (new com.rpl.specter.t_com$rpl$specter57964(meta57965));
});

}

return (new com.rpl.specter.t_com$rpl$specter57964(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter57988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter57988 = (function (afn,meta57989){
this.afn = afn;
this.meta57989 = meta57989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter57988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57990,meta57989__$1){
var self__ = this;
var _57990__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter57988(self__.afn,meta57989__$1));
}));

(com.rpl.specter.t_com$rpl$specter57988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57990){
var self__ = this;
var _57990__$1 = this;
return self__.meta57989;
}));

(com.rpl.specter.t_com$rpl$specter57988.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter57988.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter57988.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter57988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta57989","meta57989",777837911,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter57988.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter57988.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter57988");

(com.rpl.specter.t_com$rpl$specter57988.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter57988");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter57988.
 */
com.rpl.specter.__GT_t_com$rpl$specter57988 = (function com$rpl$specter$__GT_t_com$rpl$specter57988(afn__$1,meta57989){
return (new com.rpl.specter.t_com$rpl$specter57988(afn__$1,meta57989));
});

}

return (new com.rpl.specter.t_com$rpl$specter57988(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58011 = (function (afn,meta58012){
this.afn = afn;
this.meta58012 = meta58012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58013,meta58012__$1){
var self__ = this;
var _58013__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58011(self__.afn,meta58012__$1));
}));

(com.rpl.specter.t_com$rpl$specter58011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58013){
var self__ = this;
var _58013__$1 = this;
return self__.meta58012;
}));

(com.rpl.specter.t_com$rpl$specter58011.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58011.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter58011.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter58011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta58012","meta58012",2114084512,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58011.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58011.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58011");

(com.rpl.specter.t_com$rpl$specter58011.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58011");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58011.
 */
com.rpl.specter.__GT_t_com$rpl$specter58011 = (function com$rpl$specter$__GT_t_com$rpl$specter58011(afn__$1,meta58012){
return (new com.rpl.specter.t_com$rpl$specter58011(afn__$1,meta58012));
});

}

return (new com.rpl.specter.t_com$rpl$specter58011(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__58028 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__58028) : com.rpl.specter.terminal.call(null,G__58028));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58034 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58034 = (function (meta58035){
this.meta58035 = meta58035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58036,meta58035__$1){
var self__ = this;
var _58036__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58034(meta58035__$1));
}));

(com.rpl.specter.t_com$rpl$specter58034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58036){
var self__ = this;
var _58036__$1 = this;
return self__.meta58035;
}));

(com.rpl.specter.t_com$rpl$specter58034.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58034.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58034.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58035","meta58035",942603434,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58034.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58034.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58034");

(com.rpl.specter.t_com$rpl$specter58034.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58034");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58034.
 */
com.rpl.specter.__GT_t_com$rpl$specter58034 = (function com$rpl$specter$__GT_t_com$rpl$specter58034(meta58035){
return (new com.rpl.specter.t_com$rpl$specter58034(meta58035));
});

}

return (new com.rpl.specter.t_com$rpl$specter58034(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58040 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58040 = (function (meta58041){
this.meta58041 = meta58041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58042,meta58041__$1){
var self__ = this;
var _58042__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58040(meta58041__$1));
}));

(com.rpl.specter.t_com$rpl$specter58040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58042){
var self__ = this;
var _58042__$1 = this;
return self__.meta58041;
}));

(com.rpl.specter.t_com$rpl$specter58040.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58040.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58040.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter58040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58041","meta58041",1965922275,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58040.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58040.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58040");

(com.rpl.specter.t_com$rpl$specter58040.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58040");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58040.
 */
com.rpl.specter.__GT_t_com$rpl$specter58040 = (function com$rpl$specter$__GT_t_com$rpl$specter58040(meta58041){
return (new com.rpl.specter.t_com$rpl$specter58040(meta58041));
});

}

return (new com.rpl.specter.t_com$rpl$specter58040(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,v){
var ret__46859__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58062 = (function (meta58063){
this.meta58063 = meta58063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58064,meta58063__$1){
var self__ = this;
var _58064__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58062(meta58063__$1));
}));

(com.rpl.specter.t_com$rpl$specter58062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58064){
var self__ = this;
var _58064__$1 = this;
return self__.meta58063;
}));

(com.rpl.specter.t_com$rpl$specter58062.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58062.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,v){
var ret__46859__auto__ = next_fn(v);
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter58062.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58063","meta58063",453335227,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58062.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58062.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58062");

(com.rpl.specter.t_com$rpl$specter58062.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58062");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58062.
 */
com.rpl.specter.__GT_t_com$rpl$specter58062 = (function com$rpl$specter$__GT_t_com$rpl$specter58062(meta58063){
return (new com.rpl.specter.t_com$rpl$specter58062(meta58063));
});

}

return (new com.rpl.specter.t_com$rpl$specter58062(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,k){
var ret__46859__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58075 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58075 = (function (meta58076){
this.meta58076 = meta58076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58077,meta58076__$1){
var self__ = this;
var _58077__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58075(meta58076__$1));
}));

(com.rpl.specter.t_com$rpl$specter58075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58077){
var self__ = this;
var _58077__$1 = this;
return self__.meta58076;
}));

(com.rpl.specter.t_com$rpl$specter58075.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58075.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,k){
var ret__46859__auto__ = next_fn(k);
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter58075.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58076","meta58076",-649409890,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58075.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58075.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58075");

(com.rpl.specter.t_com$rpl$specter58075.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58075");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58075.
 */
com.rpl.specter.__GT_t_com$rpl$specter58075 = (function com$rpl$specter$__GT_t_com$rpl$specter58075(meta58076){
return (new com.rpl.specter.t_com$rpl$specter58075(meta58076));
});

}

return (new com.rpl.specter.t_com$rpl$specter58075(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58099 = (function (meta58100){
this.meta58100 = meta58100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58101,meta58100__$1){
var self__ = this;
var _58101__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58099(meta58100__$1));
}));

(com.rpl.specter.t_com$rpl$specter58099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58101){
var self__ = this;
var _58101__$1 = this;
return self__.meta58100;
}));

(com.rpl.specter.t_com$rpl$specter58099.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58099.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__56039__auto__,vals__56040__auto__,structure,next_fn__56041__auto__){
var self__ = this;
var this__56039__auto____$1 = this;
var G__58102 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__56040__auto__,structure);
var G__58103 = structure;
return (next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2(G__58102,G__58103) : next_fn__56041__auto__.call(null,G__58102,G__58103));
}));

(com.rpl.specter.t_com$rpl$specter58099.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__56039__auto__,vals__56040__auto__,structure,next_fn__56041__auto__){
var self__ = this;
var this__56039__auto____$1 = this;
var G__58106 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__56040__auto__,structure);
var G__58107 = structure;
return (next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2(G__58106,G__58107) : next_fn__56041__auto__.call(null,G__58106,G__58107));
}));

(com.rpl.specter.t_com$rpl$specter58099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58100","meta58100",-778678431,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58099.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58099.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58099");

(com.rpl.specter.t_com$rpl$specter58099.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58099");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58099.
 */
com.rpl.specter.__GT_t_com$rpl$specter58099 = (function com$rpl$specter$__GT_t_com$rpl$specter58099(meta58100){
return (new com.rpl.specter.t_com$rpl$specter58099(meta58100));
});

}

return (new com.rpl.specter.t_com$rpl$specter58099(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__58112 = structure;
var G__58113 = s;
var G__58114 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__58115 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__58112,G__58113,G__58114,G__58115) : com.rpl.specter.navs.srange_transform.call(null,G__58112,G__58113,G__58114,G__58115));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58116 = (function (start_index_fn,end_index_fn,meta58117){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta58117 = meta58117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58118,meta58117__$1){
var self__ = this;
var _58118__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58116(self__.start_index_fn,self__.end_index_fn,meta58117__$1));
}));

(com.rpl.specter.t_com$rpl$specter58116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58118){
var self__ = this;
var _58118__$1 = this;
return self__.meta58117;
}));

(com.rpl.specter.t_com$rpl$specter58116.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58116.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58116.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__58121 = structure;
var G__58122 = s;
var G__58123 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__58124 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__58121,G__58122,G__58123,G__58124) : com.rpl.specter.navs.srange_transform.call(null,G__58121,G__58122,G__58123,G__58124));
}));

(com.rpl.specter.t_com$rpl$specter58116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta58117","meta58117",-1373671552,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58116.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58116.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58116");

(com.rpl.specter.t_com$rpl$specter58116.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58116");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58116.
 */
com.rpl.specter.__GT_t_com$rpl$specter58116 = (function com$rpl$specter$__GT_t_com$rpl$specter58116(start_index_fn__$1,end_index_fn__$1,meta58117){
return (new com.rpl.specter.t_com$rpl$specter58116(start_index_fn__$1,end_index_fn__$1,meta58117));
});

}

return (new com.rpl.specter.t_com$rpl$specter58116(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58140 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58140 = (function (start,end,meta58141){
this.start = start;
this.end = end;
this.meta58141 = meta58141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58142,meta58141__$1){
var self__ = this;
var _58142__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58140(self__.start,self__.end,meta58141__$1));
}));

(com.rpl.specter.t_com$rpl$specter58140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58142){
var self__ = this;
var _58142__$1 = this;
return self__.meta58141;
}));

(com.rpl.specter.t_com$rpl$specter58140.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58140.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58140.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter58140.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta58141","meta58141",-2115222768,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58140.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58140.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58140");

(com.rpl.specter.t_com$rpl$specter58140.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58140");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58140.
 */
com.rpl.specter.__GT_t_com$rpl$specter58140 = (function com$rpl$specter$__GT_t_com$rpl$specter58140(start__$1,end__$1,meta58141){
return (new com.rpl.specter.t_com$rpl$specter58140(start__$1,end__$1,meta58141));
});

}

return (new com.rpl.specter.t_com$rpl$specter58140(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,p__58149){
var vec__58150 = p__58149;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58150,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58150,(1),null);
var ret__46859__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58154 = (function (pred,meta58155){
this.pred = pred;
this.meta58155 = meta58155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58156,meta58155__$1){
var self__ = this;
var _58156__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58154(self__.pred,meta58155__$1));
}));

(com.rpl.specter.t_com$rpl$specter58154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58156){
var self__ = this;
var _58156__$1 = this;
return self__.meta58155;
}));

(com.rpl.specter.t_com$rpl$specter58154.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58154.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,p__58158){
var vec__58159 = p__58158;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58159,(1),null);
var ret__46859__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter58154.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta58155","meta58155",-1421050202,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58154.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58154.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58154");

(com.rpl.specter.t_com$rpl$specter58154.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58154");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58154.
 */
com.rpl.specter.__GT_t_com$rpl$specter58154 = (function com$rpl$specter$__GT_t_com$rpl$specter58154(pred__$1,meta58155){
return (new com.rpl.specter.t_com$rpl$specter58154(pred__$1,meta58155));
});

}

return (new com.rpl.specter.t_com$rpl$specter58154(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__58189 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58189) : next_fn.call(null,G__58189));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__58190 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58190) : next_fn.call(null,G__58190));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58191 = (function (meta58192){
this.meta58192 = meta58192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58193,meta58192__$1){
var self__ = this;
var _58193__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58191(meta58192__$1));
}));

(com.rpl.specter.t_com$rpl$specter58191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58193){
var self__ = this;
var _58193__$1 = this;
return self__.meta58192;
}));

(com.rpl.specter.t_com$rpl$specter58191.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58191.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter58191.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter58191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58192","meta58192",1954885834,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58191.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58191.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58191");

(com.rpl.specter.t_com$rpl$specter58191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58191");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58191.
 */
com.rpl.specter.__GT_t_com$rpl$specter58191 = (function com$rpl$specter$__GT_t_com$rpl$specter58191(meta58192){
return (new com.rpl.specter.t_com$rpl$specter58191(meta58192));
});

}

return (new com.rpl.specter.t_com$rpl$specter58191(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__58216 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58216) : next_fn.call(null,G__58216));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__58217 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58217) : next_fn.call(null,G__58217));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58219 = (function (meta58220){
this.meta58220 = meta58220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58221,meta58220__$1){
var self__ = this;
var _58221__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58219(meta58220__$1));
}));

(com.rpl.specter.t_com$rpl$specter58219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58221){
var self__ = this;
var _58221__$1 = this;
return self__.meta58220;
}));

(com.rpl.specter.t_com$rpl$specter58219.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58219.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter58219.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter58219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58220","meta58220",1232877999,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58219.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58219.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58219");

(com.rpl.specter.t_com$rpl$specter58219.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58219");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58219.
 */
com.rpl.specter.__GT_t_com$rpl$specter58219 = (function com$rpl$specter$__GT_t_com$rpl$specter58219(meta58220){
return (new com.rpl.specter.t_com$rpl$specter58219(meta58220));
});

}

return (new com.rpl.specter.t_com$rpl$specter58219(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58227 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58227 = (function (meta58228){
this.meta58228 = meta58228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58229,meta58228__$1){
var self__ = this;
var _58229__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58227(meta58228__$1));
}));

(com.rpl.specter.t_com$rpl$specter58227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58229){
var self__ = this;
var _58229__$1 = this;
return self__.meta58228;
}));

(com.rpl.specter.t_com$rpl$specter58227.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58227.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter58227.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter58227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58228","meta58228",-1281526644,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58227.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58227.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58227");

(com.rpl.specter.t_com$rpl$specter58227.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58227");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58227.
 */
com.rpl.specter.__GT_t_com$rpl$specter58227 = (function com$rpl$specter$__GT_t_com$rpl$specter58227(meta58228){
return (new com.rpl.specter.t_com$rpl$specter58227(meta58228));
});

}

return (new com.rpl.specter.t_com$rpl$specter58227(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58252 = (function (meta58253){
this.meta58253 = meta58253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58254,meta58253__$1){
var self__ = this;
var _58254__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58252(meta58253__$1));
}));

(com.rpl.specter.t_com$rpl$specter58252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58254){
var self__ = this;
var _58254__$1 = this;
return self__.meta58253;
}));

(com.rpl.specter.t_com$rpl$specter58252.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58252.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter58252.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter58252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58253","meta58253",-1285124219,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58252.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58252.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58252");

(com.rpl.specter.t_com$rpl$specter58252.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58252");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58252.
 */
com.rpl.specter.__GT_t_com$rpl$specter58252 = (function com$rpl$specter$__GT_t_com$rpl$specter58252(meta58253){
return (new com.rpl.specter.t_com$rpl$specter58252(meta58253));
});

}

return (new com.rpl.specter.t_com$rpl$specter58252(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58271 = (function (meta58272){
this.meta58272 = meta58272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58273,meta58272__$1){
var self__ = this;
var _58273__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58271(meta58272__$1));
}));

(com.rpl.specter.t_com$rpl$specter58271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58273){
var self__ = this;
var _58273__$1 = this;
return self__.meta58272;
}));

(com.rpl.specter.t_com$rpl$specter58271.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58271.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter58271.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter58271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58272","meta58272",-1140690200,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58271.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58271.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58271");

(com.rpl.specter.t_com$rpl$specter58271.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58271");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58271.
 */
com.rpl.specter.__GT_t_com$rpl$specter58271 = (function com$rpl$specter$__GT_t_com$rpl$specter58271(meta58272){
return (new com.rpl.specter.t_com$rpl$specter58271(meta58272));
});

}

return (new com.rpl.specter.t_com$rpl$specter58271(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__58288 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58288) : next_fn.call(null,G__58288));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58296 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58296 = (function (aset,meta58297){
this.aset = aset;
this.meta58297 = meta58297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58298,meta58297__$1){
var self__ = this;
var _58298__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58296(self__.aset,meta58297__$1));
}));

(com.rpl.specter.t_com$rpl$specter58296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58298){
var self__ = this;
var _58298__$1 = this;
return self__.meta58297;
}));

(com.rpl.specter.t_com$rpl$specter58296.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58296.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter58296.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter58296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta58297","meta58297",1511756081,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58296.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58296.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58296");

(com.rpl.specter.t_com$rpl$specter58296.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58296");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58296.
 */
com.rpl.specter.__GT_t_com$rpl$specter58296 = (function com$rpl$specter$__GT_t_com$rpl$specter58296(aset__$1,meta58297){
return (new com.rpl.specter.t_com$rpl$specter58296(aset__$1,meta58297));
});

}

return (new com.rpl.specter.t_com$rpl$specter58296(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__58302 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58302) : next_fn.call(null,G__58302));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58318 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58318 = (function (m_keys,meta58319){
this.m_keys = m_keys;
this.meta58319 = meta58319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58320,meta58319__$1){
var self__ = this;
var _58320__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58318(self__.m_keys,meta58319__$1));
}));

(com.rpl.specter.t_com$rpl$specter58318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58320){
var self__ = this;
var _58320__$1 = this;
return self__.meta58319;
}));

(com.rpl.specter.t_com$rpl$specter58318.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58318.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter58318.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter58318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta58319","meta58319",560147362,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58318.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58318.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58318");

(com.rpl.specter.t_com$rpl$specter58318.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58318");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58318.
 */
com.rpl.specter.__GT_t_com$rpl$specter58318 = (function com$rpl$specter$__GT_t_com$rpl$specter58318(m_keys__$1,meta58319){
return (new com.rpl.specter.t_com$rpl$specter58318(m_keys__$1,meta58319));
});

}

return (new com.rpl.specter.t_com$rpl$specter58318(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59003__delegate = function (path){
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58347 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58347 = (function (path,late,meta58348){
this.path = path;
this.late = late;
this.meta58348 = meta58348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58349,meta58348__$1){
var self__ = this;
var _58349__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58347(self__.path,self__.late,meta58348__$1));
}));

(com.rpl.specter.t_com$rpl$specter58347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58349){
var self__ = this;
var _58349__$1 = this;
return self__.meta58348;
}));

(com.rpl.specter.t_com$rpl$specter58347.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58347.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter58347.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__58362 = self__.late;
var G__58363 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__58364 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__58362,G__58363,G__58364) : com.rpl.specter.compiled_transform.call(null,G__58362,G__58363,G__58364));
}));

(com.rpl.specter.t_com$rpl$specter58347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58348","meta58348",-1625792578,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58347.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58347.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58347");

(com.rpl.specter.t_com$rpl$specter58347.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58347");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58347.
 */
com.rpl.specter.__GT_t_com$rpl$specter58347 = (function com$rpl$specter$__GT_t_com$rpl$specter58347(path__$1,late__$1,meta58348){
return (new com.rpl.specter.t_com$rpl$specter58347(path__$1,late__$1,meta58348));
});

}

return (new com.rpl.specter.t_com$rpl$specter58347(path,late,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
};
var G__59003 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59007__i = 0, G__59007__a = new Array(arguments.length -  0);
while (G__59007__i < G__59007__a.length) {G__59007__a[G__59007__i] = arguments[G__59007__i + 0]; ++G__59007__i;}
  path = new cljs.core.IndexedSeq(G__59007__a,0,null);
} 
return G__59003__delegate.call(this,path);};
G__59003.cljs$lang$maxFixedArity = 0;
G__59003.cljs$lang$applyTo = (function (arglist__59008){
var path = cljs.core.seq(arglist__59008);
return G__59003__delegate(path);
});
G__59003.cljs$core$IFn$_invoke$arity$variadic = G__59003__delegate;
return G__59003;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58396 = (function (key,meta58397){
this.key = key;
this.meta58397 = meta58397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58398,meta58397__$1){
var self__ = this;
var _58398__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58396(self__.key,meta58397__$1));
}));

(com.rpl.specter.t_com$rpl$specter58396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58398){
var self__ = this;
var _58398__$1 = this;
return self__.meta58397;
}));

(com.rpl.specter.t_com$rpl$specter58396.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58396.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter58396.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter58396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta58397","meta58397",-1773582441,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58396.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58396.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58396");

(com.rpl.specter.t_com$rpl$specter58396.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58396");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58396.
 */
com.rpl.specter.__GT_t_com$rpl$specter58396 = (function com$rpl$specter$__GT_t_com$rpl$specter58396(key__$1,meta58397){
return (new com.rpl.specter.t_com$rpl$specter58396(key__$1,meta58397));
});

}

return (new com.rpl.specter.t_com$rpl$specter58396(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58429 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58429 = (function (elem,meta58430){
this.elem = elem;
this.meta58430 = meta58430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58431,meta58430__$1){
var self__ = this;
var _58431__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58429(self__.elem,meta58430__$1));
}));

(com.rpl.specter.t_com$rpl$specter58429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58431){
var self__ = this;
var _58431__$1 = this;
return self__.meta58430;
}));

(com.rpl.specter.t_com$rpl$specter58429.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58429.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter58429.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter58429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta58430","meta58430",-107538500,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58429.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58429.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58429");

(com.rpl.specter.t_com$rpl$specter58429.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58429");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58429.
 */
com.rpl.specter.__GT_t_com$rpl$specter58429 = (function com$rpl$specter$__GT_t_com$rpl$specter58429(elem__$1,meta58430){
return (new com.rpl.specter.t_com$rpl$specter58429(elem__$1,meta58430));
});

}

return (new com.rpl.specter.t_com$rpl$specter58429(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58508 = (function (index,meta58509){
this.index = index;
this.meta58509 = meta58509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58510,meta58509__$1){
var self__ = this;
var _58510__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58508(self__.index,meta58509__$1));
}));

(com.rpl.specter.t_com$rpl$specter58508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58510){
var self__ = this;
var _58510__$1 = this;
return self__.meta58509;
}));

(com.rpl.specter.t_com$rpl$specter58508.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58508.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter58508.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__56049__auto__ = com.rpl.specter.pathcache58514;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58515 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache58514 = info58515;

return info58515;
})():info__56049__auto__);
var precompiled58516 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58517 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled58516.cljs$core$IFn$_invoke$arity$1 ? precompiled58516.cljs$core$IFn$_invoke$arity$1(G__58517) : precompiled58516.call(null,G__58517));
} else {
return precompiled58516;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter58508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta58509","meta58509",-1110506642,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58508.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58508.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58508");

(com.rpl.specter.t_com$rpl$specter58508.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58508");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58508.
 */
com.rpl.specter.__GT_t_com$rpl$specter58508 = (function com$rpl$specter$__GT_t_com$rpl$specter58508(index__$1,meta58509){
return (new com.rpl.specter.t_com$rpl$specter58508(index__$1,meta58509));
});

}

return (new com.rpl.specter.t_com$rpl$specter58508(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58518 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58518 = (function (i,meta58519){
this.i = i;
this.meta58519 = meta58519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58520,meta58519__$1){
var self__ = this;
var _58520__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58518(self__.i,meta58519__$1));
}));

(com.rpl.specter.t_com$rpl$specter58518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58520){
var self__ = this;
var _58520__$1 = this;
return self__.meta58519;
}));

(com.rpl.specter.t_com$rpl$specter58518.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58518.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter58518.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__59042 = (j - (1));
var G__59043 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__59042;
s = G__59043;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__59048 = (j + (1));
var G__59049 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__59048;
s = G__59049;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__56049__auto__ = com.rpl.specter.pathcache58528;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58529 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache58528 = info58529;

return info58529;
})():info__56049__auto__);
var precompiled58530 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled58530.cljs$core$IFn$_invoke$arity$1 ? precompiled58530.cljs$core$IFn$_invoke$arity$1(G__58531) : precompiled58530.call(null,G__58531));
} else {
return precompiled58530;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__56049__auto__ = com.rpl.specter.pathcache58532;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58533 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache58532 = info58533;

return info58533;
})():info__56049__auto__);
var precompiled58534 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled58534.cljs$core$IFn$_invoke$arity$1 ? precompiled58534.cljs$core$IFn$_invoke$arity$1(G__58539) : precompiled58534.call(null,G__58539));
} else {
return precompiled58534;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter58518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta58519","meta58519",-1736085894,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58518.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58518.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58518");

(com.rpl.specter.t_com$rpl$specter58518.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58518");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58518.
 */
com.rpl.specter.__GT_t_com$rpl$specter58518 = (function com$rpl$specter$__GT_t_com$rpl$specter58518(i__$1,meta58519){
return (new com.rpl.specter.t_com$rpl$specter58518(i__$1,meta58519));
});

}

return (new com.rpl.specter.t_com$rpl$specter58518(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,e){
var ret__46859__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__58544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58544) : next_fn.call(null,G__58544));
})()
;
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__58549 = (function (){var G__58552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58552) : next_fn.call(null,G__58552));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58549,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58549,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__56049__auto__ = com.rpl.specter.pathcache58553;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58554 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__58541_SHARP_){
return (p1__58541_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__58542_SHARP_){
return (p1__58542_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache58553 = info58554;

return info58554;
})():info__56049__auto__);
var precompiled58555 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58560 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__58541_SHARP_){
return (p1__58541_SHARP_ >= (curri + (1)));
}),(function (p1__58542_SHARP_){
return (p1__58542_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__58541_SHARP_){
return (p1__58541_SHARP_ >= (curri + (1)));
}),(function (p1__58542_SHARP_){
return (p1__58542_SHARP_ <= newi);
})], null);
return (precompiled58555.cljs$core$IFn$_invoke$arity$1 ? precompiled58555.cljs$core$IFn$_invoke$arity$1(G__58560) : precompiled58555.call(null,G__58560));
} else {
return precompiled58555;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__56049__auto__ = com.rpl.specter.pathcache58567;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58568 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache58567 = info58568;

return info58568;
})():info__56049__auto__);
var precompiled58569 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled58569.cljs$core$IFn$_invoke$arity$1 ? precompiled58569.cljs$core$IFn$_invoke$arity$1(G__58570) : precompiled58569.call(null,G__58570));
} else {
return precompiled58569;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__56049__auto__ = com.rpl.specter.pathcache58571;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58572 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache58571 = info58572;

return info58572;
})():info__56049__auto__);
var precompiled58573 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled58573.cljs$core$IFn$_invoke$arity$1 ? precompiled58573.cljs$core$IFn$_invoke$arity$1(G__58574) : precompiled58573.call(null,G__58574));
} else {
return precompiled58573;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58575 = (function (start,meta58576){
this.start = start;
this.meta58576 = meta58576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58577,meta58576__$1){
var self__ = this;
var _58577__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58575(self__.start,meta58576__$1));
}));

(com.rpl.specter.t_com$rpl$specter58575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58577){
var self__ = this;
var _58577__$1 = this;
return self__.meta58576;
}));

(com.rpl.specter.t_com$rpl$specter58575.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58575.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,e){
var ret__46859__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter58575.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__58581 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58581,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58581,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__56049__auto__ = com.rpl.specter.pathcache58584;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58585 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__58541_SHARP_){
return (p1__58541_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__58542_SHARP_){
return (p1__58542_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__58541#","p1__58541#",-1307590605,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__58542#","p1__58542#",1402689064,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache58584 = info58585;

return info58585;
})():info__56049__auto__);
var precompiled58586 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58587 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__58541_SHARP_){
return (p1__58541_SHARP_ >= (curri + (1)));
}),(function (p1__58542_SHARP_){
return (p1__58542_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__58541_SHARP_){
return (p1__58541_SHARP_ >= (curri + (1)));
}),(function (p1__58542_SHARP_){
return (p1__58542_SHARP_ <= newi);
})], null);
return (precompiled58586.cljs$core$IFn$_invoke$arity$1 ? precompiled58586.cljs$core$IFn$_invoke$arity$1(G__58587) : precompiled58586.call(null,G__58587));
} else {
return precompiled58586;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__56049__auto__ = com.rpl.specter.pathcache58589;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58590 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache58589 = info58590;

return info58590;
})():info__56049__auto__);
var precompiled58591 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled58591.cljs$core$IFn$_invoke$arity$1 ? precompiled58591.cljs$core$IFn$_invoke$arity$1(G__58596) : precompiled58591.call(null,G__58596));
} else {
return precompiled58591;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__56049__auto__ = com.rpl.specter.pathcache58597;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58598 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache58597 = info58598;

return info58598;
})():info__56049__auto__);
var precompiled58599 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled58599.cljs$core$IFn$_invoke$arity$1 ? precompiled58599.cljs$core$IFn$_invoke$arity$1(G__58600) : precompiled58599.call(null,G__58600));
} else {
return precompiled58599;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter58575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta58576","meta58576",176843173,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58575.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58575.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58575");

(com.rpl.specter.t_com$rpl$specter58575.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58575");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58575.
 */
com.rpl.specter.__GT_t_com$rpl$specter58575 = (function com$rpl$specter$__GT_t_com$rpl$specter58575(start__$1,meta58576){
return (new com.rpl.specter.t_com$rpl$specter58575(start__$1,meta58576));
});

}

return (new com.rpl.specter.t_com$rpl$specter58575(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58603 = (function (afn,meta58604){
this.afn = afn;
this.meta58604 = meta58604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58605,meta58604__$1){
var self__ = this;
var _58605__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58603(self__.afn,meta58604__$1));
}));

(com.rpl.specter.t_com$rpl$specter58603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58605){
var self__ = this;
var _58605__$1 = this;
return self__.meta58604;
}));

(com.rpl.specter.t_com$rpl$specter58603.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58603.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__58610 = vals;
var G__58611 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__58610,G__58611) : next_fn.call(null,G__58610,G__58611));
}));

(com.rpl.specter.t_com$rpl$specter58603.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__58613 = vals;
var G__58614 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__58613,G__58614) : next_fn.call(null,G__58613,G__58614));
}));

(com.rpl.specter.t_com$rpl$specter58603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta58604","meta58604",-947266889,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58603.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58603.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58603");

(com.rpl.specter.t_com$rpl$specter58603.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58603");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58603.
 */
com.rpl.specter.__GT_t_com$rpl$specter58603 = (function com$rpl$specter$__GT_t_com$rpl$specter58603(afn__$1,meta58604){
return (new com.rpl.specter.t_com$rpl$specter58603(afn__$1,meta58604));
});

}

return (new com.rpl.specter.t_com$rpl$specter58603(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__58615 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58615) : next_fn.call(null,G__58615));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__58617 = (function (){var G__58618 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58618) : next_fn.call(null,G__58618));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__58617) : unparse_fn.call(null,G__58617));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58620 = (function (parse_fn,unparse_fn,meta58621){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta58621 = meta58621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58622,meta58621__$1){
var self__ = this;
var _58622__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58620(self__.parse_fn,self__.unparse_fn,meta58621__$1));
}));

(com.rpl.specter.t_com$rpl$specter58620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58622){
var self__ = this;
var _58622__$1 = this;
return self__.meta58621;
}));

(com.rpl.specter.t_com$rpl$specter58620.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58620.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter58620.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var G__58626 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__58626) : self__.unparse_fn.call(null,G__58626));
}));

(com.rpl.specter.t_com$rpl$specter58620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta58621","meta58621",-892161024,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58620.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58620.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58620");

(com.rpl.specter.t_com$rpl$specter58620.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58620");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58620.
 */
com.rpl.specter.__GT_t_com$rpl$specter58620 = (function com$rpl$specter$__GT_t_com$rpl$specter58620(parse_fn__$1,unparse_fn__$1,meta58621){
return (new com.rpl.specter.t_com$rpl$specter58620(parse_fn__$1,unparse_fn__$1,meta58621));
});

}

return (new com.rpl.specter.t_com$rpl$specter58620(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__58637 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58637) : next_fn.call(null,G__58637));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58638 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58638 = (function (meta58639){
this.meta58639 = meta58639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58640,meta58639__$1){
var self__ = this;
var _58640__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58638(meta58639__$1));
}));

(com.rpl.specter.t_com$rpl$specter58638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58640){
var self__ = this;
var _58640__$1 = this;
return self__.meta58639;
}));

(com.rpl.specter.t_com$rpl$specter58638.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58638.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter58638.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter58638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58639","meta58639",411624914,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58638.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58638.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58638");

(com.rpl.specter.t_com$rpl$specter58638.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58638");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58638.
 */
com.rpl.specter.__GT_t_com$rpl$specter58638 = (function com$rpl$specter$__GT_t_com$rpl$specter58638(meta58639){
return (new com.rpl.specter.t_com$rpl$specter58638(meta58639));
});

}

return (new com.rpl.specter.t_com$rpl$specter58638(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,s){
var ret__46859__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58644 = (function (re,meta58645){
this.re = re;
this.meta58645 = meta58645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58646,meta58645__$1){
var self__ = this;
var _58646__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58644(self__.re,meta58645__$1));
}));

(com.rpl.specter.t_com$rpl$specter58644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58646){
var self__ = this;
var _58646__$1 = this;
return self__.meta58645;
}));

(com.rpl.specter.t_com$rpl$specter58644.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58644.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__46858__auto__,s){
var ret__46859__auto__ = next_fn(s);
if((ret__46859__auto__ === com.rpl.specter.NONE)){
return curr__46858__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__46859__auto__)){
return cljs.core.reduced(ret__46859__auto__);
} else {
return ret__46859__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter58644.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta58645","meta58645",206878536,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58644.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58644.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58644");

(com.rpl.specter.t_com$rpl$specter58644.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58644");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58644.
 */
com.rpl.specter.__GT_t_com$rpl$specter58644 = (function com$rpl$specter$__GT_t_com$rpl$specter58644(re__$1,meta58645){
return (new com.rpl.specter.t_com$rpl$specter58644(re__$1,meta58645));
});

}

return (new com.rpl.specter.t_com$rpl$specter58644(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59090__delegate = function (path){
var temp__5751__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5751__auto__)){
var afn = temp__5751__auto__;
return afn;
} else {
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58656 = (function (path,temp__5751__auto__,late,meta58657){
this.path = path;
this.temp__5751__auto__ = temp__5751__auto__;
this.late = late;
this.meta58657 = meta58657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58658,meta58657__$1){
var self__ = this;
var _58658__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58656(self__.path,self__.temp__5751__auto__,self__.late,meta58657__$1));
}));

(com.rpl.specter.t_com$rpl$specter58656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58658){
var self__ = this;
var _58658__$1 = this;
return self__.meta58657;
}));

(com.rpl.specter.t_com$rpl$specter58656.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58656.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__58652_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__58652_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58656.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__58653_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__58653_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5751__auto__","temp__5751__auto__",870218099,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58657","meta58657",455634366,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58656.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58656.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58656");

(com.rpl.specter.t_com$rpl$specter58656.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58656");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58656.
 */
com.rpl.specter.__GT_t_com$rpl$specter58656 = (function com$rpl$specter$__GT_t_com$rpl$specter58656(path__$1,temp__5751__auto____$1,late__$1,meta58657){
return (new com.rpl.specter.t_com$rpl$specter58656(path__$1,temp__5751__auto____$1,late__$1,meta58657));
});

}

return (new com.rpl.specter.t_com$rpl$specter58656(path,temp__5751__auto__,late,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
}
};
var G__59090 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59096__i = 0, G__59096__a = new Array(arguments.length -  0);
while (G__59096__i < G__59096__a.length) {G__59096__a[G__59096__i] = arguments[G__59096__i + 0]; ++G__59096__i;}
  path = new cljs.core.IndexedSeq(G__59096__a,0,null);
} 
return G__59090__delegate.call(this,path);};
G__59090.cljs$lang$maxFixedArity = 0;
G__59090.cljs$lang$applyTo = (function (arglist__59097){
var path = cljs.core.seq(arglist__59097);
return G__59090__delegate(path);
});
G__59090.cljs$core$IFn$_invoke$arity$variadic = G__59090__delegate;
return G__59090;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59098__delegate = function (path){
var temp__5751__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5751__auto__)){
var afn = temp__5751__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58671 = (function (path,temp__5751__auto__,late,meta58672){
this.path = path;
this.temp__5751__auto__ = temp__5751__auto__;
this.late = late;
this.meta58672 = meta58672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58673,meta58672__$1){
var self__ = this;
var _58673__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58671(self__.path,self__.temp__5751__auto__,self__.late,meta58672__$1));
}));

(com.rpl.specter.t_com$rpl$specter58671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58673){
var self__ = this;
var _58673__$1 = this;
return self__.meta58672;
}));

(com.rpl.specter.t_com$rpl$specter58671.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58671.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__58665_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__58665_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58671.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__58666_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__58666_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5751__auto__","temp__5751__auto__",870218099,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58672","meta58672",1290084733,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58671.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58671.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58671");

(com.rpl.specter.t_com$rpl$specter58671.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58671");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58671.
 */
com.rpl.specter.__GT_t_com$rpl$specter58671 = (function com$rpl$specter$__GT_t_com$rpl$specter58671(path__$1,temp__5751__auto____$1,late__$1,meta58672){
return (new com.rpl.specter.t_com$rpl$specter58671(path__$1,temp__5751__auto____$1,late__$1,meta58672));
});

}

return (new com.rpl.specter.t_com$rpl$specter58671(path,temp__5751__auto__,late,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
}
};
var G__59098 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59099__i = 0, G__59099__a = new Array(arguments.length -  0);
while (G__59099__i < G__59099__a.length) {G__59099__a[G__59099__i] = arguments[G__59099__i + 0]; ++G__59099__i;}
  path = new cljs.core.IndexedSeq(G__59099__a,0,null);
} 
return G__59098__delegate.call(this,path);};
G__59098.cljs$lang$maxFixedArity = 0;
G__59098.cljs$lang$applyTo = (function (arglist__59100){
var path = cljs.core.seq(arglist__59100);
return G__59098__delegate(path);
});
G__59098.cljs$core$IFn$_invoke$arity$variadic = G__59098__delegate;
return G__59098;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59104__delegate = function (path){
var G__58684 = com.rpl.specter.ALL;
var G__58685 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__58684,G__58685) : com.rpl.specter.subselect.call(null,G__58684,G__58685));
};
var G__59104 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59105__i = 0, G__59105__a = new Array(arguments.length -  0);
while (G__59105__i < G__59105__a.length) {G__59105__a[G__59105__i] = arguments[G__59105__i + 0]; ++G__59105__i;}
  path = new cljs.core.IndexedSeq(G__59105__a,0,null);
} 
return G__59104__delegate.call(this,path);};
G__59104.cljs$lang$maxFixedArity = 0;
G__59104.cljs$lang$applyTo = (function (arglist__59106){
var path = cljs.core.seq(arglist__59106);
return G__59104__delegate(path);
});
G__59104.cljs$core$IFn$_invoke$arity$variadic = G__59104__delegate;
return G__59104;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58686 = (function (path,update_fn,late,late_fn,meta58687){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta58687 = meta58687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58688,meta58687__$1){
var self__ = this;
var _58688__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58686(self__.path,self__.update_fn,self__.late,self__.late_fn,meta58687__$1));
}));

(com.rpl.specter.t_com$rpl$specter58686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58688){
var self__ = this;
var _58688__$1 = this;
return self__.meta58687;
}));

(com.rpl.specter.t_com$rpl$specter58686.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58686.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter58686.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter58686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta58687","meta58687",287232722,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58686.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58686.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58686");

(com.rpl.specter.t_com$rpl$specter58686.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58686");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58686.
 */
com.rpl.specter.__GT_t_com$rpl$specter58686 = (function com$rpl$specter$__GT_t_com$rpl$specter58686(path__$1,update_fn__$1,late__$1,late_fn__$1,meta58687){
return (new com.rpl.specter.t_com$rpl$specter58686(path__$1,update_fn__$1,late__$1,late_fn__$1,meta58687));
});

}

return (new com.rpl.specter.t_com$rpl$specter58686(path,update_fn,late,late_fn,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58697 = (function (path,reduce_fn,late,late_fn,meta58698){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta58698 = meta58698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58699,meta58698__$1){
var self__ = this;
var _58699__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58697(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta58698__$1));
}));

(com.rpl.specter.t_com$rpl$specter58697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58699){
var self__ = this;
var _58699__$1 = this;
return self__.meta58698;
}));

(com.rpl.specter.t_com$rpl$specter58697.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58697.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter58697.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter58697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta58698","meta58698",-178122639,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58697.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58697.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58697");

(com.rpl.specter.t_com$rpl$specter58697.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58697");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58697.
 */
com.rpl.specter.__GT_t_com$rpl$specter58697 = (function com$rpl$specter$__GT_t_com$rpl$specter58697(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta58698){
return (new com.rpl.specter.t_com$rpl$specter58697(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta58698));
});

}

return (new com.rpl.specter.t_com$rpl$specter58697(path,reduce_fn,late,late_fn,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__58708 = (function (p1__58706_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__58706_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58708) : com.rpl.specter.pred.call(null,G__58708));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__58710 = (function (p1__58709_SHARP_){
return (p1__58709_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58710) : com.rpl.specter.pred.call(null,G__58710));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__58712 = (function (p1__58711_SHARP_){
return (p1__58711_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58712) : com.rpl.specter.pred.call(null,G__58712));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__58719 = (function (p1__58718_SHARP_){
return (p1__58718_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58719) : com.rpl.specter.pred.call(null,G__58719));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__58721 = (function (p1__58720_SHARP_){
return (p1__58720_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__58721) : com.rpl.specter.pred.call(null,G__58721));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"null",(function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"string",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"number",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"boolean",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"function",(function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__58732 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58732) : next_fn.call(null,G__58732));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__58736 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58736) : next_fn.call(null,G__58736));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58737 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58737 = (function (v,meta58738){
this.v = v;
this.meta58738 = meta58738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58739,meta58738__$1){
var self__ = this;
var _58739__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58737(self__.v,meta58738__$1));
}));

(com.rpl.specter.t_com$rpl$specter58737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58739){
var self__ = this;
var _58739__$1 = this;
return self__.meta58738;
}));

(com.rpl.specter.t_com$rpl$specter58737.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58737.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter58737.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter58737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta58738","meta58738",-1769323157,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58737.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58737.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58737");

(com.rpl.specter.t_com$rpl$specter58737.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58737");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58737.
 */
com.rpl.specter.__GT_t_com$rpl$specter58737 = (function com$rpl$specter$__GT_t_com$rpl$specter58737(v__$1,meta58738){
return (new com.rpl.specter.t_com$rpl$specter58737(v__$1,meta58738));
});

}

return (new com.rpl.specter.t_com$rpl$specter58737(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__58741 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__58741) : com.rpl.specter.nil__GT_val.call(null,G__58741));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__58742 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__58742) : com.rpl.specter.nil__GT_val.call(null,G__58742));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__58747 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__58747) : com.rpl.specter.nil__GT_val.call(null,G__58747));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__58748 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58748) : next_fn.call(null,G__58748));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__58749 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58749) : next_fn.call(null,G__58749));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58750 = (function (meta58751){
this.meta58751 = meta58751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58752,meta58751__$1){
var self__ = this;
var _58752__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58750(meta58751__$1));
}));

(com.rpl.specter.t_com$rpl$specter58750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58752){
var self__ = this;
var _58752__$1 = this;
return self__.meta58751;
}));

(com.rpl.specter.t_com$rpl$specter58750.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58750.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter58750.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter58750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58751","meta58751",-2056018382,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58750.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58750.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58750");

(com.rpl.specter.t_com$rpl$specter58750.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58750");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58750.
 */
com.rpl.specter.__GT_t_com$rpl$specter58750 = (function com$rpl$specter$__GT_t_com$rpl$specter58750(meta58751){
return (new com.rpl.specter.t_com$rpl$specter58750(meta58751));
});

}

return (new com.rpl.specter.t_com$rpl$specter58750(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__58760 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58760) : next_fn.call(null,G__58760));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__58762 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58762) : next_fn.call(null,G__58762));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58767 = (function (meta58768){
this.meta58768 = meta58768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58769,meta58768__$1){
var self__ = this;
var _58769__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58767(meta58768__$1));
}));

(com.rpl.specter.t_com$rpl$specter58767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58769){
var self__ = this;
var _58769__$1 = this;
return self__.meta58768;
}));

(com.rpl.specter.t_com$rpl$specter58767.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58767.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter58767.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter58767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58768","meta58768",-992183126,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58767.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58767.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58767");

(com.rpl.specter.t_com$rpl$specter58767.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58767");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58767.
 */
com.rpl.specter.__GT_t_com$rpl$specter58767 = (function com$rpl$specter$__GT_t_com$rpl$specter58767(meta58768){
return (new com.rpl.specter.t_com$rpl$specter58767(meta58768));
});

}

return (new com.rpl.specter.t_com$rpl$specter58767(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__58780 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58780) : next_fn.call(null,G__58780));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__58781 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__58781) : next_fn.call(null,G__58781));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58782 = (function (meta58783){
this.meta58783 = meta58783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58784,meta58783__$1){
var self__ = this;
var _58784__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58782(meta58783__$1));
}));

(com.rpl.specter.t_com$rpl$specter58782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58784){
var self__ = this;
var _58784__$1 = this;
return self__.meta58783;
}));

(com.rpl.specter.t_com$rpl$specter58782.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58782.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter58782.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__54875__auto__,vals__54876__auto__,structure,next_fn__54877__auto__){
var self__ = this;
var this__54875__auto____$1 = this;
var next_fn = (function (s__54878__auto__){
return (next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__54877__auto__.cljs$core$IFn$_invoke$arity$2(vals__54876__auto__,s__54878__auto__) : next_fn__54877__auto__.call(null,vals__54876__auto__,s__54878__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter58782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58783","meta58783",2142984373,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58782.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58782.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58782");

(com.rpl.specter.t_com$rpl$specter58782.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58782");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58782.
 */
com.rpl.specter.__GT_t_com$rpl$specter58782 = (function com$rpl$specter$__GT_t_com$rpl$specter58782(meta58783){
return (new com.rpl.specter.t_com$rpl$specter58782(meta58783));
});

}

return (new com.rpl.specter.t_com$rpl$specter58782(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59135__delegate = function (path){
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58788 = (function (path,late,meta58789){
this.path = path;
this.late = late;
this.meta58789 = meta58789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58790,meta58789__$1){
var self__ = this;
var _58790__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58788(self__.path,self__.late,meta58789__$1));
}));

(com.rpl.specter.t_com$rpl$specter58788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58790){
var self__ = this;
var _58790__$1 = this;
return self__.meta58789;
}));

(com.rpl.specter.t_com$rpl$specter58788.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58788.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__56039__auto__,vals__56040__auto__,structure,next_fn__56041__auto__){
var self__ = this;
var this__56039__auto____$1 = this;
var G__58792 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__56040__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__58793 = structure;
return (next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2(G__58792,G__58793) : next_fn__56041__auto__.call(null,G__58792,G__58793));
}));

(com.rpl.specter.t_com$rpl$specter58788.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__56039__auto__,vals__56040__auto__,structure,next_fn__56041__auto__){
var self__ = this;
var this__56039__auto____$1 = this;
var G__58794 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__56040__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__58795 = structure;
return (next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2(G__58794,G__58795) : next_fn__56041__auto__.call(null,G__58794,G__58795));
}));

(com.rpl.specter.t_com$rpl$specter58788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58789","meta58789",388786451,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58788.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58788.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58788");

(com.rpl.specter.t_com$rpl$specter58788.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58788");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58788.
 */
com.rpl.specter.__GT_t_com$rpl$specter58788 = (function com$rpl$specter$__GT_t_com$rpl$specter58788(path__$1,late__$1,meta58789){
return (new com.rpl.specter.t_com$rpl$specter58788(path__$1,late__$1,meta58789));
});

}

return (new com.rpl.specter.t_com$rpl$specter58788(path,late,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
};
var G__59135 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59140__i = 0, G__59140__a = new Array(arguments.length -  0);
while (G__59140__i < G__59140__a.length) {G__59140__a[G__59140__i] = arguments[G__59140__i + 0]; ++G__59140__i;}
  path = new cljs.core.IndexedSeq(G__59140__a,0,null);
} 
return G__59135__delegate.call(this,path);};
G__59135.cljs$lang$maxFixedArity = 0;
G__59135.cljs$lang$applyTo = (function (arglist__59141){
var path = cljs.core.seq(arglist__59141);
return G__59135__delegate(path);
});
G__59135.cljs$core$IFn$_invoke$arity$variadic = G__59135__delegate;
return G__59135;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59142__delegate = function (path){
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58802 = (function (path,late,meta58803){
this.path = path;
this.late = late;
this.meta58803 = meta58803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58804,meta58803__$1){
var self__ = this;
var _58804__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58802(self__.path,self__.late,meta58803__$1));
}));

(com.rpl.specter.t_com$rpl$specter58802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58804){
var self__ = this;
var _58804__$1 = this;
return self__.meta58803;
}));

(com.rpl.specter.t_com$rpl$specter58802.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58802.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__56039__auto__,vals__56040__auto__,structure,next_fn__56041__auto__){
var self__ = this;
var this__56039__auto____$1 = this;
var G__58805 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__56040__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__58806 = structure;
return (next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2(G__58805,G__58806) : next_fn__56041__auto__.call(null,G__58805,G__58806));
}));

(com.rpl.specter.t_com$rpl$specter58802.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__56039__auto__,vals__56040__auto__,structure,next_fn__56041__auto__){
var self__ = this;
var this__56039__auto____$1 = this;
var G__58808 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__56040__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__58809 = structure;
return (next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2(G__58808,G__58809) : next_fn__56041__auto__.call(null,G__58808,G__58809));
}));

(com.rpl.specter.t_com$rpl$specter58802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58803","meta58803",-1466556161,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58802.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58802.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58802");

(com.rpl.specter.t_com$rpl$specter58802.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58802");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58802.
 */
com.rpl.specter.__GT_t_com$rpl$specter58802 = (function com$rpl$specter$__GT_t_com$rpl$specter58802(path__$1,late__$1,meta58803){
return (new com.rpl.specter.t_com$rpl$specter58802(path__$1,late__$1,meta58803));
});

}

return (new com.rpl.specter.t_com$rpl$specter58802(path,late,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
};
var G__59142 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59143__i = 0, G__59143__a = new Array(arguments.length -  0);
while (G__59143__i < G__59143__a.length) {G__59143__a[G__59143__i] = arguments[G__59143__i + 0]; ++G__59143__i;}
  path = new cljs.core.IndexedSeq(G__59143__a,0,null);
} 
return G__59142__delegate.call(this,path);};
G__59142.cljs$lang$maxFixedArity = 0;
G__59142.cljs$lang$applyTo = (function (arglist__59144){
var path = cljs.core.seq(arglist__59144);
return G__59142__delegate(path);
});
G__59142.cljs$core$IFn$_invoke$arity$variadic = G__59142__delegate;
return G__59142;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58810 = (function (val,meta58811){
this.val = val;
this.meta58811 = meta58811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58812,meta58811__$1){
var self__ = this;
var _58812__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58810(self__.val,meta58811__$1));
}));

(com.rpl.specter.t_com$rpl$specter58810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58812){
var self__ = this;
var _58812__$1 = this;
return self__.meta58811;
}));

(com.rpl.specter.t_com$rpl$specter58810.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58810.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__56039__auto__,vals__56040__auto__,structure,next_fn__56041__auto__){
var self__ = this;
var this__56039__auto____$1 = this;
var G__58814 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__56040__auto__,self__.val);
var G__58815 = structure;
return (next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2(G__58814,G__58815) : next_fn__56041__auto__.call(null,G__58814,G__58815));
}));

(com.rpl.specter.t_com$rpl$specter58810.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__56039__auto__,vals__56040__auto__,structure,next_fn__56041__auto__){
var self__ = this;
var this__56039__auto____$1 = this;
var G__58816 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__56040__auto__,self__.val);
var G__58817 = structure;
return (next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__56041__auto__.cljs$core$IFn$_invoke$arity$2(G__58816,G__58817) : next_fn__56041__auto__.call(null,G__58816,G__58817));
}));

(com.rpl.specter.t_com$rpl$specter58810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta58811","meta58811",-1329284476,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58810.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58810.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58810");

(com.rpl.specter.t_com$rpl$specter58810.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58810");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58810.
 */
com.rpl.specter.__GT_t_com$rpl$specter58810 = (function com$rpl$specter$__GT_t_com$rpl$specter58810(val__$1,meta58811){
return (new com.rpl.specter.t_com$rpl$specter58810(val__$1,meta58811));
});

}

return (new com.rpl.specter.t_com$rpl$specter58810(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59145__delegate = function (path){
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58822 = (function (path,late,meta58823){
this.path = path;
this.late = late;
this.meta58823 = meta58823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58824,meta58823__$1){
var self__ = this;
var _58824__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58822(self__.path,self__.late,meta58823__$1));
}));

(com.rpl.specter.t_com$rpl$specter58822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58824){
var self__ = this;
var _58824__$1 = this;
return self__.meta58823;
}));

(com.rpl.specter.t_com$rpl$specter58822.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58822.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter58822.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter58822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta58823","meta58823",1094625550,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58822.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58822.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58822");

(com.rpl.specter.t_com$rpl$specter58822.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58822");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58822.
 */
com.rpl.specter.__GT_t_com$rpl$specter58822 = (function com$rpl$specter$__GT_t_com$rpl$specter58822(path__$1,late__$1,meta58823){
return (new com.rpl.specter.t_com$rpl$specter58822(path__$1,late__$1,meta58823));
});

}

return (new com.rpl.specter.t_com$rpl$specter58822(path,late,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
};
var G__59145 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59150__i = 0, G__59150__a = new Array(arguments.length -  0);
while (G__59150__i < G__59150__a.length) {G__59150__a[G__59150__i] = arguments[G__59150__i + 0]; ++G__59150__i;}
  path = new cljs.core.IndexedSeq(G__59150__a,0,null);
} 
return G__59145__delegate.call(this,path);};
G__59145.cljs$lang$maxFixedArity = 0;
G__59145.cljs$lang$applyTo = (function (arglist__59151){
var path = cljs.core.seq(arglist__59151);
return G__59145__delegate(path);
});
G__59145.cljs$core$IFn$_invoke$arity$variadic = G__59145__delegate;
return G__59145;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58840 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58840 = (function (meta58841){
this.meta58841 = meta58841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58842,meta58841__$1){
var self__ = this;
var _58842__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58840(meta58841__$1));
}));

(com.rpl.specter.t_com$rpl$specter58840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58842){
var self__ = this;
var _58842__$1 = this;
return self__.meta58841;
}));

(com.rpl.specter.t_com$rpl$specter58840.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58840.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__58849 = cljs.core.PersistentVector.EMPTY;
var G__58850 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__58849,G__58850) : next_fn.call(null,G__58849,G__58850));
}));

(com.rpl.specter.t_com$rpl$specter58840.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__58851 = cljs.core.PersistentVector.EMPTY;
var G__58852 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__58851,G__58852) : next_fn.call(null,G__58851,G__58852));
}));

(com.rpl.specter.t_com$rpl$specter58840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta58841","meta58841",-903616070,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58840.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58840.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58840");

(com.rpl.specter.t_com$rpl$specter58840.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58840");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58840.
 */
com.rpl.specter.__GT_t_com$rpl$specter58840 = (function com$rpl$specter$__GT_t_com$rpl$specter58840(meta58841){
return (new com.rpl.specter.t_com$rpl$specter58840(meta58841));
});

}

return (new com.rpl.specter.t_com$rpl$specter58840(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__59157 = null;
var G__59157__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__59157__3 = (function (cond_p,then_path,else_path){
var temp__5751__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5751__auto__)){
var afn = temp__5751__auto__;
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58858 = (function (cond_p,then_path,else_path,temp__5751__auto__,afn,late_then,late_else,meta58859){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5751__auto__ = temp__5751__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta58859 = meta58859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58860,meta58859__$1){
var self__ = this;
var _58860__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58858(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5751__auto__,self__.afn,self__.late_then,self__.late_else,meta58859__$1));
}));

(com.rpl.specter.t_com$rpl$specter58858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58860){
var self__ = this;
var _58860__$1 = this;
return self__.meta58859;
}));

(com.rpl.specter.t_com$rpl$specter58858.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58858.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter58858.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter58858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5751__auto__","temp__5751__auto__",870218099,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta58859","meta58859",1298474717,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58858.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58858.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58858");

(com.rpl.specter.t_com$rpl$specter58858.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58858");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58858.
 */
com.rpl.specter.__GT_t_com$rpl$specter58858 = (function com$rpl$specter$__GT_t_com$rpl$specter58858(cond_p__$1,then_path__$1,else_path__$1,temp__5751__auto____$1,afn__$1,late_then__$1,late_else__$1,meta58859){
return (new com.rpl.specter.t_com$rpl$specter58858(cond_p__$1,then_path__$1,else_path__$1,temp__5751__auto____$1,afn__$1,late_then__$1,late_else__$1,meta58859));
});

}

return (new com.rpl.specter.t_com$rpl$specter58858(cond_p,then_path,else_path,temp__5751__auto__,afn,late_then,late_else,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
} else {
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58873 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58873 = (function (cond_p,then_path,else_path,temp__5751__auto__,late_cond,late_then,late_else,meta58874){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5751__auto__ = temp__5751__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta58874 = meta58874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58875,meta58874__$1){
var self__ = this;
var _58875__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58873(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5751__auto__,self__.late_cond,self__.late_then,self__.late_else,meta58874__$1));
}));

(com.rpl.specter.t_com$rpl$specter58873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58875){
var self__ = this;
var _58875__$1 = this;
return self__.meta58874;
}));

(com.rpl.specter.t_com$rpl$specter58873.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58873.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__58856_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__58856_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter58873.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__58857_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__58857_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter58873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5751__auto__","temp__5751__auto__",870218099,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta58874","meta58874",1616809522,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58873.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58873.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58873");

(com.rpl.specter.t_com$rpl$specter58873.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58873");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58873.
 */
com.rpl.specter.__GT_t_com$rpl$specter58873 = (function com$rpl$specter$__GT_t_com$rpl$specter58873(cond_p__$1,then_path__$1,else_path__$1,temp__5751__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta58874){
return (new com.rpl.specter.t_com$rpl$specter58873(cond_p__$1,then_path__$1,else_path__$1,temp__5751__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta58874));
});

}

return (new com.rpl.specter.t_com$rpl$specter58873(cond_p,then_path,else_path,temp__5751__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
}
});
G__59157 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__59157__2.call(this,cond_p,then_path);
case 3:
return G__59157__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59157.cljs$core$IFn$_invoke$arity$2 = G__59157__2;
G__59157.cljs$core$IFn$_invoke$arity$3 = G__59157__3;
return G__59157;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59163__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__58885){
var vec__58887 = p__58885;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58887,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58887,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__59163 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__59164__i = 0, G__59164__a = new Array(arguments.length -  0);
while (G__59164__i < G__59164__a.length) {G__59164__a[G__59164__i] = arguments[G__59164__i + 0]; ++G__59164__i;}
  conds = new cljs.core.IndexedSeq(G__59164__a,0,null);
} 
return G__59163__delegate.call(this,conds);};
G__59163.cljs$lang$maxFixedArity = 0;
G__59163.cljs$lang$applyTo = (function (arglist__59165){
var conds = cljs.core.seq(arglist__59165);
return G__59163__delegate(conds);
});
G__59163.cljs$core$IFn$_invoke$arity$variadic = G__59163__delegate;
return G__59163;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__59166 = null;
var G__59166__0 = (function (){
return com.rpl.specter.STAY;
});
var G__59166__1 = (function (path){
return path;
});
var G__59166__2 = (function (path1,path2){
var builder__56042__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter58899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter58899 = (function (path1,path2,late1,late2,meta58900){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta58900 = meta58900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter58899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58901,meta58900__$1){
var self__ = this;
var _58901__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter58899(self__.path1,self__.path2,self__.late1,self__.late2,meta58900__$1));
}));

(com.rpl.specter.t_com$rpl$specter58899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58901){
var self__ = this;
var _58901__$1 = this;
return self__.meta58900;
}));

(com.rpl.specter.t_com$rpl$specter58899.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter58899.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter58899.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter58899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta58900","meta58900",-2031499560,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter58899.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter58899.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter58899");

(com.rpl.specter.t_com$rpl$specter58899.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter58899");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter58899.
 */
com.rpl.specter.__GT_t_com$rpl$specter58899 = (function com$rpl$specter$__GT_t_com$rpl$specter58899(path1__$1,path2__$1,late1__$1,late2__$1,meta58900){
return (new com.rpl.specter.t_com$rpl$specter58899(path1__$1,path2__$1,late1__$1,late2__$1,meta58900));
});

}

return (new com.rpl.specter.t_com$rpl$specter58899(path1,path2,late1,late2,null));
}));
var curr_params__56043__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__56043__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__56042__auto__,curr_params__56043__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__56042__auto__,curr_params__56043__auto__,null);
}
});
var G__59166__3 = (function() { 
var G__59170__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__59170 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__59172__i = 0, G__59172__a = new Array(arguments.length -  2);
while (G__59172__i < G__59172__a.length) {G__59172__a[G__59172__i] = arguments[G__59172__i + 2]; ++G__59172__i;}
  paths = new cljs.core.IndexedSeq(G__59172__a,0,null);
} 
return G__59170__delegate.call(this,path1,path2,paths);};
G__59170.cljs$lang$maxFixedArity = 2;
G__59170.cljs$lang$applyTo = (function (arglist__59173){
var path1 = cljs.core.first(arglist__59173);
arglist__59173 = cljs.core.next(arglist__59173);
var path2 = cljs.core.first(arglist__59173);
var paths = cljs.core.rest(arglist__59173);
return G__59170__delegate(path1,path2,paths);
});
G__59170.cljs$core$IFn$_invoke$arity$variadic = G__59170__delegate;
return G__59170;
})()
;
G__59166 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__59166__0.call(this);
case 1:
return G__59166__1.call(this,path1);
case 2:
return G__59166__2.call(this,path1,path2);
default:
var G__59174 = null;
if (arguments.length > 2) {
var G__59175__i = 0, G__59175__a = new Array(arguments.length -  2);
while (G__59175__i < G__59175__a.length) {G__59175__a[G__59175__i] = arguments[G__59175__i + 2]; ++G__59175__i;}
G__59174 = new cljs.core.IndexedSeq(G__59175__a,0,null);
}
return G__59166__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__59174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59166.cljs$lang$maxFixedArity = 2;
G__59166.cljs$lang$applyTo = G__59166__3.cljs$lang$applyTo;
G__59166.cljs$core$IFn$_invoke$arity$0 = G__59166__0;
G__59166.cljs$core$IFn$_invoke$arity$1 = G__59166__1;
G__59166.cljs$core$IFn$_invoke$arity$2 = G__59166__2;
G__59166.cljs$core$IFn$_invoke$arity$variadic = G__59166__3.cljs$core$IFn$_invoke$arity$variadic;
return G__59166;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59176__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__59176 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59177__i = 0, G__59177__a = new Array(arguments.length -  0);
while (G__59177__i < G__59177__a.length) {G__59177__a[G__59177__i] = arguments[G__59177__i + 0]; ++G__59177__i;}
  path = new cljs.core.IndexedSeq(G__59177__a,0,null);
} 
return G__59176__delegate.call(this,path);};
G__59176.cljs$lang$maxFixedArity = 0;
G__59176.cljs$lang$applyTo = (function (arglist__59178){
var path = cljs.core.seq(arglist__59178);
return G__59176__delegate(path);
});
G__59176.cljs$core$IFn$_invoke$arity$variadic = G__59176__delegate;
return G__59176;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59179__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__59179 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59180__i = 0, G__59180__a = new Array(arguments.length -  0);
while (G__59180__i < G__59180__a.length) {G__59180__a[G__59180__i] = arguments[G__59180__i + 0]; ++G__59180__i;}
  path = new cljs.core.IndexedSeq(G__59180__a,0,null);
} 
return G__59179__delegate.call(this,path);};
G__59179.cljs$lang$maxFixedArity = 0;
G__59179.cljs$lang$applyTo = (function (arglist__59181){
var path = cljs.core.seq(arglist__59181);
return G__59179__delegate(path);
});
G__59179.cljs$core$IFn$_invoke$arity$variadic = G__59179__delegate;
return G__59179;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__56049__auto__ = com.rpl.specter.pathcache58909;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58910 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache58909 = info58910;

return info58910;
})():info__56049__auto__);
var precompiled58911 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58917 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled58911.cljs$core$IFn$_invoke$arity$1 ? precompiled58911.cljs$core$IFn$_invoke$arity$1(G__58917) : precompiled58911.call(null,G__58917));
} else {
return precompiled58911;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__56049__auto__ = com.rpl.specter.pathcache58918;
var info__56049__auto____$1 = (((info__56049__auto__ == null))?(function (){var info58919 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache58918 = info58919;

return info58919;
})():info__56049__auto__);
var precompiled58920 = com.rpl.specter.impl.cached_path_info_precompiled(info__56049__auto____$1);
var dynamic_QMARK___56050__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__56049__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___56050__auto__)){
var G__58923 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled58920.cljs$core$IFn$_invoke$arity$1 ? precompiled58920.cljs$core$IFn$_invoke$arity$1(G__58923) : precompiled58920.call(null,G__58923));
} else {
return precompiled58920;
}
})());

return p;
}));
var empty__GT_NONE_59197 = (function (){var G__58924 = cljs.core.empty_QMARK_;
var G__58925 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__58924,G__58925) : com.rpl.specter.if_path.call(null,G__58924,G__58925));
})();
var compact_STAR__59198 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_59197) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_59197));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__59202__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__59198,path);
};
var G__59202 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__59205__i = 0, G__59205__a = new Array(arguments.length -  0);
while (G__59205__i < G__59205__a.length) {G__59205__a[G__59205__i] = arguments[G__59205__i + 0]; ++G__59205__i;}
  path = new cljs.core.IndexedSeq(G__59205__a,0,null);
} 
return G__59202__delegate.call(this,path);};
G__59202.cljs$lang$maxFixedArity = 0;
G__59202.cljs$lang$applyTo = (function (arglist__59206){
var path = cljs.core.seq(arglist__59206);
return G__59202__delegate(path);
});
G__59202.cljs$core$IFn$_invoke$arity$variadic = G__59202__delegate;
return G__59202;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
