<template>
  <v-container>
    <v-row style="height:calc(100vh - 150px)">
      <v-col cols="2">
        <v-list>
          <v-list-item-group v-model="model">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="10" style="position:relative;height:100%;">
        <div class="button-area">
          <v-btn small color="primary">Save</v-btn>
          <v-btn small color="primary">BackTest</v-btn>
        </div>

        <div class="code">
          <codemirror
            style="height:100%;"
            v-model="code"
            :options="cmOptions"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import language js
import 'codemirror/mode/javascript/javascript.js'
// import theme style
import 'codemirror/theme/base16-dark.css'

export default {
  components: {},
  methods: {
    openDetail(item) {
      this.$refs.detail.open(item)
    }
  },
  data: () => ({
    code: 'const a = 1',
    cmOptions: {
      tabSize: 4,
      mode: 'text/javascript',
      theme: 'base16-dark',
      lineNumbers: true,
      line: true
      // more CodeMirror options...
    },
    items: [
      {
        icon: 'mdi-inbox',
        text: 'algo1'
      },
      {
        icon: 'mdi-star',
        text: 'algo2'
      },
      {
        icon: 'mdi-send',
        text: 'algo3'
      },
      {
        icon: 'mdi-email-open',
        text: 'algo3'
      }
    ],
    model: 1
  })
}
</script>
<style lang="less" scoped>
@buttonareaHeight: 30px;
.button-area {
  display: flex;
  justify-content: flex-end;
  height: @buttonareaHeight;
}
.code {
  width: 100%;
  height: calc(100% - @buttonareaHeight);
  ::v-deep .CodeMirror {
    height: 100%;
  }
}
</style>
