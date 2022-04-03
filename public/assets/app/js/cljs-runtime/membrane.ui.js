goog.provide('membrane.ui');

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
membrane.ui.Font = (function (name,size,weight,width,slant,__meta,__extmap,__hash){
this.name = name;
this.size = size;
this.weight = weight;
this.width = width;
this.slant = slant;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Font.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Font.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46130,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46134 = k46130;
var G__46134__$1 = (((G__46134 instanceof cljs.core.Keyword))?G__46134.fqn:null);
switch (G__46134__$1) {
case "name":
return self__.name;

break;
case "size":
return self__.size;

break;
case "weight":
return self__.weight;

break;
case "width":
return self__.width;

break;
case "slant":
return self__.slant;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46130,else__4383__auto__);

}
}));

(membrane.ui.Font.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46135){
var vec__46136 = p__46135;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46136,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46136,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Font.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Font{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"slant","slant",1122551990),self__.slant],null))], null),self__.__extmap));
}));

(membrane.ui.Font.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46129){
var self__ = this;
var G__46129__$1 = this;
return (new cljs.core.RecordIter((0),G__46129__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"slant","slant",1122551990)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Font.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Font.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Font(self__.name,self__.size,self__.weight,self__.width,self__.slant,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Font.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Font.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (633017093 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Font.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46131,other46132){
var self__ = this;
var this46131__$1 = this;
return (((!((other46132 == null)))) && ((this46131__$1.constructor === other46132.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46131__$1.name,other46132.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46131__$1.size,other46132.size)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46131__$1.weight,other46132.weight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46131__$1.width,other46132.width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46131__$1.slant,other46132.slant)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46131__$1.__extmap,other46132.__extmap)));
}));

(membrane.ui.Font.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"weight","weight",-1262796205),null,new cljs.core.Keyword(null,"slant","slant",1122551990),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Font(self__.name,self__.size,self__.weight,self__.width,self__.slant,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Font.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46129){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46139 = cljs.core.keyword_identical_QMARK_;
var expr__46140 = k__4388__auto__;
if(cljs.core.truth_((pred__46139.cljs$core$IFn$_invoke$arity$2 ? pred__46139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__46140) : pred__46139.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__46140)))){
return (new membrane.ui.Font(G__46129,self__.size,self__.weight,self__.width,self__.slant,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46139.cljs$core$IFn$_invoke$arity$2 ? pred__46139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"size","size",1098693007),expr__46140) : pred__46139.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__46140)))){
return (new membrane.ui.Font(self__.name,G__46129,self__.weight,self__.width,self__.slant,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46139.cljs$core$IFn$_invoke$arity$2 ? pred__46139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"weight","weight",-1262796205),expr__46140) : pred__46139.call(null,new cljs.core.Keyword(null,"weight","weight",-1262796205),expr__46140)))){
return (new membrane.ui.Font(self__.name,self__.size,G__46129,self__.width,self__.slant,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46139.cljs$core$IFn$_invoke$arity$2 ? pred__46139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),expr__46140) : pred__46139.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__46140)))){
return (new membrane.ui.Font(self__.name,self__.size,self__.weight,G__46129,self__.slant,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46139.cljs$core$IFn$_invoke$arity$2 ? pred__46139.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slant","slant",1122551990),expr__46140) : pred__46139.call(null,new cljs.core.Keyword(null,"slant","slant",1122551990),expr__46140)))){
return (new membrane.ui.Font(self__.name,self__.size,self__.weight,self__.width,G__46129,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Font(self__.name,self__.size,self__.weight,self__.width,self__.slant,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46129),null));
}
}
}
}
}
}));

(membrane.ui.Font.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"size","size",1098693007),self__.size,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"weight","weight",-1262796205),self__.weight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"slant","slant",1122551990),self__.slant,null))], null),self__.__extmap));
}));

(membrane.ui.Font.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46129){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Font(self__.name,self__.size,self__.weight,self__.width,self__.slant,G__46129,self__.__extmap,self__.__hash));
}));

(membrane.ui.Font.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Font.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"weight","weight",377735322,null),new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"slant","slant",-1531883779,null)], null);
}));

(membrane.ui.Font.cljs$lang$type = true);

(membrane.ui.Font.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Font",null,(1),null));
}));

(membrane.ui.Font.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Font");
}));

/**
 * Positional factory function for membrane.ui/Font.
 */
membrane.ui.__GT_Font = (function membrane$ui$__GT_Font(name,size,weight,width,slant){
return (new membrane.ui.Font(name,size,weight,width,slant,null,null,null));
});

/**
 * Factory function for membrane.ui/Font, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Font = (function membrane$ui$map__GT_Font(G__46133){
var extmap__4419__auto__ = (function (){var G__46142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46133,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"slant","slant",1122551990)], 0));
if(cljs.core.record_QMARK_(G__46133)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46142);
} else {
return G__46142;
}
})();
return (new membrane.ui.Font(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__46133),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__46133),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(G__46133),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__46133),new cljs.core.Keyword(null,"slant","slant",1122551990).cljs$core$IFn$_invoke$arity$1(G__46133),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

membrane.ui.default_font = (new membrane.ui.Font(null,(14),null,null,null,null,null,null));
/**
 * Creates a font.
 * 
 *   `name`: Should be the path to a font file on desktop. If nil, use the default font.
 *   `size`: Size of the font. If nil, use the default font size.
 */
membrane.ui.font = (function membrane$ui$font(name,size){
return (new membrane.ui.Font((cljs.core.truth_(name)?name:membrane.ui.default_font.name),(cljs.core.truth_(size)?size:membrane.ui.default_font.size),membrane.ui.default_font.weight,membrane.ui.default_font.width,membrane.ui.default_font.slant,null,null,null));
});

/**
 * @interface
 */
membrane.ui.IMouseMove = function(){};

var membrane$ui$IMouseMove$_mouse_move$dyn_47629 = (function (elem,pos){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._mouse_move[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(elem,pos) : m__4429__auto__.call(null,elem,pos));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-mouse-move","membrane.ui/-mouse-move",-1103336375,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(elem,pos) : meta_impl__4427__auto__.call(null,elem,pos));
} else {
var m__4426__auto__ = (membrane.ui._mouse_move["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(elem,pos) : m__4426__auto__.call(null,elem,pos));
} else {
throw cljs.core.missing_protocol("IMouseMove.-mouse-move",elem);
}
}
}
});
membrane.ui._mouse_move = (function membrane$ui$_mouse_move(elem,pos){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IMouseMove$_mouse_move$arity$2 == null)))))){
return elem.membrane$ui$IMouseMove$_mouse_move$arity$2(elem,pos);
} else {
return membrane$ui$IMouseMove$_mouse_move$dyn_47629(elem,pos);
}
});


/**
 * @interface
 */
membrane.ui.IMouseMoveGlobal = function(){};

var membrane$ui$IMouseMoveGlobal$_mouse_move_global$dyn_47644 = (function (elem,pos){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._mouse_move_global[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(elem,pos) : m__4429__auto__.call(null,elem,pos));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-mouse-move-global","membrane.ui/-mouse-move-global",-213598674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(elem,pos) : meta_impl__4427__auto__.call(null,elem,pos));
} else {
var m__4426__auto__ = (membrane.ui._mouse_move_global["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(elem,pos) : m__4426__auto__.call(null,elem,pos));
} else {
throw cljs.core.missing_protocol("IMouseMoveGlobal.-mouse-move-global",elem);
}
}
}
});
membrane.ui._mouse_move_global = (function membrane$ui$_mouse_move_global(elem,pos){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 == null)))))){
return elem.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2(elem,pos);
} else {
return membrane$ui$IMouseMoveGlobal$_mouse_move_global$dyn_47644(elem,pos);
}
});


/**
 * @interface
 */
membrane.ui.IMouseEvent = function(){};

var membrane$ui$IMouseEvent$_mouse_event$dyn_47662 = (function (elem,pos,button,mouse_down_QMARK_,mods){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._mouse_event[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$5(elem,pos,button,mouse_down_QMARK_,mods) : m__4429__auto__.call(null,elem,pos,button,mouse_down_QMARK_,mods));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-mouse-event","membrane.ui/-mouse-event",-240990305,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$5 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$5(elem,pos,button,mouse_down_QMARK_,mods) : meta_impl__4427__auto__.call(null,elem,pos,button,mouse_down_QMARK_,mods));
} else {
var m__4426__auto__ = (membrane.ui._mouse_event["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$5(elem,pos,button,mouse_down_QMARK_,mods) : m__4426__auto__.call(null,elem,pos,button,mouse_down_QMARK_,mods));
} else {
throw cljs.core.missing_protocol("IMouseEvent.-mouse-event",elem);
}
}
}
});
membrane.ui._mouse_event = (function membrane$ui$_mouse_event(elem,pos,button,mouse_down_QMARK_,mods){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IMouseEvent$_mouse_event$arity$5 == null)))))){
return elem.membrane$ui$IMouseEvent$_mouse_event$arity$5(elem,pos,button,mouse_down_QMARK_,mods);
} else {
return membrane$ui$IMouseEvent$_mouse_event$dyn_47662(elem,pos,button,mouse_down_QMARK_,mods);
}
});


/**
 * @interface
 */
membrane.ui.IDrop = function(){};

var membrane$ui$IDrop$_drop$dyn_47678 = (function (elem,paths,pos){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._drop[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(elem,paths,pos) : m__4429__auto__.call(null,elem,paths,pos));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-drop","membrane.ui/-drop",1583312103,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$3(elem,paths,pos) : meta_impl__4427__auto__.call(null,elem,paths,pos));
} else {
var m__4426__auto__ = (membrane.ui._drop["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(elem,paths,pos) : m__4426__auto__.call(null,elem,paths,pos));
} else {
throw cljs.core.missing_protocol("IDrop.-drop",elem);
}
}
}
});
membrane.ui._drop = (function membrane$ui$_drop(elem,paths,pos){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IDrop$_drop$arity$3 == null)))))){
return elem.membrane$ui$IDrop$_drop$arity$3(elem,paths,pos);
} else {
return membrane$ui$IDrop$_drop$dyn_47678(elem,paths,pos);
}
});


/**
 * @interface
 */
membrane.ui.IScroll = function(){};

var membrane$ui$IScroll$_scroll$dyn_47704 = (function (elem,delta,mpos){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._scroll[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(elem,delta,mpos) : m__4429__auto__.call(null,elem,delta,mpos));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-scroll","membrane.ui/-scroll",1918859082,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$3(elem,delta,mpos) : meta_impl__4427__auto__.call(null,elem,delta,mpos));
} else {
var m__4426__auto__ = (membrane.ui._scroll["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(elem,delta,mpos) : m__4426__auto__.call(null,elem,delta,mpos));
} else {
throw cljs.core.missing_protocol("IScroll.-scroll",elem);
}
}
}
});
membrane.ui._scroll = (function membrane$ui$_scroll(elem,delta,mpos){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IScroll$_scroll$arity$3 == null)))))){
return elem.membrane$ui$IScroll$_scroll$arity$3(elem,delta,mpos);
} else {
return membrane$ui$IScroll$_scroll$dyn_47704(elem,delta,mpos);
}
});


/**
 * @interface
 */
membrane.ui.IMouseWheel = function(){};

var membrane$ui$IMouseWheel$_mouse_wheel$dyn_47729 = (function (elem,delta){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._mouse_wheel[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(elem,delta) : m__4429__auto__.call(null,elem,delta));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-mouse-wheel","membrane.ui/-mouse-wheel",-858137925,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(elem,delta) : meta_impl__4427__auto__.call(null,elem,delta));
} else {
var m__4426__auto__ = (membrane.ui._mouse_wheel["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(elem,delta) : m__4426__auto__.call(null,elem,delta));
} else {
throw cljs.core.missing_protocol("IMouseWheel.-mouse-wheel",elem);
}
}
}
});
membrane.ui._mouse_wheel = (function membrane$ui$_mouse_wheel(elem,delta){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IMouseWheel$_mouse_wheel$arity$2 == null)))))){
return elem.membrane$ui$IMouseWheel$_mouse_wheel$arity$2(elem,delta);
} else {
return membrane$ui$IMouseWheel$_mouse_wheel$dyn_47729(elem,delta);
}
});


/**
 * @interface
 */
membrane.ui.IKeyPress = function(){};

var membrane$ui$IKeyPress$_key_press$dyn_47755 = (function (elem,key){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._key_press[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(elem,key) : m__4429__auto__.call(null,elem,key));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-key-press","membrane.ui/-key-press",-1646973610,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(elem,key) : meta_impl__4427__auto__.call(null,elem,key));
} else {
var m__4426__auto__ = (membrane.ui._key_press["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(elem,key) : m__4426__auto__.call(null,elem,key));
} else {
throw cljs.core.missing_protocol("IKeyPress.-key-press",elem);
}
}
}
});
membrane.ui._key_press = (function membrane$ui$_key_press(elem,key){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IKeyPress$_key_press$arity$2 == null)))))){
return elem.membrane$ui$IKeyPress$_key_press$arity$2(elem,key);
} else {
return membrane$ui$IKeyPress$_key_press$dyn_47755(elem,key);
}
});


/**
 * @interface
 */
membrane.ui.IKeyType = function(){};

var membrane$ui$IKeyType$_key_type$dyn_47774 = (function (elem,key){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._key_type[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(elem,key) : m__4429__auto__.call(null,elem,key));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-key-type","membrane.ui/-key-type",38252186,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(elem,key) : meta_impl__4427__auto__.call(null,elem,key));
} else {
var m__4426__auto__ = (membrane.ui._key_type["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(elem,key) : m__4426__auto__.call(null,elem,key));
} else {
throw cljs.core.missing_protocol("IKeyType.-key-type",elem);
}
}
}
});
membrane.ui._key_type = (function membrane$ui$_key_type(elem,key){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IKeyType$_key_type$arity$2 == null)))))){
return elem.membrane$ui$IKeyType$_key_type$arity$2(elem,key);
} else {
return membrane$ui$IKeyType$_key_type$dyn_47774(elem,key);
}
});


/**
 * @interface
 */
membrane.ui.IClipboardPaste = function(){};

var membrane$ui$IClipboardPaste$_clipboard_paste$dyn_47785 = (function (elem,contents){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._clipboard_paste[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(elem,contents) : m__4429__auto__.call(null,elem,contents));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-clipboard-paste","membrane.ui/-clipboard-paste",-1243234897,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(elem,contents) : meta_impl__4427__auto__.call(null,elem,contents));
} else {
var m__4426__auto__ = (membrane.ui._clipboard_paste["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(elem,contents) : m__4426__auto__.call(null,elem,contents));
} else {
throw cljs.core.missing_protocol("IClipboardPaste.-clipboard-paste",elem);
}
}
}
});
membrane.ui._clipboard_paste = (function membrane$ui$_clipboard_paste(elem,contents){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IClipboardPaste$_clipboard_paste$arity$2 == null)))))){
return elem.membrane$ui$IClipboardPaste$_clipboard_paste$arity$2(elem,contents);
} else {
return membrane$ui$IClipboardPaste$_clipboard_paste$dyn_47785(elem,contents);
}
});


/**
 * @interface
 */
membrane.ui.IClipboardCopy = function(){};

var membrane$ui$IClipboardCopy$_clipboard_copy$dyn_47805 = (function (elem){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._clipboard_copy[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4429__auto__.call(null,elem));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-clipboard-copy","membrane.ui/-clipboard-copy",-46946392,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1(elem) : meta_impl__4427__auto__.call(null,elem));
} else {
var m__4426__auto__ = (membrane.ui._clipboard_copy["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4426__auto__.call(null,elem));
} else {
throw cljs.core.missing_protocol("IClipboardCopy.-clipboard-copy",elem);
}
}
}
});
membrane.ui._clipboard_copy = (function membrane$ui$_clipboard_copy(elem){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IClipboardCopy$_clipboard_copy$arity$1 == null)))))){
return elem.membrane$ui$IClipboardCopy$_clipboard_copy$arity$1(elem);
} else {
return membrane$ui$IClipboardCopy$_clipboard_copy$dyn_47805(elem);
}
});


/**
 * @interface
 */
membrane.ui.IClipboardCut = function(){};

var membrane$ui$IClipboardCut$_clipboard_cut$dyn_47820 = (function (elem){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._clipboard_cut[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4429__auto__.call(null,elem));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-clipboard-cut","membrane.ui/-clipboard-cut",-2035956508,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1(elem) : meta_impl__4427__auto__.call(null,elem));
} else {
var m__4426__auto__ = (membrane.ui._clipboard_cut["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4426__auto__.call(null,elem));
} else {
throw cljs.core.missing_protocol("IClipboardCut.-clipboard-cut",elem);
}
}
}
});
membrane.ui._clipboard_cut = (function membrane$ui$_clipboard_cut(elem){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IClipboardCut$_clipboard_cut$arity$1 == null)))))){
return elem.membrane$ui$IClipboardCut$_clipboard_cut$arity$1(elem);
} else {
return membrane$ui$IClipboardCut$_clipboard_cut$dyn_47820(elem);
}
});


/**
 * @interface
 */
membrane.ui.IKeyEvent = function(){};

var membrane$ui$IKeyEvent$_key_event$dyn_47829 = (function (this$,key,scancode,action,mods){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (membrane.ui._key_event[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$5(this$,key,scancode,action,mods) : m__4429__auto__.call(null,this$,key,scancode,action,mods));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-key-event","membrane.ui/-key-event",-114383854,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$5 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$5(this$,key,scancode,action,mods) : meta_impl__4427__auto__.call(null,this$,key,scancode,action,mods));
} else {
var m__4426__auto__ = (membrane.ui._key_event["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$5(this$,key,scancode,action,mods) : m__4426__auto__.call(null,this$,key,scancode,action,mods));
} else {
throw cljs.core.missing_protocol("IKeyEvent.-key-event",this$);
}
}
}
});
membrane.ui._key_event = (function membrane$ui$_key_event(this$,key,scancode,action,mods){
if((((!((this$ == null)))) && ((!((this$.membrane$ui$IKeyEvent$_key_event$arity$5 == null)))))){
return this$.membrane$ui$IKeyEvent$_key_event$arity$5(this$,key,scancode,action,mods);
} else {
return membrane$ui$IKeyEvent$_key_event$dyn_47829(this$,key,scancode,action,mods);
}
});


/**
 * @interface
 */
membrane.ui.IHasKeyEvent = function(){};

var membrane$ui$IHasKeyEvent$has_key_event$dyn_47837 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (membrane.ui.has_key_event[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","has-key-event","membrane.ui/has-key-event",-329468149,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1(this$) : meta_impl__4427__auto__.call(null,this$));
} else {
var m__4426__auto__ = (membrane.ui.has_key_event["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHasKeyEvent.has-key-event",this$);
}
}
}
});
membrane.ui.has_key_event = (function membrane$ui$has_key_event(this$){
if((((!((this$ == null)))) && ((!((this$.membrane$ui$IHasKeyEvent$has_key_event$arity$1 == null)))))){
return this$.membrane$ui$IHasKeyEvent$has_key_event$arity$1(this$);
} else {
return membrane$ui$IHasKeyEvent$has_key_event$dyn_47837(this$);
}
});


/**
 * @interface
 */
membrane.ui.IHasKeyPress = function(){};

var membrane$ui$IHasKeyPress$has_key_press$dyn_47849 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (membrane.ui.has_key_press[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","has-key-press","membrane.ui/has-key-press",764978674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1(this$) : meta_impl__4427__auto__.call(null,this$));
} else {
var m__4426__auto__ = (membrane.ui.has_key_press["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHasKeyPress.has-key-press",this$);
}
}
}
});
membrane.ui.has_key_press = (function membrane$ui$has_key_press(this$){
if((((!((this$ == null)))) && ((!((this$.membrane$ui$IHasKeyPress$has_key_press$arity$1 == null)))))){
return this$.membrane$ui$IHasKeyPress$has_key_press$arity$1(this$);
} else {
return membrane$ui$IHasKeyPress$has_key_press$dyn_47849(this$);
}
});


/**
 * @interface
 */
membrane.ui.IHasMouseMoveGlobal = function(){};

var membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$dyn_47875 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (membrane.ui.has_mouse_move_global[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","has-mouse-move-global","membrane.ui/has-mouse-move-global",1113843244,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1(this$) : meta_impl__4427__auto__.call(null,this$));
} else {
var m__4426__auto__ = (membrane.ui.has_mouse_move_global["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHasMouseMoveGlobal.has-mouse-move-global",this$);
}
}
}
});
membrane.ui.has_mouse_move_global = (function membrane$ui$has_mouse_move_global(this$){
if((((!((this$ == null)))) && ((!((this$.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 == null)))))){
return this$.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1(this$);
} else {
return membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$dyn_47875(this$);
}
});


/**
 * Allows an element add, remove, modify effects emitted from its children.
 * @interface
 */
membrane.ui.IBubble = function(){};

var membrane$ui$IBubble$_bubble$dyn_47877 = (function (_,effects){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (membrane.ui._bubble[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,effects) : m__4429__auto__.call(null,_,effects));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(_),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-bubble","membrane.ui/-bubble",25759148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(_,effects) : meta_impl__4427__auto__.call(null,_,effects));
} else {
var m__4426__auto__ = (membrane.ui._bubble["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,effects) : m__4426__auto__.call(null,_,effects));
} else {
throw cljs.core.missing_protocol("IBubble.-bubble",_);
}
}
}
});
/**
 * Called when an effect is being emitted by a child element. The parent element can either return the same effects or allow them to continue to bubble.
 */
membrane.ui._bubble = (function membrane$ui$_bubble(_,effects){
if((((!((_ == null)))) && ((!((_.membrane$ui$IBubble$_bubble$arity$2 == null)))))){
return _.membrane$ui$IBubble$_bubble$arity$2(_,effects);
} else {
return membrane$ui$IBubble$_bubble$dyn_47877(_,effects);
}
});


/**
 * @interface
 */
membrane.ui.IMakeNode = function(){};

var membrane$ui$IMakeNode$make_node$dyn_47878 = (function (node,childs){
var x__4428__auto__ = (((node == null))?null:node);
var m__4429__auto__ = (membrane.ui.make_node[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(node,childs) : m__4429__auto__.call(null,node,childs));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(node),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","make-node","membrane.ui/make-node",-644170780,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(node,childs) : meta_impl__4427__auto__.call(null,node,childs));
} else {
var m__4426__auto__ = (membrane.ui.make_node["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(node,childs) : m__4426__auto__.call(null,node,childs));
} else {
throw cljs.core.missing_protocol("IMakeNode.make-node",node);
}
}
}
});
membrane.ui.make_node = (function membrane$ui$make_node(node,childs){
if((((!((node == null)))) && ((!((node.membrane$ui$IMakeNode$make_node$arity$2 == null)))))){
return node.membrane$ui$IMakeNode$make_node$arity$2(node,childs);
} else {
return membrane$ui$IMakeNode$make_node$dyn_47878(node,childs);
}
});

(cljs.core.PersistentVector.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (node,childs){
var node__$1 = this;
return cljs.core.vec(childs);
}));

/**
 * @interface
 */
membrane.ui.IOrigin = function(){};

var membrane$ui$IOrigin$_origin$dyn_47879 = (function (elem){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._origin[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4429__auto__.call(null,elem));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-origin","membrane.ui/-origin",1868169449,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1(elem) : meta_impl__4427__auto__.call(null,elem));
} else {
var m__4426__auto__ = (membrane.ui._origin["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4426__auto__.call(null,elem));
} else {
throw cljs.core.missing_protocol("IOrigin.-origin",elem);
}
}
}
});
/**
 * Specifies the top left corner of a component's bounds
 * 
 *   The origin is vector or 2 numbers [x, y]
 */
membrane.ui._origin = (function membrane$ui$_origin(elem){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IOrigin$_origin$arity$1 == null)))))){
return elem.membrane$ui$IOrigin$_origin$arity$1(elem);
} else {
return membrane$ui$IOrigin$_origin$dyn_47879(elem);
}
});

(cljs.core.PersistentVector.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

goog.object.set(membrane.ui.IOrigin,"null",true);

goog.object.set(membrane.ui._origin,"null",(function (this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));
/**
 * Specifies the top left corner of a component's bounds
 * 
 *   The origin is vector or 2 numbers [x, y]
 */
membrane.ui.origin = (function membrane$ui$origin(elem){
return membrane.ui._origin(elem);
});
/**
 * Convience function for returning the x coordinate of elem's origin
 */
membrane.ui.origin_x = (function membrane$ui$origin_x(elem){
return cljs.core.first(membrane.ui.origin(elem));
});
/**
 * Convience function for returning the y coordinate of elem's origin
 */
membrane.ui.origin_y = (function membrane$ui$origin_y(elem){
return cljs.core.second(membrane.ui.origin(elem));
});
goog.object.set(membrane.ui.IHasKeyPress,"null",true);

goog.object.set(membrane.ui.has_key_press,"null",(function (this$){
return false;
}));

goog.object.set(membrane.ui.IHasMouseMoveGlobal,"null",true);

goog.object.set(membrane.ui.has_mouse_move_global,"null",(function (this$){
return false;
}));

goog.object.set(membrane.ui.IScroll,"null",true);

goog.object.set(membrane.ui._scroll,"null",(function (elem,offset,local_pos){
return null;
}));

goog.object.set(membrane.ui.IMouseEvent,"null",true);

goog.object.set(membrane.ui._mouse_event,"null",(function (elem,local_pos,button,mouse_down_QMARK_,mods){
return null;
}));

goog.object.set(membrane.ui.IKeyEvent,"null",true);

goog.object.set(membrane.ui._key_event,"null",(function (this$,key,scancode,action,mods){
return null;
}));

goog.object.set(membrane.ui.IKeyPress,"null",true);

goog.object.set(membrane.ui._key_press,"null",(function (this$,info){
return null;
}));

goog.object.set(membrane.ui.IBubble,"null",true);

goog.object.set(membrane.ui._bubble,"null",(function (elem,effects){
return null;
}));

goog.object.set(membrane.ui.IDrop,"null",true);

goog.object.set(membrane.ui._drop,"null",(function (elem,paths,local_pos){
return null;
}));

goog.object.set(membrane.ui.IMouseMoveGlobal,"null",true);

goog.object.set(membrane.ui._mouse_move_global,"null",(function (this$,info){
return null;
}));

goog.object.set(membrane.ui.IHasKeyEvent,"null",true);

goog.object.set(membrane.ui.has_key_event,"null",(function (this$){
return false;
}));
membrane.ui._default_mouse_move_global = (function membrane$ui$_default_mouse_move_global(elem,offset){
var vec__46143 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46143,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46143,(1),null);
var vec__46146 = offset;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46146,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46146,(1),null);
var child_offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - ox),(sy - oy)], null);
var intents = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function membrane$ui$_default_mouse_move_global_$_iter__46149(s__46150){
return (new cljs.core.LazySeq(null,(function (){
var s__46150__$1 = s__46150;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46150__$1);
if(temp__5753__auto__){
var s__46150__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46150__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46150__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46152 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46151 = (0);
while(true){
if((i__46151 < size__4528__auto__)){
var child = cljs.core._nth(c__4527__auto__,i__46151);
cljs.core.chunk_append(b__46152,membrane.ui._mouse_move_global(child,child_offset));

var G__47896 = (i__46151 + (1));
i__46151 = G__47896;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46152),membrane$ui$_default_mouse_move_global_$_iter__46149(cljs.core.chunk_rest(s__46150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46152),null);
}
} else {
var child = cljs.core.first(s__46150__$2);
return cljs.core.cons(membrane.ui._mouse_move_global(child,child_offset),membrane$ui$_default_mouse_move_global_$_iter__46149(cljs.core.rest(s__46150__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(elem) : membrane.ui.children.call(null,elem)));
})());
return membrane.ui._bubble(elem,intents);
});
membrane.ui.within_bounds_QMARK_ = (function membrane$ui$within_bounds_QMARK_(elem,p__46153){
var vec__46154 = p__46153;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46154,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46154,(1),null);
var vec__46157 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46157,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46157,(1),null);
var vec__46160 = (membrane.ui.bounds.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.bounds.cljs$core$IFn$_invoke$arity$1(elem) : membrane.ui.bounds.call(null,elem));
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(1),null);
var local_x = (x - ox);
var local_y = (y - oy);
if((((local_x < width)) && ((local_x >= (0))) && ((local_y < height)) && ((local_y >= (0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [local_x,local_y], null);
} else {
return null;
}
});
goog.object.set(membrane.ui.IHasKeyPress,"_",true);

goog.object.set(membrane.ui.has_key_press,"_",(function (this$){
return cljs.core.some(membrane.ui.has_key_press,(membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(this$) : membrane.ui.children.call(null,this$)));
}));

goog.object.set(membrane.ui.IHasMouseMoveGlobal,"_",true);

goog.object.set(membrane.ui.has_mouse_move_global,"_",(function (this$){
return cljs.core.some(membrane.ui.has_mouse_move_global,(membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(this$) : membrane.ui.children.call(null,this$)));
}));

goog.object.set(membrane.ui.IScroll,"_",true);

goog.object.set(membrane.ui._scroll,"_",(function (elem,offset,local_pos){
var intents = cljs.core.some((function (p1__46165_SHARP_){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(p1__46165_SHARP_,local_pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos__$1 = temp__5753__auto__;
return cljs.core.seq(membrane.ui._scroll(p1__46165_SHARP_,offset,local_pos__$1));
} else {
return null;
}
}),cljs.core.reverse((membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(elem) : membrane.ui.children.call(null,elem))));
return membrane.ui._bubble(elem,intents);
}));

goog.object.set(membrane.ui.IMouseEvent,"_",true);

goog.object.set(membrane.ui._mouse_event,"_",(function (elem,local_pos,button,mouse_down_QMARK_,mods){
var intents = cljs.core.some((function (p1__46163_SHARP_){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(p1__46163_SHARP_,local_pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos__$1 = temp__5753__auto__;
return cljs.core.seq(membrane.ui._mouse_event(p1__46163_SHARP_,local_pos__$1,button,mouse_down_QMARK_,mods));
} else {
return null;
}
}),cljs.core.reverse((membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(elem) : membrane.ui.children.call(null,elem))));
return membrane.ui._bubble(elem,intents);
}));

goog.object.set(membrane.ui.IKeyEvent,"_",true);

goog.object.set(membrane.ui._key_event,"_",(function (this$,key,scancode,action,mods){
var intents = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46168_SHARP_){
return membrane.ui._key_event(p1__46168_SHARP_,key,scancode,action,mods);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(this$) : membrane.ui.children.call(null,this$))], 0));
return membrane.ui._bubble(this$,intents);
}));

goog.object.set(membrane.ui.IKeyPress,"_",true);

goog.object.set(membrane.ui._key_press,"_",(function (this$,info){
var intents = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__46167_SHARP_){
return membrane.ui._key_press(p1__46167_SHARP_,info);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(this$) : membrane.ui.children.call(null,this$))], 0));
return membrane.ui._bubble(this$,intents);
}));

goog.object.set(membrane.ui.IBubble,"_",true);

goog.object.set(membrane.ui._bubble,"_",(function (this$,intents){
return intents;
}));

goog.object.set(membrane.ui.IMouseMove,"_",true);

goog.object.set(membrane.ui._mouse_move,"_",(function (elem,local_pos){
var intents = cljs.core.some((function (p1__46164_SHARP_){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(p1__46164_SHARP_,local_pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos__$1 = temp__5753__auto__;
return cljs.core.seq(membrane.ui._mouse_move(p1__46164_SHARP_,local_pos__$1));
} else {
return null;
}
}),cljs.core.reverse((membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(elem) : membrane.ui.children.call(null,elem))));
return membrane.ui._bubble(elem,intents);
}));

goog.object.set(membrane.ui.IDrop,"_",true);

goog.object.set(membrane.ui._drop,"_",(function (elem,paths,local_pos){
var intents = cljs.core.some((function (p1__46166_SHARP_){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(p1__46166_SHARP_,local_pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos__$1 = temp__5753__auto__;
return cljs.core.seq(membrane.ui._drop(p1__46166_SHARP_,paths,local_pos__$1));
} else {
return null;
}
}),cljs.core.reverse((membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(elem) : membrane.ui.children.call(null,elem))));
return membrane.ui._bubble(elem,intents);
}));

goog.object.set(membrane.ui.IMouseMoveGlobal,"_",true);

goog.object.set(membrane.ui._mouse_move_global,"_",(function (this$,offset){
return membrane.ui._default_mouse_move_global(this$,offset);
}));

goog.object.set(membrane.ui.IHasKeyEvent,"_",true);

goog.object.set(membrane.ui.has_key_event,"_",(function (this$){
return cljs.core.some(membrane.ui.has_key_event,(membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(this$) : membrane.ui.children.call(null,this$)));
}));
membrane.ui.SHIFT_MASK = (1);
membrane.ui.CONTROL_MASK = (2);
membrane.ui.ALT_MASK = (4);
membrane.ui.SUPER_MASK = (8);
membrane.ui.CAPS_LOCK_MASK = (16);
membrane.ui.NUM_LOCK_MASK = (32);
if((typeof membrane !== 'undefined') && (typeof membrane.ui !== 'undefined') && (typeof membrane.ui.default_draw_impls !== 'undefined')){
} else {
membrane.ui.default_draw_impls = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,null,(function (draw){
return (function (this$){
return null;
});
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,cljs.core.PersistentVector,(function (draw){
return (function (this$){
var seq__46169 = cljs.core.seq(this$);
var chunk__46170 = null;
var count__46171 = (0);
var i__46172 = (0);
while(true){
if((i__46172 < count__46171)){
var drawable = chunk__46170.cljs$core$IIndexed$_nth$arity$2(null,i__46172);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__47957 = seq__46169;
var G__47958 = chunk__46170;
var G__47959 = count__46171;
var G__47960 = (i__46172 + (1));
seq__46169 = G__47957;
chunk__46170 = G__47958;
count__46171 = G__47959;
i__46172 = G__47960;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46169);
if(temp__5753__auto__){
var seq__46169__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46169__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46169__$1);
var G__47965 = cljs.core.chunk_rest(seq__46169__$1);
var G__47966 = c__4556__auto__;
var G__47967 = cljs.core.count(c__4556__auto__);
var G__47968 = (0);
seq__46169 = G__47965;
chunk__46170 = G__47966;
count__46171 = G__47967;
i__46172 = G__47968;
continue;
} else {
var drawable = cljs.core.first(seq__46169__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__47971 = cljs.core.next(seq__46169__$1);
var G__47972 = null;
var G__47973 = (0);
var G__47974 = (0);
seq__46169 = G__47971;
chunk__46170 = G__47972;
count__46171 = G__47973;
i__46172 = G__47974;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,new cljs.core.Keyword(null,"default","default",-1987822328),(function (draw){
return (function (this$){
var G__46173 = (membrane.ui.children.cljs$core$IFn$_invoke$arity$1 ? membrane.ui.children.cljs$core$IFn$_invoke$arity$1(this$) : membrane.ui.children.call(null,this$));
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__46173) : draw.call(null,G__46173));
});
}));

/**
 * @interface
 */
membrane.ui.IBounds = function(){};

var membrane$ui$IBounds$_bounds$dyn_47980 = (function (elem){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._bounds[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4429__auto__.call(null,elem));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-bounds","membrane.ui/-bounds",-86423648,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1(elem) : meta_impl__4427__auto__.call(null,elem));
} else {
var m__4426__auto__ = (membrane.ui._bounds["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4426__auto__.call(null,elem));
} else {
throw cljs.core.missing_protocol("IBounds.-bounds",elem);
}
}
}
});
/**
 * Returns a 2 element vector with the [width, height] of an element's bounds with respect to its origin
 */
membrane.ui._bounds = (function membrane$ui$_bounds(elem){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IBounds$_bounds$arity$1 == null)))))){
return elem.membrane$ui$IBounds$_bounds$arity$1(elem);
} else {
return membrane$ui$IBounds$_bounds$dyn_47980(elem);
}
});

/**
 * Returns a 2 element vector with the [width, height] of an element's bounds with respect to its origin
 */
membrane.ui.bounds = cljs.core.memoize((function (p1__46174_SHARP_){
return membrane.ui._bounds(p1__46174_SHARP_);
}));
membrane.ui.child_bounds = (function membrane$ui$child_bounds(elem){
var vec__46175 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46175,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46175,(1),null);
var vec__46178 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46178,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46178,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ox + w),(oy + h)], null);
});
(cljs.core.PersistentVector.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46181,elem){
var vec__46182 = p__46181;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46182,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46182,(1),null);
var vec__46185 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46185,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46185,(1),null);
var vec__46188 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46188,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46188,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),this$__$1);
}));

goog.object.set(membrane.ui.IBounds,"null",true);

goog.object.set(membrane.ui._bounds,"null",(function (this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));
/**
 * Returns a memoized version of a referentially transparent function. The
 *   memoized version of the function keeps a cache of the mapping from arguments
 *   to results and, when calls with the same arguments are repeated often, has
 *   higher performance at the expense of higher memory use.
 */
membrane.ui.memoize_var = (function membrane$ui$memoize_var(f){
var mem = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__48013__delegate = function (args){
var temp__5751__auto__ = cljs.core.find(cljs.core.deref(mem),args);
if(cljs.core.truth_(temp__5751__auto__)){
var e = temp__5751__auto__;
return cljs.core.val(e);
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
mem.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mem.cljs$core$IDeref$_deref$arity$1(null),args,ret));

return ret;
}
};
var G__48013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48017__i = 0, G__48017__a = new Array(arguments.length -  0);
while (G__48017__i < G__48017__a.length) {G__48017__a[G__48017__i] = arguments[G__48017__i + 0]; ++G__48017__i;}
  args = new cljs.core.IndexedSeq(G__48017__a,0,null);
} 
return G__48013__delegate.call(this,args);};
G__48013.cljs$lang$maxFixedArity = 0;
G__48013.cljs$lang$applyTo = (function (arglist__48020){
var args = cljs.core.seq(arglist__48020);
return G__48013__delegate(args);
});
G__48013.cljs$core$IFn$_invoke$arity$variadic = G__48013__delegate;
return G__48013;
})()
;
});

