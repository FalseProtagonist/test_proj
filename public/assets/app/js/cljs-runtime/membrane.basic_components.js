goog.provide('membrane.basic_components');

membrane.basic_components.on_hover_draw = (function membrane$basic_components$on_hover_draw(p__48406){
var map__48407 = p__48406;
var map__48407__$1 = (((((!((map__48407 == null))))?(((((map__48407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48407):map__48407);
var m_48400 = map__48407__$1;
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48407__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_hover_QMARK__48401 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48400,new cljs.core.Keyword(null,"$hover?","$hover?",857633438),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),null,(1),null)),(2),null))], null));
var arg_path_body_48402 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48400,new cljs.core.Keyword(null,"$body","$body",-844213794),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"body","body",-2049205669),null,(1),null)),(2),null))], null));
var arg_path_extra_48403 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48400,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_48404 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48400,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
if(cljs.core.truth_(hover_QMARK_)){
return membrane.ui.wrap_on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-move-global","mouse-move-global",-212584064),(function (handler,p__48410){
var vec__48411 = p__48410;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48411,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48411,(1),null);
var pos = vec__48411;
var vec__48415 = membrane.ui.bounds(body);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48415,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48415,(1),null);
var child_intents = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(pos) : handler.call(null,pos));
if((((x < (0))) || ((x > w)) || ((y < (0))) || ((y > h)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(child_intents,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_hover_QMARK__48401,cljs.core.PersistentVector.EMPTY),false], null));
} else {
return child_intents;
}
}),body], 0));
} else {
return membrane.ui.on_mouse_move.cljs$core$IFn$_invoke$arity$variadic((function (p__48418){
var vec__48419 = p__48418;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48419,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48419,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_hover_QMARK__48401,cljs.core.PersistentVector.EMPTY),true], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.On_hover = (function (hover_QMARK_,body,extra,context,__meta,__extmap,__hash){
this.hover_QMARK_ = hover_QMARK_;
this.body = body;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.On_hover.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.On_hover.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48423,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48429 = k48423;
var G__48429__$1 = (((G__48429 instanceof cljs.core.Keyword))?G__48429.fqn:null);
switch (G__48429__$1) {
case "hover?":
return self__.hover_QMARK_;

break;
case "body":
return self__.body;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48423,else__4383__auto__);

}
}));

(membrane.basic_components.On_hover.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48431){
var vec__48432 = p__48431;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48432,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48432,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.On_hover.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.On-hover{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hover?","hover?",-1201331489),self__.hover_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.On_hover.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48422){
var self__ = this;
var G__48422__$1 = this;
return (new cljs.core.RecordIter((0),G__48422__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.On_hover.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.On_hover.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.On_hover(self__.hover_QMARK_,self__.body,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.On_hover.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.On_hover.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1709784913 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.On_hover.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_hover.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.On_hover.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48424,other48425){
var self__ = this;
var this48424__$1 = this;
return (((!((other48425 == null)))) && ((this48424__$1.constructor === other48425.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48424__$1.hover_QMARK_,other48425.hover_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48424__$1.body,other48425.body)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48424__$1.extra,other48425.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48424__$1.context,other48425.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48424__$1.__extmap,other48425.__extmap)));
}));

(membrane.basic_components.On_hover.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_hover.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_hover.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_hover.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.On_hover.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_hover.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_hover.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_hover.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_hover.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.On_hover(self__.hover_QMARK_,self__.body,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.On_hover.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48422){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__48447 = cljs.core.keyword_identical_QMARK_;
var expr__48448 = k__4388__auto__;
if(cljs.core.truth_((pred__48447.cljs$core$IFn$_invoke$arity$2 ? pred__48447.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover?","hover?",-1201331489),expr__48448) : pred__48447.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),expr__48448)))){
return (new membrane.basic_components.On_hover(G__48422,self__.body,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48447.cljs$core$IFn$_invoke$arity$2 ? pred__48447.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__48448) : pred__48447.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__48448)))){
return (new membrane.basic_components.On_hover(self__.hover_QMARK_,G__48422,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48447.cljs$core$IFn$_invoke$arity$2 ? pred__48447.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48448) : pred__48447.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48448)))){
return (new membrane.basic_components.On_hover(self__.hover_QMARK_,self__.body,G__48422,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48447.cljs$core$IFn$_invoke$arity$2 ? pred__48447.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__48448) : pred__48447.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__48448)))){
return (new membrane.basic_components.On_hover(self__.hover_QMARK_,self__.body,self__.extra,G__48422,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.On_hover(self__.hover_QMARK_,self__.body,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48422),null));
}
}
}
}
}));

(membrane.basic_components.On_hover.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_hover.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_hover.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hover?","hover?",-1201331489),self__.hover_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.On_hover.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_hover.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_hover.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48422){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.On_hover(self__.hover_QMARK_,self__.body,self__.extra,self__.context,G__48422,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.On_hover.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.On_hover.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_hover.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.On_hover.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_hover.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.On_hover.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.On_hover.cljs$lang$type = true);

(membrane.basic_components.On_hover.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/On-hover",null,(1),null));
}));

(membrane.basic_components.On_hover.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/On-hover");
}));

/**
 * Positional factory function for membrane.basic-components/On-hover.
 */
membrane.basic_components.__GT_On_hover = (function membrane$basic_components$__GT_On_hover(hover_QMARK_,body,extra,context){
return (new membrane.basic_components.On_hover(hover_QMARK_,body,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/On-hover, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_On_hover = (function membrane$basic_components$map__GT_On_hover(G__48427){
var extmap__4419__auto__ = (function (){var G__48459 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48427,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__48427)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48459);
} else {
return G__48459;
}
})();
return (new membrane.basic_components.On_hover(new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(G__48427),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__48427),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__48427),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__48427),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.on_hover;},new cljs.core.Symbol("membrane.basic-components","on-hover","membrane.basic-components/on-hover",-65252396,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"on-hover","on-hover",1103128324,null),"membrane/basic_components.cljc",16,1,38,true,38,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.on_hover)?membrane.basic_components.on_hover.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Component for adding a hover? state."], null)], 0));
}));

membrane.basic_components.on_hover_rerender_BANG_ = (function membrane$basic_components$on_hover_rerender_BANG_(m__47722__auto__){
var elem_48405 = membrane.basic_components.map__GT_On_hover(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","on-hover","membrane.basic-components/on-hover",-1705783923),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_48405.hover_QMARK_,elem_48405.body,elem_48405.extra,elem_48405.context,new cljs.core.Keyword(null,"$hover?","$hover?",857633438).cljs$core$IFn$_invoke$arity$1(elem_48405),new cljs.core.Keyword(null,"$body","$body",-844213794).cljs$core$IFn$_invoke$arity$1(elem_48405),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_48405),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_48405)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.on_hover_draw(elem_48405);
var elem_48405__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_48405,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_48405__$1);

return elem_48405__$1;
});

var ret__47724__auto___49887 = /**
 * Component for adding a hover? state.
 */
membrane.basic_components.on_hover = (function membrane$basic_components$on_hover(p__48464){
var map__48465 = p__48464;
var map__48465__$1 = (((((!((map__48465 == null))))?(((((map__48465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48465):map__48465);
var m_48400 = map__48465__$1;
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48465__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48465__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48465__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48465__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","on-hover","membrane.basic-components/on-hover",-1705783923),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [hover_QMARK_,body,extra,context,new cljs.core.Keyword(null,"$hover?","$hover?",857633438).cljs$core$IFn$_invoke$arity$1(m_48400),new cljs.core.Keyword(null,"$body","$body",-844213794).cljs$core$IFn$_invoke$arity$1(m_48400),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_48400),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_48400)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.on_hover_rerender_BANG_(m_48400);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","on-hover","membrane.basic-components/on-hover",-65252396,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Component for adding a hover? state."], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.on_hover;},new cljs.core.Symbol("membrane.basic-components","on-hover","membrane.basic-components/on-hover",-65252396,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"on-hover","on-hover",1103128324,null),"membrane/basic_components.cljc",16,1,38,38,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-48400","m-48400",776525946,null)], null)], null)),"Component for adding a hover? state.",(cljs.core.truth_(membrane.basic_components.on_hover)?membrane.basic_components.on_hover.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Component for adding a hover? state."], null)], 0));
}));


membrane.basic_components.on_mouse_out_draw = (function membrane$basic_components$on_mouse_out_draw(p__48484){
var map__48485 = p__48484;
var map__48485__$1 = (((((!((map__48485 == null))))?(((((map__48485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48485):map__48485);
var m_48476 = map__48485__$1;
var mouse_out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48485__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_mouse_out_48477 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48476,new cljs.core.Keyword(null,"$mouse-out","$mouse-out",1220878117),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),null,(1),null)),(2),null))], null));
var arg_path_body_48478 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48476,new cljs.core.Keyword(null,"$body","$body",-844213794),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"body","body",-2049205669),null,(1),null)),(2),null))], null));
var arg_path_hover_QMARK__48479 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48476,new cljs.core.Keyword(null,"$hover?","$hover?",857633438),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),null,(1),null)),(2),null))], null));
var arg_path_extra_48480 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48476,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_48481 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48476,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
if(cljs.core.truth_(hover_QMARK_)){
return membrane.ui.wrap_on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-move-global","mouse-move-global",-212584064),(function (handler,p__48491){
var vec__48493 = p__48491;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48493,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48493,(1),null);
var pos = vec__48493;
var vec__48496 = membrane.ui.bounds(body);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48496,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48496,(1),null);
var intents = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(pos) : handler.call(null,pos));
if((((x < (0))) || ((x > w)) || ((y < (0))) || ((y > h)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(intents,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_hover_QMARK__48479,cljs.core.PersistentVector.EMPTY),false], null)),(mouse_out.cljs$core$IFn$_invoke$arity$0 ? mouse_out.cljs$core$IFn$_invoke$arity$0() : mouse_out.call(null)));
} else {
return intents;
}
}),body], 0));
} else {
return membrane.ui.wrap_on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),(function (handler,p__48500){
var vec__48501 = p__48500;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48501,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48501,(1),null);
var pos = vec__48501;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_hover_QMARK__48479,cljs.core.PersistentVector.EMPTY),true], null)], null),(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(pos) : handler.call(null,pos)));
}),body], 0));
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.On_mouse_out = (function (mouse_out,body,hover_QMARK_,extra,context,__meta,__extmap,__hash){
this.mouse_out = mouse_out;
this.body = body;
this.hover_QMARK_ = hover_QMARK_;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.On_mouse_out.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48512,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48521 = k48512;
var G__48521__$1 = (((G__48521 instanceof cljs.core.Keyword))?G__48521.fqn:null);
switch (G__48521__$1) {
case "mouse-out":
return self__.mouse_out;

break;
case "body":
return self__.body;

break;
case "hover?":
return self__.hover_QMARK_;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48512,else__4383__auto__);

}
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48524){
var vec__48525 = p__48524;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48525,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48525,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.On-mouse-out{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),self__.mouse_out],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hover?","hover?",-1201331489),self__.hover_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48511){
var self__ = this;
var G__48511__$1 = this;
return (new cljs.core.RecordIter((0),G__48511__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"hover?","hover?",-1201331489),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.On_mouse_out(self__.mouse_out,self__.body,self__.hover_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1922551696 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48513,other48514){
var self__ = this;
var this48513__$1 = this;
return (((!((other48514 == null)))) && ((this48513__$1.constructor === other48514.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48513__$1.mouse_out,other48514.mouse_out)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48513__$1.body,other48514.body)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48513__$1.hover_QMARK_,other48514.hover_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48513__$1.extra,other48514.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48513__$1.context,other48514.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48513__$1.__extmap,other48514.__extmap)));
}));

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"body","body",-2049205669),null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.On_mouse_out(self__.mouse_out,self__.body,self__.hover_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48511){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__48551 = cljs.core.keyword_identical_QMARK_;
var expr__48552 = k__4388__auto__;
if(cljs.core.truth_((pred__48551.cljs$core$IFn$_invoke$arity$2 ? pred__48551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),expr__48552) : pred__48551.call(null,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),expr__48552)))){
return (new membrane.basic_components.On_mouse_out(G__48511,self__.body,self__.hover_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48551.cljs$core$IFn$_invoke$arity$2 ? pred__48551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__48552) : pred__48551.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__48552)))){
return (new membrane.basic_components.On_mouse_out(self__.mouse_out,G__48511,self__.hover_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48551.cljs$core$IFn$_invoke$arity$2 ? pred__48551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover?","hover?",-1201331489),expr__48552) : pred__48551.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),expr__48552)))){
return (new membrane.basic_components.On_mouse_out(self__.mouse_out,self__.body,G__48511,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48551.cljs$core$IFn$_invoke$arity$2 ? pred__48551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48552) : pred__48551.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48552)))){
return (new membrane.basic_components.On_mouse_out(self__.mouse_out,self__.body,self__.hover_QMARK_,G__48511,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48551.cljs$core$IFn$_invoke$arity$2 ? pred__48551.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__48552) : pred__48551.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__48552)))){
return (new membrane.basic_components.On_mouse_out(self__.mouse_out,self__.body,self__.hover_QMARK_,self__.extra,G__48511,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.On_mouse_out(self__.mouse_out,self__.body,self__.hover_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48511),null));
}
}
}
}
}
}));

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),self__.mouse_out,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hover?","hover?",-1201331489),self__.hover_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48511){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.On_mouse_out(self__.mouse_out,self__.body,self__.hover_QMARK_,self__.extra,self__.context,G__48511,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.On_mouse_out.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.On_mouse_out.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.On_mouse_out.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mouse-out","mouse-out",554092563,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.On_mouse_out.cljs$lang$type = true);

(membrane.basic_components.On_mouse_out.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/On-mouse-out",null,(1),null));
}));

(membrane.basic_components.On_mouse_out.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/On-mouse-out");
}));

/**
 * Positional factory function for membrane.basic-components/On-mouse-out.
 */
membrane.basic_components.__GT_On_mouse_out = (function membrane$basic_components$__GT_On_mouse_out(mouse_out,body,hover_QMARK_,extra,context){
return (new membrane.basic_components.On_mouse_out(mouse_out,body,hover_QMARK_,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/On-mouse-out, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_On_mouse_out = (function membrane$basic_components$map__GT_On_mouse_out(G__48515){
var extmap__4419__auto__ = (function (){var G__48569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48515,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"hover?","hover?",-1201331489),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__48515)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48569);
} else {
return G__48569;
}
})();
return (new membrane.basic_components.On_mouse_out(new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964).cljs$core$IFn$_invoke$arity$1(G__48515),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__48515),new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(G__48515),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__48515),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__48515),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.on_mouse_out;},new cljs.core.Symbol("membrane.basic-components","on-mouse-out","membrane.basic-components/on-mouse-out",-554243586,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"on-mouse-out","on-mouse-out",-2010987122,null),"membrane/basic_components.cljc",20,1,60,true,60,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.on_mouse_out)?membrane.basic_components.on_mouse_out.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mouse-out","mouse-out",554092563,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));

membrane.basic_components.on_mouse_out_rerender_BANG_ = (function membrane$basic_components$on_mouse_out_rerender_BANG_(m__47722__auto__){
var elem_48482 = membrane.basic_components.map__GT_On_mouse_out(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","on-mouse-out","membrane.basic-components/on-mouse-out",2100192183),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_48482.mouse_out,elem_48482.body,elem_48482.hover_QMARK_,elem_48482.extra,elem_48482.context,new cljs.core.Keyword(null,"$mouse-out","$mouse-out",1220878117).cljs$core$IFn$_invoke$arity$1(elem_48482),new cljs.core.Keyword(null,"$body","$body",-844213794).cljs$core$IFn$_invoke$arity$1(elem_48482),new cljs.core.Keyword(null,"$hover?","$hover?",857633438).cljs$core$IFn$_invoke$arity$1(elem_48482),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_48482),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_48482)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.on_mouse_out_draw(elem_48482);
var elem_48482__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_48482,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_48482__$1);

return elem_48482__$1;
});

var ret__47724__auto___49889 = membrane.basic_components.on_mouse_out = (function membrane$basic_components$on_mouse_out(p__48576){
var map__48577 = p__48576;
var map__48577__$1 = (((((!((map__48577 == null))))?(((((map__48577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48577):map__48577);
var m_48476 = map__48577__$1;
var mouse_out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48577__$1,new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48577__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48577__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48577__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48577__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","on-mouse-out","membrane.basic-components/on-mouse-out",2100192183),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [mouse_out,body,hover_QMARK_,extra,context,new cljs.core.Keyword(null,"$mouse-out","$mouse-out",1220878117).cljs$core$IFn$_invoke$arity$1(m_48476),new cljs.core.Keyword(null,"$body","$body",-844213794).cljs$core$IFn$_invoke$arity$1(m_48476),new cljs.core.Keyword(null,"$hover?","$hover?",857633438).cljs$core$IFn$_invoke$arity$1(m_48476),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_48476),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_48476)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.on_mouse_out_rerender_BANG_(m_48476);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","on-mouse-out","membrane.basic-components/on-mouse-out",-554243586,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mouse-out","mouse-out",554092563,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.on_mouse_out;},new cljs.core.Symbol("membrane.basic-components","on-mouse-out","membrane.basic-components/on-mouse-out",-554243586,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"on-mouse-out","on-mouse-out",-2010987122,null),"membrane/basic_components.cljc",20,1,60,60,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mouse-out","mouse-out",554092563,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-48476","m-48476",-1863015560,null)], null)], null)),null,(cljs.core.truth_(membrane.basic_components.on_mouse_out)?membrane.basic_components.on_mouse_out.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mouse-out","mouse-out",554092563,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));


membrane.basic_components.button_draw = (function membrane$basic_components$button_draw(p__48595){
var map__48596 = p__48595;
var map__48596__$1 = (((((!((map__48596 == null))))?(((((map__48596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48596):map__48596);
var m_48579 = map__48596__$1;
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48596__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48596__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48596__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48596__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48596__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_hover_QMARK__48580 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48579,new cljs.core.Keyword(null,"$hover?","$hover?",857633438),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),null,(1),null)),(2),null))], null));
var arg_path_text_48581 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48579,new cljs.core.Keyword(null,"$text","$text",-983499110),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"text","text",-1790561697),null,(1),null)),(2),null))], null));
var arg_path_on_click_48582 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48579,new cljs.core.Keyword(null,"$on-click","$on-click",32610317),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),null,(1),null)),(2),null))], null));
var arg_path_extra_48583 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48579,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_48584 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48579,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
return membrane.basic_components.on_hover((function (){var hover_QMARK__48586 = hover_QMARK_;
var body_48587 = membrane.ui.button.cljs$core$IFn$_invoke$arity$3(text,on_click,hover_QMARK_);
var extra_48588 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_hover_QMARK__48580,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("ui","button","ui/button",-1197860798,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"hover?","hover?",439200038,null)),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_48589 = context;
var $hover_QMARK__48590 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_hover_QMARK__48580,cljs.core.PersistentVector.EMPTY);
var $body_48591 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("ui","button","ui/button",-1197860798,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"hover?","hover?",439200038,null)),null,(1),null)),(2),null))], null);
var $extra_48592 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_48583,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_hover_QMARK__48580,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("ui","button","ui/button",-1197860798,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"hover?","hover?",439200038,null)),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_48593 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_48584,cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"$extra","$extra",542082855),$extra_48592,new cljs.core.Keyword(null,"$context","$context",-449141881),$context_48593,new cljs.core.Keyword(null,"extra","extra",1612569067),extra_48588,new cljs.core.Keyword(null,"context","context",-830191113),context_48589,new cljs.core.Keyword(null,"body","body",-2049205669),body_48587,new cljs.core.Keyword(null,"$body","$body",-844213794),$body_48591,new cljs.core.Keyword(null,"$hover?","$hover?",857633438),$hover_QMARK__48590,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),hover_QMARK__48586], null);
})());
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Button = (function (hover_QMARK_,text,on_click,extra,context,__meta,__extmap,__hash){
this.hover_QMARK_ = hover_QMARK_;
this.text = text;
this.on_click = on_click;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Button.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Button.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48603,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48608 = k48603;
var G__48608__$1 = (((G__48608 instanceof cljs.core.Keyword))?G__48608.fqn:null);
switch (G__48608__$1) {
case "hover?":
return self__.hover_QMARK_;

break;
case "text":
return self__.text;

break;
case "on-click":
return self__.on_click;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48603,else__4383__auto__);

}
}));

(membrane.basic_components.Button.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48609){
var vec__48610 = p__48609;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48610,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48610,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Button.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Button{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hover?","hover?",-1201331489),self__.hover_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.on_click],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Button.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48602){
var self__ = this;
var G__48602__$1 = this;
return (new cljs.core.RecordIter((0),G__48602__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Button.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Button.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Button(self__.hover_QMARK_,self__.text,self__.on_click,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Button.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Button.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (139904987 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Button.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Button.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Button.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48604,other48605){
var self__ = this;
var this48604__$1 = this;
return (((!((other48605 == null)))) && ((this48604__$1.constructor === other48605.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48604__$1.hover_QMARK_,other48605.hover_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48604__$1.text,other48605.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48604__$1.on_click,other48605.on_click)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48604__$1.extra,other48605.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48604__$1.context,other48605.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48604__$1.__extmap,other48605.__extmap)));
}));

(membrane.basic_components.Button.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Button.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Button.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Button.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Button.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Button.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Button.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Button.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Button.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"text","text",-1790561697),null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Button(self__.hover_QMARK_,self__.text,self__.on_click,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Button.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48602){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__48619 = cljs.core.keyword_identical_QMARK_;
var expr__48620 = k__4388__auto__;
if(cljs.core.truth_((pred__48619.cljs$core$IFn$_invoke$arity$2 ? pred__48619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover?","hover?",-1201331489),expr__48620) : pred__48619.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),expr__48620)))){
return (new membrane.basic_components.Button(G__48602,self__.text,self__.on_click,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48619.cljs$core$IFn$_invoke$arity$2 ? pred__48619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),expr__48620) : pred__48619.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__48620)))){
return (new membrane.basic_components.Button(self__.hover_QMARK_,G__48602,self__.on_click,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48619.cljs$core$IFn$_invoke$arity$2 ? pred__48619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-click","on-click",1632826543),expr__48620) : pred__48619.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),expr__48620)))){
return (new membrane.basic_components.Button(self__.hover_QMARK_,self__.text,G__48602,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48619.cljs$core$IFn$_invoke$arity$2 ? pred__48619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48620) : pred__48619.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48620)))){
return (new membrane.basic_components.Button(self__.hover_QMARK_,self__.text,self__.on_click,G__48602,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48619.cljs$core$IFn$_invoke$arity$2 ? pred__48619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__48620) : pred__48619.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__48620)))){
return (new membrane.basic_components.Button(self__.hover_QMARK_,self__.text,self__.on_click,self__.extra,G__48602,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Button(self__.hover_QMARK_,self__.text,self__.on_click,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48602),null));
}
}
}
}
}
}));

(membrane.basic_components.Button.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Button.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Button.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hover?","hover?",-1201331489),self__.hover_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.on_click,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Button.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Button.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Button.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48602){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Button(self__.hover_QMARK_,self__.text,self__.on_click,self__.extra,self__.context,G__48602,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Button.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Button.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Button.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Button.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Button.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Button.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Button.cljs$lang$type = true);

(membrane.basic_components.Button.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Button",null,(1),null));
}));

(membrane.basic_components.Button.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Button");
}));

/**
 * Positional factory function for membrane.basic-components/Button.
 */
membrane.basic_components.__GT_Button = (function membrane$basic_components$__GT_Button(hover_QMARK_,text,on_click,extra,context){
return (new membrane.basic_components.Button(hover_QMARK_,text,on_click,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Button, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Button = (function membrane$basic_components$map__GT_Button(G__48606){
var extmap__4419__auto__ = (function (){var G__48647 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48606,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__48606)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48647);
} else {
return G__48647;
}
})();
return (new membrane.basic_components.Button(new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(G__48606),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__48606),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(G__48606),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__48606),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__48606),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.button;},new cljs.core.Symbol("membrane.basic-components","button","membrane.basic-components/button",-305766498,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),"membrane/basic_components.cljc",14,1,84,true,84,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.button)?membrane.basic_components.button.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Button component with hover state."], null)], 0));
}));

membrane.basic_components.button_rerender_BANG_ = (function membrane$basic_components$button_rerender_BANG_(m__47722__auto__){
var elem_48585 = membrane.basic_components.map__GT_Button(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","button","membrane.basic-components/button",-1946298025),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_48585.hover_QMARK_,elem_48585.text,elem_48585.on_click,elem_48585.extra,elem_48585.context,new cljs.core.Keyword(null,"$hover?","$hover?",857633438).cljs$core$IFn$_invoke$arity$1(elem_48585),new cljs.core.Keyword(null,"$text","$text",-983499110).cljs$core$IFn$_invoke$arity$1(elem_48585),new cljs.core.Keyword(null,"$on-click","$on-click",32610317).cljs$core$IFn$_invoke$arity$1(elem_48585),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_48585),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_48585)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.button_draw(elem_48585);
var elem_48585__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_48585,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_48585__$1);

return elem_48585__$1;
});

