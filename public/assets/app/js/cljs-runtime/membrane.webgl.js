goog.provide('membrane.webgl');
var module$node_modules$opentype_DOT_js$dist$opentype=shadow.js.require("module$node_modules$opentype_DOT_js$dist$opentype", {});
membrane.webgl._STAR_paint_style_STAR_ = new cljs.core.Keyword("membrane.ui","style-fill","membrane.ui/style-fill",1620230388);
membrane.webgl._STAR_already_drawing_STAR_ = null;
if((typeof membrane !== 'undefined') && (typeof membrane.webgl !== 'undefined') && (typeof membrane.webgl.event_handlers !== 'undefined')){
} else {
membrane.webgl.event_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof membrane !== 'undefined') && (typeof membrane.webgl !== 'undefined') && (typeof membrane.webgl.font_cache !== 'undefined')){
} else {
membrane.webgl.font_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}

/**
 * @interface
 */
membrane.webgl.IDraw = function(){};

var membrane$webgl$IDraw$draw$dyn_49148 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (membrane.webgl.draw[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (membrane.webgl.draw["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDraw.draw",this$);
}
}
});
membrane.webgl.draw = (function membrane$webgl$draw(this$){
if((((!((this$ == null)))) && ((!((this$.membrane$webgl$IDraw$draw$arity$1 == null)))))){
return this$.membrane$webgl$IDraw$draw$arity$1(this$);
} else {
return membrane$webgl$IDraw$draw$dyn_49148(this$);
}
});

var draw__46081__auto___49149 = (function (){var fexpr__48428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),null);
return (fexpr__48428.cljs$core$IFn$_invoke$arity$1 ? fexpr__48428.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48428.call(null,membrane.webgl.draw));
})();
goog.object.set(membrane.webgl.IDraw,"null",true);

goog.object.set(membrane.webgl.draw,"null",(function (this__46082__auto__){
return (draw__46081__auto___49149.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49149.cljs$core$IFn$_invoke$arity$1(this__46082__auto__) : draw__46081__auto___49149.call(null,this__46082__auto__));
}));

var draw__46081__auto___49150 = (function (){var fexpr__48430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnMouseMoveGlobal);
return (fexpr__48430.cljs$core$IFn$_invoke$arity$1 ? fexpr__48430.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48430.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnMouseMoveGlobal.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMoveGlobal.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49150.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49150.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49150.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49151 = (function (){var fexpr__48435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnDrop);
return (fexpr__48435.cljs$core$IFn$_invoke$arity$1 ? fexpr__48435.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48435.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnDrop.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnDrop.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49151.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49151.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49151.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49152 = (function (){var fexpr__48436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnMouseMove);
return (fexpr__48436.cljs$core$IFn$_invoke$arity$1 ? fexpr__48436.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48436.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnMouseMove.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseMove.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49152.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49152.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49152.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49156 = (function (){var fexpr__48437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.Spacer);
return (fexpr__48437.cljs$core$IFn$_invoke$arity$1 ? fexpr__48437.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48437.call(null,membrane.webgl.draw));
})();
(membrane.ui.Spacer.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Spacer.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49156.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49156.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49156.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49157 = (function (){var fexpr__48438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnClipboardPaste);
return (fexpr__48438.cljs$core$IFn$_invoke$arity$1 ? fexpr__48438.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48438.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnClipboardPaste.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardPaste.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49157.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49157.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49157.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49158 = (function (){var fexpr__48439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.Rectangle);
return (fexpr__48439.cljs$core$IFn$_invoke$arity$1 ? fexpr__48439.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48439.call(null,membrane.webgl.draw));
})();
(membrane.ui.Rectangle.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Rectangle.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49158.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49158.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49158.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49159 = (function (){var fexpr__48441 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnBubble);
return (fexpr__48441.cljs$core$IFn$_invoke$arity$1 ? fexpr__48441.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48441.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnBubble.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnBubble.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49159.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49159.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49159.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49160 = (function (){var fexpr__48445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.NoEvents);
return (fexpr__48445.cljs$core$IFn$_invoke$arity$1 ? fexpr__48445.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48445.call(null,membrane.webgl.draw));
})();
(membrane.ui.NoEvents.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoEvents.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49160.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49160.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49160.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49161 = (function (){var fexpr__48446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnClipboardCopy);
return (fexpr__48446.cljs$core$IFn$_invoke$arity$1 ? fexpr__48446.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48446.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnClipboardCopy.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCopy.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49161.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49161.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49161.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49162 = (function (){var fexpr__48450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnClipboardCut);
return (fexpr__48450.cljs$core$IFn$_invoke$arity$1 ? fexpr__48450.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48450.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnClipboardCut.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClipboardCut.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49162.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49162.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49162.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49163 = (function (){var fexpr__48451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.NoKeyPress);
return (fexpr__48451.cljs$core$IFn$_invoke$arity$1 ? fexpr__48451.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48451.call(null,membrane.webgl.draw));
})();
(membrane.ui.NoKeyPress.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyPress.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49163.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49163.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49163.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49164 = (function (){var fexpr__48453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnClick);
return (fexpr__48453.cljs$core$IFn$_invoke$arity$1 ? fexpr__48453.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48453.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnClick.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnClick.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49164.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49164.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49164.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49165 = (function (){var fexpr__48454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.NoKeyEvent);
return (fexpr__48454.cljs$core$IFn$_invoke$arity$1 ? fexpr__48454.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48454.call(null,membrane.webgl.draw));
})();
(membrane.ui.NoKeyEvent.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.NoKeyEvent.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49165.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49165.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49165.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49166 = (function (){var fexpr__48458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnKeyPress);
return (fexpr__48458.cljs$core$IFn$_invoke$arity$1 ? fexpr__48458.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48458.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnKeyPress.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyPress.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49166.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49166.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49166.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49171 = (function (){var fexpr__48461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.Button);
return (fexpr__48461.cljs$core$IFn$_invoke$arity$1 ? fexpr__48461.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48461.call(null,membrane.webgl.draw));
})();
(membrane.ui.Button.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Button.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49171.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49171.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49171.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49176 = (function (){var fexpr__48462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnKeyEvent);
return (fexpr__48462.cljs$core$IFn$_invoke$arity$1 ? fexpr__48462.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48462.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnKeyEvent.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnKeyEvent.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49176.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49176.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49176.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49183 = (function (){var fexpr__48463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.Padding);
return (fexpr__48463.cljs$core$IFn$_invoke$arity$1 ? fexpr__48463.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48463.call(null,membrane.webgl.draw));
})();
(membrane.ui.Padding.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Padding.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49183.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49183.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49183.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49185 = (function (){var fexpr__48467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnMouseEvent);
return (fexpr__48467.cljs$core$IFn$_invoke$arity$1 ? fexpr__48467.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48467.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnMouseEvent.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseEvent.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49185.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49185.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49185.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49186 = (function (){var fexpr__48471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.Bordered);
return (fexpr__48471.cljs$core$IFn$_invoke$arity$1 ? fexpr__48471.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48471.call(null,membrane.webgl.draw));
})();
(membrane.ui.Bordered.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Bordered.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49186.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49186.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49186.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49188 = (function (){var fexpr__48475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.TryDraw);
return (fexpr__48475.cljs$core$IFn$_invoke$arity$1 ? fexpr__48475.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48475.call(null,membrane.webgl.draw));
})();
(membrane.ui.TryDraw.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TryDraw.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49188.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49188.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49188.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49189 = (function (){var fexpr__48483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.FixedBounds);
return (fexpr__48483.cljs$core$IFn$_invoke$arity$1 ? fexpr__48483.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48483.call(null,membrane.webgl.draw));
})();
(membrane.ui.FixedBounds.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FixedBounds.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49189.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49189.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49189.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49191 = (function (){var fexpr__48490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),cljs.core.PersistentVector);
return (fexpr__48490.cljs$core$IFn$_invoke$arity$1 ? fexpr__48490.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48490.call(null,membrane.webgl.draw));
})();
(cljs.core.PersistentVector.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49191.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49191.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49191.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49192 = (function (){var fexpr__48492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__48492.cljs$core$IFn$_invoke$arity$1 ? fexpr__48492.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48492.call(null,membrane.webgl.draw));
})();
goog.object.set(membrane.webgl.IDraw,"_",true);

goog.object.set(membrane.webgl.draw,"_",(function (this__46082__auto__){
return (draw__46081__auto___49192.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49192.cljs$core$IFn$_invoke$arity$1(this__46082__auto__) : draw__46081__auto___49192.call(null,this__46082__auto__));
}));

var draw__46081__auto___49193 = (function (){var fexpr__48499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnScroll);
return (fexpr__48499.cljs$core$IFn$_invoke$arity$1 ? fexpr__48499.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48499.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnScroll.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnScroll.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49193.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49193.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49193.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49194 = (function (){var fexpr__48507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnMouseUp);
return (fexpr__48507.cljs$core$IFn$_invoke$arity$1 ? fexpr__48507.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48507.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnMouseUp.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseUp.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49194.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49194.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49194.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49195 = (function (){var fexpr__48516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.Checkbox);
return (fexpr__48516.cljs$core$IFn$_invoke$arity$1 ? fexpr__48516.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48516.call(null,membrane.webgl.draw));
})();
(membrane.ui.Checkbox.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Checkbox.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49195.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49195.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49195.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49196 = (function (){var fexpr__48517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.EventHandler);
return (fexpr__48517.cljs$core$IFn$_invoke$arity$1 ? fexpr__48517.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48517.call(null,membrane.webgl.draw));
})();
(membrane.ui.EventHandler.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.EventHandler.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49196.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49196.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49196.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49197 = (function (){var fexpr__48522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.FillBordered);
return (fexpr__48522.cljs$core$IFn$_invoke$arity$1 ? fexpr__48522.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48522.call(null,membrane.webgl.draw));
})();
(membrane.ui.FillBordered.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.FillBordered.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49197.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49197.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49197.call(null,this__46082__auto____$1));
}));

var draw__46081__auto___49199 = (function (){var fexpr__48528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.ui.default_draw_impls),membrane.ui.OnMouseDown);
return (fexpr__48528.cljs$core$IFn$_invoke$arity$1 ? fexpr__48528.cljs$core$IFn$_invoke$arity$1(membrane.webgl.draw) : fexpr__48528.call(null,membrane.webgl.draw));
})();
(membrane.ui.OnMouseDown.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnMouseDown.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this__46082__auto__){
var this__46082__auto____$1 = this;
return (draw__46081__auto___49199.cljs$core$IFn$_invoke$arity$1 ? draw__46081__auto___49199.cljs$core$IFn$_invoke$arity$1(this__46082__auto____$1) : draw__46081__auto___49199.call(null,this__46082__auto____$1));
}));
if((typeof membrane !== 'undefined') && (typeof membrane.webgl !== 'undefined') && (typeof membrane.webgl._STAR_draw_cache_STAR_ !== 'undefined')){
} else {
membrane.webgl._STAR_draw_cache_STAR_ = null;
}
membrane.webgl.canvas_copy_props = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["direction","fillStyle","filter","font","globalAlpha","globalCompositeOperation","imageSmoothingEnabled","imageSmoothingQuality","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textAlign","textBaseline"], null);
membrane.webgl.copy_canvas_properties_BANG_ = (function membrane$webgl$copy_canvas_properties_BANG_(from,to){
var seq__48529 = cljs.core.seq(membrane.webgl.canvas_copy_props);
var chunk__48530 = null;
var count__48531 = (0);
var i__48532 = (0);
while(true){
if((i__48532 < count__48531)){
var p = chunk__48530.cljs$core$IIndexed$_nth$arity$2(null,i__48532);
goog.object.set(to,p,goog.object.get(from,p));


var G__49202 = seq__48529;
var G__49203 = chunk__48530;
var G__49204 = count__48531;
var G__49205 = (i__48532 + (1));
seq__48529 = G__49202;
chunk__48530 = G__49203;
count__48531 = G__49204;
i__48532 = G__49205;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48529);
if(temp__5753__auto__){
var seq__48529__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48529__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48529__$1);
var G__49206 = cljs.core.chunk_rest(seq__48529__$1);
var G__49207 = c__4556__auto__;
var G__49208 = cljs.core.count(c__4556__auto__);
var G__49209 = (0);
seq__48529 = G__49206;
chunk__48530 = G__49207;
count__48531 = G__49208;
i__48532 = G__49209;
continue;
} else {
var p = cljs.core.first(seq__48529__$1);
goog.object.set(to,p,goog.object.get(from,p));


var G__49210 = cljs.core.next(seq__48529__$1);
var G__49211 = null;
var G__49212 = (0);
var G__49213 = (0);
seq__48529 = G__49210;
chunk__48530 = G__49211;
count__48531 = G__49212;
i__48532 = G__49213;
continue;
}
} else {
return null;
}
}
break;
}
});
membrane.webgl.cached_draw = (function membrane$webgl$cached_draw(drawable){
var padding = (5);
if(cljs.core.truth_(membrane.webgl._STAR_already_drawing_STAR_)){
return membrane.webgl.draw(drawable);
} else {
var vec__48534 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.devicePixelRatio,window.devicePixelRatio], null);
var xscale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48534,(0),null);
var yscale = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48534,(1),null);
var content_scale = vec__48534;
var vec__48537 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.webgl._STAR_draw_cache_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawable,content_scale,membrane.webgl._STAR_paint_style_STAR_], null));
if(cljs.core.truth_(temp__5751__auto__)){
var img_info = temp__5751__auto__;
return img_info;
} else {
var vec__48546 = membrane.ui.bounds(drawable);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48546,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48546,(1),null);
var img_width = ((((2) * padding) + (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = w;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()) | (0));
var img_height = ((((2) * padding) + (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = h;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()) | (0));
var offscreen_canvas = (function (){var G__48549 = (xscale * img_width);
var G__48550 = (yscale * img_height);
return (membrane.webgl.create_canvas.cljs$core$IFn$_invoke$arity$2 ? membrane.webgl.create_canvas.cljs$core$IFn$_invoke$arity$2(G__48549,G__48550) : membrane.webgl.create_canvas.call(null,G__48549,G__48550));
})();
var offscreen_context = offscreen_canvas.getContext("2d");
var _ = membrane.webgl.copy_canvas_properties_BANG_(membrane.webgl._STAR_ctx_STAR_,offscreen_context);
var ___$1 = (function (){var _STAR_ctx_STAR__orig_val__48554 = membrane.webgl._STAR_ctx_STAR_;
var _STAR_already_drawing_STAR__orig_val__48555 = membrane.webgl._STAR_already_drawing_STAR_;
var _STAR_ctx_STAR__temp_val__48556 = offscreen_context;
var _STAR_already_drawing_STAR__temp_val__48557 = true;
(membrane.webgl._STAR_ctx_STAR_ = _STAR_ctx_STAR__temp_val__48556);

(membrane.webgl._STAR_already_drawing_STAR_ = _STAR_already_drawing_STAR__temp_val__48557);

try{if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(xscale,(1))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(yscale,(1))))){
membrane.webgl._STAR_ctx_STAR_.scale(xscale,yscale);
} else {
}

membrane.webgl._STAR_ctx_STAR_.translate(padding,padding);

return membrane.webgl.draw(drawable);
}finally {(membrane.webgl._STAR_already_drawing_STAR_ = _STAR_already_drawing_STAR__orig_val__48555);

(membrane.webgl._STAR_ctx_STAR_ = _STAR_ctx_STAR__orig_val__48554);
}})();
var img = offscreen_canvas;
var img_info = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [img,img_width,img_height], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.webgl._STAR_draw_cache_STAR_,cljs.core.assoc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [drawable,content_scale,membrane.webgl._STAR_paint_style_STAR_], null),img_info);

return img_info;
}
})();
var img = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48537,(0),null);
var img_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48537,(1),null);
var img_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48537,(2),null);
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

