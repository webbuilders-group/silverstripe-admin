webpackJsonp([1],{"./client/src/legacy/TinyMCE_sslink-external.js":function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),a=i(r),l=t(13),o=i(l),s=t(0),d=i(s),c=t(7),u=i(c),f=t(1),p=i(f),m=t(19),x=t(6);o.default.addAction("sslink",{text:a.default._t("Admin.LINKLABEL_EXTERNALURL","Link to external URL"),onclick:function(e){return e.execCommand("sslinkexternal")},priority:52});var k={init:function(e){e.addCommand("sslinkexternal",function(){window.jQuery("#"+e.id).entwine("ss").openLinkExternalDialog()})}},_="insert-link__dialog-wrapper--external",g=(0,x.loadComponent)((0,m.createInsertLinkModal)("SilverStripe\\Admin\\LeftAndMain","EditorExternalLink"));p.default.entwine("ss",function(e){e("textarea.htmleditor").entwine({openLinkExternalDialog:function(){var n=e("#"+_);n.length||(n=e('<div id="'+_+'" />'),e("body").append(n)),n.addClass("insert-link__dialog-wrapper"),n.setElement(this),n.open()}}),e("#"+_).entwine({renderModal:function(e){var n=this,t=function(){return n.close()},i=function(){return n.handleInsert.apply(n,arguments)},r=this.getOriginalAttributes(),l=tinymce.activeEditor.selection,o=l.getContent()||"",s=l.getNode().tagName,c="A"!==s&&""===o.trim();u.default.render(d.default.createElement(g,{isOpen:e,onInsert:i,onClosed:t,title:a.default._t("Admin.LINK_EXTERNAL","Insert external link"),bodyClassName:"modal__dialog",className:"insert-link__dialog-wrapper--external",fileAttributes:r,identifier:"Admin.InsertLinkExternalModal",requireLinkText:c}),this[0])},buildAttributes:function(e){var n=this._super(e),t=n.href;return t.match(/:\/\//)||(t=window.location.protocol+"//"+t),t=t.replace(/.*:\/\/(#.*)$/,"$1"),t.match(/:\/\/$/)&&(t=""),n.href=t,n}})}),tinymce.PluginManager.add("sslinkexternal",function(e){return k.init(e)}),n.default=k},13:function(e,n){e.exports=TinyMCEActionRegistrar},19:function(e,n){e.exports=InsertLinkModal},2:function(e,n){e.exports=i18n},6:function(e,n){e.exports=Injector}},["./client/src/legacy/TinyMCE_sslink-external.js"]);