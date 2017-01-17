(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   * Access the Cubbles-Component-Model:
   * > Access slot values:
   * slot 'a': this.getA(); | this.setA(value)
   */
  CubxPolymer({
    is: 'cubx-ckeditor',

    editor: null,

    /**
     * Manipulate an element’s local DOM when the element is created.
     */
    created: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function () {
    },

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function () {
    },

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
      this.replaceEditor();
    },

    /**
     *  Called when slot 'config' has changed
     */
    modelConfigChanged: function (newConfig) {
      if (this.editor) {
        this.editor.destroy();
      }
      this.replaceEditor(newConfig);
    },

    /**
     *  Called when slot 'config' has changed
     */
    modelDataChanged: function (newData) {
      this.editor.setData(newData)
    },

    /**
     * Replaces the current editor and add events listeners
     * @param config
     */
    replaceEditor: function (config) {
      this.editor = CKEDITOR.replace(this.$$('textarea'), config);
      this.editor.on('change', this.handleChangeEvent.bind(this));
      this.editor.on('blur', this.handleBlurEvent.bind(this));
    },

    /**
     * Handle the event fired when the editor changes its data value
     * @param {event} e
     */
    handleChangeEvent: function (e) {
      this.setDataChangeEvent(e.editor.getData());
    },

    /**
     * Handle the event fired when the editor loses the focus
     * @param {event} e
     */
    handleBlurEvent: function (e) {
      this.setDataBlurEvent(e.editor.getData());
    }
  });


}());