return membrane.webgl._STAR_ctx_STAR_.drawImage(img,(- padding),(- padding),img_width,img_height);
}finally {ctx__48385__auto__.restore();
}}
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
 * @implements {membrane.webgl.IDraw}
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
membrane.webgl.Cached = (function (drawable,__meta,__extmap,__hash){
this.drawable = drawable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.webgl.Cached.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.webgl.Cached.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48566,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48571 = k48566;
var G__48571__$1 = (((G__48571 instanceof cljs.core.Keyword))?G__48571.fqn:null);
switch (G__48571__$1) {
case "drawable":
return self__.drawable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48566,else__4383__auto__);

}
}));

(membrane.webgl.Cached.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48572){
var vec__48573 = p__48572;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48573,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48573,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.webgl.Cached.prototype.membrane$ui$IChildren$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.webgl.Cached.prototype.membrane$ui$IChildren$_children$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.drawable], null);
}));

(membrane.webgl.Cached.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.webgl.Cached{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable],null))], null),self__.__extmap));
}));

(membrane.webgl.Cached.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48565){
var self__ = this;
var G__48565__$1 = this;
return (new cljs.core.RecordIter((0),G__48565__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drawable","drawable",1829255936)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.webgl.Cached.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.webgl.Cached.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return membrane.ui.bounds(self__.drawable);
}));

(membrane.webgl.Cached.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.webgl.Cached.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.webgl.Cached(self__.drawable,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.webgl.Cached.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(membrane.webgl.Cached.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (227137799 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.webgl.Cached.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48567,other48568){
var self__ = this;
var this48567__$1 = this;
return (((!((other48568 == null)))) && ((this48567__$1.constructor === other48568.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48567__$1.drawable,other48568.drawable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48567__$1.__extmap,other48568.__extmap)));
}));

(membrane.webgl.Cached.prototype.membrane$ui$IOrigin$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.webgl.Cached.prototype.membrane$ui$IOrigin$_origin$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return membrane.ui.origin(self__.drawable);
}));

(membrane.webgl.Cached.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawable","drawable",1829255936),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.webgl.Cached(self__.drawable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.webgl.Cached.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.webgl.Cached.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return membrane.webgl.cached_draw(self__.drawable);
}));

(membrane.webgl.Cached.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48565){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__48599 = cljs.core.keyword_identical_QMARK_;
var expr__48600 = k__4388__auto__;
if(cljs.core.truth_((pred__48599.cljs$core$IFn$_invoke$arity$2 ? pred__48599.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__48600) : pred__48599.call(null,new cljs.core.Keyword(null,"drawable","drawable",1829255936),expr__48600)))){
return (new membrane.webgl.Cached(G__48565,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.webgl.Cached(self__.drawable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48565),null));
}
}));

(membrane.webgl.Cached.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"drawable","drawable",1829255936),self__.drawable,null))], null),self__.__extmap));
}));

(membrane.webgl.Cached.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48565){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.webgl.Cached(self__.drawable,G__48565,self__.__extmap,self__.__hash));
}));

(membrane.webgl.Cached.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.webgl.Cached.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"drawable","drawable",-825179833,null)], null);
}));

(membrane.webgl.Cached.cljs$lang$type = true);

(membrane.webgl.Cached.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.webgl/Cached",null,(1),null));
}));

(membrane.webgl.Cached.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.webgl/Cached");
}));

/**
 * Positional factory function for membrane.webgl/Cached.
 */
membrane.webgl.__GT_Cached = (function membrane$webgl$__GT_Cached(drawable){
return (new membrane.webgl.Cached(drawable,null,null,null));
});

/**
 * Factory function for membrane.webgl/Cached, taking a map of keywords to field values.
 */
