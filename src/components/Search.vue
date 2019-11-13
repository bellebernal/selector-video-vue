<template>
    <form class="search">
        <input 
            type="text"
            placeholder="work in progress"
            :value="videoTitle"
            @keyup="handleChange"/>
        <v-btn
            class="orange"
            type="submit"
            @click="handleSubmit"
            >SEARCH</v-btn>
    </form>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
    name: 'Search',
    props: ['search'],
    setup({search}, {emit}) {
        const videoTitle = ref(search);  
        //  ref contains a single prop called value and takes the value of the argument passed into it (i.e. the search prop) --it acts as a reactive wrapper around the originial value
        //  no need to reference the value property in the template as Vue will unwrap it for us.  So, if we pass in an object it will be highly reactive
        return {
            videoTitle,
            handleSubmit(event) {
                event.preventDefault();
                emit('search', videoTitle.value);
            },
            handleChange(event) {
                videoTitle.value = event.target.value;
            }
        }
    }
};
</script>