/**
 * @interface
 */
membrane.ui.IChildren = function(){};

var membrane$ui$IChildren$_children$dyn_48022 = (function (elem){
var x__4428__auto__ = (((elem == null))?null:elem);
var m__4429__auto__ = (membrane.ui._children[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4429__auto__.call(null,elem));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(elem),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-children","membrane.ui/-children",663481952,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$1(elem) : meta_impl__4427__auto__.call(null,elem));
} else {
var m__4426__auto__ = (membrane.ui._children["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(elem) : m__4426__auto__.call(null,elem));
} else {
throw cljs.core.missing_protocol("IChildren.-children",elem);
}
}
}
});
/**
 * Returns sub elements of elem. Useful for traversal.
 */
membrane.ui._children = (function membrane$ui$_children(elem){
if((((!((elem == null)))) && ((!((elem.membrane$ui$IChildren$_children$arity$1 == null)))))){
return elem.membrane$ui$IChildren$_children$arity$1(elem);
} else {
return membrane$ui$IChildren$_children$dyn_48022(elem);
}
});

(cljs.core.PersistentVector.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(membrane.ui.IChildren,"null",true);

goog.object.set(membrane.ui._children,"null",(function (this$){
return null;
}));
goog.object.set(membrane.ui.IChildren,"_",true);

goog.object.set(membrane.ui._children,"_",(function (this$){
return null;
}));
/**
 * Returns sub elements of elem. Useful for traversal.
 */
membrane.ui.children = (function membrane$ui$children(elem){
return membrane.ui._children(elem);
});
/**
 * Returns the width of elem.
 */
membrane.ui.width = (function membrane$ui$width(elem){
var vec__46191 = membrane.ui.bounds(elem);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46191,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46191,(1),null);
return width;
});
/**
 * Returns the height of elem.
 */
membrane.ui.height = (function membrane$ui$height(elem){
var vec__46194 = membrane.ui.bounds(elem);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46194,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46194,(1),null);
return height;
});
/**
 * Returns the effects of a mouse move event on elem. Will only call -mouse-move on mouse events within an elements bounds.
 */
membrane.ui.mouse_move = (function membrane$ui$mouse_move(elem,pos){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(elem,pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos = temp__5753__auto__;
return membrane.ui._mouse_move(elem,local_pos);
} else {
return null;
}
});
/**
 * Returns the effects of a mouse move event on elem. Will -mouse-move-global for all elements and their children.
 */
membrane.ui.mouse_move_global = (function membrane$ui$mouse_move_global(elem,global_pos){
return membrane.ui._mouse_move_global(elem,global_pos);
});
membrane.ui.mouse_event = (function membrane$ui$mouse_event(elem,pos,button,mouse_down_QMARK_,mods){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(elem,pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos = temp__5753__auto__;
return membrane.ui._mouse_event(elem,local_pos,button,mouse_down_QMARK_,mods);
} else {
return null;
}
});
/**
 * Returns the effects of a mouse down event on elem. Will only call -mouse-event or -mouse-down if the position is in the element's bounds.
 */
membrane.ui.mouse_down = (function membrane$ui$mouse_down(elem,p__46197){
var vec__46198 = p__46197;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46198,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46198,(1),null);
var pos = vec__46198;
return membrane.ui.mouse_event(elem,pos,(0),true,(0));
});
/**
 * Returns the effects of a mouse up event on elem. Will only call -mouse-event or -mouse-down if the position is in the element's bounds.
 */
membrane.ui.mouse_up = (function membrane$ui$mouse_up(elem,p__46201){
var vec__46202 = p__46201;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46202,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46202,(1),null);
var pos = vec__46202;
return membrane.ui.mouse_event(elem,pos,(0),false,(0));
});
membrane.ui.drop = (function membrane$ui$drop(elem,paths,pos){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(elem,pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos = temp__5753__auto__;
return membrane.ui._drop(elem,paths,local_pos);
} else {
return null;
}
});
membrane.ui.scroll = (function membrane$ui$scroll(elem,offset,pos){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(elem,pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos = temp__5753__auto__;
return membrane.ui._scroll(elem,offset,local_pos);
} else {
return null;
}
});
/**
 * Returns the effects of a key press event on elem.
 * @param {...*} var_args
 */
membrane.ui.key_press = (function() { 
var membrane$ui$handler__44140__auto____delegate = function (elem__44141__auto__,args__44142__auto__){
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IKeyPress$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IKeyPress,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IKeyPress,elem__44141__auto__))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane.ui._key_press,elem__44141__auto__,args__44142__auto__);
} else {
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IChildren$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__))){
var intents__44143__auto__ = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44139__44144__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane$ui$handler__44140__auto__,p1__44139__44144__auto__,args__44142__auto__);
})),cljs.core.into,cljs.core.PersistentVector.EMPTY,membrane.ui.children(elem__44141__auto__));
return membrane.ui._bubble(elem__44141__auto__,intents__44143__auto__);
} else {
return null;
}
}
};
var membrane$ui$handler__44140__auto__ = function (elem__44141__auto__,var_args){
var args__44142__auto__ = null;
if (arguments.length > 1) {
var G__48050__i = 0, G__48050__a = new Array(arguments.length -  1);
while (G__48050__i < G__48050__a.length) {G__48050__a[G__48050__i] = arguments[G__48050__i + 1]; ++G__48050__i;}
  args__44142__auto__ = new cljs.core.IndexedSeq(G__48050__a,0,null);
} 
return membrane$ui$handler__44140__auto____delegate.call(this,elem__44141__auto__,args__44142__auto__);};
membrane$ui$handler__44140__auto__.cljs$lang$maxFixedArity = 1;
membrane$ui$handler__44140__auto__.cljs$lang$applyTo = (function (arglist__48051){
var elem__44141__auto__ = cljs.core.first(arglist__48051);
var args__44142__auto__ = cljs.core.rest(arglist__48051);
return membrane$ui$handler__44140__auto____delegate(elem__44141__auto__,args__44142__auto__);
});
membrane$ui$handler__44140__auto__.cljs$core$IFn$_invoke$arity$variadic = membrane$ui$handler__44140__auto____delegate;
return membrane$ui$handler__44140__auto__;
})()
;
/**
 * Returns the effects of a key event on elem.
 * @param {...*} var_args
 */
membrane.ui.key_event = (function() { 
var membrane$ui$handler__44140__auto____delegate = function (elem__44141__auto__,args__44142__auto__){
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IKeyEvent$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IKeyEvent,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IKeyEvent,elem__44141__auto__))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane.ui._key_event,elem__44141__auto__,args__44142__auto__);
} else {
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IChildren$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__))){
var intents__44143__auto__ = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44139__44144__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane$ui$handler__44140__auto__,p1__44139__44144__auto__,args__44142__auto__);
})),cljs.core.into,cljs.core.PersistentVector.EMPTY,membrane.ui.children(elem__44141__auto__));
return membrane.ui._bubble(elem__44141__auto__,intents__44143__auto__);
} else {
return null;
}
}
};
var membrane$ui$handler__44140__auto__ = function (elem__44141__auto__,var_args){
var args__44142__auto__ = null;
if (arguments.length > 1) {
var G__48052__i = 0, G__48052__a = new Array(arguments.length -  1);
while (G__48052__i < G__48052__a.length) {G__48052__a[G__48052__i] = arguments[G__48052__i + 1]; ++G__48052__i;}
  args__44142__auto__ = new cljs.core.IndexedSeq(G__48052__a,0,null);
} 
return membrane$ui$handler__44140__auto____delegate.call(this,elem__44141__auto__,args__44142__auto__);};
membrane$ui$handler__44140__auto__.cljs$lang$maxFixedArity = 1;
membrane$ui$handler__44140__auto__.cljs$lang$applyTo = (function (arglist__48053){
var elem__44141__auto__ = cljs.core.first(arglist__48053);
var args__44142__auto__ = cljs.core.rest(arglist__48053);
return membrane$ui$handler__44140__auto____delegate(elem__44141__auto__,args__44142__auto__);
});
membrane$ui$handler__44140__auto__.cljs$core$IFn$_invoke$arity$variadic = membrane$ui$handler__44140__auto____delegate;
return membrane$ui$handler__44140__auto__;
})()
;
/**
 * Returns the effects of a clipboard cut event on elem.
 * @param {...*} var_args
 */
membrane.ui.clipboard_cut = (function() { 
var membrane$ui$handler__44140__auto____delegate = function (elem__44141__auto__,args__44142__auto__){
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IClipboardCut$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IClipboardCut,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IClipboardCut,elem__44141__auto__))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane.ui._clipboard_cut,elem__44141__auto__,args__44142__auto__);
} else {
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IChildren$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__))){
var intents__44143__auto__ = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44139__44144__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane$ui$handler__44140__auto__,p1__44139__44144__auto__,args__44142__auto__);
})),cljs.core.into,cljs.core.PersistentVector.EMPTY,membrane.ui.children(elem__44141__auto__));
return membrane.ui._bubble(elem__44141__auto__,intents__44143__auto__);
} else {
return null;
}
}
};
var membrane$ui$handler__44140__auto__ = function (elem__44141__auto__,var_args){
var args__44142__auto__ = null;
if (arguments.length > 1) {
var G__48054__i = 0, G__48054__a = new Array(arguments.length -  1);
while (G__48054__i < G__48054__a.length) {G__48054__a[G__48054__i] = arguments[G__48054__i + 1]; ++G__48054__i;}
  args__44142__auto__ = new cljs.core.IndexedSeq(G__48054__a,0,null);
} 
return membrane$ui$handler__44140__auto____delegate.call(this,elem__44141__auto__,args__44142__auto__);};
membrane$ui$handler__44140__auto__.cljs$lang$maxFixedArity = 1;
membrane$ui$handler__44140__auto__.cljs$lang$applyTo = (function (arglist__48055){
var elem__44141__auto__ = cljs.core.first(arglist__48055);
var args__44142__auto__ = cljs.core.rest(arglist__48055);
return membrane$ui$handler__44140__auto____delegate(elem__44141__auto__,args__44142__auto__);
});
membrane$ui$handler__44140__auto__.cljs$core$IFn$_invoke$arity$variadic = membrane$ui$handler__44140__auto____delegate;
return membrane$ui$handler__44140__auto__;
})()
;
/**
 * Returns the effects of a clipboard copy event on elem.
 * @param {...*} var_args
 */
membrane.ui.clipboard_copy = (function() { 
var membrane$ui$handler__44140__auto____delegate = function (elem__44141__auto__,args__44142__auto__){
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IClipboardCopy$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IClipboardCopy,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IClipboardCopy,elem__44141__auto__))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane.ui._clipboard_copy,elem__44141__auto__,args__44142__auto__);
} else {
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IChildren$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__))){
var intents__44143__auto__ = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44139__44144__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane$ui$handler__44140__auto__,p1__44139__44144__auto__,args__44142__auto__);
})),cljs.core.into,cljs.core.PersistentVector.EMPTY,membrane.ui.children(elem__44141__auto__));
return membrane.ui._bubble(elem__44141__auto__,intents__44143__auto__);
} else {
return null;
}
}
};
var membrane$ui$handler__44140__auto__ = function (elem__44141__auto__,var_args){
var args__44142__auto__ = null;
if (arguments.length > 1) {
var G__48062__i = 0, G__48062__a = new Array(arguments.length -  1);
while (G__48062__i < G__48062__a.length) {G__48062__a[G__48062__i] = arguments[G__48062__i + 1]; ++G__48062__i;}
  args__44142__auto__ = new cljs.core.IndexedSeq(G__48062__a,0,null);
} 
return membrane$ui$handler__44140__auto____delegate.call(this,elem__44141__auto__,args__44142__auto__);};
membrane$ui$handler__44140__auto__.cljs$lang$maxFixedArity = 1;
membrane$ui$handler__44140__auto__.cljs$lang$applyTo = (function (arglist__48063){
var elem__44141__auto__ = cljs.core.first(arglist__48063);
var args__44142__auto__ = cljs.core.rest(arglist__48063);
return membrane$ui$handler__44140__auto____delegate(elem__44141__auto__,args__44142__auto__);
});
membrane$ui$handler__44140__auto__.cljs$core$IFn$_invoke$arity$variadic = membrane$ui$handler__44140__auto____delegate;
return membrane$ui$handler__44140__auto__;
})()
;
/**
 * Returns the effects of a clipboard paste event on elem.
 * @param {...*} var_args
 */
membrane.ui.clipboard_paste = (function() { 
var membrane$ui$handler__44140__auto____delegate = function (elem__44141__auto__,args__44142__auto__){
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IClipboardPaste$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IClipboardPaste,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IClipboardPaste,elem__44141__auto__))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane.ui._clipboard_paste,elem__44141__auto__,args__44142__auto__);
} else {
if((((!((elem__44141__auto__ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === elem__44141__auto__.membrane$ui$IChildren$))))?true:(((!elem__44141__auto__.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__):false)):cljs.core.native_satisfies_QMARK_(membrane.ui.IChildren,elem__44141__auto__))){
var intents__44143__auto__ = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44139__44144__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(membrane$ui$handler__44140__auto__,p1__44139__44144__auto__,args__44142__auto__);
})),cljs.core.into,cljs.core.PersistentVector.EMPTY,membrane.ui.children(elem__44141__auto__));
return membrane.ui._bubble(elem__44141__auto__,intents__44143__auto__);
} else {
return null;
}
}
};
var membrane$ui$handler__44140__auto__ = function (elem__44141__auto__,var_args){
var args__44142__auto__ = null;
if (arguments.length > 1) {
var G__48064__i = 0, G__48064__a = new Array(arguments.length -  1);
while (G__48064__i < G__48064__a.length) {G__48064__a[G__48064__i] = arguments[G__48064__i + 1]; ++G__48064__i;}
  args__44142__auto__ = new cljs.core.IndexedSeq(G__48064__a,0,null);
} 
return membrane$ui$handler__44140__auto____delegate.call(this,elem__44141__auto__,args__44142__auto__);};
membrane$ui$handler__44140__auto__.cljs$lang$maxFixedArity = 1;
membrane$ui$handler__44140__auto__.cljs$lang$applyTo = (function (arglist__48065){
var elem__44141__auto__ = cljs.core.first(arglist__48065);
var args__44142__auto__ = cljs.core.rest(arglist__48065);
return membrane$ui$handler__44140__auto____delegate(elem__44141__auto__,args__44142__auto__);
});
membrane$ui$handler__44140__auto__.cljs$core$IFn$_invoke$arity$variadic = membrane$ui$handler__44140__auto____delegate;
return membrane$ui$handler__44140__auto__;
})()
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
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
membrane.ui.Label = (function (text,font,__meta,__extmap,__hash){
this.text = text;
this.font = font;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Label.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Label.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46222,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46226 = k46222;
var G__46226__$1 = (((G__46226 instanceof cljs.core.Keyword))?G__46226.fqn:null);
switch (G__46226__$1) {
case "text":
return self__.text;

break;
case "font":
return self__.font;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46222,else__4383__auto__);

}
}));

(membrane.ui.Label.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46227){
var vec__46228 = p__46227;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46228,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46228,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Label.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Label{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font","font",-1506159249),self__.font],null))], null),self__.__extmap));
}));

(membrane.ui.Label.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46221){
var self__ = this;
var G__46221__$1 = this;
return (new cljs.core.RecordIter((0),G__46221__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"font","font",-1506159249)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Label.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Label.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Label(self__.text,self__.font,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Label.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Label.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1431250007 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Label.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46223,other46224){
var self__ = this;
var this46223__$1 = this;
return (((!((other46224 == null)))) && ((this46223__$1.constructor === other46224.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46223__$1.text,other46224.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46223__$1.font,other46224.font)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46223__$1.__extmap,other46224.__extmap)));
}));

(membrane.ui.Label.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Label.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Label.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Label(self__.text,self__.font,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Label.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46221){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46231 = cljs.core.keyword_identical_QMARK_;
var expr__46232 = k__4388__auto__;
if(cljs.core.truth_((pred__46231.cljs$core$IFn$_invoke$arity$2 ? pred__46231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),expr__46232) : pred__46231.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__46232)))){
return (new membrane.ui.Label(G__46221,self__.font,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46231.cljs$core$IFn$_invoke$arity$2 ? pred__46231.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font","font",-1506159249),expr__46232) : pred__46231.call(null,new cljs.core.Keyword(null,"font","font",-1506159249),expr__46232)))){
return (new membrane.ui.Label(self__.text,G__46221,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Label(self__.text,self__.font,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46221),null));
}
}
}));

(membrane.ui.Label.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"font","font",-1506159249),self__.font,null))], null),self__.__extmap));
}));

(membrane.ui.Label.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46221){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Label(self__.text,self__.font,G__46221,self__.__extmap,self__.__hash));
}));

(membrane.ui.Label.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Label.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"font","font",134372278,null)], null);
}));

(membrane.ui.Label.cljs$lang$type = true);

(membrane.ui.Label.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Label",null,(1),null));
}));

(membrane.ui.Label.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Label");
}));

/**
 * Positional factory function for membrane.ui/Label.
 */
membrane.ui.__GT_Label = (function membrane$ui$__GT_Label(text,font){
return (new membrane.ui.Label(text,font,null,null,null));
});

/**
 * Factory function for membrane.ui/Label, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Label = (function membrane$ui$map__GT_Label(G__46225){
var extmap__4419__auto__ = (function (){var G__46234 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46225,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font","font",-1506159249)], 0));
if(cljs.core.record_QMARK_(G__46225)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46234);
} else {
return G__46234;
}
})();
return (new membrane.ui.Label(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__46225),new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(G__46225),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Graphical elem that can draw text.
 * 
 *   label will use the default line spacing for newline.
 *   font should be a membrane.ui.Font
 */
membrane.ui.label = (function membrane$ui$label(var_args){
var G__46236 = arguments.length;
switch (G__46236) {
case 1:
return membrane.ui.label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return membrane.ui.label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.ui.label.cljs$core$IFn$_invoke$arity$1 = (function (text){
return membrane.ui.label.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),membrane.ui.default_font);
}));

(membrane.ui.label.cljs$core$IFn$_invoke$arity$2 = (function (text,font){
return (new membrane.ui.Label(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),font,null,null,null));
}));

(membrane.ui.label.cljs$lang$maxFixedArity = 2);

membrane.ui.pr_label = (function membrane$ui$pr_label(var_args){
var G__46238 = arguments.length;
switch (G__46238) {
case 1:
return membrane.ui.pr_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return membrane.ui.pr_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return membrane.ui.pr_label.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.ui.pr_label.cljs$core$IFn$_invoke$arity$1 = (function (x){
return membrane.ui.pr_label.cljs$core$IFn$_invoke$arity$2(x,(30));
}));

(membrane.ui.pr_label.cljs$core$IFn$_invoke$arity$2 = (function (x,max_length){
return membrane.ui.pr_label.cljs$core$IFn$_invoke$arity$3(x,max_length,null);
}));

(membrane.ui.pr_label.cljs$core$IFn$_invoke$arity$3 = (function (x,max_length,font){
var s = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
var s__$1 = (cljs.core.truth_(max_length)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(function (){var x__4217__auto__ = max_length;
var y__4218__auto__ = ((s).length);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()):s);
return membrane.ui.label.cljs$core$IFn$_invoke$arity$2(s__$1,(function (){var or__4126__auto__ = font;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return membrane.ui.default_font;
}
})());
}));

(membrane.ui.pr_label.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
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
membrane.ui.TextSelection = (function (text,selection,font,__meta,__extmap,__hash){
this.text = text;
this.selection = selection;
this.font = font;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.TextSelection.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.TextSelection.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46240,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46244 = k46240;
var G__46244__$1 = (((G__46244 instanceof cljs.core.Keyword))?G__46244.fqn:null);
switch (G__46244__$1) {
case "text":
return self__.text;

break;
case "selection":
return self__.selection;

break;
case "font":
return self__.font;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46240,else__4383__auto__);

}
}));

(membrane.ui.TextSelection.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46245){
var vec__46246 = p__46245;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46246,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46246,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.TextSelection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.TextSelection{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selection","selection",975998651),self__.selection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font","font",-1506159249),self__.font],null))], null),self__.__extmap));
}));

(membrane.ui.TextSelection.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46239){
var self__ = this;
var G__46239__$1 = this;
return (new cljs.core.RecordIter((0),G__46239__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"font","font",-1506159249)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.TextSelection.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.TextSelection.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.TextSelection(self__.text,self__.selection,self__.font,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.TextSelection.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.TextSelection.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-112814428 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.TextSelection.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46241,other46242){
var self__ = this;
var this46241__$1 = this;
return (((!((other46242 == null)))) && ((this46241__$1.constructor === other46242.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46241__$1.text,other46242.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46241__$1.selection,other46242.selection)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46241__$1.font,other46242.font)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46241__$1.__extmap,other46242.__extmap)));
}));

(membrane.ui.TextSelection.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TextSelection.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.TextSelection.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"selection","selection",975998651),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.TextSelection(self__.text,self__.selection,self__.font,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.TextSelection.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46239){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46249 = cljs.core.keyword_identical_QMARK_;
var expr__46250 = k__4388__auto__;
if(cljs.core.truth_((pred__46249.cljs$core$IFn$_invoke$arity$2 ? pred__46249.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),expr__46250) : pred__46249.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__46250)))){
return (new membrane.ui.TextSelection(G__46239,self__.selection,self__.font,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46249.cljs$core$IFn$_invoke$arity$2 ? pred__46249.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selection","selection",975998651),expr__46250) : pred__46249.call(null,new cljs.core.Keyword(null,"selection","selection",975998651),expr__46250)))){
return (new membrane.ui.TextSelection(self__.text,G__46239,self__.font,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46249.cljs$core$IFn$_invoke$arity$2 ? pred__46249.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font","font",-1506159249),expr__46250) : pred__46249.call(null,new cljs.core.Keyword(null,"font","font",-1506159249),expr__46250)))){
return (new membrane.ui.TextSelection(self__.text,self__.selection,G__46239,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.TextSelection(self__.text,self__.selection,self__.font,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46239),null));
}
}
}
}));

(membrane.ui.TextSelection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"selection","selection",975998651),self__.selection,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"font","font",-1506159249),self__.font,null))], null),self__.__extmap));
}));

(membrane.ui.TextSelection.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46239){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.TextSelection(self__.text,self__.selection,self__.font,G__46239,self__.__extmap,self__.__hash));
}));

(membrane.ui.TextSelection.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.TextSelection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"selection","selection",-1678437118,null),new cljs.core.Symbol(null,"font","font",134372278,null)], null);
}));

(membrane.ui.TextSelection.cljs$lang$type = true);

(membrane.ui.TextSelection.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/TextSelection",null,(1),null));
}));

(membrane.ui.TextSelection.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/TextSelection");
}));

/**
 * Positional factory function for membrane.ui/TextSelection.
 */
membrane.ui.__GT_TextSelection = (function membrane$ui$__GT_TextSelection(text,selection,font){
return (new membrane.ui.TextSelection(text,selection,font,null,null,null));
});

/**
 * Factory function for membrane.ui/TextSelection, taking a map of keywords to field values.
 */
membrane.ui.map__GT_TextSelection = (function membrane$ui$map__GT_TextSelection(G__46243){
var extmap__4419__auto__ = (function (){var G__46252 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46243,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"font","font",-1506159249)], 0));
if(cljs.core.record_QMARK_(G__46243)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46252);
} else {
return G__46252;
}
})();
return (new membrane.ui.TextSelection(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__46243),new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(G__46243),new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(G__46243),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Graphical elem for drawing a selection of text.
 */
membrane.ui.text_selection = (function membrane$ui$text_selection(var_args){
var G__46254 = arguments.length;
switch (G__46254) {
case 2:
return membrane.ui.text_selection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return membrane.ui.text_selection.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.ui.text_selection.cljs$core$IFn$_invoke$arity$2 = (function (text,p__46255){
var vec__46256 = p__46255;
var selection_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46256,(0),null);
var selection_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46256,(1),null);
var selection = vec__46256;
return (new membrane.ui.TextSelection(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),selection,membrane.ui.default_font,null,null,null));
}));

(membrane.ui.text_selection.cljs$core$IFn$_invoke$arity$3 = (function (text,p__46259,font){
var vec__46260 = p__46259;
var selection_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46260,(0),null);
var selection_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46260,(1),null);
var selection = vec__46260;
return (new membrane.ui.TextSelection(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),selection,font,null,null,null));
}));

(membrane.ui.text_selection.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
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
membrane.ui.TextCursor = (function (text,cursor,font,__meta,__extmap,__hash){
this.text = text;
this.cursor = cursor;
this.font = font;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.TextCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.TextCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46264,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46268 = k46264;
var G__46268__$1 = (((G__46268 instanceof cljs.core.Keyword))?G__46268.fqn:null);
switch (G__46268__$1) {
case "text":
return self__.text;

break;
case "cursor":
return self__.cursor;

break;
case "font":
return self__.font;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46264,else__4383__auto__);

}
}));

(membrane.ui.TextCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46269){
var vec__46270 = p__46269;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46270,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46270,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.TextCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.TextCursor{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cursor","cursor",1011937484),self__.cursor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"font","font",-1506159249),self__.font],null))], null),self__.__extmap));
}));

(membrane.ui.TextCursor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46263){
var self__ = this;
var G__46263__$1 = this;
return (new cljs.core.RecordIter((0),G__46263__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"font","font",-1506159249)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.TextCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.TextCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.TextCursor(self__.text,self__.cursor,self__.font,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.TextCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.TextCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (976138570 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.TextCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46265,other46266){
var self__ = this;
var this46265__$1 = this;
return (((!((other46266 == null)))) && ((this46265__$1.constructor === other46266.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46265__$1.text,other46266.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46265__$1.cursor,other46266.cursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46265__$1.font,other46266.font)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46265__$1.__extmap,other46266.__extmap)));
}));

(membrane.ui.TextCursor.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TextCursor.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.TextCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),null,new cljs.core.Keyword(null,"font","font",-1506159249),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.TextCursor(self__.text,self__.cursor,self__.font,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.TextCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46263){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46273 = cljs.core.keyword_identical_QMARK_;
var expr__46274 = k__4388__auto__;
if(cljs.core.truth_((pred__46273.cljs$core$IFn$_invoke$arity$2 ? pred__46273.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),expr__46274) : pred__46273.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__46274)))){
return (new membrane.ui.TextCursor(G__46263,self__.cursor,self__.font,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46273.cljs$core$IFn$_invoke$arity$2 ? pred__46273.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cursor","cursor",1011937484),expr__46274) : pred__46273.call(null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),expr__46274)))){
return (new membrane.ui.TextCursor(self__.text,G__46263,self__.font,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46273.cljs$core$IFn$_invoke$arity$2 ? pred__46273.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font","font",-1506159249),expr__46274) : pred__46273.call(null,new cljs.core.Keyword(null,"font","font",-1506159249),expr__46274)))){
return (new membrane.ui.TextCursor(self__.text,self__.cursor,G__46263,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.TextCursor(self__.text,self__.cursor,self__.font,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46263),null));
}
}
}
}));

(membrane.ui.TextCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cursor","cursor",1011937484),self__.cursor,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"font","font",-1506159249),self__.font,null))], null),self__.__extmap));
}));

(membrane.ui.TextCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46263){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.TextCursor(self__.text,self__.cursor,self__.font,G__46263,self__.__extmap,self__.__hash));
}));

(membrane.ui.TextCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.TextCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null),new cljs.core.Symbol(null,"font","font",134372278,null)], null);
}));

(membrane.ui.TextCursor.cljs$lang$type = true);

(membrane.ui.TextCursor.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/TextCursor",null,(1),null));
}));

(membrane.ui.TextCursor.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/TextCursor");
}));

/**
 * Positional factory function for membrane.ui/TextCursor.
 */
membrane.ui.__GT_TextCursor = (function membrane$ui$__GT_TextCursor(text,cursor,font){
return (new membrane.ui.TextCursor(text,cursor,font,null,null,null));
});

/**
 * Factory function for membrane.ui/TextCursor, taking a map of keywords to field values.
 */
membrane.ui.map__GT_TextCursor = (function membrane$ui$map__GT_TextCursor(G__46267){
var extmap__4419__auto__ = (function (){var G__46276 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46267,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"font","font",-1506159249)], 0));
if(cljs.core.record_QMARK_(G__46267)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46276);
} else {
return G__46276;
}
})();
return (new membrane.ui.TextCursor(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__46267),new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(G__46267),new cljs.core.Keyword(null,"font","font",-1506159249).cljs$core$IFn$_invoke$arity$1(G__46267),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Graphical elem that can draw a text cursor
 * 
 * font should be a membrane.ui.Font
 */
membrane.ui.text_cursor = (function membrane$ui$text_cursor(var_args){
var G__46278 = arguments.length;
switch (G__46278) {
case 2:
return membrane.ui.text_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return membrane.ui.text_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.ui.text_cursor.cljs$core$IFn$_invoke$arity$2 = (function (text,cursor){
return (new membrane.ui.TextCursor(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cursor,membrane.ui.default_font,null,null,null));
}));

(membrane.ui.text_cursor.cljs$core$IFn$_invoke$arity$3 = (function (text,cursor,font){
return (new membrane.ui.TextCursor(cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cursor,font,null,null,null));
}));

(membrane.ui.text_cursor.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Image = (function (image_path,size,opacity,__meta,__extmap,__hash){
this.image_path = image_path;
this.size = size;
this.opacity = opacity;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Image.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Image.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46280,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46284 = k46280;
var G__46284__$1 = (((G__46284 instanceof cljs.core.Keyword))?G__46284.fqn:null);
switch (G__46284__$1) {
case "image-path":
return self__.image_path;

break;
case "size":
return self__.size;

break;
case "opacity":
return self__.opacity;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46280,else__4383__auto__);

}
}));

(membrane.ui.Image.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46285){
var vec__46286 = p__46285;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46286,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46286,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Image.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Image{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"image-path","image-path",-348638603),self__.image_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"opacity","opacity",397153780),self__.opacity],null))], null),self__.__extmap));
}));

(membrane.ui.Image.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46279){
var self__ = this;
var G__46279__$1 = this;
return (new cljs.core.RecordIter((0),G__46279__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image-path","image-path",-348638603),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"opacity","opacity",397153780)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Image.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Image.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.size;
}));

(membrane.ui.Image.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Image.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Image(self__.image_path,self__.size,self__.opacity,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Image.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Image.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1465189816 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Image.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46281,other46282){
var self__ = this;
var this46281__$1 = this;
return (((!((other46282 == null)))) && ((this46281__$1.constructor === other46282.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46281__$1.image_path,other46282.image_path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46281__$1.size,other46282.size)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46281__$1.opacity,other46282.opacity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46281__$1.__extmap,other46282.__extmap)));
}));

(membrane.ui.Image.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Image.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Image.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"image-path","image-path",-348638603),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Image(self__.image_path,self__.size,self__.opacity,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Image.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46279){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46289 = cljs.core.keyword_identical_QMARK_;
var expr__46290 = k__4388__auto__;
if(cljs.core.truth_((pred__46289.cljs$core$IFn$_invoke$arity$2 ? pred__46289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"image-path","image-path",-348638603),expr__46290) : pred__46289.call(null,new cljs.core.Keyword(null,"image-path","image-path",-348638603),expr__46290)))){
return (new membrane.ui.Image(G__46279,self__.size,self__.opacity,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46289.cljs$core$IFn$_invoke$arity$2 ? pred__46289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"size","size",1098693007),expr__46290) : pred__46289.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__46290)))){
return (new membrane.ui.Image(self__.image_path,G__46279,self__.opacity,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46289.cljs$core$IFn$_invoke$arity$2 ? pred__46289.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opacity","opacity",397153780),expr__46290) : pred__46289.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780),expr__46290)))){
return (new membrane.ui.Image(self__.image_path,self__.size,G__46279,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Image(self__.image_path,self__.size,self__.opacity,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46279),null));
}
}
}
}));

(membrane.ui.Image.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"image-path","image-path",-348638603),self__.image_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"size","size",1098693007),self__.size,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"opacity","opacity",397153780),self__.opacity,null))], null),self__.__extmap));
}));

(membrane.ui.Image.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46279){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Image(self__.image_path,self__.size,self__.opacity,G__46279,self__.__extmap,self__.__hash));
}));

(membrane.ui.Image.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Image.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"image-path","image-path",1291892924,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"opacity","opacity",2037685307,null)], null);
}));

(membrane.ui.Image.cljs$lang$type = true);

(membrane.ui.Image.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Image",null,(1),null));
}));

(membrane.ui.Image.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Image");
}));

/**
 * Positional factory function for membrane.ui/Image.
 */
membrane.ui.__GT_Image = (function membrane$ui$__GT_Image(image_path,size,opacity){
return (new membrane.ui.Image(image_path,size,opacity,null,null,null));
});

/**
 * Factory function for membrane.ui/Image, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Image = (function membrane$ui$map__GT_Image(G__46283){
var extmap__4419__auto__ = (function (){var G__46292 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46283,new cljs.core.Keyword(null,"image-path","image-path",-348638603),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"opacity","opacity",397153780)], 0));
if(cljs.core.record_QMARK_(G__46283)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46292);
} else {
return G__46292;
}
})();
return (new membrane.ui.Image(new cljs.core.Keyword(null,"image-path","image-path",-348638603).cljs$core$IFn$_invoke$arity$1(G__46283),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__46283),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(G__46283),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

membrane.ui.image_size = (function membrane$ui$image_size(image_path){
throw (new Error(["Assert failed: ","image size should be replaced by implementation","\n","false"].join('')));

});
/**
 * Graphical element that draws an image.
 * 
 *   `image-path`: using the skia backend, `image-path` can be one of
 *   - a string filename
 *   - a java.net.URL
 *   - a byte array containing the bytes of supported image format
 *   This is useful for drawing images included in a jar. Simply put your image in your resources folder, typically resources.
 *   Draw the images in the jar with `(ui/image (clojure.java.io/resource "filename.png"))`
 * 
 *   The image can be drawn at a different size by supplying a size.
 *   Supply a nil size will use the the original image size.
 * 
 *   The image can be aspect scaled by supply a size with one of the dimensions as nil.
 * 
 *   For example, to draw an image with width 30 with aspect scaling, `(image "path.png" [30 nil])`
 * 
 *   opacity is a float between 0 and 1.
 * 
 *   Allowable image formats may vary by platform, but will typically include png and jpeg.
 *   
 */
membrane.ui.image = (function membrane$ui$image(var_args){
var G__46294 = arguments.length;
switch (G__46294) {
case 1:
return membrane.ui.image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return membrane.ui.image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return membrane.ui.image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.ui.image.cljs$core$IFn$_invoke$arity$1 = (function (image_path){
return membrane.ui.image.cljs$core$IFn$_invoke$arity$3(image_path,null,null);
}));

(membrane.ui.image.cljs$core$IFn$_invoke$arity$2 = (function (image_path,p__46295){
var vec__46296 = p__46295;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46296,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46296,(1),null);
var size = vec__46296;
return membrane.ui.image.cljs$core$IFn$_invoke$arity$3(image_path,size,null);
}));

(membrane.ui.image.cljs$core$IFn$_invoke$arity$3 = (function (image_path,p__46299,opacity){
var vec__46300 = p__46299;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46300,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46300,(1),null);
var size = vec__46300;
var size__$1 = (((size == null))?membrane.ui.image_size(image_path):(function (){var vec__46303 = size;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46303,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46303,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = w;
if(cljs.core.truth_(and__4115__auto__)){
return h;
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = w;
if(cljs.core.truth_(and__4115__auto__)){
return (h == null);
} else {
return and__4115__auto__;
}
})())){
var vec__46306 = membrane.ui.image_size(image_path);
var actual_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46306,(0),null);
var actual_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46306,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,(actual_height * (w / (function (){var x__4214__auto__ = (1);
var y__4215__auto__ = actual_width;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()))], null);
} else {
if(cljs.core.truth_((((w == null))?h:false))){
var vec__46309 = membrane.ui.image_size(image_path);
var actual_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46309,(0),null);
var actual_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46309,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(actual_width * (h / (function (){var x__4214__auto__ = (1);
var y__4215__auto__ = actual_height;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})())),h], null);
} else {
return membrane.ui.image_size(image_path);

}
}
}
})());
var opacity__$1 = (((opacity == null))?(1):opacity);
return (new membrane.ui.Image(image_path,size__$1,opacity__$1,null,null,null));
}));

(membrane.ui.image.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Translate = (function (x,y,drawable,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Translate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Translate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46313,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46317 = k46313;
var G__46317__$1 = (((G__46317 instanceof cljs.core.Keyword))?G__46317.fqn:null);
switch (G__46317__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46313,else__4383__auto__);

}
}));

(membrane.ui.Translate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46318){
var vec__46319 = p__46318;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46319,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46319,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Translate.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Translate.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.Translate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Translate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.Translate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46312){
var self__ = this;
var G__46312__$1 = this;
return (new cljs.core.RecordIter((0),G__46312__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Translate.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Translate.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.child_bounds(self__.drawable);
}));

(membrane.ui.Translate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Translate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Translate(self__.x,self__.y,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Translate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Translate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (526052509 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Translate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46314,other46315){
var self__ = this;
var this46314__$1 = this;
return (((!((other46315 == null)))) && ((this46314__$1.constructor === other46315.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46314__$1.x,other46315.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46314__$1.y,other46315.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46314__$1.drawable,other46315.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46314__$1.__extmap,other46315.__extmap)));
}));

(membrane.ui.Translate.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Translate.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x,self__.y], null);
}));