var ret__47724__auto___49891 = /**
 * Button component with hover state.
 */
membrane.basic_components.button = (function membrane$basic_components$button(p__48652){
var map__48653 = p__48652;
var map__48653__$1 = (((((!((map__48653 == null))))?(((((map__48653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48653):map__48653);
var m_48579 = map__48653__$1;
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","button","membrane.basic-components/button",-1946298025),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [hover_QMARK_,text,on_click,extra,context,new cljs.core.Keyword(null,"$hover?","$hover?",857633438).cljs$core$IFn$_invoke$arity$1(m_48579),new cljs.core.Keyword(null,"$text","$text",-983499110).cljs$core$IFn$_invoke$arity$1(m_48579),new cljs.core.Keyword(null,"$on-click","$on-click",32610317).cljs$core$IFn$_invoke$arity$1(m_48579),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_48579),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_48579)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.button_rerender_BANG_(m_48579);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","button","membrane.basic-components/button",-305766498,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Button component with hover state."], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.button;},new cljs.core.Symbol("membrane.basic-components","button","membrane.basic-components/button",-305766498,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),"membrane/basic_components.cljc",14,1,84,84,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-48579","m-48579",889926025,null)], null)], null)),"Button component with hover state.",(cljs.core.truth_(membrane.basic_components.button)?membrane.basic_components.button.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"hover?","hover?",439200038,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Button component with hover state."], null)], 0));
}));

var var__47838__auto___49892 = membrane.basic_components.effect_previous_line = (function membrane$basic_components$effect_previous_line(dispatch_BANG_,$cursor,$select_cursor,text){
return cljs.core.run_BANG_((function (p1__48657_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48657_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$select_cursor,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),$cursor,(function (cursor){
var prev_newline = text.lastIndexOf("\n",((cursor - (1)) | (0)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),prev_newline)){
return prev_newline;
} else {
return (0);
}
})], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","previous-line","membrane.basic-components/previous-line",-944116422),membrane.basic_components.effect_previous_line);

var var__47838__auto___49893 = membrane.basic_components.effect_next_line = (function membrane$basic_components$effect_next_line(dispatch_BANG_,$cursor,$select_cursor,text){
return cljs.core.run_BANG_((function (p1__48660_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48660_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$select_cursor,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),$cursor,(function (cursor){
var next_newline = text.indexOf("\n",(cursor | (0)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),next_newline)){
return (next_newline + (1));
} else {
return cljs.core.count(text);
}
})], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","next-line","membrane.basic-components/next-line",1208687601),membrane.basic_components.effect_next_line);

var var__47838__auto___49894 = membrane.basic_components.effect_forward_char = (function membrane$basic_components$effect_forward_char(dispatch_BANG_,$cursor,$select_cursor,text){
return cljs.core.run_BANG_((function (p1__48661_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48661_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$select_cursor,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),$cursor,(function (cursor){
var x__4217__auto__ = cljs.core.count(text);
var y__4218__auto__ = (cursor + (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","forward-char","membrane.basic-components/forward-char",-138685795),membrane.basic_components.effect_forward_char);

var var__47838__auto___49895 = membrane.basic_components.effect_backward_char = (function membrane$basic_components$effect_backward_char(dispatch_BANG_,$cursor,$select_cursor,text){
return cljs.core.run_BANG_((function (p1__48675_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48675_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$select_cursor,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),$cursor,(function (cursor){
var x__4214__auto__ = (0);
var y__4215__auto__ = ((function (){var x__4217__auto__ = cljs.core.count(text);
var y__4218__auto__ = cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})() - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","backward-char","membrane.basic-components/backward-char",-1913520569),membrane.basic_components.effect_backward_char);

var var__47838__auto___49896 = membrane.basic_components.effect_insert_newline = (function membrane$basic_components$effect_insert_newline(dispatch_BANG_,$cursor,$select_cursor,$text){
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$5 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword("membrane.basic-components","insert-text","membrane.basic-components/insert-text",-1863209104),$cursor,$select_cursor,$text,"\n") : dispatch_BANG_.call(null,new cljs.core.Keyword("membrane.basic-components","insert-text","membrane.basic-components/insert-text",-1863209104),$cursor,$select_cursor,$text,"\n"));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","insert-newline","membrane.basic-components/insert-newline",2000426841),membrane.basic_components.effect_insert_newline);

var var__47838__auto___49897 = membrane.basic_components.effect_insert_text = (function membrane$basic_components$effect_insert_text(dispatch_BANG_,$cursor,$select_cursor,$text,s){
return cljs.core.run_BANG_((function (p1__48685_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48685_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,$cursor,null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,$select_cursor,null,(1),null)),(2),null)),$text], null),(function (cursor,select_cursor,text){
var start_clip_index = (function (){var x__4217__auto__ = cljs.core.count(text);
var y__4218__auto__ = (cljs.core.truth_(select_cursor)?(function (){var x__4217__auto____$1 = cursor;
var y__4218__auto__ = select_cursor;
return ((x__4217__auto____$1 < y__4218__auto__) ? x__4217__auto____$1 : y__4218__auto__);
})():cursor);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var end_clip_index = (function (){var x__4217__auto__ = cljs.core.count(text);
var y__4218__auto__ = (cljs.core.truth_(select_cursor)?(function (){var x__4214__auto__ = cursor;
var y__4215__auto__ = select_cursor;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():cursor);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
if(cljs.core.truth_(text)){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),start_clip_index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,end_clip_index)].join('');
} else {
return s;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,$select_cursor,null,(1),null)),(2),null)),$cursor], null),(function (select_cursor,cursor){
var cursor__$1 = (function (){var or__4126__auto__ = cursor;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var index = (cljs.core.truth_(select_cursor)?(function (){var x__4217__auto__ = select_cursor;
var y__4218__auto__ = cursor__$1;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})():cursor__$1);
return (cljs.core.count(s) + index);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$select_cursor,null], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","insert-text","membrane.basic-components/insert-text",-1863209104),membrane.basic_components.effect_insert_text);

var var__47838__auto___49898 = membrane.basic_components.effect_move_cursor_to_pos = (function membrane$basic_components$effect_move_cursor_to_pos(dispatch_BANG_,$cursor,text,font,pos){
return cljs.core.run_BANG_((function (p1__48692_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48692_SHARP_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),$cursor,(function (cursor){
var vec__48694 = pos;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48694,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48694,(1),null);
var new_cursor = membrane.ui.index_for_position(font,text,mx,my);
return new_cursor;
})], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","move-cursor-to-pos","membrane.basic-components/move-cursor-to-pos",153354941),membrane.basic_components.effect_move_cursor_to_pos);

var var__47838__auto___49899 = membrane.basic_components.effect_start_drag = (function membrane$basic_components$effect_start_drag(dispatch_BANG_,$mpos,$down_pos,pos){
return cljs.core.run_BANG_((function (p1__48697_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48697_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$mpos,pos], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$down_pos,pos], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","start-drag","membrane.basic-components/start-drag",509374763),membrane.basic_components.effect_start_drag);

var var__47838__auto___49900 = membrane.basic_components.effect_drag = (function membrane$basic_components$effect_drag(dispatch_BANG_,$mpos,pos){
return cljs.core.run_BANG_((function (p1__48701_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48701_SHARP_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$mpos,pos], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","drag","membrane.basic-components/drag",1306344074),membrane.basic_components.effect_drag);

var var__47838__auto___49901 = membrane.basic_components.effect_finish_drag = (function membrane$basic_components$effect_finish_drag(dispatch_BANG_,$select_cursor,$cursor,$down_pos,pos,text,font){
var vec__48709 = pos;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48709,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48709,(1),null);
var end_index = membrane.ui.index_for_position(font,text,mx,my);
return cljs.core.run_BANG_((function (p1__48702_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48702_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,$down_pos,null,(1),null)),(2),null)),$select_cursor], null),(function (down_pos,select_cursor){
var temp__5753__auto__ = down_pos;
if(cljs.core.truth_(temp__5753__auto__)){
var vec__48722 = temp__5753__auto__;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48722,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48722,(1),null);
var idx = membrane.ui.index_for_position(font,text,dx,dy);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,end_index)){
if((idx > end_index)){
var x__4217__auto__ = cljs.core.count(text);
var y__4218__auto__ = (idx + (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
} else {
return idx;
}
} else {
return null;
}
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$down_pos,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,$select_cursor,null,(1),null)),(2),null)),$cursor], null),(function (select_cursor,cursor){
if(cljs.core.truth_((function (){var and__4115__auto__ = select_cursor;
if(cljs.core.truth_(and__4115__auto__)){
return (end_index > select_cursor);
} else {
return and__4115__auto__;
}
})())){
var x__4217__auto__ = cljs.core.count(text);
var y__4218__auto__ = (end_index + (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
} else {
return end_index;
}
})], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","finish-drag","membrane.basic-components/finish-drag",-693863563),membrane.basic_components.effect_finish_drag);

membrane.basic_components.double_click_threshold = (500);
var getTimeMillis_49902 = (function (){
return (new Date()).getTime();
});
var pow_49903 = (function (n,x){
return Math.pow(n,x);
});
var find_white_space_49904 = (function (text,start){
var regexp = (new RegExp("\\s","g"));
(regexp.lastIndex = start);

var result = regexp.exec(text);
if(cljs.core.truth_(result)){
return result.index;
} else {
return null;
}
});
var var__47838__auto___49905 = membrane.basic_components.effect_text_double_click = (function membrane$basic_components$effect_text_double_click(dispatch_BANG_,$last_click,$select_cursor,$cursor,pos,text,font){
var now = getTimeMillis_49902();
var vec__48733 = pos;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48733,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48733,(1),null);
return cljs.core.run_BANG_((function (p1__48727_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48727_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,$last_click,null,(1),null)),(2),null)),$select_cursor], null),(function (p__48736,select_cursor){
var vec__48737 = p__48736;
var last_click = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48737,(0),null);
var vec__48740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48737,(1),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48740,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48740,(1),null);
if(cljs.core.truth_(last_click)){
var diff = (now - last_click);
if((((diff < membrane.basic_components.double_click_threshold)) && (((pow_49903((mx - dx),(2)) + pow_49903((my - dy),(2))) < (100))))){
var index = membrane.ui.index_for_position(font,text,mx,my);
var temp__5751__auto__ = find_white_space_49904(text,index);
if(cljs.core.truth_(temp__5751__auto__)){
var start = temp__5751__auto__;
return start;
} else {
return cljs.core.count(text);
}
} else {
return select_cursor;
}
} else {
return select_cursor;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,$last_click,null,(1),null)),(2),null)),$cursor], null),(function (p__48746,cursor){
var vec__48747 = p__48746;
var last_click = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48747,(0),null);
var vec__48750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48747,(1),null);
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48750,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48750,(1),null);
if(cljs.core.truth_(last_click)){
var diff = (now - last_click);
if((((diff < membrane.basic_components.double_click_threshold)) && (((pow_49903((mx - dx),(2)) + pow_49903((my - dy),(2))) < (100))))){
var index = membrane.ui.index_for_position(font,text,mx,my);
var text_backwards = clojure.string.reverse(text);
var temp__5751__auto__ = find_white_space_49904(text_backwards,(cljs.core.count(text) - index));
if(cljs.core.truth_(temp__5751__auto__)){
var start = temp__5751__auto__;
return (cljs.core.count(text) - start);
} else {
return (0);
}
} else {
return cursor;
}
} else {
return cursor;
}
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$last_click,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [now,pos], null)], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","text-double-click","membrane.basic-components/text-double-click",-407478722),membrane.basic_components.effect_text_double_click);

var var__47838__auto___49906 = membrane.basic_components.effect_delete_backward = (function membrane$basic_components$effect_delete_backward(dispatch_BANG_,$cursor,$select_cursor,$text){
return cljs.core.run_BANG_((function (p1__48755_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(dispatch_BANG_,p1__48755_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,$cursor,null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,$select_cursor,null,(1),null)),(2),null)),$text], null),(function (cursor,select_cursor,text){
var cursor__$1 = (function (){var x__4217__auto__ = cljs.core.count(text);
var y__4218__auto__ = cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var vec__48775 = (cljs.core.truth_(select_cursor)?(function (){var select_cursor__$1 = (function (){var x__4217__auto__ = cljs.core.count(text);
var y__4218__auto__ = select_cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
if((cursor__$1 < select_cursor__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor__$1,select_cursor__$1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [select_cursor__$1,cursor__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (cursor__$1 - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),cursor__$1], null));
var clip_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48775,(0),null);
var clip_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48775,(1),null);
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),clip_start),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,clip_end)].join('');
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"collect-one","collect-one",1193571149,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [$select_cursor], null),null,(1),null)),(2),null)),$cursor], null),(function (select_cursor,cursor){
var x__4214__auto__ = (0);
var y__4215__auto__ = (cljs.core.truth_(select_cursor)?(function (){var x__4217__auto__ = select_cursor;
var y__4218__auto__ = cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})():(cursor - (1)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),$select_cursor,null], null)], null));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","delete-backward","membrane.basic-components/delete-backward",1626461423),membrane.basic_components.effect_delete_backward);


membrane.basic_components.textarea_view_draw = (function membrane$basic_components$textarea_view_draw(p__48805){
var map__48806 = p__48805;
var map__48806__$1 = (((((!((map__48806 == null))))?(((((map__48806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48806):map__48806);
var m_48792 = map__48806__$1;
var mpos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48806__$1,new cljs.core.Keyword(null,"mpos","mpos",-959907109));
var last_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48806__$1,new cljs.core.Keyword(null,"last-click","last-click",1376836603));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48806__$1,new cljs.core.Keyword(null,"text","text",-1790561697),"");
var focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48806__$1,new cljs.core.Keyword(null,"focus?","focus?",-3018488));
var border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48806__$1,new cljs.core.Keyword(null,"border?","border?",-775600503),true);
var down_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48806__$1,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48806__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48806__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484),(0));
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48806__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48806__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var select_cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48806__$1,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312));
var arg_path_cursor_48793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$cursor","$cursor",765925294),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__48813 = new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null);
return (fexpr__48813.cljs$core$IFn$_invoke$arity$1 ? fexpr__48813.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__48813.call(null,(0)));
})()], null)], null);
var arg_path_focus_QMARK__48794 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$focus?","$focus?",-1159670391),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"focus?","focus?",-3018488),null,(1),null)),(2),null))], null));
var arg_path_text_48795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$text","$text",-983499110),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"text","text",-1790561697),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__48815 = new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null);
return (fexpr__48815.cljs$core$IFn$_invoke$arity$1 ? fexpr__48815.cljs$core$IFn$_invoke$arity$1("") : fexpr__48815.call(null,""));
})()], null)], null);
var arg_path_down_pos_48796 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$down-pos","$down-pos",1262400524),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null));
var arg_path_mpos_48797 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$mpos","$mpos",-731459501),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null));
var arg_path_select_cursor_48798 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$select-cursor","$select-cursor",-1212008772),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null));
var arg_path_last_click_48799 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$last-click","$last-click",-783165994),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"last-click","last-click",1376836603),null,(1),null)),(2),null))], null));
var arg_path_font_48800 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$font","$font",1745987399),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"font","font",-1506159249),null,(1),null)),(2),null))], null));
var arg_path_border_QMARK__48801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$border?","$border?",1319872011),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"border?","border?",-775600503),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__48821 = new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null);
return (fexpr__48821.cljs$core$IFn$_invoke$arity$1 ? fexpr__48821.cljs$core$IFn$_invoke$arity$1(true) : fexpr__48821.call(null,true));
})()], null)], null);
var arg_path_extra_48802 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_48803 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_48792,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
var text__$1 = (function (){var or__4126__auto__ = text;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})();
var padding_x = (cljs.core.truth_(border_QMARK_)?(5):(0));
var padding_y = (cljs.core.truth_(border_QMARK_)?(2):(0));
if(cljs.core.truth_(focus_QMARK_)){
return membrane.ui.wrap_on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-event","mouse-event",189077181),(function (handler,p__48829,button,mouse_down_QMARK_,mods){
var vec__48830 = p__48829;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48830,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48830,(1),null);
var G__48833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - padding_x),(my - padding_y)], null);
var G__48834 = button;
var G__48835 = mouse_down_QMARK_;
var G__48836 = mods;
return (handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(G__48833,G__48834,G__48835,G__48836) : handler.call(null,G__48833,G__48834,G__48835,G__48836));
}),membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-press","key-press",850740112),(function (s){
if(cljs.core.truth_(focus_QMARK_)){
var G__48842 = s;
var G__48842__$1 = (((G__48842 instanceof cljs.core.Keyword))?G__48842.fqn:null);
switch (G__48842__$1) {
case "up":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","previous-line","membrane.basic-components/previous-line",-944116422),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),text__$1], null)], null);

break;
case "enter":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","insert-newline","membrane.basic-components/insert-newline",2000426841),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null))], null)], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","next-line","membrane.basic-components/next-line",1208687601),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),text__$1], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","backward-char","membrane.basic-components/backward-char",-1913520569),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),text__$1], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","forward-char","membrane.basic-components/forward-char",-138685795),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),text__$1], null)], null);

break;
case "backspace":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","delete-backward","membrane.basic-components/delete-backward",1626461423),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null))], null)], null);

break;
default:
if(typeof s === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","insert-text","membrane.basic-components/insert-text",-1863209104),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null)),s], null)], null);
} else {
return null;
}

}
} else {
return null;
}
}),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),(function (p__48858){
var vec__48859 = p__48858;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48859,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48859,(1),null);
var pos = vec__48859;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","finish-drag","membrane.basic-components/finish-drag",-693863563),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_down_pos_48796,cljs.core.PersistentVector.EMPTY),pos,text__$1,font], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","text-double-click","membrane.basic-components/text-double-click",-407478722),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_last_click_48799,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),pos,text__$1,font], null)], null);
}),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),(function (p__48863){
var vec__48864 = p__48863;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48864,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48864,(1),null);
var pos = vec__48864;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","request-focus","membrane.basic-components/request-focus",-1746949715)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","move-cursor-to-pos","membrane.basic-components/move-cursor-to-pos",153354941),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),text__$1,font,pos], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","start-drag","membrane.basic-components/start-drag",509374763),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mpos_48797,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_down_pos_48796,cljs.core.PersistentVector.EMPTY),pos], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),null], null)], null);
}),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),(function (p__48867){
var vec__48868 = p__48867;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48868,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48868,(1),null);
var pos = vec__48868;
if(cljs.core.truth_(down_pos)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","drag","membrane.basic-components/drag",1306344074),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mpos_48797,cljs.core.PersistentVector.EMPTY),pos], null)], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"clipboard-copy","clipboard-copy",1304333525),(function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = focus_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return select_cursor;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipboard-copy","clipboard-copy",1304333525),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text__$1,(function (){var x__4217__auto__ = cursor;
var y__4218__auto__ = select_cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = cursor;
var y__4215__auto__ = select_cursor;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())], null)], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"clipboard-cut","clipboard-cut",-1344378713),(function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = focus_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return select_cursor;
} else {
return and__4115__auto__;
}
})())){
var new_text = (cljs.core.truth_(text__$1)?[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text__$1,(0),(function (){var x__4217__auto__ = cursor;
var y__4218__auto__ = select_cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text__$1,(function (){var x__4214__auto__ = cursor;
var y__4215__auto__ = select_cursor;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())].join(''):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),(function (){var x__4217__auto__ = cursor;
var y__4218__auto__ = select_cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null)),new_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipboard-cut","clipboard-cut",-1344378713),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text__$1,(function (){var x__4217__auto__ = cursor;
var y__4218__auto__ = select_cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = cursor;
var y__4215__auto__ = select_cursor;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","new-text","membrane.basic-components/new-text",1730191848),new_text], null)], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"clipboard-paste","clipboard-paste",-1682370330),(function (s){
if(cljs.core.truth_(focus_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","insert-text","membrane.basic-components/insert-text",-1863209104),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null)),s], null)], null);
} else {
return null;
}
}),(function (){var body = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2((100),(10)),(cljs.core.truth_(focus_QMARK_)?membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5725490196078431,0.5725490196078431,0.5725490196078431,0.4], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.text_cursor.cljs$core$IFn$_invoke$arity$3(text__$1,cursor,font)], 0)):null),(cljs.core.truth_(select_cursor)?membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6980392156862745,0.8431372549019608,(1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.text_selection.cljs$core$IFn$_invoke$arity$3(text__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = select_cursor;
var y__4218__auto__ = cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = select_cursor;
var y__4215__auto__ = cursor;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null),font)], 0)):null),(function (){var temp__5753__auto__ = down_pos;
if(cljs.core.truth_(temp__5753__auto__)){
var vec__48877 = temp__5753__auto__;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48877,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48877,(1),null);
var temp__5753__auto____$1 = mpos;
if(cljs.core.truth_(temp__5753__auto____$1)){
var vec__48880 = temp__5753__auto____$1;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48880,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48880,(1),null);
return membrane.ui.translate((function (){var x__4217__auto__ = mx;
var y__4218__auto__ = dx;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4217__auto__ = my;
var y__4218__auto__ = dy;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),membrane.ui.filled_rectangle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9,0.9,0.9], null),Math.abs((mx - dx)),Math.abs((my - dy))));
} else {
return null;
}
} else {
return null;
}
})(),membrane.ui.label.cljs$core$IFn$_invoke$arity$2(text__$1,font)], null);
if(cljs.core.truth_(border_QMARK_)){
var gray = 0.65;
var vec__48883 = membrane.ui.bounds(body);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48883,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48883,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray,gray,gray], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rectangle((w + ((2) * padding_x)),((function (){var x__4214__auto__ = h;
var y__4215__auto__ = (padding_y + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return membrane.ui.default_font.size;
}
})());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + ((2) * padding_y)))], 0))], 0)),membrane.ui.translate(padding_x,padding_y,body)], null);
} else {
return body;
}
})()], 0))], 0));
} else {
return (new membrane.ui.NoKeyPress(membrane.ui.wrap_on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-event","mouse-event",189077181),(function (handler,p__48886,button,mouse_down_QMARK_,mods){
var vec__48887 = p__48886;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48887,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48887,(1),null);
var G__48890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - padding_x),(my - padding_y)], null);
var G__48891 = button;
var G__48892 = mouse_down_QMARK_;
var G__48893 = mods;
return (handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(G__48890,G__48891,G__48892,G__48893) : handler.call(null,G__48890,G__48891,G__48892,G__48893));
}),membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-press","key-press",850740112),(function (s){
if(cljs.core.truth_(focus_QMARK_)){
var G__48894 = s;
var G__48894__$1 = (((G__48894 instanceof cljs.core.Keyword))?G__48894.fqn:null);
switch (G__48894__$1) {
case "up":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","previous-line","membrane.basic-components/previous-line",-944116422),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),text__$1], null)], null);

break;
case "enter":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","insert-newline","membrane.basic-components/insert-newline",2000426841),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null))], null)], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","next-line","membrane.basic-components/next-line",1208687601),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),text__$1], null)], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","backward-char","membrane.basic-components/backward-char",-1913520569),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),text__$1], null)], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","forward-char","membrane.basic-components/forward-char",-138685795),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),text__$1], null)], null);

break;
case "backspace":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","delete-backward","membrane.basic-components/delete-backward",1626461423),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null))], null)], null);