membrane.webgl.map__GT_Cached = (function membrane$webgl$map__GT_Cached(G__48570){
var extmap__4419__auto__ = (function (){var G__48615 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__48570,new cljs.core.Keyword(null,"drawable","drawable",1829255936));
if(cljs.core.record_QMARK_(G__48570)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48615);
} else {
return G__48615;
}
})();
return (new membrane.webgl.Cached(new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(G__48570),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

(membrane.ui.Cached.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Cached.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
return membrane.webgl.cached_draw(this$__$1.drawable);
}));
if((typeof membrane !== 'undefined') && (typeof membrane.webgl !== 'undefined') && (typeof membrane.webgl.freetype_callbacks !== 'undefined')){
} else {
membrane.webgl.freetype_callbacks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
membrane.webgl.on_freetype_loaded = (function membrane$webgl$on_freetype_loaded(callback){
if(cljs.core.seq(cljs.core.deref(membrane.webgl.font_cache))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(membrane.webgl.freetype_callbacks,cljs.core.conj,callback);
}
});
membrane.webgl.load_font = (function membrane$webgl$load_font(var_args){
var G__48618 = arguments.length;
switch (G__48618) {
case 3:
return membrane.webgl.load_font.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return membrane.webgl.load_font.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(membrane.webgl.load_font.cljs$core$IFn$_invoke$arity$3 = (function (font_name,stylesheet_url,ttf_url){
return membrane.webgl.load_font.cljs$core$IFn$_invoke$arity$4(font_name,stylesheet_url,ttf_url,null);
}));

(membrane.webgl.load_font.cljs$core$IFn$_invoke$arity$4 = (function (font_name,stylesheet_url,ttf_url,callback){
module$node_modules$opentype_DOT_js$dist$opentype.load(ttf_url,(function (err,font){
if(cljs.core.truth_(err)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: ",err], 0));

return console.log(err);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.webgl.font_cache,cljs.core.assoc,font_name,font);

cljs.core.reset_BANG_(membrane.component.component_cache,cljs.core.PersistentArrayMap.EMPTY);

var seq__48626_49278 = cljs.core.seq(cljs.core.deref(membrane.webgl.freetype_callbacks));
var chunk__48627_49279 = null;
var count__48628_49280 = (0);
var i__48629_49281 = (0);
while(true){
if((i__48629_49281 < count__48628_49280)){
var cb_49282 = chunk__48627_49279.cljs$core$IIndexed$_nth$arity$2(null,i__48629_49281);
(cb_49282.cljs$core$IFn$_invoke$arity$0 ? cb_49282.cljs$core$IFn$_invoke$arity$0() : cb_49282.call(null));


var G__49283 = seq__48626_49278;
var G__49284 = chunk__48627_49279;
var G__49285 = count__48628_49280;
var G__49286 = (i__48629_49281 + (1));
seq__48626_49278 = G__49283;
chunk__48627_49279 = G__49284;
count__48628_49280 = G__49285;
i__48629_49281 = G__49286;
continue;
} else {
var temp__5753__auto___49287 = cljs.core.seq(seq__48626_49278);
if(temp__5753__auto___49287){
var seq__48626_49288__$1 = temp__5753__auto___49287;
if(cljs.core.chunked_seq_QMARK_(seq__48626_49288__$1)){
var c__4556__auto___49290 = cljs.core.chunk_first(seq__48626_49288__$1);
var G__49291 = cljs.core.chunk_rest(seq__48626_49288__$1);
var G__49292 = c__4556__auto___49290;
var G__49293 = cljs.core.count(c__4556__auto___49290);
var G__49294 = (0);
seq__48626_49278 = G__49291;
chunk__48627_49279 = G__49292;
count__48628_49280 = G__49293;
i__48629_49281 = G__49294;
continue;
} else {
var cb_49295 = cljs.core.first(seq__48626_49288__$1);
(cb_49295.cljs$core$IFn$_invoke$arity$0 ? cb_49295.cljs$core$IFn$_invoke$arity$0() : cb_49295.call(null));


var G__49296 = cljs.core.next(seq__48626_49288__$1);
var G__49297 = null;
var G__49298 = (0);
var G__49299 = (0);
seq__48626_49278 = G__49296;
chunk__48627_49279 = G__49297;
count__48628_49280 = G__49298;
i__48629_49281 = G__49299;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(membrane.webgl.freetype_callbacks,cljs.core.PersistentVector.EMPTY);

if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}
}));

var link = document.createElement("link");
var G__48644_49300 = link;
G__48644_49300.setAttribute("rel","stylesheet");

G__48644_49300.setAttribute("href",stylesheet_url);


return document.body.appendChild(link);
}));

(membrane.webgl.load_font.cljs$lang$maxFixedArity = 4);

membrane.webgl.load_font.cljs$core$IFn$_invoke$arity$3("Ubuntu","https://fonts.googleapis.com/css?family=Ubuntu&display=swap","https://fonts.gstatic.com/s/ubuntu/v10/4iCs6KVjbNBYlgo6eA.ttf");
membrane.webgl.font_scale = (function membrane$webgl$font_scale(freetype_font,font_size){
return (((1) / (freetype_font["unitsPerEm"])) * font_size);
});
membrane.webgl.get_font = (function membrane$webgl$get_font(font){
var cache = cljs.core.deref(membrane.webgl.font_cache);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cache,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,"Ubuntu"));
});
membrane.webgl.font_units__GT_pixels = (function membrane$webgl$font_units__GT_pixels(font,font_units){
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(font,new cljs.core.Keyword(null,"size","size",1098693007),membrane.ui.default_font.size);
var fscale = membrane.webgl.font_scale(membrane.webgl.get_font(font),font_size);
return (font_units * fscale);
});
membrane.webgl.font_line_height = (function membrane$webgl$font_line_height(font){
var os2 = ((membrane.webgl.get_font(font)["tables"])["os2"]);
var sTypoAscender = membrane.webgl.font_units__GT_pixels(font,(os2["sTypoAscender"]));
var sTypoDescender = membrane.webgl.font_units__GT_pixels(font,(os2["sTypoDescender"]));
var sTypoLineGap = membrane.webgl.font_units__GT_pixels(font,(os2["sTypoLineGap"]));
var line_height = ((sTypoAscender - sTypoDescender) + sTypoLineGap);
return line_height;
});
membrane.webgl.line_bounds = (function membrane$webgl$line_bounds(font,text){
var maxy = cljs.core.volatile_BANG_((0));
var maxx = membrane.webgl.get_font(font).forEachGlyph(text,(0),(0),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return membrane.ui.default_font.size;
}
})(),(function (){var obj48649 = ({});
return obj48649;
})(),(function (glyph,gx,gy,gFontSize){
return maxy.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var x__4214__auto__ = maxy.cljs$core$IDeref$_deref$arity$1(null);
var y__4215__auto__ = (function (){var or__4126__auto__ = (glyph["yMax"]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx,membrane.webgl.font_units__GT_pixels(font,cljs.core.deref(maxy))], null);
});
membrane.webgl.text_bounds = (function membrane$webgl$text_bounds(font,text){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(text,/\n/,(-1));
var bounds = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48651_SHARP_){
return membrane.webgl.line_bounds(font,p1__48651_SHARP_);
}),lines);
var maxx = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bounds));
var maxy = ((membrane.webgl.font_line_height(font) - (1)) * cljs.core.count(lines));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx,maxy], null);
});
membrane.webgl.draw_rect = (function membrane$webgl$draw_rect(){
(membrane.webgl._STAR_ctx_STAR_.fillStyle = "green");

var G__48655 = membrane.webgl._STAR_paint_style_STAR_;
var G__48655__$1 = (((G__48655 instanceof cljs.core.Keyword))?G__48655.fqn:null);
switch (G__48655__$1) {
case "membrane.ui/style-fill":
return membrane.webgl._STAR_ctx_STAR_.fillRect((10),(10),(150),(100));

break;
case "membrane.ui/style-stroke":
return membrane.webgl._STAR_ctx_STAR_.strokeRect((10),(10),(150),(100));

break;
case "membrane.ui/style-stroke-and-fill":
membrane.webgl._STAR_ctx_STAR_.strokeRect((10),(10),(150),(100));

return membrane.webgl._STAR_ctx_STAR_.fillRect((10),(10),(150),(100));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48655__$1)].join('')));

}
});
membrane.webgl.index_for_position = (function membrane$webgl$index_for_position(font,text,px,py){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(text,/\n/,(-1));
var line_height = membrane.webgl.font_line_height(font);
var line_index = ((py / line_height) | (0));
if((line_index >= cljs.core.count(lines))){
return cljs.core.count(text);
} else {
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,line_index);
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(font,new cljs.core.Keyword(null,"size","size",1098693007),membrane.ui.default_font.size);
var options = (function (){var obj48659 = ({});
return obj48659;
})();
var freetype_font = membrane.webgl.get_font(font);
var glyphs = freetype_font.stringToGlyphs(line);
var position = (freetype_font["position"]);
var script = position.getDefaultScriptName();
var kerning_lookups = position.getKerningTables(script,null);
var fscale = membrane.webgl.font_scale(freetype_font,font_size);
var column_index = (function (){var idx = (0);
var x = (0);
var y = (0);
while(true){
if((px < x)){
return (idx - (1));
} else {
if((idx < glyphs.length)){
var glyph = (glyphs[idx]);
var x__$1 = (cljs.core.truth_((glyph["advanceWidth"]))?(x + (fscale * (glyph["advanceWidth"]))):x);
var x__$2 = (((idx < (glyphs.length - (1))))?(function (){var next_glyph = (glyphs[(idx + (1))]);
var kerning_value = (cljs.core.truth_(kerning_lookups)?position.getKerningValue((glyph["index"]),(next_glyph["index"])):freetype_font.getKerningValue(glyph,next_glyph));
return (x__$1 + (kerning_value * fscale));
})():x__$1);
var G__49309 = (idx + (1));
var G__49310 = x__$2;
var G__49311 = y;
idx = G__49309;
x = G__49310;
y = G__49311;
continue;
} else {
return idx;
}
}
break;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,column_index,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48656_SHARP_){
return (cljs.core.count(p1__48656_SHARP_) + (1));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(line_index,lines)));
}
});
(membrane.ui.index_for_position = membrane.webgl.index_for_position);
(membrane.ui.Label.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Label.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var this$__$1 = this;
var font = this$__$1.font;
return membrane.webgl.text_bounds(font,this$__$1.text);
}));