(membrane.ui.Translate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Translate(self__.x,self__.y,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Translate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46312){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46322 = cljs.core.keyword_identical_QMARK_;
var expr__46323 = k__4388__auto__;
if(cljs.core.truth_((pred__46322.cljs$core$IFn$_invoke$arity$2 ? pred__46322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46323) : pred__46322.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46323)))){
return (new membrane.ui.Translate(G__46312,self__.y,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46322.cljs$core$IFn$_invoke$arity$2 ? pred__46322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46323) : pred__46322.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46323)))){
return (new membrane.ui.Translate(self__.x,G__46312,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46322.cljs$core$IFn$_invoke$arity$2 ? pred__46322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46323) : pred__46322.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46323)))){
return (new membrane.ui.Translate(self__.x,self__.y,G__46312,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Translate(self__.x,self__.y,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46312),null));
}
}
}
}));

(membrane.ui.Translate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.Translate.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Translate.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.Translate(self__.x,self__.y,cljs.core.first(childs),null,null,null));
}));

(membrane.ui.Translate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46312){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Translate(self__.x,self__.y,self__.drawable,G__46312,self__.__extmap,self__.__hash));
}));

(membrane.ui.Translate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Translate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.Translate.cljs$lang$type = true);

(membrane.ui.Translate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Translate",null,(1),null));
}));

(membrane.ui.Translate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Translate");
}));

/**
 * Positional factory function for membrane.ui/Translate.
 */
membrane.ui.__GT_Translate = (function membrane$ui$__GT_Translate(x,y,drawable){
return (new membrane.ui.Translate(x,y,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/Translate, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Translate = (function membrane$ui$map__GT_Translate(G__46316){
var extmap__4419__auto__ = (function (){var G__46325 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46316,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__46316)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46325);
} else {
return G__46325;
}
})();
return (new membrane.ui.Translate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46316),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46316),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__46316),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A graphical elem that will shift drawable's origin by x and y and draw it at its new origin.
 */
membrane.ui.translate = (function membrane$ui$translate(x,y,drawable){
return (new membrane.ui.Translate(x,y,drawable,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Rotate = (function (degrees,drawable,__meta,__extmap,__hash){
this.degrees = degrees;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Rotate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Rotate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46327,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46331 = k46327;
var G__46331__$1 = (((G__46331 instanceof cljs.core.Keyword))?G__46331.fqn:null);
switch (G__46331__$1) {
case "degrees":
return self__.degrees;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46327,else__4383__auto__);

}
}));

(membrane.ui.Rotate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46332){
var vec__46333 = p__46332;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46333,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46333,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Rotate.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Rotate.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.Rotate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Rotate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"degrees","degrees",2015169884),self__.degrees],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.Rotate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46326){
var self__ = this;
var G__46326__$1 = this;
return (new cljs.core.RecordIter((0),G__46326__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"degrees","degrees",2015169884),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Rotate.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Rotate.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.child_bounds(self__.drawable);
}));

(membrane.ui.Rotate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Rotate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Rotate(self__.degrees,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Rotate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Rotate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (734720640 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Rotate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46328,other46329){
var self__ = this;
var this46328__$1 = this;
return (((!((other46329 == null)))) && ((this46328__$1.constructor === other46329.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46328__$1.degrees,other46329.degrees)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46328__$1.drawable,other46329.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46328__$1.__extmap,other46329.__extmap)));
}));

(membrane.ui.Rotate.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Rotate.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Rotate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"degrees","degrees",2015169884),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Rotate(self__.degrees,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Rotate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46326){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46336 = cljs.core.keyword_identical_QMARK_;
var expr__46337 = k__4388__auto__;
if(cljs.core.truth_((pred__46336.cljs$core$IFn$_invoke$arity$2 ? pred__46336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"degrees","degrees",2015169884),expr__46337) : pred__46336.call(null,new cljs.core.Keyword(null,"degrees","degrees",2015169884),expr__46337)))){
return (new membrane.ui.Rotate(G__46326,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46336.cljs$core$IFn$_invoke$arity$2 ? pred__46336.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46337) : pred__46336.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46337)))){
return (new membrane.ui.Rotate(self__.degrees,G__46326,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Rotate(self__.degrees,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46326),null));
}
}
}));

(membrane.ui.Rotate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"degrees","degrees",2015169884),self__.degrees,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.Rotate.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Rotate.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.Rotate(self__.degrees,cljs.core.first(childs),null,null,null));
}));

(membrane.ui.Rotate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46326){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Rotate(self__.degrees,self__.drawable,G__46326,self__.__extmap,self__.__hash));
}));

(membrane.ui.Rotate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Rotate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"degrees","degrees",-639265885,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.Rotate.cljs$lang$type = true);

(membrane.ui.Rotate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Rotate",null,(1),null));
}));

(membrane.ui.Rotate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Rotate");
}));

/**
 * Positional factory function for membrane.ui/Rotate.
 */
membrane.ui.__GT_Rotate = (function membrane$ui$__GT_Rotate(degrees,drawable){
return (new membrane.ui.Rotate(degrees,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/Rotate, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Rotate = (function membrane$ui$map__GT_Rotate(G__46330){
var extmap__4419__auto__ = (function (){var G__46339 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46330,new cljs.core.Keyword(null,"degrees","degrees",2015169884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__46330)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46339);
} else {
return G__46339;
}
})();
return (new membrane.ui.Rotate(new cljs.core.Keyword(null,"degrees","degrees",2015169884).cljs$core$IFn$_invoke$arity$1(G__46330),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__46330),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

membrane.ui.rotate = (function membrane$ui$rotate(degrees,drawable){
return (new membrane.ui.Rotate(degrees,drawable,null,null,null));
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
membrane.ui.AffineTransform = (function (matrix,drawable,__meta,__extmap,__hash){
this.matrix = matrix;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.AffineTransform.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.AffineTransform.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46341,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46345 = k46341;
var G__46345__$1 = (((G__46345 instanceof cljs.core.Keyword))?G__46345.fqn:null);
switch (G__46345__$1) {
case "matrix":
return self__.matrix;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46341,else__4383__auto__);

}
}));

(membrane.ui.AffineTransform.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46346){
var vec__46347 = p__46346;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46347,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46347,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.AffineTransform.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.AffineTransform{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"matrix","matrix",803137200),self__.matrix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.AffineTransform.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46340){
var self__ = this;
var G__46340__$1 = this;
return (new cljs.core.RecordIter((0),G__46340__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matrix","matrix",803137200),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.AffineTransform.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.AffineTransform.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.AffineTransform(self__.matrix,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.AffineTransform.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.AffineTransform.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1520501787 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.AffineTransform.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46342,other46343){
var self__ = this;
var this46342__$1 = this;
return (((!((other46343 == null)))) && ((this46342__$1.constructor === other46343.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46342__$1.matrix,other46343.matrix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46342__$1.drawable,other46343.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46342__$1.__extmap,other46343.__extmap)));
}));

(membrane.ui.AffineTransform.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"matrix","matrix",803137200),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.AffineTransform(self__.matrix,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.AffineTransform.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46340){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46350 = cljs.core.keyword_identical_QMARK_;
var expr__46351 = k__4388__auto__;
if(cljs.core.truth_((pred__46350.cljs$core$IFn$_invoke$arity$2 ? pred__46350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matrix","matrix",803137200),expr__46351) : pred__46350.call(null,new cljs.core.Keyword(null,"matrix","matrix",803137200),expr__46351)))){
return (new membrane.ui.AffineTransform(G__46340,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46350.cljs$core$IFn$_invoke$arity$2 ? pred__46350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46351) : pred__46350.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46351)))){
return (new membrane.ui.AffineTransform(self__.matrix,G__46340,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.AffineTransform(self__.matrix,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46340),null));
}
}
}));

(membrane.ui.AffineTransform.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"matrix","matrix",803137200),self__.matrix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.AffineTransform.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46340){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.AffineTransform(self__.matrix,self__.drawable,G__46340,self__.__extmap,self__.__hash));
}));

(membrane.ui.AffineTransform.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.AffineTransform.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matrix","matrix",-1851298569,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.AffineTransform.cljs$lang$type = true);

(membrane.ui.AffineTransform.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/AffineTransform",null,(1),null));
}));

(membrane.ui.AffineTransform.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/AffineTransform");
}));

/**
 * Positional factory function for membrane.ui/AffineTransform.
 */
membrane.ui.__GT_AffineTransform = (function membrane$ui$__GT_AffineTransform(matrix,drawable){
return (new membrane.ui.AffineTransform(matrix,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/AffineTransform, taking a map of keywords to field values.
 */
membrane.ui.map__GT_AffineTransform = (function membrane$ui$map__GT_AffineTransform(G__46344){
var extmap__4419__auto__ = (function (){var G__46353 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46344,new cljs.core.Keyword(null,"matrix","matrix",803137200),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__46344)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46353);
} else {
return G__46353;
}
})();
return (new membrane.ui.AffineTransform(new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(G__46344),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__46344),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
membrane.ui.Skew = (function (sx,sy,drawable,__meta,__extmap,__hash){
this.sx = sx;
this.sy = sy;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Skew.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Skew.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46355,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46359 = k46355;
var G__46359__$1 = (((G__46359 instanceof cljs.core.Keyword))?G__46359.fqn:null);
switch (G__46359__$1) {
case "sx":
return self__.sx;

break;
case "sy":
return self__.sy;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46355,else__4383__auto__);

}
}));

(membrane.ui.Skew.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46360){
var vec__46361 = p__46360;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46361,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46361,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Skew.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Skew{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sx","sx",-403071592),self__.sx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sy","sy",227523849),self__.sy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.Skew.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46354){
var self__ = this;
var G__46354__$1 = this;
return (new cljs.core.RecordIter((0),G__46354__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sx","sx",-403071592),new cljs.core.Keyword(null,"sy","sy",227523849),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Skew.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Skew.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Skew(self__.sx,self__.sy,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Skew.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Skew.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1913038515 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Skew.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46356,other46357){
var self__ = this;
var this46356__$1 = this;
return (((!((other46357 == null)))) && ((this46356__$1.constructor === other46357.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46356__$1.sx,other46357.sx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46356__$1.sy,other46357.sy)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46356__$1.drawable,other46357.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46356__$1.__extmap,other46357.__extmap)));
}));

(membrane.ui.Skew.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"sy","sy",227523849),null,new cljs.core.Keyword(null,"sx","sx",-403071592),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Skew(self__.sx,self__.sy,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Skew.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46354){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46364 = cljs.core.keyword_identical_QMARK_;
var expr__46365 = k__4388__auto__;
if(cljs.core.truth_((pred__46364.cljs$core$IFn$_invoke$arity$2 ? pred__46364.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sx","sx",-403071592),expr__46365) : pred__46364.call(null,new cljs.core.Keyword(null,"sx","sx",-403071592),expr__46365)))){
return (new membrane.ui.Skew(G__46354,self__.sy,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46364.cljs$core$IFn$_invoke$arity$2 ? pred__46364.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sy","sy",227523849),expr__46365) : pred__46364.call(null,new cljs.core.Keyword(null,"sy","sy",227523849),expr__46365)))){
return (new membrane.ui.Skew(self__.sx,G__46354,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46364.cljs$core$IFn$_invoke$arity$2 ? pred__46364.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46365) : pred__46364.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46365)))){
return (new membrane.ui.Skew(self__.sx,self__.sy,G__46354,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Skew(self__.sx,self__.sy,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46354),null));
}
}
}
}));

(membrane.ui.Skew.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sx","sx",-403071592),self__.sx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sy","sy",227523849),self__.sy,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.Skew.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46354){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Skew(self__.sx,self__.sy,self__.drawable,G__46354,self__.__extmap,self__.__hash));
}));

(membrane.ui.Skew.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Skew.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sx","sx",1237459935,null),new cljs.core.Symbol(null,"sy","sy",1868055376,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.Skew.cljs$lang$type = true);

(membrane.ui.Skew.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Skew",null,(1),null));
}));

(membrane.ui.Skew.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Skew");
}));

/**
 * Positional factory function for membrane.ui/Skew.
 */
membrane.ui.__GT_Skew = (function membrane$ui$__GT_Skew(sx,sy,drawable){
return (new membrane.ui.Skew(sx,sy,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/Skew, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Skew = (function membrane$ui$map__GT_Skew(G__46358){
var extmap__4419__auto__ = (function (){var G__46367 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46358,new cljs.core.Keyword(null,"sx","sx",-403071592),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sy","sy",227523849),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__46358)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46367);
} else {
return G__46367;
}
})();
return (new membrane.ui.Skew(new cljs.core.Keyword(null,"sx","sx",-403071592).cljs$core$IFn$_invoke$arity$1(G__46358),new cljs.core.Keyword(null,"sy","sy",227523849).cljs$core$IFn$_invoke$arity$1(G__46358),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__46358),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Spacer = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Spacer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Spacer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46369,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46373 = k46369;
var G__46373__$1 = (((G__46373 instanceof cljs.core.Keyword))?G__46373.fqn:null);
switch (G__46373__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46369,else__4383__auto__);

}
}));

(membrane.ui.Spacer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46374){
var vec__46375 = p__46374;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46375,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46375,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Spacer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Spacer{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(membrane.ui.Spacer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46368){
var self__ = this;
var G__46368__$1 = this;
return (new cljs.core.RecordIter((0),G__46368__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Spacer.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Spacer.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x,self__.y], null);
}));

(membrane.ui.Spacer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Spacer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Spacer(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Spacer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Spacer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-864303194 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Spacer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46370,other46371){
var self__ = this;
var this46370__$1 = this;
return (((!((other46371 == null)))) && ((this46370__$1.constructor === other46371.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46370__$1.x,other46371.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46370__$1.y,other46371.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46370__$1.__extmap,other46371.__extmap)));
}));

(membrane.ui.Spacer.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Spacer.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Spacer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Spacer(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Spacer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46368){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46378 = cljs.core.keyword_identical_QMARK_;
var expr__46379 = k__4388__auto__;
if(cljs.core.truth_((pred__46378.cljs$core$IFn$_invoke$arity$2 ? pred__46378.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46379) : pred__46378.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46379)))){
return (new membrane.ui.Spacer(G__46368,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46378.cljs$core$IFn$_invoke$arity$2 ? pred__46378.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46379) : pred__46378.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46379)))){
return (new membrane.ui.Spacer(self__.x,G__46368,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Spacer(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46368),null));
}
}
}));

(membrane.ui.Spacer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(membrane.ui.Spacer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46368){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Spacer(self__.x,self__.y,G__46368,self__.__extmap,self__.__hash));
}));

(membrane.ui.Spacer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Spacer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(membrane.ui.Spacer.cljs$lang$type = true);

(membrane.ui.Spacer.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Spacer",null,(1),null));
}));

(membrane.ui.Spacer.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Spacer");
}));

/**
 * Positional factory function for membrane.ui/Spacer.
 */
membrane.ui.__GT_Spacer = (function membrane$ui$__GT_Spacer(x,y){
return (new membrane.ui.Spacer(x,y,null,null,null));
});

/**
 * Factory function for membrane.ui/Spacer, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Spacer = (function membrane$ui$map__GT_Spacer(G__46372){
var extmap__4419__auto__ = (function (){var G__46381 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46372,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46372)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46381);
} else {
return G__46381;
}
})();
return (new membrane.ui.Spacer(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46372),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46372),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.Spacer,(function (draw){
return (function (this$){
return null;
});
}));
/**
 * An empty graphical element with width x and height y.
 * 
 *   Useful for layout.
 */
membrane.ui.spacer = (function membrane$ui$spacer(var_args){
var G__46383 = arguments.length;
switch (G__46383) {
case 1:
return membrane.ui.spacer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.ui.spacer.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new membrane.ui.Spacer(x,x,null,null,null));
}));

(membrane.ui.spacer.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (new membrane.ui.Spacer(x,y,null,null,null));
}));

(membrane.ui.spacer.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.FixedBounds = (function (size,drawable,__meta,__extmap,__hash){
this.size = size;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.FixedBounds.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.FixedBounds.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46385,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46389 = k46385;
var G__46389__$1 = (((G__46389 instanceof cljs.core.Keyword))?G__46389.fqn:null);
switch (G__46389__$1) {
case "size":
return self__.size;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46385,else__4383__auto__);

}
}));

(membrane.ui.FixedBounds.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46390){
var vec__46391 = p__46390;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46391,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46391,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.FixedBounds.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FixedBounds.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.FixedBounds.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.FixedBounds{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.FixedBounds.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46384){
var self__ = this;
var G__46384__$1 = this;
return (new cljs.core.RecordIter((0),G__46384__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.FixedBounds.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FixedBounds.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.size;
}));

(membrane.ui.FixedBounds.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.FixedBounds.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.FixedBounds(self__.size,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.FixedBounds.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.FixedBounds.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (208008287 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.FixedBounds.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46386,other46387){
var self__ = this;
var this46386__$1 = this;
return (((!((other46387 == null)))) && ((this46386__$1.constructor === other46387.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46386__$1.size,other46387.size)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46386__$1.drawable,other46387.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46386__$1.__extmap,other46387.__extmap)));
}));

(membrane.ui.FixedBounds.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FixedBounds.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.FixedBounds.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"size","size",1098693007),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.FixedBounds(self__.size,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.FixedBounds.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46384){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46394 = cljs.core.keyword_identical_QMARK_;
var expr__46395 = k__4388__auto__;
if(cljs.core.truth_((pred__46394.cljs$core$IFn$_invoke$arity$2 ? pred__46394.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"size","size",1098693007),expr__46395) : pred__46394.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__46395)))){
return (new membrane.ui.FixedBounds(G__46384,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46394.cljs$core$IFn$_invoke$arity$2 ? pred__46394.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46395) : pred__46394.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46395)))){
return (new membrane.ui.FixedBounds(self__.size,G__46384,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.FixedBounds(self__.size,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46384),null));
}
}
}));

(membrane.ui.FixedBounds.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"size","size",1098693007),self__.size,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.FixedBounds.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FixedBounds.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.FixedBounds(self__.size,cljs.core.first(childs),null,null,null));
}));

(membrane.ui.FixedBounds.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46384){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.FixedBounds(self__.size,self__.drawable,G__46384,self__.__extmap,self__.__hash));
}));

(membrane.ui.FixedBounds.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.FixedBounds.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.FixedBounds.cljs$lang$type = true);

(membrane.ui.FixedBounds.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/FixedBounds",null,(1),null));
}));

(membrane.ui.FixedBounds.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/FixedBounds");
}));

/**
 * Positional factory function for membrane.ui/FixedBounds.
 */
membrane.ui.__GT_FixedBounds = (function membrane$ui$__GT_FixedBounds(size,drawable){
return (new membrane.ui.FixedBounds(size,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/FixedBounds, taking a map of keywords to field values.
 */
membrane.ui.map__GT_FixedBounds = (function membrane$ui$map__GT_FixedBounds(G__46388){
var extmap__4419__auto__ = (function (){var G__46397 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46388,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__46388)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46397);
} else {
return G__46397;
}
})();
return (new membrane.ui.FixedBounds(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__46388),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__46388),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.FixedBounds,(function (draw){
return (function (this$){
var G__46398 = new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(this$);
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__46398) : draw.call(null,G__46398));
});
}));
membrane.ui.fixed_bounds = (function membrane$ui$fixed_bounds(size,drawable){
return (new membrane.ui.FixedBounds(size,drawable,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {membrane.ui.IDrop}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IMouseMove}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IMouseEvent}
 * @implements {membrane.ui.IBounds}
 * @implements {membrane.ui.IScroll}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Padding = (function (top,right,bottom,left,drawable,__meta,__extmap,__hash){
this.top = top;
this.right = right;
this.bottom = bottom;
this.left = left;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Padding.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Padding.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46400,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46404 = k46400;
var G__46404__$1 = (((G__46404 instanceof cljs.core.Keyword))?G__46404.fqn:null);
switch (G__46404__$1) {
case "top":
return self__.top;

break;
case "right":
return self__.right;

break;
case "bottom":
return self__.bottom;

break;
case "left":
return self__.left;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46400,else__4383__auto__);

}
}));

(membrane.ui.Padding.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46405){
var vec__46406 = p__46405;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46406,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46406,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Padding.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.Padding.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Padding{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"top","top",-1856271961),self__.top],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bottom","bottom",-1550509018),self__.bottom],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.Padding.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46399){
var self__ = this;
var G__46399__$1 = this;
return (new cljs.core.RecordIter((0),G__46399__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Padding.prototype.membrane$ui$IScroll$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$ui$IScroll$_scroll$arity$3 = (function (this$,input_offset,p__46409){
var self__ = this;
var vec__46410 = p__46409;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46410,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46410,(1),null);
var pos = vec__46410;
var this$__$1 = this;
return membrane.ui.scroll(self__.drawable,input_offset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - self__.left),(my - self__.top)], null));
}));

(membrane.ui.Padding.prototype.membrane$ui$IMouseEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$ui$IMouseEvent$_mouse_event$arity$5 = (function (this$,p__46413,button,mouse_down_QMARK_,mods){
var self__ = this;
var vec__46414 = p__46413;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46414,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46414,(1),null);
var pos = vec__46414;
var this$__$1 = this;
return membrane.ui.mouse_event(self__.drawable,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - self__.left),(my - self__.top)], null),button,mouse_down_QMARK_,mods);
}));

(membrane.ui.Padding.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__46417 = membrane.ui.child_bounds(self__.drawable);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46417,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46417,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((w + self__.left) + self__.right),((h + self__.top) + self__.bottom)], null);
}));

(membrane.ui.Padding.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Padding.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Padding(self__.top,self__.right,self__.bottom,self__.left,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Padding.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Padding.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2025201373 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Padding.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46401,other46402){
var self__ = this;
var this46401__$1 = this;
return (((!((other46402 == null)))) && ((this46401__$1.constructor === other46402.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46401__$1.top,other46402.top)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46401__$1.right,other46402.right)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46401__$1.bottom,other46402.bottom)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46401__$1.left,other46402.left)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46401__$1.drawable,other46402.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46401__$1.__extmap,other46402.__extmap)));
}));

(membrane.ui.Padding.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Padding.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Padding(self__.top,self__.right,self__.bottom,self__.left,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Padding.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46399){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46420 = cljs.core.keyword_identical_QMARK_;
var expr__46421 = k__4388__auto__;
if(cljs.core.truth_((pred__46420.cljs$core$IFn$_invoke$arity$2 ? pred__46420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961),expr__46421) : pred__46420.call(null,new cljs.core.Keyword(null,"top","top",-1856271961),expr__46421)))){
return (new membrane.ui.Padding(G__46399,self__.right,self__.bottom,self__.left,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46420.cljs$core$IFn$_invoke$arity$2 ? pred__46420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833),expr__46421) : pred__46420.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__46421)))){
return (new membrane.ui.Padding(self__.top,G__46399,self__.bottom,self__.left,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46420.cljs$core$IFn$_invoke$arity$2 ? pred__46420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),expr__46421) : pred__46420.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),expr__46421)))){
return (new membrane.ui.Padding(self__.top,self__.right,G__46399,self__.left,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46420.cljs$core$IFn$_invoke$arity$2 ? pred__46420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937),expr__46421) : pred__46420.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__46421)))){
return (new membrane.ui.Padding(self__.top,self__.right,self__.bottom,G__46399,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46420.cljs$core$IFn$_invoke$arity$2 ? pred__46420.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46421) : pred__46420.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46421)))){
return (new membrane.ui.Padding(self__.top,self__.right,self__.bottom,self__.left,G__46399,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Padding(self__.top,self__.right,self__.bottom,self__.left,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46399),null));
}
}
}
}
}
}));

(membrane.ui.Padding.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"top","top",-1856271961),self__.top,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"right","right",-452581833),self__.right,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),self__.bottom,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"left","left",-399115937),self__.left,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.Padding.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.Padding(self__.left,self__.right,self__.bottom,self__.top,cljs.core.first(childs),null,null,null));
}));

(membrane.ui.Padding.prototype.membrane$ui$IMouseMove$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$ui$IMouseMove$_mouse_move$arity$2 = (function (this$,p__46423){
var self__ = this;
var vec__46424 = p__46423;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46424,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46424,(1),null);
var pos = vec__46424;
var this$__$1 = this;
return membrane.ui.mouse_move(self__.drawable,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - self__.left),(my - self__.top)], null));
}));

(membrane.ui.Padding.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46399){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Padding(self__.top,self__.right,self__.bottom,self__.left,self__.drawable,G__46399,self__.__extmap,self__.__hash));
}));

(membrane.ui.Padding.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Padding.prototype.membrane$ui$IDrop$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$ui$IDrop$_drop$arity$3 = (function (this$,paths,p__46427){
var self__ = this;
var vec__46428 = p__46427;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46428,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46428,(1),null);
var pos = vec__46428;
var this$__$1 = this;
return membrane.ui.drop(self__.drawable,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - self__.left),(my - self__.top)], null));
}));

(membrane.ui.Padding.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this$,mouse_offset){
var self__ = this;
var this$__$1 = this;
var vec__46431 = mouse_offset;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46431,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46431,(1),null);
return membrane.ui._default_mouse_move_global(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - self__.left),(my - self__.top)], null));
}));

(membrane.ui.Padding.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"top","top",-215740434,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"bottom","bottom",90022509,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.Padding.cljs$lang$type = true);

(membrane.ui.Padding.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Padding",null,(1),null));
}));

(membrane.ui.Padding.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Padding");
}));

/**
 * Positional factory function for membrane.ui/Padding.
 */
membrane.ui.__GT_Padding = (function membrane$ui$__GT_Padding(top,right,bottom,left,drawable){
return (new membrane.ui.Padding(top,right,bottom,left,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/Padding, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Padding = (function membrane$ui$map__GT_Padding(G__46403){
var extmap__4419__auto__ = (function (){var G__46434 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46403,new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__46403)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46434);
} else {
return G__46434;
}
})();
return (new membrane.ui.Padding(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(G__46403),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__46403),new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(G__46403),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__46403),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__46403),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.Padding,(function (draw){
return (function (this$){
var G__46435 = membrane.ui.translate(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(this$));
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__46435) : draw.call(null,G__46435));
});
}));
membrane.ui.padding = (function membrane$ui$padding(var_args){
var G__46437 = arguments.length;
switch (G__46437) {
case 2:
return membrane.ui.padding.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return membrane.ui.padding.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return membrane.ui.padding.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.ui.padding.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
return (new membrane.ui.Padding(p,p,p,p,elem,null,null,null));
}));

(membrane.ui.padding.cljs$core$IFn$_invoke$arity$3 = (function (px,py,elem){
return (new membrane.ui.Padding(py,px,py,px,elem,null,null,null));
}));

(membrane.ui.padding.cljs$core$IFn$_invoke$arity$5 = (function (top,right,bottom,left,elem){
return (new membrane.ui.Padding(top,right,bottom,left,elem,null,null,null));
}));

(membrane.ui.padding.cljs$lang$maxFixedArity = 5);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Path = (function (points,__meta,__extmap,__hash){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Path.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Path.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46439,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46443 = k46439;
var G__46443__$1 = (((G__46443 instanceof cljs.core.Keyword))?G__46443.fqn:null);
switch (G__46443__$1) {
case "points":
return self__.points;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46439,else__4383__auto__);

}
}));

(membrane.ui.Path.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46444){
var vec__46445 = p__46444;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46445,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46445,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Path.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Path{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",-1486596883),self__.points],null))], null),self__.__extmap));
}));

(membrane.ui.Path.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46438){
var self__ = this;
var G__46438__$1 = this;
return (new cljs.core.RecordIter((0),G__46438__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Path.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Path.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var maxx = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,self__.points));
var maxy = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,self__.points));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx,maxy], null);
}));

(membrane.ui.Path.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Path.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Path(self__.points,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Path.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Path.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1184185045 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Path.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46440,other46441){
var self__ = this;
var this46440__$1 = this;
return (((!((other46441 == null)))) && ((this46440__$1.constructor === other46441.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46440__$1.points,other46441.points)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46440__$1.__extmap,other46441.__extmap)));
}));

(membrane.ui.Path.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Path.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Path.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Path(self__.points,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Path.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46438){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46448 = cljs.core.keyword_identical_QMARK_;
var expr__46449 = k__4388__auto__;
if(cljs.core.truth_((pred__46448.cljs$core$IFn$_invoke$arity$2 ? pred__46448.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883),expr__46449) : pred__46448.call(null,new cljs.core.Keyword(null,"points","points",-1486596883),expr__46449)))){
return (new membrane.ui.Path(G__46438,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Path(self__.points,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46438),null));
}
}));

(membrane.ui.Path.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"points","points",-1486596883),self__.points,null))], null),self__.__extmap));
}));

(membrane.ui.Path.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46438){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Path(self__.points,G__46438,self__.__extmap,self__.__hash));
}));

(membrane.ui.Path.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Path.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"points","points",153934644,null)], null);
}));

(membrane.ui.Path.cljs$lang$type = true);

(membrane.ui.Path.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Path",null,(1),null));
}));

(membrane.ui.Path.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Path");
}));

/**
 * Positional factory function for membrane.ui/Path.
 */
membrane.ui.__GT_Path = (function membrane$ui$__GT_Path(points){
return (new membrane.ui.Path(points,null,null,null));
});

/**
 * Factory function for membrane.ui/Path, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Path = (function membrane$ui$map__GT_Path(G__46442){
var extmap__4419__auto__ = (function (){var G__46451 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46442,new cljs.core.Keyword(null,"points","points",-1486596883));
if(cljs.core.record_QMARK_(G__46442)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46451);
} else {
return G__46451;
}
})();
return (new membrane.ui.Path(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(G__46442),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * A graphical element that will draw lines connecting points.
 * 
 *   See with-style, with-stroke-width, and with-color for more options.
 */
membrane.ui.path = (function membrane$ui$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48306 = arguments.length;
var i__4737__auto___48307 = (0);
while(true){
if((i__4737__auto___48307 < len__4736__auto___48306)){
args__4742__auto__.push((arguments[i__4737__auto___48307]));

var G__48308 = (i__4737__auto___48307 + (1));
i__4737__auto___48307 = G__48308;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return membrane.ui.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(membrane.ui.path.cljs$core$IFn$_invoke$arity$variadic = (function (points){
return (new membrane.ui.Path(points,null,null,null));
}));

(membrane.ui.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(membrane.ui.path.cljs$lang$applyTo = (function (seq46452){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46452));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.WithColor = (function (color,drawables,__meta,__extmap,__hash){
this.color = color;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.WithColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.WithColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46454,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46458 = k46454;
var G__46458__$1 = (((G__46458 instanceof cljs.core.Keyword))?G__46458.fqn:null);
switch (G__46458__$1) {
case "color":
return self__.color;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46454,else__4383__auto__);

}
}));

(membrane.ui.WithColor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46459){
var vec__46460 = p__46459;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46460,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46460,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.WithColor.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithColor.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.WithColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.WithColor{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.WithColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46453){
var self__ = this;
var G__46453__$1 = this;
return (new cljs.core.RecordIter((0),G__46453__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.WithColor.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithColor.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46463,elem){
var vec__46464 = p__46463;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464,(1),null);
var vec__46467 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46467,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46467,(1),null);
var vec__46470 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46470,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46470,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.WithColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.WithColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.WithColor(self__.color,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.WithColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.WithColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (505438910 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.WithColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46455,other46456){
var self__ = this;
var this46455__$1 = this;
return (((!((other46456 == null)))) && ((this46455__$1.constructor === other46456.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46455__$1.color,other46456.color)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46455__$1.drawables,other46456.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46455__$1.__extmap,other46456.__extmap)));
}));

(membrane.ui.WithColor.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithColor.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.WithColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.WithColor(self__.color,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.WithColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46453){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46473 = cljs.core.keyword_identical_QMARK_;
var expr__46474 = k__4388__auto__;
if(cljs.core.truth_((pred__46473.cljs$core$IFn$_invoke$arity$2 ? pred__46473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173),expr__46474) : pred__46473.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__46474)))){
return (new membrane.ui.WithColor(G__46453,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46473.cljs$core$IFn$_invoke$arity$2 ? pred__46473.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46474) : pred__46473.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46474)))){
return (new membrane.ui.WithColor(self__.color,G__46453,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.WithColor(self__.color,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46453),null));
}
}
}));

(membrane.ui.WithColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color","color",1011675173),self__.color,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.WithColor.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithColor.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.WithColor(self__.color,childs,null,null,null));
}));

(membrane.ui.WithColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46453){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.WithColor(self__.color,self__.drawables,G__46453,self__.__extmap,self__.__hash));
}));

(membrane.ui.WithColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.WithColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.WithColor.cljs$lang$type = true);

(membrane.ui.WithColor.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/WithColor",null,(1),null));
}));

(membrane.ui.WithColor.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/WithColor");
}));

/**
 * Positional factory function for membrane.ui/WithColor.
 */
membrane.ui.__GT_WithColor = (function membrane$ui$__GT_WithColor(color,drawables){
return (new membrane.ui.WithColor(color,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/WithColor, taking a map of keywords to field values.
 */
membrane.ui.map__GT_WithColor = (function membrane$ui$map__GT_WithColor(G__46457){
var extmap__4419__auto__ = (function (){var G__46476 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46457,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46457)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46476);
} else {
return G__46476;
}
})();
return (new membrane.ui.WithColor(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__46457),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46457),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Use color for all children. Color is a vector of [r g b] or [r g b a]. All values should be between 0 and 1 inclusive.
 */
membrane.ui.with_color = (function membrane$ui$with_color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48325 = arguments.length;
var i__4737__auto___48326 = (0);
while(true){
if((i__4737__auto___48326 < len__4736__auto___48325)){
args__4742__auto__.push((arguments[i__4737__auto___48326]));

var G__48327 = (i__4737__auto___48326 + (1));
i__4737__auto___48326 = G__48327;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic = (function (color,drawables){
return (new membrane.ui.WithColor(color,drawables,null,null,null));
}));

(membrane.ui.with_color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.with_color.cljs$lang$applyTo = (function (seq46477){
var G__46478 = cljs.core.first(seq46477);
var seq46477__$1 = cljs.core.next(seq46477);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46478,seq46477__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.WithStyle = (function (style,drawables,__meta,__extmap,__hash){
this.style = style;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.WithStyle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.WithStyle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46480,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46484 = k46480;
var G__46484__$1 = (((G__46484 instanceof cljs.core.Keyword))?G__46484.fqn:null);
switch (G__46484__$1) {
case "style":
return self__.style;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46480,else__4383__auto__);

}
}));

(membrane.ui.WithStyle.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46485){
var vec__46486 = p__46485;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46486,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46486,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.WithStyle.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStyle.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.WithStyle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.WithStyle{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.WithStyle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46479){
var self__ = this;
var G__46479__$1 = this;
return (new cljs.core.RecordIter((0),G__46479__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.WithStyle.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStyle.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.bounds(self__.drawables);
}));

(membrane.ui.WithStyle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.WithStyle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.WithStyle(self__.style,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.WithStyle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.WithStyle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (542819839 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.WithStyle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46481,other46482){
var self__ = this;
var this46481__$1 = this;
return (((!((other46482 == null)))) && ((this46481__$1.constructor === other46482.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46481__$1.style,other46482.style)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46481__$1.drawables,other46482.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46481__$1.__extmap,other46482.__extmap)));
}));

(membrane.ui.WithStyle.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStyle.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.WithStyle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawables","drawables",1997910160),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.WithStyle(self__.style,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.WithStyle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46479){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46489 = cljs.core.keyword_identical_QMARK_;
var expr__46490 = k__4388__auto__;
if(cljs.core.truth_((pred__46489.cljs$core$IFn$_invoke$arity$2 ? pred__46489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),expr__46490) : pred__46489.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__46490)))){
return (new membrane.ui.WithStyle(G__46479,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46489.cljs$core$IFn$_invoke$arity$2 ? pred__46489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46490) : pred__46489.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46490)))){
return (new membrane.ui.WithStyle(self__.style,G__46479,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.WithStyle(self__.style,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46479),null));
}
}
}));

(membrane.ui.WithStyle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.WithStyle.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStyle.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.WithStyle(self__.style,childs,null,null,null));
}));

(membrane.ui.WithStyle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46479){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.WithStyle(self__.style,self__.drawables,G__46479,self__.__extmap,self__.__hash));
}));

(membrane.ui.WithStyle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.WithStyle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.WithStyle.cljs$lang$type = true);

(membrane.ui.WithStyle.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/WithStyle",null,(1),null));
}));

(membrane.ui.WithStyle.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/WithStyle");
}));

/**
 * Positional factory function for membrane.ui/WithStyle.
 */
