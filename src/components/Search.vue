<template>
    <v-layout>
        <v-form class="search">
            <v-col cols="12" sm="8" md="6">
                <v-text-field 
                    outline
                    placeholder="work in progress..."
                    :searchString="searchString"
                    @keyup="handleChange"/>
                </v-col>
            <v-col>
                <v-btn
                    class="orange"
                    type="submit"
                    @click="handleSubmit"
                    >SEARCH</v-btn>
            </v-col>
        </v-form>
        <div class="search-results" v-for="results in selectorData" :key="results.id">
            <Selector v-show="handleSubmit"/>
        </div>
    </v-layout>
</template>

<script>
import { Selector } from './Selector.vue';

export default {
    name: 'Search',
    props: ['search', 'selectorData'],
    components: { Selector},
    data() {
        return {
            searchString: '',
            results
        }
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();
            this.$emit('search', this.searchString);
            this.searchString = ''; // reset search input
        },
        handleChange(event) {
            this.video.title = this.searchString;
        }
    }
}
</script>
<style>
    .v-form {
        align-items: baseline;
        margin-top: 10px;
    }
</style>
