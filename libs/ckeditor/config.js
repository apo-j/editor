/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    // Define changes to default configuration here.
    // For complete reference see:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    // The toolbar groups arrangement, optimized for a single toolbar row.
    config.toolbarGroups = [
        //{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        //{ name: 'forms' },
        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
        '/',
        { name: 'links' },
        { name: 'insert' },//images links etc.
        //{ name: 'styles' },
        { name: 'colors' },
        //{ name: 'tools' },
        { name: 'others' },
        { name: 'editing',     groups: [ 'find', 'selection'/*, 'spellchecker'*/ ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] }
        //{ name: 'about' }
    ];

    // The default plugins included in the basic setup define some buttons that
    // are not needed in a basic editor. They are removed here.
    config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';

    // Dialog windows are also simplified.
    config.removeDialogTabs = 'link:advanced';
    //config.allowedContent = true;//use this line to desactivate content filter
    config.extraAllowedContent = "p h1 pre";
};