membrane.ui.__GT_WithStyle = (function membrane$ui$__GT_WithStyle(style,drawables){
return (new membrane.ui.WithStyle(style,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/WithStyle, taking a map of keywords to field values.
 */
membrane.ui.map__GT_WithStyle = (function membrane$ui$map__GT_WithStyle(G__46483){
var extmap__4419__auto__ = (function (){var G__46492 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46483,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46483)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46492);
} else {
return G__46492;
}
})();
return (new membrane.ui.WithStyle(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__46483),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46483),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Style for drawing paths and polygons
 * 
 *   style is one of:
 * :membrane.ui/style-fill
 * :membrane.ui/style-stroke
 * :membrane.ui/style-stroke-and-fill
 */
membrane.ui.with_style = (function membrane$ui$with_style(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48342 = arguments.length;
var i__4737__auto___48343 = (0);
while(true){
if((i__4737__auto___48343 < len__4736__auto___48342)){
args__4742__auto__.push((arguments[i__4737__auto___48343]));

var G__48344 = (i__4737__auto___48343 + (1));
i__4737__auto___48343 = G__48344;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,drawables){
return (new membrane.ui.WithStyle(style,cljs.core.vec(drawables),null,null,null));
}));

(membrane.ui.with_style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.with_style.cljs$lang$applyTo = (function (seq46493){
var G__46494 = cljs.core.first(seq46493);
var seq46493__$1 = cljs.core.next(seq46493);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46494,seq46493__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.WithStrokeWidth = (function (stroke_width,drawables,__meta,__extmap,__hash){
this.stroke_width = stroke_width;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.WithStrokeWidth.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46496,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46500 = k46496;
var G__46500__$1 = (((G__46500 instanceof cljs.core.Keyword))?G__46500.fqn:null);
switch (G__46500__$1) {
case "stroke-width":
return self__.stroke_width;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46496,else__4383__auto__);

}
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46501){
var vec__46502 = p__46501;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46502,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46502,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.WithStrokeWidth.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStrokeWidth.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.WithStrokeWidth{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46495){
var self__ = this;
var G__46495__$1 = this;
return (new cljs.core.RecordIter((0),G__46495__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.WithStrokeWidth.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStrokeWidth.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.bounds(self__.drawables);
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.WithStrokeWidth(self__.stroke_width,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (335234124 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46497,other46498){
var self__ = this;
var this46497__$1 = this;
return (((!((other46498 == null)))) && ((this46497__$1.constructor === other46498.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46497__$1.stroke_width,other46498.stroke_width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46497__$1.drawables,other46498.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46497__$1.__extmap,other46498.__extmap)));
}));

(membrane.ui.WithStrokeWidth.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStrokeWidth.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawables","drawables",1997910160),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.WithStrokeWidth(self__.stroke_width,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46495){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46505 = cljs.core.keyword_identical_QMARK_;
var expr__46506 = k__4388__auto__;
if(cljs.core.truth_((pred__46505.cljs$core$IFn$_invoke$arity$2 ? pred__46505.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),expr__46506) : pred__46505.call(null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),expr__46506)))){
return (new membrane.ui.WithStrokeWidth(G__46495,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46505.cljs$core$IFn$_invoke$arity$2 ? pred__46505.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46506) : pred__46505.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46506)))){
return (new membrane.ui.WithStrokeWidth(self__.stroke_width,G__46495,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.WithStrokeWidth(self__.stroke_width,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46495),null));
}
}
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),self__.stroke_width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.WithStrokeWidth.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStrokeWidth.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.WithStrokeWidth(self__.stroke_width,childs,null,null,null));
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46495){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.WithStrokeWidth(self__.stroke_width,self__.drawables,G__46495,self__.__extmap,self__.__hash));
}));

(membrane.ui.WithStrokeWidth.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.WithStrokeWidth.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"stroke-width","stroke-width",-1937599334,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.WithStrokeWidth.cljs$lang$type = true);

(membrane.ui.WithStrokeWidth.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/WithStrokeWidth",null,(1),null));
}));

(membrane.ui.WithStrokeWidth.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/WithStrokeWidth");
}));

/**
 * Positional factory function for membrane.ui/WithStrokeWidth.
 */
membrane.ui.__GT_WithStrokeWidth = (function membrane$ui$__GT_WithStrokeWidth(stroke_width,drawables){
return (new membrane.ui.WithStrokeWidth(stroke_width,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/WithStrokeWidth, taking a map of keywords to field values.
 */
membrane.ui.map__GT_WithStrokeWidth = (function membrane$ui$map__GT_WithStrokeWidth(G__46499){
var extmap__4419__auto__ = (function (){var G__46508 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46499,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46499)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46508);
} else {
return G__46508;
}
})();
return (new membrane.ui.WithStrokeWidth(new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(G__46499),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46499),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Set the stroke width for drawables.
 */
membrane.ui.with_stroke_width = (function membrane$ui$with_stroke_width(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48349 = arguments.length;
var i__4737__auto___48350 = (0);
while(true){
if((i__4737__auto___48350 < len__4736__auto___48349)){
args__4742__auto__.push((arguments[i__4737__auto___48350]));

var G__48351 = (i__4737__auto___48350 + (1));
i__4737__auto___48350 = G__48351;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.with_stroke_width.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.with_stroke_width.cljs$core$IFn$_invoke$arity$variadic = (function (stroke_width,drawables){
return (new membrane.ui.WithStrokeWidth(stroke_width,cljs.core.vec(drawables),null,null,null));
}));

(membrane.ui.with_stroke_width.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.with_stroke_width.cljs$lang$applyTo = (function (seq46509){
var G__46510 = cljs.core.first(seq46509);
var seq46509__$1 = cljs.core.next(seq46509);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46510,seq46509__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Scale = (function (scalars,drawables,__meta,__extmap,__hash){
this.scalars = scalars;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Scale.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Scale.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46512,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46516 = k46512;
var G__46516__$1 = (((G__46516 instanceof cljs.core.Keyword))?G__46516.fqn:null);
switch (G__46516__$1) {
case "scalars":
return self__.scalars;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46512,else__4383__auto__);

}
}));

(membrane.ui.Scale.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46517){
var vec__46518 = p__46517;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46518,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46518,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Scale.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Scale.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.Scale.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Scale{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scalars","scalars",-350192527),self__.scalars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.Scale.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46511){
var self__ = this;
var G__46511__$1 = this;
return (new cljs.core.RecordIter((0),G__46511__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scalars","scalars",-350192527),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Scale.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Scale.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var vec__46521 = membrane.ui.bounds(self__.drawables);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46521,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46521,(1),null);
var vec__46524 = self__.scalars;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46524,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46524,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w * sx),(h * sy)], null);
}));

(membrane.ui.Scale.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Scale.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Scale(self__.scalars,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Scale.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Scale.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1872230439 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Scale.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46513,other46514){
var self__ = this;
var this46513__$1 = this;
return (((!((other46514 == null)))) && ((this46513__$1.constructor === other46514.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46513__$1.scalars,other46514.scalars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46513__$1.drawables,other46514.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46513__$1.__extmap,other46514.__extmap)));
}));

(membrane.ui.Scale.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Scale.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Scale.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawables","drawables",1997910160),null,new cljs.core.Keyword(null,"scalars","scalars",-350192527),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Scale(self__.scalars,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Scale.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46511){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46527 = cljs.core.keyword_identical_QMARK_;
var expr__46528 = k__4388__auto__;
if(cljs.core.truth_((pred__46527.cljs$core$IFn$_invoke$arity$2 ? pred__46527.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"scalars","scalars",-350192527),expr__46528) : pred__46527.call(null,new cljs.core.Keyword(null,"scalars","scalars",-350192527),expr__46528)))){
return (new membrane.ui.Scale(G__46511,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46527.cljs$core$IFn$_invoke$arity$2 ? pred__46527.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46528) : pred__46527.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46528)))){
return (new membrane.ui.Scale(self__.scalars,G__46511,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Scale(self__.scalars,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46511),null));
}
}
}));

(membrane.ui.Scale.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"scalars","scalars",-350192527),self__.scalars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.Scale.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Scale.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.Scale(self__.scalars,childs,null,null,null));
}));

(membrane.ui.Scale.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46511){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Scale(self__.scalars,self__.drawables,G__46511,self__.__extmap,self__.__hash));
}));

(membrane.ui.Scale.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Scale.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scalars","scalars",1290339000,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.Scale.cljs$lang$type = true);

(membrane.ui.Scale.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Scale",null,(1),null));
}));

(membrane.ui.Scale.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Scale");
}));

/**
 * Positional factory function for membrane.ui/Scale.
 */
membrane.ui.__GT_Scale = (function membrane$ui$__GT_Scale(scalars,drawables){
return (new membrane.ui.Scale(scalars,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/Scale, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Scale = (function membrane$ui$map__GT_Scale(G__46515){
var extmap__4419__auto__ = (function (){var G__46530 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46515,new cljs.core.Keyword(null,"scalars","scalars",-350192527),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46515)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46530);
} else {
return G__46530;
}
})();
return (new membrane.ui.Scale(new cljs.core.Keyword(null,"scalars","scalars",-350192527).cljs$core$IFn$_invoke$arity$1(G__46515),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46515),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Draw drawables using scalars which is a vector of [scale-x scale-y]
 */
membrane.ui.scale = (function membrane$ui$scale(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48361 = arguments.length;
var i__4737__auto___48362 = (0);
while(true){
if((i__4737__auto___48362 < len__4736__auto___48361)){
args__4742__auto__.push((arguments[i__4737__auto___48362]));

var G__48363 = (i__4737__auto___48362 + (1));
i__4737__auto___48362 = G__48363;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return membrane.ui.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(membrane.ui.scale.cljs$core$IFn$_invoke$arity$variadic = (function (sx,sy,drawables){
return (new membrane.ui.Scale(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),cljs.core.vec(drawables),null,null,null));
}));

(membrane.ui.scale.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(membrane.ui.scale.cljs$lang$applyTo = (function (seq46531){
var G__46532 = cljs.core.first(seq46531);
var seq46531__$1 = cljs.core.next(seq46531);
var G__46533 = cljs.core.first(seq46531__$1);
var seq46531__$2 = cljs.core.next(seq46531__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46532,G__46533,seq46531__$2);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Arc = (function (radius,rad_start,rad_end,steps,__meta,__extmap,__hash){
this.radius = radius;
this.rad_start = rad_start;
this.rad_end = rad_end;
this.steps = steps;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Arc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Arc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46535,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46539 = k46535;
var G__46539__$1 = (((G__46539 instanceof cljs.core.Keyword))?G__46539.fqn:null);
switch (G__46539__$1) {
case "radius":
return self__.radius;

break;
case "rad-start":
return self__.rad_start;

break;
case "rad-end":
return self__.rad_end;

break;
case "steps":
return self__.steps;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46535,else__4383__auto__);

}
}));

(membrane.ui.Arc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46540){
var vec__46541 = p__46540;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46541,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46541,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Arc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Arc{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"radius","radius",-2073122258),self__.radius],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rad-start","rad-start",134012724),self__.rad_start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rad-end","rad-end",-1531084699),self__.rad_end],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"steps","steps",-128433302),self__.steps],null))], null),self__.__extmap));
}));

(membrane.ui.Arc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46534){
var self__ = this;
var G__46534__$1 = this;
return (new cljs.core.RecordIter((0),G__46534__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"rad-start","rad-start",134012724),new cljs.core.Keyword(null,"rad-end","rad-end",-1531084699),new cljs.core.Keyword(null,"steps","steps",-128433302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Arc.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Arc.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Arc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Arc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Arc(self__.radius,self__.rad_start,self__.rad_end,self__.steps,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Arc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Arc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-661039756 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Arc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46536,other46537){
var self__ = this;
var this46536__$1 = this;
return (((!((other46537 == null)))) && ((this46536__$1.constructor === other46537.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46536__$1.radius,other46537.radius)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46536__$1.rad_start,other46537.rad_start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46536__$1.rad_end,other46537.rad_end)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46536__$1.steps,other46537.steps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46536__$1.__extmap,other46537.__extmap)));
}));

(membrane.ui.Arc.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Arc.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Arc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rad-end","rad-end",-1531084699),null,new cljs.core.Keyword(null,"steps","steps",-128433302),null,new cljs.core.Keyword(null,"radius","radius",-2073122258),null,new cljs.core.Keyword(null,"rad-start","rad-start",134012724),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Arc(self__.radius,self__.rad_start,self__.rad_end,self__.steps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Arc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46534){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46544 = cljs.core.keyword_identical_QMARK_;
var expr__46545 = k__4388__auto__;
if(cljs.core.truth_((pred__46544.cljs$core$IFn$_invoke$arity$2 ? pred__46544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"radius","radius",-2073122258),expr__46545) : pred__46544.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258),expr__46545)))){
return (new membrane.ui.Arc(G__46534,self__.rad_start,self__.rad_end,self__.steps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46544.cljs$core$IFn$_invoke$arity$2 ? pred__46544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rad-start","rad-start",134012724),expr__46545) : pred__46544.call(null,new cljs.core.Keyword(null,"rad-start","rad-start",134012724),expr__46545)))){
return (new membrane.ui.Arc(self__.radius,G__46534,self__.rad_end,self__.steps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46544.cljs$core$IFn$_invoke$arity$2 ? pred__46544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rad-end","rad-end",-1531084699),expr__46545) : pred__46544.call(null,new cljs.core.Keyword(null,"rad-end","rad-end",-1531084699),expr__46545)))){
return (new membrane.ui.Arc(self__.radius,self__.rad_start,G__46534,self__.steps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46544.cljs$core$IFn$_invoke$arity$2 ? pred__46544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"steps","steps",-128433302),expr__46545) : pred__46544.call(null,new cljs.core.Keyword(null,"steps","steps",-128433302),expr__46545)))){
return (new membrane.ui.Arc(self__.radius,self__.rad_start,self__.rad_end,G__46534,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Arc(self__.radius,self__.rad_start,self__.rad_end,self__.steps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46534),null));
}
}
}
}
}));

(membrane.ui.Arc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"radius","radius",-2073122258),self__.radius,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rad-start","rad-start",134012724),self__.rad_start,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rad-end","rad-end",-1531084699),self__.rad_end,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"steps","steps",-128433302),self__.steps,null))], null),self__.__extmap));
}));

(membrane.ui.Arc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46534){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Arc(self__.radius,self__.rad_start,self__.rad_end,self__.steps,G__46534,self__.__extmap,self__.__hash));
}));

(membrane.ui.Arc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Arc.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"radius","radius",-432590731,null),new cljs.core.Symbol(null,"rad-start","rad-start",1774544251,null),new cljs.core.Symbol(null,"rad-end","rad-end",109446828,null),new cljs.core.Symbol(null,"steps","steps",1512098225,null)], null);
}));

(membrane.ui.Arc.cljs$lang$type = true);

(membrane.ui.Arc.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Arc",null,(1),null));
}));

(membrane.ui.Arc.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Arc");
}));

/**
 * Positional factory function for membrane.ui/Arc.
 */
membrane.ui.__GT_Arc = (function membrane$ui$__GT_Arc(radius,rad_start,rad_end,steps){
return (new membrane.ui.Arc(radius,rad_start,rad_end,steps,null,null,null));
});

/**
 * Factory function for membrane.ui/Arc, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Arc = (function membrane$ui$map__GT_Arc(G__46538){
var extmap__4419__auto__ = (function (){var G__46547 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46538,new cljs.core.Keyword(null,"radius","radius",-2073122258),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rad-start","rad-start",134012724),new cljs.core.Keyword(null,"rad-end","rad-end",-1531084699),new cljs.core.Keyword(null,"steps","steps",-128433302)], 0));
if(cljs.core.record_QMARK_(G__46538)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46547);
} else {
return G__46547;
}
})();
return (new membrane.ui.Arc(new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(G__46538),new cljs.core.Keyword(null,"rad-start","rad-start",134012724).cljs$core$IFn$_invoke$arity$1(G__46538),new cljs.core.Keyword(null,"rad-end","rad-end",-1531084699).cljs$core$IFn$_invoke$arity$1(G__46538),new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(G__46538),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

membrane.ui.arc = (function membrane$ui$arc(radius,rad_start,rad_end){
return (new membrane.ui.Arc(radius,rad_start,rad_end,(10),null,null,null));
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
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Rectangle = (function (width,height,__meta,__extmap,__hash){
this.width = width;
this.height = height;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Rectangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46549,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46553 = k46549;
var G__46553__$1 = (((G__46553 instanceof cljs.core.Keyword))?G__46553.fqn:null);
switch (G__46553__$1) {
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46549,else__4383__auto__);

}
}));

(membrane.ui.Rectangle.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46554){
var vec__46555 = p__46554;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46555,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46555,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Rectangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Rectangle{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null))], null),self__.__extmap));
}));

(membrane.ui.Rectangle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46548){
var self__ = this;
var G__46548__$1 = this;
return (new cljs.core.RecordIter((0),G__46548__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Rectangle.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Rectangle.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.width,self__.height], null);
}));

(membrane.ui.Rectangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Rectangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Rectangle(self__.width,self__.height,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Rectangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Rectangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (833278147 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Rectangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46550,other46551){
var self__ = this;
var this46550__$1 = this;
return (((!((other46551 == null)))) && ((this46550__$1.constructor === other46551.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46550__$1.width,other46551.width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46550__$1.height,other46551.height)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46550__$1.__extmap,other46551.__extmap)));
}));

(membrane.ui.Rectangle.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Rectangle.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Rectangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Rectangle(self__.width,self__.height,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Rectangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46548){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46558 = cljs.core.keyword_identical_QMARK_;
var expr__46559 = k__4388__auto__;
if(cljs.core.truth_((pred__46558.cljs$core$IFn$_invoke$arity$2 ? pred__46558.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),expr__46559) : pred__46558.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__46559)))){
return (new membrane.ui.Rectangle(G__46548,self__.height,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46558.cljs$core$IFn$_invoke$arity$2 ? pred__46558.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622),expr__46559) : pred__46558.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__46559)))){
return (new membrane.ui.Rectangle(self__.width,G__46548,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Rectangle(self__.width,self__.height,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46548),null));
}
}
}));

(membrane.ui.Rectangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"height","height",1025178622),self__.height,null))], null),self__.__extmap));
}));

(membrane.ui.Rectangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46548){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Rectangle(self__.width,self__.height,G__46548,self__.__extmap,self__.__hash));
}));

(membrane.ui.Rectangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Rectangle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null)], null);
}));

(membrane.ui.Rectangle.cljs$lang$type = true);

(membrane.ui.Rectangle.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Rectangle",null,(1),null));
}));

(membrane.ui.Rectangle.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Rectangle");
}));

/**
 * Positional factory function for membrane.ui/Rectangle.
 */
membrane.ui.__GT_Rectangle = (function membrane$ui$__GT_Rectangle(width,height){
return (new membrane.ui.Rectangle(width,height,null,null,null));
});

/**
 * Factory function for membrane.ui/Rectangle, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Rectangle = (function membrane$ui$map__GT_Rectangle(G__46552){
var extmap__4419__auto__ = (function (){var G__46561 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46552,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622)], 0));
if(cljs.core.record_QMARK_(G__46552)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46561);
} else {
return G__46561;
}
})();
return (new membrane.ui.Rectangle(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__46552),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__46552),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.Rectangle,(function (draw){
return (function (this$){
var map__46562 = this$;
var map__46562__$1 = (((((!((map__46562 == null))))?(((((map__46562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46562):map__46562);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46562__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46562__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__46564 = membrane.ui.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,height], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [width,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], 0));
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__46564) : draw.call(null,G__46564));
});
}));
/**
 * Graphical elem that draws a rectangle.
 * 
 *   See with-style, with-stroke-width, and with-color for more options.
 */
membrane.ui.rectangle = (function membrane$ui$rectangle(width,height){
return (new membrane.ui.Rectangle(width,height,null,null,null));
});
/**
 * Graphical elem that draws a filled rectangle with color, [r g b] or [r g b a].
 */
membrane.ui.filled_rectangle = (function membrane$ui$filled_rectangle(color,width,height){
return membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(color,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-fill","membrane.ui/style-fill",1620230388),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new membrane.ui.Rectangle(width,height,null,null,null))], 0))], 0));
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
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.RoundedRectangle = (function (width,height,border_radius,__meta,__extmap,__hash){
this.width = width;
this.height = height;
this.border_radius = border_radius;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.RoundedRectangle.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46566,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46570 = k46566;
var G__46570__$1 = (((G__46570 instanceof cljs.core.Keyword))?G__46570.fqn:null);
switch (G__46570__$1) {
case "width":
return self__.width;

break;
case "height":
return self__.height;

break;
case "border-radius":
return self__.border_radius;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46566,else__4383__auto__);

}
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46571){
var vec__46572 = p__46571;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46572,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46572,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.RoundedRectangle{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",-384071477),self__.width],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",1025178622),self__.height],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"border-radius","border-radius",419594011),self__.border_radius],null))], null),self__.__extmap));
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46565){
var self__ = this;
var G__46565__$1 = this;
return (new cljs.core.RecordIter((0),G__46565__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.RoundedRectangle.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.RoundedRectangle.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.width,self__.height], null);
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.RoundedRectangle(self__.width,self__.height,self__.border_radius,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1334660464 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46567,other46568){
var self__ = this;
var this46567__$1 = this;
return (((!((other46568 == null)))) && ((this46567__$1.constructor === other46568.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46567__$1.width,other46568.width)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46567__$1.height,other46568.height)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46567__$1.border_radius,other46568.border_radius)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46567__$1.__extmap,other46568.__extmap)));
}));

(membrane.ui.RoundedRectangle.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.RoundedRectangle.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.RoundedRectangle(self__.width,self__.height,self__.border_radius,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46565){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46575 = cljs.core.keyword_identical_QMARK_;
var expr__46576 = k__4388__auto__;
if(cljs.core.truth_((pred__46575.cljs$core$IFn$_invoke$arity$2 ? pred__46575.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477),expr__46576) : pred__46575.call(null,new cljs.core.Keyword(null,"width","width",-384071477),expr__46576)))){
return (new membrane.ui.RoundedRectangle(G__46565,self__.height,self__.border_radius,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46575.cljs$core$IFn$_invoke$arity$2 ? pred__46575.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622),expr__46576) : pred__46575.call(null,new cljs.core.Keyword(null,"height","height",1025178622),expr__46576)))){
return (new membrane.ui.RoundedRectangle(self__.width,G__46565,self__.border_radius,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46575.cljs$core$IFn$_invoke$arity$2 ? pred__46575.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"border-radius","border-radius",419594011),expr__46576) : pred__46575.call(null,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),expr__46576)))){
return (new membrane.ui.RoundedRectangle(self__.width,self__.height,G__46565,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.RoundedRectangle(self__.width,self__.height,self__.border_radius,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46565),null));
}
}
}
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"width","width",-384071477),self__.width,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"height","height",1025178622),self__.height,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"border-radius","border-radius",419594011),self__.border_radius,null))], null),self__.__extmap));
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46565){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.RoundedRectangle(self__.width,self__.height,self__.border_radius,G__46565,self__.__extmap,self__.__hash));
}));

(membrane.ui.RoundedRectangle.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.RoundedRectangle.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),new cljs.core.Symbol(null,"border-radius","border-radius",2060125538,null)], null);
}));

(membrane.ui.RoundedRectangle.cljs$lang$type = true);

(membrane.ui.RoundedRectangle.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/RoundedRectangle",null,(1),null));
}));

(membrane.ui.RoundedRectangle.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/RoundedRectangle");
}));

/**
 * Positional factory function for membrane.ui/RoundedRectangle.
 */
membrane.ui.__GT_RoundedRectangle = (function membrane$ui$__GT_RoundedRectangle(width,height,border_radius){
return (new membrane.ui.RoundedRectangle(width,height,border_radius,null,null,null));
});

/**
 * Factory function for membrane.ui/RoundedRectangle, taking a map of keywords to field values.
 */
membrane.ui.map__GT_RoundedRectangle = (function membrane$ui$map__GT_RoundedRectangle(G__46569){
var extmap__4419__auto__ = (function (){var G__46578 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46569,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], 0));
if(cljs.core.record_QMARK_(G__46569)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46578);
} else {
return G__46578;
}
})();
return (new membrane.ui.RoundedRectangle(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(G__46569),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(G__46569),new cljs.core.Keyword(null,"border-radius","border-radius",419594011).cljs$core$IFn$_invoke$arity$1(G__46569),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Graphical elem that draws a rounded rectangle.
 */
membrane.ui.rounded_rectangle = (function membrane$ui$rounded_rectangle(width,height,border_radius){
return (new membrane.ui.RoundedRectangle(width,height,border_radius,null,null,null));
});
membrane.ui.bordered_draw = (function membrane$ui$bordered_draw(this$){
var drawable = new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(this$);
var vec__46579 = membrane.ui.child_bounds(drawable);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46579,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46579,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var gray = 0.65;
return membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray,gray,gray], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rectangle(width,height)], 0))], 0));
})(),drawable], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Bordered = (function (drawable,__meta,__extmap,__hash){
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Bordered.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Bordered.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46583,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46587 = k46583;
var G__46587__$1 = (((G__46587 instanceof cljs.core.Keyword))?G__46587.fqn:null);
switch (G__46587__$1) {
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46583,else__4383__auto__);

}
}));

(membrane.ui.Bordered.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46588){
var vec__46589 = p__46588;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46589,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46589,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Bordered.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Bordered.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.bordered_draw(this$__$1);
}));

(membrane.ui.Bordered.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Bordered{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.Bordered.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46582){
var self__ = this;
var G__46582__$1 = this;
return (new cljs.core.RecordIter((0),G__46582__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Bordered.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Bordered.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.child_bounds(self__.drawable);
}));

(membrane.ui.Bordered.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Bordered.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Bordered(self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Bordered.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Bordered.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-900094536 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Bordered.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46584,other46585){
var self__ = this;
var this46584__$1 = this;
return (((!((other46585 == null)))) && ((this46584__$1.constructor === other46585.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46584__$1.drawable,other46585.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46584__$1.__extmap,other46585.__extmap)));
}));

(membrane.ui.Bordered.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Bordered.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Bordered.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Bordered(self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Bordered.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46582){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46592 = cljs.core.keyword_identical_QMARK_;
var expr__46593 = k__4388__auto__;
if(cljs.core.truth_((pred__46592.cljs$core$IFn$_invoke$arity$2 ? pred__46592.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46593) : pred__46592.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46593)))){
return (new membrane.ui.Bordered(G__46582,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Bordered(self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46582),null));
}
}));

(membrane.ui.Bordered.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.Bordered.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Bordered.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.Bordered(cljs.core.first(childs),null,null,null));
}));

(membrane.ui.Bordered.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46582){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Bordered(self__.drawable,G__46582,self__.__extmap,self__.__hash));
}));

(membrane.ui.Bordered.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Bordered.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.Bordered.cljs$lang$type = true);

(membrane.ui.Bordered.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Bordered",null,(1),null));
}));

(membrane.ui.Bordered.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Bordered");
}));

/**
 * Positional factory function for membrane.ui/Bordered.
 */
membrane.ui.__GT_Bordered = (function membrane$ui$__GT_Bordered(drawable){
return (new membrane.ui.Bordered(drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/Bordered, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Bordered = (function membrane$ui$map__GT_Bordered(G__46586){
var extmap__4419__auto__ = (function (){var G__46595 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46586,new cljs.core.Keyword(null,"drawable","drawable",1829255936));
if(cljs.core.record_QMARK_(G__46586)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46595);
} else {
return G__46595;
}
})();
return (new membrane.ui.Bordered(new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__46586),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.Bordered,(function (draw){
return (function (this$){
var G__46596 = membrane.ui.bordered_draw(this$);
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__46596) : draw.call(null,G__46596));
});
}));
/**
 * Graphical elem that will draw drawable with a gray border.
 */
membrane.ui.bordered = (function membrane$ui$bordered(pad,drawable){
if(cljs.core.vector_QMARK_(pad)){
var vec__46597 = pad;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46597,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46597,(1),null);
return (new membrane.ui.Bordered(membrane.ui.padding.cljs$core$IFn$_invoke$arity$3(px,py,drawable),null,null,null));
} else {
return (new membrane.ui.Bordered(membrane.ui.padding.cljs$core$IFn$_invoke$arity$2(pad,drawable),null,null,null));
}
});
membrane.ui.fill_bordered_draw = (function membrane$ui$fill_bordered_draw(this$){
var map__46600 = this$;
var map__46600__$1 = (((((!((map__46600 == null))))?(((((map__46600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46600):map__46600);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46600__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var drawable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46600__$1,new cljs.core.Keyword(null,"drawable","drawable",1829255936));
var vec__46601 = membrane.ui.child_bounds(drawable);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46601,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46601,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.filled_rectangle(color,width,height),drawable], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.FillBordered = (function (color,drawable,__meta,__extmap,__hash){
this.color = color;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.FillBordered.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.FillBordered.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46606,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46610 = k46606;
var G__46610__$1 = (((G__46610 instanceof cljs.core.Keyword))?G__46610.fqn:null);
switch (G__46610__$1) {
case "color":
return self__.color;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46606,else__4383__auto__);

}
}));

(membrane.ui.FillBordered.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46611){
var vec__46612 = p__46611;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46612,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46612,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.FillBordered.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FillBordered.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.FillBordered.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.FillBordered{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"color","color",1011675173),self__.color],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.FillBordered.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46605){
var self__ = this;
var G__46605__$1 = this;
return (new cljs.core.RecordIter((0),G__46605__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.FillBordered.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FillBordered.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.child_bounds(self__.drawable);
}));

(membrane.ui.FillBordered.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.FillBordered.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.FillBordered(self__.color,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.FillBordered.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.FillBordered.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-851895183 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.FillBordered.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46607,other46608){
var self__ = this;
var this46607__$1 = this;
return (((!((other46608 == null)))) && ((this46607__$1.constructor === other46608.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46607__$1.color,other46608.color)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46607__$1.drawable,other46608.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46607__$1.__extmap,other46608.__extmap)));
}));

(membrane.ui.FillBordered.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FillBordered.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.FillBordered.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"color","color",1011675173),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.FillBordered(self__.color,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.FillBordered.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46605){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46615 = cljs.core.keyword_identical_QMARK_;
var expr__46616 = k__4388__auto__;
if(cljs.core.truth_((pred__46615.cljs$core$IFn$_invoke$arity$2 ? pred__46615.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173),expr__46616) : pred__46615.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__46616)))){
return (new membrane.ui.FillBordered(G__46605,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46615.cljs$core$IFn$_invoke$arity$2 ? pred__46615.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46616) : pred__46615.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__46616)))){
return (new membrane.ui.FillBordered(self__.color,G__46605,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.FillBordered(self__.color,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46605),null));
}
}
}));

(membrane.ui.FillBordered.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"color","color",1011675173),self__.color,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.FillBordered.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FillBordered.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.FillBordered(self__.color,cljs.core.first(childs),null,null,null));
}));

(membrane.ui.FillBordered.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46605){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.FillBordered(self__.color,self__.drawable,G__46605,self__.__extmap,self__.__hash));
}));

(membrane.ui.FillBordered.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.FillBordered.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"color","color",-1642760596,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.FillBordered.cljs$lang$type = true);

(membrane.ui.FillBordered.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/FillBordered",null,(1),null));
}));

(membrane.ui.FillBordered.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/FillBordered");
}));

/**
 * Positional factory function for membrane.ui/FillBordered.
 */
membrane.ui.__GT_FillBordered = (function membrane$ui$__GT_FillBordered(color,drawable){
return (new membrane.ui.FillBordered(color,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/FillBordered, taking a map of keywords to field values.
 */
membrane.ui.map__GT_FillBordered = (function membrane$ui$map__GT_FillBordered(G__46609){
var extmap__4419__auto__ = (function (){var G__46618 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46609,new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__46609)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46618);
} else {
return G__46618;
}
})();
return (new membrane.ui.FillBordered(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(G__46609),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__46609),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.FillBordered,(function (draw){
return (function (this$){
var G__46619 = membrane.ui.fill_bordered_draw(this$);
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__46619) : draw.call(null,G__46619));
});
}));
/**
 * Graphical elem that will draw elem with filled border.
 */
membrane.ui.fill_bordered = (function membrane$ui$fill_bordered(color,pad,drawable){
if(cljs.core.vector_QMARK_(pad)){
var vec__46620 = pad;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46620,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46620,(1),null);
return (new membrane.ui.FillBordered(color,membrane.ui.padding.cljs$core$IFn$_invoke$arity$3(px,py,drawable),null,null,null));
} else {
return (new membrane.ui.FillBordered(color,membrane.ui.padding.cljs$core$IFn$_invoke$arity$2(pad,drawable),null,null,null));
}
});
membrane.ui.draw_checkbox = (function membrane$ui$draw_checkbox(checked_QMARK_){
if(cljs.core.truth_(checked_QMARK_)){
var border = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.14901960784313725,0.5254901960784314,0.9882352941176471], null);
var fill = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.2,0.5607843137254902,0.9882352941176471], null);
return membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-fill","membrane.ui/style-fill",1620230388),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(fill,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle((12),(12),(2))], 0))], 0)),membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(border,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle((12),(12),(2))], 0)),membrane.ui.translate((0),(1),membrane.ui.with_stroke_width.cljs$core$IFn$_invoke$arity$variadic(1.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),0.3], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(2)], null)], 0))], 0))], 0))),membrane.ui.with_stroke_width.cljs$core$IFn$_invoke$arity$variadic(1.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(2)], null)], 0))], 0))], 0))], null)], 0));
} else {
var gray = 0.6862745098039216;
return membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gray,gray,gray], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle((12),(12),(2))], 0))], 0));
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
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Checkbox = (function (checked_QMARK_,__meta,__extmap,__hash){
this.checked_QMARK_ = checked_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Checkbox.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Checkbox.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46624,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46628 = k46624;
var G__46628__$1 = (((G__46628 instanceof cljs.core.Keyword))?G__46628.fqn:null);
switch (G__46628__$1) {
case "checked?":
return self__.checked_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46624,else__4383__auto__);

}
}));

(membrane.ui.Checkbox.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46629){
var vec__46630 = p__46629;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46630,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46630,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Checkbox.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Checkbox.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.draw_checkbox(self__.checked_QMARK_)], null);
}));

(membrane.ui.Checkbox.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Checkbox{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checked?","checked?",2024809091),self__.checked_QMARK_],null))], null),self__.__extmap));
}));

(membrane.ui.Checkbox.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46623){
var self__ = this;
var G__46623__$1 = this;
return (new cljs.core.RecordIter((0),G__46623__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checked?","checked?",2024809091)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Checkbox.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Checkbox.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.bounds(membrane.ui.draw_checkbox(self__.checked_QMARK_));
}));

(membrane.ui.Checkbox.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Checkbox.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Checkbox(self__.checked_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Checkbox.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Checkbox.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1062342187 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Checkbox.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46625,other46626){
var self__ = this;
var this46625__$1 = this;
return (((!((other46626 == null)))) && ((this46625__$1.constructor === other46626.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46625__$1.checked_QMARK_,other46626.checked_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46625__$1.__extmap,other46626.__extmap)));
}));

(membrane.ui.Checkbox.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Checkbox.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Checkbox.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked?","checked?",2024809091),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Checkbox(self__.checked_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Checkbox.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46623){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46633 = cljs.core.keyword_identical_QMARK_;
var expr__46634 = k__4388__auto__;
if(cljs.core.truth_((pred__46633.cljs$core$IFn$_invoke$arity$2 ? pred__46633.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"checked?","checked?",2024809091),expr__46634) : pred__46633.call(null,new cljs.core.Keyword(null,"checked?","checked?",2024809091),expr__46634)))){
return (new membrane.ui.Checkbox(G__46623,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Checkbox(self__.checked_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46623),null));
}
}));

(membrane.ui.Checkbox.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"checked?","checked?",2024809091),self__.checked_QMARK_,null))], null),self__.__extmap));
}));

(membrane.ui.Checkbox.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46623){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Checkbox(self__.checked_QMARK_,G__46623,self__.__extmap,self__.__hash));
}));

(membrane.ui.Checkbox.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Checkbox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"checked?","checked?",-629626678,null)], null);
}));

(membrane.ui.Checkbox.cljs$lang$type = true);

(membrane.ui.Checkbox.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Checkbox",null,(1),null));
}));

(membrane.ui.Checkbox.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Checkbox");
}));

/**
 * Positional factory function for membrane.ui/Checkbox.
 */
membrane.ui.__GT_Checkbox = (function membrane$ui$__GT_Checkbox(checked_QMARK_){
return (new membrane.ui.Checkbox(checked_QMARK_,null,null,null));
});

/**
 * Factory function for membrane.ui/Checkbox, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Checkbox = (function membrane$ui$map__GT_Checkbox(G__46627){
var extmap__4419__auto__ = (function (){var G__46636 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46627,new cljs.core.Keyword(null,"checked?","checked?",2024809091));
if(cljs.core.record_QMARK_(G__46627)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46636);
} else {
return G__46636;
}
})();
return (new membrane.ui.Checkbox(new cljs.core.Keyword(null,"checked?","checked?",2024809091).cljs$core$IFn$_invoke$arity$1(G__46627),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.Checkbox,(function (draw){
return (function (this$){
var G__46637 = membrane.ui.draw_checkbox(new cljs.core.Keyword(null,"checked?","checked?",2024809091).cljs$core$IFn$_invoke$arity$1(this$));
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__46637) : draw.call(null,G__46637));
});
}));
/**
 * Graphical elem that will draw a checkbox.
 */
membrane.ui.checkbox = (function membrane$ui$checkbox(checked_QMARK_){
return (new membrane.ui.Checkbox(checked_QMARK_,null,null,null));
});
/**
 * Tests whether [px py] is within  [x y width height].
 */
membrane.ui.box_contains_QMARK_ = (function membrane$ui$box_contains_QMARK_(p__46638,p__46639){
var vec__46640 = p__46638;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46640,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46640,(1),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46640,(2),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46640,(3),null);
var vec__46643 = p__46639;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46643,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46643,(1),null);
return (((px <= (x + width))) && ((px >= x)) && ((py <= (y + height))) && ((py >= y)));
});
membrane.ui.button_draw = (function membrane$ui$button_draw(this$){
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(this$);
var vec__46646 = membrane.ui.bounds(membrane.ui.label.cljs$core$IFn$_invoke$arity$1(text));
var text_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46646,(0),null);
var text_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46646,(1),null);
var padding = (12);
var rect_width = (text_width + padding);
var rect_height = (text_height + padding);
var border_radius = (3);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(this$))?membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9,0.9,0.9], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle(rect_width,rect_height,border_radius)], 0)):null),membrane.ui.with_style.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("membrane.ui","style-stroke","membrane.ui/style-stroke",767695743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.76,0.76,0.76,(1)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle((0.5 + rect_width),(0.5 + rect_height),border_radius)], 0)),membrane.ui.with_color.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.85,0.85,0.85], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([membrane.ui.rounded_rectangle(rect_width,rect_height,border_radius)], 0))], null)], 0)),membrane.ui.translate((padding / (2)),((padding / (2)) - (2)),membrane.ui.label.cljs$core$IFn$_invoke$arity$1(text))], null);
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
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IMouseEvent}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Button = (function (text,on_click,hover_QMARK_,__meta,__extmap,__hash){
this.text = text;
this.on_click = on_click;
this.hover_QMARK_ = hover_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Button.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Button.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46650,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46654 = k46650;
var G__46654__$1 = (((G__46654 instanceof cljs.core.Keyword))?G__46654.fqn:null);
switch (G__46654__$1) {
case "text":
return self__.text;

break;
case "on-click":
return self__.on_click;

break;
case "hover?":
return self__.hover_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46650,else__4383__auto__);

}
}));