(membrane.ui.Label.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Label.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(this$__$1.text,/\n/,(-1));
var font = this$__$1.font;
var line_height = membrane.webgl.font_line_height(font);
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

if(cljs.core.truth_(font)){
(membrane.webgl._STAR_ctx_STAR_.font = [(cljs.core.truth_(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(font))," "].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return membrane.ui.default_font.size;
}
})()),"px ","'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Ubuntu";
}
})()),"'"].join(''));
} else {
}

var seq__48680 = cljs.core.seq(lines);
var chunk__48681 = null;
var count__48682 = (0);
var i__48683 = (0);
while(true){
if((i__48683 < count__48682)){
var line = chunk__48681.cljs$core$IIndexed$_nth$arity$2(null,i__48683);
membrane.webgl._STAR_ctx_STAR_.translate((0),(line_height - (1)));

var G__48690_49316 = membrane.webgl._STAR_paint_style_STAR_;
var G__48690_49317__$1 = (((G__48690_49316 instanceof cljs.core.Keyword))?G__48690_49316.fqn:null);
switch (G__48690_49317__$1) {
case "membrane.ui/style-fill":
membrane.webgl._STAR_ctx_STAR_.fillText(line,(0),(0));

break;
case "membrane.ui/style-stroke":
membrane.webgl._STAR_ctx_STAR_.strokeText(line,(0),(0));

break;
case "membrane.ui/style-stroke-and-fill":
membrane.webgl._STAR_ctx_STAR_.fillText(line,(0),(0));

membrane.webgl._STAR_ctx_STAR_.strokeText(line,(0),(0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48690_49317__$1)].join('')));

}


var G__49319 = seq__48680;
var G__49320 = chunk__48681;
var G__49321 = count__48682;
var G__49322 = (i__48683 + (1));
seq__48680 = G__49319;
chunk__48681 = G__49320;
count__48682 = G__49321;
i__48683 = G__49322;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48680);
if(temp__5753__auto__){
var seq__48680__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48680__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48680__$1);
var G__49323 = cljs.core.chunk_rest(seq__48680__$1);
var G__49324 = c__4556__auto__;
var G__49325 = cljs.core.count(c__4556__auto__);
var G__49326 = (0);
seq__48680 = G__49323;
chunk__48681 = G__49324;
count__48682 = G__49325;
i__48683 = G__49326;
continue;
} else {
var line = cljs.core.first(seq__48680__$1);
membrane.webgl._STAR_ctx_STAR_.translate((0),(line_height - (1)));

var G__48691_49327 = membrane.webgl._STAR_paint_style_STAR_;
var G__48691_49328__$1 = (((G__48691_49327 instanceof cljs.core.Keyword))?G__48691_49327.fqn:null);
switch (G__48691_49328__$1) {
case "membrane.ui/style-fill":
membrane.webgl._STAR_ctx_STAR_.fillText(line,(0),(0));

break;
case "membrane.ui/style-stroke":
membrane.webgl._STAR_ctx_STAR_.strokeText(line,(0),(0));

break;
case "membrane.ui/style-stroke-and-fill":
membrane.webgl._STAR_ctx_STAR_.fillText(line,(0),(0));

membrane.webgl._STAR_ctx_STAR_.strokeText(line,(0),(0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48691_49328__$1)].join('')));

}


var G__49330 = cljs.core.next(seq__48680__$1);
var G__49331 = null;
var G__49332 = (0);
var G__49333 = (0);
seq__48680 = G__49330;
chunk__48681 = G__49331;
count__48682 = G__49332;
i__48683 = G__49333;
continue;
}
} else {
return null;
}
}
break;
}
}finally {ctx__48385__auto__.restore();
}}));
if((typeof membrane !== 'undefined') && (typeof membrane.webgl !== 'undefined') && (typeof membrane.webgl.images !== 'undefined')){
} else {
membrane.webgl.images = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
membrane.webgl.image_size = (function membrane$webgl$image_size(image_path){
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.webgl.images),image_path));
});
(membrane.ui.image_size = membrane.webgl.image_size);
(membrane.ui.Image.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Image.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.size;
}));

(membrane.ui.Image.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Image.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(membrane.webgl.images),this$__$1.image_path);
if(cljs.core.truth_(temp__5753__auto__)){
var image_info = temp__5753__auto__;
var vec__48698 = this$__$1.size;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48698,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48698,(1),null);
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

var temp__5753__auto___49338__$1 = this$__$1.opacity;
if(cljs.core.truth_(temp__5753__auto___49338__$1)){
var opacity_49339 = temp__5753__auto___49338__$1;
(membrane.webgl._STAR_ctx_STAR_.globalAlpha = opacity_49339);
} else {
}

return membrane.webgl._STAR_ctx_STAR_.drawImage(new cljs.core.Keyword(null,"image-obj","image-obj",154014878).cljs$core$IFn$_invoke$arity$1(image_info),(0),(0),width,height);
}finally {ctx__48385__auto__.restore();
}} else {
return null;
}
}));
(membrane.ui.Translate.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Translate.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

membrane.webgl._STAR_ctx_STAR_.translate(this$__$1.x,this$__$1.y);

return membrane.webgl.draw(this$__$1.drawable);
}finally {ctx__48385__auto__.restore();
}}));
membrane.webgl.render_selection = (function membrane$webgl$render_selection(font,text,selection_start,selection_end,color){
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(font,new cljs.core.Keyword(null,"size","size",1098693007),membrane.ui.default_font.size);
var options = (function (){var obj48704 = ({});
return obj48704;
})();
var text__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"8"].join('');
var freetype_font = membrane.webgl.get_font(font);
var glyphs = freetype_font.stringToGlyphs(text__$1);
var position = (freetype_font["position"]);
var script = position.getDefaultScriptName();
var kerning_lookups = position.getKerningTables(script,null);
var fscale = membrane.webgl.font_scale(freetype_font,font_size);
var line_height = membrane.webgl.font_line_height(font);
var selection_height = membrane.webgl.font_units__GT_pixels(font,(((freetype_font["tables"])["hhea"])["ascender"]));
var x = (0);
var y = (0);
var selection_start__$1 = selection_start;
var selection_length = (selection_end - selection_start__$1);
var idx = (0);
while(true){
if((selection_length > (0))){
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(text__$1,idx);
var glyph = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(glyphs,idx);
var new_x = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n"))?(0):(cljs.core.truth_((glyph["advanceWidth"]))?(function (){var new_x = (x + (fscale * (glyph["advanceWidth"])));
if((idx < (glyphs.length - (1)))){
var next_glyph = (glyphs[(idx + (1))]);
var kerning_value = (cljs.core.truth_(kerning_lookups)?position.getKerningValue((glyph["index"]),(next_glyph["index"])):freetype_font.getKerningValue(glyph,next_glyph));
return (new_x + (kerning_value * fscale));
} else {
return x;
}
})():x
));
var new_y = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n"))?(y + (line_height - (1))):y);
if((selection_start__$1 <= (0))){
var selection_width_49351 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n"))?(5):(new_x - x));
membrane.webgl.draw(membrane.ui.translate(x,(y + (line_height - selection_height)),membrane.ui.filled_rectangle(color,selection_width_49351,selection_height)));

var G__49353 = new_x;
var G__49354 = new_y;
var G__49355 = (0);
var G__49356 = (selection_length - (1));
var G__49357 = (idx + (1));
x = G__49353;
y = G__49354;
selection_start__$1 = G__49355;
selection_length = G__49356;
idx = G__49357;
continue;
} else {
var G__49358 = new_x;
var G__49359 = new_y;
var G__49360 = (selection_start__$1 - (1));
var G__49361 = selection_length;
var G__49362 = (idx + (1));
x = G__49358;
y = G__49359;
selection_start__$1 = G__49360;
selection_length = G__49361;
idx = G__49362;
continue;
}
} else {
return null;
}
break;
}
});
(membrane.ui.TextSelection.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TextSelection.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var this$__$1 = this;
return membrane.webgl.text_bounds(this$__$1.font,this$__$1.text);
}));

(membrane.ui.TextSelection.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TextSelection.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var map__48728 = this$__$1;
var map__48728__$1 = (((((!((map__48728 == null))))?(((((map__48728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48728):map__48728);
var vec__48729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48728__$1,new cljs.core.Keyword(null,"selection","selection",975998651));
var selection_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48729,(0),null);
var selection_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48729,(1),null);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48728__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48728__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
return membrane.webgl.render_selection(this$__$1.font,text,selection_start,selection_end,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6980392156862745,0.8431372549019608,(1)], null));
}));
(membrane.ui.TextCursor.prototype.membrane$ui$IBounds$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TextCursor.prototype.membrane$ui$IBounds$_bounds$arity$1 = (function (this$){
var this$__$1 = this;
return membrane.webgl.text_bounds(this$__$1.font,this$__$1.text);
}));