break;
default:
if(typeof s === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","insert-text","membrane.basic-components/insert-text",-1863209104),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null)),s], null)], null);
} else {
return null;
}

}
} else {
return null;
}
}),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),(function (p__48914){
var vec__48915 = p__48914;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48915,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48915,(1),null);
var pos = vec__48915;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","finish-drag","membrane.basic-components/finish-drag",-693863563),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_down_pos_48796,cljs.core.PersistentVector.EMPTY),pos,text__$1,font], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","text-double-click","membrane.basic-components/text-double-click",-407478722),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_last_click_48799,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),pos,text__$1,font], null)], null);
}),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),(function (p__48918){
var vec__48920 = p__48918;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48920,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48920,(1),null);
var pos = vec__48920;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","request-focus","membrane.basic-components/request-focus",-1746949715)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","move-cursor-to-pos","membrane.basic-components/move-cursor-to-pos",153354941),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),text__$1,font,pos], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","start-drag","membrane.basic-components/start-drag",509374763),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mpos_48797,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_down_pos_48796,cljs.core.PersistentVector.EMPTY),pos], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),null], null)], null);
}),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),(function (p__48923){
var vec__48924 = p__48923;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48924,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48924,(1),null);
var pos = vec__48924;
if(cljs.core.truth_(down_pos)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","drag","membrane.basic-components/drag",1306344074),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mpos_48797,cljs.core.PersistentVector.EMPTY),pos], null)], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"clipboard-copy","clipboard-copy",1304333525),(function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = focus_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return select_cursor;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipboard-copy","clipboard-copy",1304333525),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text__$1,(function (){var x__4217__auto__ = cursor;
var y__4218__auto__ = select_cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = cursor;
var y__4215__auto__ = select_cursor;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())], null)], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"clipboard-cut","clipboard-cut",-1344378713),(function (){
if(cljs.core.truth_((function (){var and__4115__auto__ = focus_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return select_cursor;
} else {
return and__4115__auto__;
}
})())){
var new_text = (cljs.core.truth_(text__$1)?[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text__$1,(0),(function (){var x__4217__auto__ = cursor;
var y__4218__auto__ = select_cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text__$1,(function (){var x__4214__auto__ = cursor;
var y__4215__auto__ = select_cursor;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())].join(''):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),(function (){var x__4217__auto__ = cursor;
var y__4218__auto__ = select_cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null)),new_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipboard-cut","clipboard-cut",-1344378713),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text__$1,(function (){var x__4217__auto__ = cursor;
var y__4218__auto__ = select_cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = cursor;
var y__4215__auto__ = select_cursor;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","new-text","membrane.basic-components/new-text",1730191848),new_text], null)], null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"clipboard-paste","clipboard-paste",-1682370330),(function (s){
if(cljs.core.truth_(focus_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","insert-text","membrane.basic-components/insert-text",-1863209104),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_cursor_48793,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_select_cursor_48798,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_48795,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,"",null,(1),null)),(2),null))], null)),s], null)], null);
} else {
return null;
}
}),(function (){var body = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2((100),(10)),(cljs.core.truth_(focus_QMARK_)?membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5725490196078431,0.5725490196078431,0.5725490196078431,0.4], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.text_cursor.cljs$core$IFn$_invoke$arity$3(text__$1,cursor,font)], 0)):null),(cljs.core.truth_(select_cursor)?membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6980392156862745,0.8431372549019608,(1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.text_selection.cljs$core$IFn$_invoke$arity$3(text__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4217__auto__ = select_cursor;
var y__4218__auto__ = cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4214__auto__ = select_cursor;
var y__4215__auto__ = cursor;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null),font)], 0)):null),(function (){var temp__5753__auto__ = down_pos;
if(cljs.core.truth_(temp__5753__auto__)){
var vec__48934 = temp__5753__auto__;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48934,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48934,(1),null);
var temp__5753__auto____$1 = mpos;
if(cljs.core.truth_(temp__5753__auto____$1)){
var vec__48937 = temp__5753__auto____$1;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48937,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48937,(1),null);
return membrane.ui.translate((function (){var x__4217__auto__ = mx;
var y__4218__auto__ = dx;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(function (){var x__4217__auto__ = my;
var y__4218__auto__ = dy;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),membrane.ui.filled_rectangle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9,0.9,0.9], null),Math.abs((mx - dx)),Math.abs((my - dy))));
} else {
return null;
}
} else {
return null;
}
})(),membrane.ui.label.cljs$core$IFn$_invoke$arity$2(text__$1,font)], null);
if(cljs.core.truth_(border_QMARK_)){
var gray = 0.65;
var vec__48940 = membrane.ui.bounds(body);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48940,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48940,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray,gray,gray], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rectangle((w + ((2) * padding_x)),((function (){var x__4214__auto__ = h;
var y__4215__auto__ = (padding_y + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return membrane.ui.default_font.size;
}
})());
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() + ((2) * padding_y)))], 0))], 0)),membrane.ui.translate(padding_x,padding_y,body)], null);
} else {
return body;
}
})()], 0))], 0)),null,null,null));
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Textarea_view = (function (cursor,focus_QMARK_,text,down_pos,mpos,select_cursor,last_click,font,border_QMARK_,extra,context,__meta,__extmap,__hash){
this.cursor = cursor;
this.focus_QMARK_ = focus_QMARK_;
this.text = text;
this.down_pos = down_pos;
this.mpos = mpos;
this.select_cursor = select_cursor;
this.last_click = last_click;
this.font = font;
this.border_QMARK_ = border_QMARK_;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Textarea_view.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48950,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48958 = k48950;
var G__48958__$1 = (((G__48958 instanceof cljs.core.Keyword))?G__48958.fqn:null);
switch (G__48958__$1) {
case "cursor":
return self__.cursor;

break;
case "focus?":
return self__.focus_QMARK_;

break;
case "text":
return self__.text;

break;
case "down-pos":
return self__.down_pos;

break;
case "mpos":
return self__.mpos;

break;
case "select-cursor":
return self__.select_cursor;

break;
case "last-click":
return self__.last_click;

break;
case "font":
return self__.font;

break;
case "border?":
return self__.border_QMARK_;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48950,else__4383__auto__);

}
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48963){
var vec__48964 = p__48963;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48964,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48964,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Textarea-view{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cursor","cursor",1011937484),self__.cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"focus?","focus?",-3018488),self__.focus_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),self__.down_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mpos","mpos",-959907109),self__.mpos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),self__.select_cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-click","last-click",1376836603),self__.last_click],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font","font",-1506159249),self__.font],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"border?","border?",-775600503),self__.border_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48949){
var self__ = this;
var G__48949__$1 = this;
return (new cljs.core.RecordIter((0),G__48949__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"focus?","focus?",-3018488),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),new cljs.core.Keyword(null,"mpos","mpos",-959907109),new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),new cljs.core.Keyword(null,"last-click","last-click",1376836603),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"border?","border?",-775600503),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (526914870 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48951,other48952){
var self__ = this;
var this48951__$1 = this;
return (((!((other48952 == null)))) && ((this48951__$1.constructor === other48952.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.cursor,other48952.cursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.focus_QMARK_,other48952.focus_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.text,other48952.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.down_pos,other48952.down_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.mpos,other48952.mpos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.select_cursor,other48952.select_cursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.last_click,other48952.last_click)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.font,other48952.font)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.border_QMARK_,other48952.border_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.extra,other48952.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.context,other48952.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48951__$1.__extmap,other48952.__extmap)));
}));

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"focus?","focus?",-3018488),null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,new cljs.core.Keyword(null,"border?","border?",-775600503),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,new cljs.core.Keyword(null,"last-click","last-click",1376836603),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48949){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__48989 = cljs.core.keyword_identical_QMARK_;
var expr__48990 = k__4388__auto__;
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cursor","cursor",1011937484),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),expr__48990)))){
return (new membrane.basic_components.Textarea_view(G__48949,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"focus?","focus?",-3018488),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"focus?","focus?",-3018488),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,G__48949,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,G__48949,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,G__48949,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mpos","mpos",-959907109),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,G__48949,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,G__48949,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last-click","last-click",1376836603),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"last-click","last-click",1376836603),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,G__48949,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font","font",-1506159249),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"font","font",-1506159249),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,G__48949,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border?","border?",-775600503),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"border?","border?",-775600503),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,G__48949,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,G__48949,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48989.cljs$core$IFn$_invoke$arity$2 ? pred__48989.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__48990) : pred__48989.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__48990)))){
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,G__48949,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48949),null));
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

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cursor","cursor",1011937484),self__.cursor,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"focus?","focus?",-3018488),self__.focus_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),self__.down_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mpos","mpos",-959907109),self__.mpos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),self__.select_cursor,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-click","last-click",1376836603),self__.last_click,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"font","font",-1506159249),self__.font,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"border?","border?",-775600503),self__.border_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48949){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Textarea_view(self__.cursor,self__.focus_QMARK_,self__.text,self__.down_pos,self__.mpos,self__.select_cursor,self__.last_click,self__.font,self__.border_QMARK_,self__.extra,self__.context,G__48949,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Textarea_view.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_view.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Textarea_view.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"focus?","focus?",1637513039,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"down-pos","down-pos",-721863824,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"select-cursor","select-cursor",1104909215,null),new cljs.core.Symbol(null,"last-click","last-click",-1277599166,null),new cljs.core.Symbol(null,"font","font",134372278,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Textarea_view.cljs$lang$type = true);

(membrane.basic_components.Textarea_view.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Textarea-view",null,(1),null));
}));

(membrane.basic_components.Textarea_view.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Textarea-view");
}));

/**
 * Positional factory function for membrane.basic-components/Textarea-view.
 */
membrane.basic_components.__GT_Textarea_view = (function membrane$basic_components$__GT_Textarea_view(cursor,focus_QMARK_,text,down_pos,mpos,select_cursor,last_click,font,border_QMARK_,extra,context){
return (new membrane.basic_components.Textarea_view(cursor,focus_QMARK_,text,down_pos,mpos,select_cursor,last_click,font,border_QMARK_,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Textarea-view, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Textarea_view = (function membrane$basic_components$map__GT_Textarea_view(G__48954){
var extmap__4419__auto__ = (function (){var G__49016 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48954,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"focus?","focus?",-3018488),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),new cljs.core.Keyword(null,"mpos","mpos",-959907109),new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),new cljs.core.Keyword(null,"last-click","last-click",1376836603),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"border?","border?",-775600503),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__48954)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49016);
} else {
return G__49016;
}
})();
return (new membrane.basic_components.Textarea_view(new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"focus?","focus?",-3018488).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"down-pos","down-pos",1932571945).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"mpos","mpos",-959907109).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"last-click","last-click",1376836603).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"border?","border?",-775600503).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__48954),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__48954),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.textarea_view;},new cljs.core.Symbol("membrane.basic-components","textarea-view","membrane.basic-components/textarea-view",1558483008,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"textarea-view","textarea-view",-2128032656,null),"membrane/basic_components.cljc",21,1,301,true,301,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.textarea_view)?membrane.basic_components.textarea_view.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"focus?","focus?",1637513039,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"down-pos","down-pos",-721863824,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"select-cursor","select-cursor",1104909215,null),new cljs.core.Symbol(null,"last-click","last-click",-1277599166,null),new cljs.core.Symbol(null,"font","font",134372278,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),(0),new cljs.core.Symbol(null,"text","text",-150030170,null),"",new cljs.core.Symbol(null,"border?","border?",864931024,null),true], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Raw component for a basic textarea. textarea should be preferred."], null)], 0));
}));

membrane.basic_components.textarea_view_rerender_BANG_ = (function membrane$basic_components$textarea_view_rerender_BANG_(m__47722__auto__){
var elem_48804 = membrane.basic_components.map__GT_Textarea_view(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","textarea-view","membrane.basic-components/textarea-view",-82048519),new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_48804.cursor,elem_48804.focus_QMARK_,elem_48804.text,elem_48804.down_pos,elem_48804.mpos,elem_48804.select_cursor,elem_48804.last_click,elem_48804.font,elem_48804.border_QMARK_,elem_48804.extra,elem_48804.context,new cljs.core.Keyword(null,"$cursor","$cursor",765925294).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$focus?","$focus?",-1159670391).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$text","$text",-983499110).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$down-pos","$down-pos",1262400524).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$mpos","$mpos",-731459501).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$select-cursor","$select-cursor",-1212008772).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$last-click","$last-click",-783165994).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$font","$font",1745987399).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$border?","$border?",1319872011).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_48804),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_48804)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.textarea_view_draw(elem_48804);
var elem_48804__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_48804,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_48804__$1);

return elem_48804__$1;
});

var ret__47724__auto___49910 = /**
 * Raw component for a basic textarea. textarea should be preferred.
 */
membrane.basic_components.textarea_view = (function membrane$basic_components$textarea_view(p__49034){
var map__49035 = p__49034;
var map__49035__$1 = (((((!((map__49035 == null))))?(((((map__49035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49035):map__49035);
var m_48792 = map__49035__$1;
var mpos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"mpos","mpos",-959907109));
var last_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"last-click","last-click",1376836603));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49035__$1,new cljs.core.Keyword(null,"text","text",-1790561697),"");
var focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"focus?","focus?",-3018488));
var border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49035__$1,new cljs.core.Keyword(null,"border?","border?",-775600503),true);
var down_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49035__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484),(0));
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var select_cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49035__$1,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","textarea-view","membrane.basic-components/textarea-view",-82048519),new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,focus_QMARK_,text,down_pos,mpos,select_cursor,last_click,font,border_QMARK_,extra,context,new cljs.core.Keyword(null,"$cursor","$cursor",765925294).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$focus?","$focus?",-1159670391).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$text","$text",-983499110).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$down-pos","$down-pos",1262400524).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$mpos","$mpos",-731459501).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$select-cursor","$select-cursor",-1212008772).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$last-click","$last-click",-783165994).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$font","$font",1745987399).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$border?","$border?",1319872011).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_48792),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_48792)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.textarea_view_rerender_BANG_(m_48792);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","textarea-view","membrane.basic-components/textarea-view",1558483008,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"focus?","focus?",1637513039,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"down-pos","down-pos",-721863824,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"select-cursor","select-cursor",1104909215,null),new cljs.core.Symbol(null,"last-click","last-click",-1277599166,null),new cljs.core.Symbol(null,"font","font",134372278,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),(0),new cljs.core.Symbol(null,"text","text",-150030170,null),"",new cljs.core.Symbol(null,"border?","border?",864931024,null),true], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Raw component for a basic textarea. textarea should be preferred."], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.textarea_view;},new cljs.core.Symbol("membrane.basic-components","textarea-view","membrane.basic-components/textarea-view",1558483008,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"textarea-view","textarea-view",-2128032656,null),"membrane/basic_components.cljc",21,1,301,301,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"focus?","focus?",1637513039,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"down-pos","down-pos",-721863824,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"select-cursor","select-cursor",1104909215,null),new cljs.core.Symbol(null,"last-click","last-click",-1277599166,null),new cljs.core.Symbol(null,"font","font",134372278,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),(0),new cljs.core.Symbol(null,"text","text",-150030170,null),"",new cljs.core.Symbol(null,"border?","border?",864931024,null),true], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-48792","m-48792",994554367,null)], null)], null)),"Raw component for a basic textarea. textarea should be preferred.",(cljs.core.truth_(membrane.basic_components.textarea_view)?membrane.basic_components.textarea_view.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"focus?","focus?",1637513039,null),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"down-pos","down-pos",-721863824,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"select-cursor","select-cursor",1104909215,null),new cljs.core.Symbol(null,"last-click","last-click",-1277599166,null),new cljs.core.Symbol(null,"font","font",134372278,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),(0),new cljs.core.Symbol(null,"text","text",-150030170,null),"",new cljs.core.Symbol(null,"border?","border?",864931024,null),true], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Raw component for a basic textarea. textarea should be preferred."], null)], 0));
}));


membrane.basic_components.textarea_draw = (function membrane$basic_components$textarea_draw(p__49084){
var map__49085 = p__49084;
var map__49085__$1 = (((((!((map__49085 == null))))?(((((map__49085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49085):map__49085);
var m_49041 = map__49085__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49085__$1,new cljs.core.Keyword(null,"border?","border?",-775600503),true);
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var textarea_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_text_49042 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49041,new cljs.core.Keyword(null,"$text","$text",-983499110),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"text","text",-1790561697),null,(1),null)),(2),null))], null));
var arg_path_border_QMARK__49043 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49041,new cljs.core.Keyword(null,"$border?","$border?",1319872011),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"border?","border?",-775600503),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__49091 = new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null);
return (fexpr__49091.cljs$core$IFn$_invoke$arity$1 ? fexpr__49091.cljs$core$IFn$_invoke$arity$1(true) : fexpr__49091.call(null,true));
})()], null)], null);
var arg_path_font_49044 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49041,new cljs.core.Keyword(null,"$font","$font",1745987399),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"font","font",-1506159249),null,(1),null)),(2),null))], null));
var arg_path_focus_49045 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49041,new cljs.core.Keyword(null,"$focus","$focus",-580100351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"focus","focus",234677911),null,(1),null)),(2),null))], null));
var arg_path_textarea_state_49046 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49041,new cljs.core.Keyword(null,"$textarea-state","$textarea-state",90211533),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),null,(1),null)),(2),null))], null));
var arg_path_extra_49047 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49041,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_49048 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49041,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
return membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("membrane.basic-components","request-focus","membrane.basic-components/request-focus",-1746949715),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_focus_49045,cljs.core.PersistentVector.EMPTY)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49042,cljs.core.PersistentVector.EMPTY)], null)], null);
}),membrane.basic_components.textarea_view((function (){var cursor_49053 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(textarea_state,new cljs.core.Keyword(null,"cursor","cursor",1011937484),(0));
var focus_QMARK__49054 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focus,cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49042,cljs.core.PersistentVector.EMPTY));
var text_49055 = text;
var down_pos_49056 = new cljs.core.Keyword(null,"down-pos","down-pos",1932571945).cljs$core$IFn$_invoke$arity$1(textarea_state);
var mpos_49057 = new cljs.core.Keyword(null,"mpos","mpos",-959907109).cljs$core$IFn$_invoke$arity$1(textarea_state);
var select_cursor_49058 = new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312).cljs$core$IFn$_invoke$arity$1(textarea_state);
var font_49059 = font;
var border_QMARK__49060 = (function (){var or__4126__auto__ = border_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (border_QMARK_ == null);
}
})();
var last_click_49061 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49042,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49042","arg-path-text-49042",-731586975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49044,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_border_QMARK__49043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(border_QMARK_ == null),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null))], null),new cljs.core.Keyword(null,"$last-click","$last-click",-783165994)], null),null);
var extra_49062 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49042,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49042","arg-path-text-49042",-731586975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49044,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_border_QMARK__49043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(border_QMARK_ == null),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null))], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_49063 = context;
var $cursor_49064 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null));
var $focus_QMARK__49065 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49042","arg-path-text-49042",-731586975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null);
var $text_49066 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49042,cljs.core.PersistentVector.EMPTY);
var $down_pos_49067 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null));
var $mpos_49068 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null));
var $select_cursor_49069 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null));
var $last_click_49070 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49047,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49042,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49042","arg-path-text-49042",-731586975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49044,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_border_QMARK__49043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(border_QMARK_ == null),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null))], null),new cljs.core.Keyword(null,"$last-click","$last-click",-783165994)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $font_49071 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49044,cljs.core.PersistentVector.EMPTY);
var $border_QMARK__49072 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_border_QMARK__49043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(border_QMARK_ == null),null,(1),null)),(2),null))], null));
var $extra_49073 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49047,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49042,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49042","arg-path-text-49042",-731586975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49044,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_border_QMARK__49043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(border_QMARK_ == null),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49046,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null))], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_49074 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_49048,cljs.core.PersistentVector.EMPTY);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.Keyword(null,"$font","$font",1745987399),new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.Keyword(null,"focus?","focus?",-3018488),new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),new cljs.core.Keyword(null,"$focus?","$focus?",-1159670391),new cljs.core.Keyword(null,"border?","border?",-775600503),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"$border?","$border?",1319872011),new cljs.core.Keyword(null,"$down-pos","$down-pos",1262400524),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"$cursor","$cursor",765925294),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"$mpos","$mpos",-731459501),new cljs.core.Keyword(null,"$last-click","$last-click",-783165994),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),new cljs.core.Keyword(null,"$text","$text",-983499110),new cljs.core.Keyword(null,"mpos","mpos",-959907109),new cljs.core.Keyword(null,"last-click","last-click",1376836603),new cljs.core.Keyword(null,"$select-cursor","$select-cursor",-1212008772),new cljs.core.Keyword(null,"text","text",-1790561697)],[$extra_49073,$font_49071,$context_49074,focus_QMARK__49054,down_pos_49056,$focus_QMARK__49065,border_QMARK__49060,extra_49062,$border_QMARK__49072,$down_pos_49067,cursor_49053,$cursor_49064,font_49059,$mpos_49068,$last_click_49070,context_49063,select_cursor_49058,$text_49066,mpos_49057,last_click_49061,$select_cursor_49069,text_49055]);
})())], 0));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Textarea = (function (text,border_QMARK_,font,focus,textarea_state,extra,context,__meta,__extmap,__hash){
this.text = text;
this.border_QMARK_ = border_QMARK_;
this.font = font;
this.focus = focus;
this.textarea_state = textarea_state;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Textarea.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Textarea.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49114,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49122 = k49114;
var G__49122__$1 = (((G__49122 instanceof cljs.core.Keyword))?G__49122.fqn:null);
switch (G__49122__$1) {
case "text":
return self__.text;

break;
case "border?":
return self__.border_QMARK_;

break;
case "font":
return self__.font;

break;
case "focus":
return self__.focus;

break;
case "textarea-state":
return self__.textarea_state;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49114,else__4383__auto__);

}
}));

(membrane.basic_components.Textarea.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49124){
var vec__49125 = p__49124;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49125,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49125,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Textarea.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Textarea{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"border?","border?",-775600503),self__.border_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font","font",-1506159249),self__.font],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"focus","focus",234677911),self__.focus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),self__.textarea_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Textarea.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49113){
var self__ = this;
var G__49113__$1 = this;
return (new cljs.core.RecordIter((0),G__49113__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"border?","border?",-775600503),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Textarea.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Textarea.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Textarea(self__.text,self__.border_QMARK_,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Textarea.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Textarea.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (645756050 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Textarea.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Textarea.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49115,other49116){
var self__ = this;
var this49115__$1 = this;
return (((!((other49116 == null)))) && ((this49115__$1.constructor === other49116.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49115__$1.text,other49116.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49115__$1.border_QMARK_,other49116.border_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49115__$1.font,other49116.font)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49115__$1.focus,other49116.focus)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49115__$1.textarea_state,other49116.textarea_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49115__$1.extra,other49116.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49115__$1.context,other49116.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49115__$1.__extmap,other49116.__extmap)));
}));

(membrane.basic_components.Textarea.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Textarea.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),null,new cljs.core.Keyword(null,"border?","border?",-775600503),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"focus","focus",234677911),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Textarea(self__.text,self__.border_QMARK_,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Textarea.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49113){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49153 = cljs.core.keyword_identical_QMARK_;
var expr__49154 = k__4388__auto__;
if(cljs.core.truth_((pred__49153.cljs$core$IFn$_invoke$arity$2 ? pred__49153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),expr__49154) : pred__49153.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__49154)))){
return (new membrane.basic_components.Textarea(G__49113,self__.border_QMARK_,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49153.cljs$core$IFn$_invoke$arity$2 ? pred__49153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border?","border?",-775600503),expr__49154) : pred__49153.call(null,new cljs.core.Keyword(null,"border?","border?",-775600503),expr__49154)))){
return (new membrane.basic_components.Textarea(self__.text,G__49113,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49153.cljs$core$IFn$_invoke$arity$2 ? pred__49153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font","font",-1506159249),expr__49154) : pred__49153.call(null,new cljs.core.Keyword(null,"font","font",-1506159249),expr__49154)))){
return (new membrane.basic_components.Textarea(self__.text,self__.border_QMARK_,G__49113,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49153.cljs$core$IFn$_invoke$arity$2 ? pred__49153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"focus","focus",234677911),expr__49154) : pred__49153.call(null,new cljs.core.Keyword(null,"focus","focus",234677911),expr__49154)))){
return (new membrane.basic_components.Textarea(self__.text,self__.border_QMARK_,self__.font,G__49113,self__.textarea_state,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49153.cljs$core$IFn$_invoke$arity$2 ? pred__49153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),expr__49154) : pred__49153.call(null,new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),expr__49154)))){
return (new membrane.basic_components.Textarea(self__.text,self__.border_QMARK_,self__.font,self__.focus,G__49113,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49153.cljs$core$IFn$_invoke$arity$2 ? pred__49153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49154) : pred__49153.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49154)))){
return (new membrane.basic_components.Textarea(self__.text,self__.border_QMARK_,self__.font,self__.focus,self__.textarea_state,G__49113,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49153.cljs$core$IFn$_invoke$arity$2 ? pred__49153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__49154) : pred__49153.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__49154)))){
return (new membrane.basic_components.Textarea(self__.text,self__.border_QMARK_,self__.font,self__.focus,self__.textarea_state,self__.extra,G__49113,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Textarea(self__.text,self__.border_QMARK_,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49113),null));
}
}
}
}
}
}
}
}));

(membrane.basic_components.Textarea.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"border?","border?",-775600503),self__.border_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"font","font",-1506159249),self__.font,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"focus","focus",234677911),self__.focus,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),self__.textarea_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Textarea.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49113){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Textarea(self__.text,self__.border_QMARK_,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,G__49113,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Textarea.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Textarea.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Textarea.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Textarea.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Textarea.cljs$lang$type = true);

(membrane.basic_components.Textarea.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Textarea",null,(1),null));
}));

(membrane.basic_components.Textarea.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Textarea");
}));

/**
 * Positional factory function for membrane.basic-components/Textarea.
 */