(membrane.ui.Button.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46655){
var vec__46656 = p__46655;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46656,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46656,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Button.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Button{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.on_click],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hover?","hover?",-1201331489),self__.hover_QMARK_],null))], null),self__.__extmap));
}));

(membrane.ui.Button.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46649){
var self__ = this;
var G__46649__$1 = this;
return (new cljs.core.RecordIter((0),G__46649__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"hover?","hover?",-1201331489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Button.prototype.membrane$ui$IMouseEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Button.prototype.membrane$ui$IMouseEvent$_mouse_event$arity$5 = (function (this$,pos,button,mouse_down_QMARK_,mods){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = mouse_down_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return self__.on_click;
} else {
return and__4115__auto__;
}
})())){
return (self__.on_click.cljs$core$IFn$_invoke$arity$0 ? self__.on_click.cljs$core$IFn$_invoke$arity$0() : self__.on_click.call(null));
} else {
return null;
}
}));

(membrane.ui.Button.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Button.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var vec__46659 = membrane.ui.bounds(membrane.ui.label.cljs$core$IFn$_invoke$arity$1(self__.text));
var text_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46659,(0),null);
var text_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46659,(1),null);
var padding = (12);
var btn_width = (text_width + padding);
var btn_height = (text_height + padding);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [btn_width,btn_height], null);
}));

(membrane.ui.Button.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Button.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Button(self__.text,self__.on_click,self__.hover_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Button.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Button.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-534561442 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Button.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46651,other46652){
var self__ = this;
var this46651__$1 = this;
return (((!((other46652 == null)))) && ((this46651__$1.constructor === other46652.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46651__$1.text,other46652.text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46651__$1.on_click,other46652.on_click)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46651__$1.hover_QMARK_,other46652.hover_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46651__$1.__extmap,other46652.__extmap)));
}));

(membrane.ui.Button.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Button.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.Button.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),null,new cljs.core.Keyword(null,"text","text",-1790561697),null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Button(self__.text,self__.on_click,self__.hover_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Button.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46649){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46662 = cljs.core.keyword_identical_QMARK_;
var expr__46663 = k__4388__auto__;
if(cljs.core.truth_((pred__46662.cljs$core$IFn$_invoke$arity$2 ? pred__46662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),expr__46663) : pred__46662.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__46663)))){
return (new membrane.ui.Button(G__46649,self__.on_click,self__.hover_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46662.cljs$core$IFn$_invoke$arity$2 ? pred__46662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-click","on-click",1632826543),expr__46663) : pred__46662.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),expr__46663)))){
return (new membrane.ui.Button(self__.text,G__46649,self__.hover_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46662.cljs$core$IFn$_invoke$arity$2 ? pred__46662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hover?","hover?",-1201331489),expr__46663) : pred__46662.call(null,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),expr__46663)))){
return (new membrane.ui.Button(self__.text,self__.on_click,G__46649,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Button(self__.text,self__.on_click,self__.hover_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46649),null));
}
}
}
}));

(membrane.ui.Button.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"text","text",-1790561697),self__.text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.on_click,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hover?","hover?",-1201331489),self__.hover_QMARK_,null))], null),self__.__extmap));
}));

(membrane.ui.Button.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46649){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Button(self__.text,self__.on_click,self__.hover_QMARK_,G__46649,self__.__extmap,self__.__hash));
}));

(membrane.ui.Button.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Button.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"hover?","hover?",439200038,null)], null);
}));

(membrane.ui.Button.cljs$lang$type = true);

(membrane.ui.Button.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Button",null,(1),null));
}));

(membrane.ui.Button.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Button");
}));

/**
 * Positional factory function for membrane.ui/Button.
 */
membrane.ui.__GT_Button = (function membrane$ui$__GT_Button(text,on_click,hover_QMARK_){
return (new membrane.ui.Button(text,on_click,hover_QMARK_,null,null,null));
});

/**
 * Factory function for membrane.ui/Button, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Button = (function membrane$ui$map__GT_Button(G__46653){
var extmap__4419__auto__ = (function (){var G__46665 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46653,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"hover?","hover?",-1201331489)], 0));
if(cljs.core.record_QMARK_(G__46653)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46665);
} else {
return G__46665;
}
})();
return (new membrane.ui.Button(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__46653),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(G__46653),new cljs.core.Keyword(null,"hover?","hover?",-1201331489).cljs$core$IFn$_invoke$arity$1(G__46653),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.Button,(function (draw){
return (function (this$){
var G__46666 = membrane.ui.button_draw(this$);
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__46666) : draw.call(null,G__46666));
});
}));
/**
 * Graphical elem that draws a button. Optional on-click function may be provided that is called with no arguments when button has a mouse-down event.
 */
membrane.ui.button = (function membrane$ui$button(var_args){
var G__46668 = arguments.length;
switch (G__46668) {
case 1:
return membrane.ui.button.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return membrane.ui.button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return membrane.ui.button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.ui.button.cljs$core$IFn$_invoke$arity$1 = (function (text){
return (new membrane.ui.Button(text,null,false,null,null,null));
}));

(membrane.ui.button.cljs$core$IFn$_invoke$arity$2 = (function (text,on_click){
return (new membrane.ui.Button(text,on_click,false,null,null,null));
}));

(membrane.ui.button.cljs$core$IFn$_invoke$arity$3 = (function (text,on_click,hover_QMARK_){
return (new membrane.ui.Button(text,on_click,hover_QMARK_,null,null,null));
}));

(membrane.ui.button.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IMouseEvent}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnClick = (function (on_click,drawables,__meta,__extmap,__hash){
this.on_click = on_click;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnClick.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnClick.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46670,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46674 = k46670;
var G__46674__$1 = (((G__46674 instanceof cljs.core.Keyword))?G__46674.fqn:null);
switch (G__46674__$1) {
case "on-click":
return self__.on_click;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46670,else__4383__auto__);

}
}));

(membrane.ui.OnClick.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46675){
var vec__46676 = p__46675;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46676,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46676,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnClick.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClick.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnClick.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnClick{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.on_click],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnClick.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46669){
var self__ = this;
var G__46669__$1 = this;
return (new cljs.core.RecordIter((0),G__46669__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnClick.prototype.membrane$ui$IMouseEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClick.prototype.membrane$ui$IMouseEvent$_mouse_event$arity$5 = (function (this$,pos,button,mouse_down_QMARK_,mods){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4115__auto__ = mouse_down_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return self__.on_click;
} else {
return and__4115__auto__;
}
})())){
return (self__.on_click.cljs$core$IFn$_invoke$arity$0 ? self__.on_click.cljs$core$IFn$_invoke$arity$0() : self__.on_click.call(null));
} else {
return null;
}
}));

(membrane.ui.OnClick.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClick.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46679,elem){
var vec__46680 = p__46679;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46680,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46680,(1),null);
var vec__46683 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46683,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46683,(1),null);
var vec__46686 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46686,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46686,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnClick.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnClick.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnClick(self__.on_click,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnClick.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnClick.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1125995677 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnClick.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46671,other46672){
var self__ = this;
var this46671__$1 = this;
return (((!((other46672 == null)))) && ((this46671__$1.constructor === other46672.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46671__$1.on_click,other46672.on_click)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46671__$1.drawables,other46672.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46671__$1.__extmap,other46672.__extmap)));
}));

(membrane.ui.OnClick.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClick.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnClick.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnClick(self__.on_click,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnClick.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46669){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46689 = cljs.core.keyword_identical_QMARK_;
var expr__46690 = k__4388__auto__;
if(cljs.core.truth_((pred__46689.cljs$core$IFn$_invoke$arity$2 ? pred__46689.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-click","on-click",1632826543),expr__46690) : pred__46689.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543),expr__46690)))){
return (new membrane.ui.OnClick(G__46669,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46689.cljs$core$IFn$_invoke$arity$2 ? pred__46689.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46690) : pred__46689.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46690)))){
return (new membrane.ui.OnClick(self__.on_click,G__46669,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnClick(self__.on_click,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46669),null));
}
}
}));

(membrane.ui.OnClick.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.on_click,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnClick.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClick.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnClick(self__.on_click,childs,null,null,null));
}));

(membrane.ui.OnClick.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46669){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnClick(self__.on_click,self__.drawables,G__46669,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnClick.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnClick.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-click","on-click",-1021609226,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnClick.cljs$lang$type = true);

(membrane.ui.OnClick.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnClick",null,(1),null));
}));

(membrane.ui.OnClick.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnClick");
}));

/**
 * Positional factory function for membrane.ui/OnClick.
 */
