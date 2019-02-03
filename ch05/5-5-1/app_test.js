// ミックスインの定義
var Sharable = {
  data: function() {
    return {
      _isProcessing: false
    }
  },
  methods: {
    share: function() {
      if (this._isProcessing) {
        return
      }
      if (!window.confirm('シェアしますか?')) {
        return
      }
      this._isProcessing = true
      // 実際はここでSNSのSDKのAPIを呼び出す
      setTimeout(() => {
        window.alert(' シェアしました ')
        this._isProcessing = false
      }, 300)
    }
  }
}

var IconShareButton = {
  mixins: [Sharable],
  template: `
    <button @click="share"><i class="fas fa-share-square"></i></button>
  `
}
var TextShareButton = {
  mixins: [Sharable],
  template: `
    <button @click="share">{{ buttonLabel }}</button>
  `,
  data: function() {
    return {
      buttonLabel: 'シェアする'
    }
  },
  methods: {
    share() {
      // どちらのメソッドが呼ばれる？
      window.alert('コンポーネントからシェアしました')
    }
  }
}

new Vue({
  el: '#app',
  components: {
    IconShareButton,
    TextShareButton
  }
})