membrane.basic_components.__GT_Textarea = (function membrane$basic_components$__GT_Textarea(text,border_QMARK_,font,focus,textarea_state,extra,context){
return (new membrane.basic_components.Textarea(text,border_QMARK_,font,focus,textarea_state,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Textarea, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Textarea = (function membrane$basic_components$map__GT_Textarea(G__49117){
var extmap__4419__auto__ = (function (){var G__49187 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49117,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"border?","border?",-775600503),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__49117)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49187);
} else {
return G__49187;
}
})();
return (new membrane.basic_components.Textarea(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__49117),new cljs.core.Keyword(null,"border?","border?",-775600503).cljs$core$IFn$_invoke$arity$1(G__49117),new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(G__49117),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(G__49117),new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500).cljs$core$IFn$_invoke$arity$1(G__49117),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__49117),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__49117),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.textarea;},new cljs.core.Symbol("membrane.basic-components","textarea","membrane.basic-components/textarea",-1775179929,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"textarea","textarea",990155703,null),"membrane/basic_components.cljc",16,1,435,true,435,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.textarea)?membrane.basic_components.textarea.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"border?","border?",864931024,null),true], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Textarea component."], null)], 0));
}));

membrane.basic_components.textarea_rerender_BANG_ = (function membrane$basic_components$textarea_rerender_BANG_(m__47722__auto__){
var elem_49052 = membrane.basic_components.map__GT_Textarea(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","textarea","membrane.basic-components/textarea",879255840),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_49052.text,elem_49052.border_QMARK_,elem_49052.font,elem_49052.focus,elem_49052.textarea_state,elem_49052.extra,elem_49052.context,new cljs.core.Keyword(null,"$text","$text",-983499110).cljs$core$IFn$_invoke$arity$1(elem_49052),new cljs.core.Keyword(null,"$border?","$border?",1319872011).cljs$core$IFn$_invoke$arity$1(elem_49052),new cljs.core.Keyword(null,"$font","$font",1745987399).cljs$core$IFn$_invoke$arity$1(elem_49052),new cljs.core.Keyword(null,"$focus","$focus",-580100351).cljs$core$IFn$_invoke$arity$1(elem_49052),new cljs.core.Keyword(null,"$textarea-state","$textarea-state",90211533).cljs$core$IFn$_invoke$arity$1(elem_49052),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_49052),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_49052)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.textarea_draw(elem_49052);
var elem_49052__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_49052,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_49052__$1);

return elem_49052__$1;
});

var ret__47724__auto___49912 = /**
 * Textarea component.
 */
membrane.basic_components.textarea = (function membrane$basic_components$textarea(p__49198){
var map__49200 = p__49198;
var map__49200__$1 = (((((!((map__49200 == null))))?(((((map__49200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49200):map__49200);
var m_49041 = map__49200__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49200__$1,new cljs.core.Keyword(null,"border?","border?",-775600503),true);
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var textarea_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49200__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","textarea","membrane.basic-components/textarea",879255840),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,border_QMARK_,font,focus,textarea_state,extra,context,new cljs.core.Keyword(null,"$text","$text",-983499110).cljs$core$IFn$_invoke$arity$1(m_49041),new cljs.core.Keyword(null,"$border?","$border?",1319872011).cljs$core$IFn$_invoke$arity$1(m_49041),new cljs.core.Keyword(null,"$font","$font",1745987399).cljs$core$IFn$_invoke$arity$1(m_49041),new cljs.core.Keyword(null,"$focus","$focus",-580100351).cljs$core$IFn$_invoke$arity$1(m_49041),new cljs.core.Keyword(null,"$textarea-state","$textarea-state",90211533).cljs$core$IFn$_invoke$arity$1(m_49041),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_49041),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_49041)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.textarea_rerender_BANG_(m_49041);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","textarea","membrane.basic-components/textarea",-1775179929,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"border?","border?",864931024,null),true], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Textarea component."], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.textarea;},new cljs.core.Symbol("membrane.basic-components","textarea","membrane.basic-components/textarea",-1775179929,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"textarea","textarea",990155703,null),"membrane/basic_components.cljc",16,1,435,435,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"border?","border?",864931024,null),true], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-49041","m-49041",1758702260,null)], null)], null)),"Textarea component.",(cljs.core.truth_(membrane.basic_components.textarea)?membrane.basic_components.textarea.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"border?","border?",864931024,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"border?","border?",864931024,null),true], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Textarea component."], null)], 0));
}));


membrane.basic_components.textarea_light_draw = (function membrane$basic_components$textarea_light_draw(p__49257){
var map__49258 = p__49257;
var map__49258__$1 = (((((!((map__49258 == null))))?(((((map__49258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49258):map__49258);
var m_49214 = map__49258__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49258__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49258__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49258__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var textarea_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49258__$1,new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49258__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49258__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_text_49215 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49214,new cljs.core.Keyword(null,"$text","$text",-983499110),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"text","text",-1790561697),null,(1),null)),(2),null))], null));
var arg_path_font_49216 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49214,new cljs.core.Keyword(null,"$font","$font",1745987399),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"font","font",-1506159249),null,(1),null)),(2),null))], null));
var arg_path_focus_49217 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49214,new cljs.core.Keyword(null,"$focus","$focus",-580100351),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"focus","focus",234677911),null,(1),null)),(2),null))], null));
var arg_path_textarea_state_49218 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49214,new cljs.core.Keyword(null,"$textarea-state","$textarea-state",90211533),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),null,(1),null)),(2),null))], null));
var arg_path_extra_49219 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49214,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_49220 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49214,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
return membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("membrane.basic-components","request-focus","membrane.basic-components/request-focus",-1746949715),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_focus_49217,cljs.core.PersistentVector.EMPTY)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49215,cljs.core.PersistentVector.EMPTY)], null)], null);
}),(function (){var focus_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focus,cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49215,cljs.core.PersistentVector.EMPTY));
var textarea = membrane.basic_components.textarea_view((function (){var cursor_49222 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(textarea_state,new cljs.core.Keyword(null,"cursor","cursor",1011937484),(0));
var focus_QMARK__49223 = focus_QMARK_;
var text_49224 = text;
var down_pos_49225 = new cljs.core.Keyword(null,"down-pos","down-pos",1932571945).cljs$core$IFn$_invoke$arity$1(textarea_state);
var mpos_49226 = new cljs.core.Keyword(null,"mpos","mpos",-959907109).cljs$core$IFn$_invoke$arity$1(textarea_state);
var select_cursor_49227 = new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312).cljs$core$IFn$_invoke$arity$1(textarea_state);
var font_49228 = font;
var border_QMARK__49229 = false;
var last_click_49230 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49215,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49215","arg-path-text-49215",-659390218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49216,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,false,null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$last-click","$last-click",-783165994)], null),null);
var extra_49231 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49215,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49215","arg-path-text-49215",-659390218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49216,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,false,null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_49232 = context;
var $cursor_49233 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null));
var $focus_QMARK__49234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49215","arg-path-text-49215",-659390218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null);
var $text_49235 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49215,cljs.core.PersistentVector.EMPTY);
var $down_pos_49236 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null));
var $mpos_49237 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null));
var $select_cursor_49238 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null));
var $last_click_49239 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49215,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49215","arg-path-text-49215",-659390218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49216,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,false,null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$last-click","$last-click",-783165994)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $font_49240 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49216,cljs.core.PersistentVector.EMPTY);
var $border_QMARK__49241 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,false,null,(1),null)),(2),null))], null);
var $extra_49242 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_text_49215,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-text-49215","arg-path-text-49215",-659390218,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY)),null,(1),null)),(2),null))], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_font_49216,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mpos","mpos",-959907109),null,(1),null)),(2),null))], null)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_textarea_state_49218,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,false,null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_49243 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_49220,cljs.core.PersistentVector.EMPTY);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.Keyword(null,"$font","$font",1745987399),new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.Keyword(null,"focus?","focus?",-3018488),new cljs.core.Keyword(null,"down-pos","down-pos",1932571945),new cljs.core.Keyword(null,"$focus?","$focus?",-1159670391),new cljs.core.Keyword(null,"border?","border?",-775600503),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"$border?","$border?",1319872011),new cljs.core.Keyword(null,"$down-pos","$down-pos",1262400524),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"$cursor","$cursor",765925294),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"$mpos","$mpos",-731459501),new cljs.core.Keyword(null,"$last-click","$last-click",-783165994),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"select-cursor","select-cursor",-535622312),new cljs.core.Keyword(null,"$text","$text",-983499110),new cljs.core.Keyword(null,"mpos","mpos",-959907109),new cljs.core.Keyword(null,"last-click","last-click",1376836603),new cljs.core.Keyword(null,"$select-cursor","$select-cursor",-1212008772),new cljs.core.Keyword(null,"text","text",-1790561697)],[$extra_49242,$font_49240,$context_49243,focus_QMARK__49223,down_pos_49225,$focus_QMARK__49234,border_QMARK__49229,extra_49231,$border_QMARK__49241,$down_pos_49236,cursor_49222,$cursor_49233,font_49228,$mpos_49237,$last_click_49239,context_49232,select_cursor_49227,$text_49235,mpos_49226,last_click_49230,$select_cursor_49238,text_49224]);
})());
return membrane.ui.fill_bordered(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.97,0.97,0.97], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),textarea);
})()], 0));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Textarea_light = (function (text,font,focus,textarea_state,extra,context,__meta,__extmap,__hash){
this.text = text;
this.font = font;
this.focus = focus;
this.textarea_state = textarea_state;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Textarea_light.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49303,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49308 = k49303;
var G__49308__$1 = (((G__49308 instanceof cljs.core.Keyword))?G__49308.fqn:null);
switch (G__49308__$1) {
case "text":
return self__.text;

break;
case "font":
return self__.font;

break;
case "focus":
return self__.focus;

break;
case "textarea-state":
return self__.textarea_state;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49303,else__4383__auto__);

}
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49312){
var vec__49313 = p__49312;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49313,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49313,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Textarea-light{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font","font",-1506159249),self__.font],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"focus","focus",234677911),self__.focus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),self__.textarea_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49302){
var self__ = this;
var G__49302__$1 = this;
return (new cljs.core.RecordIter((0),G__49302__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Textarea_light(self__.text,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-949345880 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49304,other49305){
var self__ = this;
var this49304__$1 = this;
return (((!((other49305 == null)))) && ((this49304__$1.constructor === other49305.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49304__$1.text,other49305.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49304__$1.font,other49305.font)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49304__$1.focus,other49305.focus)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49304__$1.textarea_state,other49305.textarea_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49304__$1.extra,other49305.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49304__$1.context,other49305.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49304__$1.__extmap,other49305.__extmap)));
}));

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"focus","focus",234677911),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Textarea_light(self__.text,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49302){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49363 = cljs.core.keyword_identical_QMARK_;
var expr__49364 = k__4388__auto__;
if(cljs.core.truth_((pred__49363.cljs$core$IFn$_invoke$arity$2 ? pred__49363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),expr__49364) : pred__49363.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__49364)))){
return (new membrane.basic_components.Textarea_light(G__49302,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49363.cljs$core$IFn$_invoke$arity$2 ? pred__49363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font","font",-1506159249),expr__49364) : pred__49363.call(null,new cljs.core.Keyword(null,"font","font",-1506159249),expr__49364)))){
return (new membrane.basic_components.Textarea_light(self__.text,G__49302,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49363.cljs$core$IFn$_invoke$arity$2 ? pred__49363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"focus","focus",234677911),expr__49364) : pred__49363.call(null,new cljs.core.Keyword(null,"focus","focus",234677911),expr__49364)))){
return (new membrane.basic_components.Textarea_light(self__.text,self__.font,G__49302,self__.textarea_state,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49363.cljs$core$IFn$_invoke$arity$2 ? pred__49363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),expr__49364) : pred__49363.call(null,new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),expr__49364)))){
return (new membrane.basic_components.Textarea_light(self__.text,self__.font,self__.focus,G__49302,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49363.cljs$core$IFn$_invoke$arity$2 ? pred__49363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49364) : pred__49363.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49364)))){
return (new membrane.basic_components.Textarea_light(self__.text,self__.font,self__.focus,self__.textarea_state,G__49302,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49363.cljs$core$IFn$_invoke$arity$2 ? pred__49363.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__49364) : pred__49363.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__49364)))){
return (new membrane.basic_components.Textarea_light(self__.text,self__.font,self__.focus,self__.textarea_state,self__.extra,G__49302,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Textarea_light(self__.text,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49302),null));
}
}
}
}
}
}
}));

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"font","font",-1506159249),self__.font,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"focus","focus",234677911),self__.focus,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),self__.textarea_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49302){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Textarea_light(self__.text,self__.font,self__.focus,self__.textarea_state,self__.extra,self__.context,G__49302,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Textarea_light.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Textarea_light.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Textarea_light.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Textarea_light.cljs$lang$type = true);

(membrane.basic_components.Textarea_light.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Textarea-light",null,(1),null));
}));

(membrane.basic_components.Textarea_light.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Textarea-light");
}));

/**
 * Positional factory function for membrane.basic-components/Textarea-light.
 */
membrane.basic_components.__GT_Textarea_light = (function membrane$basic_components$__GT_Textarea_light(text,font,focus,textarea_state,extra,context){
return (new membrane.basic_components.Textarea_light(text,font,focus,textarea_state,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Textarea-light, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Textarea_light = (function membrane$basic_components$map__GT_Textarea_light(G__49306){
var extmap__4419__auto__ = (function (){var G__49397 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49306,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__49306)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49397);
} else {
return G__49397;
}
})();
return (new membrane.basic_components.Textarea_light(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__49306),new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(G__49306),new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(G__49306),new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500).cljs$core$IFn$_invoke$arity$1(G__49306),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__49306),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__49306),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.textarea_light;},new cljs.core.Symbol("membrane.basic-components","textarea-light","membrane.basic-components/textarea-light",1946936972,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"textarea-light","textarea-light",558107484,null),"membrane/basic_components.cljc",22,1,458,true,458,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.textarea_light)?membrane.basic_components.textarea_light.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Alternate look for textarea component."], null)], 0));
}));

membrane.basic_components.textarea_light_rerender_BANG_ = (function membrane$basic_components$textarea_light_rerender_BANG_(m__47722__auto__){
var elem_49221 = membrane.basic_components.map__GT_Textarea_light(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","textarea-light","membrane.basic-components/textarea-light",306405445),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_49221.text,elem_49221.font,elem_49221.focus,elem_49221.textarea_state,elem_49221.extra,elem_49221.context,new cljs.core.Keyword(null,"$text","$text",-983499110).cljs$core$IFn$_invoke$arity$1(elem_49221),new cljs.core.Keyword(null,"$font","$font",1745987399).cljs$core$IFn$_invoke$arity$1(elem_49221),new cljs.core.Keyword(null,"$focus","$focus",-580100351).cljs$core$IFn$_invoke$arity$1(elem_49221),new cljs.core.Keyword(null,"$textarea-state","$textarea-state",90211533).cljs$core$IFn$_invoke$arity$1(elem_49221),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_49221),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_49221)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.textarea_light_draw(elem_49221);
var elem_49221__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_49221,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_49221__$1);

return elem_49221__$1;
});

var ret__47724__auto___49914 = /**
 * Alternate look for textarea component.
 */
membrane.basic_components.textarea_light = (function membrane$basic_components$textarea_light(p__49419){
var map__49424 = p__49419;
var map__49424__$1 = (((((!((map__49424 == null))))?(((((map__49424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49424):map__49424);
var m_49214 = map__49424__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49424__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49424__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49424__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var textarea_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49424__$1,new cljs.core.Keyword(null,"textarea-state","textarea-state",1211998500));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49424__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49424__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","textarea-light","membrane.basic-components/textarea-light",306405445),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,font,focus,textarea_state,extra,context,new cljs.core.Keyword(null,"$text","$text",-983499110).cljs$core$IFn$_invoke$arity$1(m_49214),new cljs.core.Keyword(null,"$font","$font",1745987399).cljs$core$IFn$_invoke$arity$1(m_49214),new cljs.core.Keyword(null,"$focus","$focus",-580100351).cljs$core$IFn$_invoke$arity$1(m_49214),new cljs.core.Keyword(null,"$textarea-state","$textarea-state",90211533).cljs$core$IFn$_invoke$arity$1(m_49214),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_49214),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_49214)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.textarea_light_rerender_BANG_(m_49214);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","textarea-light","membrane.basic-components/textarea-light",1946936972,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Alternate look for textarea component."], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.textarea_light;},new cljs.core.Symbol("membrane.basic-components","textarea-light","membrane.basic-components/textarea-light",1946936972,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"textarea-light","textarea-light",558107484,null),"membrane/basic_components.cljc",22,1,458,458,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-49214","m-49214",-759683507,null)], null)], null)),"Alternate look for textarea component.",(cljs.core.truth_(membrane.basic_components.textarea_light)?membrane.basic_components.textarea_light.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"font","font",134372278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","contextual","membrane.component/contextual",1979757080),true], null)),new cljs.core.Symbol(null,"textarea-state","textarea-state",-1442437269,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Alternate look for textarea component."], null)], 0));
}));