membrane.ui.__GT_OnClick = (function membrane$ui$__GT_OnClick(on_click,drawables){
return (new membrane.ui.OnClick(on_click,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnClick, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnClick = (function membrane$ui$map__GT_OnClick(G__46673){
var extmap__4419__auto__ = (function (){var G__46692 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46673,new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46692);
} else {
return G__46692;
}
})();
return (new membrane.ui.OnClick(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(G__46673),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46673),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnClick,(function (draw){
return (function (this$){
var seq__46693 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46694 = null;
var count__46695 = (0);
var i__46696 = (0);
while(true){
if((i__46696 < count__46695)){
var drawable = chunk__46694.cljs$core$IIndexed$_nth$arity$2(null,i__46696);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48622 = seq__46693;
var G__48623 = chunk__46694;
var G__48624 = count__46695;
var G__48625 = (i__46696 + (1));
seq__46693 = G__48622;
chunk__46694 = G__48623;
count__46695 = G__48624;
i__46696 = G__48625;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46693);
if(temp__5753__auto__){
var seq__46693__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46693__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46693__$1);
var G__48630 = cljs.core.chunk_rest(seq__46693__$1);
var G__48631 = c__4556__auto__;
var G__48632 = cljs.core.count(c__4556__auto__);
var G__48633 = (0);
seq__46693 = G__48630;
chunk__46694 = G__48631;
count__46695 = G__48632;
i__46696 = G__48633;
continue;
} else {
var drawable = cljs.core.first(seq__46693__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48636 = cljs.core.next(seq__46693__$1);
var G__48637 = null;
var G__48638 = (0);
var G__48639 = (0);
seq__46693 = G__48636;
chunk__46694 = G__48637;
count__46695 = G__48638;
i__46696 = G__48639;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wrap an element with a mouse down event handler, on-click. 
 * 
 *   on-click must accept 0 arguments and should return a sequence of effects.
 */
membrane.ui.on_click = (function membrane$ui$on_click(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48640 = arguments.length;
var i__4737__auto___48641 = (0);
while(true){
if((i__4737__auto___48641 < len__4736__auto___48640)){
args__4742__auto__.push((arguments[i__4737__auto___48641]));

var G__48642 = (i__4737__auto___48641 + (1));
i__4737__auto___48641 = G__48642;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_click.cljs$core$IFn$_invoke$arity$variadic = (function (on_click,drawables){
return (new membrane.ui.OnClick(on_click,drawables,null,null,null));
}));

(membrane.ui.on_click.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_click.cljs$lang$applyTo = (function (seq46697){
var G__46698 = cljs.core.first(seq46697);
var seq46697__$1 = cljs.core.next(seq46697);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46698,seq46697__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IMouseEvent}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnMouseDown = (function (on_mouse_down,drawables,__meta,__extmap,__hash){
this.on_mouse_down = on_mouse_down;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnMouseDown.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46701,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46705 = k46701;
var G__46705__$1 = (((G__46705 instanceof cljs.core.Keyword))?G__46705.fqn:null);
switch (G__46705__$1) {
case "on-mouse-down":
return self__.on_mouse_down;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46701,else__4383__auto__);

}
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46706){
var vec__46707 = p__46706;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46707,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46707,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnMouseDown.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseDown.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnMouseDown{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),self__.on_mouse_down],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46700){
var self__ = this;
var G__46700__$1 = this;
return (new cljs.core.RecordIter((0),G__46700__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnMouseDown.prototype.membrane$ui$IMouseEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseDown.prototype.membrane$ui$IMouseEvent$_mouse_event$arity$5 = (function (this$,pos,button,mouse_down_QMARK_,mods){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(mouse_down_QMARK_)){
if(cljs.core.truth_(self__.on_mouse_down)){
return (self__.on_mouse_down.cljs$core$IFn$_invoke$arity$1 ? self__.on_mouse_down.cljs$core$IFn$_invoke$arity$1(pos) : self__.on_mouse_down.call(null,pos));
} else {
return null;
}
} else {
var intents = cljs.core.some((function (p1__46699_SHARP_){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(p1__46699_SHARP_,pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos = temp__5753__auto__;
return cljs.core.seq(membrane.ui._mouse_event(p1__46699_SHARP_,local_pos,button,mouse_down_QMARK_,mods));
} else {
return null;
}
}),cljs.core.reverse(membrane.ui.children(this$__$1)));
return membrane.ui._bubble(this$__$1,intents);
}
}));

(membrane.ui.OnMouseDown.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseDown.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46710,elem){
var vec__46711 = p__46710;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46711,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46711,(1),null);
var vec__46714 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46714,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46714,(1),null);
var vec__46717 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46717,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46717,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnMouseDown(self__.on_mouse_down,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-698428315 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46702,other46703){
var self__ = this;
var this46702__$1 = this;
return (((!((other46703 == null)))) && ((this46702__$1.constructor === other46703.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46702__$1.on_mouse_down,other46703.on_mouse_down)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46702__$1.drawables,other46703.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46702__$1.__extmap,other46703.__extmap)));
}));

(membrane.ui.OnMouseDown.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseDown.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnMouseDown(self__.on_mouse_down,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46700){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46720 = cljs.core.keyword_identical_QMARK_;
var expr__46721 = k__4388__auto__;
if(cljs.core.truth_((pred__46720.cljs$core$IFn$_invoke$arity$2 ? pred__46720.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),expr__46721) : pred__46720.call(null,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),expr__46721)))){
return (new membrane.ui.OnMouseDown(G__46700,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46720.cljs$core$IFn$_invoke$arity$2 ? pred__46720.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46721) : pred__46720.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46721)))){
return (new membrane.ui.OnMouseDown(self__.on_mouse_down,G__46700,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnMouseDown(self__.on_mouse_down,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46700),null));
}
}
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),self__.on_mouse_down,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseDown.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseDown.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnMouseDown(self__.on_mouse_down,childs,null,null,null));
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46700){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnMouseDown(self__.on_mouse_down,self__.drawables,G__46700,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseDown.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnMouseDown.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-mouse-down","on-mouse-down",-1506680299,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnMouseDown.cljs$lang$type = true);

(membrane.ui.OnMouseDown.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnMouseDown",null,(1),null));
}));

(membrane.ui.OnMouseDown.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnMouseDown");
}));

/**
 * Positional factory function for membrane.ui/OnMouseDown.
 */
membrane.ui.__GT_OnMouseDown = (function membrane$ui$__GT_OnMouseDown(on_mouse_down,drawables){
return (new membrane.ui.OnMouseDown(on_mouse_down,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnMouseDown, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnMouseDown = (function membrane$ui$map__GT_OnMouseDown(G__46704){
var extmap__4419__auto__ = (function (){var G__46723 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46704,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46704)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46723);
} else {
return G__46723;
}
})();
return (new membrane.ui.OnMouseDown(new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470).cljs$core$IFn$_invoke$arity$1(G__46704),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46704),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnMouseDown,(function (draw){
return (function (this$){
var seq__46724 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46725 = null;
var count__46726 = (0);
var i__46727 = (0);
while(true){
if((i__46727 < count__46726)){
var drawable = chunk__46725.cljs$core$IIndexed$_nth$arity$2(null,i__46727);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48662 = seq__46724;
var G__48663 = chunk__46725;
var G__48664 = count__46726;
var G__48665 = (i__46727 + (1));
seq__46724 = G__48662;
chunk__46725 = G__48663;
count__46726 = G__48664;
i__46727 = G__48665;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46724);
if(temp__5753__auto__){
var seq__46724__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46724__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46724__$1);
var G__48667 = cljs.core.chunk_rest(seq__46724__$1);
var G__48668 = c__4556__auto__;
var G__48669 = cljs.core.count(c__4556__auto__);
var G__48670 = (0);
seq__46724 = G__48667;
chunk__46725 = G__48668;
count__46726 = G__48669;
i__46727 = G__48670;
continue;
} else {
var drawable = cljs.core.first(seq__46724__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48671 = cljs.core.next(seq__46724__$1);
var G__48672 = null;
var G__48673 = (0);
var G__48674 = (0);
seq__46724 = G__48671;
chunk__46725 = G__48672;
count__46726 = G__48673;
i__46727 = G__48674;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds an event handler for mouse-down events.
 * 
 *   on-mouse-down should take 1 argument [mx my] of the mouse position in local coordinates and return a sequence of effects.
 */
membrane.ui.on_mouse_down = (function membrane$ui$on_mouse_down(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48676 = arguments.length;
var i__4737__auto___48677 = (0);
while(true){
if((i__4737__auto___48677 < len__4736__auto___48676)){
args__4742__auto__.push((arguments[i__4737__auto___48677]));

var G__48678 = (i__4737__auto___48677 + (1));
i__4737__auto___48677 = G__48678;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_mouse_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_mouse_down.cljs$core$IFn$_invoke$arity$variadic = (function (on_mouse_down,drawables){
return (new membrane.ui.OnMouseDown(on_mouse_down,drawables,null,null,null));
}));

(membrane.ui.on_mouse_down.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_mouse_down.cljs$lang$applyTo = (function (seq46728){
var G__46729 = cljs.core.first(seq46728);
var seq46728__$1 = cljs.core.next(seq46728);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46729,seq46728__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IMouseEvent}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnMouseUp = (function (on_mouse_up,drawables,__meta,__extmap,__hash){
this.on_mouse_up = on_mouse_up;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnMouseUp.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46732,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46736 = k46732;
var G__46736__$1 = (((G__46736 instanceof cljs.core.Keyword))?G__46736.fqn:null);
switch (G__46736__$1) {
case "on-mouse-up":
return self__.on_mouse_up;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46732,else__4383__auto__);

}
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46737){
var vec__46738 = p__46737;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46738,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46738,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnMouseUp.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseUp.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnMouseUp{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),self__.on_mouse_up],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46731){
var self__ = this;
var G__46731__$1 = this;
return (new cljs.core.RecordIter((0),G__46731__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnMouseUp.prototype.membrane$ui$IMouseEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseUp.prototype.membrane$ui$IMouseEvent$_mouse_event$arity$5 = (function (this$,pos,button,mouse_down_QMARK_,mods){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(mouse_down_QMARK_)){
var intents = cljs.core.some((function (p1__46730_SHARP_){
var temp__5753__auto__ = membrane.ui.within_bounds_QMARK_(p1__46730_SHARP_,pos);
if(cljs.core.truth_(temp__5753__auto__)){
var local_pos = temp__5753__auto__;
return cljs.core.seq(membrane.ui._mouse_event(p1__46730_SHARP_,local_pos,button,mouse_down_QMARK_,mods));
} else {
return null;
}
}),cljs.core.reverse(membrane.ui.children(this$__$1)));
return membrane.ui._bubble(this$__$1,intents);
} else {
if(cljs.core.truth_(self__.on_mouse_up)){
return (self__.on_mouse_up.cljs$core$IFn$_invoke$arity$1 ? self__.on_mouse_up.cljs$core$IFn$_invoke$arity$1(pos) : self__.on_mouse_up.call(null,pos));
} else {
return null;
}
}
}));

(membrane.ui.OnMouseUp.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseUp.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46741,elem){
var vec__46742 = p__46741;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46742,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46742,(1),null);
var vec__46745 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46745,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46745,(1),null);
var vec__46748 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46748,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46748,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnMouseUp(self__.on_mouse_up,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-778849279 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46733,other46734){
var self__ = this;
var this46733__$1 = this;
return (((!((other46734 == null)))) && ((this46733__$1.constructor === other46734.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46733__$1.on_mouse_up,other46734.on_mouse_up)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46733__$1.drawables,other46734.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46733__$1.__extmap,other46734.__extmap)));
}));

(membrane.ui.OnMouseUp.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseUp.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawables","drawables",1997910160),null,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnMouseUp(self__.on_mouse_up,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46731){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46751 = cljs.core.keyword_identical_QMARK_;
var expr__46752 = k__4388__auto__;
if(cljs.core.truth_((pred__46751.cljs$core$IFn$_invoke$arity$2 ? pred__46751.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),expr__46752) : pred__46751.call(null,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),expr__46752)))){
return (new membrane.ui.OnMouseUp(G__46731,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46751.cljs$core$IFn$_invoke$arity$2 ? pred__46751.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46752) : pred__46751.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46752)))){
return (new membrane.ui.OnMouseUp(self__.on_mouse_up,G__46731,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnMouseUp(self__.on_mouse_up,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46731),null));
}
}
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),self__.on_mouse_up,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseUp.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseUp.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnMouseUp(self__.on_mouse_up,childs,null,null,null));
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46731){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnMouseUp(self__.on_mouse_up,self__.drawables,G__46731,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseUp.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnMouseUp.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-mouse-up","on-mouse-up",299998207,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnMouseUp.cljs$lang$type = true);

(membrane.ui.OnMouseUp.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnMouseUp",null,(1),null));
}));

(membrane.ui.OnMouseUp.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnMouseUp");
}));

/**
 * Positional factory function for membrane.ui/OnMouseUp.
 */
membrane.ui.__GT_OnMouseUp = (function membrane$ui$__GT_OnMouseUp(on_mouse_up,drawables){
return (new membrane.ui.OnMouseUp(on_mouse_up,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnMouseUp, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnMouseUp = (function membrane$ui$map__GT_OnMouseUp(G__46735){
var extmap__4419__auto__ = (function (){var G__46754 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46735,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46735)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46754);
} else {
return G__46754;
}
})();
return (new membrane.ui.OnMouseUp(new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320).cljs$core$IFn$_invoke$arity$1(G__46735),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46735),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnMouseUp,(function (draw){
return (function (this$){
var seq__46755 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46756 = null;
var count__46757 = (0);
var i__46758 = (0);
while(true){
if((i__46758 < count__46757)){
var drawable = chunk__46756.cljs$core$IIndexed$_nth$arity$2(null,i__46758);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48705 = seq__46755;
var G__48706 = chunk__46756;
var G__48707 = count__46757;
var G__48708 = (i__46758 + (1));
seq__46755 = G__48705;
chunk__46756 = G__48706;
count__46757 = G__48707;
i__46758 = G__48708;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46755);
if(temp__5753__auto__){
var seq__46755__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46755__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46755__$1);
var G__48712 = cljs.core.chunk_rest(seq__46755__$1);
var G__48713 = c__4556__auto__;
var G__48714 = cljs.core.count(c__4556__auto__);
var G__48715 = (0);
seq__46755 = G__48712;
chunk__46756 = G__48713;
count__46757 = G__48714;
i__46758 = G__48715;
continue;
} else {
var drawable = cljs.core.first(seq__46755__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48716 = cljs.core.next(seq__46755__$1);
var G__48717 = null;
var G__48718 = (0);
var G__48719 = (0);
seq__46755 = G__48716;
chunk__46756 = G__48717;
count__46757 = G__48718;
i__46758 = G__48719;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds an event handler for mouse-up events.
 * 
 *   on-mouse-up should take 1 argument [mx my] of the mouse position in local coordinates and return a sequence of effects.
 */
membrane.ui.on_mouse_up = (function membrane$ui$on_mouse_up(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48720 = arguments.length;
var i__4737__auto___48721 = (0);
while(true){
if((i__4737__auto___48721 < len__4736__auto___48720)){
args__4742__auto__.push((arguments[i__4737__auto___48721]));

var G__48725 = (i__4737__auto___48721 + (1));
i__4737__auto___48721 = G__48725;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_mouse_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_mouse_up.cljs$core$IFn$_invoke$arity$variadic = (function (on_mouse_up,drawables){
return (new membrane.ui.OnMouseUp(on_mouse_up,drawables,null,null,null));
}));

(membrane.ui.on_mouse_up.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_mouse_up.cljs$lang$applyTo = (function (seq46759){
var G__46760 = cljs.core.first(seq46759);
var seq46759__$1 = cljs.core.next(seq46759);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46760,seq46759__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IMouseMove}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnMouseMove = (function (on_mouse_move,drawables,__meta,__extmap,__hash){
this.on_mouse_move = on_mouse_move;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnMouseMove.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46762,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46766 = k46762;
var G__46766__$1 = (((G__46766 instanceof cljs.core.Keyword))?G__46766.fqn:null);
switch (G__46766__$1) {
case "on-mouse-move":
return self__.on_mouse_move;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46762,else__4383__auto__);

}
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46767){
var vec__46768 = p__46767;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46768,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46768,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnMouseMove.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMove.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnMouseMove{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),self__.on_mouse_move],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46761){
var self__ = this;
var G__46761__$1 = this;
return (new cljs.core.RecordIter((0),G__46761__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnMouseMove.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMove.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46771,elem){
var vec__46772 = p__46771;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46772,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46772,(1),null);
var vec__46775 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46775,(1),null);
var vec__46778 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46778,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46778,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnMouseMove(self__.on_mouse_move,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1514972171 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46763,other46764){
var self__ = this;
var this46763__$1 = this;
return (((!((other46764 == null)))) && ((this46763__$1.constructor === other46764.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46763__$1.on_mouse_move,other46764.on_mouse_move)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46763__$1.drawables,other46764.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46763__$1.__extmap,other46764.__extmap)));
}));

(membrane.ui.OnMouseMove.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMove.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawables","drawables",1997910160),null,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnMouseMove(self__.on_mouse_move,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46761){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46781 = cljs.core.keyword_identical_QMARK_;
var expr__46782 = k__4388__auto__;
if(cljs.core.truth_((pred__46781.cljs$core$IFn$_invoke$arity$2 ? pred__46781.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),expr__46782) : pred__46781.call(null,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),expr__46782)))){
return (new membrane.ui.OnMouseMove(G__46761,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46781.cljs$core$IFn$_invoke$arity$2 ? pred__46781.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46782) : pred__46781.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46782)))){
return (new membrane.ui.OnMouseMove(self__.on_mouse_move,G__46761,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnMouseMove(self__.on_mouse_move,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46761),null));
}
}
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),self__.on_mouse_move,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseMove.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMove.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnMouseMove(self__.on_mouse_move,childs,null,null,null));
}));

(membrane.ui.OnMouseMove.prototype.membrane$ui$IMouseMove$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMove.prototype.membrane$ui$IMouseMove$_mouse_move$arity$2 = (function (this$,p__46784){
var self__ = this;
var vec__46785 = p__46784;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46785,(1),null);
var pos = vec__46785;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_mouse_move)){
return (self__.on_mouse_move.cljs$core$IFn$_invoke$arity$1 ? self__.on_mouse_move.cljs$core$IFn$_invoke$arity$1(pos) : self__.on_mouse_move.call(null,pos));
} else {
return null;
}
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46761){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnMouseMove(self__.on_mouse_move,self__.drawables,G__46761,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseMove.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnMouseMove.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-mouse-move","on-mouse-move",254210653,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnMouseMove.cljs$lang$type = true);

(membrane.ui.OnMouseMove.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnMouseMove",null,(1),null));
}));

(membrane.ui.OnMouseMove.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnMouseMove");
}));

/**
 * Positional factory function for membrane.ui/OnMouseMove.
 */
membrane.ui.__GT_OnMouseMove = (function membrane$ui$__GT_OnMouseMove(on_mouse_move,drawables){
return (new membrane.ui.OnMouseMove(on_mouse_move,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnMouseMove, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnMouseMove = (function membrane$ui$map__GT_OnMouseMove(G__46765){
var extmap__4419__auto__ = (function (){var G__46788 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46765,new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46765)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46788);
} else {
return G__46788;
}
})();
return (new membrane.ui.OnMouseMove(new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874).cljs$core$IFn$_invoke$arity$1(G__46765),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46765),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnMouseMove,(function (draw){
return (function (this$){
var seq__46789 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46790 = null;
var count__46791 = (0);
var i__46792 = (0);
while(true){
if((i__46792 < count__46791)){
var drawable = chunk__46790.cljs$core$IIndexed$_nth$arity$2(null,i__46792);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48756 = seq__46789;
var G__48757 = chunk__46790;
var G__48758 = count__46791;
var G__48759 = (i__46792 + (1));
seq__46789 = G__48756;
chunk__46790 = G__48757;
count__46791 = G__48758;
i__46792 = G__48759;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46789);
if(temp__5753__auto__){
var seq__46789__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46789__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46789__$1);
var G__48763 = cljs.core.chunk_rest(seq__46789__$1);
var G__48764 = c__4556__auto__;
var G__48765 = cljs.core.count(c__4556__auto__);
var G__48766 = (0);
seq__46789 = G__48763;
chunk__46790 = G__48764;
count__46791 = G__48765;
i__46792 = G__48766;
continue;
} else {
var drawable = cljs.core.first(seq__46789__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48771 = cljs.core.next(seq__46789__$1);
var G__48772 = null;
var G__48773 = (0);
var G__48774 = (0);
seq__46789 = G__48771;
chunk__46790 = G__48772;
count__46791 = G__48773;
i__46792 = G__48774;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds an event handler for mouse-move events.
 * 
 *   on-mouse-move down should take 1 argument [mx my] of the mouse position in local coordinates and return a sequence of effects.
 */
membrane.ui.on_mouse_move = (function membrane$ui$on_mouse_move(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48781 = arguments.length;
var i__4737__auto___48782 = (0);
while(true){
if((i__4737__auto___48782 < len__4736__auto___48781)){
args__4742__auto__.push((arguments[i__4737__auto___48782]));

var G__48783 = (i__4737__auto___48782 + (1));
i__4737__auto___48782 = G__48783;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_mouse_move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_mouse_move.cljs$core$IFn$_invoke$arity$variadic = (function (on_mouse_move,drawables){
return (new membrane.ui.OnMouseMove(on_mouse_move,drawables,null,null,null));
}));

(membrane.ui.on_mouse_move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_mouse_move.cljs$lang$applyTo = (function (seq46793){
var G__46794 = cljs.core.first(seq46793);
var seq46793__$1 = cljs.core.next(seq46793);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46794,seq46793__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IHasMouseMoveGlobal}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnMouseMoveGlobal = (function (on_mouse_move_global,drawables,__meta,__extmap,__hash){
this.on_mouse_move_global = on_mouse_move_global;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46796,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46800 = k46796;
var G__46800__$1 = (((G__46800 instanceof cljs.core.Keyword))?G__46800.fqn:null);
switch (G__46800__$1) {
case "on-mouse-move-global":
return self__.on_mouse_move_global;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46796,else__4383__auto__);

}
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46801){
var vec__46802 = p__46801;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46802,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46802,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IHasMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IHasMouseMoveGlobal$has_mouse_move_global$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnMouseMoveGlobal{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-mouse-move-global","on-mouse-move-global",-2007025220),self__.on_mouse_move_global],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46795){
var self__ = this;
var G__46795__$1 = this;
return (new cljs.core.RecordIter((0),G__46795__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mouse-move-global","on-mouse-move-global",-2007025220),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46805,elem){
var vec__46806 = p__46805;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46806,(1),null);
var vec__46809 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46809,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46809,(1),null);
var vec__46812 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46812,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46812,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnMouseMoveGlobal(self__.on_mouse_move_global,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1067455229 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46797,other46798){
var self__ = this;
var this46797__$1 = this;
return (((!((other46798 == null)))) && ((this46797__$1.constructor === other46798.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46797__$1.on_mouse_move_global,other46798.on_mouse_move_global)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46797__$1.drawables,other46798.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46797__$1.__extmap,other46798.__extmap)));
}));

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawables","drawables",1997910160),null,new cljs.core.Keyword(null,"on-mouse-move-global","on-mouse-move-global",-2007025220),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnMouseMoveGlobal(self__.on_mouse_move_global,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46795){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46815 = cljs.core.keyword_identical_QMARK_;
var expr__46816 = k__4388__auto__;
if(cljs.core.truth_((pred__46815.cljs$core$IFn$_invoke$arity$2 ? pred__46815.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mouse-move-global","on-mouse-move-global",-2007025220),expr__46816) : pred__46815.call(null,new cljs.core.Keyword(null,"on-mouse-move-global","on-mouse-move-global",-2007025220),expr__46816)))){
return (new membrane.ui.OnMouseMoveGlobal(G__46795,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46815.cljs$core$IFn$_invoke$arity$2 ? pred__46815.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46816) : pred__46815.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46816)))){
return (new membrane.ui.OnMouseMoveGlobal(self__.on_mouse_move_global,G__46795,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnMouseMoveGlobal(self__.on_mouse_move_global,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46795),null));
}
}
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-mouse-move-global","on-mouse-move-global",-2007025220),self__.on_mouse_move_global,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnMouseMoveGlobal(self__.on_mouse_move_global,childs,null,null,null));
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46795){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnMouseMoveGlobal(self__.on_mouse_move_global,self__.drawables,G__46795,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseMoveGlobal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this$,pos){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_mouse_move_global)){
return (self__.on_mouse_move_global.cljs$core$IFn$_invoke$arity$1 ? self__.on_mouse_move_global.cljs$core$IFn$_invoke$arity$1(pos) : self__.on_mouse_move_global.call(null,pos));
} else {
return null;
}
}));

(membrane.ui.OnMouseMoveGlobal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-mouse-move-global","on-mouse-move-global",-366493693,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnMouseMoveGlobal.cljs$lang$type = true);

(membrane.ui.OnMouseMoveGlobal.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnMouseMoveGlobal",null,(1),null));
}));

(membrane.ui.OnMouseMoveGlobal.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnMouseMoveGlobal");
}));

/**
 * Positional factory function for membrane.ui/OnMouseMoveGlobal.
 */
membrane.ui.__GT_OnMouseMoveGlobal = (function membrane$ui$__GT_OnMouseMoveGlobal(on_mouse_move_global,drawables){
return (new membrane.ui.OnMouseMoveGlobal(on_mouse_move_global,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnMouseMoveGlobal, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnMouseMoveGlobal = (function membrane$ui$map__GT_OnMouseMoveGlobal(G__46799){
var extmap__4419__auto__ = (function (){var G__46818 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46799,new cljs.core.Keyword(null,"on-mouse-move-global","on-mouse-move-global",-2007025220),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46799)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46818);
} else {
return G__46818;
}
})();
return (new membrane.ui.OnMouseMoveGlobal(new cljs.core.Keyword(null,"on-mouse-move-global","on-mouse-move-global",-2007025220).cljs$core$IFn$_invoke$arity$1(G__46799),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46799),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnMouseMoveGlobal,(function (draw){
return (function (this$){
var seq__46819 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46820 = null;
var count__46821 = (0);
var i__46822 = (0);
while(true){
if((i__46822 < count__46821)){
var drawable = chunk__46820.cljs$core$IIndexed$_nth$arity$2(null,i__46822);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48837 = seq__46819;
var G__48838 = chunk__46820;
var G__48839 = count__46821;
var G__48840 = (i__46822 + (1));
seq__46819 = G__48837;
chunk__46820 = G__48838;
count__46821 = G__48839;
i__46822 = G__48840;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46819);
if(temp__5753__auto__){
var seq__46819__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46819__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46819__$1);
var G__48844 = cljs.core.chunk_rest(seq__46819__$1);
var G__48845 = c__4556__auto__;
var G__48846 = cljs.core.count(c__4556__auto__);
var G__48847 = (0);
seq__46819 = G__48844;
chunk__46820 = G__48845;
count__46821 = G__48846;
i__46822 = G__48847;
continue;
} else {
var drawable = cljs.core.first(seq__46819__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48849 = cljs.core.next(seq__46819__$1);
var G__48850 = null;
var G__48851 = (0);
var G__48852 = (0);
seq__46819 = G__48849;
chunk__46820 = G__48850;
count__46821 = G__48851;
i__46822 = G__48852;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds an event handler for mouse-move-global events.
 * 
 *   on-mouse-move-global down should take 1 argument [mx my] of the mouse position in global coordinates and return a sequence of effects.
 */
membrane.ui.on_mouse_move_global = (function membrane$ui$on_mouse_move_global(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48854 = arguments.length;
var i__4737__auto___48855 = (0);
while(true){
if((i__4737__auto___48855 < len__4736__auto___48854)){
args__4742__auto__.push((arguments[i__4737__auto___48855]));

var G__48856 = (i__4737__auto___48855 + (1));
i__4737__auto___48855 = G__48856;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_mouse_move_global.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_mouse_move_global.cljs$core$IFn$_invoke$arity$variadic = (function (on_mouse_move_global,drawables){
return (new membrane.ui.OnMouseMoveGlobal(on_mouse_move_global,drawables,null,null,null));
}));

(membrane.ui.on_mouse_move_global.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_mouse_move_global.cljs$lang$applyTo = (function (seq46823){
var G__46824 = cljs.core.first(seq46823);
var seq46823__$1 = cljs.core.next(seq46823);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46824,seq46823__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IMouseEvent}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnMouseEvent = (function (on_mouse_event,drawables,__meta,__extmap,__hash){
this.on_mouse_event = on_mouse_event;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnMouseEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46826,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46830 = k46826;
var G__46830__$1 = (((G__46830 instanceof cljs.core.Keyword))?G__46830.fqn:null);
switch (G__46830__$1) {
case "on-mouse-event":
return self__.on_mouse_event;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46826,else__4383__auto__);

}
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46831){
var vec__46832 = p__46831;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46832,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46832,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnMouseEvent{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-mouse-event","on-mouse-event",-928239122),self__.on_mouse_event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46825){
var self__ = this;
var G__46825__$1 = this;
return (new cljs.core.RecordIter((0),G__46825__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-mouse-event","on-mouse-event",-928239122),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IMouseEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IMouseEvent$_mouse_event$arity$5 = (function (this$,pos,button,mouse_down_QMARK_,mods){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_mouse_event)){
return (self__.on_mouse_event.cljs$core$IFn$_invoke$arity$4 ? self__.on_mouse_event.cljs$core$IFn$_invoke$arity$4(pos,button,mouse_down_QMARK_,mods) : self__.on_mouse_event.call(null,pos,button,mouse_down_QMARK_,mods));
} else {
return null;
}
}));

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46835,elem){
var vec__46836 = p__46835;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46836,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46836,(1),null);
var vec__46839 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46839,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46839,(1),null);
var vec__46842 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46842,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46842,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnMouseEvent(self__.on_mouse_event,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2107328521 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46827,other46828){
var self__ = this;
var this46827__$1 = this;
return (((!((other46828 == null)))) && ((this46827__$1.constructor === other46828.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46827__$1.on_mouse_event,other46828.on_mouse_event)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46827__$1.drawables,other46828.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46827__$1.__extmap,other46828.__extmap)));
}));

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-event","on-mouse-event",-928239122),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnMouseEvent(self__.on_mouse_event,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46825){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46845 = cljs.core.keyword_identical_QMARK_;
var expr__46846 = k__4388__auto__;
if(cljs.core.truth_((pred__46845.cljs$core$IFn$_invoke$arity$2 ? pred__46845.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-mouse-event","on-mouse-event",-928239122),expr__46846) : pred__46845.call(null,new cljs.core.Keyword(null,"on-mouse-event","on-mouse-event",-928239122),expr__46846)))){
return (new membrane.ui.OnMouseEvent(G__46825,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46845.cljs$core$IFn$_invoke$arity$2 ? pred__46845.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46846) : pred__46845.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46846)))){
return (new membrane.ui.OnMouseEvent(self__.on_mouse_event,G__46825,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnMouseEvent(self__.on_mouse_event,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46825),null));
}
}
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-mouse-event","on-mouse-event",-928239122),self__.on_mouse_event,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseEvent.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnMouseEvent(self__.on_mouse_event,childs,null,null,null));
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46825){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnMouseEvent(self__.on_mouse_event,self__.drawables,G__46825,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnMouseEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnMouseEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-mouse-event","on-mouse-event",712292405,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnMouseEvent.cljs$lang$type = true);

(membrane.ui.OnMouseEvent.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnMouseEvent",null,(1),null));
}));

(membrane.ui.OnMouseEvent.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnMouseEvent");
}));

/**
 * Positional factory function for membrane.ui/OnMouseEvent.
 */
membrane.ui.__GT_OnMouseEvent = (function membrane$ui$__GT_OnMouseEvent(on_mouse_event,drawables){
return (new membrane.ui.OnMouseEvent(on_mouse_event,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnMouseEvent, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnMouseEvent = (function membrane$ui$map__GT_OnMouseEvent(G__46829){
var extmap__4419__auto__ = (function (){var G__46848 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46829,new cljs.core.Keyword(null,"on-mouse-event","on-mouse-event",-928239122),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46829)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46848);
} else {
return G__46848;
}
})();
return (new membrane.ui.OnMouseEvent(new cljs.core.Keyword(null,"on-mouse-event","on-mouse-event",-928239122).cljs$core$IFn$_invoke$arity$1(G__46829),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46829),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnMouseEvent,(function (draw){
return (function (this$){
var seq__46849 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46850 = null;
var count__46851 = (0);
var i__46852 = (0);
while(true){
if((i__46852 < count__46851)){
var drawable = chunk__46850.cljs$core$IIndexed$_nth$arity$2(null,i__46852);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48895 = seq__46849;
var G__48896 = chunk__46850;
var G__48897 = count__46851;
var G__48898 = (i__46852 + (1));
seq__46849 = G__48895;
chunk__46850 = G__48896;
count__46851 = G__48897;
i__46852 = G__48898;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46849);
if(temp__5753__auto__){
var seq__46849__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46849__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46849__$1);
var G__48899 = cljs.core.chunk_rest(seq__46849__$1);
var G__48900 = c__4556__auto__;
var G__48901 = cljs.core.count(c__4556__auto__);
var G__48902 = (0);
seq__46849 = G__48899;
chunk__46850 = G__48900;
count__46851 = G__48901;
i__46852 = G__48902;
continue;
} else {
var drawable = cljs.core.first(seq__46849__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48903 = cljs.core.next(seq__46849__$1);
var G__48904 = null;
var G__48905 = (0);
var G__48906 = (0);
seq__46849 = G__48903;
chunk__46850 = G__48904;
count__46851 = G__48905;
i__46852 = G__48906;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds an event handler for mouse events.
 * 
 *   on-mouse-event should take 4 arguments [pos button mouse-down? mods] and return a sequence of effects.
 */
membrane.ui.on_mouse_event = (function membrane$ui$on_mouse_event(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48911 = arguments.length;
var i__4737__auto___48912 = (0);
while(true){
if((i__4737__auto___48912 < len__4736__auto___48911)){
args__4742__auto__.push((arguments[i__4737__auto___48912]));

var G__48913 = (i__4737__auto___48912 + (1));
i__4737__auto___48912 = G__48913;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_mouse_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_mouse_event.cljs$core$IFn$_invoke$arity$variadic = (function (on_mouse_event,drawables){
return (new membrane.ui.OnMouseEvent(on_mouse_event,drawables,null,null,null));
}));

(membrane.ui.on_mouse_event.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_mouse_event.cljs$lang$applyTo = (function (seq46853){
var G__46854 = cljs.core.first(seq46853);
var seq46853__$1 = cljs.core.next(seq46853);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46854,seq46853__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {membrane.ui.IDrop}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnDrop = (function (on_drop,drawables,__meta,__extmap,__hash){
this.on_drop = on_drop;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnDrop.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnDrop.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46856,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46860 = k46856;
var G__46860__$1 = (((G__46860 instanceof cljs.core.Keyword))?G__46860.fqn:null);
switch (G__46860__$1) {
case "on-drop":
return self__.on_drop;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46856,else__4383__auto__);

}
}));

(membrane.ui.OnDrop.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46861){
var vec__46862 = p__46861;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46862,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46862,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnDrop.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnDrop.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnDrop.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnDrop{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),self__.on_drop],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnDrop.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46855){
var self__ = this;
var G__46855__$1 = this;
return (new cljs.core.RecordIter((0),G__46855__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnDrop.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnDrop.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46865,elem){
var vec__46866 = p__46865;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46866,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46866,(1),null);
var vec__46869 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46869,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46869,(1),null);
var vec__46872 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46872,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46872,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnDrop.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnDrop.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnDrop(self__.on_drop,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnDrop.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnDrop.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1580704880 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnDrop.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46857,other46858){
var self__ = this;
var this46857__$1 = this;
return (((!((other46858 == null)))) && ((this46857__$1.constructor === other46858.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46857__$1.on_drop,other46858.on_drop)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46857__$1.drawables,other46858.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46857__$1.__extmap,other46858.__extmap)));
}));

(membrane.ui.OnDrop.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnDrop.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnDrop.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnDrop(self__.on_drop,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnDrop.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46855){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46875 = cljs.core.keyword_identical_QMARK_;
var expr__46876 = k__4388__auto__;
if(cljs.core.truth_((pred__46875.cljs$core$IFn$_invoke$arity$2 ? pred__46875.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),expr__46876) : pred__46875.call(null,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),expr__46876)))){
return (new membrane.ui.OnDrop(G__46855,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46875.cljs$core$IFn$_invoke$arity$2 ? pred__46875.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46876) : pred__46875.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46876)))){
return (new membrane.ui.OnDrop(self__.on_drop,G__46855,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnDrop(self__.on_drop,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46855),null));
}
}
}));

(membrane.ui.OnDrop.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),self__.on_drop,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnDrop.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnDrop.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnDrop(self__.on_drop,childs,null,null,null));
}));

(membrane.ui.OnDrop.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46855){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnDrop(self__.on_drop,self__.drawables,G__46855,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnDrop.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnDrop.prototype.membrane$ui$IDrop$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnDrop.prototype.membrane$ui$IDrop$_drop$arity$3 = (function (this$,paths,pos){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_drop)){
return (self__.on_drop.cljs$core$IFn$_invoke$arity$2 ? self__.on_drop.cljs$core$IFn$_invoke$arity$2(paths,pos) : self__.on_drop.call(null,paths,pos));
} else {
return null;
}
}));

(membrane.ui.OnDrop.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-drop","on-drop",-786567278,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnDrop.cljs$lang$type = true);

(membrane.ui.OnDrop.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnDrop",null,(1),null));
}));

(membrane.ui.OnDrop.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnDrop");
}));

/**
 * Positional factory function for membrane.ui/OnDrop.
 */
membrane.ui.__GT_OnDrop = (function membrane$ui$__GT_OnDrop(on_drop,drawables){
return (new membrane.ui.OnDrop(on_drop,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnDrop, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnDrop = (function membrane$ui$map__GT_OnDrop(G__46859){
var extmap__4419__auto__ = (function (){var G__46878 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46859,new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46859)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46878);
} else {
return G__46878;
}
})();
return (new membrane.ui.OnDrop(new cljs.core.Keyword(null,"on-drop","on-drop",1867868491).cljs$core$IFn$_invoke$arity$1(G__46859),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46859),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnDrop,(function (draw){
return (function (this$){
var seq__46879 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46880 = null;
var count__46881 = (0);
var i__46882 = (0);
while(true){
if((i__46882 < count__46881)){
var drawable = chunk__46880.cljs$core$IIndexed$_nth$arity$2(null,i__46882);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48959 = seq__46879;
var G__48960 = chunk__46880;
var G__48961 = count__46881;
var G__48962 = (i__46882 + (1));
seq__46879 = G__48959;
chunk__46880 = G__48960;
count__46881 = G__48961;
i__46882 = G__48962;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46879);
if(temp__5753__auto__){
var seq__46879__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46879__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46879__$1);
var G__48967 = cljs.core.chunk_rest(seq__46879__$1);
var G__48968 = c__4556__auto__;
var G__48969 = cljs.core.count(c__4556__auto__);
var G__48970 = (0);
seq__46879 = G__48967;
chunk__46880 = G__48968;
count__46881 = G__48969;
i__46882 = G__48970;
continue;
} else {
var drawable = cljs.core.first(seq__46879__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48971 = cljs.core.next(seq__46879__$1);
var G__48972 = null;
var G__48973 = (0);
var G__48974 = (0);
seq__46879 = G__48971;
chunk__46880 = G__48972;
count__46881 = G__48973;
i__46882 = G__48974;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds an event handler for drop events.
 * 
 *   on-drop should take 2 arguments [paths pos] and return a sequence of effects.
 */
membrane.ui.on_drop = (function membrane$ui$on_drop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48979 = arguments.length;
var i__4737__auto___48980 = (0);
while(true){
if((i__4737__auto___48980 < len__4736__auto___48979)){
args__4742__auto__.push((arguments[i__4737__auto___48980]));

var G__48981 = (i__4737__auto___48980 + (1));
i__4737__auto___48980 = G__48981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_drop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_drop.cljs$core$IFn$_invoke$arity$variadic = (function (on_drop,drawables){
return (new membrane.ui.OnDrop(on_drop,drawables,null,null,null));
}));

(membrane.ui.on_drop.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_drop.cljs$lang$applyTo = (function (seq46883){
var G__46884 = cljs.core.first(seq46883);
var seq46883__$1 = cljs.core.next(seq46883);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46884,seq46883__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IKeyPress}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnKeyPress = (function (on_key_press,drawables,__meta,__extmap,__hash){
this.on_key_press = on_key_press;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnKeyPress.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyPress.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.boolean$(self__.on_key_press);
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46886,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46890 = k46886;
var G__46890__$1 = (((G__46890 instanceof cljs.core.Keyword))?G__46890.fqn:null);
switch (G__46890__$1) {
case "on-key-press":
return self__.on_key_press;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46886,else__4383__auto__);

}
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46891){
var vec__46892 = p__46891;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46892,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46892,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnKeyPress.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyPress.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnKeyPress{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),self__.on_key_press],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46885){
var self__ = this;
var G__46885__$1 = this;
return (new cljs.core.RecordIter((0),G__46885__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnKeyPress.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyPress.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46895,elem){
var vec__46896 = p__46895;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46896,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46896,(1),null);
var vec__46899 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46899,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46899,(1),null);
var vec__46902 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46902,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46902,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnKeyPress(self__.on_key_press,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnKeyPress.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyPress.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_key_press)){
return (self__.on_key_press.cljs$core$IFn$_invoke$arity$1 ? self__.on_key_press.cljs$core$IFn$_invoke$arity$1(key) : self__.on_key_press.call(null,key));
} else {
return null;
}
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (515211784 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46887,other46888){
var self__ = this;
var this46887__$1 = this;
return (((!((other46888 == null)))) && ((this46887__$1.constructor === other46888.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46887__$1.on_key_press,other46888.on_key_press)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46887__$1.drawables,other46888.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46887__$1.__extmap,other46888.__extmap)));
}));

(membrane.ui.OnKeyPress.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyPress.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnKeyPress(self__.on_key_press,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46885){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46905 = cljs.core.keyword_identical_QMARK_;
var expr__46906 = k__4388__auto__;
if(cljs.core.truth_((pred__46905.cljs$core$IFn$_invoke$arity$2 ? pred__46905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),expr__46906) : pred__46905.call(null,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),expr__46906)))){
return (new membrane.ui.OnKeyPress(G__46885,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46905.cljs$core$IFn$_invoke$arity$2 ? pred__46905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46906) : pred__46905.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46906)))){
return (new membrane.ui.OnKeyPress(self__.on_key_press,G__46885,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnKeyPress(self__.on_key_press,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46885),null));
}
}
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),self__.on_key_press,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnKeyPress.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyPress.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnKeyPress(self__.on_key_press,childs,null,null,null));
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46885){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnKeyPress(self__.on_key_press,self__.drawables,G__46885,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnKeyPress.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnKeyPress.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-key-press","on-key-press",1240967850,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnKeyPress.cljs$lang$type = true);

(membrane.ui.OnKeyPress.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnKeyPress",null,(1),null));
}));

(membrane.ui.OnKeyPress.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnKeyPress");
}));

/**
 * Positional factory function for membrane.ui/OnKeyPress.
 */
membrane.ui.__GT_OnKeyPress = (function membrane$ui$__GT_OnKeyPress(on_key_press,drawables){
return (new membrane.ui.OnKeyPress(on_key_press,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnKeyPress, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnKeyPress = (function membrane$ui$map__GT_OnKeyPress(G__46889){
var extmap__4419__auto__ = (function (){var G__46908 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46889,new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46889)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46908);
} else {
return G__46908;
}
})();
return (new membrane.ui.OnKeyPress(new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677).cljs$core$IFn$_invoke$arity$1(G__46889),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46889),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnKeyPress,(function (draw){
return (function (this$){
var seq__46909 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46910 = null;
var count__46911 = (0);
var i__46912 = (0);
while(true){
if((i__46912 < count__46911)){
var drawable = chunk__46910.cljs$core$IIndexed$_nth$arity$2(null,i__46912);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__48997 = seq__46909;
var G__48998 = chunk__46910;
var G__48999 = count__46911;
var G__49000 = (i__46912 + (1));
seq__46909 = G__48997;
chunk__46910 = G__48998;
count__46911 = G__48999;
i__46912 = G__49000;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46909);
if(temp__5753__auto__){
var seq__46909__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46909__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46909__$1);
var G__49001 = cljs.core.chunk_rest(seq__46909__$1);
var G__49002 = c__4556__auto__;
var G__49003 = cljs.core.count(c__4556__auto__);
var G__49004 = (0);
seq__46909 = G__49001;
chunk__46910 = G__49002;
count__46911 = G__49003;
i__46912 = G__49004;
continue;
} else {
var drawable = cljs.core.first(seq__46909__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49005 = cljs.core.next(seq__46909__$1);
var G__49006 = null;
var G__49007 = (0);
var G__49008 = (0);
seq__46909 = G__49005;
chunk__46910 = G__49006;
count__46911 = G__49007;
i__46912 = G__49008;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds an event handler for key-press events.
 * 
 *   on-key-press should take 1 argument key and return a sequence of effects.
 */
membrane.ui.on_key_press = (function membrane$ui$on_key_press(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49009 = arguments.length;
var i__4737__auto___49010 = (0);
while(true){
if((i__4737__auto___49010 < len__4736__auto___49009)){
args__4742__auto__.push((arguments[i__4737__auto___49010]));

var G__49011 = (i__4737__auto___49010 + (1));
i__4737__auto___49010 = G__49011;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_key_press.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_key_press.cljs$core$IFn$_invoke$arity$variadic = (function (on_key_press,drawables){
return (new membrane.ui.OnKeyPress(on_key_press,drawables,null,null,null));
}));

(membrane.ui.on_key_press.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_key_press.cljs$lang$applyTo = (function (seq46913){
var G__46914 = cljs.core.first(seq46913);
var seq46913__$1 = cljs.core.next(seq46913);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46914,seq46913__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IKeyEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnKeyEvent = (function (on_key_event,drawables,__meta,__extmap,__hash){
this.on_key_event = on_key_event;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnKeyEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46916,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46920 = k46916;
var G__46920__$1 = (((G__46920 instanceof cljs.core.Keyword))?G__46920.fqn:null);
switch (G__46920__$1) {
case "on-key-event":
return self__.on_key_event;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46916,else__4383__auto__);

}
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46921){
var vec__46922 = p__46921;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46922,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46922,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnKeyEvent{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-key-event","on-key-event",919254313),self__.on_key_event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46915){
var self__ = this;
var G__46915__$1 = this;
return (new cljs.core.RecordIter((0),G__46915__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-key-event","on-key-event",919254313),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46925,elem){
var vec__46926 = p__46925;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46926,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46926,(1),null);
var vec__46929 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46929,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46929,(1),null);
var vec__46932 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46932,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46932,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnKeyEvent(self__.on_key_event,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IKeyEvent$_key_event$arity$5 = (function (this$,key,scancode,action,mods){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_key_event)){
return (self__.on_key_event.cljs$core$IFn$_invoke$arity$4 ? self__.on_key_event.cljs$core$IFn$_invoke$arity$4(key,scancode,action,mods) : self__.on_key_event.call(null,key,scancode,action,mods));
} else {
return null;
}
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2051278419 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46917,other46918){
var self__ = this;
var this46917__$1 = this;
return (((!((other46918 == null)))) && ((this46917__$1.constructor === other46918.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46917__$1.on_key_event,other46918.on_key_event)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46917__$1.drawables,other46918.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46917__$1.__extmap,other46918.__extmap)));
}));

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-key-event","on-key-event",919254313),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnKeyEvent(self__.on_key_event,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46915){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46935 = cljs.core.keyword_identical_QMARK_;
var expr__46936 = k__4388__auto__;
if(cljs.core.truth_((pred__46935.cljs$core$IFn$_invoke$arity$2 ? pred__46935.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-key-event","on-key-event",919254313),expr__46936) : pred__46935.call(null,new cljs.core.Keyword(null,"on-key-event","on-key-event",919254313),expr__46936)))){
return (new membrane.ui.OnKeyEvent(G__46915,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46935.cljs$core$IFn$_invoke$arity$2 ? pred__46935.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46936) : pred__46935.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46936)))){
return (new membrane.ui.OnKeyEvent(self__.on_key_event,G__46915,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnKeyEvent(self__.on_key_event,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46915),null));
}
}
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-key-event","on-key-event",919254313),self__.on_key_event,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnKeyEvent(self__.on_key_event,childs,null,null,null));
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46915){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnKeyEvent(self__.on_key_event,self__.drawables,G__46915,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnKeyEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyEvent.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.boolean$(self__.on_key_event);
}));

(membrane.ui.OnKeyEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-key-event","on-key-event",-1735181456,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnKeyEvent.cljs$lang$type = true);

(membrane.ui.OnKeyEvent.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnKeyEvent",null,(1),null));
}));

(membrane.ui.OnKeyEvent.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnKeyEvent");
}));

/**
 * Positional factory function for membrane.ui/OnKeyEvent.
 */
membrane.ui.__GT_OnKeyEvent = (function membrane$ui$__GT_OnKeyEvent(on_key_event,drawables){
return (new membrane.ui.OnKeyEvent(on_key_event,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnKeyEvent, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnKeyEvent = (function membrane$ui$map__GT_OnKeyEvent(G__46919){
var extmap__4419__auto__ = (function (){var G__46938 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46919,new cljs.core.Keyword(null,"on-key-event","on-key-event",919254313),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46919)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46938);
} else {
return G__46938;
}
})();
return (new membrane.ui.OnKeyEvent(new cljs.core.Keyword(null,"on-key-event","on-key-event",919254313).cljs$core$IFn$_invoke$arity$1(G__46919),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46919),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnKeyEvent,(function (draw){
return (function (this$){
var seq__46939 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46940 = null;
var count__46941 = (0);
var i__46942 = (0);
while(true){
if((i__46942 < count__46941)){
var drawable = chunk__46940.cljs$core$IIndexed$_nth$arity$2(null,i__46942);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49017 = seq__46939;
var G__49018 = chunk__46940;
var G__49019 = count__46941;
var G__49020 = (i__46942 + (1));
seq__46939 = G__49017;
chunk__46940 = G__49018;
count__46941 = G__49019;
i__46942 = G__49020;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46939);
if(temp__5753__auto__){
var seq__46939__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46939__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46939__$1);
var G__49021 = cljs.core.chunk_rest(seq__46939__$1);
var G__49022 = c__4556__auto__;
var G__49023 = cljs.core.count(c__4556__auto__);
var G__49024 = (0);
seq__46939 = G__49021;
chunk__46940 = G__49022;
count__46941 = G__49023;
i__46942 = G__49024;
continue;
} else {
var drawable = cljs.core.first(seq__46939__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49025 = cljs.core.next(seq__46939__$1);
var G__49026 = null;
var G__49027 = (0);
var G__49028 = (0);
seq__46939 = G__49025;
chunk__46940 = G__49026;
count__46941 = G__49027;
i__46942 = G__49028;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds a handler for key events.
 * 
 *   on-key-event should take 4 arguments key, scancode, action, mods and return a sequence of effects.
 */
membrane.ui.on_key_event = (function membrane$ui$on_key_event(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49029 = arguments.length;
var i__4737__auto___49030 = (0);
while(true){
if((i__4737__auto___49030 < len__4736__auto___49029)){
args__4742__auto__.push((arguments[i__4737__auto___49030]));

var G__49031 = (i__4737__auto___49030 + (1));
i__4737__auto___49030 = G__49031;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_key_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_key_event.cljs$core$IFn$_invoke$arity$variadic = (function (on_key_event,drawables){
return (new membrane.ui.OnKeyEvent(on_key_event,drawables,null,null,null));
}));

(membrane.ui.on_key_event.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_key_event.cljs$lang$applyTo = (function (seq46943){
var G__46944 = cljs.core.first(seq46943);
var seq46943__$1 = cljs.core.next(seq46943);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46944,seq46943__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {membrane.ui.IBubble}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnBubble = (function (on_bubble,drawables,__meta,__extmap,__hash){
this.on_bubble = on_bubble;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnBubble.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnBubble.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46946,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46950 = k46946;
var G__46950__$1 = (((G__46950 instanceof cljs.core.Keyword))?G__46950.fqn:null);
switch (G__46950__$1) {
case "on-bubble":
return self__.on_bubble;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46946,else__4383__auto__);

}
}));

(membrane.ui.OnBubble.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46951){
var vec__46952 = p__46951;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46952,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46952,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnBubble.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnBubble.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnBubble.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnBubble{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-bubble","on-bubble",1928851008),self__.on_bubble],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnBubble.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46945){
var self__ = this;
var G__46945__$1 = this;
return (new cljs.core.RecordIter((0),G__46945__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-bubble","on-bubble",1928851008),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnBubble.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnBubble.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46955,elem){
var vec__46956 = p__46955;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46956,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46956,(1),null);
var vec__46959 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46959,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46959,(1),null);
var vec__46962 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46962,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46962,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnBubble.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnBubble.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnBubble(self__.on_bubble,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnBubble.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnBubble.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1969513103 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnBubble.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46947,other46948){
var self__ = this;
var this46947__$1 = this;
return (((!((other46948 == null)))) && ((this46947__$1.constructor === other46948.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46947__$1.on_bubble,other46948.on_bubble)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46947__$1.drawables,other46948.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46947__$1.__extmap,other46948.__extmap)));
}));

(membrane.ui.OnBubble.prototype.membrane$ui$IBubble$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnBubble.prototype.membrane$ui$IBubble$_bubble$arity$2 = (function (this$,effects){
var self__ = this;
var this$__$1 = this;
return (self__.on_bubble.cljs$core$IFn$_invoke$arity$1 ? self__.on_bubble.cljs$core$IFn$_invoke$arity$1(effects) : self__.on_bubble.call(null,effects));
}));

(membrane.ui.OnBubble.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnBubble.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnBubble.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-bubble","on-bubble",1928851008),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnBubble(self__.on_bubble,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnBubble.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46945){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46965 = cljs.core.keyword_identical_QMARK_;
var expr__46966 = k__4388__auto__;
if(cljs.core.truth_((pred__46965.cljs$core$IFn$_invoke$arity$2 ? pred__46965.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-bubble","on-bubble",1928851008),expr__46966) : pred__46965.call(null,new cljs.core.Keyword(null,"on-bubble","on-bubble",1928851008),expr__46966)))){
return (new membrane.ui.OnBubble(G__46945,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46965.cljs$core$IFn$_invoke$arity$2 ? pred__46965.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46966) : pred__46965.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46966)))){
return (new membrane.ui.OnBubble(self__.on_bubble,G__46945,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnBubble(self__.on_bubble,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46945),null));
}
}
}));

(membrane.ui.OnBubble.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-bubble","on-bubble",1928851008),self__.on_bubble,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnBubble.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnBubble.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnBubble(self__.on_bubble,childs,null,null,null));
}));

(membrane.ui.OnBubble.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46945){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnBubble(self__.on_bubble,self__.drawables,G__46945,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnBubble.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnBubble.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-bubble","on-bubble",-725584761,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnBubble.cljs$lang$type = true);

(membrane.ui.OnBubble.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnBubble",null,(1),null));
}));

(membrane.ui.OnBubble.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnBubble");
}));

/**
 * Positional factory function for membrane.ui/OnBubble.
 */
membrane.ui.__GT_OnBubble = (function membrane$ui$__GT_OnBubble(on_bubble,drawables){
return (new membrane.ui.OnBubble(on_bubble,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnBubble, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnBubble = (function membrane$ui$map__GT_OnBubble(G__46949){
var extmap__4419__auto__ = (function (){var G__46968 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46949,new cljs.core.Keyword(null,"on-bubble","on-bubble",1928851008),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46949)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46968);
} else {
return G__46968;
}
})();
return (new membrane.ui.OnBubble(new cljs.core.Keyword(null,"on-bubble","on-bubble",1928851008).cljs$core$IFn$_invoke$arity$1(G__46949),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46949),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnBubble,(function (draw){
return (function (this$){
var seq__46969 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__46970 = null;
var count__46971 = (0);
var i__46972 = (0);
while(true){
if((i__46972 < count__46971)){
var drawable = chunk__46970.cljs$core$IIndexed$_nth$arity$2(null,i__46972);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49093 = seq__46969;
var G__49094 = chunk__46970;
var G__49095 = count__46971;
var G__49096 = (i__46972 + (1));
seq__46969 = G__49093;
chunk__46970 = G__49094;
count__46971 = G__49095;
i__46972 = G__49096;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46969);
if(temp__5753__auto__){
var seq__46969__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46969__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46969__$1);
var G__49097 = cljs.core.chunk_rest(seq__46969__$1);
var G__49098 = c__4556__auto__;
var G__49099 = cljs.core.count(c__4556__auto__);
var G__49100 = (0);
seq__46969 = G__49097;
chunk__46970 = G__49098;
count__46971 = G__49099;
i__46972 = G__49100;
continue;
} else {
var drawable = cljs.core.first(seq__46969__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49101 = cljs.core.next(seq__46969__$1);
var G__49102 = null;
var G__49103 = (0);
var G__49104 = (0);
seq__46969 = G__49101;
chunk__46970 = G__49102;
count__46971 = G__49103;
i__46972 = G__49104;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds a handler for bubbling
 * 
 *   on-bubble should take seq of effects
 */
membrane.ui.on_bubble = (function membrane$ui$on_bubble(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49105 = arguments.length;
var i__4737__auto___49106 = (0);
while(true){
if((i__4737__auto___49106 < len__4736__auto___49105)){
args__4742__auto__.push((arguments[i__4737__auto___49106]));

var G__49107 = (i__4737__auto___49106 + (1));
i__4737__auto___49106 = G__49107;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_bubble.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_bubble.cljs$core$IFn$_invoke$arity$variadic = (function (on_bubble,drawables){
return (new membrane.ui.OnBubble(on_bubble,drawables,null,null,null));
}));

(membrane.ui.on_bubble.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_bubble.cljs$lang$applyTo = (function (seq46973){
var G__46974 = cljs.core.first(seq46973);
var seq46973__$1 = cljs.core.next(seq46973);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46974,seq46973__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IClipboardPaste}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnClipboardPaste = (function (on_clipboard_paste,drawables,__meta,__extmap,__hash){
this.on_clipboard_paste = on_clipboard_paste;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnClipboardPaste.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k46976,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__46980 = k46976;
var G__46980__$1 = (((G__46980 instanceof cljs.core.Keyword))?G__46980.fqn:null);
switch (G__46980__$1) {
case "on-clipboard-paste":
return self__.on_clipboard_paste;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46976,else__4383__auto__);

}
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__46981){
var vec__46982 = p__46981;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46982,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnClipboardPaste{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-clipboard-paste","on-clipboard-paste",-1709674205),self__.on_clipboard_paste],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46975){
var self__ = this;
var G__46975__$1 = this;
return (new cljs.core.RecordIter((0),G__46975__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-clipboard-paste","on-clipboard-paste",-1709674205),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46985,elem){
var vec__46986 = p__46985;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46986,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46986,(1),null);
var vec__46989 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46989,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46989,(1),null);
var vec__46992 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46992,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46992,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnClipboardPaste(self__.on_clipboard_paste,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1782102848 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46977,other46978){
var self__ = this;
var this46977__$1 = this;
return (((!((other46978 == null)))) && ((this46977__$1.constructor === other46978.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46977__$1.on_clipboard_paste,other46978.on_clipboard_paste)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46977__$1.drawables,other46978.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46977__$1.__extmap,other46978.__extmap)));
}));

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IClipboardPaste$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IClipboardPaste$_clipboard_paste$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_clipboard_paste)){
return (self__.on_clipboard_paste.cljs$core$IFn$_invoke$arity$1 ? self__.on_clipboard_paste.cljs$core$IFn$_invoke$arity$1(s) : self__.on_clipboard_paste.call(null,s));
} else {
return null;
}
}));

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-clipboard-paste","on-clipboard-paste",-1709674205),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnClipboardPaste(self__.on_clipboard_paste,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__46975){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__46995 = cljs.core.keyword_identical_QMARK_;
var expr__46996 = k__4388__auto__;
if(cljs.core.truth_((pred__46995.cljs$core$IFn$_invoke$arity$2 ? pred__46995.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-clipboard-paste","on-clipboard-paste",-1709674205),expr__46996) : pred__46995.call(null,new cljs.core.Keyword(null,"on-clipboard-paste","on-clipboard-paste",-1709674205),expr__46996)))){
return (new membrane.ui.OnClipboardPaste(G__46975,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46995.cljs$core$IFn$_invoke$arity$2 ? pred__46995.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46996) : pred__46995.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__46996)))){
return (new membrane.ui.OnClipboardPaste(self__.on_clipboard_paste,G__46975,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnClipboardPaste(self__.on_clipboard_paste,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__46975),null));
}
}
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-clipboard-paste","on-clipboard-paste",-1709674205),self__.on_clipboard_paste,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardPaste.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnClipboardPaste(self__.on_clipboard_paste,childs,null,null,null));
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__46975){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnClipboardPaste(self__.on_clipboard_paste,self__.drawables,G__46975,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnClipboardPaste.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnClipboardPaste.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-clipboard-paste","on-clipboard-paste",-69142678,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnClipboardPaste.cljs$lang$type = true);

(membrane.ui.OnClipboardPaste.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnClipboardPaste",null,(1),null));
}));

(membrane.ui.OnClipboardPaste.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnClipboardPaste");
}));

/**
 * Positional factory function for membrane.ui/OnClipboardPaste.
 */
membrane.ui.__GT_OnClipboardPaste = (function membrane$ui$__GT_OnClipboardPaste(on_clipboard_paste,drawables){
return (new membrane.ui.OnClipboardPaste(on_clipboard_paste,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnClipboardPaste, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnClipboardPaste = (function membrane$ui$map__GT_OnClipboardPaste(G__46979){
var extmap__4419__auto__ = (function (){var G__46998 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46979,new cljs.core.Keyword(null,"on-clipboard-paste","on-clipboard-paste",-1709674205),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__46979)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46998);
} else {
return G__46998;
}
})();
return (new membrane.ui.OnClipboardPaste(new cljs.core.Keyword(null,"on-clipboard-paste","on-clipboard-paste",-1709674205).cljs$core$IFn$_invoke$arity$1(G__46979),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__46979),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnClipboardPaste,(function (draw){
return (function (this$){
var seq__46999 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__47000 = null;
var count__47001 = (0);
var i__47002 = (0);
while(true){
if((i__47002 < count__47001)){
var drawable = chunk__47000.cljs$core$IIndexed$_nth$arity$2(null,i__47002);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49132 = seq__46999;
var G__49133 = chunk__47000;
var G__49134 = count__47001;
var G__49135 = (i__47002 + (1));
seq__46999 = G__49132;
chunk__47000 = G__49133;
count__47001 = G__49134;
i__47002 = G__49135;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46999);
if(temp__5753__auto__){
var seq__46999__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46999__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46999__$1);
var G__49136 = cljs.core.chunk_rest(seq__46999__$1);
var G__49137 = c__4556__auto__;
var G__49138 = cljs.core.count(c__4556__auto__);
var G__49139 = (0);
seq__46999 = G__49136;
chunk__47000 = G__49137;
count__47001 = G__49138;
i__47002 = G__49139;
continue;
} else {
var drawable = cljs.core.first(seq__46999__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49140 = cljs.core.next(seq__46999__$1);
var G__49141 = null;
var G__49142 = (0);
var G__49143 = (0);
seq__46999 = G__49140;
chunk__47000 = G__49141;
count__47001 = G__49142;
i__47002 = G__49143;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds a handler for clipboard paste events.
 * 
 *   on-clipboard-paste should take 1 arguments s and return a sequence of effects.
 */
membrane.ui.on_clipboard_paste = (function membrane$ui$on_clipboard_paste(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49144 = arguments.length;
var i__4737__auto___49145 = (0);
while(true){
if((i__4737__auto___49145 < len__4736__auto___49144)){
args__4742__auto__.push((arguments[i__4737__auto___49145]));

var G__49146 = (i__4737__auto___49145 + (1));
i__4737__auto___49145 = G__49146;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_clipboard_paste.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_clipboard_paste.cljs$core$IFn$_invoke$arity$variadic = (function (on_clipboard_paste,drawables){
return (new membrane.ui.OnClipboardPaste(on_clipboard_paste,drawables,null,null,null));
}));

(membrane.ui.on_clipboard_paste.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_clipboard_paste.cljs$lang$applyTo = (function (seq47003){
var G__47004 = cljs.core.first(seq47003);
var seq47003__$1 = cljs.core.next(seq47003);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47004,seq47003__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {membrane.ui.IClipboardCopy}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnClipboardCopy = (function (on_clipboard_copy,drawables,__meta,__extmap,__hash){
this.on_clipboard_copy = on_clipboard_copy;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnClipboardCopy.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47006,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47010 = k47006;
var G__47010__$1 = (((G__47010 instanceof cljs.core.Keyword))?G__47010.fqn:null);
switch (G__47010__$1) {
case "on-clipboard-copy":
return self__.on_clipboard_copy;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47006,else__4383__auto__);

}
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47011){
var vec__47012 = p__47011;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47012,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47012,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnClipboardCopy{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-clipboard-copy","on-clipboard-copy",-228632091),self__.on_clipboard_copy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47005){
var self__ = this;
var G__47005__$1 = this;
return (new cljs.core.RecordIter((0),G__47005__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-clipboard-copy","on-clipboard-copy",-228632091),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47015,elem){
var vec__47016 = p__47015;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47016,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47016,(1),null);
var vec__47019 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47019,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47019,(1),null);
var vec__47022 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47022,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47022,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnClipboardCopy(self__.on_clipboard_copy,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (336255660 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47007,other47008){
var self__ = this;
var this47007__$1 = this;
return (((!((other47008 == null)))) && ((this47007__$1.constructor === other47008.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47007__$1.on_clipboard_copy,other47008.on_clipboard_copy)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47007__$1.drawables,other47008.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47007__$1.__extmap,other47008.__extmap)));
}));

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IClipboardCopy$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IClipboardCopy$_clipboard_copy$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_clipboard_copy)){
return (self__.on_clipboard_copy.cljs$core$IFn$_invoke$arity$0 ? self__.on_clipboard_copy.cljs$core$IFn$_invoke$arity$0() : self__.on_clipboard_copy.call(null));
} else {
return null;
}
}));

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-clipboard-copy","on-clipboard-copy",-228632091),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnClipboardCopy(self__.on_clipboard_copy,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47005){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47025 = cljs.core.keyword_identical_QMARK_;
var expr__47026 = k__4388__auto__;
if(cljs.core.truth_((pred__47025.cljs$core$IFn$_invoke$arity$2 ? pred__47025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-clipboard-copy","on-clipboard-copy",-228632091),expr__47026) : pred__47025.call(null,new cljs.core.Keyword(null,"on-clipboard-copy","on-clipboard-copy",-228632091),expr__47026)))){
return (new membrane.ui.OnClipboardCopy(G__47005,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47025.cljs$core$IFn$_invoke$arity$2 ? pred__47025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__47026) : pred__47025.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__47026)))){
return (new membrane.ui.OnClipboardCopy(self__.on_clipboard_copy,G__47005,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnClipboardCopy(self__.on_clipboard_copy,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47005),null));
}
}
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-clipboard-copy","on-clipboard-copy",-228632091),self__.on_clipboard_copy,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCopy.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnClipboardCopy(self__.on_clipboard_copy,childs,null,null,null));
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47005){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnClipboardCopy(self__.on_clipboard_copy,self__.drawables,G__47005,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnClipboardCopy.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnClipboardCopy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-clipboard-copy","on-clipboard-copy",1411899436,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnClipboardCopy.cljs$lang$type = true);

(membrane.ui.OnClipboardCopy.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnClipboardCopy",null,(1),null));
}));

(membrane.ui.OnClipboardCopy.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnClipboardCopy");
}));

/**
 * Positional factory function for membrane.ui/OnClipboardCopy.
 */
membrane.ui.__GT_OnClipboardCopy = (function membrane$ui$__GT_OnClipboardCopy(on_clipboard_copy,drawables){
return (new membrane.ui.OnClipboardCopy(on_clipboard_copy,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnClipboardCopy, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnClipboardCopy = (function membrane$ui$map__GT_OnClipboardCopy(G__47009){
var extmap__4419__auto__ = (function (){var G__47028 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47009,new cljs.core.Keyword(null,"on-clipboard-copy","on-clipboard-copy",-228632091),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__47009)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47028);
} else {
return G__47028;
}
})();
return (new membrane.ui.OnClipboardCopy(new cljs.core.Keyword(null,"on-clipboard-copy","on-clipboard-copy",-228632091).cljs$core$IFn$_invoke$arity$1(G__47009),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__47009),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnClipboardCopy,(function (draw){
return (function (this$){
var seq__47029 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__47030 = null;
var count__47031 = (0);
var i__47032 = (0);
while(true){
if((i__47032 < count__47031)){
var drawable = chunk__47030.cljs$core$IIndexed$_nth$arity$2(null,i__47032);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49167 = seq__47029;
var G__49168 = chunk__47030;
var G__49169 = count__47031;
var G__49170 = (i__47032 + (1));
seq__47029 = G__49167;
chunk__47030 = G__49168;
count__47031 = G__49169;
i__47032 = G__49170;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47029);
if(temp__5753__auto__){
var seq__47029__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47029__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47029__$1);
var G__49172 = cljs.core.chunk_rest(seq__47029__$1);
var G__49173 = c__4556__auto__;
var G__49174 = cljs.core.count(c__4556__auto__);
var G__49175 = (0);
seq__47029 = G__49172;
chunk__47030 = G__49173;
count__47031 = G__49174;
i__47032 = G__49175;
continue;
} else {
var drawable = cljs.core.first(seq__47029__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49177 = cljs.core.next(seq__47029__$1);
var G__49178 = null;
var G__49179 = (0);
var G__49180 = (0);
seq__47029 = G__49177;
chunk__47030 = G__49178;
count__47031 = G__49179;
i__47032 = G__49180;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds a handler for clipboard copy events.
 * 
 *   on-clipboard-copy should take 0 arguments and return a sequence of effects.
 */
membrane.ui.on_clipboard_copy = (function membrane$ui$on_clipboard_copy(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49181 = arguments.length;
var i__4737__auto___49182 = (0);
while(true){
if((i__4737__auto___49182 < len__4736__auto___49181)){
args__4742__auto__.push((arguments[i__4737__auto___49182]));

var G__49184 = (i__4737__auto___49182 + (1));
i__4737__auto___49182 = G__49184;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_clipboard_copy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_clipboard_copy.cljs$core$IFn$_invoke$arity$variadic = (function (on_clipboard_copy,drawables){
return (new membrane.ui.OnClipboardCopy(on_clipboard_copy,drawables,null,null,null));
}));

(membrane.ui.on_clipboard_copy.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_clipboard_copy.cljs$lang$applyTo = (function (seq47033){
var G__47034 = cljs.core.first(seq47033);
var seq47033__$1 = cljs.core.next(seq47033);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47034,seq47033__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IClipboardCut}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnClipboardCut = (function (on_clipboard_cut,drawables,__meta,__extmap,__hash){
this.on_clipboard_cut = on_clipboard_cut;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnClipboardCut.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47036,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47040 = k47036;
var G__47040__$1 = (((G__47040 instanceof cljs.core.Keyword))?G__47040.fqn:null);
switch (G__47040__$1) {
case "on-clipboard-cut":
return self__.on_clipboard_cut;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47036,else__4383__auto__);

}
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47041){
var vec__47042 = p__47041;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47042,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47042,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IClipboardCut$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IClipboardCut$_clipboard_cut$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_clipboard_cut)){
return (self__.on_clipboard_cut.cljs$core$IFn$_invoke$arity$0 ? self__.on_clipboard_cut.cljs$core$IFn$_invoke$arity$0() : self__.on_clipboard_cut.call(null));
} else {
return null;
}
}));

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnClipboardCut{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-clipboard-cut","on-clipboard-cut",1353105552),self__.on_clipboard_cut],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47035){
var self__ = this;
var G__47035__$1 = this;
return (new cljs.core.RecordIter((0),G__47035__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-clipboard-cut","on-clipboard-cut",1353105552),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47045,elem){
var vec__47046 = p__47045;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47046,(1),null);
var vec__47049 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47049,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47049,(1),null);
var vec__47052 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47052,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnClipboardCut(self__.on_clipboard_cut,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2059173612 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47037,other47038){
var self__ = this;
var this47037__$1 = this;
return (((!((other47038 == null)))) && ((this47037__$1.constructor === other47038.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47037__$1.on_clipboard_cut,other47038.on_clipboard_cut)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47037__$1.drawables,other47038.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47037__$1.__extmap,other47038.__extmap)));
}));

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawables","drawables",1997910160),null,new cljs.core.Keyword(null,"on-clipboard-cut","on-clipboard-cut",1353105552),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnClipboardCut(self__.on_clipboard_cut,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47035){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47055 = cljs.core.keyword_identical_QMARK_;
var expr__47056 = k__4388__auto__;
if(cljs.core.truth_((pred__47055.cljs$core$IFn$_invoke$arity$2 ? pred__47055.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-clipboard-cut","on-clipboard-cut",1353105552),expr__47056) : pred__47055.call(null,new cljs.core.Keyword(null,"on-clipboard-cut","on-clipboard-cut",1353105552),expr__47056)))){
return (new membrane.ui.OnClipboardCut(G__47035,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47055.cljs$core$IFn$_invoke$arity$2 ? pred__47055.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__47056) : pred__47055.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__47056)))){
return (new membrane.ui.OnClipboardCut(self__.on_clipboard_cut,G__47035,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnClipboardCut(self__.on_clipboard_cut,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47035),null));
}
}
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-clipboard-cut","on-clipboard-cut",1353105552),self__.on_clipboard_cut,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCut.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnClipboardCut(self__.on_clipboard_cut,childs,null,null,null));
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47035){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnClipboardCut(self__.on_clipboard_cut,self__.drawables,G__47035,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnClipboardCut.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnClipboardCut.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-clipboard-cut","on-clipboard-cut",-1301330217,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnClipboardCut.cljs$lang$type = true);

(membrane.ui.OnClipboardCut.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnClipboardCut",null,(1),null));
}));

(membrane.ui.OnClipboardCut.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnClipboardCut");
}));

/**
 * Positional factory function for membrane.ui/OnClipboardCut.
 */
membrane.ui.__GT_OnClipboardCut = (function membrane$ui$__GT_OnClipboardCut(on_clipboard_cut,drawables){
return (new membrane.ui.OnClipboardCut(on_clipboard_cut,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnClipboardCut, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnClipboardCut = (function membrane$ui$map__GT_OnClipboardCut(G__47039){
var extmap__4419__auto__ = (function (){var G__47058 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47039,new cljs.core.Keyword(null,"on-clipboard-cut","on-clipboard-cut",1353105552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__47039)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47058);
} else {
return G__47058;
}
})();
return (new membrane.ui.OnClipboardCut(new cljs.core.Keyword(null,"on-clipboard-cut","on-clipboard-cut",1353105552).cljs$core$IFn$_invoke$arity$1(G__47039),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__47039),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnClipboardCut,(function (draw){
return (function (this$){
var seq__47059 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__47060 = null;
var count__47061 = (0);
var i__47062 = (0);
while(true){
if((i__47062 < count__47061)){
var drawable = chunk__47060.cljs$core$IIndexed$_nth$arity$2(null,i__47062);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49245 = seq__47059;
var G__49246 = chunk__47060;
var G__49247 = count__47061;
var G__49248 = (i__47062 + (1));
seq__47059 = G__49245;
chunk__47060 = G__49246;
count__47061 = G__49247;
i__47062 = G__49248;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47059);
if(temp__5753__auto__){
var seq__47059__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47059__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47059__$1);
var G__49249 = cljs.core.chunk_rest(seq__47059__$1);
var G__49250 = c__4556__auto__;
var G__49251 = cljs.core.count(c__4556__auto__);
var G__49252 = (0);
seq__47059 = G__49249;
chunk__47060 = G__49250;
count__47061 = G__49251;
i__47062 = G__49252;
continue;
} else {
var drawable = cljs.core.first(seq__47059__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49253 = cljs.core.next(seq__47059__$1);
var G__49254 = null;
var G__49255 = (0);
var G__49256 = (0);
seq__47059 = G__49253;
chunk__47060 = G__49254;
count__47061 = G__49255;
i__47062 = G__49256;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds a handler for clipboard cut events.
 * 
 *   on-clipboard-copy should take 0 arguments and return a sequence of effects.
 */
membrane.ui.on_clipboard_cut = (function membrane$ui$on_clipboard_cut(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49259 = arguments.length;
var i__4737__auto___49261 = (0);
while(true){
if((i__4737__auto___49261 < len__4736__auto___49259)){
args__4742__auto__.push((arguments[i__4737__auto___49261]));

var G__49262 = (i__4737__auto___49261 + (1));
i__4737__auto___49261 = G__49262;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_clipboard_cut.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_clipboard_cut.cljs$core$IFn$_invoke$arity$variadic = (function (on_clipboard_cut,drawables){
return (new membrane.ui.OnClipboardCut(on_clipboard_cut,drawables,null,null,null));
}));

(membrane.ui.on_clipboard_cut.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_clipboard_cut.cljs$lang$applyTo = (function (seq47063){
var G__47064 = cljs.core.first(seq47063);
var seq47063__$1 = cljs.core.next(seq47063);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47064,seq47063__$1);
}));

/**
 * Returns a graphical elem of elems stacked on top of each other
 */
membrane.ui.vertical_layout = (function membrane$ui$vertical_layout(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49263 = arguments.length;
var i__4737__auto___49264 = (0);
while(true){
if((i__4737__auto___49264 < len__4736__auto___49263)){
args__4742__auto__.push((arguments[i__4737__auto___49264]));

var G__49265 = (i__4737__auto___49264 + (1));
i__4737__auto___49264 = G__49265;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return membrane.ui.vertical_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(membrane.ui.vertical_layout.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var elems__$1 = cljs.core.seq(elems);
var first_elem = cljs.core.first(elems__$1);
var offset_y = (membrane.ui.height(first_elem) + membrane.ui.origin_y(first_elem));
if(elems__$1){
var elems__$2 = cljs.core.next(elems__$1);
var offset_y__$1 = (offset_y + (1));
var group_elems = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_elem], null);
while(true){
if(elems__$2){
var elem = cljs.core.first(elems__$2);
var dy = (membrane.ui.height(elem) + membrane.ui.origin_y(elem));
var G__49266 = cljs.core.next(elems__$2);
var G__49267 = ((offset_y__$1 + dy) + (1));
var G__49268 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(group_elems,membrane.ui.translate((0),offset_y__$1,elem));
elems__$2 = G__49266;
offset_y__$1 = G__49267;
group_elems = G__49268;
continue;
} else {
return group_elems;
}
break;
}
} else {
return null;
}
}));

(membrane.ui.vertical_layout.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(membrane.ui.vertical_layout.cljs$lang$applyTo = (function (seq47065){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47065));
}));

/**
 * Returns a graphical elem of elems layed out next to eachother.
 */
membrane.ui.horizontal_layout = (function membrane$ui$horizontal_layout(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49269 = arguments.length;
var i__4737__auto___49270 = (0);
while(true){
if((i__4737__auto___49270 < len__4736__auto___49269)){
args__4742__auto__.push((arguments[i__4737__auto___49270]));

var G__49271 = (i__4737__auto___49270 + (1));
i__4737__auto___49270 = G__49271;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return membrane.ui.horizontal_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(membrane.ui.horizontal_layout.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
var elems__$1 = cljs.core.seq(elems);
var first_elem = cljs.core.first(elems__$1);
var offset_x = (membrane.ui.width(first_elem) + membrane.ui.origin_x(first_elem));
if(elems__$1){
var elems__$2 = cljs.core.next(elems__$1);
var offset_x__$1 = (offset_x + (1));
var group_elems = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_elem], null);
while(true){
if(elems__$2){
var elem = cljs.core.first(elems__$2);
var dx = (membrane.ui.width(elem) + membrane.ui.origin_x(elem));
var G__49272 = cljs.core.next(elems__$2);
var G__49273 = ((offset_x__$1 + dx) + (1));
var G__49274 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(group_elems,membrane.ui.translate(offset_x__$1,(0),elem));
elems__$2 = G__49272;
offset_x__$1 = G__49273;
group_elems = G__49274;
continue;
} else {
return group_elems;
}
break;
}
} else {
return null;
}
}));

(membrane.ui.horizontal_layout.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(membrane.ui.horizontal_layout.cljs$lang$applyTo = (function (seq47066){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47066));
}));

membrane.ui.table_layout = (function membrane$ui$table_layout(var_args){
var G__47073 = arguments.length;
switch (G__47073) {
case 1:
return membrane.ui.table_layout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return membrane.ui.table_layout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.ui.table_layout.cljs$core$IFn$_invoke$arity$1 = (function (table){
return membrane.ui.table_layout.cljs$core$IFn$_invoke$arity$3(table,(0),(0));
}));

(membrane.ui.table_layout.cljs$core$IFn$_invoke$arity$3 = (function (table,cell_padding_x,cell_padding_y){
var row_heights = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(membrane.ui.height,row));
}),table);
var col_widths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (col_widths,row){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (col_widths__$1,p__47074){
var vec__47075 = p__47074;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47075,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47075,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(col_widths__$1,i,(function (p1__47067_SHARP_){
var x__4214__auto__ = (function (){var or__4126__auto__ = p1__47067_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var y__4215__auto__ = membrane.ui.width(elem);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}));
}),col_widths,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row));
}),cljs.core.PersistentVector.EMPTY,table);
var full_padding_x = ((2) * cell_padding_x);
var full_padding_y = ((2) * cell_padding_y);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4529__auto__ = (function membrane$ui$iter__47078(s__47079){
return (new cljs.core.LazySeq(null,(function (){
var s__47079__$1 = s__47079;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47079__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__47084 = cljs.core.first(xs__6308__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47084,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47084,(1),null);
var iterys__4525__auto__ = ((function (s__47079__$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y){
return (function membrane$ui$iter__47078_$_iter__47080(s__47081){
return (new cljs.core.LazySeq(null,((function (s__47079__$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y){
return (function (){
var s__47081__$1 = s__47081;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47081__$1);
if(temp__5753__auto____$1){
var s__47081__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47081__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47081__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47083 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47082 = (0);
while(true){
if((i__47082 < size__4528__auto__)){
var vec__47087 = cljs.core._nth(c__4527__auto__,i__47082);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47087,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47087,(1),null);
cljs.core.chunk_append(b__47083,membrane.ui.translate((cell_padding_x + cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__47082,s__47079__$1,vec__47087,j,elem,c__4527__auto__,size__4528__auto__,b__47083,s__47081__$2,temp__5753__auto____$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y){
return (function (p1__47068_SHARP_,p2__47069_SHARP_){
return ((full_padding_x + p1__47068_SHARP_) + p2__47069_SHARP_);
});})(i__47082,s__47079__$1,vec__47087,j,elem,c__4527__auto__,size__4528__auto__,b__47083,s__47081__$2,temp__5753__auto____$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y))
,(0),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(col_widths,(0),j))),(cell_padding_y + cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__47082,s__47079__$1,vec__47087,j,elem,c__4527__auto__,size__4528__auto__,b__47083,s__47081__$2,temp__5753__auto____$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y){
return (function (p1__47070_SHARP_,p2__47071_SHARP_){
return ((full_padding_y + p1__47070_SHARP_) + p2__47071_SHARP_);
});})(i__47082,s__47079__$1,vec__47087,j,elem,c__4527__auto__,size__4528__auto__,b__47083,s__47081__$2,temp__5753__auto____$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y))
,(0),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(row_heights,(0),i))),elem));

var G__49276 = (i__47082 + (1));
i__47082 = G__49276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47083),membrane$ui$iter__47078_$_iter__47080(cljs.core.chunk_rest(s__47081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47083),null);
}
} else {
var vec__47090 = cljs.core.first(s__47081__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47090,(0),null);
var elem = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47090,(1),null);
return cljs.core.cons(membrane.ui.translate((cell_padding_x + cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__47079__$1,vec__47090,j,elem,s__47081__$2,temp__5753__auto____$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y){
return (function (p1__47068_SHARP_,p2__47069_SHARP_){
return ((full_padding_x + p1__47068_SHARP_) + p2__47069_SHARP_);
});})(s__47079__$1,vec__47090,j,elem,s__47081__$2,temp__5753__auto____$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y))
,(0),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(col_widths,(0),j))),(cell_padding_y + cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__47079__$1,vec__47090,j,elem,s__47081__$2,temp__5753__auto____$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y){
return (function (p1__47070_SHARP_,p2__47071_SHARP_){
return ((full_padding_y + p1__47070_SHARP_) + p2__47071_SHARP_);
});})(s__47079__$1,vec__47090,j,elem,s__47081__$2,temp__5753__auto____$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y))
,(0),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(row_heights,(0),i))),elem),membrane$ui$iter__47078_$_iter__47080(cljs.core.rest(s__47081__$2)));
}
} else {
return null;
}
break;
}
});})(s__47079__$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y))
,null,null));
});})(s__47079__$1,vec__47084,i,row,xs__6308__auto__,temp__5753__auto__,row_heights,col_widths,full_padding_x,full_padding_y))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,membrane$ui$iter__47078(cljs.core.rest(s__47079__$1)));
} else {
var G__49289 = cljs.core.rest(s__47079__$1);
s__47079__$1 = G__49289;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,table));
})());
}));

(membrane.ui.table_layout.cljs$lang$maxFixedArity = 3);

membrane.ui.center = (function membrane$ui$center(elem,p__47093){
var vec__47094 = p__47093;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47094,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47094,(1),null);
var vec__47097 = membrane.ui.bounds(elem);
var ewidth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47097,(0),null);
var eheight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47097,(1),null);
return membrane.ui.translate((((width / (2)) - (ewidth / (2))) | (0)),(((height / (2)) - (eheight / (2))) | (0)),elem);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {membrane.ui.IScroll}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.OnScroll = (function (on_scroll,drawables,__meta,__extmap,__hash){
this.on_scroll = on_scroll;
this.drawables = drawables;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.OnScroll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.OnScroll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47101,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47105 = k47101;
var G__47105__$1 = (((G__47105 instanceof cljs.core.Keyword))?G__47105.fqn:null);
switch (G__47105__$1) {
case "on-scroll":
return self__.on_scroll;

break;
case "drawables":
return self__.drawables;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47101,else__4383__auto__);

}
}));

(membrane.ui.OnScroll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47106){
var vec__47107 = p__47106;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47107,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47107,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.OnScroll.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnScroll.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.drawables;
}));

(membrane.ui.OnScroll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.OnScroll{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),self__.on_scroll],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables],null))], null),self__.__extmap));
}));

(membrane.ui.OnScroll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47100){
var self__ = this;
var G__47100__$1 = this;
return (new cljs.core.RecordIter((0),G__47100__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),new cljs.core.Keyword(null,"drawables","drawables",1997910160)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.OnScroll.prototype.membrane$ui$IScroll$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnScroll.prototype.membrane$ui$IScroll$_scroll$arity$3 = (function (this$,p__47110,mpos){
var self__ = this;
var vec__47111 = p__47110;
var offset_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47111,(0),null);
var offset_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47111,(1),null);
var offset = vec__47111;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_scroll)){
return (self__.on_scroll.cljs$core$IFn$_invoke$arity$2 ? self__.on_scroll.cljs$core$IFn$_invoke$arity$2(offset,mpos) : self__.on_scroll.call(null,offset,mpos));
} else {
return null;
}
}));

(membrane.ui.OnScroll.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnScroll.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__47114,elem){
var vec__47115 = p__47114;
var max_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47115,(0),null);
var max_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47115,(1),null);
var vec__47118 = membrane.ui.origin(elem);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47118,(1),null);
var vec__47121 = membrane.ui.bounds(elem);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4214__auto__ = max_width;
var y__4215__auto__ = (ox + w);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4214__auto__ = max_height;
var y__4215__auto__ = (oy + h);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),self__.drawables);
}));