(membrane.ui.TextCursor.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.TextCursor.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var cursor = (function (){var x__4217__auto__ = cljs.core.count(this$__$1.text);
var y__4218__auto__ = this$__$1.cursor;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return membrane.webgl.render_selection(this$__$1.font,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1.text),"8"].join(''),cursor,(cursor + (1)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.9,0.9,0.9], null));
}));
(membrane.ui.RoundedRectangle.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.RoundedRectangle.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var map__48743 = this$__$1;
var map__48743__$1 = (((((!((map__48743 == null))))?(((((map__48743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48743):map__48743);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var border_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48743__$1,new cljs.core.Keyword(null,"border-radius","border-radius",419594011));
var x = (0);
var y = (0);
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

membrane.webgl._STAR_ctx_STAR_.beginPath();

var G__48745_49366 = membrane.webgl._STAR_ctx_STAR_;
G__48745_49366.moveTo((x + border_radius),y);

G__48745_49366.lineTo(((x + width) + (- border_radius)),y);

G__48745_49366.quadraticCurveTo((x + width),y,(x + width),(y + border_radius));

G__48745_49366.lineTo((x + width),((y + height) + (- border_radius)));

G__48745_49366.quadraticCurveTo((x + width),(y + height),((x + width) + (- border_radius)),(y + height));

G__48745_49366.lineTo((x + border_radius),(y + height));

G__48745_49366.quadraticCurveTo(x,(y + height),x,((y + height) + (- border_radius)));

G__48745_49366.lineTo(x,(y + border_radius));

G__48745_49366.quadraticCurveTo(x,y,(x + border_radius),y);


membrane.webgl._STAR_ctx_STAR_.closePath();

var G__48753 = membrane.webgl._STAR_paint_style_STAR_;
var G__48753__$1 = (((G__48753 instanceof cljs.core.Keyword))?G__48753.fqn:null);
switch (G__48753__$1) {
case "membrane.ui/style-fill":
return membrane.webgl._STAR_ctx_STAR_.fill();

break;
case "membrane.ui/style-stroke":
return membrane.webgl._STAR_ctx_STAR_.stroke();

break;
case "membrane.ui/style-stroke-and-fill":
var G__48754 = membrane.webgl._STAR_ctx_STAR_;
G__48754.stroke();

G__48754.fill();

return G__48754;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48753__$1)].join('')));

}
}finally {ctx__48385__auto__.restore();
}}));
(membrane.ui.Path.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Path.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

membrane.webgl._STAR_ctx_STAR_.beginPath();

var vec__48760_49368 = cljs.core.first(this$__$1.points);
var x_49369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760_49368,(0),null);
var y_49370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760_49368,(1),null);
membrane.webgl._STAR_ctx_STAR_.moveTo(x_49369,y_49370);

var seq__48767_49371 = cljs.core.seq(cljs.core.rest(this$__$1.points));
var chunk__48768_49372 = null;
var count__48769_49373 = (0);
var i__48770_49374 = (0);
while(true){
if((i__48770_49374 < count__48769_49373)){
var vec__48788_49375 = chunk__48768_49372.cljs$core$IIndexed$_nth$arity$2(null,i__48770_49374);
var x_49376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788_49375,(0),null);
var y_49377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48788_49375,(1),null);
membrane.webgl._STAR_ctx_STAR_.lineTo(x_49376,y_49377);


var G__49378 = seq__48767_49371;
var G__49379 = chunk__48768_49372;
var G__49380 = count__48769_49373;
var G__49381 = (i__48770_49374 + (1));
seq__48767_49371 = G__49378;
chunk__48768_49372 = G__49379;
count__48769_49373 = G__49380;
i__48770_49374 = G__49381;
continue;
} else {
var temp__5753__auto___49382 = cljs.core.seq(seq__48767_49371);
if(temp__5753__auto___49382){
var seq__48767_49383__$1 = temp__5753__auto___49382;
if(cljs.core.chunked_seq_QMARK_(seq__48767_49383__$1)){
var c__4556__auto___49384 = cljs.core.chunk_first(seq__48767_49383__$1);
var G__49385 = cljs.core.chunk_rest(seq__48767_49383__$1);
var G__49386 = c__4556__auto___49384;
var G__49387 = cljs.core.count(c__4556__auto___49384);
var G__49388 = (0);
seq__48767_49371 = G__49385;
chunk__48768_49372 = G__49386;
count__48769_49373 = G__49387;
i__48770_49374 = G__49388;
continue;
} else {
var vec__48807_49389 = cljs.core.first(seq__48767_49383__$1);
var x_49390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48807_49389,(0),null);
var y_49391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48807_49389,(1),null);
membrane.webgl._STAR_ctx_STAR_.lineTo(x_49390,y_49391);


var G__49392 = cljs.core.next(seq__48767_49383__$1);
var G__49393 = null;
var G__49394 = (0);
var G__49395 = (0);
seq__48767_49371 = G__49392;
chunk__48768_49372 = G__49393;
count__48769_49373 = G__49394;
i__48770_49374 = G__49395;
continue;
}
} else {
}
}
break;
}

var G__48811 = membrane.webgl._STAR_paint_style_STAR_;
var G__48811__$1 = (((G__48811 instanceof cljs.core.Keyword))?G__48811.fqn:null);
switch (G__48811__$1) {
case "membrane.ui/style-fill":
return membrane.webgl._STAR_ctx_STAR_.fill();

break;
case "membrane.ui/style-stroke":
return membrane.webgl._STAR_ctx_STAR_.stroke();

break;
case "membrane.ui/style-stroke-and-fill":
var G__48812 = membrane.webgl._STAR_ctx_STAR_;
G__48812.stroke();

G__48812.fill();

return G__48812;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48811__$1)].join('')));

}
}finally {ctx__48385__auto__.restore();
}}));
membrane.webgl.color_text = (function membrane$webgl$color_text(p__48814){
var vec__48816 = p__48814;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48816,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48816,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48816,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48816,(3),null);
if(cljs.core.truth_(a)){
return ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((r * 255.0)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((g * 255.0)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((b * 255.0)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),")"].join('');
} else {
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((r * 255.0)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((g * 255.0)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((b * 255.0)),")"].join('');
}
});
(membrane.ui.WithColor.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithColor.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var color_style = membrane.webgl.color_text(this$__$1.color);
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

(membrane.webgl._STAR_ctx_STAR_.fillStyle = color_style);

(membrane.webgl._STAR_ctx_STAR_.strokeStyle = color_style);

var seq__48825 = cljs.core.seq(this$__$1.drawables);
var chunk__48826 = null;
var count__48827 = (0);
var i__48828 = (0);
while(true){
if((i__48828 < count__48827)){
var drawable = chunk__48826.cljs$core$IIndexed$_nth$arity$2(null,i__48828);
membrane.webgl.draw(drawable);


var G__49399 = seq__48825;
var G__49400 = chunk__48826;
var G__49401 = count__48827;
var G__49402 = (i__48828 + (1));
seq__48825 = G__49399;
chunk__48826 = G__49400;
count__48827 = G__49401;
i__48828 = G__49402;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48825);
if(temp__5753__auto__){
var seq__48825__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48825__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48825__$1);
var G__49403 = cljs.core.chunk_rest(seq__48825__$1);
var G__49404 = c__4556__auto__;
var G__49405 = cljs.core.count(c__4556__auto__);
var G__49406 = (0);
seq__48825 = G__49403;
chunk__48826 = G__49404;
count__48827 = G__49405;
i__48828 = G__49406;
continue;
} else {
var drawable = cljs.core.first(seq__48825__$1);
membrane.webgl.draw(drawable);


var G__49407 = cljs.core.next(seq__48825__$1);
var G__49408 = null;
var G__49409 = (0);
var G__49410 = (0);
seq__48825 = G__49407;
chunk__48826 = G__49408;
count__48827 = G__49409;
i__48828 = G__49410;
continue;
}
} else {
return null;
}
}
break;
}
}finally {ctx__48385__auto__.restore();
}}));
(membrane.ui.WithStyle.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStyle.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var style = this$__$1.style;
var _STAR_paint_style_STAR__orig_val__48871 = membrane.webgl._STAR_paint_style_STAR_;
var _STAR_paint_style_STAR__temp_val__48872 = style;
(membrane.webgl._STAR_paint_style_STAR_ = _STAR_paint_style_STAR__temp_val__48872);

try{var seq__48873 = cljs.core.seq(this$__$1.drawables);
var chunk__48874 = null;
var count__48875 = (0);
var i__48876 = (0);
while(true){
if((i__48876 < count__48875)){
var drawable = chunk__48874.cljs$core$IIndexed$_nth$arity$2(null,i__48876);
membrane.webgl.draw(drawable);


var G__49411 = seq__48873;
var G__49412 = chunk__48874;
var G__49413 = count__48875;
var G__49414 = (i__48876 + (1));
seq__48873 = G__49411;
chunk__48874 = G__49412;
count__48875 = G__49413;
i__48876 = G__49414;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48873);
if(temp__5753__auto__){
var seq__48873__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48873__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48873__$1);
var G__49415 = cljs.core.chunk_rest(seq__48873__$1);
var G__49416 = c__4556__auto__;
var G__49417 = cljs.core.count(c__4556__auto__);
var G__49418 = (0);
seq__48873 = G__49415;
chunk__48874 = G__49416;
count__48875 = G__49417;
i__48876 = G__49418;
continue;
} else {
var drawable = cljs.core.first(seq__48873__$1);
membrane.webgl.draw(drawable);


var G__49420 = cljs.core.next(seq__48873__$1);
var G__49421 = null;
var G__49422 = (0);
var G__49423 = (0);
seq__48873 = G__49420;
chunk__48874 = G__49421;
count__48875 = G__49422;
i__48876 = G__49423;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(membrane.webgl._STAR_paint_style_STAR_ = _STAR_paint_style_STAR__orig_val__48871);
}}));
(membrane.ui.WithStrokeWidth.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.WithStrokeWidth.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var stroke_width = this$__$1.stroke_width;
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

(membrane.webgl._STAR_ctx_STAR_.lineWidth = stroke_width);

var seq__48907 = cljs.core.seq(this$__$1.drawables);
var chunk__48908 = null;
var count__48909 = (0);
var i__48910 = (0);
while(true){
if((i__48910 < count__48909)){
var drawable = chunk__48908.cljs$core$IIndexed$_nth$arity$2(null,i__48910);
membrane.webgl.draw(drawable);


var G__49426 = seq__48907;
var G__49427 = chunk__48908;
var G__49428 = count__48909;
var G__49429 = (i__48910 + (1));
seq__48907 = G__49426;
chunk__48908 = G__49427;
count__48909 = G__49428;
i__48910 = G__49429;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48907);
if(temp__5753__auto__){
var seq__48907__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48907__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48907__$1);
var G__49430 = cljs.core.chunk_rest(seq__48907__$1);
var G__49431 = c__4556__auto__;
var G__49432 = cljs.core.count(c__4556__auto__);
var G__49433 = (0);
seq__48907 = G__49430;
chunk__48908 = G__49431;
count__48909 = G__49432;
i__48910 = G__49433;
continue;
} else {
var drawable = cljs.core.first(seq__48907__$1);
membrane.webgl.draw(drawable);


var G__49434 = cljs.core.next(seq__48907__$1);
var G__49435 = null;
var G__49436 = (0);
var G__49437 = (0);
seq__48907 = G__49434;
chunk__48908 = G__49435;
count__48909 = G__49436;
i__48910 = G__49437;
continue;
}
} else {
return null;
}
}
break;
}
}finally {ctx__48385__auto__.restore();
}}));
(membrane.ui.Scale.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Scale.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

var vec__48927_49438 = this$__$1.scalars;
var sx_49439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48927_49438,(0),null);
var sy_49440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48927_49438,(1),null);
membrane.webgl._STAR_ctx_STAR_.scale(sx_49439,sy_49440);