membrane.basic_components.scrollview_draw = (function membrane$basic_components$scrollview_draw(p__49487){
var map__49488 = p__49487;
var map__49488__$1 = (((((!((map__49488 == null))))?(((((map__49488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49488):map__49488);
var m_49453 = map__49488__$1;
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49488__$1,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var mdownx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49488__$1,new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687));
var mdowny_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49488__$1,new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323));
var scroll_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49488__$1,new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49488__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49488__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49488__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_offset_49454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49453,new cljs.core.Keyword(null,"$offset","$offset",-1220243907),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"offset","offset",296498311),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
var fexpr__49491 = new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null);
return (fexpr__49491.cljs$core$IFn$_invoke$arity$1 ? fexpr__49491.cljs$core$IFn$_invoke$arity$1(G__49492) : fexpr__49491.call(null,G__49492));
})()], null)], null);
var arg_path_mdownx_QMARK__49455 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49453,new cljs.core.Keyword(null,"$mdownx?","$mdownx?",-27569259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687),null,(1),null)),(2),null))], null));
var arg_path_mdowny_QMARK__49456 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49453,new cljs.core.Keyword(null,"$mdowny?","$mdowny?",150362169),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323),null,(1),null)),(2),null))], null));
var arg_path_scroll_bounds_49457 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49453,new cljs.core.Keyword(null,"$scroll-bounds","$scroll-bounds",1384738567),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896),null,(1),null)),(2),null))], null));
var arg_path_body_49458 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49453,new cljs.core.Keyword(null,"$body","$body",-844213794),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"body","body",-2049205669),null,(1),null)),(2),null))], null));
var arg_path_extra_49459 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49453,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_49460 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49453,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
var offset_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(offset,(0));
var offset_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(offset,(1));
var vec__49493 = scroll_bounds;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49493,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49493,(1),null);
var scroll_button_size = (7);
var vec__49496 = membrane.ui.bounds(body);
var total_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49496,(0),null);
var total_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49496,(1),null);
var max_offset_x = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (total_width - width);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var max_offset_y = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (total_height - height);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var clampx = (function (old_offset){
var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = max_offset_x;
var y__4218__auto__ = old_offset;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
});
var clampy = (function (old_offset){
var x__4214__auto__ = (0);
var y__4215__auto__ = (function (){var x__4217__auto__ = max_offset_y;
var y__4218__auto__ = old_offset;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
});
var scroll_elem = membrane.ui.scrollview(scroll_bounds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- clampx(offset_x)),(- clampy(offset_y))], null),body);
var div0 = (function (a,b){
if((b === (0))){
return b;
} else {
return (a / b);
}
});
var on_mouse_move = (cljs.core.truth_(mdowny_QMARK_)?(function (body__$1){
return membrane.ui.on_mouse_move.cljs$core$IFn$_invoke$arity$variadic((function (p__49500){
var vec__49501 = p__49500;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49501,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49501,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_offset_49454,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null))], null)),clampy((div0(my,height) * max_offset_y))], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body__$1], 0));
}):(cljs.core.truth_(mdownx_QMARK_)?(function (body__$1){
return membrane.ui.on_mouse_move.cljs$core$IFn$_invoke$arity$variadic((function (p__49504){
var vec__49505 = p__49504;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49505,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49505,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_offset_49454,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)),clampx((div0(mx,width) * max_offset_x))], null)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body__$1], 0));
}):cljs.core.identity));
return membrane.basic_components.on_mouse_out((function (){var mouse_out_49462 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mdowny_QMARK__49456,cljs.core.PersistentVector.EMPTY),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mdownx_QMARK__49455,cljs.core.PersistentVector.EMPTY),null], null)], null);
});
var body_49463 = membrane.ui.wrap_on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"scroll","scroll",971553779),(function (handler,p__49508,pos){
var vec__49509 = p__49508;
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49509,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49509,(1),null);
var offset__$1 = vec__49509;
var intents = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(offset__$1,pos) : handler.call(null,offset__$1,pos));
if(cljs.core.seq(intents)){
return intents;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_offset_49454,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)),(function (old_offset){
return clampx((ox + offset_x));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_offset_49454,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null))], null)),(function (old_offset){
return clampy((oy + offset_y));
})], null)], null);
}
}),(function (){var G__49513 = membrane.ui.on_mouse_event.cljs$core$IFn$_invoke$arity$variadic((function (p__49514,button,mouse_down_QMARK_,mods){
var vec__49515 = p__49514;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49515,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49515,(1),null);
var mpos = vec__49515;
if(cljs.core.truth_(mouse_down_QMARK_)){
var new_mdownx_QMARK_ = (((my > height)) && ((total_width > width)));
var new_mdowny_QMARK_ = (((mx > width)) && ((total_height > height)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mdownx_QMARK__49455,cljs.core.PersistentVector.EMPTY),new_mdownx_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mdowny_QMARK__49456,cljs.core.PersistentVector.EMPTY),new_mdowny_QMARK_], null)], null),((new_mdowny_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_offset_49454,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),(new cljs.core.List(null,(1),null,(1),null)),(2),null))], null)),clampy((div0(my,height) * max_offset_y))], null)], null):((new_mdownx_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_offset_49454,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"nth","nth",1529209554,null),(new cljs.core.List(null,(0),null,(1),null)),(2),null))], null)),clampx((div0(mx,width) * max_offset_x))], null)], null):membrane.ui.mouse_event(scroll_elem,mpos,button,mouse_down_QMARK_,mods))));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mdownx_QMARK__49455,cljs.core.PersistentVector.EMPTY),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mdowny_QMARK__49456,cljs.core.PersistentVector.EMPTY),false], null)], null),membrane.ui.mouse_event(scroll_elem,mpos,button,mouse_down_QMARK_,mods));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scroll_elem,(((total_height > height))?membrane.ui.translate(width,(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.filled_rectangle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),scroll_button_size,height),(function (){var top = (offset_y / total_height);
var bottom = ((offset_y + height) / total_height);
return membrane.ui.translate((0),(height * top),membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle(scroll_button_size,(height * (bottom - top)),(scroll_button_size / (2)))], 0)));
})(),membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rectangle(scroll_button_size,height)], 0))], 0))], null)):null),(((total_width > width))?membrane.ui.translate((0),height,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.filled_rectangle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),width,scroll_button_size),(function (){var left = (offset_x / total_width);
var right = ((offset_x + width) / total_width);
return membrane.ui.translate((width * left),(0),membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle((width * (right - left)),scroll_button_size,(scroll_button_size / (2)))], 0)));
})(),membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rectangle(width,scroll_button_size)], 0))], 0))], null)):null)], null)], 0));
return (on_mouse_move.cljs$core$IFn$_invoke$arity$1 ? on_mouse_move.cljs$core$IFn$_invoke$arity$1(G__49513) : on_mouse_move.call(null,G__49513));
})()], 0));
var hover_49464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mdown","mdown",-1904773539),new cljs.core.Keyword(null,"hover","hover",-341141711)], null));
var hover_QMARK__49465 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49459,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mdown","mdown",-1904773539),new cljs.core.Keyword(null,"hover","hover",-341141711)], null),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null)], null))),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("ui","wrap-on","ui/wrap-on",1711783639,null),new cljs.core.Keyword(null,"scroll","scroll",971553779),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"intents","intents",638023819,null),cljs.core.list(new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"pos","pos",775924307,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"intents","intents",638023819,null)),new cljs.core.Symbol(null,"intents","intents",638023819,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null)))))], null)], null))))),cljs.core.list(new cljs.core.Symbol(null,"on-mouse-move","on-mouse-move",254210653,null),cljs.core.list(new cljs.core.Symbol("ui","on-mouse-event","ui/on-mouse-event",712297089,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"mpos","mpos",680624418,null)], null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null))),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"my","my",584828258,null)),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"max-offset-y","max-offset-y",1437607632,null)))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null)),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"max-offset-x","max-offset-x",-1517427638,null)))], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"width","width",1256460050,null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"top","top",-215740434,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null)),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"top","top",-215740434,null)),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.Symbol(null,"top","top",-215740434,null))),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null))))], null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null)),new cljs.core.Symbol(null,"right","right",1187949694,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"left","left",1241415590,null)),(0),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"left","left",1241415590,null))),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null))))], null)))], null)))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$hover?","$hover?",857633438)], null),null);
var extra_49466 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49459,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mdown","mdown",-1904773539),new cljs.core.Keyword(null,"hover","hover",-341141711)], null),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null)], null))),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("ui","wrap-on","ui/wrap-on",1711783639,null),new cljs.core.Keyword(null,"scroll","scroll",971553779),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"intents","intents",638023819,null),cljs.core.list(new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"pos","pos",775924307,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"intents","intents",638023819,null)),new cljs.core.Symbol(null,"intents","intents",638023819,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null)))))], null)], null))))),cljs.core.list(new cljs.core.Symbol(null,"on-mouse-move","on-mouse-move",254210653,null),cljs.core.list(new cljs.core.Symbol("ui","on-mouse-event","ui/on-mouse-event",712297089,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"mpos","mpos",680624418,null)], null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null))),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"my","my",584828258,null)),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"max-offset-y","max-offset-y",1437607632,null)))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null)),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"max-offset-x","max-offset-x",-1517427638,null)))], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"width","width",1256460050,null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"top","top",-215740434,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null)),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"top","top",-215740434,null)),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.Symbol(null,"top","top",-215740434,null))),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null))))], null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null)),new cljs.core.Symbol(null,"right","right",1187949694,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"left","left",1241415590,null)),(0),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"left","left",1241415590,null))),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null))))], null)))], null)))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_49467 = context;
var $mouse_out_49468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null)], null))),null,(1),null)),(2),null))], null);
var $body_49469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("ui","wrap-on","ui/wrap-on",1711783639,null),new cljs.core.Keyword(null,"scroll","scroll",971553779),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"intents","intents",638023819,null),cljs.core.list(new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"pos","pos",775924307,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"intents","intents",638023819,null)),new cljs.core.Symbol(null,"intents","intents",638023819,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null)))))], null)], null))))),cljs.core.list(new cljs.core.Symbol(null,"on-mouse-move","on-mouse-move",254210653,null),cljs.core.list(new cljs.core.Symbol("ui","on-mouse-event","ui/on-mouse-event",712297089,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"mpos","mpos",680624418,null)], null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null))),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"my","my",584828258,null)),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"max-offset-y","max-offset-y",1437607632,null)))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null)),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"max-offset-x","max-offset-x",-1517427638,null)))], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"width","width",1256460050,null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"top","top",-215740434,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null)),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"top","top",-215740434,null)),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.Symbol(null,"top","top",-215740434,null))),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null))))], null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null)),new cljs.core.Symbol(null,"right","right",1187949694,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"left","left",1241415590,null)),(0),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"left","left",1241415590,null))),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null))))], null)))], null)))),null,(1),null)),(2),null))], null);
var $hover_QMARK__49470 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49459,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49459,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mdown","mdown",-1904773539),new cljs.core.Keyword(null,"hover","hover",-341141711)], null),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null)], null))),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("ui","wrap-on","ui/wrap-on",1711783639,null),new cljs.core.Keyword(null,"scroll","scroll",971553779),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"intents","intents",638023819,null),cljs.core.list(new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"pos","pos",775924307,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"intents","intents",638023819,null)),new cljs.core.Symbol(null,"intents","intents",638023819,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null)))))], null)], null))))),cljs.core.list(new cljs.core.Symbol(null,"on-mouse-move","on-mouse-move",254210653,null),cljs.core.list(new cljs.core.Symbol("ui","on-mouse-event","ui/on-mouse-event",712297089,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"mpos","mpos",680624418,null)], null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null))),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"my","my",584828258,null)),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"max-offset-y","max-offset-y",1437607632,null)))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null)),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"max-offset-x","max-offset-x",-1517427638,null)))], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"width","width",1256460050,null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"top","top",-215740434,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null)),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"top","top",-215740434,null)),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.Symbol(null,"top","top",-215740434,null))),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null))))], null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null)),new cljs.core.Symbol(null,"right","right",1187949694,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"left","left",1241415590,null)),(0),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"left","left",1241415590,null))),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null))))], null)))], null)))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$hover?","$hover?",857633438)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $extra_49471 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49459,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49459,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mdown","mdown",-1904773539),new cljs.core.Keyword(null,"hover","hover",-341141711)], null),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),null], null)], null))),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol("ui","wrap-on","ui/wrap-on",1711783639,null),new cljs.core.Keyword(null,"scroll","scroll",971553779),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"intents","intents",638023819,null),cljs.core.list(new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"pos","pos",775924307,null))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"intents","intents",638023819,null)),new cljs.core.Symbol(null,"intents","intents",638023819,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"ox","ox",-2083100366,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-offset","old-offset",213580510,null)], null),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"oy","oy",809196068,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null)))))], null)], null))))),cljs.core.list(new cljs.core.Symbol(null,"on-mouse-move","on-mouse-move",254210653,null),cljs.core.list(new cljs.core.Symbol("ui","on-mouse-event","ui/on-mouse-event",712297089,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"mpos","mpos",680624418,null)], null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"my","my",584828258,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null))),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdowny?","new-mdowny?",-1999208622,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(1))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampy","clampy",-2128738720,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"my","my",584828258,null)),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"max-offset-y","max-offset-y",1437607632,null)))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new-mdownx?","new-mdownx?",-28342583,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-offset-49454","arg-path-offset-49454",323912010,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null)),(0))], null)),cljs.core.list(new cljs.core.Symbol(null,"clampx","clampx",-928344011,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.list(new cljs.core.Symbol(null,"div0","div0",-495123080,null),cljs.core.list(new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"mx","mx",1440644507,null)),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"max-offset-x","max-offset-x",-1517427638,null)))], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdownx?-49455","arg-path-mdownx?-49455",2146257846,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-mdowny?-49456","arg-path-mdowny?-49456",-2005281765,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),false], null)], null),cljs.core.list(new cljs.core.Symbol("ui","mouse-event","ui/mouse-event",1829601936,null),new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),new cljs.core.Symbol(null,"mpos","mpos",680624418,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"mouse-down?","mouse-down?",-1904406783,null),new cljs.core.Symbol(null,"mods","mods",98703691,null)))))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scroll-elem","scroll-elem",-1265803513,null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"width","width",1256460050,null),(0),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"top","top",-215740434,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null)),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-y","offset-y",-577591761,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)),new cljs.core.Symbol(null,"total-height","total-height",-902925246,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"top","top",-215740434,null)),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.Symbol(null,"top","top",-215740434,null))),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),new cljs.core.Symbol(null,"height","height",-1629257147,null))))], null))),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),(0),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"filled-rectangle","filled-rectangle",-1640749499,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.941,0.941,0.941], null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null)),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null)),new cljs.core.Symbol(null,"right","right",1187949694,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"offset-x","offset-x",-1617969539,null),new cljs.core.Symbol(null,"width","width",1256460050,null)),new cljs.core.Symbol(null,"total-width","total-width",-940923831,null))], null),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"left","left",1241415590,null)),(0),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.73,0.73,0.73], null),cljs.core.list(new cljs.core.Symbol("ui","rounded-rectangle","ui/rounded-rectangle",-957981606,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"width","width",1256460050,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"left","left",1241415590,null))),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null),(2)))))),cljs.core.list(new cljs.core.Symbol(null,"with-color","with-color",-8255336,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.89,0.89,0.89], null),cljs.core.list(new cljs.core.Symbol(null,"with-style","with-style",-962688070,null),new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.list(new cljs.core.Symbol(null,"rectangle","rectangle",1933694789,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"scroll-button-size","scroll-button-size",1141620252,null))))], null)))], null)))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_49472 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_49460,cljs.core.PersistentVector.EMPTY);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"$mouse-out","$mouse-out",1220878117),new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"mouse-out","mouse-out",-1086438964),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"$body","$body",-844213794),new cljs.core.Keyword(null,"$hover?","$hover?",857633438),new cljs.core.Keyword(null,"hover?","hover?",-1201331489)],[$mouse_out_49468,$extra_49471,$context_49472,extra_49466,mouse_out_49462,hover_49464,context_49467,body_49463,$body_49469,$hover_QMARK__49470,hover_QMARK__49465]);
})());
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Scrollview = (function (offset,mdownx_QMARK_,mdowny_QMARK_,scroll_bounds,body,extra,context,__meta,__extmap,__hash){
this.offset = offset;
this.mdownx_QMARK_ = mdownx_QMARK_;
this.mdowny_QMARK_ = mdowny_QMARK_;
this.scroll_bounds = scroll_bounds;
this.body = body;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Scrollview.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49588,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49592 = k49588;
var G__49592__$1 = (((G__49592 instanceof cljs.core.Keyword))?G__49592.fqn:null);
switch (G__49592__$1) {
case "offset":
return self__.offset;

break;
case "mdownx?":
return self__.mdownx_QMARK_;

break;
case "mdowny?":
return self__.mdowny_QMARK_;

break;
case "scroll-bounds":
return self__.scroll_bounds;

break;
case "body":
return self__.body;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49588,else__4383__auto__);

}
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49594){
var vec__49595 = p__49594;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49595,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49595,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Scrollview{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687),self__.mdownx_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323),self__.mdowny_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896),self__.scroll_bounds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49587){
var self__ = this;
var G__49587__$1 = this;
return (new cljs.core.RecordIter((0),G__49587__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687),new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323),new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Scrollview(self__.offset,self__.mdownx_QMARK_,self__.mdowny_QMARK_,self__.scroll_bounds,self__.body,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1428883365 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Scrollview.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Scrollview.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49589,other49590){
var self__ = this;
var this49589__$1 = this;
return (((!((other49590 == null)))) && ((this49589__$1.constructor === other49590.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49589__$1.offset,other49590.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49589__$1.mdownx_QMARK_,other49590.mdownx_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49589__$1.mdowny_QMARK_,other49590.mdowny_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49589__$1.scroll_bounds,other49590.scroll_bounds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49589__$1.body,other49590.body)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49589__$1.extra,other49590.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49589__$1.context,other49590.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49589__$1.__extmap,other49590.__extmap)));
}));

(membrane.basic_components.Scrollview.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Scrollview.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Scrollview.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Scrollview.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Scrollview.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Scrollview.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Scrollview.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Scrollview.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323),null,new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Scrollview(self__.offset,self__.mdownx_QMARK_,self__.mdowny_QMARK_,self__.scroll_bounds,self__.body,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49587){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49598 = cljs.core.keyword_identical_QMARK_;
var expr__49599 = k__4388__auto__;
if(cljs.core.truth_((pred__49598.cljs$core$IFn$_invoke$arity$2 ? pred__49598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__49599) : pred__49598.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__49599)))){
return (new membrane.basic_components.Scrollview(G__49587,self__.mdownx_QMARK_,self__.mdowny_QMARK_,self__.scroll_bounds,self__.body,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49598.cljs$core$IFn$_invoke$arity$2 ? pred__49598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687),expr__49599) : pred__49598.call(null,new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687),expr__49599)))){
return (new membrane.basic_components.Scrollview(self__.offset,G__49587,self__.mdowny_QMARK_,self__.scroll_bounds,self__.body,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49598.cljs$core$IFn$_invoke$arity$2 ? pred__49598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323),expr__49599) : pred__49598.call(null,new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323),expr__49599)))){
return (new membrane.basic_components.Scrollview(self__.offset,self__.mdownx_QMARK_,G__49587,self__.scroll_bounds,self__.body,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49598.cljs$core$IFn$_invoke$arity$2 ? pred__49598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896),expr__49599) : pred__49598.call(null,new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896),expr__49599)))){
return (new membrane.basic_components.Scrollview(self__.offset,self__.mdownx_QMARK_,self__.mdowny_QMARK_,G__49587,self__.body,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49598.cljs$core$IFn$_invoke$arity$2 ? pred__49598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__49599) : pred__49598.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__49599)))){
return (new membrane.basic_components.Scrollview(self__.offset,self__.mdownx_QMARK_,self__.mdowny_QMARK_,self__.scroll_bounds,G__49587,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49598.cljs$core$IFn$_invoke$arity$2 ? pred__49598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49599) : pred__49598.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49599)))){
return (new membrane.basic_components.Scrollview(self__.offset,self__.mdownx_QMARK_,self__.mdowny_QMARK_,self__.scroll_bounds,self__.body,G__49587,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49598.cljs$core$IFn$_invoke$arity$2 ? pred__49598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__49599) : pred__49598.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__49599)))){
return (new membrane.basic_components.Scrollview(self__.offset,self__.mdownx_QMARK_,self__.mdowny_QMARK_,self__.scroll_bounds,self__.body,self__.extra,G__49587,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Scrollview(self__.offset,self__.mdownx_QMARK_,self__.mdowny_QMARK_,self__.scroll_bounds,self__.body,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49587),null));
}
}
}
}
}
}
}
}));

(membrane.basic_components.Scrollview.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Scrollview.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687),self__.mdownx_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323),self__.mdowny_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896),self__.scroll_bounds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Scrollview.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Scrollview.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49587){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Scrollview(self__.offset,self__.mdownx_QMARK_,self__.mdowny_QMARK_,self__.scroll_bounds,self__.body,self__.extra,self__.context,G__49587,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Scrollview.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Scrollview.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Scrollview.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Scrollview.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Scrollview.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Scrollview.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"mdownx?","mdownx?",-1644028082,null),new cljs.core.Symbol(null,"mdowny?","mdowny?",1331312204,null),new cljs.core.Symbol(null,"scroll-bounds","scroll-bounds",-1276427873,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Scrollview.cljs$lang$type = true);

(membrane.basic_components.Scrollview.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Scrollview",null,(1),null));
}));

(membrane.basic_components.Scrollview.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Scrollview");
}));

/**
 * Positional factory function for membrane.basic-components/Scrollview.
 */
membrane.basic_components.__GT_Scrollview = (function membrane$basic_components$__GT_Scrollview(offset,mdownx_QMARK_,mdowny_QMARK_,scroll_bounds,body,extra,context){
return (new membrane.basic_components.Scrollview(offset,mdownx_QMARK_,mdowny_QMARK_,scroll_bounds,body,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Scrollview, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Scrollview = (function membrane$basic_components$map__GT_Scrollview(G__49591){
var extmap__4419__auto__ = (function (){var G__49602 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49591,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687),new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323),new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__49591)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49602);
} else {
return G__49602;
}
})();
return (new membrane.basic_components.Scrollview(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__49591),new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687).cljs$core$IFn$_invoke$arity$1(G__49591),new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323).cljs$core$IFn$_invoke$arity$1(G__49591),new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896).cljs$core$IFn$_invoke$arity$1(G__49591),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__49591),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__49591),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__49591),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.scrollview;},new cljs.core.Symbol("membrane.basic-components","scrollview","membrane.basic-components/scrollview",-133702188,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"scrollview","scrollview",-2049203804,null),"membrane/basic_components.cljc",18,1,483,true,483,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.scrollview)?membrane.basic_components.scrollview.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"mdownx?","mdownx?",-1644028082,null),new cljs.core.Symbol(null,"mdowny?","mdowny?",1331312204,null),new cljs.core.Symbol(null,"scroll-bounds","scroll-bounds",-1276427873,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Basic scrollview.\n\n  scroll-bounds should be a two element vector of [width height] of the scrollview\n  body should be an element.\n"], null)], 0));
}));

membrane.basic_components.scrollview_rerender_BANG_ = (function membrane$basic_components$scrollview_rerender_BANG_(m__47722__auto__){
var elem_49461 = membrane.basic_components.map__GT_Scrollview(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","scrollview","membrane.basic-components/scrollview",-1774233715),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_49461.offset,elem_49461.mdownx_QMARK_,elem_49461.mdowny_QMARK_,elem_49461.scroll_bounds,elem_49461.body,elem_49461.extra,elem_49461.context,new cljs.core.Keyword(null,"$offset","$offset",-1220243907).cljs$core$IFn$_invoke$arity$1(elem_49461),new cljs.core.Keyword(null,"$mdownx?","$mdownx?",-27569259).cljs$core$IFn$_invoke$arity$1(elem_49461),new cljs.core.Keyword(null,"$mdowny?","$mdowny?",150362169).cljs$core$IFn$_invoke$arity$1(elem_49461),new cljs.core.Keyword(null,"$scroll-bounds","$scroll-bounds",1384738567).cljs$core$IFn$_invoke$arity$1(elem_49461),new cljs.core.Keyword(null,"$body","$body",-844213794).cljs$core$IFn$_invoke$arity$1(elem_49461),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_49461),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_49461)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.scrollview_draw(elem_49461);
var elem_49461__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_49461,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_49461__$1);

return elem_49461__$1;
});

var ret__47724__auto___49916 = /**
 * Basic scrollview.
 * 
 *   scroll-bounds should be a two element vector of [width height] of the scrollview
 *   body should be an element.
 */
membrane.basic_components.scrollview = (function membrane$basic_components$scrollview(p__49603){
var map__49604 = p__49603;
var map__49604__$1 = (((((!((map__49604 == null))))?(((((map__49604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49604):map__49604);
var m_49453 = map__49604__$1;
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49604__$1,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var mdownx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687));
var mdowny_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323));
var scroll_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49604__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","scrollview","membrane.basic-components/scrollview",-1774233715),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset,mdownx_QMARK_,mdowny_QMARK_,scroll_bounds,body,extra,context,new cljs.core.Keyword(null,"$offset","$offset",-1220243907).cljs$core$IFn$_invoke$arity$1(m_49453),new cljs.core.Keyword(null,"$mdownx?","$mdownx?",-27569259).cljs$core$IFn$_invoke$arity$1(m_49453),new cljs.core.Keyword(null,"$mdowny?","$mdowny?",150362169).cljs$core$IFn$_invoke$arity$1(m_49453),new cljs.core.Keyword(null,"$scroll-bounds","$scroll-bounds",1384738567).cljs$core$IFn$_invoke$arity$1(m_49453),new cljs.core.Keyword(null,"$body","$body",-844213794).cljs$core$IFn$_invoke$arity$1(m_49453),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_49453),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_49453)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.scrollview_rerender_BANG_(m_49453);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","scrollview","membrane.basic-components/scrollview",-133702188,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"mdownx?","mdownx?",-1644028082,null),new cljs.core.Symbol(null,"mdowny?","mdowny?",1331312204,null),new cljs.core.Symbol(null,"scroll-bounds","scroll-bounds",-1276427873,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Basic scrollview.\n\n  scroll-bounds should be a two element vector of [width height] of the scrollview\n  body should be an element.\n"], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.scrollview;},new cljs.core.Symbol("membrane.basic-components","scrollview","membrane.basic-components/scrollview",-133702188,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"scrollview","scrollview",-2049203804,null),"membrane/basic_components.cljc",18,1,483,483,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"mdownx?","mdownx?",-1644028082,null),new cljs.core.Symbol(null,"mdowny?","mdowny?",1331312204,null),new cljs.core.Symbol(null,"scroll-bounds","scroll-bounds",-1276427873,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-49453","m-49453",451637986,null)], null)], null)),"Basic scrollview.\n\n  scroll-bounds should be a two element vector of [width height] of the scrollview\n  body should be an element.\n",(cljs.core.truth_(membrane.basic_components.scrollview)?membrane.basic_components.scrollview.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"mdownx?","mdownx?",-1644028082,null),new cljs.core.Symbol(null,"mdowny?","mdowny?",1331312204,null),new cljs.core.Symbol(null,"scroll-bounds","scroll-bounds",-1276427873,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Basic scrollview.\n\n  scroll-bounds should be a two element vector of [width height] of the scrollview\n  body should be an element.\n"], null)], 0));
}));


membrane.basic_components.test_scrollview_draw = (function membrane$basic_components$test_scrollview_draw(p__49627){
var map__49628 = p__49627;
var map__49628__$1 = (((((!((map__49628 == null))))?(((((map__49628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49628):map__49628);
var m_49607 = map__49628__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49628__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_state_49608 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49607,new cljs.core.Keyword(null,"$state","$state",-1324110787),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"state","state",-1988618099),null,(1),null)),(2),null))], null));
var arg_path_extra_49609 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49607,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_49610 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49607,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
return membrane.basic_components.scrollview((function (){var scroll_bounds_49612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
var body_49613 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(membrane.ui.vertical_layout,(function (){var iter__4529__auto__ = (function membrane$basic_components$test_scrollview_draw_$_iter__49630(s__49631){
return (new cljs.core.LazySeq(null,(function (){
var s__49631__$1 = s__49631;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49631__$1);
if(temp__5753__auto__){
var s__49631__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49631__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49631__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49633 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49632 = (0);
while(true){
if((i__49632 < size__4528__auto__)){
var vec__49634 = cljs.core._nth(c__4527__auto__,i__49632);
var index_49626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49634,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49634,(1),null);
cljs.core.chunk_append(b__49633,membrane.ui.label.cljs$core$IFn$_invoke$arity$1(["The quick brown fox"," jumped over the lazy dog"].join('')));

var G__49917 = (i__49632 + (1));
i__49632 = G__49917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49633),membrane$basic_components$test_scrollview_draw_$_iter__49630(cljs.core.chunk_rest(s__49631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49633),null);
}
} else {
var vec__49637 = cljs.core.first(s__49631__$2);
var index_49626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49637,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49637,(1),null);
return cljs.core.cons(membrane.ui.label.cljs$core$IFn$_invoke$arity$1(["The quick brown fox"," jumped over the lazy dog"].join('')),membrane$basic_components$test_scrollview_draw_$_iter__49630(cljs.core.rest(s__49631__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1((100))));
})());
var offset_49614 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"vertical-layout","vertical-layout",1167072627,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-49626","index-49626",-10940890,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","map-indexed","clojure.core/map-indexed",2063223052,null),new cljs.core.Symbol("clojure.core","vector","clojure.core/vector",555091820,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(100)))], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"The quick brown fox"," jumped over the lazy dog")))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$offset","$offset",-1220243907)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var mdownx_QMARK__49615 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"vertical-layout","vertical-layout",1167072627,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-49626","index-49626",-10940890,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","map-indexed","clojure.core/map-indexed",2063223052,null),new cljs.core.Symbol("clojure.core","vector","clojure.core/vector",555091820,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(100)))], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"The quick brown fox"," jumped over the lazy dog")))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$mdownx?","$mdownx?",-27569259)], null),null);
var mdowny_QMARK__49616 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"vertical-layout","vertical-layout",1167072627,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-49626","index-49626",-10940890,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","map-indexed","clojure.core/map-indexed",2063223052,null),new cljs.core.Symbol("clojure.core","vector","clojure.core/vector",555091820,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(100)))], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"The quick brown fox"," jumped over the lazy dog")))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$mdowny?","$mdowny?",150362169)], null),null);
var extra_49617 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"vertical-layout","vertical-layout",1167072627,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-49626","index-49626",-10940890,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","map-indexed","clojure.core/map-indexed",2063223052,null),new cljs.core.Symbol("clojure.core","vector","clojure.core/vector",555091820,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(100)))], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"The quick brown fox"," jumped over the lazy dog")))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_49618 = context;
var $offset_49619 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49609,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"vertical-layout","vertical-layout",1167072627,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-49626","index-49626",-10940890,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","map-indexed","clojure.core/map-indexed",2063223052,null),new cljs.core.Symbol("clojure.core","vector","clojure.core/vector",555091820,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(100)))], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"The quick brown fox"," jumped over the lazy dog")))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$offset","$offset",-1220243907)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),null,(1),null)),(2),null))], null)], null));
var $mdownx_QMARK__49620 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49609,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"vertical-layout","vertical-layout",1167072627,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-49626","index-49626",-10940890,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","map-indexed","clojure.core/map-indexed",2063223052,null),new cljs.core.Symbol("clojure.core","vector","clojure.core/vector",555091820,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(100)))], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"The quick brown fox"," jumped over the lazy dog")))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$mdownx?","$mdownx?",-27569259)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $mdowny_QMARK__49621 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49609,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"vertical-layout","vertical-layout",1167072627,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-49626","index-49626",-10940890,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","map-indexed","clojure.core/map-indexed",2063223052,null),new cljs.core.Symbol("clojure.core","vector","clojure.core/vector",555091820,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(100)))], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"The quick brown fox"," jumped over the lazy dog")))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$mdowny?","$mdowny?",150362169)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $scroll_bounds_49622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),null,(1),null)),(2),null))], null);
var $body_49623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"vertical-layout","vertical-layout",1167072627,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-49626","index-49626",-10940890,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","map-indexed","clojure.core/map-indexed",2063223052,null),new cljs.core.Symbol("clojure.core","vector","clojure.core/vector",555091820,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(100)))], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"The quick brown fox"," jumped over the lazy dog")))),null,(1),null)),(2),null))], null);
var $extra_49624 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49609,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"vertical-layout","vertical-layout",1167072627,null),cljs.core.list(new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-49626","index-49626",-10940890,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","map-indexed","clojure.core/map-indexed",2063223052,null),new cljs.core.Symbol("clojure.core","vector","clojure.core/vector",555091820,null),cljs.core.list(new cljs.core.Symbol(null,"range","range",-1014743483,null),(100)))], null),cljs.core.list(new cljs.core.Symbol(null,"label","label",-936024965,null),cljs.core.list(new cljs.core.Symbol(null,"str","str",-1564826950,null),"The quick brown fox"," jumped over the lazy dog")))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_49625 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_49610,cljs.core.PersistentVector.EMPTY);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mdowny?","mdowny?",-309219323),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"mdownx?","mdownx?",1010407687),new cljs.core.Keyword(null,"$scroll-bounds","$scroll-bounds",1384738567),new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"$mdownx?","$mdownx?",-27569259),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"scroll-bounds","scroll-bounds",1378007896),new cljs.core.Keyword(null,"$mdowny?","$mdowny?",150362169),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"$offset","$offset",-1220243907),new cljs.core.Keyword(null,"$body","$body",-844213794)],[mdowny_QMARK__49616,offset_49614,mdownx_QMARK__49615,$scroll_bounds_49622,$extra_49624,$context_49625,extra_49617,$mdownx_QMARK__49620,context_49618,scroll_bounds_49612,$mdowny_QMARK__49621,body_49613,$offset_49619,$body_49623]);
})());
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Test_scrollview = (function (state,extra,context,__meta,__extmap,__hash){
this.state = state;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Test_scrollview.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49642,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49646 = k49642;
var G__49646__$1 = (((G__49646 instanceof cljs.core.Keyword))?G__49646.fqn:null);
switch (G__49646__$1) {
case "state":
return self__.state;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49642,else__4383__auto__);

}
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49647){
var vec__49648 = p__49647;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49648,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49648,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Test-scrollview{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49641){
var self__ = this;
var G__49641__$1 = this;
return (new cljs.core.RecordIter((0),G__49641__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Test_scrollview(self__.state,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-176193508 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49643,other49644){
var self__ = this;
var this49643__$1 = this;
return (((!((other49644 == null)))) && ((this49643__$1.constructor === other49644.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49643__$1.state,other49644.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49643__$1.extra,other49644.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49643__$1.context,other49644.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49643__$1.__extmap,other49644.__extmap)));
}));

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Test_scrollview(self__.state,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49641){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49652 = cljs.core.keyword_identical_QMARK_;
var expr__49653 = k__4388__auto__;
if(cljs.core.truth_((pred__49652.cljs$core$IFn$_invoke$arity$2 ? pred__49652.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__49653) : pred__49652.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__49653)))){
return (new membrane.basic_components.Test_scrollview(G__49641,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49652.cljs$core$IFn$_invoke$arity$2 ? pred__49652.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49653) : pred__49652.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49653)))){
return (new membrane.basic_components.Test_scrollview(self__.state,G__49641,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49652.cljs$core$IFn$_invoke$arity$2 ? pred__49652.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__49653) : pred__49652.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__49653)))){
return (new membrane.basic_components.Test_scrollview(self__.state,self__.extra,G__49641,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Test_scrollview(self__.state,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49641),null));
}
}
}
}));

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49641){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Test_scrollview(self__.state,self__.extra,self__.context,G__49641,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Test_scrollview.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Test_scrollview.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Test_scrollview.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Test_scrollview.cljs$lang$type = true);

(membrane.basic_components.Test_scrollview.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Test-scrollview",null,(1),null));
}));

