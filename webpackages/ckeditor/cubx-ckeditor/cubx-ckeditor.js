(function () {
  'use strict';
  CubxComponent({
    is: 'cubx-ckeditor',

    editor: null,

    /**
     *  Called when slot 'config' has changed
     */
    modelConfigChanged: function (newConfig) {
      if (this.editor) {
        this.editor.destroy();
      }
      this.appendEditor(newConfig);
    },

    /**
     *  Called when slot 'config' has changed
     */
    modelDataChanged: function (newData) {
      this.editor.setData(newData)
    },

    /**
     * Appends a new editor and add events listeners
     * @param config
     */
    appendEditor: function (config) {
      this.editor = CKEDITOR.appendTo(this.$$('#editorContainer'), config);
      this.editor.on('change', this.handleChangeEvent.bind(this));
      this.editor.on('blur', this.handleBlurEvent.bind(this));
    },

    /**
     * Handle the event fired when the editor changes its data value
     * @param {event} e
     */
    handleChangeEvent: function (e) {
      this.setDataAfterChange(e.editor.getData());
    },

    /**
     * Handle the event fired when the editor loses the focus
     * @param {event} e
     */
    handleBlurEvent: function (e) {
      this.setDataAfterBlur(e.editor.getData());
    }
  });
}());