var seq__48930 = cljs.core.seq(this$__$1.drawables);
var chunk__48931 = null;
var count__48932 = (0);
var i__48933 = (0);
while(true){
if((i__48933 < count__48932)){
var drawable = chunk__48931.cljs$core$IIndexed$_nth$arity$2(null,i__48933);
membrane.webgl.draw(drawable);


var G__49441 = seq__48930;
var G__49442 = chunk__48931;
var G__49443 = count__48932;
var G__49444 = (i__48933 + (1));
seq__48930 = G__49441;
chunk__48931 = G__49442;
count__48932 = G__49443;
i__48933 = G__49444;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48930);
if(temp__5753__auto__){
var seq__48930__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48930__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48930__$1);
var G__49445 = cljs.core.chunk_rest(seq__48930__$1);
var G__49446 = c__4556__auto__;
var G__49447 = cljs.core.count(c__4556__auto__);
var G__49448 = (0);
seq__48930 = G__49445;
chunk__48931 = G__49446;
count__48932 = G__49447;
i__48933 = G__49448;
continue;
} else {
var drawable = cljs.core.first(seq__48930__$1);
membrane.webgl.draw(drawable);


var G__49449 = cljs.core.next(seq__48930__$1);
var G__49450 = null;
var G__49451 = (0);
var G__49452 = (0);
seq__48930 = G__49449;
chunk__48931 = G__49450;
count__48932 = G__49451;
i__48933 = G__49452;
continue;
}
} else {
return null;
}
}
break;
}
}finally {ctx__48385__auto__.restore();
}}));
(membrane.ui.Arc.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.Arc.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
return membrane.webgl.draw_rect();
}));
(membrane.ui.ScissorView.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScissorView.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

var vec__48943 = this$__$1.offset;
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48943,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48943,(1),null);
var vec__48946 = this$__$1.bounds;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48946,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48946,(1),null);
membrane.webgl._STAR_ctx_STAR_.clip((function (){var G__48953 = (new Path2D());
G__48953.rect(ox,oy,w,h);

return G__48953;
})());

return membrane.webgl.draw(this$__$1.drawable);
}finally {ctx__48385__auto__.restore();
}}));
membrane.webgl.scrollview_draw = (function membrane$webgl$scrollview_draw(scrollview){
return membrane.webgl.draw(membrane.ui.__GT_ScissorView(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(scrollview),(function (){var vec__48955 = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(scrollview);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48955,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48955,(1),null);
return membrane.ui.translate(mx,my,new cljs.core.Keyword(null,"drawable","drawable",1829255936).cljs$core$IFn$_invoke$arity$1(scrollview));
})()));
});
(membrane.ui.ScrollView.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.ScrollView.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
return membrane.webgl.scrollview_draw(this$__$1);
}));
(membrane.ui.OnScroll.prototype.membrane$webgl$IDraw$ = cljs.core.PROTOCOL_SENTINEL);

(membrane.ui.OnScroll.prototype.membrane$webgl$IDraw$draw$arity$1 = (function (this$){
var this$__$1 = this;
var seq__48975 = cljs.core.seq(this$__$1.drawables);
var chunk__48976 = null;
var count__48977 = (0);
var i__48978 = (0);
while(true){
if((i__48978 < count__48977)){
var drawable = chunk__48976.cljs$core$IIndexed$_nth$arity$2(null,i__48978);
membrane.webgl.draw(drawable);


var G__49473 = seq__48975;
var G__49474 = chunk__48976;
var G__49475 = count__48977;
var G__49476 = (i__48978 + (1));
seq__48975 = G__49473;
chunk__48976 = G__49474;
count__48977 = G__49475;
i__48978 = G__49476;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48975);
if(temp__5753__auto__){
var seq__48975__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48975__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48975__$1);
var G__49477 = cljs.core.chunk_rest(seq__48975__$1);
var G__49478 = c__4556__auto__;
var G__49479 = cljs.core.count(c__4556__auto__);
var G__49480 = (0);
seq__48975 = G__49477;
chunk__48976 = G__49478;
count__48977 = G__49479;
i__48978 = G__49480;
continue;
} else {
var drawable = cljs.core.first(seq__48975__$1);
membrane.webgl.draw(drawable);


var G__49481 = cljs.core.next(seq__48975__$1);
var G__49482 = null;
var G__49483 = (0);
var G__49484 = (0);
seq__48975 = G__49481;
chunk__48976 = G__49482;
count__48977 = G__49483;
i__48978 = G__49484;
continue;
}
} else {
return null;
}
}
break;
}
}));
membrane.webgl.create_canvas = (function membrane$webgl$create_canvas(width,height){
var G__48983 = document.createElement("canvas");
G__48983.setAttribute("width",width);

G__48983.setAttribute("height",height);

G__48983.setAttribute("tabindex","0");

return G__48983;
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
membrane.webgl.WebglCanvas = (function (ui,make_ui,last_touch,touch_check_QMARK_,canvas_elem,draw_cache,ctx,__meta,__extmap,__hash){
this.ui = ui;
this.make_ui = make_ui;
this.last_touch = last_touch;
this.touch_check_QMARK_ = touch_check_QMARK_;
this.canvas_elem = canvas_elem;
this.draw_cache = draw_cache;
this.ctx = ctx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(membrane.webgl.WebglCanvas.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k48985,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__48992 = k48985;
var G__48992__$1 = (((G__48992 instanceof cljs.core.Keyword))?G__48992.fqn:null);
switch (G__48992__$1) {
case "ui":
return self__.ui;

break;
case "make-ui":
return self__.make_ui;

break;
case "last-touch":
return self__.last_touch;

break;
case "touch-check?":
return self__.touch_check_QMARK_;

break;
case "canvas-elem":
return self__.canvas_elem;

break;
case "draw-cache":
return self__.draw_cache;

break;
case "ctx":
return self__.ctx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48985,else__4383__auto__);

}
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__48993){
var vec__48994 = p__48993;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48994,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48994,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#membrane.webgl.WebglCanvas{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ui","ui",-469653645),self__.ui],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"make-ui","make-ui",-95898748),self__.make_ui],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-touch","last-touch",366626567),self__.last_touch],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"touch-check?","touch-check?",2106774330),self__.touch_check_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686),self__.canvas_elem],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"draw-cache","draw-cache",-1691433215),self__.draw_cache],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ctx","ctx",-493610118),self__.ctx],null))], null),self__.__extmap));
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48984){
var self__ = this;
var G__48984__$1 = this;
return (new cljs.core.RecordIter((0),G__48984__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"make-ui","make-ui",-95898748),new cljs.core.Keyword(null,"last-touch","last-touch",366626567),new cljs.core.Keyword(null,"touch-check?","touch-check?",2106774330),new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686),new cljs.core.Keyword(null,"draw-cache","draw-cache",-1691433215),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new membrane.webgl.WebglCanvas(self__.ui,self__.make_ui,self__.last_touch,self__.touch_check_QMARK_,self__.canvas_elem,self__.draw_cache,self__.ctx,self__.__meta,self__.__extmap,self__.__hash));
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1836467201 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48986,other48987){
var self__ = this;
var this48986__$1 = this;
return (((!((other48987 == null)))) && ((this48986__$1.constructor === other48987.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48986__$1.ui,other48987.ui)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48986__$1.make_ui,other48987.make_ui)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48986__$1.last_touch,other48987.last_touch)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48986__$1.touch_check_QMARK_,other48987.touch_check_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48986__$1.canvas_elem,other48987.canvas_elem)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48986__$1.draw_cache,other48987.draw_cache)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48986__$1.ctx,other48987.ctx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48986__$1.__extmap,other48987.__extmap)));
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"draw-cache","draw-cache",-1691433215),null,new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686),null,new cljs.core.Keyword(null,"make-ui","make-ui",-95898748),null,new cljs.core.Keyword(null,"last-touch","last-touch",366626567),null,new cljs.core.Keyword(null,"ui","ui",-469653645),null,new cljs.core.Keyword(null,"touch-check?","touch-check?",2106774330),null,new cljs.core.Keyword(null,"ctx","ctx",-493610118),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new membrane.webgl.WebglCanvas(self__.ui,self__.make_ui,self__.last_touch,self__.touch_check_QMARK_,self__.canvas_elem,self__.draw_cache,self__.ctx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__48984){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49013 = cljs.core.keyword_identical_QMARK_;
var expr__49014 = k__4388__auto__;
if(cljs.core.truth_((pred__49013.cljs$core$IFn$_invoke$arity$2 ? pred__49013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ui","ui",-469653645),expr__49014) : pred__49013.call(null,new cljs.core.Keyword(null,"ui","ui",-469653645),expr__49014)))){
return (new membrane.webgl.WebglCanvas(G__48984,self__.make_ui,self__.last_touch,self__.touch_check_QMARK_,self__.canvas_elem,self__.draw_cache,self__.ctx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49013.cljs$core$IFn$_invoke$arity$2 ? pred__49013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"make-ui","make-ui",-95898748),expr__49014) : pred__49013.call(null,new cljs.core.Keyword(null,"make-ui","make-ui",-95898748),expr__49014)))){
return (new membrane.webgl.WebglCanvas(self__.ui,G__48984,self__.last_touch,self__.touch_check_QMARK_,self__.canvas_elem,self__.draw_cache,self__.ctx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49013.cljs$core$IFn$_invoke$arity$2 ? pred__49013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"last-touch","last-touch",366626567),expr__49014) : pred__49013.call(null,new cljs.core.Keyword(null,"last-touch","last-touch",366626567),expr__49014)))){
return (new membrane.webgl.WebglCanvas(self__.ui,self__.make_ui,G__48984,self__.touch_check_QMARK_,self__.canvas_elem,self__.draw_cache,self__.ctx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49013.cljs$core$IFn$_invoke$arity$2 ? pred__49013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"touch-check?","touch-check?",2106774330),expr__49014) : pred__49013.call(null,new cljs.core.Keyword(null,"touch-check?","touch-check?",2106774330),expr__49014)))){
return (new membrane.webgl.WebglCanvas(self__.ui,self__.make_ui,self__.last_touch,G__48984,self__.canvas_elem,self__.draw_cache,self__.ctx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49013.cljs$core$IFn$_invoke$arity$2 ? pred__49013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686),expr__49014) : pred__49013.call(null,new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686),expr__49014)))){
return (new membrane.webgl.WebglCanvas(self__.ui,self__.make_ui,self__.last_touch,self__.touch_check_QMARK_,G__48984,self__.draw_cache,self__.ctx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49013.cljs$core$IFn$_invoke$arity$2 ? pred__49013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw-cache","draw-cache",-1691433215),expr__49014) : pred__49013.call(null,new cljs.core.Keyword(null,"draw-cache","draw-cache",-1691433215),expr__49014)))){
return (new membrane.webgl.WebglCanvas(self__.ui,self__.make_ui,self__.last_touch,self__.touch_check_QMARK_,self__.canvas_elem,G__48984,self__.ctx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49013.cljs$core$IFn$_invoke$arity$2 ? pred__49013.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ctx","ctx",-493610118),expr__49014) : pred__49013.call(null,new cljs.core.Keyword(null,"ctx","ctx",-493610118),expr__49014)))){
return (new membrane.webgl.WebglCanvas(self__.ui,self__.make_ui,self__.last_touch,self__.touch_check_QMARK_,self__.canvas_elem,self__.draw_cache,G__48984,self__.__meta,self__.__extmap,null));
} else {
return (new membrane.webgl.WebglCanvas(self__.ui,self__.make_ui,self__.last_touch,self__.touch_check_QMARK_,self__.canvas_elem,self__.draw_cache,self__.ctx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__48984),null));
}
}
}
}
}
}
}
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ui","ui",-469653645),self__.ui,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"make-ui","make-ui",-95898748),self__.make_ui,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-touch","last-touch",366626567),self__.last_touch,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"touch-check?","touch-check?",2106774330),self__.touch_check_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686),self__.canvas_elem,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"draw-cache","draw-cache",-1691433215),self__.draw_cache,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ctx","ctx",-493610118),self__.ctx,null))], null),self__.__extmap));
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__48984){
var self__ = this;
var this__4379__auto____$1 = this;
return (new membrane.webgl.WebglCanvas(self__.ui,self__.make_ui,self__.last_touch,self__.touch_check_QMARK_,self__.canvas_elem,self__.draw_cache,self__.ctx,G__48984,self__.__extmap,self__.__hash));
}));