(membrane.basic_components.Test_scrollview.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Test-scrollview");
}));

/**
 * Positional factory function for membrane.basic-components/Test-scrollview.
 */
membrane.basic_components.__GT_Test_scrollview = (function membrane$basic_components$__GT_Test_scrollview(state,extra,context){
return (new membrane.basic_components.Test_scrollview(state,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Test-scrollview, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Test_scrollview = (function membrane$basic_components$map__GT_Test_scrollview(G__49645){
var extmap__4419__auto__ = (function (){var G__49655 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49645,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__49645)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49655);
} else {
return G__49655;
}
})();
return (new membrane.basic_components.Test_scrollview(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__49645),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__49645),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__49645),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.test_scrollview;},new cljs.core.Symbol("membrane.basic-components","test-scrollview","membrane.basic-components/test-scrollview",1767702817,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"test-scrollview","test-scrollview",-630631087,null),"membrane/basic_components.cljc",23,1,617,true,617,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.test_scrollview)?membrane.basic_components.test_scrollview.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));

membrane.basic_components.test_scrollview_rerender_BANG_ = (function membrane$basic_components$test_scrollview_rerender_BANG_(m__47722__auto__){
var elem_49611 = membrane.basic_components.map__GT_Test_scrollview(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","test-scrollview","membrane.basic-components/test-scrollview",127171290),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_49611.state,elem_49611.extra,elem_49611.context,new cljs.core.Keyword(null,"$state","$state",-1324110787).cljs$core$IFn$_invoke$arity$1(elem_49611),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_49611),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_49611)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.test_scrollview_draw(elem_49611);
var elem_49611__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_49611,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_49611__$1);

return elem_49611__$1;
});

var ret__47724__auto___49919 = membrane.basic_components.test_scrollview = (function membrane$basic_components$test_scrollview(p__49656){
var map__49657 = p__49656;
var map__49657__$1 = (((((!((map__49657 == null))))?(((((map__49657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49657):map__49657);
var m_49607 = map__49657__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49657__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49657__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49657__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","test-scrollview","membrane.basic-components/test-scrollview",127171290),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,extra,context,new cljs.core.Keyword(null,"$state","$state",-1324110787).cljs$core$IFn$_invoke$arity$1(m_49607),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_49607),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_49607)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.test_scrollview_rerender_BANG_(m_49607);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","test-scrollview","membrane.basic-components/test-scrollview",1767702817,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.test_scrollview;},new cljs.core.Symbol("membrane.basic-components","test-scrollview","membrane.basic-components/test-scrollview",1767702817,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"test-scrollview","test-scrollview",-630631087,null),"membrane/basic_components.cljc",23,1,617,617,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-49607","m-49607",-1532656857,null)], null)], null)),null,(cljs.core.truth_(membrane.basic_components.test_scrollview)?membrane.basic_components.test_scrollview.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));

var var__47838__auto___49920 = membrane.basic_components.effect_toggle = (function membrane$basic_components$effect_toggle(dispatch_BANG_,$bool){
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update","update",1045576396),$bool,cljs.core.not) : dispatch_BANG_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),$bool,cljs.core.not));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","toggle","membrane.basic-components/toggle",-1607196770),membrane.basic_components.effect_toggle);


membrane.basic_components.checkbox_draw = (function membrane$basic_components$checkbox_draw(p__49664){
var map__49665 = p__49664;
var map__49665__$1 = (((((!((map__49665 == null))))?(((((map__49665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49665):map__49665);
var m_49659 = map__49665__$1;
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49665__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49665__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49665__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_checked_QMARK__49660 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49659,new cljs.core.Keyword(null,"$checked?","$checked?",-905876537),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),null,(1),null)),(2),null))], null));
var arg_path_extra_49661 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49659,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_49662 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49659,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
return membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","toggle","membrane.basic-components/toggle",-1607196770),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_checked_QMARK__49660,cljs.core.PersistentVector.EMPTY)], null)], null);
}),membrane.ui.checkbox(checked_QMARK_)], 0));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Checkbox = (function (checked_QMARK_,extra,context,__meta,__extmap,__hash){
this.checked_QMARK_ = checked_QMARK_;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Checkbox.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49668,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49672 = k49668;
var G__49672__$1 = (((G__49672 instanceof cljs.core.Keyword))?G__49672.fqn:null);
switch (G__49672__$1) {
case "checked?":
return self__.checked_QMARK_;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49668,else__4383__auto__);

}
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49673){
var vec__49674 = p__49673;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49674,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49674,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Checkbox{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checked?","checked?",2024809091),self__.checked_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49667){
var self__ = this;
var G__49667__$1 = this;
return (new cljs.core.RecordIter((0),G__49667__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked?","checked?",2024809091),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Checkbox(self__.checked_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-192247140 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Checkbox.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Checkbox.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49669,other49670){
var self__ = this;
var this49669__$1 = this;
return (((!((other49670 == null)))) && ((this49669__$1.constructor === other49670.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49669__$1.checked_QMARK_,other49670.checked_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49669__$1.extra,other49670.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49669__$1.context,other49670.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49669__$1.__extmap,other49670.__extmap)));
}));

(membrane.basic_components.Checkbox.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Checkbox.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Checkbox.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Checkbox.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Checkbox.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Checkbox.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Checkbox.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Checkbox.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked?","checked?",2024809091),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Checkbox(self__.checked_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49667){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49677 = cljs.core.keyword_identical_QMARK_;
var expr__49678 = k__4388__auto__;
if(cljs.core.truth_((pred__49677.cljs$core$IFn$_invoke$arity$2 ? pred__49677.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checked?","checked?",2024809091),expr__49678) : pred__49677.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),expr__49678)))){
return (new membrane.basic_components.Checkbox(G__49667,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49677.cljs$core$IFn$_invoke$arity$2 ? pred__49677.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49678) : pred__49677.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49678)))){
return (new membrane.basic_components.Checkbox(self__.checked_QMARK_,G__49667,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49677.cljs$core$IFn$_invoke$arity$2 ? pred__49677.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__49678) : pred__49677.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__49678)))){
return (new membrane.basic_components.Checkbox(self__.checked_QMARK_,self__.extra,G__49667,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Checkbox(self__.checked_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49667),null));
}
}
}
}));

(membrane.basic_components.Checkbox.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Checkbox.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"checked?","checked?",2024809091),self__.checked_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Checkbox.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Checkbox.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49667){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Checkbox(self__.checked_QMARK_,self__.extra,self__.context,G__49667,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Checkbox.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Checkbox.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Checkbox.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Checkbox.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Checkbox.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Checkbox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checked?","checked?",-629626678,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Checkbox.cljs$lang$type = true);

(membrane.basic_components.Checkbox.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Checkbox",null,(1),null));
}));

(membrane.basic_components.Checkbox.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Checkbox");
}));

/**
 * Positional factory function for membrane.basic-components/Checkbox.
 */
membrane.basic_components.__GT_Checkbox = (function membrane$basic_components$__GT_Checkbox(checked_QMARK_,extra,context){
return (new membrane.basic_components.Checkbox(checked_QMARK_,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Checkbox, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Checkbox = (function membrane$basic_components$map__GT_Checkbox(G__49671){
var extmap__4419__auto__ = (function (){var G__49680 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49671,new cljs.core.Keyword(null,"checked?","checked?",2024809091),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__49671)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49680);
} else {
return G__49680;
}
})();
return (new membrane.basic_components.Checkbox(new cljs.core.Keyword(null,"checked?","checked?",2024809091).cljs$core$IFn$_invoke$arity$1(G__49671),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__49671),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__49671),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.checkbox;},new cljs.core.Symbol("membrane.basic-components","checkbox","membrane.basic-components/checkbox",-1127003522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"checkbox","checkbox",-1041820114,null),"membrane/basic_components.cljc",16,1,630,true,630,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.checkbox)?membrane.basic_components.checkbox.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checked?","checked?",-629626678,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Checkbox component."], null)], 0));
}));

membrane.basic_components.checkbox_rerender_BANG_ = (function membrane$basic_components$checkbox_rerender_BANG_(m__47722__auto__){
var elem_49663 = membrane.basic_components.map__GT_Checkbox(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","checkbox","membrane.basic-components/checkbox",1527432247),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_49663.checked_QMARK_,elem_49663.extra,elem_49663.context,new cljs.core.Keyword(null,"$checked?","$checked?",-905876537).cljs$core$IFn$_invoke$arity$1(elem_49663),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_49663),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_49663)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.checkbox_draw(elem_49663);
var elem_49663__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_49663,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_49663__$1);

return elem_49663__$1;
});

var ret__47724__auto___49922 = /**
 * Checkbox component.
 */
membrane.basic_components.checkbox = (function membrane$basic_components$checkbox(p__49681){
var map__49682 = p__49681;
var map__49682__$1 = (((((!((map__49682 == null))))?(((((map__49682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49682):map__49682);
var m_49659 = map__49682__$1;
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49682__$1,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49682__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49682__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","checkbox","membrane.basic-components/checkbox",1527432247),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [checked_QMARK_,extra,context,new cljs.core.Keyword(null,"$checked?","$checked?",-905876537).cljs$core$IFn$_invoke$arity$1(m_49659),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_49659),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_49659)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.checkbox_rerender_BANG_(m_49659);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","checkbox","membrane.basic-components/checkbox",-1127003522,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checked?","checked?",-629626678,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Checkbox component."], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.checkbox;},new cljs.core.Symbol("membrane.basic-components","checkbox","membrane.basic-components/checkbox",-1127003522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"checkbox","checkbox",-1041820114,null),"membrane/basic_components.cljc",16,1,630,630,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checked?","checked?",-629626678,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-49659","m-49659",-1565930549,null)], null)], null)),"Checkbox component.",(cljs.core.truth_(membrane.basic_components.checkbox)?membrane.basic_components.checkbox.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checked?","checked?",-629626678,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Checkbox component."], null)], 0));
}));


membrane.basic_components.dropdown_list_draw = (function membrane$basic_components$dropdown_list_draw(p__49699){
var map__49700 = p__49699;
var map__49700__$1 = (((((!((map__49700 == null))))?(((((map__49700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49700):map__49700);
var m_49684 = map__49700__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49700__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49700__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49700__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49700__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_options_49685 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49684,new cljs.core.Keyword(null,"$options","$options",-1757383687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"options","options",99638489),null,(1),null)),(2),null))], null));
var arg_path_selected_49686 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49684,new cljs.core.Keyword(null,"$selected","$selected",-1130635898),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"selected","selected",574897764),null,(1),null)),(2),null))], null));
var arg_path_extra_49687 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49684,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_49688 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49684,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
var labels = (function (){var iter__4529__auto__ = (function membrane$basic_components$dropdown_list_draw_$_iter__49705(s__49706){
return (new cljs.core.LazySeq(null,(function (){
var s__49706__$1 = s__49706;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49706__$1);
if(temp__5753__auto__){
var s__49706__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49706__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49706__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49708 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49707 = (0);
while(true){
if((i__49707 < size__4528__auto__)){
var vec__49709 = cljs.core._nth(c__4527__auto__,i__49707);
var index_49690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49709,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49709,(1),null);
cljs.core.chunk_append(b__49708,membrane.ui.label.cljs$core$IFn$_invoke$arity$1(option));

var G__49923 = (i__49707 + (1));
i__49707 = G__49923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49708),membrane$basic_components$dropdown_list_draw_$_iter__49705(cljs.core.chunk_rest(s__49706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49708),null);
}
} else {
var vec__49712 = cljs.core.first(s__49706__$2);
var index_49690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49712,(1),null);
return cljs.core.cons(membrane.ui.label.cljs$core$IFn$_invoke$arity$1(option),membrane$basic_components$dropdown_list_draw_$_iter__49705(cljs.core.rest(s__49706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,options)));
})();
var max_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(membrane.ui.width,labels));
var padding_y = (8);
var padding_x = (12);
var rows = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(membrane.ui.vertical_layout,(function (){var iter__4529__auto__ = (function membrane$basic_components$dropdown_list_draw_$_iter__49715(s__49716){
return (new cljs.core.LazySeq(null,(function (){
var s__49716__$1 = s__49716;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49716__$1);
if(temp__5753__auto__){
var s__49716__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49716__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__49716__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__49718 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__49717 = (0);
while(true){
if((i__49717 < size__4528__auto__)){
var vec__49719 = cljs.core._nth(c__4527__auto__,i__49717);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49719,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49719,(1),null);
cljs.core.chunk_append(b__49718,(function (){var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),value], null));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,value);
var label = ((selected_QMARK_)?membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.label.cljs$core$IFn$_invoke$arity$1(option)], 0)):membrane.ui.label.cljs$core$IFn$_invoke$arity$1(option));
var vec__49722 = membrane.ui.bounds(label);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49722,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49722,(1),null);
var row_height = (h + (4));
var row_width = (max_width + ((2) * padding_x));
return membrane.basic_components.on_hover((function (){var hover_QMARK__49691 = hover_QMARK_;
var body_49692 = membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),((function (i__49717,hover_QMARK__49691,hover_QMARK_,selected_QMARK_,label,vec__49722,_,h,row_height,row_width,vec__49719,value,option,c__4527__auto__,size__4528__auto__,b__49718,s__49716__$2,temp__5753__auto__,labels,max_width,padding_y,padding_x,arg_path_options_49685,arg_path_selected_49686,arg_path_extra_49687,arg_path_context_49688,map__49700,map__49700__$1,m_49684,options,selected,extra,context){
return (function (___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_selected_49686,cljs.core.PersistentVector.EMPTY),value], null)], null);
});})(i__49717,hover_QMARK__49691,hover_QMARK_,selected_QMARK_,label,vec__49722,_,h,row_height,row_width,vec__49719,value,option,c__4527__auto__,size__4528__auto__,b__49718,s__49716__$2,temp__5753__auto__,labels,max_width,padding_y,padding_x,arg_path_options_49685,arg_path_selected_49686,arg_path_extra_49687,arg_path_context_49688,map__49700,map__49700__$1,m_49684,options,selected,extra,context))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2(row_width,row_height),((selected_QMARK_)?membrane.ui.filled_rectangle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.48,(1)], null),row_width,row_height):(cljs.core.truth_(hover_QMARK_)?membrane.ui.filled_rectangle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.976,0.976,0.976], null),row_width,row_height):null)),membrane.ui.translate(padding_x,(2),label)], null)], 0));
var extra_49693 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),value], null),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-selected-49686","arg-path-selected-49686",-334037349,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spacer","spacer",-587010630,null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.48,(1)], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.976,0.976,0.976], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null))),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"padding-x","padding-x",-1892121906,null),(2),new cljs.core.Symbol(null,"label","label",-936024965,null))], null)),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_49694 = context;
var $hover_QMARK__49695 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),value], null),null,(1),null)),(2),null))], null));
var $body_49696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-selected-49686","arg-path-selected-49686",-334037349,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spacer","spacer",-587010630,null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.48,(1)], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.976,0.976,0.976], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null))),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"padding-x","padding-x",-1892121906,null),(2),new cljs.core.Symbol(null,"label","label",-936024965,null))], null)),null,(1),null)),(2),null))], null);
var $extra_49697 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),value], null),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-selected-49686","arg-path-selected-49686",-334037349,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spacer","spacer",-587010630,null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.48,(1)], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.976,0.976,0.976], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null))),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"padding-x","padding-x",-1892121906,null),(2),new cljs.core.Symbol(null,"label","label",-936024965,null))], null)),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_49698 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_49688,cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"$extra","$extra",542082855),$extra_49697,new cljs.core.Keyword(null,"$context","$context",-449141881),$context_49698,new cljs.core.Keyword(null,"extra","extra",1612569067),extra_49693,new cljs.core.Keyword(null,"context","context",-830191113),context_49694,new cljs.core.Keyword(null,"body","body",-2049205669),body_49692,new cljs.core.Keyword(null,"$body","$body",-844213794),$body_49696,new cljs.core.Keyword(null,"$hover?","$hover?",857633438),$hover_QMARK__49695,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),hover_QMARK__49691], null);
})());
})());

var G__49924 = (i__49717 + (1));
i__49717 = G__49924;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49718),membrane$basic_components$dropdown_list_draw_$_iter__49715(cljs.core.chunk_rest(s__49716__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49718),null);
}
} else {
var vec__49725 = cljs.core.first(s__49716__$2);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49725,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49725,(1),null);
return cljs.core.cons((function (){var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),value], null));
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,value);
var label = ((selected_QMARK_)?membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.label.cljs$core$IFn$_invoke$arity$1(option)], 0)):membrane.ui.label.cljs$core$IFn$_invoke$arity$1(option));
var vec__49728 = membrane.ui.bounds(label);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49728,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49728,(1),null);
var row_height = (h + (4));
var row_width = (max_width + ((2) * padding_x));
return membrane.basic_components.on_hover((function (){var hover_QMARK__49691 = hover_QMARK_;
var body_49692 = membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),((function (hover_QMARK__49691,hover_QMARK_,selected_QMARK_,label,vec__49728,_,h,row_height,row_width,vec__49725,value,option,s__49716__$2,temp__5753__auto__,labels,max_width,padding_y,padding_x,arg_path_options_49685,arg_path_selected_49686,arg_path_extra_49687,arg_path_context_49688,map__49700,map__49700__$1,m_49684,options,selected,extra,context){
return (function (___$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_selected_49686,cljs.core.PersistentVector.EMPTY),value], null)], null);
});})(hover_QMARK__49691,hover_QMARK_,selected_QMARK_,label,vec__49728,_,h,row_height,row_width,vec__49725,value,option,s__49716__$2,temp__5753__auto__,labels,max_width,padding_y,padding_x,arg_path_options_49685,arg_path_selected_49686,arg_path_extra_49687,arg_path_context_49688,map__49700,map__49700__$1,m_49684,options,selected,extra,context))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2(row_width,row_height),((selected_QMARK_)?membrane.ui.filled_rectangle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.48,(1)], null),row_width,row_height):(cljs.core.truth_(hover_QMARK_)?membrane.ui.filled_rectangle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.976,0.976,0.976], null),row_width,row_height):null)),membrane.ui.translate(padding_x,(2),label)], null)], 0));
var extra_49693 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),value], null),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-selected-49686","arg-path-selected-49686",-334037349,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spacer","spacer",-587010630,null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.48,(1)], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.976,0.976,0.976], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null))),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"padding-x","padding-x",-1892121906,null),(2),new cljs.core.Symbol(null,"label","label",-936024965,null))], null)),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_49694 = context;
var $hover_QMARK__49695 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),value], null),null,(1),null)),(2),null))], null));
var $body_49696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-selected-49686","arg-path-selected-49686",-334037349,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spacer","spacer",-587010630,null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.48,(1)], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.976,0.976,0.976], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null))),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"padding-x","padding-x",-1892121906,null),(2),new cljs.core.Symbol(null,"label","label",-936024965,null))], null)),null,(1),null)),(2),null))], null);
var $extra_49697 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49687,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hover?","hover?",-1201331489),value], null),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-selected-49686","arg-path-selected-49686",-334037349,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"spacer","spacer",-587010630,null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"selected?","selected?",898028739,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.48,(1)], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null)),new cljs.core.Symbol(null,"hover?","hover?",439200038,null),cljs.core.list(new cljs.core.Symbol("ui","filled-rectangle","ui/filled-rectangle",-1640745031,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.976,0.976,0.976], null),new cljs.core.Symbol(null,"row-width","row-width",-890146536,null),new cljs.core.Symbol(null,"row-height","row-height",-2127075020,null))),cljs.core.list(new cljs.core.Symbol(null,"translate","translate",-1318236322,null),new cljs.core.Symbol(null,"padding-x","padding-x",-1892121906,null),(2),new cljs.core.Symbol(null,"label","label",-936024965,null))], null)),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_49698 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_49688,cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"$extra","$extra",542082855),$extra_49697,new cljs.core.Keyword(null,"$context","$context",-449141881),$context_49698,new cljs.core.Keyword(null,"extra","extra",1612569067),extra_49693,new cljs.core.Keyword(null,"context","context",-830191113),context_49694,new cljs.core.Keyword(null,"body","body",-2049205669),body_49692,new cljs.core.Keyword(null,"$body","$body",-844213794),$body_49696,new cljs.core.Keyword(null,"$hover?","$hover?",857633438),$hover_QMARK__49695,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),hover_QMARK__49691], null);
})());
})(),membrane$basic_components$dropdown_list_draw_$_iter__49715(cljs.core.rest(s__49716__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(options);
})());
var vec__49702 = membrane.ui.bounds(rows);
var rows_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49702,(0),null);
var rows_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49702,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.831,0.831,0.831], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle(rows_width,(rows_height + ((2) * padding_y)),(4))], 0))], 0)),membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-fill","membrane.ui/style-fill",1620230388),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle(rows_width,(rows_height + ((2) * padding_y)),(4))], 0))], 0)),membrane.ui.translate((0),(padding_y - (2)),rows)], null);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Dropdown_list = (function (options,selected,extra,context,__meta,__extmap,__hash){
this.options = options;
this.selected = selected;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Dropdown_list.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49732,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49736 = k49732;
var G__49736__$1 = (((G__49736 instanceof cljs.core.Keyword))?G__49736.fqn:null);
switch (G__49736__$1) {
case "options":
return self__.options;

break;
case "selected":
return self__.selected;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49732,else__4383__auto__);

}
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49737){
var vec__49738 = p__49737;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49738,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49738,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Dropdown-list{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected","selected",574897764),self__.selected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49731){
var self__ = this;
var G__49731__$1 = this;
return (new cljs.core.RecordIter((0),G__49731__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Dropdown_list(self__.options,self__.selected,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2099052395 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49733,other49734){
var self__ = this;
var this49733__$1 = this;
return (((!((other49734 == null)))) && ((this49733__$1.constructor === other49734.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49733__$1.options,other49734.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49733__$1.selected,other49734.selected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49733__$1.extra,other49734.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49733__$1.context,other49734.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49733__$1.__extmap,other49734.__extmap)));
}));

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"options","options",99638489),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Dropdown_list(self__.options,self__.selected,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49731){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49741 = cljs.core.keyword_identical_QMARK_;
var expr__49742 = k__4388__auto__;
if(cljs.core.truth_((pred__49741.cljs$core$IFn$_invoke$arity$2 ? pred__49741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__49742) : pred__49741.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__49742)))){
return (new membrane.basic_components.Dropdown_list(G__49731,self__.selected,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49741.cljs$core$IFn$_invoke$arity$2 ? pred__49741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764),expr__49742) : pred__49741.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),expr__49742)))){
return (new membrane.basic_components.Dropdown_list(self__.options,G__49731,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49741.cljs$core$IFn$_invoke$arity$2 ? pred__49741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49742) : pred__49741.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49742)))){
return (new membrane.basic_components.Dropdown_list(self__.options,self__.selected,G__49731,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49741.cljs$core$IFn$_invoke$arity$2 ? pred__49741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__49742) : pred__49741.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__49742)))){
return (new membrane.basic_components.Dropdown_list(self__.options,self__.selected,self__.extra,G__49731,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Dropdown_list(self__.options,self__.selected,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49731),null));
}
}
}
}
}));

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"selected","selected",574897764),self__.selected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49731){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Dropdown_list(self__.options,self__.selected,self__.extra,self__.context,G__49731,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Dropdown_list.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown_list.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Dropdown_list.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Dropdown_list.cljs$lang$type = true);

(membrane.basic_components.Dropdown_list.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Dropdown-list",null,(1),null));
}));

