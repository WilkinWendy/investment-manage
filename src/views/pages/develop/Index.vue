<template>
  <v-container>
    <v-row style="height:calc(100vh - 150px)">
      <v-col cols="2">
        <v-list>
          <v-subheader>Solutions</v-subheader>
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
      <v-col cols="10" style="position:relative;height:100%;overflow:auto;">
        <v-card>
          <v-toolbar flat>
            <v-btn small color="primary">Save</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              small
              color="primary"
              style="margin-right:5px;"
              @click="openBackTest"
            >
              Run Full BackTest
            </v-btn>
            <v-btn small color="primary">Build Algorithm</v-btn>
          </v-toolbar>

          <v-card-text>
            <form>
              <v-text-field
                v-model="formModel.name"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="formModel.desp"
                label="Description "
                required
              ></v-text-field>
              <div class="code">
                <codemirror
                  style="height:500px;"
                  v-model="code"
                  :options="cmOptions"
                />
              </div>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <Detail ref="detail"></Detail>
  </v-container>
</template>

<script>
import Detail from './Detail'
// import language js
import 'codemirror/mode/javascript/javascript.js'
// import theme style
import 'codemirror/theme/base16-dark.css'

export default {
  components: {
    Detail
  },
  methods: {
    openBackTest(item) {
      this.$refs.detail.open(item)
    }
  },
  data: () => ({
    code: 'const a = 1',
    formModel: {
      name: 'algo1',
      desc: 'simple description'
    },
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
  justify-content: space-between;
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
