<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-subheader>Your Managed Portfolios</v-subheader>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-toolbar flat color="white">
            <v-text-field
              text
              solo
              flat
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
            ></v-text-field>
            <v-btn icon>
              <v-icon>filter_list</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table
              :headers="complex.headers"
              :search="search"
              :items="complex.items"
              :items-per-page-options="[10, 25, 50, { text: 'All', value: -1 }]"
              class="elevation-1"
              item-key="name"
              show-select
              v-model="complex.selected"
            >
              <template v-slot:item.avatar="{ item }">
                <v-avatar class="ma-3">
                  <img :src="item.avatar" alt="avatar" />
                </v-avatar>
              </template>
              <template v-slot:item.action="{ item }">
                <v-menu>
                  <template v-slot:activator="{ on: menu }">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on: tooltip }">
                        <v-btn icon v-on="{ ...menu }">
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>
                      <span>Action</span>
                    </v-tooltip>
                  </template>
                  <v-list class="pa-0" dense>
                    <v-list-item
                      v-for="action in actions"
                      :key="action.text"
                      @click="action.click(item)"
                    >
                      <v-list-item-icon class="mr-2">
                        <v-icon small>{{ action.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>{{ action.text }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-subheader>Your Published Strategies</v-subheader>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-toolbar flat color="white">
            <v-text-field
              text
              solo
              flat
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
            ></v-text-field>
            <v-btn icon>
              <v-icon>filter_list</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table
              :headers="complex.headers"
              :search="search"
              :items="complex.items"
              :items-per-page-options="[10, 25, 50, { text: 'All', value: -1 }]"
              class="elevation-1"
              item-key="name"
              show-select
              v-model="complex.selected"
            >
              <template v-slot:item.avatar="{ item }">
                <v-avatar class="ma-3">
                  <img :src="item.avatar" alt="avatar" />
                </v-avatar>
              </template>
              <template v-slot:item.action="{ item }">
                <v-menu>
                  <template v-slot:activator="{ on: menu }">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on: tooltip }">
                        <v-btn icon v-on="{ ...menu }">
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>
                      <span>Action</span>
                    </v-tooltip>
                  </template>
                  <v-list class="pa-0" dense>
                    <v-list-item
                      v-for="action in actions"
                      :key="action.text"
                      @click="action.click(item)"
                    >
                      <v-list-item-icon class="mr-2">
                        <v-icon small>{{ action.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>{{ action.text }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-subheader>Your Published Algorithm</v-subheader>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-toolbar flat color="white">
            <v-text-field
              text
              solo
              flat
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
            ></v-text-field>
            <v-btn icon>
              <v-icon>filter_list</v-icon>
            </v-btn>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table
              :headers="complex.headers"
              :search="search"
              :items="complex.items"
              :items-per-page-options="[10, 25, 50, { text: 'All', value: -1 }]"
              class="elevation-1"
              item-key="name"
              show-select
              v-model="complex.selected"
            >
              <template v-slot:item.avatar="{ item }">
                <v-avatar class="ma-3">
                  <img :src="item.avatar" alt="avatar" />
                </v-avatar>
              </template>
              <template v-slot:item.action="{ item }">
                <v-menu>
                  <template v-slot:activator="{ on: menu }">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on: tooltip }">
                        <v-btn icon v-on="{ ...menu }">
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>
                      <span>Action</span>
                    </v-tooltip>
                  </template>
                  <v-list class="pa-0" dense>
                    <v-list-item
                      v-for="action in actions"
                      :key="action.text"
                      @click="action.click(item)"
                    >
                      <v-list-item-icon class="mr-2">
                        <v-icon small>{{ action.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-title>{{ action.text }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Items as Users } from '@/api/user'
export default {
  components: {},
  data() {
    return {
      complex: {
        selected: [],
        headers: [
          {
            text: 'Avatar',
            value: 'avatar'
          },
          {
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Email',
            value: 'email'
          },
          {
            text: 'Phone',
            value: 'phone'
          },
          {
            text: 'Action',
            value: 'action'
          }
        ],
        items: Users
      },
      actions: [
        {
          text: 'View Item',
          icon: 'mdi-eye',
          click: this.handleViewItem
        },
        {
          text: 'Edit Item',
          icon: 'mdi-pencil',
          click: this.handleEditItem
        },
        {
          text: 'Delete Item',
          icon: 'mdi-close',
          click: this.handleDeleteItem
        }
      ],
      search: ''
    }
  }
}
</script>

<style></style>