(membrane.basic_components.Dropdown_list.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Dropdown-list");
}));

/**
 * Positional factory function for membrane.basic-components/Dropdown-list.
 */
membrane.basic_components.__GT_Dropdown_list = (function membrane$basic_components$__GT_Dropdown_list(options,selected,extra,context){
return (new membrane.basic_components.Dropdown_list(options,selected,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Dropdown-list, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Dropdown_list = (function membrane$basic_components$map__GT_Dropdown_list(G__49735){
var extmap__4419__auto__ = (function (){var G__49744 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49735,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__49735)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49744);
} else {
return G__49744;
}
})();
return (new membrane.basic_components.Dropdown_list(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49735),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(G__49735),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__49735),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__49735),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.dropdown_list;},new cljs.core.Symbol("membrane.basic-components","dropdown-list","membrane.basic-components/dropdown-list",-1457318651,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"dropdown-list","dropdown-list",1540932053,null),"membrane/basic_components.cljc",21,1,641,true,641,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.dropdown_list)?membrane.basic_components.dropdown_list.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));

membrane.basic_components.dropdown_list_rerender_BANG_ = (function membrane$basic_components$dropdown_list_rerender_BANG_(m__47722__auto__){
var elem_49689 = membrane.basic_components.map__GT_Dropdown_list(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","dropdown-list","membrane.basic-components/dropdown-list",1197117118),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_49689.options,elem_49689.selected,elem_49689.extra,elem_49689.context,new cljs.core.Keyword(null,"$options","$options",-1757383687).cljs$core$IFn$_invoke$arity$1(elem_49689),new cljs.core.Keyword(null,"$selected","$selected",-1130635898).cljs$core$IFn$_invoke$arity$1(elem_49689),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_49689),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_49689)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.dropdown_list_draw(elem_49689);
var elem_49689__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_49689,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_49689__$1);

return elem_49689__$1;
});

var ret__47724__auto___49926 = membrane.basic_components.dropdown_list = (function membrane$basic_components$dropdown_list(p__49745){
var map__49746 = p__49745;
var map__49746__$1 = (((((!((map__49746 == null))))?(((((map__49746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49746):map__49746);
var m_49684 = map__49746__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49746__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49746__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49746__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49746__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","dropdown-list","membrane.basic-components/dropdown-list",1197117118),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [options,selected,extra,context,new cljs.core.Keyword(null,"$options","$options",-1757383687).cljs$core$IFn$_invoke$arity$1(m_49684),new cljs.core.Keyword(null,"$selected","$selected",-1130635898).cljs$core$IFn$_invoke$arity$1(m_49684),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_49684),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_49684)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.dropdown_list_rerender_BANG_(m_49684);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","dropdown-list","membrane.basic-components/dropdown-list",-1457318651,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.dropdown_list;},new cljs.core.Symbol("membrane.basic-components","dropdown-list","membrane.basic-components/dropdown-list",-1457318651,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"dropdown-list","dropdown-list",1540932053,null),"membrane/basic_components.cljc",21,1,641,641,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-49684","m-49684",-266357158,null)], null)], null)),null,(cljs.core.truth_(membrane.basic_components.dropdown_list)?membrane.basic_components.dropdown_list.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));


membrane.basic_components.dropdown_draw = (function membrane$basic_components$dropdown_draw(p__49763){
var map__49764 = p__49763;
var map__49764__$1 = (((((!((map__49764 == null))))?(((((map__49764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49764):map__49764);
var m_49748 = map__49764__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49764__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_options_49749 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49748,new cljs.core.Keyword(null,"$options","$options",-1757383687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"options","options",99638489),null,(1),null)),(2),null))], null));
var arg_path_selected_49750 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49748,new cljs.core.Keyword(null,"$selected","$selected",-1130635898),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"selected","selected",574897764),null,(1),null)),(2),null))], null));
var arg_path_open_QMARK__49751 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49748,new cljs.core.Keyword(null,"$open?","$open?",1232792369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,(1),null)),(2),null))], null));
var arg_path_extra_49752 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49748,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_49753 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49748,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
return membrane.ui.vertical_layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update","update",1045576396),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_open_QMARK__49751,cljs.core.PersistentVector.EMPTY),cljs.core.not], null)], null);
}),membrane.ui.bordered(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null),(cljs.core.truth_(selected)?membrane.ui.label.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__49766){
var vec__49767 = p__49766;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49767,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,selected)){
return option;
} else {
return null;
}
}),options))):membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,0.7,0.7], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.label.cljs$core$IFn$_invoke$arity$1("no selection")], 0))))], 0)),(cljs.core.truth_(open_QMARK_)?membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),(function ($selected,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_selected_49750,cljs.core.PersistentVector.EMPTY),value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_open_QMARK__49751,cljs.core.PersistentVector.EMPTY),false], null)], null);
}),membrane.basic_components.dropdown_list((function (){var options_49755 = options;
var selected_49756 = selected;
var extra_49757 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_options_49749,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_selected_49750,cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_49758 = context;
var $options_49759 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_options_49749,cljs.core.PersistentVector.EMPTY);
var $selected_49760 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_selected_49750,cljs.core.PersistentVector.EMPTY);
var $extra_49761 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49752,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_options_49749,cljs.core.PersistentVector.EMPTY),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_selected_49750,cljs.core.PersistentVector.EMPTY)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_49762 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_49753,cljs.core.PersistentVector.EMPTY);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"selected","selected",574897764),selected_49756,new cljs.core.Keyword(null,"$selected","$selected",-1130635898),$selected_49760,new cljs.core.Keyword(null,"$extra","$extra",542082855),$extra_49761,new cljs.core.Keyword(null,"$context","$context",-449141881),$context_49762,new cljs.core.Keyword(null,"extra","extra",1612569067),extra_49757,new cljs.core.Keyword(null,"context","context",-830191113),context_49758,new cljs.core.Keyword(null,"options","options",99638489),options_49755,new cljs.core.Keyword(null,"$options","$options",-1757383687),$options_49759], null);
})())], 0)):null)], 0));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Dropdown = (function (options,selected,open_QMARK_,extra,context,__meta,__extmap,__hash){
this.options = options;
this.selected = selected;
this.open_QMARK_ = open_QMARK_;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Dropdown.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49771,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49775 = k49771;
var G__49775__$1 = (((G__49775 instanceof cljs.core.Keyword))?G__49775.fqn:null);
switch (G__49775__$1) {
case "options":
return self__.options;

break;
case "selected":
return self__.selected;

break;
case "open?":
return self__.open_QMARK_;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49771,else__4383__auto__);

}
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49776){
var vec__49777 = p__49776;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49777,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49777,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Dropdown{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected","selected",574897764),self__.selected],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49770){
var self__ = this;
var G__49770__$1 = this;
return (new cljs.core.RecordIter((0),G__49770__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Dropdown(self__.options,self__.selected,self__.open_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-429097001 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Dropdown.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49772,other49773){
var self__ = this;
var this49772__$1 = this;
return (((!((other49773 == null)))) && ((this49772__$1.constructor === other49773.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49772__$1.options,other49773.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49772__$1.selected,other49773.selected)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49772__$1.open_QMARK_,other49773.open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49772__$1.extra,other49773.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49772__$1.context,other49773.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49772__$1.__extmap,other49773.__extmap)));
}));

(membrane.basic_components.Dropdown.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Dropdown.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selected","selected",574897764),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"context","context",-830191113),null,new cljs.core.Keyword(null,"options","options",99638489),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Dropdown(self__.options,self__.selected,self__.open_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49770){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49780 = cljs.core.keyword_identical_QMARK_;
var expr__49781 = k__4388__auto__;
if(cljs.core.truth_((pred__49780.cljs$core$IFn$_invoke$arity$2 ? pred__49780.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__49781) : pred__49780.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__49781)))){
return (new membrane.basic_components.Dropdown(G__49770,self__.selected,self__.open_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49780.cljs$core$IFn$_invoke$arity$2 ? pred__49780.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764),expr__49781) : pred__49780.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),expr__49781)))){
return (new membrane.basic_components.Dropdown(self__.options,G__49770,self__.open_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49780.cljs$core$IFn$_invoke$arity$2 ? pred__49780.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open?","open?",1238443125),expr__49781) : pred__49780.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__49781)))){
return (new membrane.basic_components.Dropdown(self__.options,self__.selected,G__49770,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49780.cljs$core$IFn$_invoke$arity$2 ? pred__49780.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49781) : pred__49780.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49781)))){
return (new membrane.basic_components.Dropdown(self__.options,self__.selected,self__.open_QMARK_,G__49770,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49780.cljs$core$IFn$_invoke$arity$2 ? pred__49780.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__49781) : pred__49780.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__49781)))){
return (new membrane.basic_components.Dropdown(self__.options,self__.selected,self__.open_QMARK_,self__.extra,G__49770,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Dropdown(self__.options,self__.selected,self__.open_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49770),null));
}
}
}
}
}
}));

(membrane.basic_components.Dropdown.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"selected","selected",574897764),self__.selected,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Dropdown.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49770){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Dropdown(self__.options,self__.selected,self__.open_QMARK_,self__.extra,self__.context,G__49770,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Dropdown.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Dropdown.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Dropdown.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Dropdown.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Dropdown.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Dropdown.cljs$lang$type = true);

(membrane.basic_components.Dropdown.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Dropdown",null,(1),null));
}));

(membrane.basic_components.Dropdown.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Dropdown");
}));

/**
 * Positional factory function for membrane.basic-components/Dropdown.
 */
membrane.basic_components.__GT_Dropdown = (function membrane$basic_components$__GT_Dropdown(options,selected,open_QMARK_,extra,context){
return (new membrane.basic_components.Dropdown(options,selected,open_QMARK_,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Dropdown, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Dropdown = (function membrane$basic_components$map__GT_Dropdown(G__49774){
var extmap__4419__auto__ = (function (){var G__49783 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49774,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__49774)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49783);
} else {
return G__49783;
}
})();
return (new membrane.basic_components.Dropdown(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49774),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(G__49774),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__49774),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__49774),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__49774),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.dropdown;},new cljs.core.Symbol("membrane.basic-components","dropdown","membrane.basic-components/dropdown",1661681028,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),"membrane/basic_components.cljc",16,1,707,true,707,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.dropdown)?membrane.basic_components.dropdown.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));

membrane.basic_components.dropdown_rerender_BANG_ = (function membrane$basic_components$dropdown_rerender_BANG_(m__47722__auto__){
var elem_49754 = membrane.basic_components.map__GT_Dropdown(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","dropdown","membrane.basic-components/dropdown",21149501),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_49754.options,elem_49754.selected,elem_49754.open_QMARK_,elem_49754.extra,elem_49754.context,new cljs.core.Keyword(null,"$options","$options",-1757383687).cljs$core$IFn$_invoke$arity$1(elem_49754),new cljs.core.Keyword(null,"$selected","$selected",-1130635898).cljs$core$IFn$_invoke$arity$1(elem_49754),new cljs.core.Keyword(null,"$open?","$open?",1232792369).cljs$core$IFn$_invoke$arity$1(elem_49754),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_49754),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_49754)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.dropdown_draw(elem_49754);
var elem_49754__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_49754,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_49754__$1);

return elem_49754__$1;
});

var ret__47724__auto___49928 = membrane.basic_components.dropdown = (function membrane$basic_components$dropdown(p__49784){
var map__49785 = p__49784;
var map__49785__$1 = (((((!((map__49785 == null))))?(((((map__49785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49785):map__49785);
var m_49748 = map__49785__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","dropdown","membrane.basic-components/dropdown",21149501),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [options,selected,open_QMARK_,extra,context,new cljs.core.Keyword(null,"$options","$options",-1757383687).cljs$core$IFn$_invoke$arity$1(m_49748),new cljs.core.Keyword(null,"$selected","$selected",-1130635898).cljs$core$IFn$_invoke$arity$1(m_49748),new cljs.core.Keyword(null,"$open?","$open?",1232792369).cljs$core$IFn$_invoke$arity$1(m_49748),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_49748),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_49748)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.dropdown_rerender_BANG_(m_49748);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","dropdown","membrane.basic-components/dropdown",1661681028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.dropdown;},new cljs.core.Symbol("membrane.basic-components","dropdown","membrane.basic-components/dropdown",1661681028,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),"membrane/basic_components.cljc",16,1,707,707,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-49748","m-49748",358007128,null)], null)], null)),null,(cljs.core.truth_(membrane.basic_components.dropdown)?membrane.basic_components.dropdown.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"selected","selected",-2079538005,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null)], null)], null))], null)], 0));
}));

var var__47838__auto___49929 = membrane.basic_components.effect_select = (function membrane$basic_components$effect_select(dispatch_BANG_,$selected,value){
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set","set",304602554),$selected,value) : dispatch_BANG_.call(null,new cljs.core.Keyword(null,"set","set",304602554),$selected,value));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","select","membrane.basic-components/select",-1892229009),membrane.basic_components.effect_select);

var var__47838__auto___49930 = membrane.basic_components.effect_counter_dec = (function membrane$basic_components$effect_counter_dec(dispatch_BANG_,$num,min){
if(cljs.core.truth_(min)){
var G__49788 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__49789 = $num;
var G__49790 = (function (p1__49787_SHARP_){
var x__4214__auto__ = min;
var y__4215__auto__ = (p1__49787_SHARP_ - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
});
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(G__49788,G__49789,G__49790) : dispatch_BANG_.call(null,G__49788,G__49789,G__49790));
} else {
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update","update",1045576396),$num,cljs.core.dec) : dispatch_BANG_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),$num,cljs.core.dec));
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","counter-dec","membrane.basic-components/counter-dec",-2071879573),membrane.basic_components.effect_counter_dec);

var var__47838__auto___49931 = membrane.basic_components.effect_counter_inc = (function membrane$basic_components$effect_counter_inc(dispatch_BANG_,$num,max){
if(cljs.core.truth_(max)){
var G__49792 = new cljs.core.Keyword(null,"update","update",1045576396);
var G__49793 = $num;
var G__49794 = (function (p1__49791_SHARP_){
var x__4217__auto__ = max;
var y__4218__auto__ = (p1__49791_SHARP_ + (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
});
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(G__49792,G__49793,G__49794) : dispatch_BANG_.call(null,G__49792,G__49793,G__49794));
} else {
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"update","update",1045576396),$num,cljs.core.inc) : dispatch_BANG_.call(null,new cljs.core.Keyword(null,"update","update",1045576396),$num,cljs.core.inc));
}
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","counter-inc","membrane.basic-components/counter-inc",1475015774),membrane.basic_components.effect_counter_inc);


membrane.basic_components.counter_draw = (function membrane$basic_components$counter_draw(p__49822){
var map__49823 = p__49822;
var map__49823__$1 = (((((!((map__49823 == null))))?(((((map__49823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49823):map__49823);
var m_49795 = map__49823__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49823__$1,new cljs.core.Keyword(null,"num","num",1985240673),(0));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49823__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49823__$1,new cljs.core.Keyword(null,"max","max",61366548));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49823__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49823__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_num_49796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49795,new cljs.core.Keyword(null,"$num","$num",-214220376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"num","num",1985240673),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__49825 = new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null);
return (fexpr__49825.cljs$core$IFn$_invoke$arity$1 ? fexpr__49825.cljs$core$IFn$_invoke$arity$1((0)) : fexpr__49825.call(null,(0)));
})()], null)], null);
var arg_path_min_49797 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49795,new cljs.core.Keyword(null,"$min","$min",-663180764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",444991522),null,(1),null)),(2),null))], null));
var arg_path_max_49798 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49795,new cljs.core.Keyword(null,"$max","$max",-543102224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",61366548),null,(1),null)),(2),null))], null));
var arg_path_extra_49799 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49795,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_49800 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49795,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
return membrane.ui.horizontal_layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.basic_components.button((function (){var text_49802 = "-";
var on_click_49803 = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-dec","membrane.basic-components/counter-dec",-2071879573),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_num_49796,cljs.core.PersistentVector.EMPTY),min], null)], null);
});
var hover_QMARK__49804 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"-",null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-dec","membrane.basic-components/counter-dec",-2071879573),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"min","min",2085523049,null)], null)], null))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$hover?","$hover?",857633438)], null),null);
var extra_49805 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"-",null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-dec","membrane.basic-components/counter-dec",-2071879573),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"min","min",2085523049,null)], null)], null))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_49806 = context;
var $hover_QMARK__49807 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49799,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"-",null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-dec","membrane.basic-components/counter-dec",-2071879573),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"min","min",2085523049,null)], null)], null))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$hover?","$hover?",857633438)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $text_49808 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"-",null,(1),null)),(2),null))], null);
var $on_click_49809 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-dec","membrane.basic-components/counter-dec",-2071879573),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"min","min",2085523049,null)], null)], null))),null,(1),null)),(2),null))], null);
var $extra_49810 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49799,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"-",null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-dec","membrane.basic-components/counter-dec",-2071879573),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"min","min",2085523049,null)], null)], null))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_49811 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_49800,cljs.core.PersistentVector.EMPTY);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"$on-click","$on-click",32610317),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"$text","$text",-983499110),new cljs.core.Keyword(null,"$hover?","$hover?",857633438),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"hover?","hover?",-1201331489)],[$extra_49810,$context_49811,extra_49805,$on_click_49809,on_click_49803,context_49806,$text_49808,$hover_QMARK__49807,text_49802,hover_QMARK__49804]);
})()),membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2((5),(0)),(function (){var lbl = membrane.ui.label.cljs$core$IFn$_invoke$arity$1(num);
var w = membrane.ui.width(lbl);
var padding = ((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = ((20) - w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() / (2));
return membrane.ui.horizontal_layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2(padding,(0)),lbl,membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2(padding,(0))], 0));
})(),membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2((5),(0)),membrane.basic_components.button((function (){var text_49812 = "+";
var on_click_49813 = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-inc","membrane.basic-components/counter-inc",1475015774),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_num_49796,cljs.core.PersistentVector.EMPTY),max], null)], null);
});
var hover_QMARK__49814 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"+",null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-inc","membrane.basic-components/counter-inc",1475015774),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"max","max",1701898075,null)], null)], null))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$hover?","$hover?",857633438)], null),null);
var extra_49815 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(extra,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"+",null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-inc","membrane.basic-components/counter-inc",1475015774),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"max","max",1701898075,null)], null)], null))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null);
var context_49816 = context;
var $hover_QMARK__49817 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49799,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"+",null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-inc","membrane.basic-components/counter-inc",1475015774),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"max","max",1701898075,null)], null)], null))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$hover?","$hover?",857633438)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $text_49818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"+",null,(1),null)),(2),null))], null);
var $on_click_49819 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-inc","membrane.basic-components/counter-inc",1475015774),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"max","max",1701898075,null)], null)], null))),null,(1),null)),(2),null))], null);
var $extra_49820 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_extra_49799,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"constant","constant",1260922224,null),(new cljs.core.List(null,"+",null,(1),null)),(2),null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"fn-call","fn-call",-1455804856,null),(new cljs.core.List(null,cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter-inc","membrane.basic-components/counter-inc",1475015774),cljs.core.list(new cljs.core.Symbol("clojure.core","into","clojure.core/into",1982832275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"arg-path-num-49796","arg-path-num-49796",-1523289589,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("membrane.component","flatten?","membrane.component/flatten?",1479872985),true], null)),cljs.core.PersistentVector.EMPTY),new cljs.core.Symbol(null,"max","max",1701898075,null)], null)], null))),null,(1),null)),(2),null))], null)], null),new cljs.core.Keyword(null,"$extra","$extra",542082855)], null),null,(1),null)),(2),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null),(new cljs.core.List(null,null,null,(1),null)),(2),null))], null)], null));
var $context_49821 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_context_49800,cljs.core.PersistentVector.EMPTY);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"$on-click","$on-click",32610317),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"$text","$text",-983499110),new cljs.core.Keyword(null,"$hover?","$hover?",857633438),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"hover?","hover?",-1201331489)],[$extra_49820,$context_49821,extra_49815,$on_click_49819,on_click_49813,context_49816,$text_49818,$hover_QMARK__49817,text_49812,hover_QMARK__49814]);
})())], 0));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Counter = (function (num,min,max,extra,context,__meta,__extmap,__hash){
this.num = num;
this.min = min;
this.max = max;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Counter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Counter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49827,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49831 = k49827;
var G__49831__$1 = (((G__49831 instanceof cljs.core.Keyword))?G__49831.fqn:null);
switch (G__49831__$1) {
case "num":
return self__.num;

break;
case "min":
return self__.min;

break;
case "max":
return self__.max;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49827,else__4383__auto__);

}
}));

(membrane.basic_components.Counter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49832){
var vec__49833 = p__49832;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49833,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49833,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Counter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Counter{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num","num",1985240673),self__.num],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min","min",444991522),self__.min],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max","max",61366548),self__.max],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Counter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49826){
var self__ = this;
var G__49826__$1 = this;
return (new cljs.core.RecordIter((0),G__49826__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Counter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Counter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Counter(self__.num,self__.min,self__.max,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Counter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Counter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-823656146 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Counter.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Counter.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Counter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49828,other49829){
var self__ = this;
var this49828__$1 = this;
return (((!((other49829 == null)))) && ((this49828__$1.constructor === other49829.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49828__$1.num,other49829.num)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49828__$1.min,other49829.min)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49828__$1.max,other49829.max)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49828__$1.extra,other49829.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49828__$1.context,other49829.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49828__$1.__extmap,other49829.__extmap)));
}));

(membrane.basic_components.Counter.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Counter.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Counter.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Counter.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Counter.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Counter.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Counter.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Counter.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Counter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"min","min",444991522),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"max","max",61366548),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Counter(self__.num,self__.min,self__.max,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Counter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49826){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49836 = cljs.core.keyword_identical_QMARK_;
var expr__49837 = k__4388__auto__;
if(cljs.core.truth_((pred__49836.cljs$core$IFn$_invoke$arity$2 ? pred__49836.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"num","num",1985240673),expr__49837) : pred__49836.call(null,new cljs.core.Keyword(null,"num","num",1985240673),expr__49837)))){
return (new membrane.basic_components.Counter(G__49826,self__.min,self__.max,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49836.cljs$core$IFn$_invoke$arity$2 ? pred__49836.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min","min",444991522),expr__49837) : pred__49836.call(null,new cljs.core.Keyword(null,"min","min",444991522),expr__49837)))){
return (new membrane.basic_components.Counter(self__.num,G__49826,self__.max,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49836.cljs$core$IFn$_invoke$arity$2 ? pred__49836.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),expr__49837) : pred__49836.call(null,new cljs.core.Keyword(null,"max","max",61366548),expr__49837)))){
return (new membrane.basic_components.Counter(self__.num,self__.min,G__49826,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49836.cljs$core$IFn$_invoke$arity$2 ? pred__49836.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49837) : pred__49836.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49837)))){
return (new membrane.basic_components.Counter(self__.num,self__.min,self__.max,G__49826,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49836.cljs$core$IFn$_invoke$arity$2 ? pred__49836.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__49837) : pred__49836.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__49837)))){
return (new membrane.basic_components.Counter(self__.num,self__.min,self__.max,self__.extra,G__49826,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Counter(self__.num,self__.min,self__.max,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49826),null));
}
}
}
}
}
}));