(membrane.ui.OnScroll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.OnScroll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.OnScroll(self__.on_scroll,self__.drawables,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnScroll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.OnScroll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1760609386 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.OnScroll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47102,other47103){
var self__ = this;
var this47102__$1 = this;
return (((!((other47103 == null)))) && ((this47102__$1.constructor === other47103.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47102__$1.on_scroll,other47103.on_scroll)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47102__$1.drawables,other47103.drawables)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47102__$1.__extmap,other47103.__extmap)));
}));

(membrane.ui.OnScroll.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnScroll.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.OnScroll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.OnScroll(self__.on_scroll,self__.drawables,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.OnScroll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47100){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47124 = cljs.core.keyword_identical_QMARK_;
var expr__47125 = k__4388__auto__;
if(cljs.core.truth_((pred__47124.cljs$core$IFn$_invoke$arity$2 ? pred__47124.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),expr__47125) : pred__47124.call(null,new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),expr__47125)))){
return (new membrane.ui.OnScroll(G__47100,self__.drawables,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47124.cljs$core$IFn$_invoke$arity$2 ? pred__47124.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__47125) : pred__47124.call(null,new cljs.core.Keyword(null,"drawables","drawables",1997910160),expr__47125)))){
return (new membrane.ui.OnScroll(self__.on_scroll,G__47100,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.OnScroll(self__.on_scroll,self__.drawables,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47100),null));
}
}
}));

(membrane.ui.OnScroll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),self__.on_scroll,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawables","drawables",1997910160),self__.drawables,null))], null),self__.__extmap));
}));

(membrane.ui.OnScroll.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnScroll.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
return (new membrane.ui.OnScroll(self__.on_scroll,childs,null,null,null));
}));

(membrane.ui.OnScroll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47100){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.OnScroll(self__.on_scroll,self__.drawables,G__47100,self__.__extmap,self__.__hash));
}));

(membrane.ui.OnScroll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.OnScroll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-scroll","on-scroll",-1063587092,null),new cljs.core.Symbol(null,"drawables","drawables",-656525609,null)], null);
}));

(membrane.ui.OnScroll.cljs$lang$type = true);

(membrane.ui.OnScroll.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/OnScroll",null,(1),null));
}));

(membrane.ui.OnScroll.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/OnScroll");
}));

/**
 * Positional factory function for membrane.ui/OnScroll.
 */
membrane.ui.__GT_OnScroll = (function membrane$ui$__GT_OnScroll(on_scroll,drawables){
return (new membrane.ui.OnScroll(on_scroll,drawables,null,null,null));
});

/**
 * Factory function for membrane.ui/OnScroll, taking a map of keywords to field values.
 */
membrane.ui.map__GT_OnScroll = (function membrane$ui$map__GT_OnScroll(G__47104){
var extmap__4419__auto__ = (function (){var G__47127 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47104,new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawables","drawables",1997910160)], 0));
if(cljs.core.record_QMARK_(G__47104)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47127);
} else {
return G__47127;
}
})();
return (new membrane.ui.OnScroll(new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677).cljs$core$IFn$_invoke$arity$1(G__47104),new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(G__47104),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.OnScroll,(function (draw){
return (function (this$){
var seq__47128 = cljs.core.seq(new cljs.core.Keyword(null,"drawables","drawables",1997910160).cljs$core$IFn$_invoke$arity$1(this$));
var chunk__47129 = null;
var count__47130 = (0);
var i__47131 = (0);
while(true){
if((i__47131 < count__47130)){
var drawable = chunk__47129.cljs$core$IIndexed$_nth$arity$2(null,i__47131);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49334 = seq__47128;
var G__49335 = chunk__47129;
var G__49336 = count__47130;
var G__49337 = (i__47131 + (1));
seq__47128 = G__49334;
chunk__47129 = G__49335;
count__47130 = G__49336;
i__47131 = G__49337;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47128);
if(temp__5753__auto__){
var seq__47128__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47128__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47128__$1);
var G__49340 = cljs.core.chunk_rest(seq__47128__$1);
var G__49341 = c__4556__auto__;
var G__49342 = cljs.core.count(c__4556__auto__);
var G__49343 = (0);
seq__47128 = G__49340;
chunk__47129 = G__49341;
count__47130 = G__49342;
i__47131 = G__49343;
continue;
} else {
var drawable = cljs.core.first(seq__47128__$1);
(draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(drawable) : draw.call(null,drawable));


var G__49344 = cljs.core.next(seq__47128__$1);
var G__49345 = null;
var G__49346 = (0);
var G__49347 = (0);
seq__47128 = G__49344;
chunk__47129 = G__49345;
count__47130 = G__49346;
i__47131 = G__49347;
continue;
}
} else {
return null;
}
}
break;
}
});
}));
/**
 * Wraps drawables and adds an event handler for scroll events.
 * 
 *   on-scroll should take 1 argument [offset-x offset-y] of the scroll offset and return a sequence of effects.
 */
membrane.ui.on_scroll = (function membrane$ui$on_scroll(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49348 = arguments.length;
var i__4737__auto___49349 = (0);
while(true){
if((i__4737__auto___49349 < len__4736__auto___49348)){
args__4742__auto__.push((arguments[i__4737__auto___49349]));

var G__49350 = (i__4737__auto___49349 + (1));
i__4737__auto___49349 = G__49350;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return membrane.ui.on_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(membrane.ui.on_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (on_scroll,drawables){
return (new membrane.ui.OnScroll(on_scroll,drawables,null,null,null));
}));

(membrane.ui.on_scroll.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(membrane.ui.on_scroll.cljs$lang$applyTo = (function (seq47132){
var G__47133 = cljs.core.first(seq47132);
var seq47132__$1 = cljs.core.next(seq47132);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47133,seq47132__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.ScissorView = (function (offset,bounds,drawable,__meta,__extmap,__hash){
this.offset = offset;
this.bounds = bounds;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.ScissorView.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.ScissorView.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47135,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47139 = k47135;
var G__47139__$1 = (((G__47139 instanceof cljs.core.Keyword))?G__47139.fqn:null);
switch (G__47139__$1) {
case "offset":
return self__.offset;

break;
case "bounds":
return self__.bounds;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47135,else__4383__auto__);

}
}));

(membrane.ui.ScissorView.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47140){
var vec__47141 = p__47140;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47141,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47141,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.ScissorView.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScissorView.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.ScissorView.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.ScissorView{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bounds","bounds",1691609455),self__.bounds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.ScissorView.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47134){
var self__ = this;
var G__47134__$1 = this;
return (new cljs.core.RecordIter((0),G__47134__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.ScissorView.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScissorView.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.bounds;
}));

(membrane.ui.ScissorView.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.ScissorView.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.ScissorView(self__.offset,self__.bounds,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.ScissorView.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.ScissorView.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1562895887 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.ScissorView.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47136,other47137){
var self__ = this;
var this47136__$1 = this;
return (((!((other47137 == null)))) && ((this47136__$1.constructor === other47137.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47136__$1.offset,other47137.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47136__$1.bounds,other47137.bounds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47136__$1.drawable,other47137.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47136__$1.__extmap,other47137.__extmap)));
}));

(membrane.ui.ScissorView.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScissorView.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.ScissorView.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.ScissorView(self__.offset,self__.bounds,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.ScissorView.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47134){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47144 = cljs.core.keyword_identical_QMARK_;
var expr__47145 = k__4388__auto__;
if(cljs.core.truth_((pred__47144.cljs$core$IFn$_invoke$arity$2 ? pred__47144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__47145) : pred__47144.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__47145)))){
return (new membrane.ui.ScissorView(G__47134,self__.bounds,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47144.cljs$core$IFn$_invoke$arity$2 ? pred__47144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bounds","bounds",1691609455),expr__47145) : pred__47144.call(null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),expr__47145)))){
return (new membrane.ui.ScissorView(self__.offset,G__47134,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47144.cljs$core$IFn$_invoke$arity$2 ? pred__47144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47145) : pred__47144.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47145)))){
return (new membrane.ui.ScissorView(self__.offset,self__.bounds,G__47134,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.ScissorView(self__.offset,self__.bounds,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47134),null));
}
}
}
}));

(membrane.ui.ScissorView.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bounds","bounds",1691609455),self__.bounds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.ScissorView.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScissorView.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.ScissorView(self__.offset,self__.bounds,cljs.core.first(childs),null,null,null));
}));

(membrane.ui.ScissorView.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47134){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.ScissorView(self__.offset,self__.bounds,self__.drawable,G__47134,self__.__extmap,self__.__hash));
}));

(membrane.ui.ScissorView.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.ScissorView.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"bounds","bounds",-962826314,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.ScissorView.cljs$lang$type = true);

(membrane.ui.ScissorView.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/ScissorView",null,(1),null));
}));

(membrane.ui.ScissorView.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/ScissorView");
}));

/**
 * Positional factory function for membrane.ui/ScissorView.
 */
membrane.ui.__GT_ScissorView = (function membrane$ui$__GT_ScissorView(offset,bounds,drawable){
return (new membrane.ui.ScissorView(offset,bounds,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/ScissorView, taking a map of keywords to field values.
 */
membrane.ui.map__GT_ScissorView = (function membrane$ui$map__GT_ScissorView(G__47138){
var extmap__4419__auto__ = (function (){var G__47147 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47138,new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__47138)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47147);
} else {
return G__47147;
}
})();
return (new membrane.ui.ScissorView(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__47138),new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(G__47138),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__47138),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Graphical elem to only draw drawable within bounds with an offset.
 * 
 *   All other drawing will be clipped.
 */
membrane.ui.scissor_view = (function membrane$ui$scissor_view(offset,bounds,drawable){
return (new membrane.ui.ScissorView(offset,bounds,drawable,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {membrane.ui.IDrop}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IMouseMove}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IMouseEvent}
 * @implements {membrane.ui.IBounds}
 * @implements {membrane.ui.IScroll}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.ScrollView = (function (bounds,offset,drawable,__meta,__extmap,__hash){
this.bounds = bounds;
this.offset = offset;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.ScrollView.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.ScrollView.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47149,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47153 = k47149;
var G__47153__$1 = (((G__47153 instanceof cljs.core.Keyword))?G__47153.fqn:null);
switch (G__47153__$1) {
case "bounds":
return self__.bounds;

break;
case "offset":
return self__.offset;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47149,else__4383__auto__);

}
}));

(membrane.ui.ScrollView.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47154){
var vec__47155 = p__47154;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47155,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47155,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.ScrollView.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.ScrollView.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.ScrollView{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bounds","bounds",1691609455),self__.bounds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.ScrollView.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47148){
var self__ = this;
var G__47148__$1 = this;
return (new cljs.core.RecordIter((0),G__47148__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.ScrollView.prototype.membrane$ui$IScroll$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$ui$IScroll$_scroll$arity$3 = (function (this$,input_offset,p__47158){
var self__ = this;
var vec__47159 = p__47158;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47159,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47159,(1),null);
var pos = vec__47159;
var this$__$1 = this;
return membrane.ui.scroll(self__.drawable,input_offset,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(0))),(my - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(1)))], null));
}));

(membrane.ui.ScrollView.prototype.membrane$ui$IMouseEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$ui$IMouseEvent$_mouse_event$arity$5 = (function (this$,p__47162,button,mouse_down_QMARK_,mods){
var self__ = this;
var vec__47163 = p__47162;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47163,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47163,(1),null);
var pos = vec__47163;
var this$__$1 = this;
return membrane.ui.mouse_event(self__.drawable,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(0))),(my - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(1)))], null),button,mouse_down_QMARK_,mods);
}));

(membrane.ui.ScrollView.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.bounds;
}));

(membrane.ui.ScrollView.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.ScrollView.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.ScrollView(self__.bounds,self__.offset,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.ScrollView.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.ScrollView.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1565568478 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.ScrollView.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47150,other47151){
var self__ = this;
var this47150__$1 = this;
return (((!((other47151 == null)))) && ((this47150__$1.constructor === other47151.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47150__$1.bounds,other47151.bounds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47150__$1.offset,other47151.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47150__$1.drawable,other47151.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47150__$1.__extmap,other47151.__extmap)));
}));

(membrane.ui.ScrollView.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.ScrollView.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.ScrollView(self__.bounds,self__.offset,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.ScrollView.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47148){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47166 = cljs.core.keyword_identical_QMARK_;
var expr__47167 = k__4388__auto__;
if(cljs.core.truth_((pred__47166.cljs$core$IFn$_invoke$arity$2 ? pred__47166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bounds","bounds",1691609455),expr__47167) : pred__47166.call(null,new cljs.core.Keyword(null,"bounds","bounds",1691609455),expr__47167)))){
return (new membrane.ui.ScrollView(G__47148,self__.offset,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47166.cljs$core$IFn$_invoke$arity$2 ? pred__47166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__47167) : pred__47166.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__47167)))){
return (new membrane.ui.ScrollView(self__.bounds,G__47148,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47166.cljs$core$IFn$_invoke$arity$2 ? pred__47166.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47167) : pred__47166.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47167)))){
return (new membrane.ui.ScrollView(self__.bounds,self__.offset,G__47148,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.ScrollView(self__.bounds,self__.offset,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47148),null));
}
}
}
}));

(membrane.ui.ScrollView.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bounds","bounds",1691609455),self__.bounds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.ScrollView.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.ScrollView(self__.offset,self__.bounds,cljs.core.first(childs),null,null,null));
}));

(membrane.ui.ScrollView.prototype.membrane$ui$IMouseMove$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$ui$IMouseMove$_mouse_move$arity$2 = (function (this$,p__47169){
var self__ = this;
var vec__47170 = p__47169;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47170,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47170,(1),null);
var pos = vec__47170;
var this$__$1 = this;
return membrane.ui.mouse_move(self__.drawable,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(0))),(my - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(1)))], null));
}));

(membrane.ui.ScrollView.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47148){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.ScrollView(self__.bounds,self__.offset,self__.drawable,G__47148,self__.__extmap,self__.__hash));
}));

(membrane.ui.ScrollView.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.ScrollView.prototype.membrane$ui$IDrop$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$ui$IDrop$_drop$arity$3 = (function (this$,paths,p__47173){
var self__ = this;
var vec__47174 = p__47173;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47174,(1),null);
var pos = vec__47174;
var this$__$1 = this;
return membrane.ui.drop(self__.drawable,paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(0))),(my - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(1)))], null));
}));

(membrane.ui.ScrollView.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this$,mouse_offset){
var self__ = this;
var this$__$1 = this;
var vec__47177 = mouse_offset;
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47177,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47177,(1),null);
return membrane.ui._default_mouse_move_global(this$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(0))),(my - cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.offset,(1)))], null));
}));

(membrane.ui.ScrollView.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bounds","bounds",-962826314,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.ScrollView.cljs$lang$type = true);

(membrane.ui.ScrollView.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/ScrollView",null,(1),null));
}));

(membrane.ui.ScrollView.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/ScrollView");
}));

/**
 * Positional factory function for membrane.ui/ScrollView.
 */
membrane.ui.__GT_ScrollView = (function membrane$ui$__GT_ScrollView(bounds,offset,drawable){
return (new membrane.ui.ScrollView(bounds,offset,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/ScrollView, taking a map of keywords to field values.
 */
membrane.ui.map__GT_ScrollView = (function membrane$ui$map__GT_ScrollView(G__47152){
var extmap__4419__auto__ = (function (){var G__47180 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47152,new cljs.core.Keyword(null,"bounds","bounds",1691609455),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__47152)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47180);
} else {
return G__47180;
}
})();
return (new membrane.ui.ScrollView(new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(G__47152),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__47152),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__47152),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Graphical elem that will draw drawable offset by offset and clip its drawings to bounds. 
 */
membrane.ui.scrollview = (function membrane$ui$scrollview(bounds,offset,drawable){
return (new membrane.ui.ScrollView(bounds,offset,drawable,null,null,null));
});

/**
 * @interface
 */
membrane.ui.IHandleEvent = function(){};

var membrane$ui$IHandleEvent$_can_handle_QMARK_$dyn_49486 = (function (this$,event_type){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (membrane.ui._can_handle_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,event_type) : m__4429__auto__.call(null,this$,event_type));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-can-handle?","membrane.ui/-can-handle?",-1920217833,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$2(this$,event_type) : meta_impl__4427__auto__.call(null,this$,event_type));
} else {
var m__4426__auto__ = (membrane.ui._can_handle_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,event_type) : m__4426__auto__.call(null,this$,event_type));
} else {
throw cljs.core.missing_protocol("IHandleEvent.-can-handle?",this$);
}
}
}
});
membrane.ui._can_handle_QMARK_ = (function membrane$ui$_can_handle_QMARK_(this$,event_type){
if((((!((this$ == null)))) && ((!((this$.membrane$ui$IHandleEvent$_can_handle_QMARK_$arity$2 == null)))))){
return this$.membrane$ui$IHandleEvent$_can_handle_QMARK_$arity$2(this$,event_type);
} else {
return membrane$ui$IHandleEvent$_can_handle_QMARK_$dyn_49486(this$,event_type);
}
});