(membrane.webgl.WebglCanvas.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(membrane.webgl.WebglCanvas.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ui","ui",1170877882,null),new cljs.core.Symbol(null,"make-ui","make-ui",1544632779,null),new cljs.core.Symbol(null,"last-touch","last-touch",2007158094,null),new cljs.core.Symbol(null,"touch-check?","touch-check?",-547661439,null),new cljs.core.Symbol(null,"canvas-elem","canvas-elem",125908841,null),new cljs.core.Symbol(null,"draw-cache","draw-cache",-50901688,null),new cljs.core.Symbol(null,"ctx","ctx",1146921409,null)], null);
}));

(membrane.webgl.WebglCanvas.cljs$lang$type = true);

(membrane.webgl.WebglCanvas.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"membrane.webgl/WebglCanvas",null,(1),null));
}));

(membrane.webgl.WebglCanvas.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"membrane.webgl/WebglCanvas");
}));

/**
 * Positional factory function for membrane.webgl/WebglCanvas.
 */
membrane.webgl.__GT_WebglCanvas = (function membrane$webgl$__GT_WebglCanvas(ui,make_ui,last_touch,touch_check_QMARK_,canvas_elem,draw_cache,ctx){
return (new membrane.webgl.WebglCanvas(ui,make_ui,last_touch,touch_check_QMARK_,canvas_elem,draw_cache,ctx,null,null,null));
});

/**
 * Factory function for membrane.webgl/WebglCanvas, taking a map of keywords to field values.
 */
membrane.webgl.map__GT_WebglCanvas = (function membrane$webgl$map__GT_WebglCanvas(G__48988){
var extmap__4419__auto__ = (function (){var G__49032 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48988,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"make-ui","make-ui",-95898748),new cljs.core.Keyword(null,"last-touch","last-touch",366626567),new cljs.core.Keyword(null,"touch-check?","touch-check?",2106774330),new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686),new cljs.core.Keyword(null,"draw-cache","draw-cache",-1691433215),new cljs.core.Keyword(null,"ctx","ctx",-493610118)], 0));
if(cljs.core.record_QMARK_(G__48988)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49032);
} else {
return G__49032;
}
})();
return (new membrane.webgl.WebglCanvas(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(G__48988),new cljs.core.Keyword(null,"make-ui","make-ui",-95898748).cljs$core$IFn$_invoke$arity$1(G__48988),new cljs.core.Keyword(null,"last-touch","last-touch",366626567).cljs$core$IFn$_invoke$arity$1(G__48988),new cljs.core.Keyword(null,"touch-check?","touch-check?",2106774330).cljs$core$IFn$_invoke$arity$1(G__48988),new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686).cljs$core$IFn$_invoke$arity$1(G__48988),new cljs.core.Keyword(null,"draw-cache","draw-cache",-1691433215).cljs$core$IFn$_invoke$arity$1(G__48988),new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(G__48988),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

membrane.webgl.update_scale = (function membrane$webgl$update_scale(canvas){
var content_scale = window.devicePixelRatio;
if(cljs.core.truth_((function (){var and__4115__auto__ = content_scale;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),content_scale);
} else {
return and__4115__auto__;
}
})())){
var cwidth = canvas.clientWidth;
var cheight = canvas.clientHeight;
var canvas_style = canvas.style;
var ctx = canvas.getContext("2d");
(canvas_style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cwidth),"px"].join(''));

(canvas_style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cheight),"px"].join(''));

(canvas.width = (cwidth * content_scale));

return (canvas.height = (cheight * content_scale));
} else {
return null;
}
});
membrane.webgl.webgl_canvas = (function membrane$webgl$webgl_canvas(canvas_elem,make_ui){
var ctx = canvas_elem.getContext("2d");
var canvas = (new membrane.webgl.WebglCanvas(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),make_ui,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),canvas_elem,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),ctx,null,null,null));
membrane.webgl.update_scale(canvas_elem);

var seq__49037_49518 = cljs.core.seq(cljs.core.deref(membrane.webgl.event_handlers));
var chunk__49038_49519 = null;
var count__49039_49520 = (0);
var i__49040_49521 = (0);
while(true){
if((i__49040_49521 < count__49039_49520)){
var vec__49078_49522 = chunk__49038_49519.cljs$core$IIndexed$_nth$arity$2(null,i__49040_49521);
var event_49523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49078_49522,(0),null);
var handler_49524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49078_49522,(1),null);
canvas_elem.addEventListener(event_49523,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handler_49524,canvas));


var G__49525 = seq__49037_49518;
var G__49526 = chunk__49038_49519;
var G__49527 = count__49039_49520;
var G__49528 = (i__49040_49521 + (1));
seq__49037_49518 = G__49525;
chunk__49038_49519 = G__49526;
count__49039_49520 = G__49527;
i__49040_49521 = G__49528;
continue;
} else {
var temp__5753__auto___49529 = cljs.core.seq(seq__49037_49518);
if(temp__5753__auto___49529){
var seq__49037_49530__$1 = temp__5753__auto___49529;
if(cljs.core.chunked_seq_QMARK_(seq__49037_49530__$1)){
var c__4556__auto___49531 = cljs.core.chunk_first(seq__49037_49530__$1);
var G__49532 = cljs.core.chunk_rest(seq__49037_49530__$1);
var G__49533 = c__4556__auto___49531;
var G__49534 = cljs.core.count(c__4556__auto___49531);
var G__49535 = (0);
seq__49037_49518 = G__49532;
chunk__49038_49519 = G__49533;
count__49039_49520 = G__49534;
i__49040_49521 = G__49535;
continue;
} else {
var vec__49081_49536 = cljs.core.first(seq__49037_49530__$1);
var event_49537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49081_49536,(0),null);
var handler_49538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49081_49536,(1),null);
canvas_elem.addEventListener(event_49537,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handler_49538,canvas));


var G__49539 = cljs.core.next(seq__49037_49530__$1);
var G__49540 = null;
var G__49541 = (0);
var G__49542 = (0);
seq__49037_49518 = G__49539;
chunk__49038_49519 = G__49540;
count__49039_49520 = G__49541;
i__49040_49521 = G__49542;
continue;
}
} else {
}
}
break;
}