(membrane.basic_components.Counter.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Counter.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Counter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"num","num",1985240673),self__.num,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"min","min",444991522),self__.min,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max","max",61366548),self__.max,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Counter.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Counter.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Counter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49826){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Counter(self__.num,self__.min,self__.max,self__.extra,self__.context,G__49826,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Counter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Counter.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Counter.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Counter.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Counter.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Counter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Counter.cljs$lang$type = true);

(membrane.basic_components.Counter.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Counter",null,(1),null));
}));

(membrane.basic_components.Counter.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Counter");
}));

/**
 * Positional factory function for membrane.basic-components/Counter.
 */
membrane.basic_components.__GT_Counter = (function membrane$basic_components$__GT_Counter(num,min,max,extra,context){
return (new membrane.basic_components.Counter(num,min,max,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Counter, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Counter = (function membrane$basic_components$map__GT_Counter(G__49830){
var extmap__4419__auto__ = (function (){var G__49839 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49830,new cljs.core.Keyword(null,"num","num",1985240673),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__49830)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49839);
} else {
return G__49839;
}
})();
return (new membrane.basic_components.Counter(new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(G__49830),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(G__49830),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(G__49830),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__49830),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__49830),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.counter;},new cljs.core.Symbol("membrane.basic-components","counter","membrane.basic-components/counter",660638536,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"counter","counter",-1850427592,null),"membrane/basic_components.cljc",15,1,748,true,748,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.counter)?membrane.basic_components.counter.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"num","num",-669195096,null),(0)], null)], null)], null))], null)], 0));
}));

membrane.basic_components.counter_rerender_BANG_ = (function membrane$basic_components$counter_rerender_BANG_(m__47722__auto__){
var elem_49801 = membrane.basic_components.map__GT_Counter(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter","membrane.basic-components/counter",-979892991),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_49801.num,elem_49801.min,elem_49801.max,elem_49801.extra,elem_49801.context,new cljs.core.Keyword(null,"$num","$num",-214220376).cljs$core$IFn$_invoke$arity$1(elem_49801),new cljs.core.Keyword(null,"$min","$min",-663180764).cljs$core$IFn$_invoke$arity$1(elem_49801),new cljs.core.Keyword(null,"$max","$max",-543102224).cljs$core$IFn$_invoke$arity$1(elem_49801),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_49801),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_49801)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.counter_draw(elem_49801);
var elem_49801__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_49801,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_49801__$1);

return elem_49801__$1;
});

var ret__47724__auto___49933 = membrane.basic_components.counter = (function membrane$basic_components$counter(p__49840){
var map__49841 = p__49840;
var map__49841__$1 = (((((!((map__49841 == null))))?(((((map__49841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49841):map__49841);
var m_49795 = map__49841__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49841__$1,new cljs.core.Keyword(null,"num","num",1985240673),(0));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49841__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49841__$1,new cljs.core.Keyword(null,"max","max",61366548));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49841__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49841__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","counter","membrane.basic-components/counter",-979892991),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [num,min,max,extra,context,new cljs.core.Keyword(null,"$num","$num",-214220376).cljs$core$IFn$_invoke$arity$1(m_49795),new cljs.core.Keyword(null,"$min","$min",-663180764).cljs$core$IFn$_invoke$arity$1(m_49795),new cljs.core.Keyword(null,"$max","$max",-543102224).cljs$core$IFn$_invoke$arity$1(m_49795),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_49795),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_49795)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.counter_rerender_BANG_(m_49795);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","counter","membrane.basic-components/counter",660638536,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"num","num",-669195096,null),(0)], null)], null)], null))], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.counter;},new cljs.core.Symbol("membrane.basic-components","counter","membrane.basic-components/counter",660638536,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"counter","counter",-1850427592,null),"membrane/basic_components.cljc",15,1,748,748,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"num","num",-669195096,null),(0)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-49795","m-49795",-1333738507,null)], null)], null)),null,(cljs.core.truth_(membrane.basic_components.counter)?membrane.basic_components.counter.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"num","num",-669195096,null),(0)], null)], null)], null))], null)], 0));
}));

var var__47838__auto___49934 = membrane.basic_components.effect_update_slider = (function membrane$basic_components$effect_update_slider(dispatch_BANG_,$num,min,max,max_width,integer_QMARK_,x){
var ratio = (x / max_width);
var num = (min + (ratio * (max - min)));
var num__$1 = (cljs.core.truth_(integer_QMARK_)?(num | (0)):num);
return (dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 ? dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set","set",304602554),$num,num__$1) : dispatch_BANG_.call(null,new cljs.core.Keyword(null,"set","set",304602554),$num,num__$1));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.effects,cljs.core.assoc,new cljs.core.Keyword("membrane.basic-components","update-slider","membrane.basic-components/update-slider",-1633165173),membrane.basic_components.effect_update_slider);


membrane.basic_components.number_slider_draw = (function membrane$basic_components$number_slider_draw(p__49853){
var map__49854 = p__49853;
var map__49854__$1 = (((((!((map__49854 == null))))?(((((map__49854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49854):map__49854);
var m_49843 = map__49854__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49854__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(100));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854__$1,new cljs.core.Keyword(null,"max","max",61366548));
var integer_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854__$1,new cljs.core.Keyword(null,"integer?","integer?",-336739856));
var mdown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854__$1,new cljs.core.Keyword(null,"mdown?","mdown?",406079525));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var arg_path_num_49844 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49843,new cljs.core.Keyword(null,"$num","$num",-214220376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"num","num",1985240673),null,(1),null)),(2),null))], null));
var arg_path_max_width_49845 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49843,new cljs.core.Keyword(null,"$max-width","$max-width",-582317329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),null,(1),null)),(2),null))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__49856 = new cljs.core.Symbol(null,"nil->val","nil->val",1882503976,null);
return (fexpr__49856.cljs$core$IFn$_invoke$arity$1 ? fexpr__49856.cljs$core$IFn$_invoke$arity$1((100)) : fexpr__49856.call(null,(100)));
})()], null)], null);
var arg_path_min_49846 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49843,new cljs.core.Keyword(null,"$min","$min",-663180764),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",444991522),null,(1),null)),(2),null))], null));
var arg_path_max_49847 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49843,new cljs.core.Keyword(null,"$max","$max",-543102224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",61366548),null,(1),null)),(2),null))], null));
var arg_path_integer_QMARK__49848 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49843,new cljs.core.Keyword(null,"$integer?","$integer?",-589950253),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"integer?","integer?",-336739856),null,(1),null)),(2),null))], null));
var arg_path_mdown_QMARK__49849 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49843,new cljs.core.Keyword(null,"$mdown?","$mdown?",1744870151),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"mdown?","mdown?",406079525),null,(1),null)),(2),null))], null));
var arg_path_extra_49850 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49843,new cljs.core.Keyword(null,"$extra","$extra",542082855),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,(1),null)),(2),null))], null));
var arg_path_context_49851 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m_49843,new cljs.core.Keyword(null,"$context","$context",-449141881),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,new cljs.core.Symbol(null,"keypath","keypath",-688901058,null),(new cljs.core.List(null,new cljs.core.Keyword(null,"context","context",-830191113),null,(1),null)),(2),null))], null));
var ratio = ((num - min) / (max - min));
var width = (max_width * ratio);
var tint = 0.85;
var gray = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tint,tint,tint], null);
return membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),(function (p__49857){
var vec__49858 = p__49857;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49858,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49858,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mdown_QMARK__49849,cljs.core.PersistentVector.EMPTY),true], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","update-slider","membrane.basic-components/update-slider",-1633165173),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_num_49844,cljs.core.PersistentVector.EMPTY),min,max,max_width,integer_QMARK_,x], null)], null);
}),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),(function (p__49861){
var vec__49862 = p__49861;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49862,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49862,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_mdown_QMARK__49849,cljs.core.PersistentVector.EMPTY),false], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","update-slider","membrane.basic-components/update-slider",-1633165173),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_num_49844,cljs.core.PersistentVector.EMPTY),min,max,max_width,integer_QMARK_,x], null)], null);
}),new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),(function (p__49865){
var vec__49866 = p__49865;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49866,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49866,(1),null);
if(cljs.core.truth_(mdown_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","update-slider","membrane.basic-components/update-slider",-1633165173),cljs.core.into.cljs$core$IFn$_invoke$arity$2(arg_path_num_49844,cljs.core.PersistentVector.EMPTY),min,max,max_width,integer_QMARK_,x], null)], null);
} else {
return null;
}
}),membrane.ui.translate((1),(1),(function (){var height = (20);
var lbl = membrane.ui.label.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(integer_QMARK_)?num:num.toFixed((2))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-fill","membrane.ui/style-fill",1620230388),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(gray,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rectangle(width,height)], 0))], 0)),lbl,membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rectangle(max_width,height)], 0))], null);
})())], 0));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.basic_components.Number_slider = (function (num,max_width,min,max,integer_QMARK_,mdown_QMARK_,extra,context,__meta,__extmap,__hash){
this.num = num;
this.max_width = max_width;
this.min = min;
this.max = max;
this.integer_QMARK_ = integer_QMARK_;
this.mdown_QMARK_ = mdown_QMARK_;
this.extra = extra;
this.context = context;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.basic_components.Number_slider.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49870,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49874 = k49870;
var G__49874__$1 = (((G__49874 instanceof cljs.core.Keyword))?G__49874.fqn:null);
switch (G__49874__$1) {
case "num":
return self__.num;

break;
case "max-width":
return self__.max_width;

break;
case "min":
return self__.min;

break;
case "max":
return self__.max;

break;
case "integer?":
return self__.integer_QMARK_;

break;
case "mdown?":
return self__.mdown_QMARK_;

break;
case "extra":
return self__.extra;

break;
case "context":
return self__.context;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49870,else__4383__auto__);

}
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49875){
var vec__49876 = p__49875;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49876,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49876,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.basic-components.Number-slider{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num","num",1985240673),self__.num],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-width","max-width",-1939924051),self__.max_width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"min","min",444991522),self__.min],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max","max",61366548),self__.max],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"integer?","integer?",-336739856),self__.integer_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mdown?","mdown?",406079525),self__.mdown_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"context","context",-830191113),self__.context],null))], null),self__.__extmap));
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49869){
var self__ = this;
var G__49869__$1 = this;
return (new cljs.core.RecordIter((0),G__49869__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"num","num",1985240673),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"integer?","integer?",-336739856),new cljs.core.Keyword(null,"mdown?","mdown?",406079525),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,self__.min,self__.max,self__.integer_QMARK_,self__.mdown_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1625204261 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.basic_components.Number_slider.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Number_slider.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49871,other49872){
var self__ = this;
var this49871__$1 = this;
return (((!((other49872 == null)))) && ((this49871__$1.constructor === other49872.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.num,other49872.num)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.max_width,other49872.max_width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.min,other49872.min)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.max,other49872.max)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.integer_QMARK_,other49872.integer_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.mdown_QMARK_,other49872.mdown_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.extra,other49872.extra)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.context,other49872.context)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49871__$1.__extmap,other49872.__extmap)));
}));

(membrane.basic_components.Number_slider.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Number_slider.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Number_slider.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Number_slider.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this__47711__auto__,pos__47720__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
return membrane.ui._default_mouse_move_global(this__47711__auto____$1,pos__47720__auto__);
} else {
return null;
}
}));

(membrane.basic_components.Number_slider.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Number_slider.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Number_slider.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Number_slider.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"num","num",1985240673),null,new cljs.core.Keyword(null,"min","min",444991522),null,new cljs.core.Keyword(null,"mdown?","mdown?",406079525),null,new cljs.core.Keyword(null,"extra","extra",1612569067),null,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),null,new cljs.core.Keyword(null,"integer?","integer?",-336739856),null,new cljs.core.Keyword(null,"max","max",61366548),null,new cljs.core.Keyword(null,"context","context",-830191113),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,self__.min,self__.max,self__.integer_QMARK_,self__.mdown_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49869){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49879 = cljs.core.keyword_identical_QMARK_;
var expr__49880 = k__4388__auto__;
if(cljs.core.truth_((pred__49879.cljs$core$IFn$_invoke$arity$2 ? pred__49879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"num","num",1985240673),expr__49880) : pred__49879.call(null,new cljs.core.Keyword(null,"num","num",1985240673),expr__49880)))){
return (new membrane.basic_components.Number_slider(G__49869,self__.max_width,self__.min,self__.max,self__.integer_QMARK_,self__.mdown_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49879.cljs$core$IFn$_invoke$arity$2 ? pred__49879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-width","max-width",-1939924051),expr__49880) : pred__49879.call(null,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),expr__49880)))){
return (new membrane.basic_components.Number_slider(self__.num,G__49869,self__.min,self__.max,self__.integer_QMARK_,self__.mdown_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49879.cljs$core$IFn$_invoke$arity$2 ? pred__49879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"min","min",444991522),expr__49880) : pred__49879.call(null,new cljs.core.Keyword(null,"min","min",444991522),expr__49880)))){
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,G__49869,self__.max,self__.integer_QMARK_,self__.mdown_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49879.cljs$core$IFn$_invoke$arity$2 ? pred__49879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),expr__49880) : pred__49879.call(null,new cljs.core.Keyword(null,"max","max",61366548),expr__49880)))){
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,self__.min,G__49869,self__.integer_QMARK_,self__.mdown_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49879.cljs$core$IFn$_invoke$arity$2 ? pred__49879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"integer?","integer?",-336739856),expr__49880) : pred__49879.call(null,new cljs.core.Keyword(null,"integer?","integer?",-336739856),expr__49880)))){
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,self__.min,self__.max,G__49869,self__.mdown_QMARK_,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49879.cljs$core$IFn$_invoke$arity$2 ? pred__49879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mdown?","mdown?",406079525),expr__49880) : pred__49879.call(null,new cljs.core.Keyword(null,"mdown?","mdown?",406079525),expr__49880)))){
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,self__.min,self__.max,self__.integer_QMARK_,G__49869,self__.extra,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49879.cljs$core$IFn$_invoke$arity$2 ? pred__49879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49880) : pred__49879.call(null,new cljs.core.Keyword(null,"extra","extra",1612569067),expr__49880)))){
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,self__.min,self__.max,self__.integer_QMARK_,self__.mdown_QMARK_,G__49869,self__.context,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49879.cljs$core$IFn$_invoke$arity$2 ? pred__49879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113),expr__49880) : pred__49879.call(null,new cljs.core.Keyword(null,"context","context",-830191113),expr__49880)))){
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,self__.min,self__.max,self__.integer_QMARK_,self__.mdown_QMARK_,self__.extra,G__49869,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,self__.min,self__.max,self__.integer_QMARK_,self__.mdown_QMARK_,self__.extra,self__.context,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49869),null));
}
}
}
}
}
}
}
}
}));

(membrane.basic_components.Number_slider.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Number_slider.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"num","num",1985240673),self__.num,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max-width","max-width",-1939924051),self__.max_width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"min","min",444991522),self__.min,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max","max",61366548),self__.max,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"integer?","integer?",-336739856),self__.integer_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mdown?","mdown?",406079525),self__.mdown_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"extra","extra",1612569067),self__.extra,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"context","context",-830191113),self__.context,null))], null),self__.__extmap));
}));

(membrane.basic_components.Number_slider.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Number_slider.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this__47711__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
return new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1);
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49869){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.basic_components.Number_slider(self__.num,self__.max_width,self__.min,self__.max,self__.integer_QMARK_,self__.mdown_QMARK_,self__.extra,self__.context,G__49869,self__.__extmap,self__.__hash));
}));

(membrane.basic_components.Number_slider.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.basic_components.Number_slider.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Number_slider.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this__47711__auto__,info__47712__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47709__47714__auto__){
return membrane.ui._key_press(p1__47709__47714__auto__,info__47712__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Number_slider.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.basic_components.Number_slider.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this__47711__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__){
var self__ = this;
var this__47711__auto____$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515).cljs$core$IFn$_invoke$arity$1(this__47711__auto____$1))){
var temp__5753__auto__ = membrane.ui.children(this__47711__auto____$1);
if(cljs.core.truth_(temp__5753__auto__)){
var xs__47713__auto__ = temp__5753__auto__;
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__47710__47719__auto__){
return membrane.ui._key_event(p1__47710__47719__auto__,key__47715__auto__,scancode__47716__auto__,action__47717__auto__,mods__47718__auto__);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([xs__47713__auto__], 0));
} else {
return null;
}
} else {
return null;
}
}));

(membrane.basic_components.Number_slider.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"mdown?","mdown?",2046611052,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null);
}));

(membrane.basic_components.Number_slider.cljs$lang$type = true);

(membrane.basic_components.Number_slider.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.basic-components/Number-slider",null,(1),null));
}));

(membrane.basic_components.Number_slider.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.basic-components/Number-slider");
}));

/**
 * Positional factory function for membrane.basic-components/Number-slider.
 */
membrane.basic_components.__GT_Number_slider = (function membrane$basic_components$__GT_Number_slider(num,max_width,min,max,integer_QMARK_,mdown_QMARK_,extra,context){
return (new membrane.basic_components.Number_slider(num,max_width,min,max,integer_QMARK_,mdown_QMARK_,extra,context,null,null,null));
});

/**
 * Factory function for membrane.basic-components/Number-slider, taking a map of keywords to field values.
 */
membrane.basic_components.map__GT_Number_slider = (function membrane$basic_components$map__GT_Number_slider(G__49873){
var extmap__4419__auto__ = (function (){var G__49882 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49873,new cljs.core.Keyword(null,"num","num",1985240673),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"integer?","integer?",-336739856),new cljs.core.Keyword(null,"mdown?","mdown?",406079525),new cljs.core.Keyword(null,"extra","extra",1612569067),new cljs.core.Keyword(null,"context","context",-830191113)], 0));
if(cljs.core.record_QMARK_(G__49873)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49882);
} else {
return G__49882;
}
})();
return (new membrane.basic_components.Number_slider(new cljs.core.Keyword(null,"num","num",1985240673).cljs$core$IFn$_invoke$arity$1(G__49873),new cljs.core.Keyword(null,"max-width","max-width",-1939924051).cljs$core$IFn$_invoke$arity$1(G__49873),new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(G__49873),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(G__49873),new cljs.core.Keyword(null,"integer?","integer?",-336739856).cljs$core$IFn$_invoke$arity$1(G__49873),new cljs.core.Keyword(null,"mdown?","mdown?",406079525).cljs$core$IFn$_invoke$arity$1(G__49873),new cljs.core.Keyword(null,"extra","extra",1612569067).cljs$core$IFn$_invoke$arity$1(G__49873),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(G__49873),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.number_slider;},new cljs.core.Symbol("membrane.basic-components","number-slider","membrane.basic-components/number-slider",-510725564,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"declared","declared",92336021),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"number-slider","number-slider",-1824185964,null),"membrane/basic_components.cljc",21,1,781,true,781,cljs.core.List.EMPTY,null,(cljs.core.truth_(membrane.basic_components.number_slider)?membrane.basic_components.number_slider.cljs$lang$test:null)])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"mdown?","mdown?",2046611052,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),(100)], null)], null)], null))], null)], 0));
}));

membrane.basic_components.number_slider_rerender_BANG_ = (function membrane$basic_components$number_slider_rerender_BANG_(m__47722__auto__){
var elem_49852 = membrane.basic_components.map__GT_Number_slider(m__47722__auto__);
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","number-slider","membrane.basic-components/number-slider",2143710205),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_49852.num,elem_49852.max_width,elem_49852.min,elem_49852.max,elem_49852.integer_QMARK_,elem_49852.mdown_QMARK_,elem_49852.extra,elem_49852.context,new cljs.core.Keyword(null,"$num","$num",-214220376).cljs$core$IFn$_invoke$arity$1(elem_49852),new cljs.core.Keyword(null,"$max-width","$max-width",-582317329).cljs$core$IFn$_invoke$arity$1(elem_49852),new cljs.core.Keyword(null,"$min","$min",-663180764).cljs$core$IFn$_invoke$arity$1(elem_49852),new cljs.core.Keyword(null,"$max","$max",-543102224).cljs$core$IFn$_invoke$arity$1(elem_49852),new cljs.core.Keyword(null,"$integer?","$integer?",-589950253).cljs$core$IFn$_invoke$arity$1(elem_49852),new cljs.core.Keyword(null,"$mdown?","$mdown?",1744870151).cljs$core$IFn$_invoke$arity$1(elem_49852),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(elem_49852),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(elem_49852)], null)], null);
var rendered__47723__auto__ = membrane.basic_components.number_slider_draw(elem_49852);
var elem_49852__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(elem_49852,new cljs.core.Keyword("membrane.component","bounds","membrane.component/bounds",-70569779),membrane.ui.child_bounds(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","children","membrane.component/children",1155167588),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rendered__47723__auto__], null)),new cljs.core.Keyword("membrane.component","rendered","membrane.component/rendered",610229812),rendered__47723__auto__),new cljs.core.Keyword("membrane.component","has-key-event","membrane.component/has-key-event",-409545515),membrane.ui.has_key_event(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-key-press","membrane.component/has-key-press",517145466),membrane.ui.has_key_press(rendered__47723__auto__)),new cljs.core.Keyword("membrane.component","has-mouse-move-global","membrane.component/has-mouse-move-global",-2086781544),membrane.ui.has_mouse_move_global(rendered__47723__auto__));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.component_cache,cljs.core.assoc_in,key__47715__auto__,elem_49852__$1);

return elem_49852__$1;
});

var ret__47724__auto___49936 = membrane.basic_components.number_slider = (function membrane$basic_components$number_slider(p__49883){
var map__49884 = p__49883;
var map__49884__$1 = (((((!((map__49884 == null))))?(((((map__49884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49884):map__49884);
var m_49843 = map__49884__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49884__$1,new cljs.core.Keyword(null,"num","num",1985240673));
var max_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49884__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(100));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49884__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49884__$1,new cljs.core.Keyword(null,"max","max",61366548));
var integer_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49884__$1,new cljs.core.Keyword(null,"integer?","integer?",-336739856));
var mdown_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49884__$1,new cljs.core.Keyword(null,"mdown?","mdown?",406079525));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49884__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49884__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var key__47715__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("membrane.basic-components","number-slider","membrane.basic-components/number-slider",2143710205),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [num,max_width,min,max,integer_QMARK_,mdown_QMARK_,extra,context,new cljs.core.Keyword(null,"$num","$num",-214220376).cljs$core$IFn$_invoke$arity$1(m_49843),new cljs.core.Keyword(null,"$max-width","$max-width",-582317329).cljs$core$IFn$_invoke$arity$1(m_49843),new cljs.core.Keyword(null,"$min","$min",-663180764).cljs$core$IFn$_invoke$arity$1(m_49843),new cljs.core.Keyword(null,"$max","$max",-543102224).cljs$core$IFn$_invoke$arity$1(m_49843),new cljs.core.Keyword(null,"$integer?","$integer?",-589950253).cljs$core$IFn$_invoke$arity$1(m_49843),new cljs.core.Keyword(null,"$mdown?","$mdown?",1744870151).cljs$core$IFn$_invoke$arity$1(m_49843),new cljs.core.Keyword(null,"$extra","$extra",542082855).cljs$core$IFn$_invoke$arity$1(m_49843),new cljs.core.Keyword(null,"$context","$context",-449141881).cljs$core$IFn$_invoke$arity$1(m_49843)], null)], null);
var elem__47725__auto__ = (function (){var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.component.component_cache),key__47715__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var elem__47725__auto__ = temp__5751__auto__;
return elem__47725__auto__;
} else {
return membrane.basic_components.number_slider_rerender_BANG_(m_49843);
}
})();
return elem__47725__auto__;
});
cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.component.special_fns,cljs.core.assoc,new cljs.core.Symbol("membrane.basic-components","number-slider","membrane.basic-components/number-slider",-510725564,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"mdown?","mdown?",2046611052,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),(100)], null)], null)], null))], null));

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return membrane.basic_components.number_slider;},new cljs.core.Symbol("membrane.basic-components","number-slider","membrane.basic-components/number-slider",-510725564,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013)],[new cljs.core.Symbol(null,"membrane.basic-components","membrane.basic-components",1776984246,null),new cljs.core.Symbol(null,"number-slider","number-slider",-1824185964,null),"membrane/basic_components.cljc",21,1,781,781,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"mdown?","mdown?",2046611052,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),(100)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"m-49843","m-49843",997628715,null)], null)], null)),null,(cljs.core.truth_(membrane.basic_components.number_slider)?membrane.basic_components.number_slider.cljs$lang$test:null),true])),(function (old_meta__47721__auto__){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_meta__47721__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.component","special?","membrane.component/special?",42838013),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"mdown?","mdown?",2046611052,null),new cljs.core.Symbol(null,"extra","extra",-1041866702,null),new cljs.core.Symbol(null,"context","context",810340414,null)], null),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"max-width","max-width",-299392524,null),(100)], null)], null)], null))], null)], 0));
}));


//# sourceMappingURL=membrane.basic_components.js.map