var membrane$ui$IHandleEvent$_handle_event$dyn_49490 = (function (this$,event_type,event_args){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (membrane.ui._handle_event[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,event_type,event_args) : m__4429__auto__.call(null,this$,event_type,event_args));
} else {
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(this$),cljs.core.with_meta(new cljs.core.Symbol("membrane.ui","-handle-event","membrane.ui/-handle-event",-503904931,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)));
if(temp__5751__auto__){
var meta_impl__4427__auto__ = temp__5751__auto__;
return (meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$3 ? meta_impl__4427__auto__.cljs$core$IFn$_invoke$arity$3(this$,event_type,event_args) : meta_impl__4427__auto__.call(null,this$,event_type,event_args));
} else {
var m__4426__auto__ = (membrane.ui._handle_event["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,event_type,event_args) : m__4426__auto__.call(null,this$,event_type,event_args));
} else {
throw cljs.core.missing_protocol("IHandleEvent.-handle-event",this$);
}
}
}
});
membrane.ui._handle_event = (function membrane$ui$_handle_event(this$,event_type,event_args){
if((((!((this$ == null)))) && ((!((this$.membrane$ui$IHandleEvent$_handle_event$arity$3 == null)))))){
return this$.membrane$ui$IHandleEvent$_handle_event$arity$3(this$,event_type,event_args);
} else {
return membrane$ui$IHandleEvent$_handle_event$dyn_49490(this$,event_type,event_args);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {membrane.ui.IBubble}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IHandleEvent}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.EventHandler = (function (event_type,handler,drawable,__meta,__extmap,__hash){
this.event_type = event_type;
this.handler = handler;
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.EventHandler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.EventHandler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47182,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47186 = k47182;
var G__47186__$1 = (((G__47186 instanceof cljs.core.Keyword))?G__47186.fqn:null);
switch (G__47186__$1) {
case "event-type":
return self__.event_type;

break;
case "handler":
return self__.handler;

break;
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47182,else__4383__auto__);

}
}));

(membrane.ui.EventHandler.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47187){
var vec__47188 = p__47187;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47188,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47188,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.EventHandler.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.EventHandler.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.EventHandler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.EventHandler{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.EventHandler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47181){
var self__ = this;
var G__47181__$1 = this;
return (new cljs.core.RecordIter((0),G__47181__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-type","event-type",319722813),new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.EventHandler.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.EventHandler.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.child_bounds(self__.drawable);
}));

(membrane.ui.EventHandler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.EventHandler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.EventHandler(self__.event_type,self__.handler,self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.EventHandler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.EventHandler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1200937433 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.EventHandler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47183,other47184){
var self__ = this;
var this47183__$1 = this;
return (((!((other47184 == null)))) && ((this47183__$1.constructor === other47184.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47183__$1.event_type,other47184.event_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47183__$1.handler,other47184.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47183__$1.drawable,other47184.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47183__$1.__extmap,other47184.__extmap)));
}));

(membrane.ui.EventHandler.prototype.membrane$ui$IBubble$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.EventHandler.prototype.membrane$ui$IBubble$_bubble$arity$2 = (function (this$,events){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4529__auto__ = (function membrane$ui$iter__47191(s__47192){
return (new cljs.core.LazySeq(null,(function (){
var s__47192__$1 = s__47192;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47192__$1);
if(temp__5753__auto__){
var s__47192__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47192__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47192__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47194 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47193 = (0);
while(true){
if((i__47193 < size__4528__auto__)){
var intent = cljs.core._nth(c__4527__auto__,i__47193);
var intent_type = cljs.core.first(intent);
cljs.core.chunk_append(b__47194,(cljs.core.truth_(this$__$1.membrane$ui$IHandleEvent$_can_handle_QMARK_$arity$2(null,intent_type))?this$__$1.membrane$ui$IHandleEvent$_handle_event$arity$3(null,intent_type,cljs.core.rest(intent)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [intent], null)));

var G__49512 = (i__47193 + (1));
i__47193 = G__49512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47194),membrane$ui$iter__47191(cljs.core.chunk_rest(s__47192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47194),null);
}
} else {
var intent = cljs.core.first(s__47192__$2);
var intent_type = cljs.core.first(intent);
return cljs.core.cons((cljs.core.truth_(this$__$1.membrane$ui$IHandleEvent$_can_handle_QMARK_$arity$2(null,intent_type))?this$__$1.membrane$ui$IHandleEvent$_handle_event$arity$3(null,intent_type,cljs.core.rest(intent)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [intent], null)),membrane$ui$iter__47191(cljs.core.rest(s__47192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(events);
})());
}));

(membrane.ui.EventHandler.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.EventHandler.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.EventHandler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null,new cljs.core.Keyword(null,"event-type","event-type",319722813),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.EventHandler(self__.event_type,self__.handler,self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.EventHandler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47181){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47195 = cljs.core.keyword_identical_QMARK_;
var expr__47196 = k__4388__auto__;
if(cljs.core.truth_((pred__47195.cljs$core$IFn$_invoke$arity$2 ? pred__47195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813),expr__47196) : pred__47195.call(null,new cljs.core.Keyword(null,"event-type","event-type",319722813),expr__47196)))){
return (new membrane.ui.EventHandler(G__47181,self__.handler,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47195.cljs$core$IFn$_invoke$arity$2 ? pred__47195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__47196) : pred__47195.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__47196)))){
return (new membrane.ui.EventHandler(self__.event_type,G__47181,self__.drawable,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47195.cljs$core$IFn$_invoke$arity$2 ? pred__47195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47196) : pred__47195.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47196)))){
return (new membrane.ui.EventHandler(self__.event_type,self__.handler,G__47181,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.EventHandler(self__.event_type,self__.handler,self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47181),null));
}
}
}
}));

(membrane.ui.EventHandler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"event-type","event-type",319722813),self__.event_type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.EventHandler.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.EventHandler.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.EventHandler(self__.event_type,self__.handler,cljs.core.first(childs),null,null,null));
}));

(membrane.ui.EventHandler.prototype.membrane$ui$IHandleEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.EventHandler.prototype.membrane$ui$IHandleEvent$_can_handle_QMARK_$arity$2 = (function (this$,other_event_type){
var self__ = this;
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.event_type,other_event_type);
}));

(membrane.ui.EventHandler.prototype.membrane$ui$IHandleEvent$_handle_event$arity$3 = (function (this$,event_type__$1,event_args){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.handler,event_args);
}));

(membrane.ui.EventHandler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47181){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.EventHandler(self__.event_type,self__.handler,self__.drawable,G__47181,self__.__extmap,self__.__hash));
}));

(membrane.ui.EventHandler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.EventHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-type","event-type",1960254340,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.EventHandler.cljs$lang$type = true);

(membrane.ui.EventHandler.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/EventHandler",null,(1),null));
}));

(membrane.ui.EventHandler.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/EventHandler");
}));

/**
 * Positional factory function for membrane.ui/EventHandler.
 */
membrane.ui.__GT_EventHandler = (function membrane$ui$__GT_EventHandler(event_type,handler,drawable){
return (new membrane.ui.EventHandler(event_type,handler,drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/EventHandler, taking a map of keywords to field values.
 */
membrane.ui.map__GT_EventHandler = (function membrane$ui$map__GT_EventHandler(G__47185){
var extmap__4419__auto__ = (function (){var G__47198 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47185,new cljs.core.Keyword(null,"event-type","event-type",319722813),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"drawable","drawable",1829255936)], 0));
if(cljs.core.record_QMARK_(G__47185)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47198);
} else {
return G__47198;
}
})();
return (new membrane.ui.EventHandler(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(G__47185),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__47185),new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__47185),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.EventHandler,(function (draw){
return (function (this$){
var G__47199 = new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(this$);
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__47199) : draw.call(null,G__47199));
});
}));
if((typeof membrane !== 'undefined') && (typeof membrane.ui !== 'undefined') && (typeof membrane.ui.on_handler !== 'undefined')){
} else {
membrane.ui.on_handler = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("membrane.ui","on-handler-default","membrane.ui/on-handler-default",1778827142)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47200 = cljs.core.get_global_hierarchy;
return (fexpr__47200.cljs$core$IFn$_invoke$arity$0 ? fexpr__47200.cljs$core$IFn$_invoke$arity$0() : fexpr__47200.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("membrane.ui","on-handler"),(function (event_type,handler,body){
return event_type;
}),new cljs.core.Keyword("membrane.ui","on-handler-default","membrane.ui/on-handler-default",1778827142),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
membrane.ui.on_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("membrane.ui","on-handler-default","membrane.ui/on-handler-default",1778827142),(function (event_type,handler,body){
return (new membrane.ui.EventHandler(event_type,handler,body,null,null,null));
}));
/**
 * Wraps an elem with event handlers.
 * 
 *   events are pairs of events and event handlers and the last argument should be an elem.
 * 
 *   example:
 * 
 *   Adds do nothing event handlers for mouse-down and mouse-up events on a label that says "Hello!"
 *   (on :mouse-down (fn [[mx my]] nil)
 *    :mouse-up (fn [[mx my]] nil)
 *   (label "Hello!"))
 *   
 */
membrane.ui.on = (function membrane$ui$on(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49554 = arguments.length;
var i__4737__auto___49556 = (0);
while(true){
if((i__4737__auto___49556 < len__4736__auto___49554)){
args__4742__auto__.push((arguments[i__4737__auto___49556]));

var G__49559 = (i__4737__auto___49556 + (1));
i__4737__auto___49556 = G__49559;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic = (function (events){
var evs = cljs.core.seq(cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events)));
var body = cljs.core.last(events);
while(true){
if(evs){
var vec__47206 = cljs.core.first(evs);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47206,(1),null);
var G__49569 = cljs.core.next(evs);
var G__49570 = (function (){var G__47209 = event_type;
var G__47209__$1 = (((G__47209 instanceof cljs.core.Keyword))?G__47209.fqn:null);
switch (G__47209__$1) {
case "mouse-down":
return membrane.ui.on_mouse_down.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "mouse-event":
return membrane.ui.on_mouse_event.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "drop":
return membrane.ui.on_drop.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "scroll":
return membrane.ui.on_scroll.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "key-event":
return membrane.ui.on_key_event.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "key-press":
return membrane.ui.on_key_press.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "mouse-up":
return membrane.ui.on_mouse_up.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "mouse-move":
return membrane.ui.on_mouse_move.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "mouse-move-global":
return membrane.ui.on_mouse_move_global.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "clipboard-copy":
return membrane.ui.on_clipboard_copy.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "clipboard-cut":
return membrane.ui.on_clipboard_cut.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "clipboard-paste":
return membrane.ui.on_clipboard_paste.cljs$core$IFn$_invoke$arity$variadic(handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
default:
return membrane.ui.on_handler.cljs$core$IFn$_invoke$arity$3(event_type,handler,body);

}
})();
evs = G__49569;
body = G__49570;
continue;
} else {
return body;
}
break;
}
}));

(membrane.ui.on.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(membrane.ui.on.cljs$lang$applyTo = (function (seq47201){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47201));
}));

/**
 * Wraps an elem with event handlers.
 * 
 *   events are pairs of events and event handlers and the last argument should be an elem.
 *   The event handlers should accept an extra first argument to the event which is the original event handler.
 * 
 *   example:
 * 
 *   Wraps a button with a mouse-down handler that only returns an effect when the x coordinate is even.
 *   (on :mouse-down (fn [handler [mx my]]
 *                   (when (even? mx)
 *                     (handler [mx my])))
 *   (button "Hello!"
 *          (fn []
 *             [[:hello!]])))
 *   
 */
membrane.ui.wrap_on = (function membrane$ui$wrap_on(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49578 = arguments.length;
var i__4737__auto___49579 = (0);
while(true){
if((i__4737__auto___49579 < len__4736__auto___49578)){
args__4742__auto__.push((arguments[i__4737__auto___49579]));

var G__49580 = (i__4737__auto___49579 + (1));
i__4737__auto___49579 = G__49580;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return membrane.ui.wrap_on.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(membrane.ui.wrap_on.cljs$core$IFn$_invoke$arity$variadic = (function (events){
var evs = cljs.core.seq(cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events)));
var body = cljs.core.last(events);
while(true){
if(evs){
var vec__47238 = cljs.core.first(evs);
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47238,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47238,(1),null);
var G__49582 = cljs.core.next(evs);
var G__49583 = (function (){var G__47241 = event_type;
var G__47241__$1 = (((G__47241 instanceof cljs.core.Keyword))?G__47241.fqn:null);
switch (G__47241__$1) {
case "mouse-down":
return membrane.ui.on_mouse_event.cljs$core$IFn$_invoke$arity$variadic(((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (mpos,button,mouse_down_QMARK_,mods){
if(cljs.core.truth_(mouse_down_QMARK_)){
var G__47242 = ((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (pos){
return membrane.ui.mouse_event(body,pos,button,mouse_down_QMARK_,mods);
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
;
var G__47243 = mpos;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__47242,G__47243) : handler.call(null,G__47242,G__47243));
} else {
return membrane.ui.mouse_event(body,mpos,button,mouse_down_QMARK_,mods);
}
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "mouse-event":
return membrane.ui.on_mouse_event.cljs$core$IFn$_invoke$arity$variadic(((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (mpos,button,mouse_down_QMARK_,mods){
var G__47244 = ((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (mpos__$1,button__$1,mouse_down_QMARK___$1,mods__$1){
return membrane.ui.mouse_event(body,mpos__$1,button__$1,mouse_down_QMARK___$1,mods__$1);
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
;
var G__47245 = mpos;
var G__47246 = button;
var G__47247 = mouse_down_QMARK_;
var G__47248 = mods;
return (handler.cljs$core$IFn$_invoke$arity$5 ? handler.cljs$core$IFn$_invoke$arity$5(G__47244,G__47245,G__47246,G__47247,G__47248) : handler.call(null,G__47244,G__47245,G__47246,G__47247,G__47248));
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "key-event":
return membrane.ui.on_key_event.cljs$core$IFn$_invoke$arity$variadic(((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (key,scancode,action,mods){
var G__47249 = ((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (key__$1,scancode__$1,action__$1,mods__$1){
return membrane.ui.key_event.cljs$core$IFn$_invoke$arity$variadic(body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key__$1,scancode__$1,action__$1,mods__$1], 0));
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
;
var G__47250 = key;
var G__47251 = scancode;
var G__47252 = action;
var G__47253 = mods;
return (handler.cljs$core$IFn$_invoke$arity$5 ? handler.cljs$core$IFn$_invoke$arity$5(G__47249,G__47250,G__47251,G__47252,G__47253) : handler.call(null,G__47249,G__47250,G__47251,G__47252,G__47253));
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "key-press":
return membrane.ui.on_key_press.cljs$core$IFn$_invoke$arity$variadic(((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (key){
var G__47254 = ((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (key__$1){
return membrane.ui.key_press.cljs$core$IFn$_invoke$arity$variadic(body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key__$1], 0));
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
;
var G__47255 = key;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__47254,G__47255) : handler.call(null,G__47254,G__47255));
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "mouse-up":
return membrane.ui.on_mouse_event.cljs$core$IFn$_invoke$arity$variadic(((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (mpos,button,mouse_down_QMARK_,mods){
if(cljs.core.not(mouse_down_QMARK_)){
var G__47256 = ((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (pos){
return membrane.ui.mouse_event(body,pos,button,mouse_down_QMARK_,mods);
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
;
var G__47257 = mpos;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__47256,G__47257) : handler.call(null,G__47256,G__47257));
} else {
return membrane.ui.mouse_event(body,mpos,button,mouse_down_QMARK_,mods);
}
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "mouse-move":
return membrane.ui.on_mouse_move.cljs$core$IFn$_invoke$arity$variadic(((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (pos){
var G__47258 = ((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (pos__$1){
return membrane.ui.mouse_move(body,pos__$1);
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
;
var G__47259 = pos;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__47258,G__47259) : handler.call(null,G__47258,G__47259));
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "mouse-move-global":
return membrane.ui.on_mouse_move_global.cljs$core$IFn$_invoke$arity$variadic(((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (pos){
var G__47260 = ((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (pos__$1){
return membrane.ui.mouse_move_global(body,pos__$1);
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
;
var G__47261 = pos;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__47260,G__47261) : handler.call(null,G__47260,G__47261));
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
case "scroll":
return membrane.ui.on_scroll.cljs$core$IFn$_invoke$arity$variadic(((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (offset,pos){
var G__47262 = ((function (evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler){
return (function (offset__$1,pos__$1){
return membrane.ui.scroll(body,offset__$1,pos__$1);
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
;
var G__47263 = offset;
var G__47264 = pos;
return (handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(G__47262,G__47263,G__47264) : handler.call(null,G__47262,G__47263,G__47264));
});})(evs,body,G__47241,G__47241__$1,vec__47238,event_type,handler))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47241__$1)].join('')));

}
})();
evs = G__49582;
body = G__49583;
continue;
} else {
return body;
}
break;
}
}));

(membrane.ui.wrap_on.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(membrane.ui.wrap_on.cljs$lang$applyTo = (function (seq47210){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47210));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {membrane.ui.IBubble}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IHandleEvent}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IMouseMove}
 * @implements {membrane.ui.IKeyType}
 * @implements {membrane.ui.IMouseWheel}
 * @implements {membrane.ui.IClipboardCut}
 * @implements {membrane.ui.IMouseMoveGlobal}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {membrane.ui.IScroll}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {membrane.ui.IKeyPress}
 * @implements {membrane.ui.IClipboardPaste}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {membrane.ui.IClipboardCopy}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.NoEvents = (function (drawable,__meta,__extmap,__hash){
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.NoEvents.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.NoEvents.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47266,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47270 = k47266;
var G__47270__$1 = (((G__47270 instanceof cljs.core.Keyword))?G__47270.fqn:null);
switch (G__47270__$1) {
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47266,else__4383__auto__);

}
}));

(membrane.ui.NoEvents.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47271){
var vec__47272 = p__47271;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47272,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47272,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IKeyType$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IKeyType$_key_type$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IClipboardCut$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IClipboardCut$_clipboard_cut$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IMouseWheel$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IMouseWheel$_mouse_wheel$arity$2 = (function (this$,pos){
var self__ = this;
var this$__$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.NoEvents.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.NoEvents{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.NoEvents.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47265){
var self__ = this;
var G__47265__$1 = this;
return (new cljs.core.RecordIter((0),G__47265__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IScroll$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IScroll$_scroll$arity$3 = (function (this$,pos,mpos){
var self__ = this;
var this$__$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.child_bounds(self__.drawable);
}));

(membrane.ui.NoEvents.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.NoEvents.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.NoEvents(self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.NoEvents.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IKeyPress$_key_press$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (911804394 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.NoEvents.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47267,other47268){
var self__ = this;
var this47267__$1 = this;
return (((!((other47268 == null)))) && ((this47267__$1.constructor === other47268.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47267__$1.drawable,other47268.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47267__$1.__extmap,other47268.__extmap)));
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IClipboardCopy$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IClipboardCopy$_clipboard_copy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IClipboardPaste$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IClipboardPaste$_clipboard_paste$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IBubble$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IBubble$_bubble$arity$2 = (function (this$,events){
var self__ = this;
var this$__$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.NoEvents.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.NoEvents(self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.NoEvents.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47265){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47275 = cljs.core.keyword_identical_QMARK_;
var expr__47276 = k__4388__auto__;
if(cljs.core.truth_((pred__47275.cljs$core$IFn$_invoke$arity$2 ? pred__47275.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47276) : pred__47275.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47276)))){
return (new membrane.ui.NoEvents(G__47265,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.NoEvents(self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47265),null));
}
}));

(membrane.ui.NoEvents.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.NoEvents(cljs.core.first(childs),null,null,null));
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IMouseMove$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IMouseMove$_mouse_move$arity$2 = (function (this$,pos){
var self__ = this;
var this$__$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IHandleEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IHandleEvent$_can_handle_QMARK_$arity$2 = (function (this$,other_event_type){
var self__ = this;
var this$__$1 = this;
return false;
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IHandleEvent$_handle_event$arity$3 = (function (this$,event_type,event_args){
var self__ = this;
var this$__$1 = this;
return null;
}));

(membrane.ui.NoEvents.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47265){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.NoEvents(self__.drawable,G__47265,self__.__extmap,self__.__hash));
}));

(membrane.ui.NoEvents.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.NoEvents.prototype.membrane$ui$IMouseMoveGlobal$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$ui$IMouseMoveGlobal$_mouse_move_global$arity$2 = (function (this$,pos){
var self__ = this;
var this$__$1 = this;
return null;
}));

(membrane.ui.NoEvents.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.NoEvents.cljs$lang$type = true);

(membrane.ui.NoEvents.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/NoEvents",null,(1),null));
}));

(membrane.ui.NoEvents.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/NoEvents");
}));

/**
 * Positional factory function for membrane.ui/NoEvents.
 */
membrane.ui.__GT_NoEvents = (function membrane$ui$__GT_NoEvents(drawable){
return (new membrane.ui.NoEvents(drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/NoEvents, taking a map of keywords to field values.
 */
membrane.ui.map__GT_NoEvents = (function membrane$ui$map__GT_NoEvents(G__47269){
var extmap__4419__auto__ = (function (){var G__47278 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47269,new cljs.core.Keyword(null,"drawable","drawable",1829255936));
if(cljs.core.record_QMARK_(G__47269)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47278);
} else {
return G__47278;
}
})();
return (new membrane.ui.NoEvents(new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__47269),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.NoEvents,(function (draw){
return (function (this$){
var G__47279 = new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(this$);
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__47279) : draw.call(null,G__47279));
});
}));
membrane.ui.no_events = (function membrane$ui$no_events(body){
var do_nothing = cljs.core.constantly(null);
return membrane.ui.on.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mouse-event","mouse-event",189077181),do_nothing,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),do_nothing,new cljs.core.Keyword(null,"mouse-down","mouse-down",647107567),do_nothing,new cljs.core.Keyword(null,"drop","drop",364481611),do_nothing,new cljs.core.Keyword(null,"scroll","scroll",971553779),do_nothing,new cljs.core.Keyword(null,"key-event","key-event",-1141143098),do_nothing,new cljs.core.Keyword(null,"key-press","key-press",850740112),do_nothing,new cljs.core.Keyword(null,"mouse-move","mouse-move",-1993061223),do_nothing,new cljs.core.Keyword(null,"mouse-move-global","mouse-move-global",-212584064),do_nothing,new cljs.core.Keyword(null,"clipboard-copy","clipboard-copy",1304333525),do_nothing,new cljs.core.Keyword(null,"clipboard-cut","clipboard-cut",-1344378713),do_nothing,new cljs.core.Keyword(null,"clipboard-paste","clipboard-paste",-1682370330),do_nothing,body], 0));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {membrane.ui.IHasKeyEvent}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.NoKeyEvent = (function (drawable,__meta,__extmap,__hash){
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.NoKeyEvent.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47281,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47285 = k47281;
var G__47285__$1 = (((G__47285 instanceof cljs.core.Keyword))?G__47285.fqn:null);
switch (G__47285__$1) {
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47281,else__4383__auto__);

}
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47286){
var vec__47287 = p__47286;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47287,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47287,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.NoKeyEvent{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47280){
var self__ = this;
var G__47280__$1 = this;
return (new cljs.core.RecordIter((0),G__47280__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.child_bounds(self__.drawable);
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.NoKeyEvent(self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1115347816 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47282,other47283){
var self__ = this;
var this47282__$1 = this;
return (((!((other47283 == null)))) && ((this47282__$1.constructor === other47283.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47282__$1.drawable,other47283.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47282__$1.__extmap,other47283.__extmap)));
}));

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.NoKeyEvent(self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47280){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47290 = cljs.core.keyword_identical_QMARK_;
var expr__47291 = k__4388__auto__;
if(cljs.core.truth_((pred__47290.cljs$core$IFn$_invoke$arity$2 ? pred__47290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47291) : pred__47290.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47291)))){
return (new membrane.ui.NoKeyEvent(G__47280,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.NoKeyEvent(self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47280),null));
}
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.NoKeyEvent(cljs.core.first(childs),null,null,null));
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47280){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.NoKeyEvent(self__.drawable,G__47280,self__.__extmap,self__.__hash));
}));

(membrane.ui.NoKeyEvent.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IHasKeyEvent$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyEvent.prototype.membrane$ui$IHasKeyEvent$has_key_event$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
}));

(membrane.ui.NoKeyEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.NoKeyEvent.cljs$lang$type = true);

(membrane.ui.NoKeyEvent.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/NoKeyEvent",null,(1),null));
}));

(membrane.ui.NoKeyEvent.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/NoKeyEvent");
}));

/**
 * Positional factory function for membrane.ui/NoKeyEvent.
 */
membrane.ui.__GT_NoKeyEvent = (function membrane$ui$__GT_NoKeyEvent(drawable){
return (new membrane.ui.NoKeyEvent(drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/NoKeyEvent, taking a map of keywords to field values.
 */
membrane.ui.map__GT_NoKeyEvent = (function membrane$ui$map__GT_NoKeyEvent(G__47284){
var extmap__4419__auto__ = (function (){var G__47293 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47284,new cljs.core.Keyword(null,"drawable","drawable",1829255936));
if(cljs.core.record_QMARK_(G__47284)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47293);
} else {
return G__47293;
}
})();
return (new membrane.ui.NoKeyEvent(new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__47284),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.NoKeyEvent,(function (draw){
return (function (this$){
var G__47294 = new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(this$);
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__47294) : draw.call(null,G__47294));
});
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IHasKeyPress}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.NoKeyPress = (function (drawable,__meta,__extmap,__hash){
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.NoKeyPress.prototype.membrane$ui$IHasKeyPress$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyPress.prototype.membrane$ui$IHasKeyPress$has_key_press$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47296,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47300 = k47296;
var G__47300__$1 = (((G__47300 instanceof cljs.core.Keyword))?G__47300.fqn:null);
switch (G__47300__$1) {
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47296,else__4383__auto__);

}
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47301){
var vec__47302 = p__47301;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47302,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47302,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.NoKeyPress.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyPress.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.NoKeyPress{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47295){
var self__ = this;
var G__47295__$1 = this;
return (new cljs.core.RecordIter((0),G__47295__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.NoKeyPress.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyPress.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.ui.child_bounds(self__.drawable);
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.NoKeyPress(self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (533507040 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47297,other47298){
var self__ = this;
var this47297__$1 = this;
return (((!((other47298 == null)))) && ((this47297__$1.constructor === other47298.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47297__$1.drawable,other47298.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47297__$1.__extmap,other47298.__extmap)));
}));

(membrane.ui.NoKeyPress.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyPress.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.NoKeyPress(self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47295){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47305 = cljs.core.keyword_identical_QMARK_;
var expr__47306 = k__4388__auto__;
if(cljs.core.truth_((pred__47305.cljs$core$IFn$_invoke$arity$2 ? pred__47305.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47306) : pred__47305.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47306)))){
return (new membrane.ui.NoKeyPress(G__47295,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.NoKeyPress(self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47295),null));
}
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.NoKeyPress.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyPress.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.NoKeyPress(cljs.core.first(childs),null,null,null));
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47295){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.NoKeyPress(self__.drawable,G__47295,self__.__extmap,self__.__hash));
}));

(membrane.ui.NoKeyPress.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.NoKeyPress.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.NoKeyPress.cljs$lang$type = true);

(membrane.ui.NoKeyPress.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/NoKeyPress",null,(1),null));
}));

(membrane.ui.NoKeyPress.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/NoKeyPress");
}));

/**
 * Positional factory function for membrane.ui/NoKeyPress.
 */
membrane.ui.__GT_NoKeyPress = (function membrane$ui$__GT_NoKeyPress(drawable){
return (new membrane.ui.NoKeyPress(drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/NoKeyPress, taking a map of keywords to field values.
 */
membrane.ui.map__GT_NoKeyPress = (function membrane$ui$map__GT_NoKeyPress(G__47299){
var extmap__4419__auto__ = (function (){var G__47308 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47299,new cljs.core.Keyword(null,"drawable","drawable",1829255936));
if(cljs.core.record_QMARK_(G__47299)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47308);
} else {
return G__47308;
}
})();
return (new membrane.ui.NoKeyPress(new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__47299),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.NoKeyPress,(function (draw){
return (function (this$){
var G__47309 = new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(this$);
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__47309) : draw.call(null,G__47309));
});
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {membrane.ui.IMakeNode}
 * @implements {membrane.ui.IOrigin}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.TryDraw = (function (drawable,error_draw,__meta,__extmap,__hash){
this.drawable = drawable;
this.error_draw = error_draw;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.TryDraw.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.TryDraw.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47311,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47315 = k47311;
var G__47315__$1 = (((G__47315 instanceof cljs.core.Keyword))?G__47315.fqn:null);
switch (G__47315__$1) {
case "drawable":
return self__.drawable;

break;
case "error-draw":
return self__.error_draw;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47311,else__4383__auto__);

}
}));

(membrane.ui.TryDraw.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47316){
var vec__47317 = p__47316;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47317,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47317,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.TryDraw.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TryDraw.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.TryDraw.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.TryDraw{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-draw","error-draw",-236722733),self__.error_draw],null))], null),self__.__extmap));
}));

(membrane.ui.TryDraw.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47310){
var self__ = this;
var G__47310__$1 = this;
return (new cljs.core.RecordIter((0),G__47310__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),new cljs.core.Keyword(null,"error-draw","error-draw",-236722733)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.TryDraw.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TryDraw.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
try{return membrane.ui.child_bounds(self__.drawable);
}catch (e47320){if((e47320 instanceof Object)){
var e = e47320;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));

return membrane.ui.bounds(membrane.ui.label.cljs$core$IFn$_invoke$arity$1("error"));
} else {
throw e47320;

}
}}));

(membrane.ui.TryDraw.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.TryDraw.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.TryDraw(self__.drawable,self__.error_draw,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.TryDraw.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.TryDraw.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-629576497 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.TryDraw.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47312,other47313){
var self__ = this;
var this47312__$1 = this;
return (((!((other47313 == null)))) && ((this47312__$1.constructor === other47313.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47312__$1.drawable,other47313.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47312__$1.error_draw,other47313.error_draw)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47312__$1.__extmap,other47313.__extmap)));
}));

(membrane.ui.TryDraw.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TryDraw.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return membrane.ui.origin(self__.drawable);
}catch (e47321){if((e47321 instanceof Object)){
var e = e47321;
return membrane.ui.bounds(membrane.ui.label.cljs$core$IFn$_invoke$arity$1("error"));
} else {
throw e47321;

}
}}));

(membrane.ui.TryDraw.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null,new cljs.core.Keyword(null,"error-draw","error-draw",-236722733),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.TryDraw(self__.drawable,self__.error_draw,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.TryDraw.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47310){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47322 = cljs.core.keyword_identical_QMARK_;
var expr__47323 = k__4388__auto__;
if(cljs.core.truth_((pred__47322.cljs$core$IFn$_invoke$arity$2 ? pred__47322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47323) : pred__47322.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47323)))){
return (new membrane.ui.TryDraw(G__47310,self__.error_draw,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47322.cljs$core$IFn$_invoke$arity$2 ? pred__47322.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error-draw","error-draw",-236722733),expr__47323) : pred__47322.call(null,new cljs.core.Keyword(null,"error-draw","error-draw",-236722733),expr__47323)))){
return (new membrane.ui.TryDraw(self__.drawable,G__47310,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.TryDraw(self__.drawable,self__.error_draw,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47310),null));
}
}
}));

(membrane.ui.TryDraw.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error-draw","error-draw",-236722733),self__.error_draw,null))], null),self__.__extmap));
}));

(membrane.ui.TryDraw.prototype.membrane$ui$IMakeNode$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TryDraw.prototype.membrane$ui$IMakeNode$make_node$arity$2 = (function (this$,childs){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(childs),(1))){
} else {
throw (new Error("Assert failed: (= (count childs) 1)"));
}

return (new membrane.ui.TryDraw(cljs.core.first(childs),self__.error_draw,null,null,null));
}));

(membrane.ui.TryDraw.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47310){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.TryDraw(self__.drawable,self__.error_draw,G__47310,self__.__extmap,self__.__hash));
}));

(membrane.ui.TryDraw.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.TryDraw.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"drawable","drawable",-825179833,null),new cljs.core.Symbol(null,"error-draw","error-draw",1403808794,null)], null);
}));

(membrane.ui.TryDraw.cljs$lang$type = true);

(membrane.ui.TryDraw.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/TryDraw",null,(1),null));
}));

(membrane.ui.TryDraw.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/TryDraw");
}));

/**
 * Positional factory function for membrane.ui/TryDraw.
 */
membrane.ui.__GT_TryDraw = (function membrane$ui$__GT_TryDraw(drawable,error_draw){
return (new membrane.ui.TryDraw(drawable,error_draw,null,null,null));
});

/**
 * Factory function for membrane.ui/TryDraw, taking a map of keywords to field values.
 */
membrane.ui.map__GT_TryDraw = (function membrane$ui$map__GT_TryDraw(G__47314){
var extmap__4419__auto__ = (function (){var G__47325 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47314,new cljs.core.Keyword(null,"drawable","drawable",1829255936),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-draw","error-draw",-236722733)], 0));
if(cljs.core.record_QMARK_(G__47314)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47325);
} else {
return G__47325;
}
})();
return (new membrane.ui.TryDraw(new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__47314),new cljs.core.Keyword(null,"error-draw","error-draw",-236722733).cljs$core$IFn$_invoke$arity$1(G__47314),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.ui.default_draw_impls,cljs.core.assoc,membrane.ui.TryDraw,(function (draw){
return (function (this$){
try{var G__47328 = new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(this$);
return (draw.cljs$core$IFn$_invoke$arity$1 ? draw.cljs$core$IFn$_invoke$arity$1(G__47328) : draw.call(null,G__47328));
}catch (e47326){if((e47326 instanceof Object)){
var e = e47326;
var fexpr__47327 = new cljs.core.Keyword(null,"error-draw","error-draw",-236722733).cljs$core$IFn$_invoke$arity$1(this$);
return (fexpr__47327.cljs$core$IFn$_invoke$arity$2 ? fexpr__47327.cljs$core$IFn$_invoke$arity$2(draw,e) : fexpr__47327.call(null,draw,e));
} else {
throw e47326;

}
}});
}));
/**
 * Tries to draw body. If an exception occurs, calls error-draw with `draw` and the exception
 * 
 *   Example:
 *   (ui/try-draw error-body
 *  (fn [draw e]
 *    (draw (ui/label e))))
 *   
 */
membrane.ui.try_draw = (function membrane$ui$try_draw(body,error_draw){
return (new membrane.ui.TryDraw(body,error_draw,null,null,null));
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
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {membrane.ui.IChildren}
 * @implements {membrane.ui.IBounds}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
membrane.ui.Cached = (function (drawable,__meta,__extmap,__hash){
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.ui.Cached.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.ui.Cached.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k47330,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__47334 = k47330;
var G__47334__$1 = (((G__47334 instanceof cljs.core.Keyword))?G__47334.fqn:null);
switch (G__47334__$1) {
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47330,else__4383__auto__);

}
}));

(membrane.ui.Cached.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__47335){
var vec__47336 = p__47335;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47336,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47336,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.ui.Cached.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Cached.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.ui.Cached.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.ui.Cached{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.ui.Cached.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47329){
var self__ = this;
var G__47329__$1 = this;
return (new cljs.core.RecordIter((0),G__47329__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.ui.Cached.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Cached.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return membrane.ui.bounds(self__.drawable);
}));

(membrane.ui.Cached.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.ui.Cached.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.ui.Cached(self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.ui.Cached.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(membrane.ui.Cached.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-59962078 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.ui.Cached.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47331,other47332){
var self__ = this;
var this47331__$1 = this;
return (((!((other47332 == null)))) && ((this47331__$1.constructor === other47332.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47331__$1.drawable,other47332.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47331__$1.__extmap,other47332.__extmap)));
}));

(membrane.ui.Cached.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Cached.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return membrane.ui.origin(self__.drawable);
}));

(membrane.ui.Cached.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.ui.Cached(self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.ui.Cached.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__47329){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__47339 = cljs.core.keyword_identical_QMARK_;
var expr__47340 = k__4388__auto__;
if(cljs.core.truth_((pred__47339.cljs$core$IFn$_invoke$arity$2 ? pred__47339.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47340) : pred__47339.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__47340)))){
return (new membrane.ui.Cached(G__47329,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.ui.Cached(self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__47329),null));
}
}));

(membrane.ui.Cached.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.ui.Cached.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__47329){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.ui.Cached(self__.drawable,G__47329,self__.__extmap,self__.__hash));
}));

(membrane.ui.Cached.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.ui.Cached.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.ui.Cached.cljs$lang$type = true);

(membrane.ui.Cached.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.ui/Cached",null,(1),null));
}));

(membrane.ui.Cached.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.ui/Cached");
}));

/**
 * Positional factory function for membrane.ui/Cached.
 */
membrane.ui.__GT_Cached = (function membrane$ui$__GT_Cached(drawable){
return (new membrane.ui.Cached(drawable,null,null,null));
});

/**
 * Factory function for membrane.ui/Cached, taking a map of keywords to field values.
 */
membrane.ui.map__GT_Cached = (function membrane$ui$map__GT_Cached(G__47333){
var extmap__4419__auto__ = (function (){var G__47342 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__47333,new cljs.core.Keyword(null,"drawable","drawable",1829255936));
if(cljs.core.record_QMARK_(G__47333)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47342);
} else {
return G__47342;
}
})();
return (new membrane.ui.Cached(new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__47333),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

membrane.ui.index_for_position_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
membrane.ui.index_for_position = (function membrane$ui$index_for_position(font,text,x,y){
var f = cljs.core.deref(membrane.ui.index_for_position_STAR_);
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ","index-for-position should be replaced by implementation","\n","f"].join('')));
}

return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(font,text,x,y) : f.call(null,font,text,x,y));
});
membrane.ui.copy_to_clipboard = (function membrane$ui$copy_to_clipboard(s){
return null;
});

//# sourceMappingURL=membrane.ui.js.map
