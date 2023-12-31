export default {
    template: `
        <div class="flex gap-2 mt-4">
            <button 
                @click="$emit('update:currentTag', tag)"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs': true,"
                :class="{
                    'border-blue-500 text-blue-500': currentTag == tag
                }"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}