return canvas;
});
var content_scale_49543 = window.devicePixelRatio;
membrane.webgl.redraw = (function membrane$webgl$redraw(canvas){
var _STAR_ctx_STAR__orig_val__49087 = membrane.webgl._STAR_ctx_STAR_;
var _STAR_draw_cache_STAR__orig_val__49088 = membrane.webgl._STAR_draw_cache_STAR_;
var _STAR_ctx_STAR__temp_val__49089 = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(canvas);
var _STAR_draw_cache_STAR__temp_val__49090 = new cljs.core.Keyword(null,"draw-cache","draw-cache",-1691433215).cljs$core$IFn$_invoke$arity$1(canvas);
(membrane.webgl._STAR_ctx_STAR_ = _STAR_ctx_STAR__temp_val__49089);

(membrane.webgl._STAR_draw_cache_STAR_ = _STAR_draw_cache_STAR__temp_val__49090);

try{var ui = new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(canvas);
var canvas_elem = new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686).cljs$core$IFn$_invoke$arity$1(canvas);
membrane.webgl._STAR_ctx_STAR_.clearRect((0),(0),canvas_elem.width,canvas_elem.height);

if(cljs.core.truth_((function (){var and__4115__auto__ = content_scale_49543;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),content_scale_49543)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(canvas_elem.width,(content_scale_49543 * canvas_elem.clientWidth))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(canvas_elem.height,(content_scale_49543 * canvas_elem.clientHeight))))));
} else {
return and__4115__auto__;
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["resizing canvas"], 0));

membrane.webgl.update_scale(canvas_elem);
} else {
}

cljs.core.reset_BANG_(ui,(function (){var fexpr__49092 = new cljs.core.Keyword(null,"make-ui","make-ui",-95898748).cljs$core$IFn$_invoke$arity$1(canvas);
return (fexpr__49092.cljs$core$IFn$_invoke$arity$0 ? fexpr__49092.cljs$core$IFn$_invoke$arity$0() : fexpr__49092.call(null));
})());

var ctx__48385__auto__ = membrane.webgl._STAR_ctx_STAR_;
try{ctx__48385__auto__.save();

var content_scale_49544__$1 = window.devicePixelRatio;
if(cljs.core.truth_((function (){var and__4115__auto__ = content_scale_49544__$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),content_scale_49544__$1);
} else {
return and__4115__auto__;
}
})())){
membrane.webgl._STAR_ctx_STAR_.scale(content_scale_49544__$1,content_scale_49544__$1);
} else {
}

return membrane.webgl.draw(cljs.core.deref(ui));
}finally {ctx__48385__auto__.restore();
}}finally {(membrane.webgl._STAR_draw_cache_STAR_ = _STAR_draw_cache_STAR__orig_val__49088);

(membrane.webgl._STAR_ctx_STAR_ = _STAR_ctx_STAR__orig_val__49087);
}});
membrane.webgl.run = (function membrane$webgl$run(make_ui,options){
var canvas = membrane.webgl.webgl_canvas(new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(options),make_ui);
membrane.webgl.on_freetype_loaded((function (){
return document.fonts.load([(function (){var temp__5753__auto__ = membrane.ui.default_font.weight;
if(cljs.core.truth_(temp__5753__auto__)){
var weight = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(weight)," "].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(membrane.ui.default_font.size),"px"," ","Ubuntu"].join('')).then((function (){
var ctx_49545 = canvas.ctx;
(ctx_49545.font = [(function (){var temp__5753__auto__ = membrane.ui.default_font.weight;
if(cljs.core.truth_(temp__5753__auto__)){
var weight = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(weight)," "].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(membrane.ui.default_font.size),"px"," ","Ubuntu"].join(''));

return membrane.webgl.redraw(canvas);
}));
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("membrane.webgl","canvas","membrane.webgl/canvas",-64663223),canvas,new cljs.core.Keyword("membrane.webgl","repaint","membrane.webgl/repaint",1752691602),(function (){
return membrane.webgl.redraw(canvas);
})], null);
});
membrane.webgl.get_client_pos = (function membrane$webgl$get_client_pos(e){
var temp__5751__auto__ = e.targetTouches;
if(cljs.core.truth_(temp__5751__auto__)){
var touches = temp__5751__auto__;
var touch = (touches[(0)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [touch.clientX,touch.clientY], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}
});
membrane.webgl._on_mouse_down = (function membrane$webgl$_on_mouse_down(canvas,e){
var touch_check_QMARK__49546 = new cljs.core.Keyword(null,"touch-check?","touch-check?",2106774330).cljs$core$IFn$_invoke$arity$1(canvas);
if(cljs.core.not(cljs.core.deref(touch_check_QMARK__49546))){
if(cljs.core.truth_(e.targetTouches)){
new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686).cljs$core$IFn$_invoke$arity$1(canvas).removeEventListener("mousedown",membrane.webgl._on_mouse_down);
} else {
}

cljs.core.reset_BANG_(touch_check_QMARK__49546,true);
} else {
}

var rect_49547 = new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686).cljs$core$IFn$_invoke$arity$1(canvas).getBoundingClientRect();
var vec__49109_49548 = membrane.webgl.get_client_pos(e);
var client_x_49549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49109_49548,(0),null);
var client_y_49550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49109_49548,(1),null);
var pos_49551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client_x_49549 - rect_49547.left),(client_y_49550 - rect_49547.top)], null);
var button_49552 = e.button;
var mouse_down_QMARK__49553 = true;
try{membrane.ui.mouse_event(cljs.core.deref(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(canvas)),pos_49551,button_49552,mouse_down_QMARK__49553,null);
}catch (e49112){if((e49112 instanceof Object)){
var e_49555__$1 = e49112;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_49555__$1], 0));
} else {
throw e49112;

}
}
membrane.webgl.redraw(canvas);

var current_time_49557 = (new Date()).getTime();
var last_touch_49558 = new cljs.core.Keyword(null,"last-touch","last-touch",366626567).cljs$core$IFn$_invoke$arity$1(canvas);
var temp__5753__auto___49560 = cljs.core.deref(last_touch_49558);
if(cljs.core.truth_(temp__5753__auto___49560)){
var last_touch_time_49561 = temp__5753__auto___49560;
if(((current_time_49557 - last_touch_time_49561) < (300))){
e.stopPropagation();

e.preventDefault();
} else {
}
} else {
}

cljs.core.reset_BANG_(last_touch_49558,current_time_49557);

return null;
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(membrane.webgl.event_handlers,cljs.core.assoc,"touchstart",membrane.webgl._on_mouse_down,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["mousedown",membrane.webgl._on_mouse_down], 0));
membrane.webgl._on_mouse_up = (function membrane$webgl$_on_mouse_up(canvas,e){
var rect_49562 = new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686).cljs$core$IFn$_invoke$arity$1(canvas).getBoundingClientRect();
var vec__49118_49563 = membrane.webgl.get_client_pos(e);
var client_x_49564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49118_49563,(0),null);
var client_y_49565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49118_49563,(1),null);
var pos_49566 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client_x_49564 - rect_49562.left),(client_y_49565 - rect_49562.top)], null);
var button_49567 = e.button;
var mouse_down_QMARK__49568 = false;
try{membrane.ui.mouse_event(cljs.core.deref(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(canvas)),pos_49566,button_49567,mouse_down_QMARK__49568,null);
}catch (e49121){if((e49121 instanceof Object)){
var e_49572__$1 = e49121;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_49572__$1], 0));
} else {
throw e49121;

}
}
membrane.webgl.redraw(canvas);

return null;
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.webgl.event_handlers,cljs.core.assoc,"mouseup",membrane.webgl._on_mouse_up);
membrane.webgl._on_mouse_move = (function membrane$webgl$_on_mouse_move(canvas,e){
var rect_49573 = new cljs.core.Keyword(null,"canvas-elem","canvas-elem",-1514622686).cljs$core$IFn$_invoke$arity$1(canvas).getBoundingClientRect();
var vec__49128_49574 = membrane.webgl.get_client_pos(e);
var client_x_49575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49128_49574,(0),null);
var client_y_49576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49128_49574,(1),null);
var pos_49577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client_x_49575 - rect_49573.left),(client_y_49576 - rect_49573.top)], null);
try{cljs.core.doall.cljs$core$IFn$_invoke$arity$1(membrane.ui.mouse_move(cljs.core.deref(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(canvas)),pos_49577));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(membrane.ui.mouse_move_global(cljs.core.deref(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(canvas)),pos_49577));
}catch (e49131){if((e49131 instanceof Object)){
var e_49581__$1 = e49131;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e_49581__$1], 0));
} else {
throw e49131;

}
}
membrane.webgl.redraw(canvas);

return null;
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(membrane.webgl.event_handlers,cljs.core.assoc,"mousemove",membrane.webgl._on_mouse_move,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["touchmove",membrane.webgl._on_mouse_move], 0));
membrane.webgl.keymap = cljs.core.PersistentHashMap.fromArrays(["Backspace","ArrowUp","ArrowDown","Left","Down","ArrowRight","ArrowLeft","Up","Right","Shift","Enter"],[new cljs.core.Keyword(null,"backspace","backspace",-696007848),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"enter","enter",1792452624)]);
membrane.webgl._on_key_down = (function membrane$webgl$_on_key_down(canvas,e){
var raw_key_49585 = e.key;
var key_49586 = (((raw_key_49585.length > (1)))?cljs.core.get.cljs$core$IFn$_invoke$arity$3(membrane.webgl.keymap,raw_key_49585,new cljs.core.Keyword(null,"undefined","undefined",-1970511116)):raw_key_49585);
membrane.ui.key_event.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(canvas)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key_49586,null,null,null], 0));

membrane.ui.key_press.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(canvas)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key_49586], 0));

e.stopPropagation();

e.preventDefault();

return membrane.webgl.redraw(canvas);
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.webgl.event_handlers,cljs.core.assoc,"keydown",membrane.webgl._on_key_down);
membrane.webgl._on_key_up = (function membrane$webgl$_on_key_up(canvas,e){
e.stopPropagation();

e.preventDefault();

return membrane.webgl.redraw(canvas);
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(membrane.webgl.event_handlers,cljs.core.assoc,"keyup",membrane.webgl._on_key_up);

//# sourceMappingURL=membrane.webgl.js.map
